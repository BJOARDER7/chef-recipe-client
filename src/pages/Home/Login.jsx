import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { user, signIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

    const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)

    setError('');
    setSuccess('');
    
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
    .then(result => {
      const loginUser = result.user;
      console.log(loginUser)
      setSuccess('User Login Successfully')
      setError('');
      
    })
    .catch(error => {
      console.log(error.message)
      setError(error.message)
    })
    
  };

  return (
    <Container className="w-25 mx-auto my-2">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
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

        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't Have an Account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success">{success}</Form.Text>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </Container>
  );
};
export default Login;
