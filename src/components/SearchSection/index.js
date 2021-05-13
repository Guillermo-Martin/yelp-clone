import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import exploreLogo from "./../../assets/images/exploreLogo.png";
import "./styles.css";

function SearchSection() {
  return (
    <section id="SearchSection">
      <div>
        {/* Navbar */}
        {/* <Navbar expand="lg">
          <Navbar.Brand href="#home" className="SearchSection-nav-home">Explore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><span className="SearchSection-navlink">Sign Up</span></Nav.Link>
              <Nav.Link href="#link"><span className="SearchSection-navlink">Log In</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}

        {/* Logo */}
        <img src={exploreLogo} alt="logo" className="SearchSection-logo"/>

        {/* Search Form */}
        <Form className="SearchSection-form">
          <Form.Row>
              <Form.Control placeholder="Find food, gym, games..." className="SearchSection-input" />
              <Form.Control placeholder="Near Oakland, CA" className="SearchSection-input" />
              <Button className="SearchSection-submit"><i class="fas fa-search"></i></Button>
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
