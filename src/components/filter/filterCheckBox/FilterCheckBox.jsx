import React from "react";
import Style from "./FilterCheckBox.module.css";
const FilterCheckBox = ({ value, fnHandleCheckBoxArray }) => {
  return (
    <div className={Style.sortedItem}>
      <label className={Style.sortedLabel}>
        <div className={Style.wrapper__checkbox}>
          <input
            className={Style.sortedInput}
            type="checkbox"
            name={value}
            value={value}
            onChange={fnHandleCheckBoxArray}
          />
        </div>
        <div className={Style.sortedItem__text}>{value}</div>
      </label>
    </div>
  );
};

export default FilterCheckBox;
