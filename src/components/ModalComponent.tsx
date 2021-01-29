import React, { useState } from "react";
import { ElementsButton } from "./ElementsButton";
import { ElementsModal } from "./ElementsModal";
import { ElementsCheckbox } from "./ElementsCheckbox";
import { ElementsAside } from "./ElementsAside";
import { Checkbox } from "./Checkbox";
import {
  types as ButtonTypes,
  sizes as ButtonSizes,
} from "@tradeshift/elements.button";
import "@tradeshift/elements.button-group";
import "@tradeshift/elements.note";

export const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAside, setShowAside] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const clickHandler = function () {
    setShowModal(!showModal);
  };
  const closeHandler = function () {
    setShowModal(!showModal);
  };
  const clickLeftHandler = function () {
    console.log("is it checked: " + !checkBox);
    setCheckBox(!checkBox);
  };
  const checkedHandler = function (checked: boolean) {
    setCheckBox(!checkBox);
    setShowAside(checked);
  };
  return (
    <React.Fragment>
      <ElementsModal
        size="large"
        title="Initial title"
        visible={showModal}
        closeHandler={closeHandler}
      >
        <div className="top-block">
          <div className="checkbox-container">
            <ElementsCheckbox
              checkedHandler={checkedHandler}
              checked={checkBox}
            />
          </div>
          <div className="top-block-end">End block text</div>
        </div>
        <h1>Some content here</h1>
      </ElementsModal>

      <div className="button-group">
        <ElementsButton
          type={ButtonTypes.ACCEPT}
          size={ButtonSizes.MACRO}
          clickHandler={clickLeftHandler}
        >
          Click me!
        </ElementsButton>

        <ElementsButton
          type={ButtonTypes.DANGER}
          size={ButtonSizes.MICRO}
          clickHandler={clickHandler}
        >
          Do not click!
        </ElementsButton>
      </div>

      <ElementsAside
        label="Test"
        visible={showAside}
        clickHandler={checkedHandler}
      >
        <ts-note slot="note">Takimata sed sea lorem kasd sit est.</ts-note>
        <span slot="main">Aside content</span>
        <div slot="footer">
          <ElementsButton type={ButtonTypes.PRIMARY} size={ButtonSizes.MACRO}>
            Click
          </ElementsButton>
        </div>
      </ElementsAside>
    </React.Fragment>
  );
};
