import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Search } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const KeywordResearchPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Проучване на Ключови Думи | SEO Анализ за Вашия Бизнес"
        description="Професионално SEO проучване за определяне на най-печелившите ключови думи за вашия бизнес. Подобрете класирането си в Google и привличайте органичен трафик от българския пазар."
        keywords="ключови думи, SEO проучване, анализ на търсене, SEO стратегии, проучване на конкуренция, онлайн видимост, трафик от търсачки, Google България, семантичен анализ, SEO инструменти"
        canonicalUrl="https://stanchev.bg/услуги/ключови-думи"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Проучване на ключови думи",
          "provider": {
            "@type": "Person",
            "name": "Станчев",
            "url": "https://stanchev.bg/за-мен"
          },
          "areaServed": {
            "@type": "Country",
            "name": "България"
          },
          "description": "SEO услуга за проучване на ключови думи, базирана на търсене в Google, конкуренция и потребителско поведение. Подходяща за онлайн бизнеси в България, които искат по-добро класиране."
        }}
      />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-block p-4 rounded-lg bg-cyber-dark mb-6">
                <Search className="text-cyber-blue" size={48} />
              </div>
              <h1 className="text-4xl font-bold mb-6">
                Проучване на <span className="neon-text">Ключови Думи</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Успешното SEO започва с правилното проучване на ключови думи. След <Link to="/услуги/on-page-оптимизация" className="text-cyber-blue hover:text-cyber-purple">on-page оптимизацията</Link>, 
                е важно да идентифицираме точните думи и фрази, които вашите потенциални клиенти използват при търсене в Google. 
                Това е основата, върху която изграждаме съдържание, което наистина достига до вашата целева аудитория.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <CyberCard glowColor="blue">
                <h2 className="text-2xl font-bold mb-6">Какво включва проучването?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Анализ на търсенето в България</h3>
                      <p className="text-gray-300">
                        Идентифициране на най-релевантните и печеливши ключови думи за вашия бизнес, 
                        специфично за българския пазар и местните особености на търсенето.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Анализ на обем и конкуренция</h3>
                      <p className="text-gray-300">
                        Детайлен анализ на обема на търсене и конкурентоспособността на всяка ключова дума, 
                        за да определим най-добрите възможности за класиране.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Групиране по теми</h3>
                      <p className="text-gray-300">
                        Организиране на ключовите думи по тематични групи за ефективно създаване на съдържание 
                        и структуриране на сайта.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Long-tail ключови думи</h3>
                      <p className="text-gray-300">
                        Откриване на дългоопашати ключови думи с висок потенциал за конверсия и 
                        по-ниска конкуренция, специфични за вашата ниша.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Сезонен анализ</h3>
                      <p className="text-gray-300">
                        Изследване на сезонните тенденции в търсенето и прогноза за бъдещи периоди, 
                        за да планираме съдържанието оптимално.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Анализ на search intent</h3>
                      <p className="text-gray-300">
                        Разбиране на намерението зад всяка ключова дума - информационно, навигационно, 
                        транзакционно или комерсиално.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="purple">
                <h2 className="text-2xl font-bold mb-6">Ползи за вашия бизнес</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-целенасочено и ефективно съдържание, което отговаря на реалните търсения на потребителите.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-високо класиране в резултатите от търсене за релевантни и печеливши заявки.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-добра видимост сред реалните ви потенциални клиенти в България.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Оптимизиране на рекламни разходи и ресурси чрез фокус върху най-ефективните думи.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Изпреварване на конкуренцията чрез по-добро позициониране и стратегическо планиране.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Солидна основа за изграждането на цялостна SEO стратегия и съдържателен план.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="teal">
                <h2 className="text-2xl font-bold mb-6">Методология на работа</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">1</span>
                    <div>
                      <p className="font-medium">Бизнес анализ</p>
                      <p className="text-gray-400">Разбиране на вашия бизнес, продукти/услуги и целева аудитория</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Първоначално изследване</p>
                      <p className="text-gray-400">Събиране на данни от различни SEO инструменти и Google</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Конкурентен анализ</p>
                      <p className="text-gray-400">Анализ на ключовите думи, за които се класират конкурентите ви</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Филтриране и приоритизиране</p>
                      <p className="text-gray-400">Избор на най-перспективните ключови думи за вашия бизнес</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">5</span>
                    <div>
                      <p className="font-medium">Доклад и препоръки</p>
                      <p className="text-gray-400">Представяне на резултатите с конкретни препоръки за действие</p>
                    </div>
                  </div>
                </div>
              </CyberCard>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                След проучването на ключовите думи, следва{' '}
                <Link to="/услуги/техническо-seo" className="text-cyber-blue hover:text-cyber-purple">
                  техническо SEO
                </Link>{' '}
                за оптимизация на сайта.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/услуги/техническо-seo" 
                  className="btn-primary inline-flex items-center"
                >
                  Към техническо SEO
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  to="/контакти" 
                  className="btn-outline inline-flex items-center"
                >
                  Заявете проучване
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeywordResearchPage;