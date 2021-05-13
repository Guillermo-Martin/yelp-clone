import React from "react";
import { Card } from "react-bootstrap";
import "./styles.css";

function CategoryTile() {
  return (

    <Card className="CategoryTile">
      <Card.Body>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CategoryTile;
