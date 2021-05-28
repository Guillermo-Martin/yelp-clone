import React from "react";
import { Button, Form } from "react-bootstrap";

function LogInPage() {
  return (
    <div>
      {/* Intro text */}
      <div>
        <p>Log in to Explore</p>
        <p>New to Explore? <a href="#">Sign up</a></p>
        <p>By logging in, you agree to Explore’s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></p>
      </div>
      <Button><i class="fab fa-facebook"></i>Continue with Facebook</Button>
      <Button><i class="fab fa-google"></i>Continue with Google</Button>
      <Button><i class="fab fa-apple"></i>Continue with Apple</Button>
      <hr/>or <hr/>

      {/* Form */}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
          <Form.Label><a href="#">Forgot password?</a></Form.Label>
        </Form.Group>
        
        <Button variant="primary" type="submit">Log In</Button>
      </Form>

    </div>
  );
}

export default LogInPage;
