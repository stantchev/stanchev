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
  image: "https://stanchev.vercel.app/images/og/og.jpg",
  label: "Начало",

  // За SEO и metadata
  titleText: "SEO оптимизация и услуги | Достигнете първо място в Google",
  descriptionText: "Експертни SEO услуги за вашия сайт. Увеличете трафика и продажбите с ефективна оптимизация. Свържете се за безплатна консултация!",
  featuredTitleText: "Скорошен проект: DarosBuild",

  // За визуалния интерфейс (UI)
  headline: <>SEO услуги, които строят мостове между теб и Google</>,
  subline: (
    <>
      Аз съм Станчев – SEO оптимизатор, който превръща хаоса в структура,
      <br /> съдържанието в резултати и кофеина в работещи решения
    </>
  ),
  featured: {
    display: true,
    title: (
      <>Скорошен проект: <strong className="ml-4">DarosBuild</strong></>
    ),
    href: "/seo-proekti/DarosBuild-moyat-proces-po-seo-optimizatsiya",
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
        С една година опит в SEO услугите вярвам, че SEO не е магия,
        а наука – с данни, логика и щипка интуиция. Персонализирам стратегии така,
        както добър шивач крои костюм – по мярка. За мен SEO не е спринт, а маратон
        с динамично трасе и неочаквани завои. Оптимизирам, адаптирам и се уча
        непрекъснато – защото Google не спи.
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
          <>За последния месец постигнах 250% ръст в органичния трафик на сайт за ремонти.</>,
          <>Написах статия, която дори Google AI хареса и добави в своите ревюта.</>,
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
        description: <>Профилиран модул по Киберсигурност към „Сигурност и отбрана".</>,
      },
{
        name: "AI Innovation Summit",
        description: <>Присъствах на форума, където се запознах с иновациите в сферата на изкуствения интелект.</>,
      },
{
        name: "OpenAI Academy",
        description: <>Официално станах част от OpenAI Academy.</>,
      },
{
        name: "Web Cactus Academy",
        description: <>Завърших курсове по SEO за WordPress, OpenCart & Magento.</>,
      },
      {
        name: "SoftUni",
        description: <>В момента се обучавам в SoftUni и надграждам знанията си в SEO, защото Google не спи.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Технически умения",
    skills: [
      {
        title: "SEO инструменти",
        description: <>Опит в използването на SEO инструменти за одит, анализ и оптимизация.</>,
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
        description: <>Допълнителни инструменти за оптимизация и анализ.</>,
        tools: ["PS", "LR", "Chrome DevTools", "Netlify", "npm", ".htaccess"],
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
  title: `SEO проекти: Вижте успешните ни истории и резултати`,
  description: `Разгледайте портфолиото ни. Постигнали сме видими резултати в SEO класирането на различни сайтове.`,
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

