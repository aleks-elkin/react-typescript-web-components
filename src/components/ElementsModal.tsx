import React, { FunctionComponent, useRef, useEffect } from "react";
import "@tradeshift/elements.modal";
import {
  TSModal,
  customEventNames as ModalEventsNames,
} from "@tradeshift/elements.modal";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-modal":
        | TSModal
        | React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
          >;
    }
  }
}

export const ElementsModal: FunctionComponent<{
  size: string;
  title: string;
  visible: boolean;
  closeHandler: (e: Event) => void;
}> = ({ size, title, visible, children, closeHandler }) => {
  const modalRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ref = modalRef.current;
    if (!ref) return;

    const listener = (e: Event) => closeHandler(e);
    ref.addEventListener(ModalEventsNames.CLOSED, listener);
    // remove event on component unmount
    return () => {
      ref.removeEventListener(ModalEventsNames.CLOSED, listener);
    };
  }, [modalRef, closeHandler]);
  return visible ? (
    <ts-modal data-size={size} data-title={title} data-visible ref={modalRef}>
      <div slot="main">{children}</div>
    </ts-modal>
  ) : (
    <ts-modal data-size={size} data-title={title} ref={modalRef}>
      <div slot="main">{children}</div>
    </ts-modal>
  );
};
