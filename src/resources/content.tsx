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
import { Line, Logo, Row, Text } from "@once-ui-system/core";

// 🆕 Добавяме нови типове
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
  name: `Станчев SEO`,
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
  image: "https://stanchev.bg/images/og/og.jpg",
  label: "Начало",
  title: "SEO оптимизация и AI Automation за вашия бизнес",
  description:
    "Комбинация от SEO оптимизация и AI Automation за повече трафик, по-високо класиране и автоматизирано развитие на вашия бизнес  | Станчев SEO",
  headline: <>SEO & AI Automation – интелигентни решения за растеж</>,
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
  subline: (
    <>
      Аз съм Станчев – комбинирам SEO експертиза и AI автоматизация,
      <br /> за да превръщам данните в стратегии, задачите в автоматизирани процеси
      <br /> и идеите в устойчив онлайн успех
    </>
  ),
};

const about: About = {
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
        ],
        images: [],
      },
      {
        company: "Министерство на отбраната – Централно военно окръжие",
        timeframe: "2021 – 2024",
        role: "Организатор дейности",
        achievements: [
          <>Координирах и организирах процеси за стратегически проекти в държавна институция.</>,
          <>Организирах обучения за над 200 участници.</>,
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
        description: <>Сертификация за анализ на потребителско поведение и уеб данни.</>,
      },
      {
        name: "SEMrush – On-Page SEO Essentials",
        description: <>Сертификация за on-page оптимизация и SEO стратегии.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Технически умения",
    skills: [
      {
        title: "SEO инструменти",
        description: <>Keyword research, SEO одити, Google Analytics, SEMrush.</>,
        tags: [
          { name: "Ahrefs", icon: "ahrefs" },
          { name: "Google Analytics", icon: "google" },
        ],
        images: [],
      },
      {
        title: "Front-end разработка",
        description: <>Next.js, Tailwind, React, Netlify.</>,
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" },
        ],
        images: [],
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
  title: "Пълна гама от SEO услуги, цени и пакети",
  description: "SEO оптимизация, линк билдинг, on-page и off-page оптимизация.",
  services: [
    {
      title: "SEO Оптимизация",
      slug: "seo-optimizatsiya",
      description: "Пълна SEO оптимизация на вашия уебсайт.",
      features: [
        "SEO одит",
        "Техническа оптимизация",
        "Оптимизация на съдържание",
      ],
      price: "По договаряне",
    },
    {
      title: "Локално SEO",
      slug: "lokalno-seo",
      description: "Оптимизация за локални търсения и Google Maps.",
      features: ["Google Business Profile", "Локални директории"],
      price: "От 390 лв.",
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
