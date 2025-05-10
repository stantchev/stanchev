import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { services } from '../constants';
import { ArrowRight } from 'lucide-react';

interface Service {
  slug: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-[#050816] to-[#091634]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('services.title')} <span className="text-cyan-400">{t('services.subtitle')}</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group bg-[#1e293b] rounded-xl p-6 transition-all duration-300 transform preserve-3d hover:rotate-[10deg] hover:scale-105"
            >
              <div className="mb-4">
                {/* Рендерираме иконата на услугата */}
                <service.icon className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {t(`services.${service.slug}.title`)}
              </h3>
              <p className="text-gray-300 mb-4">
                {t(`services.${service.slug}.shortDescription`)}
              </p>
              <div className="flex items-center text-cyan-400 group-hover:translate-x-2 transition-transform">
                {t('services.learnMore')} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
