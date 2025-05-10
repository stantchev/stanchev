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

    document.title = 'Stanchev | Portfolio';
    document.body.classList.add('bg-[#050816]', 'text-white');
    return () => {
      document.body.classList.remove('bg-[#050816]', 'text-white');
    };
  }, [i18n]);

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
