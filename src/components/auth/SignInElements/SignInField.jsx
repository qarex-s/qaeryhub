import { useState } from "react";
import React from "react";
import FieldInput from "../../../UI/fieldInput/FieldInput";
import BtnSimple from "../../../UI/btnSimple/BtnSimple";
import Style from "./SignInField.module.css";
import { makeRequestToSignIn } from "../../../data/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const SignInField = ({ setLoginType }) => {
  const [signInFieldValue, setSignInFieldValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const [someError, setSomeError] = useState("");
  const [succesfullRegister, setSuccesfullRegister] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignInUser = (eventValue) => {
    setSignInFieldValue({ ...signInFieldValue, ...eventValue });
  };
  const handleSendRequestToSignInUser = () => {
    for (const key in signInFieldValue) {
      if (signInFieldValue[key] == null) {
        setSomeError("Fill all fields ");
        break;
      }
    }
    if (someError == "") {
      dispatch(makeRequestToSignIn({ signInFieldValue: signInFieldValue }));
      setSuccesfullRegister(true);
      console.log("signIn field: ", signInFieldValue);
      setLoginType((prev) => !prev);
    }
  };

  return (
    <div className={Style.container__login__field}>
      <FieldInput
        value={signInFieldValue.firstName}
        onChange={handleSignInUser}
        placeholder={"FIRST_NAME"}
        name="firstName"
        type="text"
      />
      <FieldInput
        value={signInFieldValue.lastName}
        onChange={handleSignInUser}
        placeholder={"LAST_NAME"}
        name="lastName"
        type="text"
      />
      <FieldInput
        value={signInFieldValue.login}
        onChange={handleSignInUser}
        name="userName"
        placeholder={"USERNAME"}
        type="text"
      />
      <FieldInput
        value={signInFieldValue.email}
        onChange={handleSignInUser}
        placeholder={"EMAIL"}
        name="email"
        type="text"
      />
      <FieldInput
        value={signInFieldValue.password}
        onChange={handleSignInUser}
        placeholder={"PASSWORD"}
        name="password"
        type="password"
      />
      <FieldInput
        value={signInFieldValue.confirmPass}
        onChange={handleSignInUser}
        placeholder={"CONFIRM PASS"}
        name="confirmPass"
        type="password"
      />
      <span style={someError == "" ? { color: "red" } : { display: "none" }}>
        {someError}
      </span>
      <span
        style={succesfullRegister ? { color: "purple" } : { display: "flex" }}
      >
        {someError}
      </span>
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "flex-end",
          marginLeft: "20px",
        }}
      >
        <BtnSimple onClick={setLoginType}>Back to LOGIN</BtnSimple>
        <BtnSimple onClick={handleSendRequestToSignInUser}>Register</BtnSimple>
      </div>
    </div>
  );
};

export default SignInField;
