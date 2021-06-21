import React from "react";
import SearchResultsCard from "./../SearchResultsCard";
import "./styles.css";

function SearchResultsPage() {
  return (
    <div className="SearchResultsPage">

      {/* Headers */}
      <div className="SearchResultsPage-headers">
        <h2>Best Pizza near Oakland, CA</h2>
        <h3>All Results</h3>
      </div>
      
      {/* Put search results here */}

      <SearchResultsCard />

    </div>
  );
}

export default SearchResultsPage;
