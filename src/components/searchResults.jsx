import React from "react";
import CalendarUI from "./calendarUI";
import ContactUI from "./contactUI";
import DropboxUI from "./dropboxUI";
import SlackUI from "./slackUI";
import TweetUI from "./tweetUI";

const SearchResults = (props) => {
  const searchResultsContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "baseline",
  };

  const searchResultItem = {
    margin: "20px",
  };

  const switchResults = (result) => {
    if (!result) {
      return <></>;
    }
    switch (result.type) {
      case "calendar":
        return <CalendarUI result={result} />;
      case "contacts":
        return <ContactUI result={result} />;
      case "dropbox":
        return <DropboxUI result={result} />;
      case "slack":
        return <SlackUI result={result} />;
      case "tweet":
        return <TweetUI result={result} />;
      default:
        return <></>;
    }
  };

  return (
    <div style={searchResultsContainer}>
      {(props.results || []).map((r, i) => {
        return (
          <div key={`result${i}`} style={searchResultItem}>
            {switchResults(r)}
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
