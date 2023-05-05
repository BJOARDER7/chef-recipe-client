import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Toast from 'react-bootstrap/Toast';
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const {user, createUser, } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess('');
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email,password,confirm)

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
 
    createUser(email, password)
    .then(result => {
      const loginUser = result.user;
      console.log(loginUser)
      setError('');
      form.reset();
      setSuccess('SUCCESSFULLY REGISTER')
      
    })
    .catch(error => {
      console.log(error.message)
      setError(error.message)
    })
  };

  return (
    <div>
      <Container className="w-75 mx-auto my-4">
        <h3>Registration</h3>
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
            {success}
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
