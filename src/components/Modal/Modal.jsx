import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

export function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal"> {children} </div>,
    document.getElementById("modal")
  );
}
