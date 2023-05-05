import React from 'react';
import NavigationBar from '../Shared/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import Chefs from '../Shared/Chefs';
import LeftNav from '../Shared/LeftNav';
import RightNav from '../Shared/RightNav';

const Home = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container>
                <Row>
                    <Col lg={9}>
                        <LeftNav></LeftNav>
                    </Col>
                    
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
                <Chefs></Chefs>
                
        </Container>
    </div>
  );
};

export default Home;