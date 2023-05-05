import React from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Button } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Register from "../Home/Register";
import app from "../../firebase/firebase.config";

const RightNav = () => {

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button onClick={handleGoogleLogin} className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button onClick={handleGithubLogin} variant="outline-secondary">
        <FaGithub></FaGithub> Login with Github
      </Button>
      <Register></Register>
      
      
    </div>
  );
};

export default RightNav;
