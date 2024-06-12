import React from "react";
import Style from "./CompareItems.module.css";
import ResultItem from "../../resultItem/ResultItem";

const CompareItems = ({ firstItem, secondItem }) => {
  return (
    <div className={Style.container__compare__items}>
      {firstItem ? (
        <>
          <ResultItem
            style={{ height: "100%" }}
            key={firstItem.title}
            {...firstItem}
          >
            {firstItem.title}
          </ResultItem>
          <ResultItem key={secondItem.title + "*"} {...secondItem}>
            {"*" + secondItem.title}
          </ResultItem>
        </>
      ) : (
        <h3>ITEMS NOT FOUND</h3>
      )}
    </div>
  );
};

export default CompareItems;
