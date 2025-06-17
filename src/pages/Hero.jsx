import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImage from '../assets/images/hero-image.jpg';
import resumePDF from '../assets/documents/resume.pdf';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Nason_IT_Solutions_Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section position-relative overflow-hidden text-dark">
      <Container className="position-relative py-2" style={{ zIndex: 1 }}>
        <Row className="align-items-center">
          <Col lg={12} className="mb-3 text-start">
            <div className="d-flex align-items-center">
              <div
                className="rounded-circle overflow-hidden border border-3 border-dark shadow-lg me-4"
                style={{ width: '180px', height: '180px' }}
              >
                <img
                  src={heroImage}
                  alt="Company Hero"
                  className="img-fluid h-100 w-100 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/180?text=NASON';
                    e.target.style.padding = '1rem';
                  }}
                />
              </div>
            </div>
          </Col>

          <Col lg={12}>
            <h2 className="mb-3 heading-title">
              DISCOVER <span className="text-warning">THE CHANGE!</span>
            </h2>

            <p className="mb-3 lead-text">
              At <strong className="text-primary">Nason IT Solutions</strong>, we drive transformation through
              <strong className="text-success"> smart digital solutions</strong> and
              <strong className="text-success"> professional accounting services</strong> tailored to modern businesses.
            </p>

            <p className="mb-3 lead-text">
              We help companies of all sizes automate, scale, and manage their operations with reliable tools and tech.
            </p>

            <ul className="list-unstyled mb-3 key-points">
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Over 15 years of industry excellence
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Experts in QuickBooks, Sage & ERP Systems
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Software development for web & mobile
              </li>
            </ul>

            <div className="d-flex flex-wrap gap-3">
              <Button variant="primary" href="/projects" className="fw-bold px-4 py-2">
                <i className="bi bi-collection me-2"></i> View Our Projects
              </Button>
              <Button variant="outline-dark" href="/contact" className="fw-bold px-4 py-2">
                <i className="bi bi-chat-left-text me-2"></i> Contact Us
              </Button>
              <Button variant="warning" onClick={handleDownload} className="fw-bold px-4 py-2">
                <i className="bi bi-file-earmark-arrow-down me-2"></i> Download Profile
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Poppins:wght@400;500&display=swap');

        .hero-section {
          min-height: 35vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          padding-top: 1rem;
          padding-bottom: 0.5rem;
        }

        .heading-title {
          font-family: 'Raleway', sans-serif;
          font-size: 2.7rem;
          font-weight: 700;
        }

        .lead-text {
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          line-height: 1.75;
          max-width: 900px;
        }

        .key-points {
          font-size: 1.1rem;
          font-family: 'Poppins', sans-serif;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 1.5rem;
            padding-bottom: 0.5rem;
            text-align: center;
          }

          .heading-title {
            font-size: 2.1rem;
          }

          .lead-text {
            font-size: 1.1rem;
          }

          .key-points {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
