import React from "react";
import InfoDiagnostic from "./infoDiagnostic/InfoDiagnostic";
import Style from "./InfoDiagnosticsList.module.css";
const InfoDiagnosticsList = ({ listDiagnostics, styleSetter }) => {
  return (
    <div className={Style.container__info__diagnostics__list}>
      {listDiagnostics.map((diagnostic) =>
        diagnostic ? (
          <InfoDiagnostic
            key={diagnostic.title}
            diagnostic={diagnostic}
            styleSetter={styleSetter}
          />
        ) : null
      )}
    </div>
  );
};

export default InfoDiagnosticsList;
