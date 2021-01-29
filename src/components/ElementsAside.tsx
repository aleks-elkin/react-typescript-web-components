import React, { FunctionComponent, useRef, useState } from "react";
import "@tradeshift/elements.aside";
import useMutationObserver from "@rooks/use-mutation-observer";

declare interface TSAsideProps {
  dir?: "rtl" | "ltr" | "auto";
  title?: string;
  visible?: boolean;
  busy?: string;
  noCloseOnEscKey?: boolean;
  hasFoot?: boolean;
  hasPlatformObject?: boolean;
}

export const ElementsAside: FunctionComponent<{
  label: string;
  visible: boolean;
  clickHandler: (visible: boolean) => void;
}> = ({ label, visible, clickHandler, children }) => {
  const asideRef = useRef<TSAsideProps & HTMLElement>(null);
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
