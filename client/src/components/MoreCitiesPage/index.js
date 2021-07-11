import React from "react";
import { eastBay, sanFrancisco, peninsula, southBay, northBay } from "./../../assets/data/cities";
import "./styles.css";

// create li's for each region
const eastBayCities = eastBay.map(city => (
  <li className="MoreCitiesPage-li"><a href={city.map}>{city.city}</a></li>
));

const sfNeighborhoods = sanFrancisco.map(neighborhood => (
  <li className="MoreCitiesPage-li"><a href={neighborhood.map}>{neighborhood.city}</a></li>
));

const peninsulaCities = peninsula.map(city => (
  <li className="MoreCitiesPage-li"><a href={city.map}>{city.city}</a></li>
));

const southBayCities = southBay.map(city => (
  <li className="MoreCitiesPage-li"><a href={city.map}>{city.city}</a></li>
));

const northBayCities = northBay.map(city => (
  <li className="MoreCitiesPage-li"><a href={city.map}>{city.city}</a></li>
));



function MoreCitiesPage() {
  return (
    <section className="MoreCitiesPage">
      <h2>More Places to Explore</h2>

      <hr></hr>
      
      <div className="MoreCitiesPage-cities">
        <div className="MoreCitiesPage-cities-float">
          <h3>East Bay</h3>
          <ul className="MoreCitiesPage-ul">
            {eastBayCities}
          </ul>
        </div>
        
        <div className="MoreCitiesPage-cities-float">
          <h3>San Francisco</h3>
          <ul className="MoreCitiesPage-ul">
            {sfNeighborhoods}
          </ul>
        </div>

        <div className="MoreCitiesPage-cities-float">
          <h3>Peninsula</h3>
          <ul className="MoreCitiesPage-ul">
            {peninsulaCities}
          </ul>
        </div>

        <div className="MoreCitiesPage-cities-float">
          <h3>South Bay</h3>
          <ul className="MoreCitiesPage-ul">
            {southBayCities}
          </ul>
        </div>

        <div className="MoreCitiesPage-cities-last">
          <h3>North Bay</h3>
          <ul className="MoreCitiesPage-ul">
            {northBayCities}
          </ul>
        </div>
      </div>
      
    </section>
  );
}

export default MoreCitiesPage;
