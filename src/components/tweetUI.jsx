import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import TitleInfoUI from "./titleInfoUI";
import IconActionUI from "./iconActionUI";
import { FaRetweet } from "react-icons/fa";

const TweetUI = (props) => {
  const searchResultsContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "baseline",
    width: "90vw",
    padding: "10px",
    borderRadius: "1rem/1rem",
    boxShadow: "8px 10px 16px rgba(0,0,0,0.1)",
  };

  return (
    <div style={searchResultsContainer}>
      <TitleInfoUI title={"User"} info={props.result.user} />
      <TitleInfoUI title={"Message"} info={props.result.message} />
      <TitleInfoUI
        title={"Timestamp"}
        info={<Moment fromNow>{props.result.timestamp}</Moment>}
      />
      <TitleInfoUI
        title={"Matching Terms"}
        info={(props.result.matching_terms || []).join(", ")}
      />
      <IconActionUI>
        <FaRetweet />
      </IconActionUI>
    </div>
  );
};

export default TweetUI;
