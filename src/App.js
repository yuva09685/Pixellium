import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { FaChartLine, FaPaintBrush, FaCode, FaRocket, FaUsers, FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const statsData = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" }
  ];

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

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar 
        expand="lg" 
        fixed="top" 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
      >
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            Pixellium
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link" onClick={() => scrollToSection('home')}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav-link" onClick={() => scrollToSection('about')}>
                About Us
              </Nav.Link>
              <Nav.Link href="#works" className="nav-link" onClick={() => scrollToSection('works')}>
                Our Works
              </Nav.Link>
              <Nav.Link href="#careers" className="nav-link" onClick={() => scrollToSection('careers')}>
                Careers
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
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
                <div className="d-flex gap-3">
                  <Button className="btn-custom btn-primary-custom">
                    Get Started
                  </Button>
                  <Button className="btn-custom btn-secondary-custom">
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

      {/* About Section */}
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
                <Col md={4} className="mb-4">
                  <div className="floating-card card-1 hover-lift">
                    <FaChartLine />
                    <h4>Analytics</h4>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="floating-card card-2 hover-lift">
                    <FaPaintBrush />
                    <h4>Design</h4>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="floating-card card-3 hover-lift">
                    <FaCode />
                    <h4>Development</h4>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Works Section */}
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

      {/* Careers Section */}
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
                      <Button className="btn-custom btn-secondary-custom">
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

      {/* Contact Section */}
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
                <div className="contact-item d-flex align-items-center mb-4">
                  <div className="me-3">
                    <FaMapMarkerAlt size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>123 Digital Street, Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="contact-item d-flex align-items-center mb-4">
                  <div className="me-3">
                    <FaPhone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item d-flex align-items-center mb-4">
                  <div className="me-3">
                    <FaEnvelope size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>hello@pixellium.com</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left" data-aos-duration="1000">
              <div className="contact-form">
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Your Name" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Your Email" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Subject" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={5} placeholder="Your Message" required />
                  </Form.Group>
                  <Button type="submit" className="btn-custom btn-primary-custom">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={4} className="mb-4">
              <h3 className="mb-3">Pixellium</h3>
              <p className="mb-3">
                Transforming businesses through digital innovation and creative excellence.
              </p>
              <div className="social-links">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <h4 className="mb-3">Services</h4>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Web Development</a></li>
                <li><a href="#" className="text-light text-decoration-none">Digital Marketing</a></li>
                <li><a href="#" className="text-light text-decoration-none">UI/UX Design</a></li>
                <li><a href="#" className="text-light text-decoration-none">Consulting</a></li>
              </ul>
            </Col>
            <Col lg={4} className="mb-4">
              <h4 className="mb-3">Company</h4>
              <ul className="list-unstyled">
                <li><a href="#about" className="text-light text-decoration-none">About Us</a></li>
                <li><a href="#works" className="text-light text-decoration-none">Our Works</a></li>
                <li><a href="#careers" className="text-light text-decoration-none">Careers</a></li>
                <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
              </ul>
            </Col>
          </Row>
          <hr className="my-4" />
          <div className="text-center">
            <p>&copy; 2024 Pixellium. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App; 