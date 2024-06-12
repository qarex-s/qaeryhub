import React, { useState, useEffect } from "react";
import Style from "./FilterBlock.module.css";
import { useDispatch } from "react-redux";
import { setPagesByCheckBox } from "../../../data/redux/slices/pageSpeedSlice";
import SepLine from "../../../UI/sepLine/SepLine";
import FilterCheckBox from "../filterCheckBox/FilterCheckBox";
const FilterBlock = () => {
  const dispatch = useDispatch();

  const [checkboxSelected, setCheckboxSelected] = useState([]);

  const handleSetCheckBoxArray = (e) => {
    const { value, checked } = e.target;
    setCheckboxSelected((current) => {
      const newSelected = checked
        ? [...current, value]
        : current.filter((item) => item !== value);
      return newSelected;
    });
  };

  useEffect(() => {
    dispatch(setPagesByCheckBox(checkboxSelected));
  }, [checkboxSelected]);

  return (
    <div className={Style.container__filter__block}>
      <div className={Style.wrapper__filter__block}>
        <div className={Style.sortedInfo}>
          <p>Sorted by:</p>
        </div>
        <SepLine />
        <div className={Style.sortedList}>
          <FilterCheckBox
            value={"performance"}
            fnHandleCheckBoxArray={handleSetCheckBoxArray}
          />
          <FilterCheckBox
            value={"accessibility"}
            fnHandleCheckBoxArray={handleSetCheckBoxArray}
          />
          <FilterCheckBox
            value={"bestPractices"}
            fnHandleCheckBoxArray={handleSetCheckBoxArray}
          />
          <FilterCheckBox
            value={"seo"}
            fnHandleCheckBoxArray={handleSetCheckBoxArray}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
