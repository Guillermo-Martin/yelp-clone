import { GET_ONE_BUSINESS_DETAILS_LOADING, GET_ONE_BUSINESS_DETAILS_LOADED, GET_ONE_BUSINESS_DETAILS_ERROR, GET_ONE_BUSINESS_DETAILS_CLEAR } from "./types";
import axios from "axios";

// Action:  "getOneBusinessDetails"
export const getOneBusinessDetails = id => async dispatch => {
  // begin loading
  dispatch({ type: GET_ONE_BUSINESS_DETAILS_LOADING });

  try {
    const response = await axios.get(`/api/businessData/${id}`);
    // console.log("more details: ", response.data);
    dispatch({
      // when loading ends
      type: GET_ONE_BUSINESS_DETAILS_LOADED,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: GET_ONE_BUSINESS_DETAILS_ERROR,
      payload: error
    })
  }
}

// clear action
// export const getOneBusinessDetailsClear = () => {
//   return { type: GET_ONE_BUSINESS_DETAILS_CLEAR };
// }