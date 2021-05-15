import React from "react";
import InfoCard from "./../InfoCard";

function CityNameSection() {
  return (
    <section>
      <h5>Yelp Oakland</h5>

      {/* City Navbar */}
      <ul>
        <li>Alameda</li>
        <li>Oakland</li>
        <li>San Francisco</li>
        <li>Berkeley</li>
        <li>Emeryville</li>
        <li>More Cities</li>
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
