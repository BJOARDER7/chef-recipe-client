import React from 'react';
import errorImg from '../../assets/404-error.jpg';


const NotFound = () => {
  
  return (
    <div>
     <img src={errorImg} alt="Error" />
    </div>
  );
};

export default NotFound;