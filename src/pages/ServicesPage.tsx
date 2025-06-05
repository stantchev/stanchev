import React from 'react';
import { Link } from 'react-router-dom';
import { Search, BarChart3, Globe, Code, Users, Database, TrendingUp, Megaphone, CheckCircle } from 'lucide-react';
import SEOHead from '../components/Layout/SEOHead';
import CyberCard from '../components/UI/CyberCard';

const services = [
  {
    id: 'seo-odit',
	slug: 'seo-одит',
    icon: <Search className="text-cyber-purple" size={48} />,
    title: 'SEO Одит',
    description: 'Задълбочен анализ на вашия уебсайт и конкурентите ви за откриване на възможности за подобрение.',
    benefits: [
      'Пълен технически одит на вашия уебсайт',
      'Анализ на структурата и съдържанието',
      'Оценка на потребителското изживяване',
      'Анализ на обратни връзки',
      'Сравнителен анализ с конкуренцията',
      'Подробен доклад с препоръки'
    ],
    color: 'purple'
  },
  {
    id: 'klyuchovi-dumi',
	slug: 'ключови-думи',
    icon: <BarChart3 className="text-cyber-blue\" size={48} />,
    title: 'Проучване на Ключови Думи',
    description: 'Проучване и анализ на ключови думи за вашата индустрия на български език с фокус върху локалния пазар.',
    benefits: [
      'Откриване на рентабилни ключови думи',
      'Анализ на търсенето и конкуренцията',
      'Групиране на ключови думи по теми',
      'Идентифициране на дългоопашати ключови думи',
      'Анализ на сезонни тенденции',
      'Стратегия за внедряване на ключовите думи'
    ],
    color: 'blue'
  },
  {
    id: 'tehnichesko-seo',
	slug: 'техническо-seo',
    icon: <Globe className="text-cyber-teal" size={48} />,
    title: 'Техническо SEO',
    description: 'Оптимизация на техническите аспекти на вашия сайт за по-добро индексиране и по-високи позиции.',
    benefits: [
      'Оптимизация на скоростта на зареждане',
      'Подобряване на мобилната оптимизация',
      'Решаване на проблеми с индексирането',
      'Оптимизация на URL структурата',
      'Подобряване на вътрешните връзки',
      'Настройка на SSL и сигурност'
    ],
    color: 'teal'
  },
  {
    id: 'optimizaciya-na-sadarzhanie',
	slug: 'оптимизация-на-съдържание',
    icon: <Code className="text-cyber-pink\" size={48} />,
    title: 'Оптимизация на Съдържание',
    description: 'Създаване и оптимизация на качествено съдържание, което привлича посетители и подобрява класирането ви.',
    benefits: [
      'SEO одит на съществуващо съдържание',
      'Разработване на SEO стратегия за съдържание',
      'Създаване на оптимизирано съдържание',
      'Оптимизация на мета данни',
      'Подобряване на четимостта и потребителския опит',
      'Оптимизация на изображения и мултимедия'
    ],
    color: 'pink'
  },
  {
    id: 'lokalno-seo',
	slug: 'локално-seo',
    icon: <Users className="text-cyber-purple" size={48} />,
    title: 'Локално SEO',
    description: 'Оптимизация за локалните търсения в България, подобряване на видимостта в Google Maps и локалните списъци.',
    benefits: [
      'Оптимизация на Google Моят бизнес',
      'Локални бизнес директории',
      'Създаване на локализирано съдържание',
      'Оптимизация за търсения "близо до мен"',
      'Управление на онлайн отзиви и репутация',
      'Стратегия за локални обратни връзки'
    ],
    color: 'purple'
  },
  {
    id: 'strukturirani-danni',
	slug: 'структурирани-данни',
    icon: <Database className="text-cyber-blue\" size={48} />,
    title: 'Структурирани Данни',
    description: 'Внедряване на Schema.org маркиране за по-добро представяне в резултатите от търсенето и rich snippets.',
    benefits: [
      'Внедряване на Schema.org маркиране',
      'Оптимизация за богати резултати (Rich Snippets)',
      'Маркиране на събития, продукти и услуги',
      'Настройка на Knowledge Graph данни',
      'Тестване и мониторинг на структурираните данни',
      'Оптимизация за гласово търсене'
    ],
    color: 'blue'
  },
  {
    id: 'seo-monitoring',
	slug: 'seo-мониторинг',
    icon: <TrendingUp className="text-cyber-teal" size={48} />,
    title: 'SEO Мониторинг',
    description: 'Постоянно проследяване на вашите позиции и анализ на данните за непрекъснато подобрение.',
    benefits: [
      'Ежемесечни SEO доклади',
      'Проследяване на ключови показатели',
      'Анализ на промените в алгоритъма',
      'Мониторинг на конкуренцията',
      'Идентифициране на нови възможности',
      'Коригиране на стратегията въз основа на данни'
    ],
    color: 'teal'
  },
  {
    id: 'izgrazhdane-na-vrazki',
	slug: 'линк-билдинг',
    icon: <Megaphone className="text-cyber-pink\" size={48} />,
    title: 'Линк Билдинг',
    description: 'Стратегии за изграждане на качествени обратни връзки от авторитетни български сайтове.',
    benefits: [
      'Одит на съществуващите обратни връзки',
      'Изследване на възможности за нови връзки',
      'Стратегия за гостуващи публикации',
      'Изграждане на връзки от бизнес директории',
      'Създаване на ценно, споделяемо съдържание',
      'Мониторинг и отстраняване на токсични връзки'
    ],
    color: 'pink'
  }
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="SEO Услуги | Професионална оптимизация за търсачки в България"
        description="Пълен набор от SEO услуги, персонализирани за българския пазар. От технически SEO одит до изграждане на обратни връзки и оптимизация на съдържание."
        keywords="SEO услуги, оптимизация за търсачки, SEO одит, ключови думи, техническо SEO, локално SEO, България"
        canonicalUrl="https://stanchev.bg/услуги"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SEO Услуги за българския пазар",
          "description": "Професионални SEO услуги за повишаване на видимостта в търсачките",
          "provider": {
            "@type": "Person",
            "name": "Станчев"
          },
          "serviceType": "Оптимизация за търсачки",
          "areaServed": {
            "@type": "Country",
            "name": "България"
          }
        }}
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text">SEO</span> Услуги
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Предлагам пълен набор от SEO услуги, специално адаптирани за българския пазар, които ще издигнат вашия бизнес на ново ниво.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} id={service.id} className="scroll-mt-32">
                <div className="flex justify-center">
					<div className="max-w-3xl w-full text-center">
                  <div>
                    <div className={`inline-block p-4 rounded-lg mb-6 bg-cyber-dark`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 text-left">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className={`text-cyber-${service.color} mt-1 mr-3 flex-shrink-0`} size={20} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link to={`/услуги/${service.slug}`} className="btn-primary">
                        Виж още
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
			 </div>
            ))}
          </div>
		  {/* How It Works - Only on Mobile */}
<div className="block lg:hidden mt-24">
  <CyberCard glowColor="purple" className="p-8">
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Как работи процесът?</h3>
      <ol className="space-y-4">
        <li className="flex">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">1</span>
          <div>
            <p className="font-medium">Първоначална консултация</p>
            <p className="text-gray-400">Обсъждаме вашите цели и нужди</p>
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">2</span>
          <div>
            <p className="font-medium">Анализ и планиране</p>
            <p className="text-gray-400">Разработвам персонализирана стратегия</p>
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">3</span>
          <div>
            <p className="font-medium">Изпълнение</p>
            <p className="text-gray-400">Внедряване на оптимизациите</p>
          </div>
        </li>
        <li className="flex">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center mr-4">4</span>
          <div>
            <p className="font-medium">Мониторинг и отчитане</p>
            <p className="text-gray-400">Проследяване на резултатите и корекции</p>
          </div>
        </li>
      </ol>
    </div>
  </CyberCard>
</div>
          {/* CTA */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готови ли сте да подобрите вашите <span className="neon-text">SEO резултати</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Свържете се с мен за безплатна консултация и анализ на вашия уебсайт. Заедно ще създадем стратегия, която ще изведе вашия бизнес напред.
            </p>
            <Link to="/контакти" className="btn-primary text-lg px-8 py-4">
              Свържете се с мен
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
