import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPageSpeed,
  addSearchingError,
} from "../../data/redux/slices/pageSpeedSlice";
import Style from "./Home.module.css";

import ResultTable from "../resultTable/ResultTable";
import SearchBar from "../searchBar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const selectorSpeedPage = useSelector((state) => state.pageSpeed);

  const [urlValue, setUrlValue] = useState("");

  const handleGetPageSpeed = () => {
    if (urlValue.toLowerCase().includes("http")) {
      dispatch(fetchPageSpeed({ urlSite: urlValue }));
    } else {
      dispatch(addSearchingError("url need contains http/https query"));
    }
  };

  const handleGetInputValueBySearchBar = (e) => {
    if (selectorSpeedPage.searchingError != null) {
      if (urlValue.length < 7) {
        dispatch(addSearchingError("Type more than 7 symbols"));
      } else {
        dispatch(addSearchingError(""));
      }
    }
    setUrlValue(e.target.value);
  };

  return (
    <div className={Style.container__home}>
      <SearchBar
        urlValue={urlValue}
        setUrlValue={handleGetInputValueBySearchBar}
        getPage={handleGetPageSpeed}
        getError={selectorSpeedPage.searchingError}
      />
      <ResultTable />
    </div>
  );
};
export default Home;
