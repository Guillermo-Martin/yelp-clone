const homePageReducer = (state = "", action) => {
  switch(action.type) {
    case "GET_ALL_BUSINESS_DATA":
      return state = action.payload;
    default:
      return state;
  }
}

export default homePageReducer;