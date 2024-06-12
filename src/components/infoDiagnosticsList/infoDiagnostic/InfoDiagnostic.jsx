import React from "react";
import Style from "./InfoDiagnostic.module.css";
const InfoDiagnostic = ({ diagnostic, styleSetter }) => {
  return (
    <div className={Style.container__info__diagnostic}>
      <div className={Style.diagnostic__title}>
        <h5
          style={{
            background: `${styleSetter}`,
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {"- " + diagnostic.title}
        </h5>
      </div>
    </div>
  );
};

export default InfoDiagnostic;
