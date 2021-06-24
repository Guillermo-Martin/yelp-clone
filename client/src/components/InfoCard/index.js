import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import stars45 from "../../assets/images/stars45.png"
import "./styles.css";


function InfoCard(props) {
  return (
    /* width will take 100% of its container */
    <Card className="InfoCard">
      {/* <a href="#"><Card.Img variant="top" src={props.src} /></a> */}
      <Link to="/details"><Card.Img variant="top" src={props.src} /></Link>
      <Card.Body>
        <Card.Title className="InfoCard-title"><a href="#">{props.name}</a></Card.Title>
        <Card.Text className="InfoCard-review"><img src={stars45} alt="review" />{props.review}</Card.Text>
        <Card.Text className="InfoCard-text">{props.type}</Card.Text>
        <Card.Text className="InfoCard-text">{props.city}</Card.Text>
        <Card.Text className="InfoCard-open"><i class="fas fa-fire"></i> Opened {props.weeks} weeks ago</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InfoCard;
