import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import TitleInfoUI from "./titleInfoUI";
import IconActionUI from "./iconActionUI";
import { FaMobileAlt } from "react-icons/fa";

const ContactUI = (props) => {
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
      <TitleInfoUI title={"Name"} info={props.result.name} />
      <TitleInfoUI title={"Company"} info={props.result.company} />
      <TitleInfoUI
        title={"Emails"}
        info={(props.result.emails || []).join(", ")}
      />
      <TitleInfoUI
        title={"Phones"}
        info={(props.result.phones || []).join(", ")}
      />
      <TitleInfoUI
        title={"Last Contact"}
        info={<Moment fromNow>{props.result.last_contact}</Moment>}
      />
      <TitleInfoUI
        title={"Matching Terms"}
        info={(props.result.matching_terms || []).join(", ")}
      />
      <IconActionUI>
        <FaMobileAlt />
      </IconActionUI>
    </div>
  );
};

export default ContactUI;
