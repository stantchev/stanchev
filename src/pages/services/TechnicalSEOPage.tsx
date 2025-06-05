import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const TechnicalSEOPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Техническо SEO | Подобрете индексирането и скоростта на вашия сайт"
        description="Професионално техническо SEO за оптимално индексиране, висока скорост и сигурност. Осигурете стабилна основа за вашия сайт в търсачките."
        keywords="техническо SEO, индексиране, скорост на сайта, SEO оптимизация, техническа поддръжка"
        canonicalUrl="https://stanchev.bg/услуги/техническо-seo"
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="neon-text">Техническо</span> SEO
            </h1>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-gray-300 mb-8">
                Техническото SEO е основата на успешната оптимизация. След <Link to="/услуги/одит" className="text-cyber-blue hover:text-cyber-purple">SEO одита</Link> преминаваме към поправяне на технически пречки, които възпрепятстват индексирането, скоростта или мобилната съвместимост на сайта ви. Без здрава техническа основа, всички останали SEO усилия се компрометират.
              </p>
            </div>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Какво включва техническото SEO?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Оптимизация на скоростта на зареждане на сайта</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Мобилна съвместимост и отзивчив дизайн</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Решаване на проблеми с индексиране и crawl грешки</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Настройки на sitemap.xml и robots.txt</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>SSL сертификат и сигурна HTTPS връзка</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Канонични тагове и елиминиране на дублирано съдържание</p>
                </div>
              </div>
            </CyberCard>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Ползи от техническо SEO</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-бърз и надежден уебсайт</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Подобрена видимост в Google</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-добро потребителско изживяване</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Мобилна оптимизация за повишен трафик</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-малко технически грешки и наказания от търсачки</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Увеличени шансове за класиране по конкурентни думи</p>
                  </div>
                </div>
              </div>
            </CyberCard>

            <div className="flex justify-between items-center">
              <Link 
                to="/услуги/одит"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                ← Обратно към SEO Одит
              </Link>
              <Link 
                to="/услуги/съдържание"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                Следваща услуга: Оптимизация на Съдържание
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalSEOPage;