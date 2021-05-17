import React from "react";
import { Card } from "react-bootstrap";
import "./styles.css"

function InfoCard(props) {
  return (
    /* width will take 100% of its container */
    <Card className="InfoCard">
      {/* NEXT: convert image to a link */}
      <a href="#"><Card.Img variant="top" src={props.src} /></a>
      <Card.Body>
        {/* NEXT: convert name to link */}
        <Card.Title className="InfoCard-title"><a href="#">{props.name}</a></Card.Title>
        {/* NEXT: Add image for stars */}
        <Card.Text className="InfoCard-review">{props.review}</Card.Text>
        <Card.Text className="InfoCard-text">{props.type}</Card.Text>
        <Card.Text className="InfoCard-text">{props.city}</Card.Text>
        <Card.Text className="InfoCard-open"><i class="fas fa-fire"></i> Opened {props.weeks} weeks ago</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InfoCard;
