import React from "react";
import map from "../../assets/images/map.png";
import { Button } from "react-bootstrap";
import date from "date-and-time";
import "./styles.css";

function LocationHoursSection(props) {
  // extract data from props
  const { address, city, neighborhood, zipcode, intersection, hours } = props;

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

  // hours array for rendering
  let allHours = "";

  // create list of hours
  // https://stackoverflow.com/questions/24706267/error-cannot-read-property-map-of-undefined
  if(hours !== undefined) {
    allHours = hours.map(hour => (
      <li>
        <span className="LocationHoursSection-day">{hour.day}</span> 
        <span className="LocationHoursSection-hours">{hour.hours}</span>
        {/* Ternary:  if curDay is equal to hour.day AND isOpen is true, show "Open Now"; else if curDay is equal to hour.day AND isOpen is false, show "closed now" */}
        {
          curDay === hour.day && isOpen 
          ? 
          <span className="LocationHoursSection-open">Open now</span>
          : 
          curDay === hour.day && isOpen === false
            ?
            <span className="LocationHoursSection-closed">Closed now</span>
            :
          null
        }
      </li>
    ));
  }

  
  return (
    <section className="LocationHoursSection">
      <h5>Location &#38; Hours</h5>
      <img src={map} alt="map" className="LocationHoursSection-map" />
      <p className="LocationHourSection-address address">{address}</p>
      <p className="LocationHourSection-address city">{city} {zipcode}</p>
      <p className="LocationHourSection-address">{intersection}</p>
      <p className="LocationHourSection-address">{neighborhood}</p>
      <a href="#"><Button variant="outline-secondary">Get Directions</Button></a>
      <ul>
        {allHours}
      </ul>
      <a href="#" className="LocationHoursSection-edit"><i class="fas fa-pencil-alt"></i>Edit Business Info</a>
    </section>
  );
}

export default LocationHoursSection;

// ****make "open" and "close" dynamic****