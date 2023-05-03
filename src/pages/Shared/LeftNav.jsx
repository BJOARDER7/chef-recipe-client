import React, { useEffect, useState } from "react";
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
      <h4>All Chef</h4>
            <div className='ps-4'>
                {
                    chefs.map(chef => <p
                        key={chef.id}
                    >
                        <Link to={`/chef/${chef.id}`} className='text-black text-decoration-none'>{chef.name}</Link>
                    </p>)
                }
            </div>
    </div>
  );
};

export default LeftNav;
