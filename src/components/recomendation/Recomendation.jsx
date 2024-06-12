import React from "react";
import Style from "./Recomendation.module.css";
import { useSelector } from "react-redux";

import RecomendationItemInfo from "./recomemdationItemInfo/RecomendationItemInfo";

const Recomendation = () => {
  const auditsSelector = useSelector((state) => state.pageSpeed);
  const massiveAudits = auditsSelector
    ? Object.values(auditsSelector.auditsKeyValue)
    : null;
  return (
    <div className={Style.container__recomendation}>
      <div className={Style.title__recomendation}>RECOMENDS</div>
      <div className={Style.section__table__recomendation}>
        <div className={Style.wrapper__main__section}>
          <div className={Style.main__section__recomendation}>
            <div className={Style.title__main__section}>
              <h3>Main</h3>
            </div>
            <div className={Style.info__main__section}>
              {massiveAudits.map((itemAudit) => {
                return (
                  itemAudit.score < 0.5 &&
                  itemAudit.score != null && (
                    <RecomendationItemInfo
                      key={itemAudit.id}
                      titleRec={itemAudit.title}
                      descRec={itemAudit.description}
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>
        <div className={Style.wrapper__secondary__section}>
          <div className={Style.secondary__section__recomendation}>
            <div className={Style.title__secondary__section}>
              <h3 className={Style.title__text__secondary}>Secondary</h3>
            </div>
            <div className={Style.info__secondary__section}>
              {massiveAudits.map((itemAudit) => {
                return (
                  itemAudit.score >= 0.5 &&
                  itemAudit.score < 1 &&
                  itemAudit.score != null && (
                    <RecomendationItemInfo
                      key={itemAudit.id}
                      titleRec={itemAudit.title}
                      descRec={itemAudit.description}
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomendation;
