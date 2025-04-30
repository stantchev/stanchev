import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  
  const experiences = [
  'senior',
    'fullstack',
  ];
  
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-[#050816] to-[#091634]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('about.title')} <span className="text-cyan-400">{t('about.me')}</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('about.description2')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('about.description3')}
            </p>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="text-fuchsia-400">{t('experience.title')}</span>{' '}
              {t('experience.subtitle')}
            </h3>
            
            <div className="relative">
              <div className="absolute h-full w-0.5 bg-gradient-to-b from-cyan-400 to-fuchsia-500 left-2.5 top-0"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="pl-10 relative">
                    <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-fuchsia-500 border-4 border-[#091634]"></div>
                    
                    <h4 className="text-xl font-bold text-white">
                      {t(`experience.positions.${exp}.title`)}
                    </h4>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cyan-400">
                        {t(`experience.positions.${exp}.company`)}
                      </span>
                      <span className="text-gray-400 text-sm">
                        • {t(`experience.positions.${exp}.date`)}
                      </span>
                    </div>
                    <p className="text-gray-300">
                      {t(`experience.positions.${exp}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;