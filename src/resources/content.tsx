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
        <strong className="ml-4">ChatGPT & WordPress</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Скорошен проект
        </Text>
      </Row>
    ),
    href: "/seo-proekti/integraciya-chatgpt-wordpress-case-study",
  },
};

const about: About = {
  path: "/za-men",
  label: "За мен",
  title: `За мен | Станчев SEO`,
  description: `Научете повече за моя опит и философия в SEO. Прозрачност, ефективност и резултати.`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com/stanchevseo/15min" },
  intro: {
    display: true,
    title: "Накратко",
    description: (
      <>
        С опит в SEO оптимизацията и AI Automation знам, че това не е вълшебство,
        а алхимия от данни, логика и въображение. SEO е пътуване – не спринт, а
        маратон, където AI е компасът. Оптимизирам, автоматизирам и експериментирам
        всеки ден – защото Google никога не заспива.
      </>
    ),
  },
  work: {
    display: true,
    title: "Професионален опит",
    experiences: [
      {
        company: "Webstation LTD.",
        timeframe: "2025 - настоящем",
        role: "Стажант - SEO",
        achievements: [
          <>За последния месец постигнах 250% ръст в органичния трафик.</>,
          <>Написах статия, която Google AI включи в ревю.</>,
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
        name: "Военна Академия",
        description: <>Профилиран модул по Киберсигурност.</>,
      },
      {
        name: "AI Innovation Summit",
        description: <>Запознанство с иновациите в изкуствения интелект.</>,
      },
      { name: "OpenAI Academy", description: <>Част от OpenAI Academy.</> },
      { name: "Web Cactus Academy", description: <>SEO курсове за WP, OpenCart & Magento.</> },
      {
        name: "SoftUni",
        description: <>В момента надграждам знанията си в SoftUni.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Технически умения",
    skills: [
      {
        title: "SEO инструменти",
        description: <>Опит в SEO одит, анализ и оптимизация.</>,
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
        description: <>Бързо прототипиране с Figma и разработка.</>,
        tools: ["Next.js 15", "Tailwind CSS", "React", "Netlify"],
      },
      {
        title: "Bonus Stack",
        description: <>Инструменти за оптимизация и анализ.</>,
        tools: ["PS", "LR", "Chrome DevTools", "Netlify", "npm", ".htaccess"],
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
