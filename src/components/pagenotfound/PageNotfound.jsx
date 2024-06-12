import React from "react";
import Style from "./PageNotFound.module.css";
import { useNavigate } from "react-router-dom";
import BtnBack from "../../UI/btnBack/BtnBack";

const PageNotfound = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <div className={Style.container__page__not__found}>
      <div className={Style.title__area}>
        <h2 className={Style.text__page__not__found}>ERROR 404</h2>
        <h2 className={Style.text__page__not__found}>Page not found</h2>
        <BtnBack onClick={handleBackToHome}>Back</BtnBack>
      </div>
    </div>
  );
};

export default PageNotfound;
