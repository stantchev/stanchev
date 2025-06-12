import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Link as LinkIcon, Shield } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const LinkBuildingPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Изграждане на Връзки | Качествени външни линкове за по-добро SEO"
        description="Изграждане на авторитет с качествени външни връзки. Провеждаме бели link building кампании, които подобряват класирането ви в търсачките и органичния трафик в България."
        keywords="изграждане на връзки, link building, външни линкове, обратни връзки, линк билдинг България, SEO връзки, авторитет на сайта, линков профил, white hat link building, SEO кампания"
        canonicalUrl="https://stanchev.bg/услуги/линк-билдинг"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Изграждане на връзки (Link Building)",
          "provider": {
            "@type": "Person",
            "name": "Станчев",
            "url": "https://stanchev.bg/за-мен"
          },
          "areaServed": {
            "@type": "Country",
            "name": "България"
          },
          "description": "Професионално изграждане на линкове с фокус върху релевантност, качество и устойчив растеж. Услугата включва outreach, guest posting и анализ на линковия профил."
        }}
      />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-block p-4 rounded-lg bg-cyber-dark mb-6">
                <LinkIcon className="text-cyber-pink" size={48} />
              </div>
              <h1 className="text-4xl font-bold mb-6">
                <span className="neon-text">Изграждане на Връзки</span> (Link Building)
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Изграждането на висококачествени <strong>обратни връзки</strong> е ключов фактор за доброто класиране в търсачките. След <Link to="/услуги/структурирани-данни" className="text-cyber-blue hover:text-cyber-purple">структурираните данни</Link>, това е един от най-силните SEO сигнали, които показват на Google, че сайтът ви е надежден и заслужава внимание. Качествените линкове са като препоръки от авторитетни източници в интернет.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <CyberCard glowColor="pink">
                <h2 className="text-2xl font-bold mb-6">Какво включва линк билдинг услугата?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Одит на съществуващите връзки</h3>
                      <p className="text-gray-300">
                        Задълбочен анализ на текущия линков профил, идентифициране на токсични връзки 
                        и оценка на качеството на съществуващите обратни връзки.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Проучване на възможности</h3>
                      <p className="text-gray-300">
                        Идентифициране на потенциални сайтове за изграждане на връзки в България и 
                        международно, релевантни за вашата индустрия и ниша.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Guest posting и outreach</h3>
                      <p className="text-gray-300">
                        Професионално изграждане на връзки чрез гост публикации на авторитетни сайтове 
                        и персонализирани outreach кампании до релевантни уебмастъри.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Създаване на linkable assets</h3>
                      <p className="text-gray-300">
                        Разработване на споделяемо съдържание като инфографики, проучвания и ресурси, 
                        които естествено привличат линкове от други сайтове.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Broken link building</h3>
                      <p className="text-gray-300">
                        Намиране на счупени връзки в релевантни сайтове и предлагане на вашето съдържание 
                        като качествена замяна за подобряване на потребителското изживяване.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Мониторинг и disavow</h3>
                      <p className="text-gray-300">
                        Постоянно наблюдение на новите връзки и премахване на токсични или вредни връзки 
                        чрез Google Disavow Tool при необходимост.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="blue">
                <h2 className="text-2xl font-bold mb-6">Ползи от изграждането на връзки</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Повишен авторитет на домейна (Domain Authority) и по-силен SEO профил.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Значително по-добри позиции в органичното търсене за целеви ключови думи.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Привличане на качествен референтен трафик от други авторитетни сайтове.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-лесно и бързо индексиране на нови страници от търсачките.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Повишена осведоменост за бранда и изграждане на онлайн репутация.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Устойчив SEO растеж с дългосрочни резултати и конкурентно предимство.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="teal">
                <h2 className="text-2xl font-bold mb-6">Процес на изграждане на връзки</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">1</span>
                    <div>
                      <p className="font-medium">Анализ на линковия профил</p>
                      <p className="text-gray-400">Одит на съществуващите връзки и конкурентен анализ</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Стратегическо планиране</p>
                      <p className="text-gray-400">Разработване на персонализирана link building стратегия</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Проучване и outreach</p>
                      <p className="text-gray-400">Намиране на възможности и контактуване с уебмастъри</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Създаване на съдържание</p>
                      <p className="text-gray-400">Разработване на качествено съдържание за guest posts</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">5</span>
                    <div>
                      <p className="font-medium">Мониторинг и отчитане</p>
                      <p className="text-gray-400">Проследяване на новите връзки и измерване на резултатите</p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="purple">
                <div className="flex items-start">
                  <Shield className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">White Hat подход</h3>
                    <p className="text-gray-300 mb-4">
                      Използваме изключително етични "white hat" техники за изграждане на връзки, които са в съответствие 
                      с насоките на Google и осигуряват дългосрочни, устойчиви резултати.
                    </p>
                    <p className="text-gray-300">
                      Избягваме рискови практики като купуване на линкове, PBN мрежи или спам техники, 
                      които могат да навредят на сайта ви в дългосрочен план.
                    </p>
                  </div>
                </div>
              </CyberCard>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                След изграждането на връзки, завършваме с{' '}
                <Link to="/услуги/seo-мониторинг" className="text-cyber-blue hover:text-cyber-purple">
                  SEO мониторинг
                </Link>{' '}
                за проследяване на резултатите.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/услуги/seo-мониторинг" 
                  className="btn-primary inline-flex items-center"
                >
                  Към SEO мониторинг
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  to="/контакти" 
                  className="btn-outline inline-flex items-center"
                >
                  Заявете link building
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkBuildingPage;