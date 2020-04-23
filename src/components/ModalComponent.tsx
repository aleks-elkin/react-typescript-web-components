import React, { useState } from "react";
import { ElementsButton } from "./ElementsButton";
import { ElementsModal } from "./ElementsModal";
import {
  types as ButtonTypes,
  sizes as ButtonSizes,
} from "@tradeshift/elements.button";

export const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const clickHandler = function () {
    setShowModal(!showModal);
  };
  const closeHandler = function () {
    setShowModal(!showModal);
  };
  return (
    <React.Fragment>
      <ElementsModal
        size="medium"
        title="Ha-ha!"
        visible={showModal}
        closeHandler={closeHandler}
      >
        <h1>I told you!</h1>
      </ElementsModal>
      <div className="button-group">
        <ElementsButton type={ButtonTypes.ACCEPT} size={ButtonSizes.MACRO}>
          Click me!
        </ElementsButton>
        <ElementsButton
          type={ButtonTypes.DANGER}
          size={ButtonSizes.MICRO}
          clickHandler={clickHandler}
        >
          Do not click! Nothing happened!
        </ElementsButton>
      </div>
    </React.Fragment>
  );
};
