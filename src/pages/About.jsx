import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Badge, 
  ProgressBar,
  Button 
} from 'react-bootstrap';
import aboutImage from '../assets/images/about-image.jpg';
import teamImage from '../assets/images/team-image.jpg';

const About = () => {
  const services = {
    computerSkills: [
      "MS Word", "MS Excel", "MS PowerPoint", "MS Access", 
      "MS Publisher", "MS Outlook", "Internet & Emails"
    ],
    accountingPrograms: [
      "QuickBooks", "Sage", "Tally", "PeachTree", "Pastel"
    ],
    advancedPrograms: [
      "Advanced Excel", "Advanced Access"
    ],
    graphicsDesign: [
      "CorelDraw", "Illustrator", "Photoshop", "Publisher", "InDesign"
    ],
    pcServices: [
      "Windows Installation & Updates", "Software Installation & Updates",
      "Purchasing & Procuring", "Delivery & Installation of Hardware"
    ]
  };

  const skills = [
    { name: 'Computer Skills', level: 95, variant: 'primary' },
    { name: 'Accounting Software', level: 98, variant: 'success' },
    { name: 'Advanced Programs', level: 90, variant: 'info' },
    { name: 'Graphics & Design', level: 85, variant: 'warning' },
    { name: 'PC/Laptop Services', level: 92, variant: 'danger' },
    { name: 'Training & Consulting', level: 88, variant: 'dark' }
  ];

  return (
    <Container className="my-5 py-4">
      <h2 className="text-center mb-5 display-4 fw-bold">
        About <span className="text-primary">NASON IT SOLUTIONS</span>
      </h2>

      <Row className="align-items-center mb-5">
        <Col lg={6} className="mb-4 mb-lg-0">
          <div className="position-relative rounded overflow-hidden shadow-lg" style={{ height: '400px' }}>
            <img 
              src={aboutImage} 
              alt="About NASON IT SOLUTIONS" 
              className="img-fluid h-100 w-100"
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              onError={(e) => e.target.src = 'https://via.placeholder.com/800x400?text=About+Us'}
            />
            <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-75 text-white">
              <h3 className="mb-0">Your Technology Partner</h3>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <h3 className="mb-4 display-5">
            <i className="bi bi-building me-2 text-primary"></i>
            Who We Are
          </h3>
          <p className="lead" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            NASON IT SOLUTIONS is a comprehensive technology and training firm specializing in computer services, 
            accounting software, and professional training programs.
          </p>
          <p style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Founded and operated by Mr. Nahashon Mueke, we provide personalized IT solutions and accounting 
            services to businesses and individuals. Our expertise ranges from basic computer skills to advanced 
            accounting software implementation.
          </p>
          <div className="d-flex gap-2 flex-wrap mt-4">
            <Badge bg="primary" className="fs-6 py-2 px-3 d-flex align-items-center">
              <i className="bi bi-pc-display me-2"></i> Computer Services
            </Badge>
            <Badge bg="success" className="fs-6 py-2 px-3 d-flex align-items-center">
              <i className="bi bi-calculator me-2"></i> Accounting Programs
            </Badge>
            <Badge bg="info" className="fs-6 py-2 px-3 d-flex align-items-center">
              <i className="bi bi-graph-up me-2"></i> Advanced Training
            </Badge>
            <Badge bg="warning" className="fs-6 py-2 px-3 d-flex align-items-center">
              <i className="bi bi-palette me-2"></i> Graphics Design
            </Badge>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
          <div className="position-relative rounded overflow-hidden shadow-lg" style={{ height: '400px' }}>
            <img 
              src={teamImage} 
              alt="Our Services" 
              className="img-fluid h-100 w-100"
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              onError={(e) => e.target.src = 'https://via.placeholder.com/800x400?text=Our+Services'}
            />
            <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-75 text-white">
              <h3 className="mb-0">Comprehensive Solutions</h3>
            </div>
          </div>
        </Col>
        <Col lg={6} className="order-lg-1">
          <h3 className="mb-4 display-5">
            <i className="bi bi-lightbulb me-2 text-primary"></i>
            Our Services
          </h3>
          <div className="mb-4">
            <h5 className="d-flex align-items-center">
              <i className="bi bi-pc-display-horizontal text-primary me-2"></i>
              Computer Skills
            </h5>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {services.computerSkills.map((skill, index) => (
                <Badge key={`comp-${index}`} bg="light" text="dark" className="fs-6 py-2 px-3">
                  {skill}
                </Badge>
              ))}
            </div>

            <h5 className="d-flex align-items-center mt-4">
              <i className="bi bi-calculator text-primary me-2"></i>
              Accounting Programs
            </h5>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {services.accountingPrograms.map((program, index) => (
                <Badge key={`acc-${index}`} bg="light" text="dark" className="fs-6 py-2 px-3">
                  {program}
                </Badge>
              ))}
            </div>

            <h5 className="d-flex align-items-center mt-4">
              <i className="bi bi-tools text-primary me-2"></i>
              PC & Laptop Services
            </h5>
            <ul className="list-unstyled">
              {services.pcServices.map((service, index) => (
                <li key={`pc-${index}`} className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>

      <h3 className="text-center mb-4 display-5">
        <i className="bi bi-bar-chart me-2 text-primary"></i>
        Our Expertise
      </h3>
      <Row className="g-4">
        {skills.map((skill, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <ProgressBar 
                  now={skill.level} 
                  variant={skill.variant} 
                  className="mb-3"
                  style={{ height: '8px' }}
                />
                <div className="d-flex justify-content-center">
                  <Button 
                    variant="outline-primary" 
                    size="sm" 
                    className="px-3"
                    onClick={() => document.getElementById('services').scrollIntoView()}
                  >
                    View Services
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;
