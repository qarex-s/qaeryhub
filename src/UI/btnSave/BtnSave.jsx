import React from "react";
import Style from "./BtnSave.module.css";
const BtnSave = ({ children, onClick }) => {
  return (
    <button className={Style.btn__save} onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnSave;
