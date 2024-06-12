import React, { useEffect, useMemo, useState } from "react";
import Style from "./ComparingTable.module.css";
import Story from "../../story/Story";
import CompareItems from "../compareItems/CompareItems";
import RingLoader from "react-spinners/RingLoader";
import { useDispatch, useSelector } from "react-redux";

import { Filter } from "../../filter/Filter.jsx";

import SepLine from "../../../UI/sepLine/SepLine.jsx";
import Metrics from "../../metrics/Metrics.jsx";
import { setComparableObjectNewVersion } from "../../../services/setComparableObject/setComparableObjectNewVersion.js";
import { setStyleSetter } from "../../../services/setComparableObject/setStyleSetter.js";
import ErrorText from "../../errors/errorText/ErrorText.jsx";
import { fetchItemPageSpeedFromStory } from "../../../data/redux/slices/pageSpeedSlice.js";

const ComparingTable = ({ valueInput, setDefaultValueForUrl }) => {
  const dataPerformanceSelector = useSelector((state) => state.pageSpeed); //sliseSpeedPage. Answer Server
  const dispatch = useDispatch();

  const status = dataPerformanceSelector.status;
  const filterSpeedPage = dataPerformanceSelector.filterDataPages;
  const versionsSite = dataPerformanceSelector.compareData;
  const comparableFreshVersionObj = setComparableObjectNewVersion(
    dataPerformanceSelector
  );
  const comparableOldVersionObj = setStyleSetter(versionsSite.oldVersionSite);

  const handlefnGetItemByIdForCompareVerisonSites = (speedPageId) => {
    dispatch(fetchItemPageSpeedFromStory({ speedPageId }));
    setDefaultValueForUrl();
  };

  return (
    <>
      <div className={Style.container__table}>
        {status == "Loading" ? (
          <div className={Style.loader}>
            <RingLoader
              color={"var(--loader-color)"}
              loading={"loading"}
              size={180}
            />
          </div>
        ) : (
          <>
            {comparableOldVersionObj &&
            comparableFreshVersionObj &&
            valueInput.length < 3 ? (
              dataPerformanceSelector.status == "Error" ? (
                <ErrorText infoError={dataPerformanceSelector.infoError} />
              ) : (
                <>
                  <div className={Style.additional__info}>
                    * - old version of site
                  </div>
                  <div className={Style.table__separate__items__and__filter}>
                    <div className={Style.comparing__part}>
                      {filterSpeedPage.map((pageItem) => {
                        return (
                          <CompareItems
                            key={pageItem}
                            firstItem={
                              comparableFreshVersionObj
                                .speedPagePerformanceItemsObj[pageItem]
                            }
                            secondItem={
                              comparableOldVersionObj
                                .speedPagePerformanceItemsObj[pageItem]
                            }
                          />
                        );
                      })}
                    </div>
                    <div className={Style.filter__part}>
                      <Filter />
                    </div>
                  </div>

                  <div className={Style.sepLine__margin}>
                    <SepLine />
                  </div>
                  <Metrics
                    metricsDetailsAudits={comparableFreshVersionObj.metrics}
                    metricsTitle={"CURRENT VERSION"}
                  >
                    {comparableFreshVersionObj.siteUrl}
                  </Metrics>
                  <Metrics
                    metricsDetailsAudits={comparableOldVersionObj.metrics}
                    metricsTitle={"PAST VERSION"}
                  >
                    {comparableOldVersionObj.siteUrl}
                  </Metrics>
                </>
              )
            ) : null}
          </>
        )}

        <div className={Style.sepLine__margin}>
          <SepLine />
        </div>

        <Story fnTestAnalizSite={handlefnGetItemByIdForCompareVerisonSites} />
      </div>
    </>
  );
};

export default ComparingTable;
