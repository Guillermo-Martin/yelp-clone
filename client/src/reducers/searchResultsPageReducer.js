import { GET_SEARCH_BUSINESS_RESULTS_LOADING, GET_SEARCH_BUSINESS_RESULTS_LOADED, GET_SEARCH_BUSINESS_RESULTS_ERROR } from "./../actions/types";

// Search results will go into an array
const initialState = {
  searchResults: [],
  isLoading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_SEARCH_BUSINESS_RESULTS_LOADING:
      return { ...state, isLoading: true }
    case GET_SEARCH_BUSINESS_RESULTS_LOADED:
      return { ...state, searchResults: action.payload, isLoading: false }
    case GET_SEARCH_BUSINESS_RESULTS_ERROR:
      return { error: action.payload }
    default:
      return state;
  }
}