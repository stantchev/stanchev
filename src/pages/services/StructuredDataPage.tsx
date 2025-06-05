import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/Layout/SEOHead';
import CyberCard from '../../components/UI/CyberCard';

const StructuredDataPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Структурирани Данни | Внедряване на Schema.org за SEO"
        description="Оптимизирай видимостта си с внедряване на структурирани данни и rich snippets чрез Schema.org."
        keywords="структурирани данни, schema.org, rich snippets, SEO подобрение, богати резултати"
        canonicalUrl="https://stanchev.bg/услуги/структурирани-данни"
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="neon-text">Структурирани Данни</span> и SEO
            </h1>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-gray-300 mb-8">
                Внедряването на <strong>структурирани данни</strong> чрез <code>Schema.org</code> е ключово за по-ефективното представяне на съдържанието ви в Google и други търсачки. Те позволяват на търсачките да разберат по-добре структурата на вашия сайт и съдържанието му, като по този начин се увеличава вероятността за показване на rich snippets.
              </p>
              <p className="text-xl text-gray-300 mb-8">
                Структурираните данни са естествено продължение на <Link to="/услуги/локално-seo" className="text-cyber-blue hover:text-cyber-purple">Локалното SEO</Link> и играят важна роля в цялостната ви SEO стратегия.
              </p>
            </div>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Какво включва внедряването?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Идентифициране на подходящи типове Schema.org за вашето съдържание (услуги, продукти, статии, събития и др.)</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Внедряване на JSON-LD маркиране директно в кода на сайта</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Тестване с инструменти на Google за валидиране на структурирани данни</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Оптимизация за показване на Rich Snippets</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-cyber-purple mt-1 mr-3 flex-shrink-0" size={20} />
                  <p>Поддръжка и актуализация при нужда от промени</p>
                </div>
              </div>
            </CyberCard>

            <CyberCard className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Ползи от структурирани данни</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-добра разбираемост на съдържанието от търсачките</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Възможност за богати резултати (звезди, снимки, цени и др.)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-висока честота на кликване (CTR)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-голямо доверие у потребителите</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>По-голям шанс за представяне в Google Knowledge Panel</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-cyber-blue mt-1 mr-3 flex-shrink-0" size={20} />
                    <p>Подготовка за гласово търсене и AI асистенти</p>
                  </div>
                </div>
              </div>
            </CyberCard>

            <div className="flex justify-between items-center">
              <Link 
                to="/услуги/локално-seo"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                ← Обратно към Локално SEO
              </Link>
              <Link 
                to="/услуги/съдържание"
                className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center"
              >
                Следваща услуга: Оптимизация на Съдържание
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StructuredDataPage;