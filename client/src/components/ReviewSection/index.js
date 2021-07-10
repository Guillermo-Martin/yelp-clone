import React from "react";
import UserReview from "../UserReview";
import "./styles.css";

function ReviewSection(props) {
  console.log("in reviews", props.reviews);

  // extract data from props
  const { reviews } = props;

  // create UserReview for all reviews
  // allReviews array for rendering
  let allReviews = "";

  if(reviews !== undefined){
    allReviews = reviews.map(review => (
      <div>
        <UserReview
          src={review.reviewInfo.imgSrc}
          name={review.reviewInfo.userName}
          city={review.reviewInfo.city}
          review={review.reviewInfo.review}
          friends={review.reviewInfo.friends}
          numReviews={review.reviewInfo.numReviews}
          photos={review.reviewInfo.photos}
          stars={review.reviewInfo.stars}
          date={review.reviewInfo.date}
          businessPhotos={review.reviewInfo.businessPhotos}
          checkIns={review.reviewInfo.checkIns}
        />
      </div>
    ));
  }

  return (
    <section className="ReviewSection">
      <h4>Recommended Reviews</h4>
      {/* If there are no reviews yet, show "no reviews" message */}
      {
        allReviews.length === 0
        ?
        <p className="ReviewSection-none">Can you believe it?  No one's written a review yet!</p>
        :
        allReviews
      }
    </section>
  );
}

export default ReviewSection;
