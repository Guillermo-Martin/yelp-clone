import React from "react";
import { Button, Form } from "react-bootstrap";
import "./styles.css";

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
      </div>

      <p>Don't worry, we never post without your permission.</p>

      <hr />
      <p>OR</p>
      <hr />

      {/* Form */}
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button>Sign Up</Button>
      </Form>

      <p>Already on Explore? <a href="#">Log In</a></p>
    </div>
  );
}

export default SignUpPage;
