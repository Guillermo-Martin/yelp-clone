import React from "react";
import { Card } from "react-bootstrap";
import "./styles.css";

function CategoryTile(props) {
  return (
    <Card className="CategoryTile">
      <Card.Body className="CategoryTile-body">
        <Card.Img variant="top" className="CategoryTile-img" src={props.src} />
        <Card.Title className="CategoryTile-title">{props.category}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CategoryTile;
