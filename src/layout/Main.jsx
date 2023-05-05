import React from "react";
import './/Main.css';
import Header from "../pages/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";


const Main = () => {
 

  return (
    <div className="container">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
