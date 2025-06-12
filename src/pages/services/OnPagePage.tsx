import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, CheckCircle, ArrowRight, Settings } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const OnPagePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="On-page SEO | Оптимизация на уебсайт съдържание"
        description="Професионална on-page SEO услуга за оптимизация на заглавия, мета описания, структура на сайта и съдържание. Подобрете класирането си в търсачките и потребителското изживяване."
        keywords="on-page SEO, оптимизация на съдържание, вътрешна SEO оптимизация, мета тагове, заглавия, структура на сайт, SEO за страници, вътрешни линкове, SEO тагове, HTML оптимизация, България"
        canonicalUrl="https://stanchev.bg/услуги/on-page-оптимизация"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "On-page SEO оптимизация",
          "provider": {
            "@type": "Person",
            "name": "Станчев",
            "url": "https://stanchev.bg/за-мен"
          },
          "areaServed": {
            "@type": "Country",
            "name": "България"
          },
          "description": "Услуга за вътрешна SEO оптимизация – подобряване на мета тагове, структура на съдържанието, вътрешни връзки и HTML елементи с цел по-добро класиране в Google и повишаване на органичния трафик."
        }}
      />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-block p-4 rounded-lg bg-cyber-dark mb-6">
                <Layout className="text-cyber-purple" size={48} />
              </div>
              <h1 className="text-4xl font-bold mb-6">
                On-page <span className="neon-text">SEO</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                След разработването на{' '}
                <Link to="/услуги/стратегия" className="text-cyber-blue hover:text-cyber-purple">
                  цялостната SEO стратегия
                </Link>, 
                пристъпваме към оптимизация на вътрешните елементи на вашия сайт за 
                по-добро класиране в търсачките. On-page SEO е основата на всяка успешна оптимизация.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <CyberCard glowColor="purple">
                <h2 className="text-2xl font-bold mb-6">Какво включва On-page SEO?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Оптимизация на мета елементи</h3>
                      <p className="text-gray-300">
                        Създаване на ефективни title тагове и мета описания, които привличат 
                        кликове от резултатите в търсачките и съдържат релевантни ключови думи за българския пазар.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Оптимизация на заглавия</h3>
                      <p className="text-gray-300">
                        Структуриране на H1-H6 тагове за по-добро разбиране от търсачките и 
                        по-добра четимост. Всяко заглавие е оптимизирано за конкретни ключови думи.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">URL структура</h3>
                      <p className="text-gray-300">
                        Създаване на чисти и разбираеми URL адреси, оптимизирани за български 
                        потребители и търсачки. Включва правилно използване на кирилица и латиница.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Вътрешни връзки</h3>
                      <p className="text-gray-300">
                        Изграждане на логична структура от вътрешни връзки за по-добро 
                        индексиране и навигация. Всяка връзка е стратегически поставена за максимален SEO ефект.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Оптимизация на изображения</h3>
                      <p className="text-gray-300">
                        Добавяне на alt текст, оптимизация на имената на файловете и компресия 
                        за по-бързо зареждане без загуба на качество.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Съдържателна оптимизация</h3>
                      <p className="text-gray-300">
                        Подобряване на съществуващото съдържание с релевантни ключови думи, 
                        подобряване на четимостта и добавяне на стойност за потребителите.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="blue">
                <h2 className="text-2xl font-bold mb-6">Ползи от On-page SEO</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        По-добро разбиране на съдържанието от търсачките води до по-точно класиране за релевантни заявки.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Увеличаване на CTR (кликаемостта) в резултатите от търсенето чрез привлекателни мета описания.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Подобрено потребителско изживяване и по-дълго задържане на сайта благодарение на по-добрата структура.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        По-ефективно насочване на целевия трафик към важните страници и услуги.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Повишена конверсия благодарение на по-релевантния трафик и подобреното потребителско изживяване.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="teal">
                <h2 className="text-2xl font-bold mb-6">Процес на оптимизация</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">1</span>
                    <div>
                      <p className="font-medium">Анализ на текущото състояние</p>
                      <p className="text-gray-400">Преглед на съществуващата on-page оптимизация и идентифициране на проблеми</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Оптимизация на мета елементи</p>
                      <p className="text-gray-400">Подобряване на title и meta description тагове за всички важни страници</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Структуриране на съдържанието</p>
                      <p className="text-gray-400">Оптимизация на заглавия, параграфи и общата структура на страниците</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Вътрешна линк структура</p>
                      <p className="text-gray-400">Подобряване на вътрешното свързване и навигацията</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">5</span>
                    <div>
                      <p className="font-medium">Тестване и мониторинг</p>
                      <p className="text-gray-400">Проследяване на резултатите и допълнителни корекции при нужда</p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="pink">
                <div className="flex items-start">
                  <Settings className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Технически детайли</h3>
                    <p className="text-gray-300 mb-4">
                      On-page оптимизацията включва и технически аспекти като правилно използване на schema markup, 
                      оптимизация на Core Web Vitals и подобряване на достъпността на сайта.
                    </p>
                    <p className="text-gray-300">
                      Всички промени се правят внимателно, за да не се нарушат съществуващите функционалности на сайта.
                    </p>
                  </div>
                </div>
              </CyberCard>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                След on-page оптимизацията, преминаваме към{' '}
                <Link to="/услуги/ключови-думи" className="text-cyber-blue hover:text-cyber-purple">
                  проучване на ключови думи
                </Link>{' '}
                за по-нататъшна оптимизация.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/услуги/ключови-думи" 
                  className="btn-primary inline-flex items-center"
                >
                  Към ключови думи
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  to="/контакти" 
                  className="btn-outline inline-flex items-center"
                >
                  Заявете оптимизация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnPagePage;