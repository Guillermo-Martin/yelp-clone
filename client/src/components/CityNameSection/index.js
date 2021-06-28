import React from "react";
import { Link } from "react-router-dom";
import InfoCard from "../InfoCard";
import "./styles.css";

function CityNameSection() {
  return (
    <section className="CityNameSection">
      <h5 className="CityNameSection-title">Yelp Oakland</h5>

      {/* City Navbar */}
      <ul className="CityNameSection-ul"> 
        <li><Link to="/search/default/Alameda" className="CityNameSection-links">Alameda</Link></li>
        <li><Link to="/search/default/Oakland" className="CityNameSection-links">Oakland</Link></li>
        <li><Link to="/search/default/San Francisco" className="CityNameSection-links">San Francisco</Link></li>
        <li><Link to="/search/default/Berkeley" className="CityNameSection-links">Berkeley</Link></li>
        <li><Link to="/search/default/Emeryville" className="CityNameSection-links">Emeryville</Link></li>
        <li><Link to="/search/default/Oakland" className="CityNameSection-links"><i class="fas fa-search CityNameSection-search"></i> More Cities</Link></li>
      </ul>

      <hr></hr>

      <h6>Hot &#38; New Businesses</h6>
      {/* InfoCards */}
      <div className="CityNameSection-card">
        {/* Image by Linda Hinton: https://unsplash.com/@lyndaann1975 */}
        <InfoCard 
          src="https://images.unsplash.com/photo-1607290817806-e93c813ff329?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
          name="Pizza"
          review="10 reviews"
          type="Pizza, Wings"
          city="Oakland, CA"
          weeks="2"
        />
      </div>
      
      <div className="CityNameSection-card">
        {/* Image by Mike:  https://unsplash.com/@omaha */}
        <InfoCard 
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3451&q=80"
          name="Burgers"
          review="12 reviews"
          type="Burgers, American (Traditional)"
          city="Berkeley, CA"
          weeks="3"
        />
      </div>

      <div className="CityNameSection-card">
        <InfoCard 
          src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3580&q=80"
          name="Sushi"
          review="20 reviews"
          type="Sushi Bars, Japanese"
          city="San Francisco, CA"
          weeks="1"
        />
      </div>
      
      <a href="#"><p className="CityNameSection-seeMore">See more hot and new businesses</p></a>
    </section>

  );
}

export default CityNameSection;
