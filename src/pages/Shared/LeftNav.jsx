import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import './LeftNav.css';
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-center text-bold">HOT FOOD ITEMS</h2>
      <div className="card-container">
      
      {chefs?.map((chef) => 
        <CardGroup key={chef?.id}>
        
        
          {chef.recipes?.slice(0, 1).map((recipe) => 
            <Card key={recipe.id}>
                 
              <Card.Img variant="top" src={recipe?.picture} />
      
        
        <Card.Body>
          <Card.Title className="text-center text-danger">{recipe?.name}</Card.Title>
          <Card.Text>
            {chef.short_bio}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="mx-auto">
          <Link to={`/chefs/${chef?.id}`}>
              <button className="bg-danger rounded">ORDER NOW</button>
            </Link>
        </Card.Footer>
        
        
      </Card>
      
          )}
  
    </CardGroup>
      )}
      </div>

    </div>
  );
};

export default LeftNav;
