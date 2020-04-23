import React, { FunctionComponent, useRef, useEffect } from "react";
import "@tradeshift/elements.button";
import {
  TSButton,
  sizes as ButtonSizes,
  types as ButtonTypes,
} from "@tradeshift/elements.button";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-button":
        | TSButton
        | React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
          >;
    }
  }
}

export const ElementsButton: FunctionComponent<{
  size: ButtonSizes;
  type: ButtonTypes;
  clickHandler?: (e: Event) => void;
}> = ({ size, type, clickHandler, children }) => {
  const btnRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ref = btnRef.current;
    if (!ref) return;
    if (!clickHandler) return;
    const buttonListener = (e: Event) => clickHandler(e);
    ref.addEventListener("button-click", buttonListener);
    // remove event on component unmount
    return () => {
      ref.removeEventListener("button-click", buttonListener);
    };
  }, [btnRef, clickHandler]);
  return (
    <ts-button size={size} type={type} ref={btnRef}>
      {children}
    </ts-button>
  );
};
