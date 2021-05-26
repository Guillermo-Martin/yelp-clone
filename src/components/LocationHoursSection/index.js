import React from "react";
import map from "./../../assets/images/map.png";
import { Button } from "react-bootstrap";

function LocationHoursSection() {
  return (
    <section>
      <h5>Location &#38; Hours</h5>
      <img src={map} alt="map" />
      <p>123 Fake Street</p>
      <p>Oakland, CA 12345</p>
      <p>12th Street &#38; Broadway</p>
      <p>Downtown Oakland</p>
      <Button>Get Directions</Button>
      <ul>
        <li>Mon 4:30 AM - 5:30 PM</li>
        <li>Tues 4:30 AM - 5:30 PM</li>
        <li>Wed 4:30 AM - 5:30 PM</li>
        <li>Thurs 4:30 AM - 5:30 PM</li>
        <li>Fri 4:30 AM - 5:30 PM</li>
        <li>Sat Closed</li>
        <li>Sun Closed</li>
      </ul>
    </section>
  );
}

export default LocationHoursSection;
