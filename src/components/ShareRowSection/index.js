import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

function ShareRowSection() {
  return (
    <section className="ShareRowSection">
      <a href="#">
        <Button className="ShareRowSection-btn review">
          <i class="far fa-star"></i>Write a Review
        </Button>
      </a>

      <a href="#">
        <Button className="ShareRowSection-btn other" variant="outline-secondary">
          <i class="fas fa-camera"></i>Add Photo
        </Button>
      </a>

      <a href="#">
        <Button className="ShareRowSection-btn other" variant="outline-secondary">
          <i class="fas fa-upload"></i>Share
        </Button>
      </a>

      <a href="#">
        <Button className="ShareRowSection-btn other" variant="outline-secondary">
          <i class="far fa-bookmark"></i>Save
        </Button>
      </a>
    </section>
  );
}

export default ShareRowSection;
