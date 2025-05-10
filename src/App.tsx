import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';

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
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country_code === 'BG') {
          i18n.changeLanguage('bg'); // Set language to Bulgarian if user is from Bulgaria
        } else {
          i18n.changeLanguage('en'); // Default to English
        }
      })
      .catch(() => {
        i18n.changeLanguage('en'); // Fallback to English in case of an error
      });

    document.title = 'Stanchev | Portfolio';
    document.body.classList.add('bg-[#050816]', 'text-white');
    return () => {
      document.body.classList.remove('bg-[#050816]', 'text-white');
    };
  }, [i18n]);

  return (
    <Router>
      <ScrollToSection />
      <div className="relative z-0">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
              </>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
