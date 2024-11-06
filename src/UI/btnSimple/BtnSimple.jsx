import React, { Children } from "react";
import Style from "./BtnSimple.module.css";
const BtnSimple = ({ ownStyle, onClick, children }) => {
  return (
    <div
      className={Style.btn__simple}
      style={{ ...ownStyle }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BtnSimple;
