import React from "react";
import Style from "./Story.module.css";
import { useSelector } from "react-redux";
import StoryRow from "./storyRow/StoryRow";

const Story = ({ fnTestAnalizSite = null, fnDeleteItem = null }) => {
  const selectorStorySpeedPage = useSelector((state) => state.pageSpeed);

  const listSpeedPage = selectorStorySpeedPage.filterListSpeedPageFromStory;

  return (
    <div className={Style.container__story}>
      <div className={Style.title__story}>Story</div>
      <div className={Style.virtual__table}>
        {listSpeedPage.length > 0
          ? listSpeedPage.map((p) => (
              <StoryRow
                key={p.generalPerformanceId}
                fnDeleteItem={fnDeleteItem}
                pageSpeedItem={p}
                fnGetItemByIdForCompareVerisonSites={fnTestAnalizSite}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Story;
