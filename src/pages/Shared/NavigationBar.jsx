import React, { useContext } from 'react';
import './NavigationBar.css';
import banner1 from "../../assets/istockphoto-1.jpg";
import banner2 from "../../assets/istockphoto-2.jpg";
import banner3 from "../../assets/istockphoto-3.jpg";
import { Carousel } from 'react-bootstrap';

const NavigationBar = () => {
  

  return (
    <Carousel className='mb-4'>
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
  )
  }   
export default NavigationBar;