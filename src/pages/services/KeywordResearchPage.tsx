import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const KeywordResearchPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Проучване на Ключови Думи | SEO Анализ за Вашия Бизнес"
        description="Открийте най-подходящите ключови думи за вашия бизнес чрез професионално SEO проучване. Повишете видимостта си в Google."
        keywords="ключови думи, SEO проучване, търсене, български пазар, онлайн видимост"
        canonicalUrl="https://stanchev.bg/услуги/ключови-думи"
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Проучване на <span className="neon-text">Ключови Думи</span>
            </h1>
            
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-gray-300 mb-8">
                Успешното SEO започва с правилното <Link to="/услуги/ключови-думи" className="text-cyber-blue hover:text-cyber-purple">проучване на ключови думи</Link>. Това е основата, върху която изграждаме съдържание, което наистина достига до вашата целева аудитория.
              </p>
            </div>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Какво включва проучването?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Идентифициране на най-релевантните и печеливши ключови думи за вашия бизнес</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Анализ на обема на търсене и конкурентоспособността на всяка ключова дума</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Групиране на ключовите думи по теми за ефективно съдържание</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Откриване на дългоопашати ключови думи с висок потенциал</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Сезонен анализ и прогноза на търсене</p>
                </div>
              </div>
            </CyberCard>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Ползи за вашия бизнес</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-целенасочено и ефективно съдържание</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-високо класиране в резултатите от търсене</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-добра видимост сред реалните ви потенциални клиенти</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Оптимизиране на рекламни разходи и ресурси</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Изпреварване на конкуренцията чрез по-добро позициониране</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Подкрепа при изграждането на SEO стратегия</p>
                  </div>
                </div>
              </div>
            </CyberCard>

            <div className="flex justify-between items-center">
              <Link 
                to="/услуги/seo-одит"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                ← Обратно към SEO одит
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

export default KeywordResearchPage;