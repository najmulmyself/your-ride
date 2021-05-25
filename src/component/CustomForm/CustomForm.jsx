import React from "react";
import { Button, Card, Form } from "react-bootstrap";
const CustomForm = () => {
  return (
    <Card>
      <Form className="p-4">
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
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button className="w-100" variant="danger" type="submit">
          Login
        </Button>
        <p className='pt-2 row justify-content-md-center'>Don't have an account? Create An Account</p>
      </Form>
    </Card>
  );
};

export default CustomForm;
