import axios from "axios";

// action:  getAllBusinessData
export const getAllBusinessData = async dispatch => {
  try {
    let response = await axios.get("/api/businessData");
    console.log("In actions", response.data);
    dispatch({
      type: "GET_ALL_BUSINESS_DATA",
      payload: response.data
    })
  } catch (err) {
    console.log(err);
  }
}