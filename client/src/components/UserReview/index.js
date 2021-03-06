import React from "react";
import { Button } from "react-bootstrap";
// import stars45 from "../../assets/images/stars45.png";
import "./styles.css";

function UserReview(props) {
  let { name, city, review, src, friends, numReviews, photos, stars, date, businessPhotos, checkIns } = props;
  
  return (
    <div className="UserReview">
      <div className="UserReview-user">
        {/* User image */}
        <img src={src} alt="user picture" />

        {/* Name, city, icons */}
        <div className="UserReview-basic-info">
          <p className="UserReview-basic-info-name">{name}</p>
          <p className="UserReview-basic-info-city">{city}</p>
          {/* row of icons */}
          <div className="UserReview-icons">
            <p><i class="far fa-user"></i>{friends}</p>
            <p><i class="far fa-star"></i>{numReviews}</p>
            <p><i class="far fa-image"></i>{photos}</p>
          </div>
        </div>
      </div>
      
      {/* Rating and date */}
      <div className="UserReview-rating">
        <div>
          {/* <img src={stars45} alt="review stars" className="UserReview-rating-stars" /> */}
          <img src={process.env.PUBLIC_URL + `/images/stars${stars}.png`} alt="review stars" className="UserReview-rating-stars" />
          <span>{date}</span>
        </div>
      </div>
      
      {/* Photo and check-in icons */}
      <div className="UserReview-checkIn">
        <span className="UserReview-checkIn-icon"><i class="far fa-image"></i>{businessPhotos} photos</span>
        <span><i class="far fa-check-circle"></i>{checkIns} check-ins</span>
      </div>

      {/* Review */}
      <p className="UserReview-text">
        {review}
      </p>

      {/* Pictures user took */}
      {/* Picture by RR Abrot: https://unsplash.com/@rr_abrot */}
      <div className="UserReview-images">
        <img src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" alt="coffee shop" className="UserReview-share-img"/>
      </div>
      
      {/* Row of buttons for "useful", "funny", "cool" */}
      <div className="UserReview-buttons">
        <Button variant="outline-secondary">
          <i class="far fa-lightbulb"></i>Useful <span>18</span>
        </Button>
        <Button variant="outline-secondary">
          <i class="far fa-laugh-squint"></i>Funny <span>5</span>
        </Button>
        <Button variant="outline-secondary">
          <i class="far fa-smile-beam"></i>Cool <span>18</span>
        </Button>
      </div>
    </div>
  );
}

export default UserReview;
