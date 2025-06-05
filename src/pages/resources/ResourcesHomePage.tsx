import React from 'react';
import { Link } from 'react-router-dom';
import { Tags, Code2, Settings2 } from 'lucide-react';
import CyberCard from '../../components/UI/CyberCard';
import SEOHead from '../../components/Layout/SEOHead';

const resources = [
  {
    title: 'Генератор на Мета Тагове',
    description: 'Създавайте SEO-оптимизирани мета тагове с преглед и опции за копиране.',
    icon: <Tags className="text-cyber-blue" size={32} />,
    link: '/tools/meta-tag-generator',
  },
  {
    title: 'Генератор на JSON-LD Schema',
    description: 'Лесно създаване на структурирани данни за вашия сайт с поддръжка на Schema.org.',
    icon: <Code2 className="text-cyber-purple" size={32} />,
    link: '/tools/schema-generator',
  },
  {
    title: 'OpenGraph Debugger',
    description: 'Бърза проверка и тест на OG тагове за социални мрежи.',
    icon: <Settings2 className="text-cyber-teal" size={32} />,
    link: 'https://developers.facebook.com/tools/debug/',
    external: true,
  }
];

const ResourcesHomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Полезни SEO Ресурси | Инструменти за Оптимизация"
        description="Открийте безплатни онлайн инструменти за SEO – генератори на мета тагове, JSON-LD, и много други ресурси."
        keywords="SEO инструменти, мета таг генератор, JSON-LD, SEO ресурси"
        canonicalUrl="https://stanchev.bg/resources"
      />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text">Полезни</span> SEO Ресурси
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Колекция от безплатни SEO инструменти и генератори, които улесняват оптимизацията на вашия уебсайт.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {resources.map((tool, index) => (
              <CyberCard key={index} glowColor="blue" className="p-6">
                <div className="mb-4">{tool.icon}</div>
                <h2 className="text-2xl font-semibold mb-2">{tool.title}</h2>
                <p className="text-gray-400 mb-4">{tool.description}</p>
                {tool.external ? (
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Отвори в нов прозорец
                  </a>
                ) : (
                  <Link to={tool.link} className="btn-primary">
                    Виж инструмента
                  </Link>
                )}
              </CyberCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesHomePage;