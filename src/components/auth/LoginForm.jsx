import React from "react";
import Style from "./LoginForm.module.css";
import LoginField from "./LoginElements/LoginField";
import BtnSave from "../../UI/btnSave/BtnSave";
const LogiForm = () => {
  return (
    <div className={Style.container__global}>
      {" "}
      <LoginField />
    </div>
  );
};

export default LogiForm;
