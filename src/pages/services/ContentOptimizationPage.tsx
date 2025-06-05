import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const ContentOptimizationPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Оптимизация на Съдържание | Повишете видимостта и ангажираността"
        description="Създаваме и оптимизираме съдържание, което класира, вдъхновява и продава. Подобрете ангажираността и класирането си с ефективна SEO стратегия за съдържание."
        keywords="оптимизация на съдържание, SEO съдържание, SEO копирайтинг, SEO текстове, България"
        canonicalUrl="https://stanchev.bg/услуги/съдържание"
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="neon-text">Оптимизация</span> на Съдържание
            </h1>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-gray-300 mb-8">
                След <Link to="/услуги/техническо-seo" className="text-cyber-blue hover:text-cyber-purple">техническото SEO</Link> идва най-видимата част — съдържанието. То не просто трябва да е красиво написано, а да бъде стратегически структурирано, ангажиращо и индексирано от търсачките. Правилната оптимизация на съдържание увеличава както трафика, така и доверието на потребителите.
              </p>
            </div>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Какво включва оптимизацията на съдържание?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Одит на съществуващото съдържание</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Разработване на стратегия за тематични клъстери</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Създаване и оптимизация на целеви страници и блог постове</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>SEO копирайтинг с фокус върху ангажираност и класиране</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Оптимизация на мета тагове, заглавия и структура</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Адаптация за локален и национален пазар</p>
                </div>
              </div>
            </CyberCard>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Ползи от оптимизирано съдържание</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-добро класиране по целеви ключови думи</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Повишена конверсия и доверие в бранда</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-дълъг престой на потребителите в сайта</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Подобрена индексация на страниците</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-висок авторитет и доверие от Google</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Адаптирано съдържание за гласово и мобилно търсене</p>
                  </div>
                </div>
              </div>
            </CyberCard>

            <div className="flex justify-between items-center">
              <Link 
                to="/услуги/техническо-seo"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                ← Обратно към Техническо SEO
              </Link>
              <Link 
                to="/услуги/локално-seo"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                Следваща услуга: Локално SEO
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentOptimizationPage;