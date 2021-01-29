import React from "react";
import logo from "./logo.svg";
import "@tradeshift/elements/src/vars.css";
import "./App.css";
import { ElementsBoard } from "./components/ElementsBoard";
import { ModalComponent } from "./components/ModalComponent";
import { ElementsButton } from "./components/ElementsButton";
import {
  sizes as ButtonSizes,
  types as ButtonTypes,
} from "@tradeshift/elements.button";
import "@tradeshift/elements.header";

function App() {
  return (
    <div className="app">
      <ts-header title="Header" color="white">
        <ElementsButton
          size={ButtonSizes.MACRO}
          type={ButtonTypes.SECONDARY}
          icon="close-clear"
        ></ElementsButton>
      </ts-header>
      <ElementsBoard title="Main page">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="Logo"></img>
        </header>
        <ModalComponent />
      </ElementsBoard>
    </div>
  );
}

export default App;
