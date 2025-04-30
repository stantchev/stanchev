import React from 'react';
import { useTranslation } from 'react-i18next';
import { skills } from '../constants';
import SkillBar from './SkillBar';

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-[#091634] to-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('skills.title')} <span className="text-cyan-400">{t('skills.subtitle')}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-white mb-6">
            {t('skills.additional')} <span className="text-fuchsia-400">{t('skills.technologies')}</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'Netlify', 'i18n'].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-[#1e293b] text-gray-300 rounded-full hover:bg-[#2a3c58] transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;