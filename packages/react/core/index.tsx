import React from "react";
import ReactDOM from "react-dom";
import { MODAL_ID } from "../constants/keys";

export class Core {
  constructor() {
    this.renderTest();
  }

  private renderTest() {
    const el = document.createElement("div");
    el.id = MODAL_ID;
    document.body.appendChild(el);
    ReactDOM.render(<div>hi</div>, document.getElementById(MODAL_ID));
  }
}
