import React from "react";
import Style from "./FilterInfoQuery.module.css";
import InfoQueryItem from "./infoQueryItem/InfoQueryItem";
import SepLine from "../../../UI/sepLine/SepLine";
import { useSelector } from "react-redux";
const FitlerInfoQuery = () => {
  const selector = useSelector((state) => state.pageSpeed);
  const selectorAnswerServer = selector.answerServer;

  return (
    <div className={Style.container__info__query}>
      <div className={Style.wrapper__info__quary}>
        <div className={Style.title__info__query}>
          <h3 className={Style.general__title__query}>All DATA</h3>
        </div>
        {selectorAnswerServer ? (
          <div className={Style.list__info__quary}>
            <InfoQueryItem
              title={"GENERAL PERFORMANCE:"}
              info={
                selectorAnswerServer.loadingExperience
                  ? selectorAnswerServer.loadingExperience.overall_category
                  : selectorAnswerServer.generalValue
              }
            />
            <SepLine className={Style.sepLine} />

            <InfoQueryItem
              title={"REQUEST URL:"}
              info={
                selectorAnswerServer.lighthouseResult
                  ? selectorAnswerServer.lighthouseResult.requestedUrl
                  : selectorAnswerServer.siteUrl
              }
            />
            <SepLine className={Style.sepLine} />
            <InfoQueryItem
              title={"FINAL URL:"}
              info={
                selectorAnswerServer.lighthouseResult
                  ? selectorAnswerServer.lighthouseResult.finalUrl
                  : selectorAnswerServer.siteUrl
              }
            />
            <SepLine className={Style.sepLine} />
            <InfoQueryItem
              title={"DATE QUERY"}
              info={
                selectorAnswerServer.lighthouseResult
                  ? selectorAnswerServer.lighthouseResult.fetchTime
                      .toString()
                      .replace("T", " | ")
                      .replace("Z", "")
                  : selectorAnswerServer.fetchingDate
              }
            />
            <SepLine className={Style.sepLine} />
            <InfoQueryItem
              title={"FORM FACTOR"}
              info={
                selectorAnswerServer.lighthouseResult
                  ? selectorAnswerServer.lighthouseResult.configSettings
                      .formFactor
                  : selectorAnswerServer.formFactor
              }
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FitlerInfoQuery;
