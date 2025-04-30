import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bg' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e293b] text-white hover:bg-[#2a3c58] transition-colors duration-300"
    >
      <Languages size={20} />
      <span>{i18n.language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;