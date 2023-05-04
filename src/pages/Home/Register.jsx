import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  
  const [error, setError] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError("Password doesn't match");
      return;
    }
    if (password < 8) {
      setError("password will be minimum 8 character");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password have must be one uppercase");
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      setError("Password must have on digit");
      return;
    } else if (!/(?=.*[^\da-zA-Z])/.test(password)) {
      setError("Password must have on spacial character");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Container className="w-25 mx-auto my-2">
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Have an Account? <Link to="/login">Login</Link>
          </Form.Text>
          <Form.Text className="text-success">
            
          </Form.Text>
          <Form.Text className="text-danger">
            {error}
          </Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
