import React from "react";

const TitleInfoUI = (props) => {
  const titleInfoContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
    width: "100%",
    margin: "5px",
  };

  const title = {
    fontSize: "16px",
    fontWeight: "bold",
  };

  const info = {
    fontSize: "12px",
    fontWeight: "normal",
  };

  return (
    <div style={titleInfoContainer}>
      <div style={title}>{props.title} : &nbsp;</div>
      <div style={info}>{props.info}</div>
    </div>
  );
};

export default TitleInfoUI;
