import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';
import './Chefs.css';
import { Link } from 'react-router-dom';

const Chefs = () => {

  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Row className='my-4'>
          <div className="chef-img">
            {chefs?.map((chef) => (
              <CardGroup key={chef.id}>
                <Card>
                  
                  <Card.Img style={{ height: '200px', objectFit: 'cover' }} variant="top" src={chef.picture} />

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
  );
};

export default Chefs;