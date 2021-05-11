import React from "react";
import { Navbar, Nav, Form, Col, Button } from "react-bootstrap";
import exploreLogo from "./../../assets/images/exploreLogo.png";
import "./styles.css";

function SearchSection() {
  return (
    <section id="SearchSection">
      <div>
        {/* <h1>Search Section</h1> */}
        {/* Navbar */}
        <Navbar expand="lg">
          <Navbar.Brand href="#home">Explore</Navbar.Brand>
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
        <Form>
          <Form.Row>
            <Col>
              <Form.Control placeholder="food, gym, games..." />
            </Col>
            <Col>
              <Form.Control placeholder="Oakland, CA" />
            </Col>
            <Button>Submit</Button>
          </Form.Row>
        </Form>

        {/* Links */}
        <ul>
          <li><a href="#">Restaurants</a></li>
          <li><a href="#">Gyms</a></li>
          <li><a href="#">Shops</a></li>
          <li><a href="#">Groceries</a></li>
        </ul>

        {/* Image Credit */}
        <p>Lorem Ipsum</p>
        <p>Photo by Lorem Ipsum</p>

      </div>
    </section>
    
  );
}

export default SearchSection;
