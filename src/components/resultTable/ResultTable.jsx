import React, { useState } from "react";
import Style from "./ResultTable.module.css";
import { useSelector } from "react-redux";
import RingLoader from "react-spinners/RingLoader";

import { createAudits } from "../../API/APIServer.js";

import ResultItem from "../resultItem/ResultItem";
import { Filter } from "../filter/Filter";
import Metrics from "../metrics/Metrics.jsx";
import SepLine from "../../UI/sepLine/SepLine.jsx";
import Recomendation from "../recomendation/Recomendation.jsx";
import StartFinding from "../startFinding/StartFinding.jsx";
import ErrorText from "../errors/errorText/ErrorText.jsx";
import { setComparableObjectNewVersion } from "../../services/setComparableObject/setComparableObjectNewVersion.js";
import BtnSave from "../../UI/btnSave/BtnSave.jsx";
import { setStyleSetter } from "../../services/setComparableObject/setStyleSetter.js";
import Notification from "../notification/Notification.jsx";

const ResultTable = () => {
  const PerformanceSelector = useSelector((state) => state.pageSpeed);

  let comparablePerformanceItems = null;

  PerformanceSelector.pageFromStory
    ? (comparablePerformanceItems = setStyleSetter(
        PerformanceSelector.pageFromStory
      ))
    : (comparablePerformanceItems =
        setComparableObjectNewVersion(PerformanceSelector));

  const [visible, setVisible] = useState(false);
  const SaveAnalizOfSite = () => {
    createAudits(PerformanceSelector);
    setVisible(true);
  };

  return (
    <>
      <div className={Style.container__table}>
        {PerformanceSelector.status == "Loading" ? (
          <div className={Style.loader}>
            <RingLoader
              color={"var(--loader-color)"}
              loading={"loading"}
              size={180}
            />
          </div>
        ) : PerformanceSelector.status == "Error" ? (
          <ErrorText infoError={PerformanceSelector.infoError} />
        ) : (
          <>
            {comparablePerformanceItems ? (
              <>
                <Notification
                  isVisible={visible}
                  onClose={() => setVisible(false)}
                >
                  You successfull SAVED data
                </Notification>
                <div className={Style.table__separate__items__filter}>
                  <div className={Style.table__result__items}>
                    {PerformanceSelector.filterDataPages.map((pageItem) => {
                      return (
                        <ResultItem
                          key={pageItem}
                          {...comparablePerformanceItems
                            .speedPagePerformanceItemsObj[pageItem]}
                        >
                          {
                            comparablePerformanceItems
                              .speedPagePerformanceItemsObj[pageItem].title
                          }
                        </ResultItem>
                      );
                    })}
                  </div>
                  <div className={Style.table__results__filter}>
                    <Filter />
                  </div>
                </div>
                <BtnSave onClick={SaveAnalizOfSite}>SAVE</BtnSave>
              </>
            ) : (
              <StartFinding />
            )}

            {comparablePerformanceItems ? (
              <>
                <div className={Style.sepLine__space}>
                  <SepLine />
                </div>
                <Metrics
                  metricsDetailsAudits={comparablePerformanceItems.metrics}
                  metricsTitle={"METRICS"}
                />
              </>
            ) : null}

            {!PerformanceSelector.pageFromStory &&
            comparablePerformanceItems ? (
              <>
                <div className={Style.sepLine__space}>
                  <SepLine />
                </div>
                <Recomendation />
              </>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default ResultTable;
