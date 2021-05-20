import React from "react";
import reviewStars from "./../../assets/images/reviewStars.png";
import "./styles.css";

function HeroDetails() {
  return (
    <section className="HeroDetails">
      <div>
        <h2 className="HeroDetails-name">Business Name</h2>
        <img src={reviewStars} />
        <p>10 reviews</p>
        <p>Claimed/Type of Business</p>
        <p>Hours</p>
      </div>
    </section>
  );
}

export default HeroDetails;
