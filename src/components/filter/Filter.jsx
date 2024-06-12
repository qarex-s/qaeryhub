import React from "react";
import Style from "./Filter.module.css";
import FilterBlock from "./filterBlock/FilterBlock";
import FitlerInfoQuery from "./infoQuery/FilterInfoQuery";
export const Filter = () => {
  return (
    <>
      <div className={Style.container__filter}>
        <FilterBlock />
        <FitlerInfoQuery />
      </div>
    </>
  );
};
