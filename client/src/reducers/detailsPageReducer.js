import { GET_ONE_BUSINESS_DETAILS_LOADING, GET_ONE_BUSINESS_DETAILS_LOADED, GET_ONE_BUSINESS_DETAILS_ERROR, GET_ONE_BUSINESS_DETAILS_CLEAR } from "./../actions/types";

// initial state
const initialState = {
  details: "",
  isLoading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ONE_BUSINESS_DETAILS_LOADING:
      return { ...state, isLoading: true }
    case GET_ONE_BUSINESS_DETAILS_LOADED:
      return { ...state, details: action.payload, isLoading: false }
    case GET_ONE_BUSINESS_DETAILS_ERROR:
      return { error: action.payload };
    case GET_ONE_BUSINESS_DETAILS_CLEAR:
      return { ...state, details: ""};
    default:
      return state;
  }
}