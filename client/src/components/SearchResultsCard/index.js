import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import reviewStars from "./../../assets/images/reviewStars.png";
import "./styles.css";

function SearchResultsCard() {
  return (
    <Card className="SearchResultsCard">
      {/* Image */}
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3455&q=80" />
      <Card.Body>
        {/* Business address */}
        <div className="SearchResultsCard-info">
          <Card.Title className="SearchResultsCard-business">Pizza Restaurant</Card.Title>
          <div className="SearchResultsCard-text">
            <div>123 Fake Street</div>
            <div>Oakland, CA 12345</div>
          </div>
        </div>
        
        {/* Ratings and info */}
        <Card.Text className="SearchResultsCard-review SearchResultsCard-text"><img className="SearchResultsCard-stars"src={reviewStars} alt="review" />22</Card.Text>
        <Card.Text className="SearchResultsCard-text">$$ &#8226; Pizza</Card.Text>

        {/* Options */}
        <div className="SearchResultsCard-options">
          <div><i class="fas fa-check"></i>Delivery</div>
          <div><i class="fas fa-times"></i>Takeout</div>
        </div>

        {/* Review */}
        <Card.Text className="SearchResultsCard-text">Cursus sit amet dictum sit amet justo donec. Nunc eget lorem dolor sed. Praesent semper feugiat nibh sed pulvinar proin.</Card.Text>
        <Card.Text className="SearchResultsCard-text"></Card.Text>
      </Card.Body>
    </Card>

  );
}

export default SearchResultsCard;
