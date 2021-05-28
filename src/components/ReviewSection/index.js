import React from "react";
import UserReview from "./../UserReview";
import "./styles.css";

function ReviewSection() {
  return (
    <section className="ReviewSection">
      <h4>Recommended Reviews</h4>
      <UserReview
        src="https://randomuser.me/api/portraits/men/32.jpg"
        name="Tyler A."
        city="Berkeley, CA"
        review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <UserReview
        src="https://randomuser.me/api/portraits/men/41.jpg"
        name="Tyler B."
        city="San Francisco, CA"
        review="At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Eros in cursus turpis massa tincidunt. Integer feugiat scelerisque varius morbi enim nunc faucibus a."
      />
      <UserReview
        src="https://randomuser.me/api/portraits/women/50.jpg"
        name="Samantha A."
        city="Oakland, CA"
        review="Quis risus sed vulputate odio ut enim. Arcu non odio euismod lacinia at. Non diam phasellus vestibulum lorem sed. Non arcu risus quis varius quam quisque. Mattis enim ut tellus elementum. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Maecenas accumsan lacus vel facilisis volutpat est."
      />
      <UserReview
        src="https://randomuser.me/api/portraits/women/89.jpg"
        name="Samantha A."
        city="Emeryville, CA"
        review="Nisl purus in mollis nunc sed id semper risus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Sit amet mauris commodo quis. Purus semper eget duis at tellus at urna condimentum. Magna sit amet purus gravida quis blandit turpis. Lectus sit amet est placerat in egestas erat imperdiet. Sit amet consectetur adipiscing elit. Nec nam aliquam sem et tortor."
      />
    </section>
  );
}

export default ReviewSection;
