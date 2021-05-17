import React from "react";
import { Card } from "react-bootstrap";

function InfoCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* NEXT: convert image to a link */}
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        {/* NEXT: convert name to link */}
        <Card.Title>{props.name}</Card.Title>
        {/* NEXT: Add image for stars */}
        <Card.Text>{props.review}</Card.Text>
        <Card.Text>{props.type}</Card.Text>
        <Card.Text>{props.city}</Card.Text>
        <Card.Text>Opened {props.weeks} weeks ago</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InfoCard;
