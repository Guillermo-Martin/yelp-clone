import React from "react";
import { Button, Form } from "react-bootstrap";
import "./styles.css";

function SignUpPage() {
  return (
    <div className="SignInPage">
      {/* Intro text */}
      <div>
        <h5>Sign Up For Explore</h5>
        <p>Connect with great local businesses</p>
        <p>By continuing you agree to Explore's <a href="#">Terms of Service</a> and acknowledge Explore's <a href="#">Privacy Policy</a>.</p>
      </div>
      
      {/* Buttons */}
      <div>
        <Button>Continue with Facebook</Button>
        <Button>Continue with Google</Button>
        <Button>Continue with Apple</Button>
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
