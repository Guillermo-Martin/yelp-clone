import React from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import "./styles.css";

// Create months for birthday dropdown
const months = ["Month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const allMonths = months.map(month => (
  <option key={month}>{month}</option>
));

// Create days for birthday dropdown
const days = ["Day"];
for(let i = 1; i <= 31; i++) {
  days.push(i);
}

const allDays = days.map(day => (
  <option key={day}>{day}</option>
));

// Create years for birthday dropdown
const years = [];
for(let j = 1900; j <= 2021; j++) {
  years.push(j);
}

const allYears = years.map(year => (
  <option key={year}>{year}</option>
));

// Component
function SignUpPage() {
  return (
    <div className="SignUpPage">
      {/* Intro text */}
      <div>
        <h4>Sign Up For Explore</h4>
        <p className="SignUpPage-connect">Connect with great local businesses</p>
        <p className="SignUpPage-terms">By continuing you agree to Explore's <a href="#">Terms of Service</a> and acknowledge Explore's <a href="#">Privacy Policy</a>.</p>
      </div>
      
      {/* Buttons */}
      <div className="SignUpPage-buttons">
        <Button className="SignUpPage-buttons-facebook"><i class="fab fa-facebook"></i>Continue with Facebook</Button>
        <Button className="SignUpPage-buttons-google"><i class="fab fa-google"></i>Continue with Google</Button>
        <Button className="SignUpPage-buttons-apple"><i class="fab fa-apple"></i>Continue with Apple</Button>
        <p>Don't worry, we never post without your permission.</p>
      </div>

      {/* Horizontal Rules */}
      <div className="SignUpPage-hr">
        <hr className="SignUpPage-hr1" /><span>OR</span><hr className="SignUpPage-hr2" />
      </div>
      
      {/* Form */}
      <Form>
        <Form.Group controlId="formGroupFirstName">
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group controlId="formGroupLastName">
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group controlId="formGroupEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formGroupPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formGroupZIPCode">
          <Form.Control type="text" placeholder="ZIP Code" />
        </Form.Group>

        {/* Birthday */}
        <h6 className="SignUpPage-birthday-header">Birthday <span>Optional</span></h6>
        <div className="SignUpPage-birthday">
          <Form.Group controlId="formGroupMonthSelect" className="SignUpPage-birthday-select">
            <Form.Control as="select">
              {allMonths}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formGroupDaySelect" className="SignUpPage-birthday-select">
            <Form.Control as="select">
              {allDays}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formGroupYearSelect" className="SignUpPage-birthday-select">
            <Form.Control as="select">
              <option>Year</option>
              {allYears.reverse()}
            </Form.Control>
          </Form.Group>
        </div>

        <Button className="SignInPage-SignUp-button">Sign Up</Button>
      </Form>

      <p className="SignInPage-login">Already on Explore? <a href="/login">Log In</a></p>
      
    </div>
  );
}



export default SignUpPage;
