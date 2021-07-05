import { GET_SEARCH_BUSINESS_RESULTS_LOADING, GET_SEARCH_BUSINESS_RESULTS_LOADED, GET_SEARCH_BUSINESS_RESULTS_ERROR } from "./types";
import axios from "axios";

// Action: "getSearchBusinessResults"
export const getSearchBusinessResults = (businessInput, cityInput) => async dispatch => {
  // begin loading
  dispatch({type: GET_SEARCH_BUSINESS_RESULTS_LOADING});

  try {
    const response = await axios.get(`/api/businessData/search/${businessInput}/${cityInput}`);
    console.log("search:", response.data);
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
