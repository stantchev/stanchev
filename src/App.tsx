import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
