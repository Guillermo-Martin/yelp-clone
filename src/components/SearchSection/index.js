import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function SearchSection() {
  return (
    <div>
      {/* <h1>Search Section</h1> */}
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
    </div>
  );
}

export default SearchSection;
