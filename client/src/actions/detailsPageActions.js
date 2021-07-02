import { GET_ONE_BUSINESS_DETAILS, GET_ONE_BUSINESS_DETAILS_ERROR } from "./types";
import axios from "axios";

// Action:  "getOneBusinessDetails"
export const getOneBusinessDetails = id => async dispatch => {
  try {
    const response = await axios.get(`/api/businessData/${id}`);
    // console.log("more details: ", response.data);
    dispatch({
      type: GET_ONE_BUSINESS_DETAILS,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: GET_ONE_BUSINESS_DETAILS_ERROR,
      payload: error
    })
  }
}