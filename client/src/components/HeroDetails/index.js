import React from "react";
import { Button } from "react-bootstrap";
import stars45 from "../../assets/images/stars45.png";

import "./styles.css";

function HeroDetails(props) {
  // get data from props
  const { name, stars, numReviews, type } = props;
  return (
    <section className="HeroDetails">
      <div>
        <h2 className="HeroDetails-name">{name}</h2>
        <img src={process.env.PUBLIC_URL + `/images/stars${stars}.png`} alt="number of stars" />
        <p>{numReviews} reviews</p>
        <p className="HeroDetails-claimed"><i class="fas fa-check-circle"></i>Claimed</p>
        <p>{type}</p>
        <p><span className="HeroDetails-status">Open</span> 7:00 AM - 3:00 PM</p>
        <p className="HeroDetails-updates"><i class="fas fa-info-circle"></i>Hours updated a few days ago</p>
        <a href="#"><Button variant="outline-secondary" className="HeroDetails-btn">See 20 photos</Button></a>
      </div>
    </section>
  );
}

export default HeroDetails;
