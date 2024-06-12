import React from "react";
import Style from "./ResultItem.module.css";
import InfoDiagnosticsList from "../infoDiagnosticsList/InfoDiagnosticsList";
import {
  getGradientByValue,
  getColourByValue,
} from "../../services/colorPerformance/getColourByValue.js";
const ResultItem = ({ score, listAudits, children, styleSetter }) => {
  return (
    <>
      {listAudits ? (
        <div className={Style.container__item}>
          <div
            className={Style.name__performance__item}
            style={{
              background: `${styleSetter.TextGradient}`,
              backgroundClip: "text",
            }}
          >
            {children}
          </div>
          <div
            className={Style.score__performance__item}
            style={{
              background: `${getColourByValue(score)}`,
            }}
          >
            <div
              className={Style.current__performance__metrics}
              style={{
                width: `${score * 100}%`,
                background: `${getGradientByValue(score)}`,
              }}
            >
              <div className={Style.digital__performance__metrics}>
                {Math.round(score * 100)}%
              </div>
            </div>
          </div>

          <InfoDiagnosticsList
            className={Style.info__diagnostics__list}
            listDiagnostics={listAudits}
            styleSetter={styleSetter.TextDiagnosticInfo}
          />
        </div>
      ) : (
        <h3 style={{ color: "white" }}>NOT FOUND ITEM </h3>
      )}
    </>
  );
};

export default ResultItem;
