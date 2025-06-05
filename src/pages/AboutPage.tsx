import React from 'react';
import { Link } from 'react-router-dom';
import { Download, CheckCircle, Award, BookOpen, Briefcase, Lightbulb } from 'lucide-react';
import SEOHead from '../components/Layout/SEOHead';
import Button from '../components/UI/Button';
import CyberCard from '../components/UI/CyberCard';
import { useCV } from '../hooks/useCV';

const skills = [
  'Технически SEO одит',
  'Проучване на ключови думи',
  'Оптимизация на съдържание',
  'Локално SEO',
  'Изграждане на обратни връзки',
  'Структурирани данни',
  'SEO анализ и стратегия',
  'Google Analytics',
  'Google Search Console',
  'WordPress SEO',
  'E-commerce SEO',
  'Технически (React, Git, TypeScript)',
];

const education = [
  {
    degree: 'Експерт по Сигурност и отбрана',
    school: 'Военна Академия "Г.С.Раковски"',
    year: '2024',
  },
];

const experience = [
  {
    position: 'Стажант',
    company: 'WebStation LTD',
    period: '2025 - до момента',
    description: 'Консултиране на над 45 бизнеса за подобряване на тяхното SEO присъствие в българския пазар. Управление на SEO стратегии за различни клиенти, фокусирани върху българския пазар.',
  },
];

const AboutPage: React.FC = () => {
  const { generateCV, isGenerating } = useCV();

  return (
    <>
      <SEOHead
        title="За мен | SEO Специалист Станчев"
        description="Запознайте се със Станчев - SEO специалист с богат опит в оптимизацията за търсачки за българския пазар. Научете повече за моите умения и опит."
        keywords="SEO специалист, SEO експерт България, Станчев, оптимизация за търсачки, SEO консултант"
        canonicalUrl="https://stanchev.bg/за-мен"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Станчев",
          "jobTitle": "SEO Специалист",
          "description": "SEO специалист с опит в оптимизацията за търсачки за българския пазар",
          "knowsAbout": ["SEO", "Дигитален маркетинг", "Анализ на данни", "Оптимизация на уебсайтове",],
          "worksFor": {
            "@type": "Organization",
            "name": "Станчев SEO"
          }
        }}
      />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Здравейте, аз съм <span className="neon-text">Станчев</span>
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  SEO специалист с 1 година опит в оптимизацията за търсачки за българския пазар.
                </p>
                <p className="text-gray-400 mb-8">
                  Помагам на бизнеси да подобрят своето онлайн присъствие, да достигнат до повече клиенти и да постигнат по-високи позиции в търсачките. Моят подход съчетава технически познания, креативност и разбиране на българския пазар.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/контакти">
                    <Button variant="primary">
                      Свържете се с мен
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    icon={<Download size={20} />}
                    onClick={generateCV}
                    isLoading={isGenerating}
                  >
                    Свали CV
                  </Button>
                </div>
              </div>
              <div>
                <CyberCard glowColor="purple" className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Award className="text-cyber-purple mr-2" size={24} />
                        Мисия
                      </h3>
                      <p className="text-gray-300">
                        Да помагам на българските бизнеси да постигнат по-голяма видимост онлайн чрез етични и ефективни SEO практики.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <Lightbulb className="text-cyber-blue mr-2" size={24} />
                        Подход
                      </h3>
                      <p className="text-gray-300">
                        Вярвам в персонализираните стратегии, базирани на данни и съобразени с особеностите на всеки бизнес и пазар.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <BookOpen className="text-cyber-teal mr-2" size={24} />
                        Философия
                      </h3>
                      <p className="text-gray-300">
                        SEO не е еднократно действие, а непрекъснат процес на оптимизация, учене и адаптиране към промените.
                      </p>
                    </div>
                  </div>
                </CyberCard>
              </div>
            </div>
          </div>

          {/* Skills */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              Моите <span className="neon-text">умения</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-cyber-purple mr-3 flex-shrink-0" size={20} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              Професионален <span className="neon-text">опит</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experience.map((exp, index) => (
                <CyberCard key={index} glowColor="blue" className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <Briefcase className="text-cyber-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <div className="text-cyber-blue mb-2">{exp.company}</div>
                      <div className="text-gray-400 mb-3">{exp.period}</div>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </CyberCard>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              <span className="neon-text">Образование</span> и сертификати
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <CyberCard key={index} glowColor="teal" className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <BookOpen className="text-cyber-teal" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <div className="text-cyber-teal mb-2">{edu.school}</div>
                      <div className="text-gray-400">{edu.year}</div>
                    </div>
                  </div>
                </CyberCard>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-20 text-center py-12 bg-gradient-to-r from-cyber-purple/20 via-cyber-dark to-cyber-blue/20 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готови ли сте да работим <span className="neon-text">заедно</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Свържете се с мен за безплатна консултация и нека обсъдим как мога да помогна на вашия бизнес да постигне по-добри резултати онлайн.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/контакти">
                <Button variant="primary" size="lg">
                  Свържете се с мен
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                icon={<Download size={20} />}
                onClick={generateCV}
                isLoading={isGenerating}
              >
                Свали CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;