import React from "react";
import { Card } from "react-bootstrap";
import reviewStars from "./../../assets/images/reviewStars.png";
import "./styles.css";

function SearchResultsCard(props) {

  // Get info from props
  let { src, name, address, numReviews, phoneNumber, review, cost, type, stars, city, neighborhood } = props;

  return (
    <Card className="SearchResultsCard">
      {/* Image */}
      <Card.Img variant="top" src={src} alt={name} />
      <Card.Body>
        {/* Business address */}
        <div className="SearchResultsCard-info">
          <Card.Title className="SearchResultsCard-business">{name}</Card.Title>
          <div className="SearchResultsCard-text">
            <div>{phoneNumber}</div>
            <div>{address}</div>
            <div>{city}</div>
            <div>{neighborhood}</div>
          </div>
        </div>
        
        {/* Ratings and info */}
        <Card.Text className="SearchResultsCard-review SearchResultsCard-text"><img className="SearchResultsCard-stars"src={reviewStars} alt="review" />{numReviews}</Card.Text>
        <Card.Text className="SearchResultsCard-text">{cost} &#8226; {type}</Card.Text>

        {/* Options */}
        <div className="SearchResultsCard-options">
          <div><i class="fas fa-check"></i>Delivery</div>
          <div><i class="fas fa-times"></i>Takeout</div>
        </div>

        {/* Review */}
        <Card.Text className="SearchResultsCard-text">{review}</Card.Text>
        <Card.Text className="SearchResultsCard-text"></Card.Text>
      </Card.Body>
    </Card>

  );
}

export default SearchResultsCard;
