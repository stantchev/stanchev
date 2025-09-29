import { Logo, Button } from "@once-ui-system/core";

const person = {
  firstName: "Станчев",
  lastName: "SEO",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "SEO Специалист",
  avatar: "/images/avatar.jpg",
  email: "seo@stanchev.bg",
  location: "Europe/Sofia",
  languages: ["Български", "Английски"],
};

const newsletter = {
  display: true,
  title: <>Абонирай се за нашия бюлетин!</>,
  description: <>ОЧАКВАЙТЕ СКОРО</>,
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/stantchev/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/stantcheff/",
  },
  {
    name: "dev.to",
    icon: "devto",
    link: "https://dev.to/stanchev",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "https://stanchev.bg/images/og/og.jpg",
  label: "Начало",

  // За SEO и metadata
  titleText: "SEO оптимизация и AI Automation за вашия бизнес",
  descriptionText: "Комбинация от SEO оптимизация и AI Automation за повече трафик, по-високо класиране и автоматизирано развитие на вашия бизнес  | Станчев SEO",
  featuredTitleText: "Скорошен проект: ChatGPT & WordPress",

  // За визуалния интерфейс (UI)
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
      <>Скорошен проект: <strong className="ml-4">ChatGPT & WordPress</strong></>
    ),
    href: "/seo-proekti/integraciya-chatgpt-wordpress-case-study",
  },
};

const about = {
  path: "/za-men",
  label: "За мен",
  title: `За мен | Станчев SEO`,
  description: `Научете повече за моя опит и философия в SEO. Прозрачност, ефективност и резултати. Заедно ще изградим вашата онлайн репутация.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/stanchevseo/15min",
  },
  intro: {
    display: true,
    title: "Накратко",
    description: (
      <>
        Аз съм SEO консултант с практически опит в оптимизация на сайтове,
        дигитален маркетинг и автоматизация чрез AI. Само за една година
        подпомогнах клиенти да постигнат <strong>над 200% ръст в органичния
        трафик</strong> за шест месеца. Вярвам, че SEO е не само оптимизация
        за търсачки, а изграждане на доверие и устойчив растеж онлайн.
        <br />
        <br />
        Подхождам към всеки проект като диригент – всеки елемент е на точното
        си място: техническа оптимизация, съдържание, линк билдинг, Core Web
        Vitals и UX подобрения. SEO е пътуване, а аз съм водачът, който
        използва данни, логика и въображение, за да превърне алгоритмите в
        съюзник, а не пречка.
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
        name: "Военна академия „Г. С. Раковски“",
        description: <>Специализация „Сигурност и отбрана“ с профил „Киберсигурност“, развила аналитично мислене и дисциплина.</>,
      },
      {
        name: "SoftUni",
        description: <>Завършен курс по SEO с отлична оценка (5.61). Специализация в on-page и off-page оптимизация.</>,
      },
      {
        name: "Web Cactus Academy",
        description: <>Практически курсове по SEO за WordPress, OpenCart и Magento, включващи техническа оптимизация и линк билдинг.</>,
      },
      {
        name: "Сертификации",
        description: (
          <>
            Придобити международни сертификати: SEMrush On-Page SEO Essentials,
            SEMrush AI-Powered Marketer, Google Analytics, Google Ads AI-Powered
            Performance. Постоянно обновявам знанията си, защото Google никога
            не спира.
          </>
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
          <>
            Дълбок опит в keyword research, SEO одити и оптимизация на сайтове
            чрез професионални инструменти.
          </>
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
          <>
            Разработка и оптимизация на сайтове с модерни технологии, осигуряващи
            бързина и UX, съответстващи на Core Web Vitals.
          </>
        ),
        tools: ["Next.js 15", "Tailwind CSS", "React", "Netlify"],
      },
      {
        title: "Bonus Stack",
        description: (
          <>
            Допълнителни умения за анализ, дизайн и поддръжка на уеб среди.
          </>
        ),
        tools: ["PS", "LR", "Chrome DevTools", "npm", ".htaccess"],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Блог",
  title: "SEO блог: Уроци, съвети и актуални новини от света на SEO",
  description: `Прочетете полезни статии, уроци и съвети за SEO оптимизация. Научете как да класирате сайта си и да увеличите трафика.`,
};

const work = {
  path: "/seo-proekti",
  label: "Проекти",
  title: `SEO проекти: Вижте успешните ми истории и резултати`,
  description: `Разгледайте портфолиото ми. Постигнал съм видими резултати в SEO класирането на различни сайтове.`,
};

const seoServices = {
  path: "/seo-uslugi",
  label: "SEO Услуги",
  title: "Пълна гама от SEO услуги, цени и пакети за вашия бизнес",
  description:
    "Предлагаме SEO оптимизация, линк билдинг, on-page и off-page оптимизация, PPC кампании и др. Вижте цените и изберете пакет.",
  services: [
	  {
  "title": "SEO Оптимизация",
  "slug": "seo-optimizatsiya",
  "description": "Пълна SEO оптимизация на вашия уебсайт за по-добро класиране в търсачките.",
  "features": [
    "Одит на уебсайта",
    "Техническа SEO оптимизация",
    "Оптимизация на съдържание и ключови думи",
    "Вътрешна и външна линк структура",
    "Подобряване на скорост и мобилна съвместимост"
  ],
  "price": "По договаряне"
},
	  {
  "title": "Link Building",
  "slug": "link-building",
  "description": "Ефективно изграждане на линкове за подобряване на SEO позициите и авторитета на вашия сайт.",
  "features": [
    "Анализ на линк профила",
    "Идентифициране на възможности за линкове",
    "Създаване на линк билдинг стратегия",
    "Изграждане на качествени външни връзки",
    "Докладване и проследяване на резултатите"
  ],
  "price": "По договаряне"
},
	  {
      "title": "SEO за Онлайн Магазини",
      "slug": "ecommerce-seo",
      "description": "Специализирана SEO стратегия за e-commerce платформи. Повишете видимостта и продажбите на вашия онлайн магазин с доказани техники за оптимизация.",
      "features": [
        "Технически одит на онлайн магазина",
        "Оптимизация на продуктови страници и категории",
        "Вътрешна линк структура и навигация",
        "Структурирани данни за продукти и ревюта",
        "Линк билдинг за e-commerce сайтове"
      ],
      "price": "По договаряне"
    },
    {
      "title": "SEO за WordPress",
      "slug": "wordpress-seo",
      "description": "Практики за оптимизация на WordPress сайтове. Повишете класирането и сигурността на вашия WordPress сайт с модерни SEO техники.",
      "features": [
        "SEO плъгини и настройки",
        "Оптимизация на скоростта и сигурността",
        "Структурирани данни и breadcrumbs",
        "Вътрешна линк структура",
        "Линк билдинг за WordPress сайтове"
      ],
      "price": "По договаряне"
    },
    {
      "title": "SEO за OpenCart",
      "slug": "opencart-seo",
      "description": "SEO стратегии, специфични за OpenCart платформи. Оптимизирайте вашия OpenCart магазин за по-добро класиране и повече продажби.",
      "features": [
        "SEO разширения и настройки",
        "Оптимизация на продуктови страници",
        "Скорост и сигурност на платформата",
        "Вътрешна линк структура",
        "Линк билдинг за OpenCart магазини"
      ],
      "price": "По договаряне"
    },
    {
      "title": "SEO за Magento",
      "slug": "magento-seo",
      "description": "Технически и съдържателни практики за Magento SEO. Оптимизирайте вашия Magento магазин за по-добро класиране и повече продажби.",
      "features": [
        "SEO разширения и настройки",
        "Оптимизация на продуктови страници",
        "Скорост и сигурност на платформата",
        "Вътрешна линк структура",
        "Линк билдинг за Magento магазини"
      ],
      "price": "По договаряне"
    },
	  {
  "title": "Content SEO",
  "slug": "content-seo",
  "description": "Оптимизация на съдържанието за търсачки и потребители – стратегия, писане и подобрения.",
  "features": [
    "Проучване на ключови думи за съдържание",
    "Създаване на SEO-оптимизирано съдържание",
    "Одит на съществуващо съдържание",
    "Оптимизация на мета данни и заглавия",
    "Структуриране на съдържание за по-добро класиране и четливост"
  ],
  "price": "По договаряне"
},
    {
      title: "SEO Одит",
      slug: "seo-odit",
      description: "Анализ на SEO състоянието на сайта и стратегии за подобрение.",
      features: [
        "Технически SEO анализ",
        "Анализ на съдържанието",
        "Конкурентен анализ",
        "Препоръки за подобрение",
        "Детайлен отчет",
      ],
      price: "От 200 лв.",
    },
    {
      title: "On-Page SEO",
      slug: "on-page-seo",
      description: "Оптимизация на структурата, мета данни и съдържание.",
      features: [
        "Оптимизация на заглавия и мета описания",
        "Подобрение на вътрешната структура",
        "Оптимизация на изображения",
        "Schema markup",
        "Подобрение на скоростта",
      ],
      price: "От 300 лв.",
    },
    {
      title: "Keyword Research",
	  slug: "keyword-research",
      description: "Изследване на ключови думи и създаване на SEO стратегия.",
      features: [
        "Анализ на ключови думи",
        "Конкурентен анализ",
        "Long-tail ключови думи",
        "Стратегия за съдържание",
        "Месечни отчети",
      ],
      price: "От 150 лв.",
    },
	  {
  title: "Локално SEO",
  slug: "lokalno-seo",
  description: "SEO оптимизация за локални търсения и позициониране в Google Maps.",
  features: [
    "Оптимизация на Google Business Profile",
    "Регистрация в локални директории",
    "NAP консистентност",
    "Управление на онлайн отзиви",
    "Стратегия за локално съдържание"
  ],
  price: "От 390 лв."
},
    {
      title: "SEO Консултация",
	  slug: "seo-konsultaciya",
      description: "Лична консултация със SEO експерт за вашия бизнес.",
      features: [
        "1-часова консултация",
        "Анализ на текущото състояние",
        "Стратегически препоръки",
        "План за действие",
        "Последващи въпроси",
      ],
      price: "100 лв./час",
    },
  ],
};

const contact = {
  path: "/kontakti",
  label: "Контакти",
  title: "Контакти: Свържете се за безплатна SEO консултация",
  description: "Свържете се с мен за безплатна консултация или одит на сайта. Ще отговоря на вашите въпроси и ще изработим стратегия.",
};

const gallery = {
  path: "/gallery",
  label: "Галерия",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
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
  seoServices,
  contact,
  gallery,
};








