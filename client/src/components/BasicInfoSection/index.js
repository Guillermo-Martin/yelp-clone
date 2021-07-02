import React from "react";
import "./styles.css";

function BasicInfoSection(props) {
  // extract data from props
  const { phoneNumber, address, city } = props;
  
  return (
    <section className="BasicInfoSection">
      <div className="BasicInfoSection-div">
        {/* <h2>Basic Info</h2> */}
        <p>
          <a href="#">coffeeshop.com</a>
          <i class="fas fa-external-link-alt"></i>
        </p>

        <hr></hr>

        <p>{phoneNumber}<i class="fas fa-phone"></i></p>

        <hr></hr>

        <p className="BasicInfoSection-directions">
          <a href="#">Get Directions</a>
          <i class="fas fa-directions"></i>
        </p>

        <p className="BasicInfoSection-address">{address} {city} 12345</p>

        <hr></hr>

        <p>
          <a href="#">Message the Business</a>
          <i class="far fa-comment-dots"></i>
        </p>
      </div>
    </section>
  );
}

export default BasicInfoSection;
