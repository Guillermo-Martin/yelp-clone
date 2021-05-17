import React from "react";
import SearchSection from "./../SearchSection";
import BestBusinessSection from "./../BestBusinessSection";
import CityNameSection from "./../CityNameSection";
import BrowseCategorySection from "./../BrowseCategorySection";

function HomePage() {
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

      {/* Footer Section */}


    </div>
  );
}

export default HomePage;