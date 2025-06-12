import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="SEO Консултация | Професионална SEO консултация за български бизнеси"
        description="Персонализирана SEO консултация с дълбок анализ на уебсайта, разработване на цялостна стратегия и съвети за класиране в Google. Подходящо за онлайн магазини, корпоративни сайтове и местни бизнеси в България."
        keywords="SEO консултация, SEO анализ, SEO стратегия, SEO съвети, дигитална стратегия, онлайн бизнес България, SEO за фирми, SEO консултант, класиране в Google, оптимизация на сайт"
        canonicalUrl="https://stanchev.bg/услуги/консултация"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "SEO Консултация",
          "provider": {
            "@type": "Person",
            "name": "Станчев",
            "url": "https://stanchev.bg/за-мен"
          },
          "areaServed": {
            "@type": "Country",
            "name": "България"
          },
          "description": "Индивидуална SEO консултация с практическа насоченост – анализ на техническо състояние, съдържание, ключови думи и линк профил на уебсайта. Подходящо за фирми и онлайн магазини в България."
        }}
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-block p-4 rounded-lg bg-cyber-dark mb-6">
                <MessageCircle className="text-cyber-purple" size={48} />
              </div>
              <h1 className="text-4xl font-bold mb-6">
                SEO <span className="neon-text">Консултация</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Първата стъпка в процеса е провеждането на консултация с клиента. Тук се обсъждат целите, нуждите и очакванията, както и се предоставя обща представа за това как SEO може да помогне на вашия бизнес. След консултацията следва <Link to="/услуги/seo-одит" className="text-cyber-blue hover:text-cyber-purple">SEO одит на сайта</Link>, който разкрива конкретните възможности за подобрение.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <CyberCard glowColor="purple">
                <h2 className="text-2xl font-bold mb-6">Какво включва SEO консултацията?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Анализ на текущото състояние</h3>
                      <p className="text-gray-300">
                        Преглед на вашия уебсайт, онлайн присъствие и текущи SEO усилия. Оценка на силните и слабите страни на сайта ви в контекста на българския пазар.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Идентифициране на бизнес цели</h3>
                      <p className="text-gray-300">
                        Разбиране на специфичните нужди на вашия бизнес, целевата аудитория и желаните резултати от SEO оптимизацията.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Конкурентен анализ</h3>
                      <p className="text-gray-300">
                        Преглед на конкурентната среда в българското интернет пространство и идентифициране на възможности за изпреварване.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Предварителна оценка на потенциала</h3>
                      <p className="text-gray-300">
                        Реалистична оценка на възможностите за растеж и очакваните резултати от SEO инвестицията.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Първоначален план за действие</h3>
                      <p className="text-gray-300">
                        Разработване на стратегически план с приоритизирани стъпки за постигане на поставените цели.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="blue">
                <h2 className="text-2xl font-bold mb-6">Ползи от SEO консултацията</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Ясна представа за текущото състояние на вашето онлайн присъствие и позиции в търсачките.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Разбиране на конкретните възможности за подобрение и растеж в органичните резултати.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Идентифициране на най-подходящите SEO стратегии за вашия тип бизнес и индустрия.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Реалистична оценка на необходимите ресурси, времеви рамки и очаквани резултати.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Професионална насока за развитие на онлайн присъствието и дигиталната стратегия.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Конкретни препоръки, съобразени с особеностите на българския пазар и потребителско поведение.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="teal">
                <h2 className="text-2xl font-bold mb-6">Процес на консултацията</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">1</span>
                    <div>
                      <p className="font-medium">Първоначален разговор</p>
                      <p className="text-gray-400">Обсъждане на вашите цели, нужди и очаквания от SEO</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Бърз анализ на сайта</p>
                      <p className="text-gray-400">Преглед на основните SEO показатели и техническо състояние</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Конкурентен преглед</p>
                      <p className="text-gray-400">Анализ на конкуренцията и пазарните възможности</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Препоръки и следващи стъпки</p>
                      <p className="text-gray-400">Представяне на находките и план за действие</p>
                    </div>
                  </div>
                </div>
              </CyberCard>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                След консултацията, следващата стъпка е провеждането на{' '}
                <Link to="/услуги/seo-одит" className="text-cyber-blue hover:text-cyber-purple">
                  задълбочен SEO одит
                </Link>{' '}
                на вашия уебсайт.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/услуги/seo-одит" 
                  className="btn-primary inline-flex items-center"
                >
                  Към SEO одит
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  to="/контакти" 
                  className="btn-outline inline-flex items-center"
                >
                  Заявете консултация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;