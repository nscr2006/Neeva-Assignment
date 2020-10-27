import { FILTER_INFO } from "../constants/action-types";
import info from "../../data/data";

const initialState = {
  info: info,
  keyword: "",
};

const keys = ["calendar", "contacts", "dropbox", "slack", "tweet"];

function filterInfo(state, keyword) {
  var filteredIndo = {};
  keys.forEach(
    (k) =>
      (filteredIndo[k] = initialState.info[k].filter((i) =>
        i.matching_terms.includes(keyword)
      ))
  );
  return {
    ...state,
    keyword: keyword,
    info: filteredIndo,
  };
}

function rootReducer(state = {}, action) {
  if (action.type === FILTER_INFO) {
    return filterInfo(state, action.payload);
  }
  return state;
}

export default rootReducer;
