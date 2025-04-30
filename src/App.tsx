import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'STANCHEV | Portfolio';
    
    // Add a class to the body for global styling
    document.body.classList.add('bg-[#050816]', 'text-white');
    
    return () => {
      document.body.classList.remove('bg-[#050816]', 'text-white');
    };
  }, []);

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