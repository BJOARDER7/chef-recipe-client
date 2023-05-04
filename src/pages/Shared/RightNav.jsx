import React from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub></FaGithub> Login with Github
      </Button>
      <form className="mt-5" >
        <label className="fw-bold fs-3 mb-2" htmlFor="">Registration:</label>
        <input className="mb-2" type="text" name="name" id="name" placeholder="Name"/>
        <input type="email" name="email" id="email" placeholder="Email"/>
        <input className="my-2" type="password" name="password" id="password" placeholder="Password"/>
        <input className="bg-primary" type="submit" value="Register" />
      </form>
      
    </div>
  );
};

export default RightNav;
