import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import {
  Navbar,
  Hero,
  About,
  Works,
  Careers,
  Contact,
  Footer
} from './components';

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

  return (
    <div className="App">
      <Navbar scrolled={scrolled} scrollToSection={scrollToSection} />
      <Hero />
      <About />
      <Works />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 