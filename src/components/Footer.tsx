import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
const goToServices = () => {
  if (location.pathname !== '/services') {
    navigate('/services');
  }
};
  return (
    <footer className="bg-[#0a0d1d] py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and slogan */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <button
              onClick={() => handleNavigation('home')}
              className="text-white text-xl font-bold cursor-pointer flex items-center"
            >
              <span className="text-white-400">Stanchev</span>
            </button>
            <p className="text-white-300 mt-2">{t('footer.slogan')}</p>
          </div>

          {/* Navigation and copyright */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <button
                onClick={() => handleNavigation('home')}
                className="text-gray-250 hover:text-cyan-400 transition-colors duration-300"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="text-gray-250 hover:text-cyan-400 transition-colors duration-300"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => handleNavigation('projects')}
                className="text-gray-250 hover:text-cyan-400 transition-colors duration-300"
              >
                {t('nav.projects')}
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="text-gray-250 hover:text-cyan-400 transition-colors duration-300"
              >
                {t('nav.contact')}
              </button>
               <button
                onClick={goToServices}
                className="text-gray-250 hover:text-cyan-400 transition-colors duration-300"
              >
                {t('nav.services')}
              </button>
            </div>
            <p className="text-gray-300 text-sm">
              © {currentYear} Stanchev. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
