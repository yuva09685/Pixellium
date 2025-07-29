import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" }
  ];

  const services = [
    { name: "Web Development", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Consulting", href: "#" }
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Works", href: "#works" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} className="mb-4">
            <h3 className="mb-3">Pixellium</h3>
            <p className="mb-3">
              Transforming businesses through digital innovation and creative excellence.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <h4 className="mb-3">Services</h4>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-light text-decoration-none">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={4} className="mb-4">
            <h4 className="mb-3">Company</h4>
            <ul className="list-unstyled">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-light text-decoration-none">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 2024 Pixellium. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 