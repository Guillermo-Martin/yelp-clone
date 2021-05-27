import React from "react";
import UserReview from "./../UserReview";
import "./styles.css";

function ReviewSection() {
  return (
    <section className="ReviewSection">
      <h4>Recommended Reviews</h4>
      <UserReview />
    </section>
    
  );
}

export default ReviewSection;
