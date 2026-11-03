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
  firstName: "Stanchev",
  lastName: "Digital",
  name: "Stanchev Digital",
  role: "SEO консултант, SEO специалист и уеб разработчик",
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
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/stanchev-seo/" },
  { name: "dev.to", icon: "devto", link: "https://dev.to/stanchev" },
  { name: "Email", icon: "email", link: `mailto:${person.email}` },
];

const home: Home = {
  path: "/",
  image: "/images/og/og.jpg",
  label: "Начало",
  title: "SEO оптимизация и AI Automation за вашия бизнес",
  description:
    "Комбинация от SEO оптимизация и AI Automation за повече трафик, по-високо класиране и автоматизирано развитие на вашия бизнес | Stanchev Digital",
  headline: <>SEO & AI Automation - интелигентни решения за растеж</>,
  subline: (
    <>
      Аз съм Станчев - комбинирам SEO експертиза и AI автоматизация,
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
  title: `За мен | Stanchev Digital`,
  description: `Научете повече за моя професионален опит и философия в SEO и Front-end разработката. Прозрачност, ефективност и устойчиви резултати.`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com/stanchevseo/15min" },
  intro: {
    display: true,
    title: "Накратко",
    description: (
      <>
        Front-end разработчик (React • Next.js • Tailwind CSS) и сериозен SEO специалист. Комбинирам техническа прецизност, за да създавам бързи, оптимизирани и видими сайтове.
        <br />
        <br />
        Силно ме вълнува писането на чист, ефективен код с React и Next.js, перфектно стилизиран с Tailwind CSS, комбиниран с професионално техническо SEO - от структурата на проекта, през семантичен HTML и скорост, до перфектна индексация и Core Web Vitals.
        <br />
        <br />
        Вярвам, че перфектното SEO е балансирано между код, съдържание и UX — защото само така алгоритмите се превръщат в твой съюзник.
      </>
    ),
  },
  work: {
    display: true,
    title: "Професионален опит",
    experiences: [
            {
        company: "HempFarms LTD.",
        timeframe: "2025 - 2025",
        role: "SEO специалист",
        achievements: [
          <>Ръководих SEO стратегията и координирах UI/UX редизайн за Коледните празници на портфолио от 17 международни онлайн магазина за CBD продукти и CBD масло, изградени на WordPress, Shopify, WooCommerce и Elementor, обслужващи множество международни пазари.</>,
          <>Изпълних мащабна оптимизация за висококонкурентни ключови думи и сезонни търсения, комбинирайки техническо SEO, съдържателна стратегия и UX подобрения, с директно отражение върху трафика и продажбите.</>,
          <>В партньорство с маркетинг специалист отстраних критични проблеми, свързани с Google Ads политики за CBD продукти, стабилизирайки рекламните акаунти и позволявайки устойчиво мащабиране на платените кампании.</>,
          <>Резултати: +185% органичен трафик (YoY), +132% ръст в онлайн продажбите, среден ROAS 4.6+ при международни Google Ads кампании.</>,
        ],
        images: [],
      },
      {
        company: "InHouse LTD.",
        timeframe: "2025 - 2025",
        role: "SEO специалист",
        achievements: [
          <>Отговарях за SEO стратегията на онлайн магазин за домашни потреби, изграден на WordPress, като участвах в UI/UX редизайн на сайта по повод Коледните празници с цел по-добра навигация и по-високи сезонни конверсии.</>,
          <>Комбинирах техническо SEO и UX оптимизации в WordPress среда (структура на категории, вътрешна навигация и визуална йерархия), което доведе до над 40% подобрение в Core Web Vitals и значително по-добро потребителско изживяване.</>,
          <>Оптимизирах продуктови и категорийни страници в WordPress чрез SEO анализ, ключови думи и UX адаптации за празнични кампании, повишавайки органичния трафик и CTR.</>,
        ],
        images: [],
      },
      {
        company: "Webstation LTD.",
        timeframe: "2025 - настоящем",
        role: "SEO специалист (стажант)",
        achievements: [
          <>Извърших над 30 GEO и технически SEO одита, включително оптимизации по Core Web Vitals, които повишиха скоростта и локалната видимост с над 40%.</>,
          <>Подобрих CTR с 35% и увеличих органичния локален трафик с повече от 200% в рамките на шест месеца чрез прецизно таргетиране по региони и ключови думи.</>,
          <>Оптимизирах продуктови и локационни страници на онлайн магазини, комбинирайки техническа структура, локално съдържание и UX фактори за максимална видимост.</>,
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
        name: "SEMrush - Become an AI-Powered Marketer",
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
        name: "SEMrush - On-Page SEO Essentials",
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
        name: "Военна академия Г. С. Раковски",
        description: (
          <>Специализация „Сигурност и отбрана" с профил „Киберсигурност".</>
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
        tags: [
          { name: "Google Lighthouse", icon: "lighthouse" },
          { name: "Ahrefs", icon: "ahrefs" },
          { name: "Google Analytics", icon: "googleanalitycs" },
          { name: "SEMrush", icon: "semrush" },
          { name: "Google Search Console", icon: "gsconsole" },
          { name: "Yoast SEO", icon: "yoast" },
        ],
      },
      {
        title: "Front-end разработка",
        description: (
          <>Разработка и оптимизация на сайтове с модерни технологии, осигуряващи бързина и UX, съобразени с Core Web Vitals.</>
        ),
        tags: [
          { name: "Next.js 15", icon: "nextjs" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
          { name: "React", icon: "react" },
          { name: "Netlify", icon: "netlify" },
          { name: "Vercel", icon: "vercel" },
        ],
      },
      {
        title: "Допълнителен стек",
        description: (
          <>Инструменти за дизайн, анализ и техническа поддръжка на уеб среди.</>
        ),
        tags: [
          { name: "Adobe Photoshop", icon: "photoshop" },
          { name: "Adobe Lightroom", icon: "lightroom" },
          { name: "Chrome DevTools", icon: "chrome" },
          { name: "npm", icon: "npm" },
          { name: ".htaccess", icon: "lock" },
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
  title: `SEO проекти - ${person.name}`,
  description: `Разгледайте портфолиото ми. Постигнал съм видими резултати в SEO.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Галерия",
  title: `Photo gallery - ${person.name}`,
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
  title: "Пълна гама от SEO услуги, цени и пакети за вашия бизнес.",
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
      features: ["SEO плъгини", "Оптимизация на скоростта, Headless Wordpress"],
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




