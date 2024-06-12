import React, { useEffect, useState } from "react";
import Style from "./History.module.css";
import Story from "../story/Story";
import SearchBar from "../searchBar/SearchBar";
import SepLine from "../../UI/sepLine/SepLine";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteItemFromStory,
  fetchGetAllStoryPageSpeed,
  fetchGetItemPageSpeedFromStory,
  filterListStory,
} from "../../data/redux/slices/pageSpeedSlice";
import { useNavigate } from "react-router-dom";
import Notification from "../notification/Notification";
const History = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState("");
  const [visible, setVisible] = useState(false);

  const selectorSpeedPage = useSelector((state) => state.pageSpeed);
  const storyListSpeedPage = selectorSpeedPage.listSpeedPageFromStory;

  const handleGetAllSpeedPageFromStory = () => {
    dispatch(fetchGetAllStoryPageSpeed());
    setValueInput("");
  };

  const handleDeleteItemFromStory = (speedPageId) => {
    dispatch(fetchDeleteItemFromStory({ speedPageId }));
    setVisible(true);
  };
  const handleTestAnalizSite = (speedPageId) => {
    navigate("/");
    dispatch(fetchGetItemPageSpeedFromStory({ speedPageId }));
  };

  const handleChangeValueInput = (e) => {
    setValueInput(e.target.value);
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

  useEffect(() => {
    handleGetAllSpeedPageFromStory();
  }, []);

  return (
    <div className={Style.container__comparing}>
      <SearchBar
        urlValue={valueInput}
        placeholderProp="SEARCH SITE IN STORY..."
        btnTitle="SEARCH"
        setUrlValue={handleChangeValueInput}
        getPage={handleFilterByUrl}
      />

      <div className={Style.sepLine__Space}>
        <SepLine />
      </div>
      <Notification isVisible={visible} onClose={() => setVisible(false)}>
        You successfull DELETED data
      </Notification>
      <Story
        fnTestAnalizSite={handleTestAnalizSite}
        fnDeleteItem={handleDeleteItemFromStory}
      />
    </div>
  );
};

export default History;
