import React from 'react';
import { Link } from 'react-router-dom';
import { Search, BarChart3, Globe, Code, Users, Database, TrendingUp, Megaphone, ArrowRight } from 'lucide-react';
import CyberCard from '../UI/CyberCard';
import EditableContent from '../Admin/EditableContent';

const services = [
  {
    icon: <Search className="text-cyber-purple" size={36} />,
    title: 'SEO Одит',
    description: 'Задълбочен SEO анализ на уебсайта ви и конкурентите за разкриване на технически пропуски и възможности за оптимизация - води до по-добри позиции.',
    color: 'purple',
  },
  {
    icon: <BarChart3 className="text-cyber-blue\" size={36} />,
    title: 'Ключови Думи',
    description: 'Анализираме ключовите думи за вашата ниша на български език с фокус върху локалното търсене и конкурентите. Така достигате точните клиенти.',
    color: 'blue',
  },
  {
    icon: <Globe className="text-cyber-teal" size={36} />,
    title: 'Техническо SEO',
    description: 'Техническата оптимизация гарантира, че сайтът ви е лесен за обхождане от търсачки и се класира на водещи позиции. Това е основа за успех.',
    color: 'teal',
  },
  {
    icon: <Code className="text-cyber-pink\" size={36} />,
    title: 'Оптимизация на Съдържание',
    description: 'Създаване и оптимизация на качествено съдържание, което привлича посетители и подобрява класирането ви.',
    color: 'pink',
  },
  {
    icon: <Users className="text-cyber-purple" size={36} />,
    title: 'Локално SEO',
    description: 'Оптимизация за локално SEO в България с фокус върху Google Maps и локалните списъци за повишена видимост пред близки клиенти. Така ви откриват лесно. И търсенето става реален трафик.',
    color: 'purple',
  },
  {
    icon: <Database className="text-cyber-blue\" size={36} />,
    title: 'Структурирани Данни',
    description: 'Внедряване на Schema.org маркиране за подобрено визуално представяне в търсачките и по-висока видимост чрез rich snippets. Увеличава кликовете. Подчертава стойността ви още повече.',
    color: 'blue',
  },
  {
    icon: <TrendingUp className="text-cyber-teal" size={36} />,
    title: 'SEO Мониторинг',
    description: 'Постоянно следим класирането ви в търсачките и анализираме данните, за да осигурим непрекъснато SEO подобрение. Всяка стъпка е измерима. Водим се от реални резултати.',
    color: 'teal',
  },
  {
    icon: <Megaphone className="text-cyber-pink\" size={36} />,
    title: 'Линк Билдинг',
    description: 'Стратегии за изграждане на висококачествени обратни връзки от авторитетни български сайтове с фокус върху релевантност и трайност. Линковете носят доверие.',
    color: 'pink',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Моите <span className="neon-text">SEO Услуги</span>
          </h2>
          <EditableContent
            id="services-description"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <CyberCard 
              key={index} 
              glowColor={service.color as any} 
              className="h-full transition-transform duration-300 hover:translate-y-[-10px] flex flex-col"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-2 rounded-lg inline-flex bg-cyber-dark/50">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 flex-grow mb-4">{service.description}</p>
                <Link 
                  to={`/услуги/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center mt-auto"
                >
                  Научи повече
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </CyberCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/услуги">
            <button className="btn-primary">
              Виж всички услуги
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
