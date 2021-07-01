import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneBusinessDetails } from "./../../actions/detailsPageActions";
import HeroDetails from "../HeroDetails";
import BasicInfoSection from "../BasicInfoSection";
import ShareRowSection from "../ShareRowSection";
import UpdatesSection from "../UpdatesSection";
import MenuSection from "../MenuSection";
import LocationHoursSection from "../LocationHoursSection";
import ReviewSection from "../ReviewSection";

function DetailsPage(props) {
  // get the id from the url using react router
  const businessId = props.match.params.id;

  // extract "businessDetails" state from store
  const businessDetails = useSelector(state => state.businessDetails);

  // save dispatch to a variable
  const dispatch = useDispatch();

  // call useEffect to make the API call (pass in the action to make an API call)
  useEffect(() => {
    dispatch(getOneBusinessDetails(businessId))
  }, [dispatch]);

  return (
    <div>
      {/* <h1>Details Page!</h1> */}
      {/* Hero Image with basic details section */}
      <HeroDetails />

      {/* List/Row of buttons (write a review, add photo, share, save) */}
      <ShareRowSection />

      {/* Basic info section (website, address, etc.) */}
      <BasicInfoSection />

      {/* COVID-19 updates section (?) */}
      <UpdatesSection />

      {/* Menu section */}
      <MenuSection />

      {/* Location and hours section (map) */}
      <LocationHoursSection />

      {/* Review section (with reviews) */}
      <ReviewSection />
    </div>
  );
}

export default DetailsPage;
