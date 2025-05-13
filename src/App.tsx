import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import HTMLSitemap from './pages/HTMLSitemap';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country_code === 'BG') {
          i18n.changeLanguage('bg');
        } else {
          i18n.changeLanguage('bg');
        }
      })
      .catch(() => {
        i18n.changeLanguage('bg');
      });

    document.body.classList.add('bg-[#050816]', 'text-white');
    return () => {
      document.body.classList.remove('bg-[#050816]', 'text-white');
    };
  }, [i18n]);

  return (
    <Router>
      <div className="relative z-0">
        <Helmet>
          <html lang={i18n.language} />
          <title>Станчев | SEO Услуги</title>
          <meta name="description" content="Експертни уеб разработки и SEO решения за вашия дигитален успех" />
          <meta name="keywords" content="изработка на сайт, seo оптимизация, изработка на уебсайт, линк билдинг, seo оптимизация цена, seo оптимизация цени, станчев сео, станчев seo, направа на сайт, станчев сео, станчев seo, seo експерт софия, seo freelancer българия, seo услуги българия, оптимизация на онлайн магазин, seo оптимизация wordpress, цена за изработка на сайт, поддръжка на сайт и seo, seo анализ на сайт, seo стратегия за уебсайт, одит на уебсайт, техническо seo, локално seo за бизнес, оптимизация за мобилни устройства, линк билдинг българия" />
          <link rel="alternate" hreflang="en" href="https://stanchev.bg" />
          <link rel="alternate" hreflang="bg" href="https://stanchev.bg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
              </>
            }
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/sitemap" element={<HTMLSitemap />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
