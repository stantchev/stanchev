import React from 'react';
import { Link } from 'react-router-dom';
import { Target, CheckCircle, ArrowRight, Lightbulb } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const StrategyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="SEO Стратегия | Планиране за успех в търсачките"
        description="Разработване на персонализирана SEO стратегия за устойчив растеж и по-добро класиране в Google. Включва анализ на конкуренцията, ключови думи, линк билдинг и съдържание."
        keywords="SEO стратегия, SEO планиране, стратегия за оптимизация, SEO анализ, SEO България, дигитална стратегия, класиране в Google, конкурентен анализ, SEO за бизнес, SEO цели, стратегия за съдържание"
        canonicalUrl="https://stanchev.bg/услуги/стратегия"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "SEO стратегия",
          "provider": {
            "@type": "Person",
            "name": "Станчев",
            "url": "https://stanchev.bg/за-мен"
          },
          "areaServed": {
            "@type": "Country",
            "name": "България"
          },
          "description": "Професионална SEO услуга за създаване на индивидуална стратегия – анализ на конкуренцията, избор на ключови думи, структура на сайта, съдържание и линк билдинг за дългосрочен растеж и видимост в търсачките."
        }}
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
                постигне по-добра видимост в търсачките и устойчив органичен растеж. Стратегията е пътната карта към SEO успеха.
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
                        навици на търсене, потребителско поведение и предпочитания при избор на продукти или услуги.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Стратегия за ключови думи</h3>
                      <p className="text-gray-300">
                        Избор на най-подходящите ключови думи за българския пазар, които ще 
                        донесат качествен трафик към вашия сайт. Включва анализ на search intent и сезонност.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">План за съдържание</h3>
                      <p className="text-gray-300">
                        Разработване на календар за създаване на оптимизирано съдържание, 
                        което отговаря на търсенията на потребителите и изгражда авторитет в индустрията.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Техническа оптимизация</h3>
                      <p className="text-gray-300">
                        План за подобряване на техническите аспекти на сайта, които влияят 
                        на класирането в търсачките - скорост, мобилна оптимизация, структура.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Link Building стратегия</h3>
                      <p className="text-gray-300">
                        План за изграждане на качествени обратни връзки от авторитетни български 
                        сайтове и международни източници в вашата индустрия.
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
                        Ясна пътна карта за постигане на по-добри позиции в търсачките с конкретни стъпки и времеви рамки.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Фокус върху най-важните действия, които ще донесат най-добри резултати за вашия конкретен бизнес.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Оптимално разпределение на ресурсите и бюджета за SEO с максимална ефективност на инвестицията.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Измерими цели и ясни KPI за проследяване на напредъка и ROI от SEO усилията.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Адаптивност към промените в алгоритмите на Google и пазарните условия в България.
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
                      <p className="text-gray-400">Преглед на резултатите от SEO одита и бизнес анализ</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Определяне на цели</p>
                      <p className="text-gray-400">Дефиниране на конкретни и измерими SEO цели за следващите 6-12 месеца</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Разработване на план</p>
                      <p className="text-gray-400">Създаване на детайлен план за действие с приоритети и ресурси</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Приоритизиране на задачите</p>
                      <p className="text-gray-400">Определяне на последователност на действията за максимален ефект</p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="pink">
                <div className="flex items-start">
                  <Lightbulb className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Стратегически съвет</h3>
                    <p className="text-gray-300 mb-4">
                      Успешната SEO стратегия не е статичен документ. Тя се адаптира и развива според промените 
                      в алгоритмите на Google, конкурентната среда и бизнес целите.
                    </p>
                    <p className="text-gray-300">
                      Препоръчвам преглед и актуализация на стратегията на всеки 3-6 месеца за оптимални резултати.
                    </p>
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/услуги/on-page-оптимизация" 
                  className="btn-primary inline-flex items-center"
                >
                  Към On-page SEO
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  to="/контакти" 
                  className="btn-outline inline-flex items-center"
                >
                  Заявете стратегия
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StrategyPage;