import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  // const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }

  return (
      <Container>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mx-auto">
                          <Link to="/category/0">Home</Link>
                          <Nav.Link href="#pricing">About</Nav.Link>
                          <Nav.Link href="#pricing">Career</Nav.Link>
                      </Nav>
                      {/* <Nav>
                          {
                              user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                          }

                          {user ?
                              <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                              <Link to="/login">
                                  <Button variant="secondary">Login</Button>
                              </Link>
                          }
                      </Nav> */}
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </Container>
  );
};
    //       <div className='flex items-center pt-4'>
    //       <img className='rounded-full h-12 mr-2' src={logo} alt="" />
    //         <button className='bg-red-800 rounded px-4 py-2 text-white'>Login</button>
    //       </div>
    //       </div>
    //       <div className='flex flex-col justify-center items-center text-white'>
    //         <h2 className='text-3xl font-extrabold'>SUPER HOT PAKAGES</h2>
            
    //         <ol className='text-xl font-bold py-4'>
    //           <li>100+ Foods Items</li>
    //           <li>26+ Drinks</li>
    //           <li>32+ FastFood</li>
    //         </ol>
    //         <button className='bg-red-800 rounded px-4 py-2 text-white'>ORDER NOW</button>
    //       </div>
         
    //     </nav>
        
    //   );
    // }
    
export default NavigationBar;