import React from "react";
import { Button, Form } from "react-bootstrap";
import "./styles.css";

function LogInPage() {
  return (
    <div className="LogInPage">
      {/* Intro text */}
      <div>
        <h4>Log in to Explore</h4>
        <p className="LogInPage-sign-up">New to Explore? <a href="#">Sign up</a></p>
        <p className="LogInPage-terms">By logging in, you agree to Explore’s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></p>
      </div>

      <div className="LogInPage-buttons">
        <a><Button className="LogInPage-buttons-facebook"><i class="fab fa-facebook"></i>Continue with Facebook</Button></a>
        <a><Button className="LogInPage-buttons-google"><i class="fab fa-google"></i>Continue with Google</Button></a>
        <a><Button className="LogInPage-buttons-apple"><i class="fab fa-apple"></i>Continue with Apple</Button></a>
      </div>
      
      <div className="LogInPage-hr">
        <hr className="LogInPage-hr1" /><span>OR</span><hr className="LogInPage-hr2" />
        
      </div>

      {/* Form */}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
          <div className="LogInPage-form-label">
            <Form.Label><a href="#">Forgot password?</a></Form.Label>
          </div>
        </Form.Group>
        
        <a href="#">
          <Button variant="primary" type="submit" className="LogInPage-login-button">Log In</Button>
        </a>
      </Form>
    </div>
  );
}

export default LogInPage;
