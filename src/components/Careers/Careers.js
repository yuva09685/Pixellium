import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRocket, FaUsers, FaGraduationCap } from 'react-icons/fa';
import Button from '../common/Button';
import './Careers.css';

const Careers = () => {
  const benefitsData = [
    { icon: <FaRocket />, title: "Fast Growth", description: "Rapid career advancement opportunities" },
    { icon: <FaUsers />, title: "Great Team", description: "Work with talented professionals" },
    { icon: <FaGraduationCap />, title: "Learning", description: "Continuous learning and development" }
  ];

  const jobData = [
    { title: "Senior Frontend Developer", description: "Join our frontend team and build amazing user experiences" },
    { title: "Digital Marketing Specialist", description: "Drive digital marketing strategies and campaigns" },
    { title: "UX/UI Designer", description: "Create beautiful and functional user interfaces" }
  ];

  const handleApply = (jobTitle) => {
    console.log(`Apply for: ${jobTitle}`);
  };

  return (
    <section id="careers" className="section">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Careers</h2>
          <p className="section-subtitle">
            Join our team and be part of something extraordinary
          </p>
        </div>
        <Row>
          <Col lg={6} data-aos="fade-right" data-aos-duration="1000">
            <div className="careers-text">
              <h3 className="mb-4">Grow With Us</h3>
              <p className="mb-4">
                We're always looking for talented individuals who are passionate about digital innovation. Join our dynamic team and work on exciting projects that make a real impact.
              </p>
              <Row>
                {benefitsData.map((benefit, index) => (
                  <Col md={4} key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                    <div className="benefit-item text-center mb-4">
                      <div className="mb-3">
                        {benefit.icon}
                      </div>
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left" data-aos-duration="1000">
            <div className="job-listings">
              {jobData.map((job, index) => (
                <Card key={index} className="job-card hover-lift mb-4" data-aos="fade-up" data-aos-delay={index * 200}>
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Text>{job.description}</Card.Text>
                    <Button 
                      variant="secondary"
                      onClick={() => handleApply(job.title)}
                    >
                      Apply Now
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Careers; 