import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Lightbulb } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const ContentOptimizationPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Оптимизация на Съдържание | Повишете видимостта и ангажираността"
        description="Създаваме и оптимизираме SEO съдържание, което класира, вдъхновява и конвертира. Получете висококачествени текстове за блога, категориите и услугите си, оптимизирани за търсачките и българския пазар."
        keywords="оптимизация на съдържание, SEO съдържание, SEO копирайтинг, SEO текстове, съдържание за уебсайт, текстове за блог, ключови думи, съдържание за онлайн магазин, конверсии чрез съдържание, България"
        canonicalUrl="https://stanchev.bg/услуги/оптимизация-на-съдържание"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Оптимизация на съдържание",
          "provider": {
            "@type": "Person",
            "name": "Станчев",
            "url": "https://stanchev.bg/за-мен"
          },
          "areaServed": {
            "@type": "Country",
            "name": "България"
          },
          "description": "Услуга за оптимизация на съдържание с фокус върху SEO текстове, блог публикации, продуктови описания и страници за услуги, насочена към по-добро класиране и ангажираност."
        }}
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-block p-4 rounded-lg bg-cyber-dark mb-6">
                <FileText className="text-cyber-pink" size={48} />
              </div>
              <h1 className="text-4xl font-bold mb-6">
                <span className="neon-text">Оптимизация</span> на Съдържание
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                След <Link to="/услуги/техническо-seo" className="text-cyber-blue hover:text-cyber-purple">техническото SEO</Link> идва най-видимата част — съдържанието. То не просто трябва да е красиво написано, а да бъде стратегически структурирано, ангажиращо и индексирано от търсачките. Правилната оптимизация на съдържание увеличава както трафика, така и доверието на потребителите.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <CyberCard glowColor="pink">
                <h2 className="text-2xl font-bold mb-6">Какво включва оптимизацията на съдържание?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Одит на съществуващото съдържание</h3>
                      <p className="text-gray-300">
                        Анализ на текущото съдържание на сайта за идентифициране на възможности за подобрение, 
                        дублирано съдържание и страници с нисък потенциал.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Стратегия за тематични клъстери</h3>
                      <p className="text-gray-300">
                        Разработване на стратегия за създаване на взаимосвързано съдържание, 
                        което покрива цялата тематична област на вашия бизнес.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Създаване на нови страници</h3>
                      <p className="text-gray-300">
                        Разработване на нови целеви страници и блог постове, оптимизирани за 
                        конкретни ключови думи и потребителски намерения.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">SEO копирайтинг</h3>
                      <p className="text-gray-300">
                        Професионално писане на текстове, които балансират SEO оптимизацията 
                        с ангажираност и конверсия на потребителите.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Оптимизация на мета данни</h3>
                      <p className="text-gray-300">
                        Създаване на привлекателни заглавия и мета описания, които увеличават 
                        кликаемостта от резултатите в търсачките.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Локализация за България</h3>
                      <p className="text-gray-300">
                        Адаптация на съдържанието за българския пазар с местни референции, 
                        културни особености и локални ключови думи.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="blue">
                <h2 className="text-2xl font-bold mb-6">Ползи от оптимизирано съдържание</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-добро класиране по целеви ключови думи и фрази в Google.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Повишена конверсия и доверие в бранда чрез качествено съдържание.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-дълъг престой на потребителите в сайта и намален bounce rate.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Подобрена индексация на страниците от Google и други търсачки.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-висок авторитет и доверие от Google чрез експертно съдържание.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Адаптирано съдържание за гласово и мобилно търсене.
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
                      <p className="font-medium">Анализ на съществуващото съдържание</p>
                      <p className="text-gray-400">Одит на текущите страници и идентифициране на пропуски</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Планиране на съдържанието</p>
                      <p className="text-gray-400">Създаване на календар и стратегия за ново съдържание</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Създаване и оптимизация</p>
                      <p className="text-gray-400">Писане на ново съдържание и оптимизация на съществуващото</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Публикуване и промоция</p>
                      <p className="text-gray-400">Качване на съдържанието и промоция в социалните мрежи</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">5</span>
                    <div>
                      <p className="font-medium">Мониторинг и актуализация</p>
                      <p className="text-gray-400">Проследяване на резултатите и редовни актуализации</p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="purple">
                <div className="flex items-start">
                  <Lightbulb className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Съвет за съдържанието</h3>
                    <p className="text-gray-300 mb-4">
                      Качественото съдържание не е само за SEO - то изгражда доверие, авторитет и връзка с аудиторията. 
                      Фокусирайте се върху предоставяне на стойност на потребителите.
                    </p>
                    <p className="text-gray-300">
                      Редовното публикуване на ново съдържание сигнализира на Google, че сайтът ви е активен и актуален, 
                      което подобрява класирането.
                    </p>
                  </div>
                </div>
              </CyberCard>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                След оптимизацията на съдържанието, преминаваме към{' '}
                <Link to="/услуги/локално-seo" className="text-cyber-blue hover:text-cyber-purple">
                  локално SEO
                </Link>{' '}
                за по-добра видимост в местните търсения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/услуги/локално-seo" 
                  className="btn-primary inline-flex items-center"
                >
                  Към локално SEO
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

export default ContentOptimizationPage;