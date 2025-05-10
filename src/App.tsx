import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
const { i18n } = useTranslation();

  useEffect(() => {
    // Update page title
    document.title = 'Stanchev | Portfolio';
    
    // Add a class to the body for global styling
    document.body.classList.add('bg-[#050816]', 'text-white');
	
	// Update lang attribute based on current language
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';

// Scroll handler component
const ScrollToSection: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.title = 'Stanchev | Portfolio';
    document.body.classList.add('bg-[#050816]', 'text-white');
    document.body.setAttribute('lang', i18n.language);
    
    return () => {
      document.body.classList.remove('bg-[#050816]', 'text-white');
    };
  }, [i18n.language]);

  return (
    <div className="relative z-0">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
<Router>
      <div className="relative z-0">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <SkillsSection />
              <ContactSection />
            </>
          } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
