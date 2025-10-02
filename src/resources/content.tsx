import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

// 🆕 Добавени типове
type Contact = {
  path: string;
  label: string;
  title: string;
  description: string;
};

type SeoService = {
  title: string;
  slug: string;
  description: string;
  features: string[];
  price: string;
};

type SeoServices = {
  path: string;
  label: string;
  title: string;
  description: string;
  services: SeoService[];
};

const person: Person = {
  firstName: "Станчев",
  lastName: "SEO",
  name: "Станчев SEO",
  role: "SEO Специалист",
  avatar: "/images/avatar.jpg",
  email: "seo@stanchev.bg",
  location: "Europe/Sofia",
  languages: ["Български", "Английски"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Абонирай се за нашия бюлетин!</>,
  description: <>ОЧАКВАЙТЕ СКОРО</>,
};

const social: Social = [
  { name: "GitHub", icon: "github", link: "https://github.com/stantchev/" },
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/stantcheff/" },
  { name: "dev.to", icon: "devto", link: "https://dev.to/stanchev" },
  { name: "Email", icon: "email", link: `mailto:${person.email}` },
];

const home: Home = {
  path: "/",
  image: "/images/og/og.jpg",
  label: "Начало",
  title: "SEO оптимизация и AI Automation за вашия бизнес",
  description:
    "Комбинация от SEO оптимизация и AI Automation за повече трафик, по-високо класиране и автоматизирано развитие на вашия бизнес | Станчев SEO",
  headline: <>SEO & AI Automation – интелигентни решения за растеж</>,
  subline: (
    <>
      Аз съм Станчев – комбинирам SEO експертиза и AI автоматизация,
      <br /> за да превръщам данните в стратегии, задачите в автоматизирани процеси
      <br /> и идеите в устойчив онлайн успех
    </>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Robots.txt Editor & Cache Control: OC 2.3.0.2</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Скорошен проект
        </Text>
      </Row>
    ),
    href: "/seo-proekti/robots-txt-editor-cache-control-opencart-2302",
  },
};

const about: About = {
  path: "/za-men",
  label: "За мен",
  title: `За мен | Станчев SEO`,
  description: `Научете повече за моя професионален опит и философия в SEO и AI Automation. Прозрачност, ефективност и устойчиви резултати.`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com/stanchevseo/15min" },
  intro: {
    display: true,
    title: "Накратко",
    description: (
      <>
        Аз съм SEO консултант с практически опит в оптимизация на сайтове,
        дигитален маркетинг и автоматизация чрез AI. Само за една година
        помогнах на клиенти да постигнат{" "}
        <strong>над 200% ръст в органичния трафик</strong> за шест месеца.
        Вярвам, че SEO е не само оптимизация за търсачки, а изграждане на
        доверие и устойчив растеж онлайн.
        <br />
        <br />
        Подхождам към всеки проект като диригент – всеки елемент е на точното
        място: техническа оптимизация, съдържание, линк билдинг, Core Web
        Vitals и UX подобрения. SEO е пътуване, а аз съм водачът, който
        използва данни, логика и въображение, за да превърне алгоритмите в
        съюзник, а не в пречка.
      </>
    ),
  },
  work: {
    display: true,
    title: "Професионален опит",
    experiences: [
      {
        company: "Webstation LTD.",
        timeframe: "2025 – настоящем",
        role: "SEO специалист (стажант)",
        achievements: [
          <>Проведох над 50 SEO одита и внедрих Core Web Vitals оптимизации, които подобриха скоростта с 40%.</>,
          <>Увеличих CTR с 35% и органичния трафик с над 200% за 6 месеца.</>,
          <>Оптимизирах продуктови страници за онлайн магазини, комбинирайки техническа оптимизация и съдържание.</>,
        ],
        images: [],
      },
      {
        company: "Министерство на отбраната – Централно военно окръжие",
        timeframe: "2021 – 2024",
        role: "Организатор дейности",
        achievements: [
          <>Координирах и организирах процеси за стратегически проекти в държавна институция.</>,
          <>Анализирах данни и подготвях презентации за висши ръководители.</>,
          <>Организирах обучения за над 200 участници, развивайки умения за работа в среди с висока сигурност.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Образование",
    institutions: [
      {
        name: "Google Analytics",
        description: (
          <a
            href="https://skillshop.credential.net/d830b358-fac9-4299-9028-783755d639b1#acc.S5yMU1dc"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Сертификация за анализ на потребителско поведение и уеб данни.
          </a>
        ),
      },
      {
        name: "Google Ads AI-Powered Performance",
        description: (
          <a
            href="https://skillshop.credential.net/6636f0fe-fd86-4a18-b25b-27a219fca1c8#acc.zCBJHLMX"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Сертификация за реклами с AI и оптимизация на PPC кампании.
          </a>
        ),
      },
      {
        name: "SEMrush – Become an AI-Powered Marketer",
        description: (
          <a
            href="https://static.semrush.com/academy/certificates/dfbe013175/milen-stanchev_26.pdf"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Сертификация за AI и автоматизация в дигиталния маркетинг.
          </a>
        ),
      },
      {
        name: "SEMrush – On-Page SEO Essentials",
        description: (
          <a
            href="https://static.semrush.com/academy/certificates/c326ee55fe/milen-stanchev_25.pdf"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Сертификация за on-page оптимизация и SEO стратегии.
          </a>
        ),
      },
      {
        name: "Web Cactus Academy",
        description: (
          <a
            href="https://stanchev.bg/images/Web%20Cactus%20SEO%20Certificate.png"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Практически курсове по SEO за WordPress, OpenCart и Magento.
          </a>
        ),
      },
      {
        name: "SoftUni",
        description: (
          <a
            href="https://digital.softuni.bg/certificates/details/72195/759fe551"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Завършен курс по SEO с отлична оценка (5.61).
          </a>
        ),
      },
      {
        name: "Военна академия „Г. С. Раковски“",
        description: (
          <>Специализация „Сигурност и отбрана“ с профил „Киберсигурност“.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Технически умения",
    skills: [
      {
        title: "SEO инструменти",
        description: (
          <>Дълбок опит в keyword research, SEO одити и оптимизация чрез професионални платформи.</>
        ),
        tools: [
          "Google Lighthouse",
          "Ahrefs",
          "Google Analytics",
          "SEMrush",
          "Google Search Console",
          "Yoast SEO",
        ],
      },
      {
        title: "Front-end разработка",
        description: (
          <>Разработка и оптимизация на сайтове с модерни технологии, осигуряващи бързина и UX, съобразени с Core Web Vitals.</>
        ),
        tools: ["Next.js 15", "Tailwind CSS", "React", "Netlify"],
      },
      {
        title: "Допълнителен стек",
        description: (
          <>Инструменти за дизайн, анализ и техническа поддръжка на уеб среди.</>
        ),
        tools: [
          "Adobe Photoshop",
          "Adobe Lightroom",
          "Chrome DevTools",
          "npm",
          ".htaccess",
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Блог",
  title: "SEO блог: Уроци, съвети и актуални новини",
  description: `Прочетете полезни статии, уроци и съвети за SEO оптимизация.`,
};

const work: Work = {
  path: "/seo-proekti",
  label: "Проекти",
  title: `SEO проекти – ${person.name}`,
  description: `Разгледайте портфолиото ми. Постигнал съм видими резултати в SEO.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Галерия",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
  ],
};

const contact: Contact = {
  path: "/kontakti",
  label: "Контакти",
  title: "Контакти: Свържете се за безплатна SEO консултация",
  description: "Свържете се с мен за безплатна консултация или одит на сайта.",
};

const seoServices: SeoServices = {
  path: "/seo-uslugi",
  label: "SEO Услуги",
  title: "Пълна гама от SEO услуги, цени и пакети за вашия бизнес",
  description: "SEO оптимизация, линк билдинг, on-page и off-page оптимизация.",
  services: [
    {
      title: "SEO Оптимизация",
      slug: "seo-optimizatsiya",
      description: "Пълна SEO оптимизация на вашия уебсайт.",
      features: [
        "Одит на уебсайта",
        "Техническа SEO оптимизация",
        "Оптимизация на съдържание",
      ],
      price: "По договаряне",
    },
    {
      title: "Link Building",
      slug: "link-building",
      description: "Изграждане на линкове за подобряване на позициите.",
      features: ["Анализ на линк профила", "Качествени външни връзки"],
      price: "По договаряне",
    },
    {
      title: "SEO за Онлайн Магазини",
      slug: "ecommerce-seo",
      description: "SEO стратегия за e-commerce платформи.",
      features: ["Технически одит", "Оптимизация на продуктови страници"],
      price: "По договаряне",
    },
    {
      title: "SEO за WordPress",
      slug: "wordpress-seo",
      description: "Оптимизация на WordPress сайтове.",
      features: ["SEO плъгини", "Оптимизация на скоростта"],
      price: "По договаряне",
    },
    {
      title: "SEO за OpenCart",
      slug: "opencart-seo",
      description: "Оптимизация за OpenCart магазини.",
      features: ["SEO настройки", "Оптимизация на продуктови страници"],
      price: "По договаряне",
    },
    {
      title: "SEO за Magento",
      slug: "magento-seo",
      description: "Технически и съдържателни практики за Magento SEO.",
      features: ["SEO разширения", "Оптимизация на скоростта"],
      price: "По договаряне",
    },
    {
      title: "Content SEO",
      slug: "content-seo",
      description: "Оптимизация на съдържанието.",
      features: ["Ключови думи", "SEO съдържание", "Оптимизация на мета"],
      price: "По договаряне",
    },
    {
      title: "SEO Одит",
      slug: "seo-odit",
      description: "Анализ на SEO състоянието и препоръки.",
      features: ["Технически анализ", "Анализ на съдържанието"],
      price: "От 200 лв.",
    },
    {
      title: "On-Page SEO",
      slug: "on-page-seo",
      description: "Оптимизация на структура, мета данни и съдържание.",
      features: ["Мета оптимизация", "Schema markup"],
      price: "От 300 лв.",
    },
    {
      title: "Off-Page SEO",
      slug: "off-page-seo",
      description: "Външна оптимизация за подобряване на авторитета.",
      features: ["Link building", "Social media signals", "Brand mentions"],
      price: "От 400 лв.",
    },
    {
      title: "Keyword Research",
      slug: "keyword-research",
      description: "Проучване на ключови думи и SEO стратегия.",
      features: ["Анализ на ключови думи", "Long-tail ключови думи"],
      price: "От 150 лв.",
    },
    {
      title: "Локално SEO",
      slug: "lokalno-seo",
      description: "SEO за локални търсения и Google Maps.",
      features: ["Google Business Profile", "Локални директории"],
      price: "От 390 лв.",
    },
    {
      title: "SEO Консултация",
      slug: "seo-konsultaciya",
      description: "Лична консултация със SEO експерт.",
      features: ["1-часова консултация", "План за действие"],
      price: "100 лв./час",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  contact,
  seoServices,
};



