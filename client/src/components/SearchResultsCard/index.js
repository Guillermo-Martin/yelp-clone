import React from "react";
import { Card } from "react-bootstrap";
import reviewStars from "./../../assets/images/reviewStars.png";
import "./styles.css";

function SearchResultsCard() {
  return (
      <Card className="SearchResultsCard">
        
        <Card.Body>
          <img className="SearchResultsCard-img"src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3455&q=80" alt="pizza" />
          <Card.Title className="SearchResultsCard-business">Pizza Restaurant</Card.Title>
          <img src={reviewStars} alt="review stars" />
          <p>$$ &#8226; Pizza</p>
          <Card.Text>
          Cursus sit amet dictum sit amet justo donec. Nunc eget lorem dolor sed. Praesent semper feugiat nibh sed pulvinar proin.
          </Card.Text>
          
        </Card.Body>
      </Card>

  );
}

export default SearchResultsCard;
