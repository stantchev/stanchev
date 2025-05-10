import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleNavigation = (id: string) => {
    // If we're not on the home page, navigate to home with hash
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <footer className="bg-[#0a0d1d] py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and slogan */}
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-white text-xl font-bold cursor-pointer flex items-center">
              <span className="text-cyan-400">STAN</span>
              <span className="text-fuchsia-400">CHEV</span>
            </a>
            <p className="text-gray-300 mt-2">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Navigation links and copyright */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                {t('nav.home')}
              </a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                {t('nav.about')}
              </a>
              <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                {t('nav.projects')}
              </a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                {t('nav.contact')}
              </a>
            </div>
            <p className="text-gray-250 text-sm">
              © {currentYear} STANCHEV. {t('footer.rights')}
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-white text-xl font-bold cursor-pointer flex items-center"
            >
              <span className="text-cyan-400">STAN</span>
              <span className="text-fuchsia-400">CHEV</span>
            </button>
            <p className="text-gray-400 mt-2">
              {t('footer.slogan')}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <button 
                onClick={() => handleNavigation('home')}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => handleNavigation('projects')}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {t('nav.projects')}
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {t('nav.contact')}
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              © {currentYear} STANCHEV. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
