import React, { useState } from "react";
import Style from "./LoginField.module.css";
import FieldInput from "../../../UI/fieldInput/FieldInput";
import BtnSimple from "../../../UI/btnSimple/BtnSimple";
import { makeRequestToLogin } from "../../../data/redux/slices/authSlice";
import { useDispatch } from "react-redux";

const LoginField = ({ setLoginType }) => {
  const [loginFieldValue, setLoginFieldValue] = useState({
    login: "",
    pass: "",
  });

  const dispatch = useDispatch();

  const handleLoginUser = (eventValue) => {
    setLoginFieldValue({ ...loginFieldValue, ...eventValue });
  };

  const handleSendRequestToLoginUser = () => {
    dispatch(makeRequestToLogin({ loginFieldValue: loginFieldValue }));
  };

  console.log("LoginUser", loginFieldValue);
  return (
    <div className={Style.container__login__field}>
      <FieldInput
        placeholder={"LOGIN"}
        value={loginFieldValue.login}
        onChange={handleLoginUser}
        name="login"
      />
      <FieldInput
        placeholder={"PASSWORD"}
        value={loginFieldValue.pass}
        onChange={handleLoginUser}
        name="pass"
      />
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "flex-end",
          marginLeft: "20px",
        }}
      >
        <BtnSimple onClick={setLoginType}>Sign In</BtnSimple>
        <BtnSimple onClick={handleSendRequestToLoginUser}>Log In</BtnSimple>
      </div>
    </div>
  );
};

export default LoginField;
