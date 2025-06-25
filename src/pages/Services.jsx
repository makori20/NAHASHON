import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Image
} from 'react-bootstrap';
import accountingImage from '../assets/images/nahash.jpg';

const Services = () => {
  const serviceCategories = [
    {
      title: "Accounting & Bookkeeping Services",
      icon: "bi bi-calculator",
      services: [
        "QuickBooks, Sage, Pastel, PeachTree, Tally",
        "Complete Bookkeeping Services",
        "Invoice Entry & Management",
        "Importing/Exporting Reports to Excel",
        "Payroll Processing",
        "Cash Flow Management",
        "Income & Expense Tracking",
        "Accounts Maintenance",
        "Trial Balance Preparation",
        "Bank Reconciliation",
        "Financial Statements Preparation",
        "Balance Sheet, Income Statement, Cash Flow"
      ],
      customImage: accountingImage,
      featured: true
    },
    {
      title: "Computer Skills Training",
      icon: "bi bi-pc-display",
      services: [
        "MS Word", "MS Excel", "MS PowerPoint", 
        "MS Access", "MS Publisher", "MS Outlook", 
        "Internet & Email Skills"
      ]
    },
    {
      title: "Advanced Software Training",
      icon: "bi bi-graph-up",
      services: [
        "Advanced Excel Functions",
        "Advanced Access Database",
        "Data Analysis Techniques",
        "Financial Modeling"
      ]
    },
    {
      title: "Graphics & Design",
      icon: "bi bi-palette",
      services: [
        "CorelDraw", "Adobe Illustrator", 
        "Photoshop", "InDesign",
        "Business Card Design",
        "Logo Creation", "Marketing Materials"
      ]
    },
    {
      title: "IT Support Services",
      icon: "bi bi-tools",
      services: [
        "Windows Installation & Updates",
        "Software Installation",
        "Hardware Procurement",
        "System Setup & Configuration",
        "Virus Removal",
        "Performance Optimization"
      ]
    },
    {
      title: "Data Analysis Training",
      icon: "bi bi-bar-chart-line",
      services: [
        "SPSS Statistical Software",
        "Stata Data Analysis",
        "Research Methodology",
        "Data Visualization",
        "Statistical Reporting"
      ]
    }
  ];

  return (
    <Container className="my-5 py-4" id="services">
      <h2 className="text-center mb-5 display-4 fw-bold">
        Our <span className="text-primary">Professional Services</span>
      </h2>

      {/* Featured Accounting Service with Image on Left */}
      <Row className="mb-5">
        <Col lg={12}>
          <Card className="border-0 shadow-lg overflow-hidden">
            <Row className="g-0">
              <Col md={5} className="p-0">
                <Image 
                  src={accountingImage} 
                  alt="Accounting Services" 
                  fluid 
                  className="h-100"
                  style={{ objectFit: 'cover', minHeight: '400px' }}
                />
              </Col>
              <Col md={7}>
                <Card.Body className="p-4">
                  <h3 className="text-primary mb-4">
                    <i className="bi bi-calculator me-2"></i>
                    Accounting & Bookkeeping Services
                  </h3>
                  <Row>
                    <Col md={6}>
                      <ListGroup variant="flush">
                        <ListGroup.Item className="border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          QuickBooks, Sage, Pastel
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Complete Bookkeeping
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Invoice Management
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Excel Reports
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Payroll Processing
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Cash Flow Management
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col md={6}>
                      <ListGroup variant="flush">
                        <ListGroup.Item className="border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Accounts Maintenance
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Bank Reconciliation
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Financial Statements
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Balance Sheet Prep
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Income Statements
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 py-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Cash Flow Analysis
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                  <div className="mt-4 text-center">
                    <Button variant="primary" size="lg" href="/contact" className="px-4">
                      <i className="bi bi-envelope me-2"></i>
                      Get Accounting Help
                    </Button>
                    <p className="mt-3 mb-0 fst-italic">
                      "At Very Affordable Charges"
                    </p>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Other Services in Grid Layout */}
      <Row className="g-4">
        {serviceCategories.filter(cat => !cat.featured).map((category, index) => (
          <Col lg={6} key={index}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="text-center mb-3">
                  <i className={`${category.icon} text-primary display-4`}></i>
                  <h3 className="h4 mt-2">{category.title}</h3>
                </div>
                <ListGroup variant="flush">
                  {category.services.map((service, i) => (
                    <ListGroup.Item key={i} className="d-flex align-items-center border-0 py-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>{service}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <div className="mt-3 text-center">
                  <Button
                    variant="outline-primary"
                    className="w-100"
                    href="/contact"
                  >
                    Learn More About {category.title}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Call-to-Action Section */}
      <Card className="border-0 shadow-lg mt-5 bg-primary bg-gradient">
        <Card.Body className="text-center p-5 text-white">
          <h3 className="mb-3 display-5 fw-bold">
            <i className="bi bi-headset me-2"></i>
            Contact Nahashon Mueke Today
          </h3>
          <p className="lead mb-4">
            For professional IT solutions and training programs tailored to your needs.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <Button
              variant="light"
              size="lg"
              href="mailto:nasonfastitsolutions780@gmail.com"
              className="px-4 py-3 fw-bold"
            >
              <i className="bi bi-envelope me-2"></i>
              Email Now
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              href="tel:+254793642195"
              className="px-4 py-3 fw-bold"
            >
              <i className="bi bi-phone me-2"></i>
              +254 793 642195
            </Button>
            <Button
              variant="success"
              size="lg"
              href="https://wa.me/254793642195"
              className="px-4 py-3 fw-bold"
            >
              <i className="bi bi-whatsapp me-2"></i>
              WhatsApp
            </Button>
          </div>
          <div className="mt-4">
            <p className="mb-1">Flexible training schedules available</p>
            <p className="mb-0 fw-bold">Competitive rates for all services</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Services;