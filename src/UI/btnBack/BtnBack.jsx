import React from "react";
import Style from "./BtnBack.module.css";
const BtnBack = ({ children, onClick }) => {
  return (
    <button className={Style.btn__back} onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnBack;
