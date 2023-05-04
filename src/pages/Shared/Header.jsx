import React from "react";
import "./Header.css";
import logo from "../../assets/logo.jpg";
import user from "../../assets/user.jpg";
import banner1 from "../../assets/istockphoto-1.jpg";
import banner2 from "../../assets/istockphoto-2.jpg";
import banner3 from "../../assets/istockphoto-3.jpg";
import { Button, Carousel, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <img className="logo-img" src={logo} alt="" />
                  <h2 className="">FoodCafe</h2>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#career">Career</Nav.Link>
              </div>
              <div className="d-flex align-items-center">
                <img className="user-logo" src={user} alt="" />
                <Nav.Link eventKey={2} href="#login">
                  <Button variant="secondary">Login</Button>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>SUPER HOT PAKAGES</h3>
            <ol>
              <li>100+ Foods Items</li>
              <li>26+ Drinks</li>
              <li>32+ FastFood</li>
            </ol>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>SUPER HOT PAKAGES</h3>
            <ol>
              <li>100+ Foods Items</li>
              <li>26+ Drinks</li>
              <li>32+ FastFood</li>
            </ol>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>SUPER HOT PAKAGES</h3>
            <ol>
              <li>100+ Foods Items</li>
              <li>26+ Drinks</li>
              <li>32+ FastFood</li>
            </ol>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Header;
