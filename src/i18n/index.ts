import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav.home": "Home | SEO Services",
      "nav.about": "About Stanchev SEO",
      "nav.projects": "SEO Projects & Case Studies",
      "nav.skills": "SEO Skills & Expertise",
      "nav.contact": "Contact SEO Expert",
      "nav.services": "SEO Services",
      
      "hero.title": "Professional SEO Services & Web Development Solutions",
      "hero.subtitle": "Transform your online presence with data-driven SEO strategies, technical optimization, and proven results",
      "button.explore": "View SEO Projects",
      "button.contact": "Get SEO Consultation",
      
      "about.title": "About",
      "about.me": "Stanchev SEO",
      "about.description1": "Expert SEO consultant with proven track record in improving search rankings and driving organic traffic growth.",
      "about.description2": "Specializing in technical SEO, content strategy, and data-driven optimization for businesses across industries.",
      "about.description3": "Committed to delivering measurable results through comprehensive SEO solutions and strategic digital marketing.",

      "experience.title": "SEO",
      "experience.subtitle": "Experience",
      
      "projects.title": "SEO",
      "projects.subtitle": "Portfolio",
      "projects.description": "Explore our successful SEO projects and case studies showcasing significant improvements in search visibility and organic traffic.",
      "projects.viewAll": "View All SEO Services",
      "projects.viewProject": "View Case Study",
      "projects.smartbg_description": "Implemented comprehensive SEO strategy for Smart Bulgaria's e-commerce platform, resulting in 150% increase in organic traffic.",
      "projects.keylock_description": "Optimized local SEO presence for Keylock.bg, achieving top rankings for competitive locksmith keywords in Sofia.",
      "projects.insurance_bg_description": "Developed technical SEO framework for Insurance.bg, improving site structure and achieving 200% growth in organic leads.",
      "projects.oil_standart_description": "Enhanced e-commerce SEO for Oil Standart, resulting in improved product visibility and increased online sales.",
      
      "skills.title": "SEO",
      "skills.subtitle": "Expertise",
      "skills.description": "Comprehensive SEO skills covering technical optimization, content strategy, and search engine algorithms.",
      "skills.additional": "Advanced",
      "skills.technologies": "SEO Tools",
      
      "contact.title": "SEO",
      "contact.subtitle": "Consultation",
      "contact.description": "Get expert SEO advice and discover how we can improve your website's search engine performance.",
      "contact.form.name": "Your Name",
      "contact.form.email": "Your Email",
      "contact.form.message": "Project Details",
      "contact.form.placeholder.message": "Tell us about your SEO goals...",
      "contact.form.sending": "Sending...",
      "contact.form.send": "Get SEO Analysis",
      "contact.form.success.title": "Thank You!",
      "contact.form.success.message": "We'll analyze your website and respond with SEO recommendations soon.",
      
      "contact.info.title": "SEO Consultation",
      "contact.info.description": "Ready to improve your search rankings? Contact us through any channel below.",
      "contact.info.email": "Email",
      "contact.info.location": "Location",
      "contact.social.title": "Connect With Us",

      "meta": {
        "services": {
          "title": "Professional SEO Services | Technical & Content Optimization",
          "description": "Expert SEO services including technical optimization, content strategy, and link building. Improve rankings and drive organic traffic with proven strategies."
        },
        "technical-seo": {
          "title": "Technical SEO Services | Website Performance Optimization",
          "description": "Expert technical SEO services to improve website structure, speed, and crawlability. Get better search visibility with solid technical optimization."
        },
        "link-building": {
          "title": "Link Building Services | Authority Building & Outreach",
          "description": "Strategic link building services to boost domain authority and rankings through high-quality backlinks and expert outreach campaigns."
        },
        "on-page-seo": {
          "title": "On-Page SEO Services | Content & Structure Optimization",
          "description": "Professional on-page SEO services to optimize content, meta tags, and internal linking for better search engine rankings."
        },
        "content-strategy": {
          "title": "SEO Content Strategy | Content Planning & Optimization",
          "description": "Data-driven content strategy services to create SEO-optimized content that drives traffic and engages your target audience."
        },
        "local-seo": {
          "title": "Local SEO Services | Google Maps & Local Rankings",
          "description": "Local SEO expertise to improve your business visibility in local search results and Google Maps rankings."
        },
        "ecommerce-seo": {
          "title": "E-commerce SEO Services | Online Store Optimization",
          "description": "Specialized e-commerce SEO services to improve product visibility and increase online sales through search optimization."
        },
        "mobile-seo": {
          "title": "Mobile SEO Services | Mobile-First Optimization",
          "description": "Expert mobile SEO services ensuring optimal website performance on smartphones and tablets."
        },
        "international-seo": {
          "title": "International SEO Services | Global Market Optimization",
          "description": "Comprehensive international SEO services for businesses targeting multiple countries and languages."
        },
        "site-architecture": {
          "title": "Website Architecture SEO | Structure Optimization",
          "description": "Expert site architecture services to improve crawlability, user experience, and search engine performance."
        },
        "seo-audit": {
          "title": "SEO Audit Services | Website Performance Analysis",
          "description": "In-depth SEO audit services to identify and fix issues affecting your website's search performance."
        }
      },

      "services": {
        // ... (keeping existing services translations)
      },
      
      "footer.slogan": "Driving Digital Success Through SEO Excellence",
      "footer.rights": "All rights reserved.",

      "experience.positions": {
        "senior": {
          "title": "SEO Specialist",
          "company": "WebStation LTD",
          "date": "2025 - Present",
          "description": "Leading SEO strategies and implementations, achieving significant improvements in client website rankings and organic traffic."
        },
        "fullstack": {
          "title": "Technical SEO Analyst",
          "company": "Digital Solutions",
          "date": "2021 - 2021",
          "description": "Specialized in technical SEO audits and implementations, focusing on website performance and search engine optimization."
        }
      }
    }
  },
  bg: {
    translation: {
      "nav.home": "Начало | SEO Услуги",
      "nav.about": "За Станчев SEO",
      "nav.projects": "SEO Проекти",
      "nav.skills": "SEO Умения",
      "nav.contact": "Контакти",
      "nav.services": "SEO Услуги",
      
      "hero.title": "Професионални SEO Услуги и Уеб Разработка",
      "hero.subtitle": "Подобрете онлайн присъствието си с доказани SEO стратегии и технически оптимизации",
      "button.explore": "Разгледай SEO проекти",
      "button.contact": "Поискай SEO консултация",
      
      "about.title": "За",
      "about.me": "Станчев SEO",
      "about.description1": "SEO експерт с доказан опит в подобряването на позициите в търсачките и увеличаването на органичния трафик.",
      "about.description2": "Специализация в техническо SEO, контент стратегия и оптимизация, базирана на данни.",
      "about.description3": "Фокус върху измерими резултати чрез цялостни SEO решения и стратегически дигитален маркетинг.",

      "meta": {
        "services": {
          "title": "Професионални SEO Услуги | Техническа и Контент Оптимизация",
          "description": "Експертни SEO услуги включващи техническа оптимизация, контент стратегия и линк билдинг. Подобрете позициите си с доказани стратегии."
        },
        "technical-seo": {
          "title": "Техническо SEO | Оптимизация на Уебсайт",
          "description": "Експертни услуги за техническо SEO за подобряване на структурата, скоростта и видимостта на вашия уебсайт."
        },
        "link-building": {
          "title": "Линк Билдинг | Изграждане на Авторитет",
          "description": "Стратегически услуги за линк билдинг за повишаване на домейн авторитета чрез качествени обратни връзки."
        },
        "on-page-seo": {
          "title": "On-Page SEO | Оптимизация на Съдържание",
          "description": "Професионални услуги за on-page SEO оптимизация на съдържание, мета тагове и вътрешно свързване."
        },
        "content-strategy": {
          "title": "SEO Контент Стратегия | Планиране и Оптимизация",
          "description": "Услуги за контент стратегия, базирани на данни, за създаване на SEO оптимизирано съдържание."
        },
        "local-seo": {
          "title": "Локално SEO | Google Maps Оптимизация",
          "description": "Локално SEO за подобряване на видимостта в локалните резултати и Google Maps класиране."
        },
        "ecommerce-seo": {
          "title": "SEO за Онлайн Магазини | E-commerce Оптимизация",
          "description": "Специализирани SEO услуги за онлайн магазини за подобряване на видимостта на продуктите и увеличаване на продажбите."
        },
        "mobile-seo": {
          "title": "Мобилно SEO | Оптимизация за Мобилни Устройства",
          "description": "Експертни услуги за мобилно SEO, осигуряващи оптимално представяне на смартфони и таблети."
        },
        "international-seo": {
          "title": "Международно SEO | Глобална Оптимизация",
          "description": "Цялостни международни SEO услуги за бизнеси, таргетиращи множество държави и езици."
        },
        "site-architecture": {
          "title": "SEO Архитектура | Структурна Оптимизация",
          "description": "Експертни услуги за оптимизация на архитектурата на сайта за по-добро представяне в търсачките."
        },
        "seo-audit": {
          "title": "SEO Одит | Анализ на Представянето",
          "description": "Задълбочени SEO одит услуги за идентифициране и отстраняване на проблеми, влияещи на търсачките."
        }
      },

      // ... (keeping existing Bulgarian translations)
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;