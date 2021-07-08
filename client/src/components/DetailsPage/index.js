import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { getOneBusinessDetails } from "./../../actions/detailsPageActions";
import HeroDetails from "../HeroDetails";
import BasicInfoSection from "../BasicInfoSection";
import ShareRowSection from "../ShareRowSection";
import UpdatesSection from "../UpdatesSection";
import MenuSection from "../MenuSection";
import LocationHoursSection from "../LocationHoursSection";
import ReviewSection from "../ReviewSection";
import Loader from "./../Loader";

function DetailsPage(props) {
  // get the id from the url using react router
  const businessId = props.match.params.id;

  // extract state from store
  const businessDetails = useSelector(state => state.businessDetails);
  const isLoading = useSelector(state => state.businessDetails.isLoading);

  // the data
  // extract data from store
  const { name, stars, numReviews, type, phoneNumber, address, city, neighborhood, zipcode, intersection, website, hours, covid19Updates, services, safety, reviews, heroImage } = businessDetails.details;

  // save dispatch to a variable
  const dispatch = useDispatch();

  // call useEffect to make the API call (pass in the action to make an API call)
  useEffect(() => {
    dispatch(getOneBusinessDetails(businessId))
  }, []);


  console.log("businessDetails", businessDetails);

  return (
    <div>
      {/* if "isLoading" is true, display the loader; otherwise, show the info */}
      {
        isLoading
        ?
        <Loader />
        :
        <div>
        {/* <h1>Details Page!</h1> */}
        {/* Hero Image with basic details section */}
        
          <HeroDetails 
          name={name}
          stars={stars}
          numReviews={numReviews}
          type={type}
          heroImage={heroImage}
          hours={hours}
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
        <MenuSection />

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
      }
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
