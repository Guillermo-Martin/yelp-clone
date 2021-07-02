import React from "react";
import map from "../../assets/images/map.png";
import { Button } from "react-bootstrap";
import "./styles.css";

function LocationHoursSection(props) {
  // extract data from props
  const { address, city, neighborhood, zipcode, intersection, hours } = props;

  // create list of hours
  const allHours = hours.map(hour => (
    <li>{hour}</li>
  ));

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
