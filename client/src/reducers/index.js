// add all reducers here
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import homePageReducer from "./homePageReducer";

// variable to hold all reducers
const allReducers = combineReducers({
  count: counterReducer,
  businessData: homePageReducer,
});

export default allReducers;
