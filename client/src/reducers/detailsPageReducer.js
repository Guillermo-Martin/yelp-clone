import { GET_ONE_BUSINESS_DETAILS, GET_ONE_BUSINESS_DETAILS_ERROR } from "./../actions/types";

// initial state
const initialState = {
  details: ""
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ONE_BUSINESS_DETAILS:
      return {...state, details: action.payload}
    case GET_ONE_BUSINESS_DETAILS_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
}