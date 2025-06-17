import React from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button,
  ListGroup
} from 'react-bootstrap';

const Services = () => {
  const serviceCategories = [
    {
      title: "Computer Skills Training",
      icon: "bi bi-pc-display",
      services: [
        "MS Word", "MS Excel", "MS PowerPoint", "MS Access",
        "MS Publisher", "MS Outlook", "Internet & Emails"
      ],
      image: "computer-training.jpg"
    },
    {
      title: "Accounting Programs",
      icon: "bi bi-calculator",
      services: [
        "QuickBooks", "Sage", "Tally", "PeachTree", "Pastel", "Zoho", "Xero"
      ],
      image: "accounting-software.jpg"
    },
    {
      title: "Advanced Programs",
      icon: "bi bi-graph-up",
      services: [
        "Advanced Excel", "Advanced Access"
      ],
      image: "advanced-programs.jpg"
    },
    {
      title: "Graphics & Design",
      icon: "bi bi-palette",
      services: [
        "CorelDraw", "Illustrator", "Photoshop", "Publisher", "InDesign"
      ],
      image: "graphics-design.jpg"
    },
    {
      title: "PC & Laptop Services",
      icon: "bi bi-tools",
      services: [
        "Windows Installation & Updates",
        "Software Installation & Updates",
        "Purchasing & Procuring",
        "Delivery & Installation of Hardware"
      ],
      image: "pc-services.jpg"
    },
    {
      title: "Statistical Software Training",
      icon: "bi bi-bar-chart-line",
      services: [
        "SPSS", "Stata"
      ],
      image: "statistics-training.jpg"
    }
  ];

  return (
    <Container className="my-5 py-4" id="services">
      <h2 className="text-center mb-5 display-3 fw-bold">
        Our <span className="text-primary">Comprehensive Services</span>
      </h2>
      
      <Row className="g-4">
        {serviceCategories.map((category, index) => (
          <Col lg={6} key={index}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <Row className="g-0 h-100">
                <Col md={5} className="bg-light">
                  <div className="h-100 d-flex align-items-center p-4">
                    <div className="text-center w-100">
                      <i className={`${category.icon} text-primary display-3 mb-3`}></i>
                      <h3 className="h4">{category.title}</h3>
                    </div>
                  </div>
                </Col>
                <Col md={7}>
                  <Card.Body className="p-4">
                    <ListGroup variant="flush">
                      {category.services.map((service, i) => (
                        <ListGroup.Item key={i} className="d-flex align-items-center border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span>{service}</span>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                    <div className="mt-3">
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="w-100"
                        href="/contact"
                      >
                        Enquire About {category.title}
                      </Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="border-0 shadow-lg mt-5 bg-gradient-primary">
        <Card.Body className="text-center p-5 text-white">
          <h3 className="mb-3 display-5 fw-bold">
            <i className="bi bi-headset me-2"></i>
            Ready to Get Started?
          </h3>
          <p className="lead mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Contact Mr. Nahashon Mueke today for personalized IT solutions and training programs.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <Button 
              variant="light" 
              size="lg" 
              href="/contact" 
              className="px-4 py-3 fw-bold d-flex align-items-center"
            >
              <i className="bi bi-envelope me-2"></i>
              Email Us
            </Button>
            <Button 
              variant="outline-light" 
              size="lg" 
              href="tel:+254793642195" 
              className="px-4 py-3 fw-bold d-flex align-items-center"
            >
              <i className="bi bi-telephone me-2"></i>
              +254 793 642195
            </Button>
            <Button 
              variant="warning" 
              size="lg" 
              href="mailto:nasonfastitsolutions780@gmail.com" 
              className="px-4 py-3 fw-bold d-flex align-items-center"
            >
              <i className="bi bi-whatsapp me-2"></i>
              WhatsApp
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Services;
