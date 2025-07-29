import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  const handleGetStarted = () => {
    // Handle get started action
    console.log('Get Started clicked');
  };

  const handleViewWork = () => {
    // Handle view work action
    console.log('View Work clicked');
  };

  return (
    <section id="home" className="hero">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right" data-aos-duration="1000">
            <div className="hero-content">
              <h1 className="hero-title">
                <div>Transform Your</div>
                <div className="highlight">Digital Presence</div>
                <div>With Pixellium</div>
              </h1>
              <p className="hero-subtitle">
                We craft digital experiences that drive results. From strategy to execution, we're your partner in digital success.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap button-group">
                <Button variant="primary" onClick={handleGetStarted}>
                  Get Started
                </Button>
                <Button variant="secondary" onClick={handleViewWork}>
                  View Our Work
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left" data-aos-duration="1000">
            <div className="puzzle-container">
              <div className="puzzle-piece piece-1"></div>
              <div className="puzzle-piece piece-2"></div>
              <div className="puzzle-piece piece-3"></div>
              <div className="puzzle-piece piece-4"></div>
              <div className="puzzle-piece piece-5"></div>
              <div className="puzzle-piece piece-6"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 