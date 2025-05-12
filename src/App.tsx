import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country_code === 'BG') {
          i18n.changeLanguage('bg');
        } else {
          i18n.changeLanguage('en');
        }
      })
      .catch(() => {
        i18n.changeLanguage('en');
      });

    document.body.classList.add('bg-[#050816]', 'text-white');
    return () => {
      document.body.classList.remove('bg-[#050816]', 'text-white');
    };
  }, [i18n]);

  return (
    <Router>
      <div className="relative z-0">
        <Helmet>
          <title>Stanchev | Portfolio</title>
          <meta name="description" content="Expert web development and SEO solutions for your digital success" />
          <meta name="keywords" content="web development, SEO, digital marketing, technical SEO, web optimization" />
        </Helmet>
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;