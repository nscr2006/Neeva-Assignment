import info from "../data/data";
import _ from "underscore";

const filter = (info, key, value) => {
  return info[key].filter((v) => v.matching_terms.includes(value));
};

const DataGet = (value) => {
  var keys = ["calendar", "contacts", "dropbox", "slack", "tweet"];

  return _.flatten(keys.map((d) => filter(info, d, value)));
};

const DataPut = (key, value) => {
  info[key].push(value);
};

const DataCrud = {
  get: DataGet,
  put: DataPut,
};

export default DataCrud;
