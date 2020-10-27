import { FILTER_INFO, ADD_CALENDAR } from "../constants/action-types";

export function filterInfo(payload) {
  return { type: FILTER_INFO, payload };
}

export function addCalendar(payload) {
  return { type: ADD_CALENDAR, payload };
}
