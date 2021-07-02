import React from "react";
import map from "../../assets/images/map.png";
import { Button } from "react-bootstrap";
import "./styles.css";

function LocationHoursSection(props) {
  // extract data from props
  const { address, city, neighborhood } = props;

  return (
    <section className="LocationHoursSection">
      <h5>Location &#38; Hours</h5>
      <img src={map} alt="map" className="LocationHoursSection-map" />
      <p className="LocationHourSection-address address">{address}</p>
      <p className="LocationHourSection-address city">{city} 12345</p>
      <p className="LocationHourSection-address">12th Street &#38; Broadway</p>
      <p className="LocationHourSection-address">{neighborhood}</p>
      <a href="#"><Button variant="outline-secondary">Get Directions</Button></a>
      <ul>
        <li>Mon 4:30 AM - 5:30 PM</li>
        <li>Tues 4:30 AM - 5:30 PM</li>
        <li>Wed 4:30 AM - 5:30 PM</li>
        <li>Thurs 4:30 AM - 5:30 PM</li>
        <li>Fri 4:30 AM - 5:30 PM</li>
        <li>Sat Closed</li>
        <li>Sun Closed</li>
      </ul>
      <a className="LocationHoursSection-edit"><i class="fas fa-pencil-alt"></i>Edit Business Info</a>
    </section>
  );
}

export default LocationHoursSection;
