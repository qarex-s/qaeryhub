import React from "react";
import Style from "./ProfileLayout.module.css";
import ProfileBlock from "./profileBlock/ProfileBlock";

const ProfileLayout = () => {
  return (
    <div className={Style.container__global}>
      <ProfileBlock />
    </div>
  );
};

export default ProfileLayout;
