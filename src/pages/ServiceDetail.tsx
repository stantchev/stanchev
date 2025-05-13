import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { services } from '../constants';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  
  const service = services.find(s => s.slug === slug);
  const relatedServices = services
    .filter(s => s.slug !== slug)
    .slice(0, 3);

  if (!service) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-b from-[#050816] to-[#091634] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">{t('services.notFound')}</h1>
          <Link to="/services" className="text-cyan-400 hover:underline">
            {t('services.backToServices')}
          </Link>
        </div>
      </div>
    );
  }

  const benefits = t(`services.${service.slug}.benefits`, { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t(`meta.${service.slug}.title`)}
        description={t(`meta.${service.slug}.description`)}
        keywords={`SEO, ${t(`services.${service.slug}.title`)}, digital marketing, web optimization`}
      />

      <div className="min-h-screen pt-20 bg-gradient-to-b from-[#050816] to-[#091634]">
        <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-gray-400 hover:text-cyan-400">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to="/services" className="text-gray-400 hover:text-cyan-400">Services</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-cyan-400">{t(`services.${service.slug}.title`)}</li>
          </ol>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <Link
            to="/services"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('services.backToServices')}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t(`services.${service.slug}.title`)}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-gray-300 text-lg mb-8">
                {t(`services.${service.slug}.fullDescription`)}
              </h2>

              <h3 className="text-2xl font-bold text-white mb-6">
                {t('services.keyBenefits')}
              </h3>

              <div className="grid gap-4 mb-12">
                {Array.isArray(benefits) && benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">
                  {t('services.startProject')}
                </h3>
                <p className="text-white/90 mb-6">
                  {t('services.startProjectDescription')}
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-opacity"
                >
                  {t('services.contactUs')}
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('services.relatedServices')}
              </h3>
              <div className="space-y-4">
                {relatedServices.map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    to={`/services/${relatedService.slug}`}
                    className="block bg-[#1e293b] p-4 rounded-lg hover:bg-[#2a3c58] transition-colors"
                  >
                    <h4 className="text-lg font-medium text-white mb-2">
                      {t(`services.${relatedService.slug}.title`)}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {t(`services.${relatedService.slug}.shortDescription`)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;