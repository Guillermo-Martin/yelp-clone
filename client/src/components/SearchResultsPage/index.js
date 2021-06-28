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
          type={business.type.join(", ")}
          review={business.review}
        />
      </Link>
    </div>
  );

  return (
    <div className="SearchResultsPage">
      {/* If "allSearchResults.length" is 0, display an "no results found message"; otherwise show all results */}
      {
        allSearchResults.length === 0 
          ? 
          // No results found
          <div>
            <h2>
              {
                // if both inputs are empty, show "No results for businessInput in cityInput"
                businessInput !== "default" && cityInput !== "default"
                ?
                `No results for ${businessInput} in ${cityInput}`
                : 
                // else if "cityInput" is empty, show "no results in cityInput"
                cityInput !== "default"
                  ?
                  `No results in ${cityInput}`
                  :
                // else show "no results for businessInput
                `No results for ${businessInput}`
              }  
            </h2>
          </div>
          : 
        // show all results
        <div className="SearchResultsPage-headers">
          <h2>{businessInput === "default" ? "All Businesses " : "Best " + businessInput} {cityInput === "default" ? null : "in " + cityInput}</h2>
          
          <h3>All Results</h3>

          {allSearchResults}
        </div>
      }
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
