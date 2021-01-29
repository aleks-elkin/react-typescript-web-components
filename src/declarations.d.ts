import React from "react";
import { TSModalProps } from "@tradeshift/elements.modal";
import { TSCheckbox } from "@tradeshift/elements.checkbox";
import { TSButton } from "@tradeshift/elements.button";
import { TSBoard } from "@tradeshift/elements.board";
import { TSAside } from "@tradeshift/elements.aside";
import { TSButtonGroup } from "@tradeshift/elements.button-group";
import { TSHeader } from "@tradeshift/elements.header";
import { TSNote } from "@tradeshift/elements.note";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-aside": TSAside &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

      "ts-board": TSBoard &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

      "ts-button": TSButton &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

      "ts-button-group": TSButtonGroup &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

      "ts-modal": TSModalProps &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

      "ts-checkbox": TSCheckbox &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

      "ts-header": TSHeader &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

      "ts-note": TSNote &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
