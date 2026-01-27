import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/image/logo.svg';
import '../assets/styles/style.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className="container-1 text-decoration-none">
      <Container className="py-md-3 py-5 px-0">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarsExample05" className='nav-btn p-2'>
              <i className="fa-solid fa-bars"></i>
            </Navbar.Toggle>
            <Navbar.Collapse>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
                <li><Nav.Link href="#how-to">How to</Nav.Link></li>
                <li><Nav.Link href="#why-sorsx">Why SorsX</Nav.Link></li>
                <li><Nav.Link href="#reviews">Reviews</Nav.Link></li>
                <li><Nav.Link href="#faq">FAQ</Nav.Link></li>
              </ul>
              <button className="btn custom-btn px-3">Login</button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;