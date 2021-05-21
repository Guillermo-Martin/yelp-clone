import React from "react";
import HeroDetails from "./../HeroDetails";
import BasicInfoSection from "./../BasicInfoSection";
import ShareRowSection from "../ShareRowSection";
import UpdatesSection from "./../UpdatesSection";

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

      {/* Location and hours section (map) */}

      {/* Review section (with reviews) */}

    </div>
  );
}

export default DetailsPage;
