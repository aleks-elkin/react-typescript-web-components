import React from "react";
import logo from "./logo.svg";
import "@tradeshift/elements/src/vars.css";
import "./App.css";
import { ElementsBoard } from "./components/ElementsBoard";
import { ModalComponent } from "./components/ModalComponent";

function App() {
  return (
    <div className="app">
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
