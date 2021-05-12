import React from "react";
import { Navbar, Nav, Form, InputGroup, Button, FormControl } from "react-bootstrap";
import exploreLogo from "./../../assets/images/exploreLogo.png";
import "./styles.css";

function SearchSection() {
  return (
    <section id="SearchSection">
      <div>
        {/* <h1>Search Section</h1> */}
        {/* Navbar */}
        <Navbar expand="lg">
          <Navbar.Brand href="#home" className="SearchSection-nav-home">Explore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Sign Up</Nav.Link>
              <Nav.Link href="#link">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Logo */}
        <img src={exploreLogo} alt="logo" className="SearchSection-logo"/>

        {/* Search Form */}
        <Form className="SearchSection-form">
          <Form.Row>
              <Form.Control placeholder="Find food, gym, games..." className="SearchSection-input" />
              <Form.Control placeholder="Near Oakland, CA" className="SearchSection-input" />
              <Button className="SearchSection-submit">Submit</Button>
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
        <p>Lorem Ipsum</p>
        <p>Photo by Lorem Ipsum</p>

      </div>
    </section>
    
  );
}

export default SearchSection;
