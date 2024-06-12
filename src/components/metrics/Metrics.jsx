import React from "react";
import Style from "./Metrics.module.css";
import BlockResultMetric from "./blockResultMetric/BlockResultMetric";
import { getColourByValueMetrics } from "../../services/colorPerformance/getColourByValueMetrics";
const Metrics = ({ metricsDetailsAudits, metricsTitle = "" }) => {
  const metrics = metricsDetailsAudits;

  return (
    <div className={Style.container__metrics}>
      <div className={Style.wrapper__metrics}>
        <div className={Style.title__metrics}>{metricsTitle}</div>
        <div className={Style.block__result__metrics}>
          {metrics.length > 0
            ? metrics.map((metrics) => (
                <BlockResultMetric
                  key={metrics.title + metrics.numericValue}
                  resultMetric={metrics.numericValue}
                  colorByValue={getColourByValueMetrics(metrics.score)}
                >
                  {metrics.title}
                </BlockResultMetric>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
