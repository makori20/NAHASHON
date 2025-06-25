import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import heroImage from '../assets/images/hero-image.jpg';
import resumePDF from '../assets/documents/resume.pdf';
import { FiAward, FiUsers, FiCheckCircle } from 'react-icons/fi';

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
      <Container className="position-relative py-5" style={{ zIndex: 1 }}>
        <Row className="align-items-center">
          {/* Left Section (Existing Content) */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-4">
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
              <div>
                <h4 className="mb-1 fw-bold">Nahashon Mueke</h4>
                <p className="text-muted mb-0">Founder & Lead Consultant</p>
                <div className="d-flex mt-2">
                  <small className="badge bg-primary me-2">QuickBooks Expert</small>
                  <small className="badge bg-success">IT Solutions</small>
                </div>
              </div>
            </div>

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

            <ul className="list-unstyled mb-4 key-points">
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

            <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
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

          {/* Right Section (New Content) */}
          <Col lg={6} className="ps-lg-5">
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="p-4">
                <h4 className="text-primary mb-3">
                  <i className="bi bi-star-fill me-2"></i>
                  Why Choose Us?
                </h4>
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 text-primary">
                    <FiAward size={24} />
                  </div>
                  <div>
                    <h5 className="mb-1">Certified Professionals</h5>
                    <p className="mb-0 text-muted">Our team holds certifications in all major accounting and IT platforms we work with.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3 text-primary">
                    <FiUsers size={24} />
                  </div>
                  <div>
                    <h5 className="mb-1">Client-Centric Approach</h5>
                    <p className="mb-0 text-muted">We tailor solutions to your specific business needs and growth objectives.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="me-3 text-primary">
                    <FiCheckCircle size={24} />
                  </div>
                  <div>
                    <h5 className="mb-1">Proven Results</h5>
                    <p className="mb-0 text-muted">Over 200 businesses transformed through our solutions in the last 5 years.</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm bg-light">
              <Card.Body className="p-4">
                <h4 className="text-primary mb-3">
                  <i className="bi bi-clock-history me-2"></i>
                  Quick Services
                </h4>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check2-circle text-success me-2"></i>
                    <span>Same-day QuickBooks setup</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check2-circle text-success me-2"></i>
                    <span>24/7 emergency IT support</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check2-circle text-success me-2"></i>
                    <span>Express staff training programs</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-check2-circle text-success me-2"></i>
                    <span>Monthly accounting packages</span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Additional Content Below */}
        <Row className="mt-5 pt-4">
          <Col lg={12}>
            <div className="bg-light p-4 rounded-3 shadow-sm">
              <h3 className="text-center mb-4">
                <span className="text-primary">Comprehensive Solutions</span> for Modern Businesses
              </h3>
              <Row>
                <Col md={4} className="mb-4 mb-md-0">
                  <div className="text-center p-3">
                    <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 d-inline-block mb-3">
                      <i className="bi bi-cash-stack display-6"></i>
                    </div>
                    <h4>Accounting Services</h4>
                    <p className="mb-0">Full-cycle accounting from bookkeeping to financial reporting and tax preparation.</p>
                  </div>
                </Col>
                <Col md={4} className="mb-4 mb-md-0">
                  <div className="text-center p-3">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle p-3 d-inline-block mb-3">
                      <i className="bi bi-laptop display-6"></i>
                    </div>
                    <h4>IT Solutions</h4>
                    <p className="mb-0">Custom software, system integration, and digital transformation services.</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center p-3">
                    <div className="bg-warning bg-opacity-10 text-warning rounded-circle p-3 d-inline-block mb-3">
                      <i className="bi bi-people display-6"></i>
                    </div>
                    <h4>Training Programs</h4>
                    <p className="mb-0">Certified training in accounting software and essential business applications.</p>
                  </div>
                </Col>
              </Row>
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

          .d-flex.align-items-center {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;