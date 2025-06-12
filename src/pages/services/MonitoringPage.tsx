import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart, TrendingUp } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const MonitoringPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="SEO Мониторинг | Проследяване и анализ на SEO резултатите"
        description="SEO мониторинг с месечни отчети, анализ на ключови думи, позиции и трафик. Поддържайте високо класиране с професионален анализ чрез Google Search Console и SEO инструменти."
        keywords="SEO мониторинг, проследяване на резултати, SEO анализ, позициониране, SEO отчет, Google Search Console, SEO метрики, ключови думи, SERP анализ, устойчив растеж, SEO доклади"
        canonicalUrl="https://stanchev.bg/услуги/seo-мониторинг"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "SEO Мониторинг",
          "provider": {
            "@type": "Person",
            "name": "Станчев",
            "url": "https://stanchev.bg/за-мен"
          },
          "areaServed": {
            "@type": "Country",
            "name": "България"
          },
          "description": "Услуга за SEO мониторинг и анализ на резултати – включва проследяване на ключови думи, позиции в търсачките, трафик и месечни отчети чрез Google Search Console и професионални инструменти."
        }}
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-block p-4 rounded-lg bg-cyber-dark mb-6">
                <BarChart className="text-cyber-teal" size={48} />
              </div>
              <h1 className="text-4xl font-bold mb-6">
                SEO <span className="neon-text">Мониторинг</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                SEO мониторингът е последната, но изключително важна стъпка от SEO процеса. След <Link to="/услуги/линк-билдинг" className="text-cyber-blue hover:text-cyber-purple">изграждането на връзки</Link>, той гарантира, че приложените стратегии се проследяват, анализират и усъвършенстват постоянно. Така се осигурява дългосрочен успех и стабилен растеж на органичния трафик.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <CyberCard glowColor="teal">
                <h2 className="text-2xl font-bold mb-6">Какво включва SEO мониторингът?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Месечни SEO доклади</h3>
                      <p className="text-gray-300">
                        Подробни месечни отчети с ясно представени резултати, включващи промени в позициите, 
                        трафика, конверсиите и общото SEO представяне на сайта.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Проследяване на ключови думи</h3>
                      <p className="text-gray-300">
                        Ежедневно мониториране на класирането по избрани ключови думи в Google, 
                        включително локални и национални позиции за българския пазар.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Google Search Console анализ</h3>
                      <p className="text-gray-300">
                        Задълбочен анализ на органичния трафик, CTR, impressions и други важни метрики 
                        директно от Google Search Console.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Google Analytics интеграция</h3>
                      <p className="text-gray-300">
                        Наблюдение на поведението на потребителите, conversion rate, bounce rate 
                        и други показатели за потребителското изживяване.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Технически мониторинг</h3>
                      <p className="text-gray-300">
                        Автоматично откриване на спадове в позиционирането, технически проблеми, 
                        404 грешки и други фактори, които могат да повлияят на SEO.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Конкурентен анализ</h3>
                      <p className="text-gray-300">
                        Редовно проследяване на конкуренцията и техните SEO стратегии за 
                        идентифициране на нови възможности и заплахи.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="blue">
                <h2 className="text-2xl font-bold mb-6">Ползи от SEO мониторинг</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Пълна прозрачност относно резултатите от SEO оптимизацията и инвестицията.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-бърза реакция при спадащи позиции или технически проблеми.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Идентифициране на нови възможности за съдържание и ключови думи.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Подобрено планиране на бъдещи SEO активности и стратегии.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Ясни доказателства за ROI от SEO усилията и инвестициите.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-добра комуникация и отчетност с клиента или управленския екип.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="purple">
                <h2 className="text-2xl font-bold mb-6">Какво включват отчетите?</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">1</span>
                    <div>
                      <p className="font-medium">Executive Summary</p>
                      <p className="text-gray-400">Кратко резюме на ключовите резултати и тенденции</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Позиции по ключови думи</p>
                      <p className="text-gray-400">Детайлен анализ на промените в класирането</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Трафик и конверсии</p>
                      <p className="text-gray-400">Анализ на органичния трафик и неговото качество</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Технически статус</p>
                      <p className="text-gray-400">Преглед на техническото здраве на сайта</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">5</span>
                    <div>
                      <p className="font-medium">Препоръки за следващия месец</p>
                      <p className="text-gray-400">Конкретни стъпки за продължаване на растежа</p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="pink">
                <div className="flex items-start">
                  <TrendingUp className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Дългосрочен успех</h3>
                    <p className="text-gray-300 mb-4">
                      SEO е дългосрочна стратегия и редовният мониторинг е ключов за поддържане и подобряване на резултатите. 
                      Алгоритмите на Google се променят постоянно и е важно да се адаптираме навреме.
                    </p>
                    <p className="text-gray-300">
                      Чрез постоянен мониторинг можем да идентифицираме тенденции, да предотвратим проблеми 
                      и да използваме нови възможности за растеж преди конкуренцията.
                    </p>
                  </div>
                </div>
              </CyberCard>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                SEO мониторингът завършва цикъла на оптимизация. За нови проекти започваме отново с{' '}
                <Link to="/услуги/консултация" className="text-cyber-blue hover:text-cyber-purple">
                  SEO консултация
                </Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/контакти" 
                  className="btn-primary inline-flex items-center"
                >
                  Заявете мониторинг
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  to="/услуги" 
                  className="btn-outline inline-flex items-center"
                >
                  Всички услуги
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonitoringPage;