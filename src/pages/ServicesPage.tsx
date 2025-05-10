import React from 'react';
import { useTranslation } from 'react-i18next';
import { services } from '../constants';
import ServiceCarousel from '../components/ServiceCarousel';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            {t('services.title')} {t('services.subtitle')}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <ServiceCarousel services={services} />
      </div>
    </div>
  );
};

export default ServicesPage;
