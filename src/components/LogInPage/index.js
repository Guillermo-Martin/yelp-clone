import React from "react";
import { Button, Form } from "react-bootstrap";

function LogInPage() {
  return (
    <div>
      <h1>Log In Page</h1>
      <Button>Continue with Facebook</Button>
      <Button>Continue with Google</Button>
      <Button>Continue with Apple</Button>
      <p>or</p>

      {/* Form */}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  );
}

export default LogInPage;
