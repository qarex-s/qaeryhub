import React, { useEffect } from "react";
import Style from "./ProfileBlock.module.css";
import BtnSimple from "../../../UI/btnSimple/BtnSimple";
import { useDispatch, useSelector } from "react-redux";
import { makeRequestToGetProfile } from "../../../data/redux/slices/userProfileSlice";
const ProfileBlock = () => {
  const ownStyleForBtnSimple = {
    background: "var(--btn-simple-gradient)",
    fontSize: 16,
    border: "0px solid black",
  };
  const dispatch = useDispatch();
  const handleGetInfoAboutProfile = () => {
    dispatch(makeRequestToGetProfile());
  };
  useEffect(() => {
    handleGetInfoAboutProfile();
  }, []);
  const profileSelector = useSelector((state) => state.user);
  console.log("profile selector", profileSelector);
  console.log("___STATE USER  - ", profileSelector);

  return (
    <div className={Style.container__block__profile}>
      <div className={Style.short__info__profile}>
        <div className={Style.container__image__profile}>
          <img
            className={Style.block__img__inst}
            src={profileSelector.urlImage}
            alt="Image user"
          />
        </div>
        <div className={Style.container__description__info__profile}>
          <h2>{profileSelector.firstName + " " + profileSelector.lastName}</h2>
          <h3>{profileSelector.email + "@gmail.com"}</h3>
        </div>
      </div>
      <div className={Style.container__btns__profile}>
        {/* <BtnSimple
          ownStyle={ownStyleForBtnSimple}
          className={Style.btnSimple__profileBlock}
        >
          EDIT
        </BtnSimple>
        <BtnSimple
          ownStyle={ownStyleForBtnSimple}
          className={Style.btnSimple__profileBlock}
        >
          GET INFO
        </BtnSimple>
        <BtnSimple
          ownStyle={ownStyleForBtnSimple}
          className={Style.btnSimple__profileBlock}
        >
          QUITE
        </BtnSimple> */}
      </div>
      <div className={Style.container__table__using__app}>
        <h2>TOP 5 MOST USED</h2>
        <div className={Style.container__list__used__sites}>
          <div className={Style.item__of__list}>
            <div className={Style.list__item__position}>1.</div>
            <div className={Style.list__item__title}>
              https://www.uzhnu.edu.ua/
            </div>
          </div>
          <div className={Style.item__of__list}>
            <div className={Style.list__item__position}>2.</div>
            <div className={Style.list__item__title}>
              https://www.uzhnu.edu.ua/
            </div>
          </div>
          <div className={Style.item__of__list}>
            <div className={Style.list__item__position}>3.</div>
            <div className={Style.list__item__title}>
              https://www.uzhnu.edu.ua/
            </div>
          </div>
          <div className={Style.item__of__list}>
            <div className={Style.list__item__position}>4.</div>
            <div className={Style.list__item__title}>
              https://www.uzhnu.edu.ua/
            </div>
          </div>
          <div className={Style.item__of__list}>
            <div className={Style.list__item__position}>5.</div>
            <div className={Style.list__item__title}>
              https://www.uzhnu.edu.ua/
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBlock;
