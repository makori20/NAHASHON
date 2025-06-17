import React, { useState } from 'react';
import { 
  Container, 
  Card, 
  Row, 
  Col, 
  Button, 
  Badge, 
  Modal,
  Carousel
} from 'react-bootstrap';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projectList = [
    { 
      title: 'AgriNexus', 
      description: 'A comprehensive agricultural management platform connecting farmers with markets and resources. This system helps farmers track crops, manage inventory, and connect with buyers directly.',
      tech: ['React', 'MySQL', 'Node.js', 'Firebase'],
      link: 'https://agrinexus.vercel.app',
      images: [project1, project2, project3], // Multiple images for carousel
      features: [
        'Farmer marketplace',
        'Crop management system',
        'Weather integration',
        'Mobile responsive'
      ],
      client: 'Agricultural Cooperative Society',
      year: '2023'
    },
    { 
      title: 'Hubahub', 
      description: 'Business networking platform designed to facilitate professional connections and collaborations. Helps professionals find mentors, collaborators, and business opportunities.',
      tech: ['React', 'Tailwind CSS', 'MySQL', 'Express'],
      link: '#',
      images: [project2, project1, project3],
      features: [
        'Professional profiles',
        'Connection system',
        'Job posting board',
        'Real-time messaging'
      ],
      client: 'Startup Incubator',
      year: '2022'
    },
    { 
      title: 'FinancePro', 
      description: 'Accounting software solution with integrated reporting and analytics capabilities. Designed for small businesses to manage their finances efficiently.',
      tech: ['React', 'Firebase', 'Chart.js', 'QuickBooks API'],
      link: '#',
      images: [project3, project1, project2],
      features: [
        'Expense tracking',
        'Invoice generation',
        'Financial reporting',
        'Tax preparation'
      ],
      client: 'Small Business Association',
      year: '2023'
    },
  ];

  const handleShowModal = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProject(null);
  };

  return (
    <Container className="my-5 py-4" id="projects">
      <h2 className="text-center mb-5 display-4 fw-bold">
        Our <span className="text-primary">Portfolio</span>
      </h2>
      
      <Row className="g-4">
        {projectList.map((project, index) => (
          <Col lg={4} md={6} key={index}>
            <Card className="h-100 border-0 shadow-sm hover-effect">
              <div className="overflow-hidden rounded-top" style={{ height: '200px' }}>
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="img-fluid h-100 w-100 object-cover"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/800x400?text=Project+Image'}
                />
              </div>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <Card.Title className="fw-bold mb-1">{project.title}</Card.Title>
                  <Badge bg="light" text="dark" className="fs-6">
                    {project.year}
                  </Badge>
                </div>
                <Card.Text className="text-muted mb-3">
                  {project.description.substring(0, 100)}...
                </Card.Text>
                <div className="mb-3 d-flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <Badge key={i} bg="light" text="dark" className="fs-6">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge bg="secondary" className="fs-6">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </Card.Body>
              <Card.Footer className="bg-white border-0 pt-0">
                <div className="d-flex gap-2">
                  <Button 
                    variant="primary" 
                    className="flex-grow-1"
                    onClick={() => handleShowModal(project)}
                  >
                    <i className="bi bi-eye me-2"></i>
                    View Details
                  </Button>
                  {project.link !== '#' && (
                    <Button 
                      variant="outline-primary" 
                      href={project.link} 
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right me-1"></i>
                    </Button>
                  )}
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <h3 className="mb-3">Want to see more of our work?</h3>
        <p className="text-muted mb-4">
          We have completed dozens of projects across various industries.
        </p>
        <Button variant="primary" size="lg" href="/contact" className="px-4">
          <i className="bi bi-folder2-open me-2"></i>
          Request Full Portfolio
        </Button>
      </div>

      {/* Project Detail Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        {currentProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="fw-bold">
                {currentProject.title}
                <Badge bg="light" text="dark" className="ms-2">
                  {currentProject.year}
                </Badge>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel fade className="mb-4 rounded overflow-hidden">
                {currentProject.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <div style={{ height: '300px' }}>
                      <img
                        className="d-block w-100 h-100 object-cover"
                        src={image}
                        alt={`${currentProject.title} screenshot ${index + 1}`}
                        onError={(e) => e.target.src = 'https://via.placeholder.com/800x400?text=Project+Image'}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>

              <h5 className="fw-bold mb-3">Project Description</h5>
              <p className="mb-4">{currentProject.description}</p>

              <Row>
                <Col md={6}>
                  <h5 className="fw-bold mb-3">Key Features</h5>
                  <ul className="mb-4">
                    {currentProject.features.map((feature, index) => (
                      <li key={index} className="mb-2 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col md={6}>
                  <h5 className="fw-bold mb-3">Technical Details</h5>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {currentProject.tech.map((tech, index) => (
                      <Badge key={index} bg="light" text="dark" className="fs-6">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="bg-light p-3 rounded">
                    <h6 className="fw-bold mb-2">Client</h6>
                    <p className="mb-0">{currentProject.client}</p>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
              <Button variant="outline-secondary" onClick={handleCloseModal}>
                Close
              </Button>
              {currentProject.link !== '#' && (
                <Button 
                  variant="primary" 
                  href={currentProject.link} 
                  target="_blank"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  Visit Live Project
                </Button>
              )}
            </Modal.Footer>
          </>
        )}
      </Modal>

      <style jsx global>{`
        .hover-effect {
          transition: all 0.3s ease;
        }
        .hover-effect:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .carousel-control-prev-icon, 
        .carousel-control-next-icon {
          background-color: rgba(0,0,0,0.5);
          border-radius: 50%;
          padding: 10px;
        }
      `}</style>
    </Container>
  );
};

export default Projects;