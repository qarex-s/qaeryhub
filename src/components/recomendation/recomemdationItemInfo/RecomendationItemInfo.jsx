import React from "react";
import Style from "./RecomendationItemInfo.module.css";
const RecomendationItemInfo = ({ titleRec, descRec }) => {
  return (
    <div className={Style.container__recomendation}>
      <div className={Style.title__info}>
        <p>{"- " + titleRec}</p>
      </div>
      <div className={Style.desc__info}>{descRec}</div>
    </div>
  );
};

export default RecomendationItemInfo;
