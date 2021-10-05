import { GET_SEARCH_BUSINESS_RESULTS_LOADING, GET_SEARCH_BUSINESS_RESULTS_LOADED, GET_SEARCH_BUSINESS_RESULTS_ERROR } from "./types";
import axios from "axios";

// Action: "getSearchBusinessResults"
export const getSearchBusinessResults = (businessInput, cityInput) => async dispatch => {
  // begin the "loading" screen.  dispatch an action to the "searchResultsPageReducer" (go to "searchResultsPageReducer.js")
  dispatch({type: GET_SEARCH_BUSINESS_RESULTS_LOADING});

  try {
    // make an api call to the database
    const response = await axios.get(`/api/businessData/search/${businessInput}/${cityInput}`);
    console.log("search:", response.data);
    // after getting the data ("response.data"), dispatch an action to the "searchResultsPageReducer" (go to "searchResultsPageReducer.js")
    // in addition to an action type, send the data in "payload"
    dispatch({
      // when loading ends
      type: GET_SEARCH_BUSINESS_RESULTS_LOADED,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: GET_SEARCH_BUSINESS_RESULTS_ERROR,
      payload: error
    })
  }
}
