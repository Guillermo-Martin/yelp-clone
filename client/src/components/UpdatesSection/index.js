import React from "react";
import "./styles.css";

function UpdatesSection() {
  return (
    <section className="UpdatesSection">
      <div className="UpdatesSection-div">
        <h5>COVID-19 Updates 
          <a href="#">
            <span>Edit<i class="fas fa-pencil-alt"></i></span>
          </a>
        </h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="UpdatesSection-div-date">Posted on May 21, 2021</p>

        <h6>Updated Services</h6>
        <ul>
          <li><i class="fas fa-check"></i>Delivery</li>
          <li><i class="fas fa-check"></i>Takeout</li>
          <li><i class="fas fa-times"></i>Sit-down dining</li>
          <li><i class="fas fa-times"></i>Outdoor seating</li>
        </ul>
      
        <h6>Health &#38; Safety Measures</h6>
        <p className="UpdatesSection-p-safety">Based on info from the business or our users <i class="fas fa-info-circle"></i></p>
        <ul>
          <li><i class="fas fa-check"></i>Social distance enforced</li>
          <li><i class="fas fa-check"></i>Staff wears masks</li>
          <li><i class="fas fa-check"></i>Limited capacity</li>
          <li><i class="fas fa-check"></i>Mask required</li>
        </ul>
      </div>
      
    </section>
  );
}

export default UpdatesSection;
