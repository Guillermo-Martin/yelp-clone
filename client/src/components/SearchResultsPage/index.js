import React from "react";
import { connect } from "react-redux";
import SearchResultsCard from "./../SearchResultsCard";
import "./styles.css";


function SearchResultsPage(props) {
  // get all businessData
  const businessData = props.businessData.allData;

  console.log(businessData);

  // map through all business data and save to variable
  const allBusinessData = businessData.map(business => 
    <SearchResultsCard 
      src={business.src}
      name={business.name}
      phoneNumber={business.phoneNumber}
      address={business.address}
      city={business.city}
      neighborhood={business.neighborhood}
      stars={business.stars}
      numReviews={business.numReviews}
      cost={business.cost}
      type={business.type}
      review={business.review}

    />)
  ;

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
