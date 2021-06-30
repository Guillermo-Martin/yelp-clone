import { GET_ALL_BUSINESS_DATA, GET_ALL_BUSINESS_DATA_ERROR } from "./types";
import axios from "axios";

// Action: "getAllBusinessData"
export const getAllBusinessData = () => async dispatch => {
  try {
    const response = await axios.get("/api/businessData");
    console.log("FIRESTORE RESPONSE: ", response.data);
    dispatch({
        type: GET_ALL_BUSINESS_DATA,
        payload: response.data
    })
  } catch (error) {
    dispatch({
        type: GET_ALL_BUSINESS_DATA_ERROR,
        payload: error,
    })
  }
}