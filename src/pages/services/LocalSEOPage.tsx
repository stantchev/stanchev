import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const LocalSEOPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Локално SEO | Подобрете видимостта си в местното търсене"
        description="Локално SEO за български бизнеси – подобрете присъствието си в Google Maps и резултатите при търсения „близо до мен“ с оптимизация за локално търсене."
        keywords="локално SEO, Google My Business, локално търсене, Google Maps SEO, България"
        canonicalUrl="https://stanchev.bg/услуги/локално-seo"
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="neon-text">Локално</span> SEO
            </h1>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-gray-300 mb-8">
                Ако предлагате услуги или продукти на местно ниво, <Link to="/услуги/съдържание" className="text-cyber-blue hover:text-cyber-purple">оптимизираното съдържание</Link> не е достатъчно – нуждаете се и от ефективно <strong>локално SEO</strong>. Това ви помага да се показвате на водещи позиции в търсения като „най-добрият фризьор в София“ или „ресторант до мен“. Тук става дума за оптимизация на вашето присъствие в Google My Business, локални каталози, отзиви и още.
              </p>
            </div>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Какво включва локалното SEO?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Оптимизация на Google Моят Бизнес профил</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Регистрация и актуализация в локални бизнес директории</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Създаване на локализирано съдържание за страниците</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Оптимизация за търсения „близо до мен“ и мобилни устройства</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Събиране и управление на потребителски отзиви</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Изграждане на локални линкове и партньорства</p>
                </div>
              </div>
            </CyberCard>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Ползи от локалното SEO</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Повече посещения от реални клиенти във вашия регион</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-висока видимост при търсения в Google Maps</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Увеличено доверие чрез положителни отзиви</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-добра репутация в онлайн пространството</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Лесно откриване от хора, които търсят точно сега</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-ефективно използване на маркетинг бюджет</p>
                  </div>
                </div>
              </div>
            </CyberCard>

            <div className="flex justify-between items-center">
              <Link 
                to="/услуги/съдържание"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                ← Обратно към Оптимизация на Съдържание
              </Link>
              <Link 
                to="/услуги/структурирани-данни"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                Следваща услуга: Структурирани Данни
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalSEOPage;