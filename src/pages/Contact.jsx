import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, Card, Alert } from 'react-bootstrap';
import contactImage from '../assets/images/contact-image.jpg';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submissionState, setSubmissionState] = useState({
    isLoading: false,
    isSuccess: false,
    error: null
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS Public Key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionState({ isLoading: true, isSuccess: false, error: null });

    try {
      // Send to your business email
      const yourEmailResponse = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'nasonfastitsolution780@gmail.com',
          subject: `New Contact From ${formData.name}`
        }
      );

      // Send confirmation to visitor
      const visitorEmailResponse = await emailjs.send(
        'YOUR_SERVICE_ID', // Same Service ID
        'YOUR_VISITOR_TEMPLATE_ID', // Create a separate template for visitor confirmation
        {
          from_name: 'NASON IT SOLUTIONS',
          from_email: 'nasonfastitsolution780@gmail.com',
          to_email: formData.email,
          subject: 'Thank you for contacting us',
          message: `Dear ${formData.name},\n\nThank you for contacting NASON IT SOLUTIONS. We have received your message and will get back to you shortly.\n\nHere's what you submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}\n\nBest regards,\nNASON IT SOLUTIONS Team`
        }
      );

      if (yourEmailResponse.status === 200 && visitorEmailResponse.status === 200) {
        setSubmissionState({ isLoading: false, isSuccess: true, error: null });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmissionState({
        isLoading: false,
        isSuccess: false,
        error: 'Failed to send message. Please try again later or contact us directly at nasonfastitsolution780@gmail.com'
      });
    }
  };

  return (
    <Container className="my-5 py-4">
      <h2 className="text-center mb-5 display-4 fw-bold">Contact <span className="text-primary">Us</span></h2>
      
      {submissionState.isSuccess && (
        <Alert variant="success" className="mb-4">
          Thank you for your message! We've sent a confirmation to your email and will get back to you soon.
        </Alert>
      )}
      
      {submissionState.error && (
        <Alert variant="danger" className="mb-4">
          {submissionState.error}
        </Alert>
      )}

      <Row className="g-4">
        <Col lg={6}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="p-5">
              <h3 className="mb-4">Get in Touch</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    required 
                    className="py-2"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    required 
                    className="py-2"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number" 
                    className="py-2"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    placeholder="How can we help you?" 
                    required 
                    className="py-2"
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 py-2"
                  disabled={submissionState.isLoading}
                >
                  {submissionState.isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={6}>
          <div className="h-100 d-flex flex-column">
            <Card className="border-0 shadow-sm mb-4 flex-grow-1">
              <Card.Body className="p-5">
                <h3 className="mb-4">Contact Information</h3>
                <div className="mb-4">
                  <h5 className="text-primary">Email</h5>
                  <p className="mb-0">nasonfastitsolution780@gmail.com</p>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-primary">Phone</h5>
                  <p className="mb-0">0793642195</p>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-primary">Business Hours</h5>
                  <p className="mb-1">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="mb-0">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
                
                <div>
                  <h5 className="text-primary">Follow Us</h5>
                  <div className="d-flex gap-3 mt-2">
                    <Button variant="outline-primary" size="sm" href="#">
                      <i className="bi bi-facebook"></i>
                    </Button>
                    <Button variant="outline-info" size="sm" href="#">
                      <i className="bi bi-twitter"></i>
                    </Button>
                    <Button variant="outline-danger" size="sm" href="#">
                      <i className="bi bi-instagram"></i>
                    </Button>
                    <Button variant="outline-primary" size="sm" href="#">
                      <i className="bi bi-linkedin"></i>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            
            <div className="flex-grow-1 overflow-hidden rounded shadow-sm">
              <img 
                src={contactImage} 
                alt="Contact NASON IT SOLUTION" 
                className="img-fluid h-100 w-100 object-fit-cover"
                onError={(e) => e.target.src = 'https://via.placeholder.com/800x400?text=Contact+Us'}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;