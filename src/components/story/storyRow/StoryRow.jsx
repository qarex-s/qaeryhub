import React from "react";
import Style from "./StoryRow.module.css";
import { AiFillDelete } from "react-icons/ai";
import SepLine from "../../../UI/sepLine/SepLine";

const StoryRow = ({
  pageSpeedItem,
  fnGetItemByIdForCompareVerisonSites = null,
  fnDeleteItem = null,
}) => {
  return (
    <div className={Style.container__row}>
      <div className={Style.row__info}>
        <div className={Style.section__info}>
          <div className={Style.time__testing}>
            {pageSpeedItem.timeTestingFormated}
          </div>
          <div className={Style.url__site}>{pageSpeedItem.siteUrl}</div>
        </div>
        <div className={Style.section__btns}>
          {fnGetItemByIdForCompareVerisonSites ? (
            <button
              className={Style.btn__test}
              onClick={() => {
                fnGetItemByIdForCompareVerisonSites(
                  pageSpeedItem.generalPerformanceId
                );
              }}
            >
              TEST
            </button>
          ) : null}

          {fnDeleteItem ? (
            <AiFillDelete
              className={Style.ai__fill__delete}
              onClick={() => {
                fnDeleteItem(pageSpeedItem.generalPerformanceId);
              }}
            />
          ) : null}
        </div>
      </div>
      <div className={Style.sepLine__Space}>
        <SepLine />
      </div>
    </div>
  );
};

export default StoryRow;
