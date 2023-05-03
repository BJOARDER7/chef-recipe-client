import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/hot-food-logo.webp';

const Navbar = () => {
           
      return (
        <nav className='nav-menu container px-4'>
          <div className=' md:flex md:justify-between md:pb-24'>
          <div className='flex items-center pt-4'>
            <img className='rounded-full h-12 mr-2' src={logo} alt="" />
            <h2 className='text-4xl text-red-800'>FoodCafe</h2>
          </div>
          <div className='flex flex-col md:flex-row md:items-center gap-6 pt-4 text-white'>
          <Link to="/">Home</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          </div>
          <div className='flex items-center pt-4'>
          <img className='rounded-full h-12 mr-2' src={logo} alt="" />
            <button className='bg-red-800 rounded px-4 py-2 text-white'>Login</button>
          </div>
          </div>
          <div className='flex flex-col justify-center items-center text-white'>
            <h2 className='text-3xl font-extrabold'>SUPER HOT PAKAGES</h2>
            
            <ol className='text-xl font-bold py-4'>
              <li>100+ Foods Items</li>
              <li>26+ Drinks</li>
              <li>32+ FastFood</li>
            </ol>
            <button className='bg-red-800 rounded px-4 py-2 text-white'>ORDER NOW</button>
          </div>
         
        </nav>
        
      );
    }
    

export default Navbar;