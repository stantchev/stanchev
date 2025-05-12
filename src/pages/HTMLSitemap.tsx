import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { services } from '../constants';
import SEO from '../components/SEO';

const HTMLSitemap: React.FC = () => {
  const { t } = useTranslation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sitemap | Stanchev",
    "description": "Complete overview of all pages on Stanchev's portfolio and services website"
  };

  return (
    <>
      <SEO
        title="Sitemap | Stanchev"
        description="Complete overview of all pages on Stanchev's portfolio and services website"
        schema={schema}
      />

      <div className="min-h-screen pt-20 bg-gradient-to-b from-[#050816] to-[#091634]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-white mb-12">Sitemap</h1>

          <div className="grid gap-12">
            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Main Pages</h2>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Services</h2>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link 
                      to={`/services/${service.slug}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {t(`services.${service.slug}.title`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HTMLSitemap;