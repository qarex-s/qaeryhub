import React from "react";
import Style from "./BlockResultMetric.module.css";
import SepLineVertical from "../../../UI/sepLine/SepLineVertical";
const BlockResultMetric = ({ children, resultMetric, colorByValue }) => {
  resultMetric = Math.round(resultMetric * 10) / 10;
  return (
    <div className={Style.container__block__result__metric}>
      <div className={Style.separate__metrics}>
        <SepLineVertical />
      </div>
      <div className={Style.info__metric}>
        <div className={Style.title__metric}>
          <p
            style={{
              background: colorByValue,
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {children}
          </p>
        </div>
        <div
          className={Style.result__metric}
          style={{
            background: colorByValue,
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {resultMetric} {children !== "Cumulative Layout Shift" ? "ms" : ""}
        </div>
      </div>
    </div>
  );
};

export default BlockResultMetric;
