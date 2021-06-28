import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useInputState from "../../hooks/useInputState";
import { Link } from "react-router-dom";
import exploreLogo from "../../assets/images/exploreLogo.png";
import "./styles.css";

function SearchSection() {
  // React hooks, multiple inputs: https://stackoverflow.com/questions/63710791/react-hooks-handle-multiple-inputs
  // form inputs state
  const [ inputs, setInputs ] = useState({
    business: "",
    city: ""
  });

  // handleChange function for inputs
  function handleChange(event) {
    setInputs(prevState => ({...prevState, [event.target.name]: event.target.value}));
  }
  

  // onSubmit function
  function onSubmit(event) {
    event.preventDefault();
    
    // destructure input data
    let { business, city } = inputs;

    // check to see if any of the inputs are empty
    if(business === "" && city === ""){
      business = "default";
      city = "default";
    } else if(business === "") {
      business = "default";
    } else if(city === "") {
      city = "default"
    }
    
    // go to "/search/:business/:cityInput"
    window.location.href = `/search/${business}/${city}`;
    
    // reset business and city
    setInputs(prevState => ({...prevState, business: ""}));
    setInputs(prevState => ({...prevState, city: ""}));
  }

  return (
    <section id="SearchSection">
      <div>
        {/* Logo */}
        <img src={exploreLogo} alt="logo" className="SearchSection-logo"/>

        {/* Search Form */}
        <Form className="SearchSection-form" onSubmit={onSubmit}>
          <Form.Row>
              <Form.Control name="business" value={inputs.business} placeholder="Find food, gym, games..." onChange={handleChange} className="SearchSection-input" />
              <Form.Control name="city" value={inputs.city} placeholder="Near Oakland, CA" onChange={handleChange} className="SearchSection-input" />
              <Button className="SearchSection-submit" type="submit"><i class="fas fa-search"></i></Button>
          </Form.Row>
        </Form>

        {/* Links */}
        <ul className="SearchSection-ul">
          <li className="SearchSection-links"><i class="fas fa-utensils"></i><Link to="/search/restaurants/default">Restaurants</Link></li>
          <li className="SearchSection-links"><i class="fas fa-dumbbell"></i><Link to="/search/gyms/default">Gyms</Link></li>
          <li className="SearchSection-links"><i class="fas fa-store-alt"></i><Link to="/search/shops/default">Shops</Link></li>
          <li className="SearchSection-links"><i class="fas fa-carrot"></i><Link to="/search/groceries/default">Groceries</Link></li>
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
