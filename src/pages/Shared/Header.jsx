import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.jpg";
import userLogo from "../../assets/user.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogout =() => {
    logOut()
    .then()
    .catch(error=>console.log(error))
  }

  return (
    <div className="d-md-flex justify-content-md-between align-items-center bg-info">
      <div className="d-flex align-items-center p-2">
        <img className="logo-img" src={logo} alt="" />
        <h2 className="text-danger">FoodCafe</h2>
      </div>

      <div className="d-flex gap-3 me-5">
        <Link className="link-menu" to="/">Home</Link>
        <Link className="link-menu" to="/chefs">Chefs</Link>
        <Link className="link-menu" to="/foods">Foods</Link>
        <Link className="link-menu" to="/blog">Blog</Link>
      </div>
      <div className="d-flex pe-2">
        {user ?  <>
        <img className="user-logo" src={userLogo} alt="" />
        <button onClick={handleLogout} className="rounded btn-danger btn btn-xs">Signout</button>
        </>
        : <>
        <Link to="/login">
          <button className="rounded ms-2">Login</button>
        </Link>
        </>
      }
      </div>
    </div>
  );
};

export default Header;
