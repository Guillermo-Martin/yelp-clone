import { GET_SEARCH_BUSINESS_RESULTS, GET_SEARCH_BUSINESS_RESULTS_ERROR } from "./types";
import axios from "axios";

// Action: "getSearchBusinessResults"
export const getSearchBusinessResults = (businessInput, cityInput) => async dispatch => {
  try {
    const response = await axios.get(`/api/businessData/search/${businessInput}/${cityInput}`);
    console.log("search:", response.data);
    dispatch({
      type: GET_SEARCH_BUSINESS_RESULTS,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: GET_SEARCH_BUSINESS_RESULTS_ERROR,
      payload: error
    })
  }
}
