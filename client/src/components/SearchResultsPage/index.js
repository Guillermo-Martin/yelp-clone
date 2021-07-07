import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { getSearchBusinessResults } from "./../../actions/searchResultsPageActions";
import { Link } from "react-router-dom";
import SearchResultsCard from "./../SearchResultsCard";
import Loader from "./../Loader";
import "./styles.css";


function SearchResultsPage(props) {
  // get the inputs from URL using React Router
  const { businessInput, cityInput } = props.match.params;

  // extract state from the store
  const { searchResults, isLoading } = useSelector(state => state.searchResults);

  // save dispatch to a variable
  const dispatch = useDispatch();
  
  // call useEffect to make an API call to "/api/businessData/search"
  useEffect(() => {
    dispatch(getSearchBusinessResults(businessInput, cityInput))
  }, [dispatch]);

  // results array for rendering
  let allSearchResults = "";

  // map through searchResults (from store) and save to variable
  if(searchResults !== undefined){
    allSearchResults = searchResults.map(business => 
      <div className="SearchResultsPage-result">
        <Link to={`/search/${businessInput}/${cityInput}/details/${business.id}`} className="SearchResultsPage-link">
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
  }

  return (
    <div className="SearchResultsPage">
      {/* if "isLoading" is true, display the loader; otherwise, show the results */}
      {
        isLoading
        ?
          <Loader />
        :
        // If "allSearchResults.length" is 0, display a "no results found message"; otherwise show all results
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
            <h4>Suggestions for improving your results:</h4>
            <div>
              <ul>
                <li><span>&#8226;</span> Try a larger search area</li>
                <li><span>&#8226;</span> Try a different location</li>
                <li><span>&#8226;</span> Check the spelling or try alternate spellings</li>
                <li><span>&#8226;</span> Try a more general search, e.g. "pizza" instead of "pepperoni"</li>
              </ul>
            </div>
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
