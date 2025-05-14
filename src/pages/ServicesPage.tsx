import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { services } from '../constants';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('meta.services.title')}
        description={t('meta.services.description')}
        keywords=" станчев сео, станчев seo, сео, seo, как да си направя сайт ,изработка на сайт, seo оптимизация, seo цени, изработка на онлайн магазин, интернет реклама, seo специалист, seo стратег, seo стратег софия, seo специалист софия, SEO услуги за малък бизнес, техническо SEO за сайт, съдържателна SEO стратегия, линк билдинг България, дигитален маркетинг услуги, SEO оптимизация за WordPress, подобряване на онлайн присъствие, изграждане на авторитет в Google, SEO за нови сайтове, локално SEO за фирми"
      />

      <div className="min-h-screen pt-20 bg-gradient-to-b from-[#050816] to-[#091634]">
        <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-gray-400 hover:text-cyan-400">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-cyan-400">Services</li>
          </ol>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('services.title')} <span className="text-cyan-400">{t('services.subtitle')}</span>
            </h1>
            <h2 className="text-gray-300 max-w-2xl mx-auto">
              {t('services.description')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-[#1e293b] rounded-xl p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="mb-4">
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
    </>
  );
};

export default ServicesPage;
