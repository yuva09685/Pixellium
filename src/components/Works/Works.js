import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Works.css';

const Works = () => {
  const worksData = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack development with modern UI/UX",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
    },
    {
      id: 2,
      title: "Mobile App",
      description: "Cross-platform mobile application",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
    },
    {
      id: 3,
      title: "Brand Identity",
      description: "Complete brand redesign and strategy",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Comprehensive marketing campaigns",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400"
    },
    {
      id: 5,
      title: "Web Application",
      description: "Custom web solutions for businesses",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400"
    },
    {
      id: 6,
      title: "Digital Consulting",
      description: "Strategic digital transformation",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400"
    }
  ];

  return (
    <section id="works" className="section">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Our Works</h2>
          <p className="section-subtitle">
            Discover our latest projects and success stories
          </p>
        </div>
        <Row>
          {worksData.map((work, index) => (
            <Col lg={4} md={6} key={work.id} className="mb-4">
              <div className="work-item hover-lift" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="work-image">
                  <img src={work.image} alt={work.title} />
                  <div className="work-overlay">
                    <h4>{work.title}</h4>
                    <p>{work.description}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Works; 