// components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-primary mb-4">NASON IT SOLUTION</h5>
            <p>
              Providing comprehensive IT solutions and accounting services to help businesses 
              thrive in the digital age.
            </p>
            <p className="mb-0">"DISCOVER THE CHANGE!"</p>
          </Col>
          
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-primary mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li className="mb-2"><a href="/projects" className="text-white text-decoration-none">Projects</a></li>
              <li className="mb-2"><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5 className="text-primary mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-envelope me-2 text-primary"></i>
                nasonfastitsolution780@gmail.com
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-phone me-2 text-primary"></i>
                0793642195
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} NASON IT SOLUTION. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;