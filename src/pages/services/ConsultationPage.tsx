import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="SEO Консултация | Професионална SEO консултация за български бизнеси"
        description="Професионална SEO консултация за анализ на вашия уебсайт и разработване на стратегия за успех в българското интернет пространство."
        keywords="SEO консултация, SEO анализ, SEO стратегия, България, онлайн бизнес"
        canonicalUrl="https://stanchev.bg/услуги/консултация"
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SEO <span className="neon-text">Консултация</span>
            </h1>
            
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-gray-300 mb-8">
                Първата стъпка в процеса е провеждането на консултация с клиента. Тук се обсъждат целите, нуждите и очакванията, както и се предоставя обща представа за това как SEO може да помогне на вашия бизнес. След консултацията следва <Link to="/услуги/seo-одит" className="text-cyber-blue hover:text-cyber-purple">SEO одит на сайта</Link>, който разкрива конкретните възможности за подобрение.
              </p>
            </div>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Какво включва SEO консултацията?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Анализ на текущото състояние на вашия уебсайт и онлайн присъствие</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Идентифициране на специфичните нужди и цели на вашия бизнес</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Преглед на конкурентната среда в българското интернет пространство</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Предварителна оценка на потенциала за растеж</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Разработване на първоначален план за действие</p>
                </div>
              </div>
            </CyberCard>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Ползи от SEO консултацията</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Ясна представа за текущото състояние на вашето онлайн присъствие</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Разбиране на конкретните възможности за подобрение</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Идентифициране на най-подходящите SEO стратегии за вашия бизнес</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Реалистична оценка на необходимите ресурси и времеви рамки</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Професионална насока за развитие на онлайн присъствието</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Конкретни препоръки, съобразени с българския пазар</p>
                  </div>
                </div>
              </div>
            </CyberCard>

            <div className="flex justify-between items-center">
              <Link 
                to="/услуги"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                ← Обратно към услугите
              </Link>
              <Link 
                to="/услуги/seo-одит"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                Следваща услуга: SEO Одит
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationPage;