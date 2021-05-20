import React from "react";
import reviewStars from "./../../assets/images/reviewStars.png";
import "./styles.css";

function HeroDetails() {
  return (
    <section className="HeroDetails">
      <div>
        <h2 className="HeroDetails-name">Coffee Shop</h2>
        <img src={reviewStars} />
        <p>10 reviews</p>
        <p className="HeroDetails-claimed"><i class="fas fa-check-circle"></i>Claimed</p>
        <p>Coffee &#38; Tea, Cafes</p>
        <p><span className="HeroDetails-status">Open</span> 7:00 AM - 3:00 PM</p>
        <p className="HeroDetails-updates"><i class="fas fa-info-circle"></i>Hours updated a few days ago</p>
      </div>
    </section>
  );
}

export default HeroDetails;
