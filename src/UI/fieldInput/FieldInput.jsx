import React from "react";
import Style from "./FieldInput.module.css";
const FieldInput = ({ value, onChange, name, placeholder }) => {
  return (
    //need for refactoring

    <>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange({ [name]: event.currentTarget.value })}
        className={Style.container__field__input}
        placeholder={placeholder}
      />
    </>
  );
};

export default FieldInput;
