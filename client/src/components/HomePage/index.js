import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBusinessData } from "./../../actions/homePageActions";
import SearchSection from "../SearchSection";
import BestBusinessSection from "../BestBusinessSection";
import CityNameSection from "../CityNameSection";
import BrowseCategorySection from "../BrowseCategorySection";

function HomePage() {
  // extract "businessData" state from the Redux store
  const businessData = useSelector(state => state.businessData);

  // save dispatch to a variable
  const dispatch = useDispatch();

  // call useEffect to make the API call (pass in the action to make the API call)
  useEffect(() => {
    dispatch(getAllBusinessData()) 
  }, [dispatch]);
 

  return (
    <div>
      {/* <h1>Homepage!</h1> */}
      {/* Search Section */}
      <SearchSection />

      {/* Find the Best Businesses in Town Section */}
      <BestBusinessSection />

      {/* Yelp "City Name" Section */}
      <CityNameSection />

      {/* Browse Businesses by Category Section */}
      <BrowseCategorySection />
    </div>
  );
}

export default HomePage;