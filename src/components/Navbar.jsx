import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setExpanded(false); // Collapse menu after clicking
  };

  // Auto-collapse on route change
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        expanded={expanded}
        fixed="top"
        className="shadow-sm"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
            NASON IT SOLUTION
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded((prev) => !prev)}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link as={Link} to="/" onClick={handleNavClick}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services" onClick={handleNavClick}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" onClick={handleNavClick}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Spacer to push content below the fixed navbar */}
      <div style={{ height: '70px' }} />
    </>
  );
};

export default CustomNavbar;
