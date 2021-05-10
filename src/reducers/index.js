// add all reducers here
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

// variable to hold all reducers
const allReducers = combineReducers({
  count: counterReducer
});

export default allReducers;
