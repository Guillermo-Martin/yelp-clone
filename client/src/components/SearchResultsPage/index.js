import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { getSearchBusinessResults } from "./../../actions/searchResultsPageActions";
import { Link } from "react-router-dom";
import SearchResultsCard from "./../SearchResultsCard";
import "./styles.css";


function SearchResultsPage(props) {
  // get the inputs from URL using React Router
  const { businessInput, cityInput } = props.match.params;

  // extract state from the store
  const { searchResults } = useSelector(state => state.searchResults);

  // save dispatch to a variable
  const dispatch = useDispatch();
  
  // call useEffect to make an API call to "/api/businessData/search"
  useEffect(() => {
    dispatch(getSearchBusinessResults(businessInput, cityInput))
  }, [dispatch]);


  // map through searchResults (from store) and save to variable
  const allSearchResults = searchResults.map(business => 
    <div className="SearchResultsPage-result">
      <Link href="#" className="SearchResultsPage-link">
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
        />
      </Link>
      
    </div>
  );

  return (
    <div className="SearchResultsPage">

      {/* Headers */}
      <div className="SearchResultsPage-headers">
        <h2>Best Pizza near Oakland, CA</h2>
        <h3>All Results</h3>
      </div>
      
      {/* Put search results here */}
      {allSearchResults}

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
