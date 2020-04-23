import React, { FunctionComponent } from "react";
import "@tradeshift/elements.board";
import { TSBoard } from "@tradeshift/elements.board";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-board":
        | TSBoard
        | React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
          >;
    }
  }
}

export const ElementsBoard: FunctionComponent<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <ts-board data-title={title}>
      <div slot="main">{children}</div>
    </ts-board>
  );
};
