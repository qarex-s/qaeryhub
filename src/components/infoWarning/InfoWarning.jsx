import React from "react";

const InfoWarning = ({ warningTitle, warningDesc }) => {
  return (
    <>
      <h3>Warning: {warningTitle}</h3>
      <p>description: {warningDesc}</p>
    </>
  );
};

export default InfoWarning;
