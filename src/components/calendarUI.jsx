import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import TitleInfoUI from "./titleInfoUI";
import IconActionUI from "./iconActionUI";
import { FaCalendarAlt } from "react-icons/fa";

const CalendarUI = (props) => {
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
      <TitleInfoUI title={"Invitees"} info={props.result.invitees} />
      <TitleInfoUI
        title={"Date"}
        info={<Moment fromNow>{props.result.date}</Moment>}
      />
      <TitleInfoUI
        title={"Matching Results"}
        info={(props.result.matching_terms || []).join(", ")}
      />
      <IconActionUI>
        <FaCalendarAlt />
      </IconActionUI>
    </div>
  );
};

export default CalendarUI;
