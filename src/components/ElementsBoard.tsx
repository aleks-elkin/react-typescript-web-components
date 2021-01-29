import React, { FunctionComponent } from "react";
import "@tradeshift/elements.board";

export const ElementsBoard: FunctionComponent<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <ts-board data-title={title}>
      <div>{children}</div>
    </ts-board>
  );
};
