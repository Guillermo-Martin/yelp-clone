import { GET_SEARCH_BUSINESS_RESULTS, GET_SEARCH_BUSINESS_RESULTS_ERROR } from "./../actions/types";

// Search results will go into an array
const initialState = {
  searchResults: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_SEARCH_BUSINESS_RESULTS:
      return { ...state, searchResults: action.payload }
    case GET_SEARCH_BUSINESS_RESULTS_ERROR:
      return { error: action.payload }
    default:
      return state;
  }
}