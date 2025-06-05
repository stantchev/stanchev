import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const MonitoringPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="SEO Мониторинг | Проследяване и анализ на SEO резултатите"
        description="Професионален SEO мониторинг с месечни доклади, анализ на позициите и ключови метрики за устойчив растеж."
        keywords="SEO мониторинг, проследяване на резултати, SEO анализ, позициониране, SEO отчет, Google Search Console"
        canonicalUrl="https://stanchev.bg/услуги/seo-мониторинг"
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SEO <span className="neon-text">Мониторинг</span>
            </h1>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-gray-300 mb-8">
                SEO мониторингът е последната, но изключително важна стъпка от SEO процеса. Той гарантира, че приложените стратегии се проследяват, анализират и усъвършенстват постоянно. Така се осигурява дългосрочен успех и стабилен растеж на органичния трафик.
              </p>
              <p className="text-xl text-gray-300 mb-8">
                Услугата се комбинира идеално с <Link to="/услуги/изграждане-на-връзки" className="text-cyber-blue hover:text-cyber-purple">линк билдинг</Link> и <Link to="/услуги/оптимизация-на-съдържание" className="text-cyber-blue hover:text-cyber-purple">оптимизация на съдържание</Link>, за да се извлече максимален ефект от всяка предприета стъпка.
              </p>
            </div>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Какво включва SEO мониторингът?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Месечни SEO доклади с ясно представени резултати</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Проследяване на класирането по избрани ключови думи</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Анализ на органичния трафик и CTR от Google Search Console</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Наблюдение на поведението на потребителите чрез Google Analytics</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-teal mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Откриване на спадове в позиционирането или технически проблеми</p>
                </div>
              </div>
            </CyberCard>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Ползи от SEO мониторинг</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Пълна прозрачност относно резултатите от оптимизацията</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-бърза реакция при спадащи позиции</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Идентифициране на нови възможности за съдържание и линкове</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Подобрено планиране на бъдещи SEO активности</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Доказателства за ROI от SEO усилията</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-добра комуникация и отчетност с клиента/екипа</p>
                  </div>
                </div>
              </div>
            </CyberCard>

            <div className="flex justify-between items-center">
              <Link 
                to="/услуги/изграждане-на-връзки"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                ← Назад към Изграждане на Връзки
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

export default MonitoringPage;