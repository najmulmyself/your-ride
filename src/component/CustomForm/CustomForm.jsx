import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./CustomForm.css";
const CustomForm = ({ newUser, setNewUser }) => {
  return (
    <Card>
      <h2 className="text-center mb-4 pt-2">
        {!newUser ? "Login" : "Create"} an Account
      </h2>
      <Form className="p-4">
        {newUser && (
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <h5>Name</h5>
            </Form.Label>
            <Form.Control type="text" placeholder="Your Full Name" required />
          </Form.Group>
        )}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <h5>Email Address</h5>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <h5>Password</h5>
          </Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        {newUser && (
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <h5>Confirm Password</h5>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
        )}
        {!newUser && (
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
        )}
        <Button className="w-100" variant="danger" type="submit">
          {newUser ? "Create An Account" : "Login"}
        </Button>
        <p className="text-center m-0 p-1">
          {newUser ? "Already an Account?" : "Don't have an Account?"}

          <Button
            onClick={() => setNewUser(!newUser)}
            variant="link"
            className="text-center vertical-align-none vertical-align-baseline shadow-none"
          >
            {newUser ? "Login" : "Create an Account"}
          </Button>
        </p>
      </Form>
    </Card>
  );
};

export default CustomForm;
