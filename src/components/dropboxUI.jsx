import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import TitleInfoUI from "./titleInfoUI";
import IconActionUI from "./iconActionUI";
import { FaDropbox } from "react-icons/fa";

const DropboxUI = (props) => {
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
      <TitleInfoUI title={"Title"} info={props.result.title} />
      <TitleInfoUI title={"Path"} info={props.result.path} />
      <TitleInfoUI
        title={"Shared With"}
        info={(props.result.shared_with || []).join(", ")}
      />
      <TitleInfoUI
        title={"Last Contact"}
        info={<Moment fromNow>{props.result.created}</Moment>}
      />
      <TitleInfoUI
        title={"Matching Terms"}
        info={(props.result.matching_terms || []).join(", ")}
      />
      <IconActionUI>
        <FaDropbox />
      </IconActionUI>
    </div>
  );
};

export default DropboxUI;
