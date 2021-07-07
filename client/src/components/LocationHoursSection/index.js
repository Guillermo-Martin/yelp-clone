import React from "react";
import map from "../../assets/images/map.png";
import { Button } from "react-bootstrap";
import "./styles.css";

function LocationHoursSection(props) {
  // extract data from props
  const { address, city, neighborhood, zipcode, intersection, hours } = props;

  // hours array for rendering
  let allHours = "";

  // create list of hours
  // https://stackoverflow.com/questions/24706267/error-cannot-read-property-map-of-undefined
  if(hours !== undefined) {
    allHours = hours.map(hour => (
      <li><span className="LocationHoursSection-day">{hour.day}</span> {hour.hours}</li>
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
