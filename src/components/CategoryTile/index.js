import React from "react";
import { Card } from "react-bootstrap";
import "./styles.css";

function CategoryTile() {
  return (

    <Card className="CategoryTile">
      <Card.Body className="CategoryTile-body">
        {/* Photo by Dan Gold: https://unsplash.com/@danielcgold */}
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" />
        <Card.Title className="CategoryTile-title">Card Title</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CategoryTile;
