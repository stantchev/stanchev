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
  headline: <>SEO услуги, които строят мостове между дизайн и код</>,
  featured: {
    display: true,
    title: <>Скорошен проект: <strong className="ml-4">DarosBuild</strong></>,
    href: "/seo-proekti/DarosBuild-moyat-proces-po-seo-optimizatsiya",
  },
  subline: (
    <>
      Аз съм Станчев – SEO оптимизатор, който превръща хаоса в структура,
      <br /> дизайнът в код и кофеина в работещи решения
    </>
  ),
};

const about = {
  path: "/za-men",
  label: "За мен",
  title: `За мен – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} от ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
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
        name: "SoftUni",
        description: <>В момента се обучавам в SoftUni и надграждам знанията си в SEO.</>,
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
  title: "SEO блог | Станчев SEO",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/seo-proekti",
  label: "Проекти",
  title: `SEO проекти – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const seoServices = {
  path: "/seo-uslugi",
  label: "SEO Услуги",
  title: "SEO Услуги за вашия бизнес",
  description:
    "Професионални SEO услуги за оптимизация на сайтове, онлайн магазини, линк билдинг, анализ и повишаване на позиции в Google.",
  services: [
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
  title: "Свържете се с мен",
  description: "Готов съм да помогна за подобряване на SEO резултатите на вашия сайт.",
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
