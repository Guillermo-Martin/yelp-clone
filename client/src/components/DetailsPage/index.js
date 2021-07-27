import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { getOneBusinessDetails, getOneBusinessDetailsClear } from "./../../actions/detailsPageActions";
import HeroDetails from "../HeroDetails";
import BasicInfoSection from "../BasicInfoSection";
import ShareRowSection from "../ShareRowSection";
import UpdatesSection from "../UpdatesSection";
import MenuSection from "../MenuSection";
import LocationHoursSection from "../LocationHoursSection";
import ReviewSection from "../ReviewSection";
import Loader from "./../Loader";
import { GET_ONE_BUSINESS_DETAILS_CLEAR } from "../../actions/types";

function DetailsPage(props) {
  // get the id from the url using react router
  const businessId = props.match.params.id;

  // get the url using react router
  const businessUrl = props.match.url;

  // extract state from store
  const businessDetails = useSelector(state => state.businessDetails);
  const isLoading = useSelector(state => state.businessDetails.isLoading); // <-- ***can delete***

  // the data
  // extract data from store
  const { name, stars, type, phoneNumber, address, city, neighborhood, zipcode, intersection, website, hours, covid19Updates, services, safety, reviews, heroImage, smallMenu, photos } = businessDetails.details;

  // save dispatch to a variable
  const dispatch = useDispatch();

  // call useEffect to make the API call (pass in the action to make an API call)
  useEffect(() => {
    dispatch(getOneBusinessDetails(businessId));

    // clear out data if the user goes back:  https://stackoverflow.com/questions/65736238/react-redux-shows-previous-state-old-data-before-fetching-new-data
    dispatch({ type: GET_ONE_BUSINESS_DETAILS_CLEAR })
  }, []);

  // if businessDetails.details isn't available yet, return the loader
  // https://stackoverflow.com/questions/63967956/make-useeffect-hook-run-before-rendering-the-component
  // Conditional rendering: https://reactjs.org/docs/conditional-rendering.html
  if(!businessDetails.details) {
    return <Loader />
  }

  return (
    <div>
      <div>
      {/* Hero Image with basic details section */}
      <HeroDetails 
        name={name}
        stars={stars}
        type={type}
        heroImage={heroImage}
        hours={hours}
        businessUrl={businessUrl}
        photos={photos}
        reviews={reviews}
      />

      {/* List/Row of buttons (write a review, add photo, share, save) */}
      <ShareRowSection />

      {/* Basic info section (website, address, etc.) */}
      <BasicInfoSection 
        phoneNumber={phoneNumber}
        address={address}
        city={city}
        zipcode={zipcode}
        website={website}
      />

      {/* COVID-19 updates section (?) */}
      <UpdatesSection 
        covid19Updates={covid19Updates}
        services={services}
        safety={safety}
      />

      {/* Menu section */}
      <MenuSection 
        smallMenu={smallMenu}
        businessUrl={businessUrl}
      />

      {/* Location and hours section (map) */}
      <LocationHoursSection 
        address={address}
        city={city}
        zipcode={zipcode}
        neighborhood={neighborhood}
        intersection={intersection}
        hours={hours}
      />

      {/* Review section (with reviews) */}
      <ReviewSection 
        reviews={reviews}
      />
      </div>
      
    </div>
  );
}
  

// making DetailsPage aware of Redux store
function mapStateToProps(state) {
  return {
    businessDetails: state.businessDetails
  };
}

export default connect(mapStateToProps)(DetailsPage);
