import React, { useState } from "react";
import Style from "./LoginForm.module.css";
import LoginField from "./LoginElements/LoginField";
import BtnSave from "../../UI/btnSave/BtnSave";
import SignInField from "./SignInElements/SignInField";
const LogiForm = () => {
  const [loginType, setLoginType] = useState(true);

  const handleChangeLoginType = () => {
    setLoginType((prev) => !prev);
  };
  return (
    <div className={Style.container__global}>
      {loginType ? (
        <LoginField setLoginType={handleChangeLoginType} />
      ) : (
        <SignInField setLoginType={handleChangeLoginType} />
      )}
    </div>
  );
};

export default LogiForm;
