import React from "react";
import { Button } from "react-bootstrap";
import date from 'date-and-time';
import "./styles.css";

function HeroDetails(props) {
  // get data from props
  const { name, stars, numReviews, type, heroImage, hours } = props;

  // date and time
  const now = new Date();
  
  // get current Day
  let curDay = date.format(now, "ddd");
  
  // variable to see if business is open
  let isOpen = false;
  
  // loop through the days of the hours array and see if it's equal to the current day
  // if it is, "isOpen" will be true
  for(let i = 0; i < hours.length; i++) {
    if(hours[i].day === curDay) {
      isOpen = true;
      console.log("are you open?", isOpen)
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
        <p><span className={`HeroDetails-open-${isOpen}`}>{isOpen ? "Open" : "Closed"}</span> 7:00 AM - 3:00 PM</p>
        <p className="HeroDetails-updates"><i class="fas fa-info-circle"></i>Hours updated a few days ago</p>
        <a href="#"><Button variant="outline-secondary" className="HeroDetails-btn">See 20 photos</Button></a>
      </div>
    </section>
  );
}

export default HeroDetails;
