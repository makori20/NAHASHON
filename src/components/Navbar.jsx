// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';
import logo from '../assets/images/logo.jpg'; // Assuming you have a logo image

const Navbar = () => {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" className="mb-4 sticky-top" style={{ borderBottom: '3px solid #0d6efd' }}>
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src={logo} 
            alt="NASON IT SOLUTION Logo" 
            height="40"
            className="d-inline-block align-top me-2 rounded"
          />
          <span className="font-weight-bold">NASON IT SOLUTION</span>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2">About</Nav.Link>
            <Nav.Link as={Link} to="/services" className="mx-2">Services</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="mx-2">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">Contact</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;