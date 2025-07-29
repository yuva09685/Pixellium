import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Button from '../common/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={24} className="text-primary" />,
      title: "Address",
      info: "123 Digital Street, Tech City, TC 12345"
    },
    {
      icon: <FaPhone size={24} className="text-primary" />,
      title: "Phone",
      info: "+1 (555) 123-4567"
    },
    {
      icon: <FaEnvelope size={24} className="text-primary" />,
      title: "Email",
      info: "hello@pixellium.com"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Let's discuss your next digital project
          </p>
        </div>
        <Row>
          <Col lg={6} data-aos="fade-right" data-aos-duration="1000">
            <div className="contact-info">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item d-flex align-items-center mb-4">
                  <div className="me-3">
                    {item.icon}
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left" data-aos-duration="1000">
            <div className="contact-form">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="text" 
                    name="subject"
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="message"
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 