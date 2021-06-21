import React from "react";
import { connect } from "react-redux";
import SearchResultsCard from "./../SearchResultsCard";
import "./styles.css";


function SearchResultsPage(props) {
  // get all businessData
  const businessData = props.businessData.allData;

  // map through all business data and save to variable
  const allBusinessData = businessData.map(business => <SearchResultsCard />);

  return (
    <div className="SearchResultsPage">

      {/* Headers */}
      <div className="SearchResultsPage-headers">
        <h2>Best Pizza near Oakland, CA</h2>
        <h3>All Results</h3>
      </div>
      
      {/* Put search results here */}
      {allBusinessData}

    </div>
  );
}

// making SearchResultsPage aware of Redux store
function mapStateToProps(state) {
  return {
    businessData: state.businessData
  };
}

export default connect(mapStateToProps)(SearchResultsPage);
