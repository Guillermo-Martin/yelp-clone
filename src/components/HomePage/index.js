import React from "react";
import SearchSection from "./../SearchSection";
import BestBusinessSection from "./../BestBusinessSection";
import CityNameSection from "./../CityNameSection";

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


      {/* Footer Section */}


    </div>
  );
}

export default HomePage;