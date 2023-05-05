import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';
import './Chefs.css';
import { Link } from 'react-router-dom';

const Chefs = () => {

  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-side-bjoarder7.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Row className='mb-4'>
      <h2 className='text-center fs-10 fw-15 text-danger'>Chefs</h2>
      <h2 className='text-center fs-5 fw-5'>MEET OUR EXPERTS</h2>
      <p className='text-center'>While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old</p>
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
                    <Link key={chef.id} to={`/chefs/${chef?.id}`}>
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