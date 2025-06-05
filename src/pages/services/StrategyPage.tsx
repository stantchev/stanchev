import React from 'react';
import { Link } from 'react-router-dom';
import { Target, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const StrategyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="SEO Стратегия | Планиране за успех в търсачките"
        description="Разработване на персонализирана SEO стратегия за вашия бизнес. Ясен план за действие и конкретни стъпки за постигане на по-добри резултати."
        keywords="SEO стратегия, SEO планиране, оптимизация за търсачки, SEO България"
        canonicalUrl="https://stanchev-seo.bg/услуги/стратегия"
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-block p-4 rounded-lg bg-cyber-dark mb-6">
                <Target className="text-cyber-purple" size={48} />
              </div>
              <h1 className="text-4xl font-bold mb-6">
                SEO <span className="neon-text">Стратегия</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                След провеждането на подробен{' '}
                <Link to="/услуги/seo-одит" className="text-cyber-blue hover:text-cyber-purple">
                  SEO одит
                </Link>, 
                разработвам персонализирана стратегия, която ще помогне на вашия бизнес да 
                постигне по-добра видимост в търсачките.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <CyberCard glowColor="purple">
                <h2 className="text-2xl font-bold mb-6">Елементи на SEO стратегията</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Анализ на целевата аудитория</h3>
                      <p className="text-gray-300">
                        Детайлно проучване на вашата целева аудитория в България, техните 
                        навици на търсене и потребителско поведение.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Стратегия за ключови думи</h3>
                      <p className="text-gray-300">
                        Избор на най-подходящите ключови думи за българския пазар, които ще 
                        донесат качествен трафик към вашия сайт.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">План за съдържание</h3>
                      <p className="text-gray-300">
                        Разработване на календар за създаване на оптимизирано съдържание, 
                        което отговаря на търсенията на потребителите.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Техническа оптимизация</h3>
                      <p className="text-gray-300">
                        План за подобряване на техническите аспекти на сайта, които влияят 
                        на класирането в търсачките.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="blue">
                <h2 className="text-2xl font-bold mb-6">Ползи от SEO стратегията</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Ясна пътна карта за постигане на по-добри позиции в търсачките.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Фокус върху най-важните действия, които ще донесат най-добри резултати.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Оптимално разпределение на ресурсите и бюджета за SEO.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Измерими цели и ясни KPI за проследяване на напредъка.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="teal">
                <h2 className="text-2xl font-bold mb-6">Процес на разработване</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">1</span>
                    <div>
                      <p className="font-medium">Анализ на данните</p>
                      <p className="text-gray-400">Преглед на резултатите от SEO одита</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Определяне на цели</p>
                      <p className="text-gray-400">Дефиниране на конкретни и измерими цели</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Разработване на план</p>
                      <p className="text-gray-400">Създаване на детайлен план за действие</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Приоритизиране на задачите</p>
                      <p className="text-gray-400">Определяне на последователност на действията</p>
                    </div>
                  </div>
                </div>
              </CyberCard>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                След разработването на стратегията, следва{' '}
                <Link to="/услуги/on-page-оптимизация" className="text-cyber-blue hover:text-cyber-purple">
                  On-page SEO оптимизация
                </Link>{' '}
                на вашия сайт.
              </p>
              <Link 
                to="/услуги/on-page-оптимизация" 
                className="btn-primary inline-flex items-center"
              >
                Към On-page SEO
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StrategyPage;