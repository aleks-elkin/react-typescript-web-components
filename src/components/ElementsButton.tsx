import React, { FunctionComponent, useRef, useEffect } from "react";
import "@tradeshift/elements.button";
import { TSButton } from "@tradeshift/elements.button";

export const ElementsButton: FunctionComponent<{
  size: any;
  type: any;
  icon?: string;
  disabled?: boolean;
  clickHandler?: (e: Event) => void;
}> = ({ size, type, icon, disabled, clickHandler, children }) => {
  const btnRef = useRef<TSButton & HTMLElement>(null);
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
  if (disabled) {
    return (
      <ts-button
        size={size}
        type={type}
        ref={btnRef}
        disabled
        icon={icon || undefined}
        onClick={() => console.log("button clicked!")}
        grouped
      >
        {children}
      </ts-button>
    );
  }
  return (
    <ts-button
      size={size}
      type={type}
      ref={btnRef}
      icon={icon || undefined}
      onClick={() => console.log("button clicked!")}
      grouped
    >
      {children}
    </ts-button>
  );
};
