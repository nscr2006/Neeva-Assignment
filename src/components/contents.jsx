import React from "react";
import SearchBar from "./searchBar";
import SearchResults from "./searchResults";
import { connect } from "react-redux";
import _ from "underscore";
import { filterInfo } from "../js/actions";

const mapStateToProps = (state) => {
  return {
    info: state ? state.info || {} : {},
    keyword: state ? state.keyword : "",
  };
};

function mapDispatchToProps(dispatch) {
  return {
    filterInfo: (value) => dispatch(filterInfo(value)),
  };
}

const ConnectedContents = (props) => {
  const contentsContainer = {
    display: "flex",
    flexDirection: "column",
  };
  const searchBarContainer = {
    marginTop: "20px",
  };
  const searchResultsContainer = {
    marginTop: "20px",
  };

  var keys = ["calendar", "contacts", "dropbox", "slack", "tweet"];
  var results = _.flatten(keys.map((k) => props.info[k]));

  const updateKey = (value) => {
    props.filterInfo(value);
  };

  return (
    <div style={contentsContainer}>
      <div style={searchBarContainer}>
        <SearchBar input={props.keyword} setInput={updateKey} />
      </div>
      <div style={searchResultsContainer}>
        <SearchResults results={results} />
      </div>
    </div>
  );
};

const Contents = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedContents);
export default Contents;
