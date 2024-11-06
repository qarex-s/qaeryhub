import React from "react";
import Style from "./LoginField.module.css";
import FieldInput from "../../../UI/fieldInput/FieldInput";
import BtnSave from "../../../UI/btnSave/BtnSave";
import BtnSimple from "../../../UI/btnSimple/BtnSimple";
const LoginField = () => {
  return (
    <div className={Style.container__login__field}>
      <FieldInput placeholder={"Login"} />
      <FieldInput placeholder={"Password"} />
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "flex-end",
          marginLeft: "20px",
        }}
      >
        <BtnSimple>Sign In</BtnSimple>
        <BtnSimple>Log In</BtnSimple>
      </div>
    </div>
  );
};

export default LoginField;
