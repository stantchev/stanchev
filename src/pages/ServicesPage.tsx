import React from 'react';
import { useTranslation } from 'react-i18next';
import { services } from '../constants';
import ServiceCarousel from '../components/ServiceCarousel';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
              {t('services.title')}
            </span>{' '}
            <span className="text-white">
              {t('services.subtitle')}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('services.description')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ServiceCarousel services={services} />
        </motion.div>

        <motion.div 
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            {t('services.ready')}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('services.readyDescription')}
          </p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
            {t('services.contact')}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
