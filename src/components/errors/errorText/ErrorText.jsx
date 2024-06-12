import React from "react";
import Style from "./ErrorText.module.css";
const ErrorText = ({ infoError }) => {
  return (
    <div className={Style.container__error_text}>
      <div className={Style.title__error_text}>
        <h3 className={Style.text__error_text}>ERROR</h3>
        <h3 className={Style.info__error_text}> {infoError}</h3>
      </div>
    </div>
  );
};

export default ErrorText;
