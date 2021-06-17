import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBusinessData } from "./../../actions/homePageActions";
import axios from "axios";
import SearchSection from "../SearchSection";
import BestBusinessSection from "../BestBusinessSection";
import CityNameSection from "../CityNameSection";
import BrowseCategorySection from "../BrowseCategorySection";

function HomePage() {
  // // make an API call to the backend to get the business data
  // useEffect(() => {
  //   // create the function to get the data
  //   async function getData() {
  //     const response = await axios.get("/api/businessData");
  //     // console.log("this is the data", response.data);

  //     // add the data to the Redux store

  //   } 

  //   // call the function
  //   getData();
  // });

  // extract "businessData" state from the Redux store
  const businessData = useSelector(state => state.businessData);

  // save dispatch to a variable
  const dispatch = useDispatch();


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