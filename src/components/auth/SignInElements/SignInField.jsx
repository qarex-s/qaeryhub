import React from "react";
import FieldInput from "../../../UI/fieldInput/FieldInput";
import BtnSimple from "../../../UI/btnSimple/BtnSimple";
import Style from "./SignInField.module.css";
const SignInField = ({ setLoginType }) => {
  return (
    <div className={Style.container__login__field}>
      <FieldInput placeholder={"FIRST_NAME"} />
      <FieldInput placeholder={"LAST_NAME"} />
      <FieldInput placeholder={"LOGIN"} />
      <FieldInput placeholder={"PASSWORD"} />
      <FieldInput placeholder={"CONFIRM PASS"} />
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "flex-end",
          marginLeft: "20px",
        }}
      >
        <BtnSimple onClick={setLoginType}>Back to LOGIN</BtnSimple>
        <BtnSimple>Register</BtnSimple>
      </div>
    </div>
  );
};

export default SignInField;
