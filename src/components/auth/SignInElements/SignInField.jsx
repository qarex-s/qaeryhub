import { useState } from "react";
import React from "react";
import FieldInput from "../../../UI/fieldInput/FieldInput";
import BtnSimple from "../../../UI/btnSimple/BtnSimple";
import Style from "./SignInField.module.css";

const SignInField = ({ setLoginType }) => {
  const [loginFieldValue, setLoginFieldValue] = useState({
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleLoginUser = (eventValue) => {
    setLoginFieldValue({ ...loginFieldValue, ...eventValue });
  };

  return (
    <div className={Style.container__login__field}>
      <FieldInput
        value={loginFieldValue.firstName}
        onChange={handleLoginUser}
        placeholder={"FIRST_NAME"}
        name="firstName"
      />
      <FieldInput
        value={loginFieldValue.lastName}
        onChange={handleLoginUser}
        placeholder={"LAST_NAME"}
        name="lastName"
      />
      <FieldInput
        value={loginFieldValue.login}
        onChange={handleLoginUser}
        name="login"
        placeholder={"LOGIN"}
      />
      <FieldInput
        value={loginFieldValue.email}
        onChange={handleLoginUser}
        placeholder={"EMAIL"}
        name="email"
      />
      <FieldInput
        value={loginFieldValue.password}
        onChange={handleLoginUser}
        placeholder={"PASSWORD"}
        name="password"
      />
      <FieldInput
        value={loginFieldValue.confirmPass}
        onChange={handleLoginUser}
        placeholder={"CONFIRM PASS"}
        name="confirmPass"
      />
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
