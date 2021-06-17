import React from "react";
import { Form, Button } from "react-bootstrap";
import useInputState from "../../hooks/useInputState";
import axios from "axios";
import exploreLogo from "../../assets/images/exploreLogo.png";
import "./styles.css";

function SearchSection() {
  const [ business, setBusiness, resetBusiness ] = useInputState("");
  const [ city, setCity, resetCity ] = useInputState("");

  // onSubmit function
  function onSubmit() {
    console.log("Business: " + business + " & " + "City: " + city);
    
    // reset business and city
    resetBusiness();
    resetCity();
  }

  return (
    <section id="SearchSection">
      <div>
        {/* Logo */}
        <img src={exploreLogo} alt="logo" className="SearchSection-logo"/>

        {/* Search Form */}
        <Form className="SearchSection-form" onSubmit={onSubmit}>
          <Form.Row>
              <Form.Control value={business} placeholder="Find food, gym, games..." onChange={setBusiness} className="SearchSection-input" />
              <Form.Control value={city} placeholder="Near Oakland, CA" onChange={setCity} className="SearchSection-input" />
              <Button className="SearchSection-submit" type="submit"><i class="fas fa-search"></i></Button>
          </Form.Row>
        </Form>

        {/* Links */}
        <ul className="SearchSection-ul">
          <li className="SearchSection-links"><i class="fas fa-utensils"></i><a href="#">Restaurants</a></li>
          <li className="SearchSection-links"><i class="fas fa-dumbbell"></i><a href="#">Gyms</a></li>
          <li className="SearchSection-links"><i class="fas fa-store-alt"></i><a href="#">Shops</a></li>
          <li className="SearchSection-links"><i class="fas fa-carrot"></i><a href="#">Groceries</a></li>
        </ul>

        {/* Image Credit */}
        <div className="SearchSection-credit">
          <a href="https://unsplash.com/photos/GXXYkSwndP4">Cozy Bar</a>
          <p>Photo by <a href="https://unsplash.com/@impatrickt">Patrick Tomasso</a></p>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
