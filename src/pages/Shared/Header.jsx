import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.jpg";
import userLogo from "../../assets/user.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {

  const {user} = useContext(AuthContext);

  return (
    <div className="container d-md-flex justify-content-md-between align-items-center bg-info">
      <div className="d-flex align-items-center py-2">
        <img className="logo-img" src={logo} alt="" />
        <h2 className="text-danger">FoodCafe</h2>
      </div>

      <div className="d-flex gap-3 me-5 nav-menu">
        <Link to="/">Home</Link>
        <Link to="/chefs">Chefs</Link>
        <Link to="/foods">Foods</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="flex-grow-1">
        {user ?  
        <img className="user-logo me-2" src={userLogo} alt="" />
        : <button>Welcome</button>
        }
        <Link to="/login">
          <button className="rounded">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
