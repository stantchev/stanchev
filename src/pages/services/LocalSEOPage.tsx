import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Star } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const LocalSEOPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Локално SEO | Подобрете видимостта си в местното търсене"
        description="Локално SEO за български бизнеси – оптимизация на Google профил, локални ключови думи и линкове. Подобрете видимостта си в Google Maps и резултатите при търсения близо до мен"
        keywords="локално SEO, Google My Business, локално търсене, Google Maps SEO, оптимизация за местен бизнес, локални ключови думи, Google профил, SEO за магазини, България, бизнес в София, търсене близо до мен, SEO за ресторанти"
        canonicalUrl="https://stanchev.bg/услуги/локално-seo"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Локално SEO",
          "provider": {
            "@type": "Person",
            "name": "Станчев",
            "url": "https://stanchev.bg/за-мен"
          },
          "areaServed": {
            "@type": "Country",
            "name": "България"
          },
          "description": "SEO услуга за локално позициониране на бизнес в Google. Включва оптимизация на Google Business профил, локални търсения, ключови думи по населено място и повишаване на авторитета в местните резултати."
        }}
      />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-block p-4 rounded-lg bg-cyber-dark mb-6">
                <MapPin className="text-cyber-purple" size={48} />
              </div>
              <h1 className="text-4xl font-bold mb-6">
                <span className="neon-text">Локално</span> SEO
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Ако предлагате услуги или продукти на местно ниво, <Link to="/услуги/оптимизация-на-съдържание" className="text-cyber-blue hover:text-cyber-purple">оптимизираното съдържание</Link> не е достатъчно – нуждаете се и от ефективно <strong>локално SEO</strong>. Това ви помага да се показвате на водещи позиции в търсения като „най-добрият фризьор в София" или „ресторант до мен". Тук става дума за оптимизация на вашето присъствие в Google My Business, локални каталози, отзиви и още.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <CyberCard glowColor="purple">
                <h2 className="text-2xl font-bold mb-6">Какво включва локалното SEO?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Google My Business оптимизация</h3>
                      <p className="text-gray-300">
                        Пълна настройка и оптимизация на вашия Google Business профил с правилни категории, 
                        описания, снимки и редовни публикации за максимална видимост в Google Maps.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Локални бизнес директории</h3>
                      <p className="text-gray-300">
                        Регистрация и актуализация в основните български бизнес директории и 
                        специализирани платформи за вашата индустрия.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Локализирано съдържание</h3>
                      <p className="text-gray-300">
                        Създаване на страници и съдържание, оптимизирано за локални търсения 
                        с географски ключови думи и местни референции.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">„Близо до мен" оптимизация</h3>
                      <p className="text-gray-300">
                        Специална оптимизация за търсения от типа „близо до мен" и 
                        мобилни устройства, които са критични за локалния бизнес.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Управление на отзиви</h3>
                      <p className="text-gray-300">
                        Стратегия за събиране на положителни отзиви, отговаряне на обратна връзка 
                        и изграждане на добра онлайн репутация.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Локални линкове и партньорства</h3>
                      <p className="text-gray-300">
                        Изграждане на връзки с местни организации, медии и бизнеси 
                        за повишаване на локалния авторитет.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="blue">
                <h2 className="text-2xl font-bold mb-6">Ползи от локалното SEO</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Повече посещения от реални клиенти във вашия регион и околност.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-висока видимост при търсения в Google Maps и локални резултати.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Увеличено доверие чрез положителни отзиви и професионален профил.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-добра репутация в онлайн пространството и социалните мрежи.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Лесно откриване от хора, които търсят точно сега и са готови да купят.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-ефективно използване на маркетинг бюджет с фокус върху местната аудитория.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="teal">
                <h2 className="text-2xl font-bold mb-6">Процес на локална оптимизация</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">1</span>
                    <div>
                      <p className="font-medium">Локален одит</p>
                      <p className="text-gray-400">Анализ на текущото локално присъствие и конкуренцията</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Google My Business настройка</p>
                      <p className="text-gray-400">Оптимизация на профила с пълна информация и снимки</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Локални директории</p>
                      <p className="text-gray-400">Регистрация в релевантни бизнес директории и платформи</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Съдържание и отзиви</p>
                      <p className="text-gray-400">Създаване на локално съдържание и стратегия за отзиви</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-teal flex items-center justify-center mr-4">5</span>
                    <div>
                      <p className="font-medium">Мониторинг и поддръжка</p>
                      <p className="text-gray-400">Редовно актуализиране и проследяване на резултатите</p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="pink">
                <div className="flex items-start">
                  <Star className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Важност на отзивите</h3>
                    <p className="text-gray-300 mb-4">
                      Отзивите са критично важни за локалното SEO. Над 85% от потребителите четат отзиви преди да посетят бизнес. 
                      Положителните отзиви подобряват класирането и увеличават доверието.
                    </p>
                    <p className="text-gray-300">
                      Редовното отговаряне на отзиви показва на Google и потребителите, че сте активен и грижлив бизнес.
                    </p>
                  </div>
                </div>
              </CyberCard>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                След локалното SEO, преминаваме към{' '}
                <Link to="/услуги/структурирани-данни" className="text-cyber-blue hover:text-cyber-purple">
                  структурирани данни
                </Link>{' '}
                за по-богато представяне в търсачките.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/услуги/структурирани-данни" 
                  className="btn-primary inline-flex items-center"
                >
                  Към структурирани данни
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  to="/контакти" 
                  className="btn-outline inline-flex items-center"
                >
                  Заявете локално SEO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalSEOPage;