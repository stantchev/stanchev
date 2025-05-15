import React from 'react';
import { useTranslation } from 'react-i18next';
import Particles from './Particles';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative w-full h-screen mx-auto overflow-hidden">
      <Particles />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="inline-block bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
              {t('hero.title')}
            </span>
          </h1>
          <div 
            className="sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            style={{ lineHeight: '1.5' }}
          >
            <p>{t('hero.subtitle')}</p>
          </div>
         <div className="flex flex-wrap justify-center gap-6">
  <a
    href="#projects"
    aria-label={t('button.explore')}
    className="inline-block py-4 px-10 rounded-full border-2 border-cyan-400 hover:bg-cyan-400/20 text-white font-medium transition-all duration-300 min-w-[44px] min-h-[44px] text-center"
  >
    {t('button.explore')}
  </a>
  <a
    href="#contact"
    aria-label={t('button.contact')}
    className="inline-block py-4 px-10 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium hover:opacity-90 transition-opacity duration-300 min-w-[44px] min-h-[44px] text-center"
  >
    {t('button.contact')}
  </a>
</div>

        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center p-1">
          <div className="w-1.5 h-2.5 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
