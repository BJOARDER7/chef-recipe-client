import React, { useEffect, useState } from "react";
import Footer from "../pages/Shared/Footer";
import RightNav from "../pages/Shared/RightNav";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../pages/Shared/NavigationBar";
import LeftNav from "../pages/Shared/LeftNav";
import Header from "../pages/Shared/Header";
import { Link } from "react-router-dom";

const Main = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header></Header>
      {/* <NavigationBar></NavigationBar> */}
      <Container>
        <Row className="mb-4">
          <Col lg={9}>
            <LeftNav></LeftNav>
          </Col>
          {/* <Col lg={6}>
            <Outlet></Outlet>
          </Col> */}
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
        <Row>
          <div>
            {chefs?.map((chef) => (
              <CardGroup key={chef.id}>
                <Card>
                  
                  <Card.Img variant="top" src={chef.picture} />

                  <Card.Body>
                    <Card.Title className="text-center text-danger">
                      {chef.name}
                    </Card.Title>
                    <Card.Text>
                      <p>
                        Year of experience: {chef.years_of_experience} years
                      </p>
                      <p><small className="text-black">Speciality:</small> {chef.short_bio}</p>
                      <p>
                        Recipe items:
                        {chef.recipes.map((recipe) => (
                          <li>
                            <small>{recipe.name}</small>
                          </li>
                        ))}
                      </p>
                      <p>Like: {chef.likes[0]}</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="mx-auto">
                    <Link to={`/chefs/${chef?.id}`}>
                      <button className="bg-danger rounded">View Recipes</button>
                    </Link>
                  </Card.Footer>
                </Card>
              </CardGroup>
            ))}
          </div>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
