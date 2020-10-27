import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { Event } from "../components/tracking/index";

const SearchBar = (props) => {
  const searchStyling = {
    width: "90vw",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };

  const searchBarContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  };

  const inputContainer = {
    margin: "20px",
  };
  const buttonContainer = {
    margin: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "end",
  };

  const icon = {
    margin: "5px",
  };

  const [key, setKey] = useState("");

 
 

  return (
    <div>
      <h1>Search With Keyword</h1>
    <div style={searchBarContainer}>
      
      <div style={inputContainer}>
        <input
          style={searchStyling}
          key="key1"
          value={key}
          placeholder={"search "}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <div style={buttonContainer}>
        <FaSearch style={icon} onClick={() => props.setInput(key)} />
        
      </div>
    </div>
    </div>
  );
};

export default SearchBar;
