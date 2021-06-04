import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./styles.css";

function TopNavbar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/" className="TopNavbar-home">Explore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
          <Nav.Link href="/login"><span className="TopNavbar-link">Sign Up</span></Nav.Link>
          <Nav.Link href="/login"><span className="TopNavbar-link">Log In</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
