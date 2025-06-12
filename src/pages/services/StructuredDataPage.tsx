import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Zap } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const StructuredDataPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Структурирани Данни | Внедряване на Schema.org за SEO"
        description="Внедряване на структурирани данни (Schema.org) за подобряване на видимостта в Google и поява в rich snippets. Подобрете CTR и SEO представянето с технически подход."
        keywords="структурирани данни, schema.org, rich snippets, структуриране на информация, SEO подобрение, техническо SEO, богати резултати, JSON-LD, SEO тагове, microdata, SEO България"
        canonicalUrl="https://stanchev.bg/услуги/структурирани-данни"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Внедряване на структурирани данни (Schema.org)",
          "provider": {
            "@type": "Person",
            "name": "Станчев",
            "url": "https://stanchev.bg/за-мен"
          },
          "areaServed": {
            "@type": "Country",
            "name": "България"
          },
          "description": "Услуга за техническа SEO оптимизация чрез структурирани данни. Включва анализ, подбор и внедряване на schema.org формати като JSON-LD за подобряване на класиране и визуално присъствие в търсачките."
        }}
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-block p-4 rounded-lg bg-cyber-dark mb-6">
                <Code className="text-cyber-blue" size={48} />
              </div>
              <h1 className="text-4xl font-bold mb-6">
                <span className="neon-text">Структурирани Данни</span> и SEO
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Внедряването на <strong>структурирани данни</strong> чрез <code>Schema.org</code> е ключово за по-ефективното представяне на съдържанието ви в Google и други търсачки. След <Link to="/услуги/локално-seo" className="text-cyber-blue hover:text-cyber-purple">локалното SEO</Link>, структурираните данни позволяват на търсачките да разберат по-добре структурата на вашия сайт и съдържанието му, като по този начин се увеличава вероятността за показване на rich snippets.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <CyberCard glowColor="blue">
                <h2 className="text-2xl font-bold mb-6">Какво включва внедряването?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Анализ и планиране</h3>
                      <p className="text-gray-300">
                        Идентифициране на подходящи типове Schema.org за вашето съдържание - услуги, продукти, 
                        статии, събития, организации, местни бизнеси и други релевантни схеми.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">JSON-LD внедряване</h3>
                      <p className="text-gray-300">
                        Професионално внедряване на JSON-LD маркиране директно в кода на сайта, 
                        което е препоръчваният от Google формат за структурирани данни.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Валидация и тестване</h3>
                      <p className="text-gray-300">
                        Задълбочено тестване с официалните инструменти на Google за валидиране на структурирани данни 
                        и Rich Results Test за проверка на съвместимостта.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Rich Snippets оптимизация</h3>
                      <p className="text-gray-300">
                        Специална оптимизация за показване на богати резултати като звезди за рейтинг, 
                        цени, наличност, FAQ секции и други визуални подобрения.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Мониторинг и поддръжка</h3>
                      <p className="text-gray-300">
                        Постоянно наблюдение на статуса на структурираните данни в Google Search Console 
                        и актуализация при нужда от промени в съдържанието.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Локални бизнес схеми</h3>
                      <p className="text-gray-300">
                        Специализирано внедряване на LocalBusiness схеми за по-добро представяне 
                        в локалните търсения и Google Maps резултати.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="purple">
                <h2 className="text-2xl font-bold mb-6">Ползи от структурирани данни</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-добра разбираемост на съдържанието от търсачките и AI алгоритми.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Възможност за богати резултати със звезди, снимки, цени и други визуални елементи.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Значително по-висока честота на кликване (CTR) от резултатите в търсачките.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-голямо доверие у потребителите чрез професионално представяне.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-голям шанс за представяне в Google Knowledge Panel и featured snippets.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Подготовка за гласово търсене и бъдещи AI асистенти като ChatGPT.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="teal">
                <h2 className="text-2xl font-bold mb-6">Процес на внедряване</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">1</span>
                    <div>
                      <p className="font-medium">Анализ на съдържанието</p>
                      <p className="text-gray-400">Идентифициране на типовете съдържание и подходящи схеми</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Създаване на схемите</p>
                      <p className="text-gray-400">Разработване на JSON-LD код за всеки тип съдържание</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Внедряване в сайта</p>
                      <p className="text-gray-400">Добавяне на структурираните данни в HTML кода</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Тестване и валидация</p>
                      <p className="text-gray-400">Проверка с Google инструменти за грешки и съвместимост</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">5</span>
                    <div>
                      <p className="font-medium">Мониторинг на резултатите</p>
                      <p className="text-gray-400">Проследяване на появата на rich snippets в търсачките</p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="pink">
                <div className="flex items-start">
                  <Zap className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Бъдещето на търсенето</h3>
                    <p className="text-gray-300 mb-4">
                      Структурираните данни стават все по-важни с развитието на AI и гласовото търсене. 
                      Сайтовете с правилно внедрени схеми имат предимство при отговарянето на сложни заявки.
                    </p>
                    <p className="text-gray-300">
                      Google използва структурираните данни за подхранване на своите AI модели и 
                      за по-точно разбиране на контекста на съдържанието.
                    </p>
                  </div>
                </div>
              </CyberCard>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                След внедряването на структурирани данни, преминаваме към{' '}
                <Link to="/услуги/линк-билдинг" className="text-cyber-blue hover:text-cyber-purple">
                  изграждане на връзки
                </Link>{' '}
                за повишаване на авторитета на сайта.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/услуги/линк-билдинг" 
                  className="btn-primary inline-flex items-center"
                >
                  Към линк билдинг
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  to="/контакти" 
                  className="btn-outline inline-flex items-center"
                >
                  Заявете внедряване
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StructuredDataPage;