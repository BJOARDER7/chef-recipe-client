import React from "react";
import "./Header.css";
import logo from "../../assets/hot-food-logo.webp";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
    //     <nav className="nav-menu relative">
    //       <div className="md:navbar bg-red-100 md:flex md:justify-between p-4">
    //         <div className="flex">
    //           <div className="flex items-center pt-4">
    //             <img className="rounded-full h-12 mr-2" src={logo} alt="" />
    //             <h2 className="text-4xl text-red-800">FoodCafe</h2>
    //           </div>
    //         </div>
    //         <div className="flex flex-col md:flex-row md:items-center md:gap-6 pt-4">
    //           <Link to="/">Home</Link>
    //           <Link to="/pages">Pages</Link>
    //           <Link to="/menu">Menu</Link>
    //           <Link to="/gallery">Gallery</Link>
    //           <Link to="/blog">Blog</Link>
    //           <Link to="/contact">Contact</Link>
    //         </div>
    //         <div className="flex-none gap-2">
    //           <div className="flex items-center pt-4">
    //             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    //               <div className="w-10 rounded-full">
    //                 <img src={logo} />
    //               </div>
    //             </label>
    //             <button className="bg-red-800 rounded px-4 py-2 text-white">
    //               Login
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolue flex flex-col items-center md:pt-36">
    //         <h2 className="text-3xl font-extrabold">SUPER HOT PAKAGES</h2>

    //         <ol className="text-xl font-bold py-4">
    //           <li>100+ Foods Items</li>
    //           <li>26+ Drinks</li>
    //           <li>32+ FastFood</li>
    //         </ol>
    //         <button className="bg-red-800 rounded px-4 py-2 text-white">
    //           ORDER NOW
    //         </button>
    //       </div>
    //     </nav>
  );
};

export default Header;
