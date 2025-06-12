import React from 'react';
import { Link } from 'react-router-dom';
import { FileSearch, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const AuditPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="SEO Одит | Професионален анализ на уебсайтове в България"
        description="Професионален SEO одит с пълен технически анализ на уебсайта ви. Получете конкретни препоръки за оптимизация, подобряване на структурата, скоростта и видимостта в Google за българския пазар."
        keywords="SEO одит, технически анализ, SEO анализ, одит на уебсайт, SEO България, оптимизация на сайт, SEO проверка, SEO услуги, органично търсене, класиране в Google, техническа оптимизация, дигитален одит, видимост в търсачки, on-page SEO, off-page SEO, уебсайт одит, SEO инструмент, crawl анализ"
        canonicalUrl="https://stanchev.bg/услуги/seo-одит"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "SEO Одит",
          "provider": {
            "@type": "Person",
            "name": "Станчев",
            "url": "https://stanchev.bg/за-мен"
          },
          "areaServed": {
            "@type": "Country",
            "name": "България"
          },
          "description": "Подробен SEO одит с технически и съдържателен анализ на уебсайта ви, включително on-page, off-page и crawl диагностика. Идентифициране на грешки и възможности за подобрение."
        }}
      />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-block p-4 rounded-lg bg-cyber-dark mb-6">
                <FileSearch className="text-cyber-purple" size={48} />
              </div>
              <h1 className="text-4xl font-bold mb-6">
                SEO <span className="neon-text">Одит</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                След <Link to="/услуги/консултация" className="text-cyber-blue hover:text-cyber-purple">първоначалната консултация</Link>, 
                извършвам задълбочен анализ на вашия уебсайт, за да открия всички възможности за подобрение и да създам 
                конкретен план за действие. SEO одитът е основата на всяка успешна оптимизация.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <CyberCard glowColor="purple">
                <h2 className="text-2xl font-bold mb-6">Какво включва SEO одитът?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Технически анализ</h3>
                      <p className="text-gray-300">
                        Проверка на скоростта на зареждане, мобилната оптимизация, SSL сертификати, 
                        XML sitemap, robots.txt файл, структура на URL адресите и други критични технически аспекти, които влияят на индексирането.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Анализ на съдържанието</h3>
                      <p className="text-gray-300">
                        Оценка на качеството и релевантността на съдържанието, мета описания, 
                        заглавия, структура на сайта, вътрешни линкове и оптимизация за ключови думи на български език.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Анализ на ключови думи</h3>
                      <p className="text-gray-300">
                        Проучване на текущото таргетиране на ключови думи и откриване на нови 
                        възможности за българския пазар. Анализ на search intent и конкурентоспособност.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Анализ на конкуренцията</h3>
                      <p className="text-gray-300">
                        Сравнителен анализ с основните ви конкуренти на българския пазар и 
                        идентифициране на конкурентни предимства и пропуски в стратегията.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Анализ на линкове</h3>
                      <p className="text-gray-300">
                        Оценка на входящите и изходящите връзки, както и вътрешната линк структура 
                        на сайта. Проверка за токсични линкове и възможности за link building.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Локално SEO (ако е приложимо)</h3>
                      <p className="text-gray-300">
                        Анализ на Google My Business профила, локални цитати, отзиви и оптимизация 
                        за локални търсения в България.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="blue">
                <h2 className="text-2xl font-bold mb-6">Ползи от SEO одита</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Получавате ясна картина за текущото състояние на вашия сайт и неговото 
                        представяне в търсачките спрямо конкуренцията.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Идентифициране на конкретни проблеми, които пречат на по-доброто класиране 
                        и органичен трафик от Google.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Приоритизиран списък с препоръки за подобрение, базирани на потенциалното 
                        им въздействие върху SEO резултатите.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Разбиране на конкурентната среда и възможностите за изпреварване на 
                        конкуренцията в органичните резултати.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Roadmap за SEO оптимизация с ясни стъпки и очаквани резултати за следващите месеци.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="teal">
                <h2 className="text-2xl font-bold mb-6">Процес на работа</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">1</span>
                    <div>
                      <p className="font-medium">Първоначален преглед</p>
                      <p className="text-gray-400">Бърз преглед на основните показатели на сайта и настройка на инструменти</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Задълбочен анализ</p>
                      <p className="text-gray-400">Детайлно проучване на всички аспекти на сайта с професионални SEO инструменти</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Изготвяне на доклад</p>
                      <p className="text-gray-400">Създаване на подробен доклад с препоръки, приоритети и план за действие</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Обсъждане на резултатите</p>
                      <p className="text-gray-400">Представяне и обяснение на находките, препоръките и следващите стъпки</p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="pink">
                <div className="flex items-start">
                  <AlertTriangle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Важно за знаене</h3>
                    <p className="text-gray-300 mb-4">
                      SEO одитът не е еднократна услуга. Препоръчвам провеждането на одит поне веднъж на 6 месеца, 
                      за да се проследят промените в алгоритмите на Google и да се адаптира стратегията съответно.
                    </p>
                    <p className="text-gray-300">
                      Резултатите от одита са основата за разработването на <Link to="/услуги/стратегия" className="text-cyber-blue hover:text-cyber-purple">цялостна SEO стратегия</Link> 
                      и последващите оптимизации.
                    </p>
                  </div>
                </div>
              </CyberCard>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                След SEO одита, следващата стъпка е създаването на{' '}
                <Link to="/услуги/стратегия" className="text-cyber-blue hover:text-cyber-purple">
                  цялостна SEO стратегия
                </Link>{' '}
                за вашия сайт.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/услуги/стратегия" 
                  className="btn-primary inline-flex items-center"
                >
                  Към SEO стратегия
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  to="/контакти" 
                  className="btn-outline inline-flex items-center"
                >
                  Заявете одит
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditPage;