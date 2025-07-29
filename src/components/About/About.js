import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChartLine, FaPaintBrush, FaCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  const statsData = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" }
  ];

  const serviceCards = [
    { icon: <FaChartLine />, title: "Analytics", className: "card-1" },
    { icon: <FaPaintBrush />, title: "Design", className: "card-2" },
    { icon: <FaCode />, title: "Development", className: "card-3" }
  ];

  return (
    <section id="about" className="section">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            We're a team of digital innovators passionate about transforming businesses
          </p>
        </div>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right" data-aos-duration="1000">
            <div className="about-text">
              <h3 className="mb-4">Your Digital Success Partner</h3>
              <p className="mb-4">
                At Pixellium, we believe in the power of digital transformation. Our team of experts combines creativity with data-driven strategies to deliver exceptional results for our clients.
              </p>
              <Row className="text-center">
                {statsData.map((stat, index) => (
                  <Col key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                    <div className="stat-item">
                      <h4 className="gradient-text">{stat.number}</h4>
                      <p>{stat.label}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left" data-aos-duration="1000">
            <Row>
              {serviceCards.map((card, index) => (
                <Col md={4} key={index} className="mb-4">
                  <div className={`floating-card ${card.className} hover-lift`}>
                    {card.icon}
                    <h4>{card.title}</h4>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 