import React from "react";

const IconActionUI = ({ children }) => {
  const iconActionContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "baseline",
    width: "100%",
    margin: "5px",
  };

  return (
    <div style={iconActionContainer}>
      <div>{children}</div>
    </div>
  );
};

export default IconActionUI;
