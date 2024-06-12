import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ComparingTable from "./comparingTable/ComparingTable.jsx";
import Style from "./Comparing.module.css";
import SearchBar from "../searchBar/SearchBar.jsx";
import {
  fetchGetAllStoryPageSpeed,
  filterListStory,
} from "../../data/redux/slices/pageSpeedSlice.js";

const Comparing = () => {
  const [valueInput, setValueInput] = useState("");

  const dispatch = useDispatch();
  const selectorSpeedPage = useSelector((state) => state.pageSpeed);

  const storyListSpeedPage = selectorSpeedPage.listSpeedPageFromStory;

  const handleGetAllSpeedPageFromStory = () => {
    dispatch(fetchGetAllStoryPageSpeed());
    setValueInput("");
  };
  useEffect(() => {
    handleGetAllSpeedPageFromStory();
  }, []);

  const handleSetDefaultValueForUrl = () => {
    setValueInput("");
  };
  const handleFilterByUrl = () => {
    if (valueInput.length > 2) {
      const filterListSpeedPage = storyListSpeedPage.filter((p) =>
        p.siteUrl.includes(valueInput)
      );
      dispatch(filterListStory(filterListSpeedPage));
    } else {
      dispatch(filterListStory(storyListSpeedPage));
    }
  };

  const handleChangeValueInput = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <>
      <div className={Style.container__comparing}>
        <SearchBar
          urlValue={valueInput}
          placeholderProp="SEARCH SITE IN STORY..."
          btnTitle="SEARCH"
          setUrlValue={handleChangeValueInput}
          getPage={handleFilterByUrl}
        />
        <ComparingTable
          valueInput={valueInput}
          GetAllSpeedPageFromStory={handleGetAllSpeedPageFromStory}
          setDefaultValueForUrl={handleSetDefaultValueForUrl}
        />
      </div>
    </>
  );
};

export default Comparing;
