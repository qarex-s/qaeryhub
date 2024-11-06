import React, { Children } from "react";
import Style from "./BtnSimple.module.css";
const BtnSimple = ({ onClick, children }) => {
  return (
    <div className={Style.btn__simple} onClick={onClick}>
      {children}
    </div>
  );
};

export default BtnSimple;
