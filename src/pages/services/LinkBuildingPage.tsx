import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const LinkBuildingPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Изграждане на Връзки | Качествени външни линкове за по-добро SEO"
        description="Повиши авторитета на сайта си чрез изграждане на стратегически външни връзки и линк билдинг кампании."
        keywords="изграждане на връзки, link building, външни линкове, обратни връзки, SEO връзки, авторитет на сайта"
        canonicalUrl="https://stanchev-seo.bg/услуги/изграждане-на-връзки"
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="neon-text">Изграждане на Връзки</span> (Link Building)
            </h1>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-gray-300 mb-8">
                Изграждането на висококачествени <strong>обратни връзки</strong> е ключов фактор за доброто класиране в търсачките. Това е един от най-силните SEO сигнали, които показват на Google, че сайтът ви е надежден и заслужава внимание.
              </p>
              <p className="text-xl text-gray-300 mb-8">
                Тази услуга допълва оптимизацията на <Link to="/услуги/структурирани-данни" className="text-cyber-blue hover:text-cyber-purple">структурираните данни</Link> и е част от завършена SEO стратегия.
              </p>
            </div>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Какво включва линк билдинг услугата?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Одит на съществуващите външни връзки</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Идентифициране на възможности за нови линкове</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Изграждане на връзки чрез гост публикации и партньорства</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Създаване на споделяемо съдържание, което привлича линкове естествено</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-pink mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Мониторинг и премахване на токсични или вредни връзки</p>
                </div>
              </div>
            </CyberCard>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Ползи от изграждането на връзки</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Повишен авторитет на домейна (Domain Authority)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-добри позиции в органичното търсене</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Привличане на качествен трафик от други авторитетни сайтове</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-лесно индексиране на нови страници от търсачките</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Повишена осведоменост за бранда</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Устойчив SEO растеж с дългосрочни резултати</p>
                  </div>
                </div>
              </div>
            </CyberCard>

            <div className="flex justify-between items-center">
              <Link 
                to="/услуги/структурирани-данни"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                ← Обратно към Структурирани Данни
              </Link>
              <Link 
                to="/контакти"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                Свържи се с мен
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkBuildingPage;