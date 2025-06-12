import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Settings, AlertTriangle } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const TechnicalSEOPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Техническо SEO | Подобрете индексирането и скоростта на вашия сайт"
        description="Професионално техническо SEO за подобряване на индексирането, скоростта на зареждане, мобилната оптимизация и сигурността на сайта. Създайте стабилна техническа основа за дългосрочен SEO успех."
        keywords="техническо SEO, индексиране, скорост на сайта, SEO оптимизация, техническа поддръжка, Core Web Vitals, мобилна оптимизация, robots.txt, sitemap.xml, canonical тагове, уебсайт сигурност, SEO инфраструктура"
        canonicalUrl="https://stanchev.bg/услуги/техническо-seo"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Техническо SEO",
          "provider": {
            "@type": "Person",
            "name": "Станчев",
            "url": "https://stanchev.bg/за-мен"
          },
          "areaServed": {
            "@type": "Country",
            "name": "България"
          },
          "description": "Техническа SEO услуга, включваща анализ на индексиране, скорост на зареждане, мобилна съвместимост, структура на сайта, сигурност и конфигурация на важни файлове като robots.txt и sitemap.xml."
        }}
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="inline-block p-4 rounded-lg bg-cyber-dark mb-6">
                <Settings className="text-cyber-teal" size={48} />
              </div>
              <h1 className="text-4xl font-bold mb-6">
                <span className="neon-text">Техническо</span> SEO
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Техническото SEO е основата на успешната оптимизация. След <Link to="/услуги/ключови-думи" className="text-cyber-blue hover:text-cyber-purple">проучването на ключови думи</Link> преминаваме към поправяне на технически пречки, които възпрепятстват индексирането, скоростта или мобилната съвместимост на сайта ви. Без здрава техническа основа, всички останали SEO усилия се компрометират.
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <CyberCard glowColor="teal">
                <h2 className="text-2xl font-bold mb-6">Какво включва техническото SEO?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Оптимизация на скоростта</h3>
                      <p className="text-gray-300">
                        Подобряване на скоростта на зареждане на сайта чрез компресия на изображения, 
                        минификация на CSS/JS файлове, оптимизация на сървъра и внедряване на кеширане.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Мобилна оптимизация</h3>
                      <p className="text-gray-300">
                        Осигуряване на перфектно мобилно изживяване с responsive дизайн, 
                        оптимизирани touch елементи и бърза скорост на мобилни устройства.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Решаване на crawl проблеми</h3>
                      <p className="text-gray-300">
                        Идентифициране и отстраняване на проблеми с индексиране, 404 грешки, 
                        redirect вериги и други технически пречки пред Google bot.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">XML Sitemap и robots.txt</h3>
                      <p className="text-gray-300">
                        Създаване и оптимизация на XML sitemap файлове и правилна конфигурация 
                        на robots.txt за по-ефективно обхождане от търсачките.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">HTTPS и сигурност</h3>
                      <p className="text-gray-300">
                        Внедряване на SSL сертификат и осигуряване на сигурна HTTPS връзка, 
                        което е задължително за добро класиране в Google.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Canonical тагове</h3>
                      <p className="text-gray-300">
                        Правилно използване на canonical тагове за елиминиране на дублирано съдържание 
                        и консолидиране на SEO силата на страниците.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold mb-2">Core Web Vitals</h3>
                      <p className="text-gray-300">
                        Оптимизация на LCP, FID и CLS показателите, които са ключови за 
                        потребителското изживяване и Google класирането.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="blue">
                <h2 className="text-2xl font-bold mb-6">Ползи от техническо SEO</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-бърз и надежден уебсайт, който задържа посетителите и намалява bounce rate.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Подобрена видимост в Google благодарение на по-лесното индексиране на съдържанието.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-добро потребителско изживяване, което води до повишени конверсии.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Оптимизация за мобилни устройства, от които идва над 60% от трафика.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        По-малко технически грешки и наказания от търсачките.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                      <p className="text-gray-300">
                        Увеличени шансове за класиране по конкурентни ключови думи.
                      </p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="purple">
                <h2 className="text-2xl font-bold mb-6">Процес на техническа оптимизация</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">1</span>
                    <div>
                      <p className="font-medium">Технически одит</p>
                      <p className="text-gray-400">Задълбочен анализ на техническото състояние на сайта</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">2</span>
                    <div>
                      <p className="font-medium">Приоритизиране на проблемите</p>
                      <p className="text-gray-400">Класиране на проблемите по важност и въздействие</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">3</span>
                    <div>
                      <p className="font-medium">Внедряване на решения</p>
                      <p className="text-gray-400">Стъпка по стъпка отстраняване на техническите проблеми</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">4</span>
                    <div>
                      <p className="font-medium">Тестване и валидация</p>
                      <p className="text-gray-400">Проверка на резултатите и допълнителни корекции</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">5</span>
                    <div>
                      <p className="font-medium">Мониторинг</p>
                      <p className="text-gray-400">Постоянно наблюдение за поддържане на техническото здраве</p>
                    </div>
                  </div>
                </div>
              </CyberCard>

              <CyberCard glowColor="pink">
                <div className="flex items-start">
                  <AlertTriangle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Важни съображения</h3>
                    <p className="text-gray-300 mb-4">
                      Техническото SEO изисква внимателен подход, тъй като неправилните промени могат да навредят на сайта. 
                      Всички промени се правят с backup и тестване.
                    </p>
                    <p className="text-gray-300">
                      Резултатите от техническата оптимизация обикновено се виждат в рамките на 2-8 седмици, 
                      в зависимост от размера на сайта и сложността на проблемите.
                    </p>
                  </div>
                </div>
              </CyberCard>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8">
                След техническата оптимизация, преминаваме към{' '}
                <Link to="/услуги/оптимизация-на-съдържание" className="text-cyber-blue hover:text-cyber-purple">
                  оптимизация на съдържанието
                </Link>{' '}
                на вашия сайт.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/услуги/оптимизация-на-съдържание" 
                  className="btn-primary inline-flex items-center"
                >
                  Към оптимизация на съдържание
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  to="/контакти" 
                  className="btn-outline inline-flex items-center"
                >
                  Заявете техническо SEO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalSEOPage;