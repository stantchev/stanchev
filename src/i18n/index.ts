import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "meta": {
        "services": {
          "title": "SEO Services | Stanchev",
          "description": "Comprehensive SEO services including technical SEO, content strategy, and link building to improve your website's visibility and rankings."
        },
        "technical-seo": {
          "title": "Technical SEO Services | Stanchev",
          "description": "Expert Technical SEO services to improve your website's structure, speed, and search engine visibility. Get a solid technical foundation for better rankings."
        },
        "link-building": {
          "title": "Link Building Services | Stanchev",
          "description": "Professional link building services to boost your website's authority and rankings through high-quality backlinks and outreach strategies."
        },
        "on-page-seo": {
          "title": "On-Page SEO Services | Stanchev",
          "description": "Comprehensive on-page SEO optimization to improve your content's relevance, readability, and search engine rankings."
        },
        "content-strategy": {
          "title": "Content Strategy Services | Stanchev",
          "description": "Data-driven content strategy services to create engaging, SEO-optimized content that drives traffic and conversions."
        },
        "local-seo": {
          "title": "Local SEO Services | Stanchev",
          "description": "Local SEO services to improve your business visibility in local search results and Google Maps rankings."
        },
        "ecommerce-seo": {
          "title": "E-commerce SEO Services | Stanchev",
          "description": "Specialized e-commerce SEO services to boost your online store's visibility and increase product sales."
        },
        "mobile-seo": {
          "title": "Mobile SEO Services | Stanchev",
          "description": "Mobile SEO optimization services to ensure your website performs excellently on smartphones and tablets."
        },
        "international-seo": {
          "title": "International SEO Services | Stanchev",
          "description": "International SEO services to help your business reach global audiences through multilingual and regional optimization."
        },
        "site-architecture": {
          "title": "Site Architecture Services | Stanchev",
          "description": "Website architecture optimization services to improve crawlability, user experience, and search engine rankings."
        },
        "seo-audit": {
          "title": "SEO Audit Services | Stanchev",
          "description": "Comprehensive SEO audit services to identify and fix issues affecting your website's search performance."
        }
      },
      // ... rest of the existing translations
    }
  },
  bg: {
    translation: {
      "meta": {
        "services": {
          "title": "SEO Услуги | Станчев",
          "description": "Цялостни SEO услуги, включващи техническо SEO, контент стратегия и линк билдинг за подобряване на видимостта и класирането на вашия уебсайт."
        },
        "technical-seo": {
          "title": "Техническо SEO | Станчев",
          "description": "Експертни услуги за техническо SEO за подобряване на структурата, скоростта и видимостта на вашия уебсайт в търсачките."
        },
        "link-building": {
          "title": "Линк Билдинг Услуги | Станчев",
          "description": "Професионални услуги за изграждане на връзки за повишаване на авторитета и класирането на вашия уебсайт чрез качествени обратни връзки."
        },
        "on-page-seo": {
          "title": "On-Page SEO Услуги | Станчев",
          "description": "Цялостна on-page SEO оптимизация за подобряване на релевантността, четимостта и класирането на вашето съдържание."
        },
        "content-strategy": {
          "title": "Контент Стратегия | Станчев",
          "description": "Услуги за контент стратегия, базирани на данни, за създаване на ангажиращо, SEO оптимизирано съдържание."
        },
        "local-seo": {
          "title": "Локално SEO | Станчев",
          "description": "Услуги за локално SEO за подобряване на видимостта на бизнеса ви в локалните резултати от търсенето и Google Maps."
        },
        "ecommerce-seo": {
          "title": "SEO за Онлайн Магазини | Станчев",
          "description": "Специализирани SEO услуги за онлайн магазини за повишаване на видимостта и продажбите на продукти."
        },
        "mobile-seo": {
          "title": "Мобилно SEO | Станчев",
          "description": "Услуги за мобилна SEO оптимизация, гарантиращи отлично представяне на вашия уебсайт на смартфони и таблети."
        },
        "international-seo": {
          "title": "Международно SEO | Станчев",
          "description": "Услуги за международно SEO, помагащи на вашия бизнес да достигне глобална аудитория чрез многоезична оптимизация."
        },
        "site-architecture": {
          "title": "Архитектура на Сайта | Станчев",
          "description": "Услуги за оптимизация на архитектурата на уебсайта за подобряване на обхождането, потребителското изживяване и класирането."
        },
        "seo-audit": {
          "title": "SEO Одит | Станчев",
          "description": "Цялостни услуги за SEO одит за идентифициране и отстраняване на проблеми, влияещи на представянето в търсачките."
        }
      },
      // ... rest of the existing translations
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