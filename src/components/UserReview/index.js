import React from "react";
import { Button } from "react-bootstrap";
import reviewStars from "./../../assets/images/reviewStars.png";

function UserReview() {
  return (
    <div>
      <h1>User</h1>
      {/* // image */}
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user picture" />
      {/* // city */}
      <p>Berkeley, CA</p>
      {/* // row of icons */}
      <div>
        <span><i class="far fa-user"></i>123</span>
        <span><i class="far fa-star"></i>456</span>
        <span><i class="far fa-image"></i>789</span>
      </div>

      {/* // rating and date */}
      <div>
        <img src={reviewStars} alt="review stars" />
        <p>5/27/2021</p>
      </div>
      
      {/* // number of photos and check-ins */}
      <div>
        <span><i class="far fa-image"></i>789</span>
        <i class="far fa-check-circle"></i>
      </div>

      {/* // review */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      {/* // pictures user took */}
      {/* Picture by RR Abrot: https://unsplash.com/@rr_abrot */}
      <img src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" alt="coffee shop" />

      {/* // row of buttons for "useful", "funny", "cool" */}
      <div>
        <Button><i class="far fa-lightbulb"></i>Useful</Button>
        <Button><i class="far fa-laugh-squint"></i>Funny</Button>
        <Button><i class="far fa-smile-beam"></i>Cool</Button>
      </div>
    </div>
  );
}

export default UserReview;