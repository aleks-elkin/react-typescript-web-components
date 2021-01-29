import React, { FunctionComponent, useRef, useEffect } from "react";
import "@tradeshift/elements.checkbox/lib/checkbox.esm";
import { TSCheckbox } from "@tradeshift/elements.checkbox";

import useMutationObserver from "@rooks/use-mutation-observer";

export const ElementsCheckbox: FunctionComponent<{
  label?: string;
  checked?: boolean;
  checkedHandler: (checked: boolean) => void;
}> = ({ label, checked, checkedHandler, children }) => {
  const checkRef = useRef<TSCheckbox & HTMLElement>(null);
  // useMutationObserver(checkRef, (mutations: any) => {
  //   // console.log(mutations);
  //   if (checkedHandler && checkRef.current) {
  //     checkedHandler(!!checkRef.current.checked);
  //     console.log(checkRef.current.checked);
  //   }
  // });

  useEffect(() => {
    const ref = checkRef.current;
    if (!ref) return;

    // define a new observer
    const obs = new MutationObserver(function (mutations) {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          console.log(ref.checked);
          checkedHandler(!!ref.checked);
        }
      });
    });
    // have the observer observe foo for changes in children
    obs.observe(ref, { attributes: true });

    return () => obs.disconnect();
  }, [checkRef, checkedHandler]);

  const clickHandler = function (evt: any) {
    console.log(evt);
  };

  return checked ? (
    <ts-checkbox
      data-label={label}
      ref={checkRef}
      onClick={clickHandler}
      checked
      value="5"
    >
      {children}
    </ts-checkbox>
  ) : (
    <ts-checkbox
      data-label={label}
      ref={checkRef}
      value="5"
      onClick={clickHandler}
    >
      {children}
    </ts-checkbox>
  );
};
