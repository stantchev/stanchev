import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/Layout/SEOHead';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import CyberCard from '../components/UI/CyberCard';
import { useBlogStore } from '../store/blogStore';

const HomePage: React.FC = () => {
  const { posts } = useBlogStore();
  const recentPosts = posts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title="Станчев SEO | Оптимизация за търсачки"
        description="Професионални SEO услуги за българския пазар. Станчев - Професионалист в оптимизацията за търсачки и дигиталния маркетинг."
        keywords="SEO, оптимизация за търсачки, дигитален маркетинг, България, уеб оптимизация, София"
        canonicalUrl="https://stanchev.bg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Станчев SEO",
          "description": "Професионални SEO услуги за българския пазар",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "София",
            "addressCountry": "България"
          },
          "telephone": "+359 88 888 8888",
          "email": "seo@stanchev.bg",
          "url": "https://stanchev.bg",
          "priceRange": "$$",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 42.6977,
              "longitude": 23.3219
            },
            "geoRadius": "50000"
          },
          "sameAs": [
            "https://dev.to/stanchev",
            "https://github.com/stantchev/",
            "https://www.linkedin.com/in/stanchev-seo/"
          ]
        }}
      />

      <Hero />
      
      <Services />

      {/* About Section */}
      <section className="py-20 bg-cyber-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Кой е <span className="neon-text">Станчев</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                С 1 годинa опит в SEO оптимизацията за българския пазар, помагам на бизнеси да увеличат своята онлайн видимост и да привлекат повече клиенти чрез органично търсене.
              </p>
              <p className="text-gray-400 mb-8">
                Като SEO специалист, се фокусирам върху създаването на персонализирани стратегии, които отговарят на специфичните нужди на всеки бизнес. Моят подход комбинира технически познания, анализ на данни и креативно мислене, за да постигнем максимални резултати.
              </p>
              <a href="/за-мен" className="btn-primary inline-flex items-center">
                Научи повече за мен
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <CyberCard glowColor="purple" className="p-6">
                <div className="text-3xl font-bold text-cyber-purple mb-2">100+</div>
                <div className="text-gray-300">Успешни проекта</div>
              </CyberCard>
              <CyberCard glowColor="blue" className="p-6">
                <div className="text-3xl font-bold text-cyber-blue mb-2">5+</div>
                <div className="text-gray-300">Години опит</div>
              </CyberCard>
              <CyberCard glowColor="teal" className="p-6">
                <div className="text-3xl font-bold text-cyber-teal mb-2">50+</div>
                <div className="text-gray-300">Редовни клиенти</div>
              </CyberCard>
              <CyberCard glowColor="pink" className="p-6">
                <div className="text-3xl font-bold text-cyber-pink mb-2">200%</div>
                <div className="text-gray-300">Ръст на трафика</div>
              </CyberCard>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Последни <span className="neon-text">Публикации</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Научете последните тенденции и съвети за SEO оптимизация специално за българския пазар.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <CyberCard key={post.id} glowColor="blue" className="h-full transition-transform duration-300 hover:translate-y-[-5px]">
                <article className="flex flex-col h-full">
                  <a href={`/blog/${post.slug}`} className="block mb-4">
                    <h3 className="text-xl font-bold hover:text-cyber-purple transition-colors">
                      {post.title}
                    </h3>
                  </a>
                  <p className="text-gray-400 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-cyber-blue hover:text-cyber-purple transition-colors inline-flex items-center mt-auto"
                  >
                    Прочети повече
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                </article>
              </CyberCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/blog" className="btn-outline">
              Виж всички публикации
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyber-purple/20 via-cyber-dark to-cyber-blue/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готови ли сте да подобрите вашето <span className="neon-text">SEO</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
			Свържете се с мен за <Link to="/услуги/консултация" className="text-cyber-blue hover:underline">безплатна SEO консултация</Link> и анализ на вашия уебсайт. Заедно ще създадем стратегия, която ще изведе вашия бизнес напред.
		  </p>
          <a href="/контакти" className="btn-primary text-lg px-8 py-4">
            Свържете се с мен
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
