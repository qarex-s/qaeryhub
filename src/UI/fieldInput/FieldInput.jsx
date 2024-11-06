import React from "react";
import Style from "./FieldInput.module.css";
const FieldInput = ({ placeholder }) => {
  return (
    <>
      <input
        type="text"
        className={Style.container__field__input}
        placeholder={placeholder}
      />
    </>
  );
};

export default FieldInput;
