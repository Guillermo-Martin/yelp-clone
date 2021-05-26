import React from "react";
import HeroDetails from "./../HeroDetails";
import BasicInfoSection from "./../BasicInfoSection";
import ShareRowSection from "../ShareRowSection";
import UpdatesSection from "./../UpdatesSection";
import MenuSection from "./../MenuSection";
import LocationHoursSection from "./../LocationHoursSection";

function DetailsPage() {
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

    </div>
  );
}

export default DetailsPage;
