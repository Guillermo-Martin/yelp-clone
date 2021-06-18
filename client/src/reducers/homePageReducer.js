import { GET_ALL_BUSINESS_DATA, GET_ALL_BUSINESS_DATA_ERROR } from "./../actions/types";

const initialState = {
  allData: []
}

// get all business data
export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ALL_BUSINESS_DATA:
      return { ...state, allData: action.payload }
    case GET_ALL_BUSINESS_DATA_ERROR:
      return { error: action.payload }
    default:
      return state;
  }
}
