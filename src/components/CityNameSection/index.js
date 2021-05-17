import React from "react";
import InfoCard from "./../InfoCard";
import "./styles.css";

function CityNameSection() {
  return (
    <section className="CityNameSection">
      {/* NEXT: Style */}
      <h5 className="CityNameSection-title">Yelp Oakland</h5>

      {/* City Navbar */}
      <ul className="CityNameSection-ul"> 
        {/* NEXT: convert to links */}
        {/* NEXT: style */}
        <li><a href="#" className="CityNameSection-links">Alameda</a></li>
        <li><a href="#" className="CityNameSection-links">Oakland</a></li>
        <li><a href="#" className="CityNameSection-links">San Francisco</a></li>
        <li><a href="#" className="CityNameSection-links">Berkeley</a></li>
        <li><a href="#" className="CityNameSection-links">Emeryville</a></li>
        {/* NEXT: add magnifying glass icon */}
        <li><a href="#" className="CityNameSection-links"><i class="fas fa-search CityNameSection-search"></i> More Cities</a></li>
      </ul>

      <hr></hr>

      <h6>Hot &#38; New Businesses</h6>
      {/* InfoCards */}
      <InfoCard 
        src="https://images.unsplash.com/photo-1607290817806-e93c813ff329?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
        name="Pizza"
        review="**** 10 reviews"
        type="Pizza, Wings"
        city="Oakland, CA"
        weeks="2"
      />

      <p>See more hot and new businesses</p>
    </section>

  );
}

export default CityNameSection;
