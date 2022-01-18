import React, { FunctionComponent, useRef } from "react";
import "@tradeshift/elements.aside";
import { TSAside } from "@tradeshift/elements.aside";
import useMutationObserver from "@rooks/use-mutation-observer";

export const ElementsAside: FunctionComponent<{
  label: string;
  visible: boolean;
  clickHandler: (visible: boolean) => void;
}> = ({ label, visible, clickHandler, children }) => {
  const asideRef = useRef<TSAside & HTMLElement>(null);
  useMutationObserver(asideRef, (mutations: any) => {
    console.log(mutations);
    if (asideRef.current) {
      clickHandler(asideRef.current.visible || false);
    }
  });

  return visible ? (
    <ts-aside data-title={label} ref={asideRef} data-visible dir="auto">
      {children}
    </ts-aside>
  ) : null;
};
