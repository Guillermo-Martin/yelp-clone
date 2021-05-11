import React from "react";
import { Navbar, Nav, Form, Col, Button } from "react-bootstrap";
import exploreLogo from "./../../assets/images/exploreLogo.jpg";

function SearchSection() {
  return (
    <div>
      {/* <h1>Search Section</h1> */}
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
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
      <img src={exploreLogo} alt="logo" />

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

    </div>
  );
}

export default SearchSection;
