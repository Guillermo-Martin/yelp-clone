import React from "react";
import { Card } from "react-bootstrap";
import "./styles.css";

function CategoryTile(props) {
  return (
    // <Card className="CategoryTile">
    <Card className={`${props.section}Tile`}>
      <Card.Body className={`${props.section}Tile-body`}>
        <Card.Img variant="top" className={`${props.section}Tile-img`} src={props.src} />
        <Card.Title className={`${props.section}Tile-title`}>{props.category}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CategoryTile;
