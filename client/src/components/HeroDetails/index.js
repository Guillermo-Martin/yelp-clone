import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import date from 'date-and-time';
import "./styles.css";

function HeroDetails(props) {
  // get data from props
  const { name, stars, numReviews, type, heroImage, hours, businessUrl, photos } = props;

  // date and time
  const now = new Date();
  
  // get current Day and time
  let curDay = date.format(now, "ddd");
  let curTime = date.format(now, "Hmm");
  
  // variable to see if business is open
  let isOpen = false;

  // variable for the current day's hours
  let openHours = "";
  
  // loop through the days of the hours array and see if it's equal to the current day
  // if it is, see if the current time is within range; if so, "isOpen" will be true
  for(let i = 0; i < hours.length; i++) {
    if(hours[i].day === curDay && (curTime >= hours[i].open && curTime <= hours[i].close)) {
      isOpen = true;
      openHours = hours[i].hours;
    } 
  }

  
  return (
    <section className="HeroDetails" style={{ background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url("${heroImage}")`, backgroundSize: "cover"}}>
      <div>
        <h2 className="HeroDetails-name">{name}</h2>
        <img src={process.env.PUBLIC_URL + `/images/stars${stars}.png`} alt="number of stars" />
        <p>{numReviews} reviews</p>
        <p className="HeroDetails-claimed"><i class="fas fa-check-circle"></i>Claimed</p>
        <p>{type}</p>
        {/* if "isOpen" is true, show "Open"; else show "Closed" */}
        <p><span className={`HeroDetails-open-${isOpen}`}>{isOpen ? "Open" : "Closed"}</span> {openHours}</p>
        <p className="HeroDetails-updates"><i class="fas fa-info-circle"></i>Hours updated a few days ago</p>
        <Link to={`${businessUrl}/photos`}><Button variant="outline-secondary" className="HeroDetails-btn">See {photos.length} photos</Button></Link>
      </div>
    </section>
  );
}

export default HeroDetails;
