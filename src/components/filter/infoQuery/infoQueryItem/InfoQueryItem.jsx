import React from "react";
import Style from "./InfoQueryItem.module.css";
const InfoQueryItem = ({ title, info }) => {
  return (
    <div className={Style.item__quary__info__quary}>
      <div className={Style.title__item__list}>{title}</div>
      <div className={Style.info__item__list}>{info ? info : "Not FIND"}</div>
    </div>
  );
};

export default InfoQueryItem;
