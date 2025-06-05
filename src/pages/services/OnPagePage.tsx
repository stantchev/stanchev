import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const OnPagePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="On-page SEO | Оптимизация на уебсайт съдържание"
        description="Професионална on-page SEO оптимизация за вашия уебсайт. Подобрете видимостта си в търсачките чрез оптимизация на съдържанието и структурата."
        keywords="on-page SEO, оптимизация на съдържание, SEO оптимизация, мета тагове"
        canonicalUrl="https://stanchev-seo.bg/услуги/on-page-оптимизация"
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
                по-добро класиране в търсачките.
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
                        кликове от резултатите в търсачките.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Оптимизация на заглавия</h3>
                      <p className="text-gray-300">
                        Структуриране на H1-H6 тагове за по-добро разбиране от търсачките и 
                        по-добра четимост.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">URL структура</h3>
                      <p className="text-gray-300">
                        Създаване на чисти и разбираеми URL адреси, оптимизирани за български 
                        потребители и търсачки.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Вътрешни връзки</h3>
                      <p className="text-gray-300">
                        Изграждане на логична структура от вътрешни връзки за по-добро 
                        индексиране и навигация.
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
                        По-добро разбиране на съдържанието от търсачките.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Увеличаване на CTR (кликаемостта) в резултатите от търсенето.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        Подобрено потребителско изживяване и по-дълго задържане на сайта.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">
                        По-ефективно насочване на целевия трафик към важните страници.
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
                      <p className="text-gray-400">Преглед на съществуващата on-page оптимизация</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Оптимизация на мета елементи</p>
                      <p className="text-gray-400">Подобряване на title и meta description тагове</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Структуриране на съдържанието</p>
                      <p className="text-gray-400">Оптимизация на заглавия и параграфи</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Вътрешна линк структура</p>
                      <p className="text-gray-400">Подобряване на вътрешното свързване</p>
                    </div>
                  </div>
                </div>
              </CyberCard>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                След on-page оптимизацията, преминаваме към{' '}
                <Link to="/услуги/техническо-seo" className="text-cyber-blue hover:text-cyber-purple">
                  техническата SEO оптимизация
                </Link>{' '}
                на вашия сайт.
              </p>
              <Link 
                to="/услуги/техническо-seo" 
                className="btn-primary inline-flex items-center"
              >
                Към техническо SEO
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnPagePage;