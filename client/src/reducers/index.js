// add all reducers here
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import homePageReducer from "./homePageReducer";
import searchResultsPageReducer from "./searchResultsPageReducer";
import detailsPageReducer from "./detailsPageReducer";

// Redux Persist imports
import { persistReducer } from "redux-persist";
// use localStorage
import storage from "redux-persist/lib/storage";

// define the persist configuration
const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ["businessData", "businessDetails"]
}

// variable to hold all reducers
const allReducers = combineReducers({
  count: counterReducer,
  businessData: homePageReducer,
  searchResults: searchResultsPageReducer,
  businessDetails: detailsPageReducer
});

export default persistReducer(persistConfig, allReducers);
