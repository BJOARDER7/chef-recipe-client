import React from "react";
import Footer from "../pages/Shared/Footer";
import RightNav from "../pages/Shared/RightNav";
import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../pages/Shared/NavigationBar";
import LeftNav from "../pages/Shared/LeftNav";
import Header from "../pages/Shared/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      {/* <NavigationBar></NavigationBar> */}
      <Container>
        <Row>
          <Col lg={8}>
            <LeftNav></LeftNav>
          </Col>
          {/* <Col lg={6}>
            <Outlet></Outlet>
          </Col> */}
          <Col lg={4}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
