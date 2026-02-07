import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  Icon,
  Feedback,
  AccordionGroup,
  Card,
  Grid,
  Badge,
  RevealFx,
  Timeline,
  Carousel,
  ProgressBar,
  LineBarChart,
  HoverCard,
  CelebrationFx,
  GlitchFx,
  LetterFx,
  FaLinkedin,
  FaGithub,
  FaDev,
} from '@once-ui-system/core';
import { baseURL } from '@/resources';
import Script from 'next/script';
import {
  FaCode,
  FaPalette,
  FaMobile,
  FaRocket,
  FaShoppingCart,
  FaWordpress,
  FaStore,
  FaCogs,
  FaSearch,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaLaptop,
  FaGlobe,
  FaCog,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaWrench,
  FaPaintBrush,
  FaStar,
  FaRobot,
  FaBrain,
} from 'react-icons/fa';

export async function generateMetadata() {
  return {
    title: 'Изработка на Сайт и Лендинг Страници 2026 | Stanchev Digital',
    description: 'Професионална изработка на сайт и лендинг страници с React, Next.js, Tailwind CSS и AI инструменти. Модерни, бързи, AI-оптимизирани уебсайтове за малки и средни бизнеси с фокус върху SEO и UX.',
    keywords: 'изработка на сайт България 2026, лендинг страница цена, уеб дизайн София, React разработчик България, Next.js уебсайт, Tailwind CSS дизайн, модерен корпоративен сайт, респонсивен уебсайт, SEO оптимизиран сайт цена, професионален уебсайт за бизнес, изработка на уебсайт цена, лендинг страница дизайн, корпоративен сайт цена, уеб разработка услуги, персонализиран уебсайт, AI уеб дизайн',
    alternates: {
      canonical: `${baseURL}/web/izrabotka-sajt`,
    },
    openGraph: {
      title: 'Изработка на Сайт и Лендинг Страници 2026 | Stanchev Digital',
      description: 'Професионална изработка на сайт и лендинг страници с React, Next.js, Tailwind CSS и AI инструменти. Модерни, бързи, AI-оптимизирани уебсайтове за малки и средни бизнеси с фокус върху SEO и UX.',
      url: `${baseURL}/web/izrabotka-sajt`,
      siteName: 'Stanchev Digital',
      images: [
        {
          url: `https://stanchev.bg/images/og/og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Изработка на Сайт и Лендинг Страници 2026 | Stanchev Digital',
      description: 'Професионална изработка на сайт и лендинг страници с React, Next.js, Tailwind CSS и AI инструменти. Модерни, бързи, AI-оптимизирани уебсайтове за малки и средни бизнеси с фокус върху SEO и UX.',
      images: [`https://stanchev.bg/images/og/og.jpg`],
    },
  };
}

export default function IzrabotkaSajtPage() {
  return (
    <>
      <Script
        id="web-development-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            "name": "Изработка на сайт и лендинг страници 2026 | Stanchev Digital",
            "serviceType": "Уеб разработка",
            "description": "Професионална изработка на сайт и лендинг страници с React, Next.js, Tailwind CSS и AI инструменти. Създавам модерни, бързи и SEO оптимизирани уебсайтове за малки и средни бизнеси, с фокус върху AI интеграция и UX.",
            "provider": {
              "@type": "Organization",
              "name": "Stanchev Digital",
              "url": "https://stanchev.bg/",
              "logo": "https://stanchev.bg/images/og/og.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "seo@stanchev.bg"
              },
              "founder": {
                "@type": "Person",
                "name": "Stanchev",
                "jobTitle": "AI SEO & Front-End Specialist",
                "description": "С над 5 години опит в уеб разработка и AI оптимизация, създавам сайтове, които са бързи, сигурни и оптимизирани за търсачки."
              }
            },
            "url": "https://stanchev.bg/web/izrabotka-sajt",
            "areaServed": {
              "@type": "Place",
              "name": "България"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Уеб разработка услуги и цени 2026",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Лендинг страница с модерен дизайн и AI интеграция",
                    "description": "Професионална едностранична лендинг страница за промоции, услуги или продукти с фокус върху конверсията, SEO и AI оптимизация."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Корпоративен сайт с CMS и AI функции",
                    "description": "Многопланинков корпоративен сайт с административен панел, SEO оптимизация, AI чатбот и респонсивен дизайн за управление на съдържанието."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Портфолио сайт за творци с AI генерирано съдържание",
                    "description": "Персонализиран портфолио сайт за творци, фотографи, дизайнери и фрийлансери с модерен дизайн, AI инструменти и SEO оптимизация."
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Лендинг страница - професионален пакет",
                  "description": "Едностранична лендинг страница с модерен дизайн, SEO оптимизация, контактна форма, социални мрежи и AI елементи.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "900",
                    "priceCurrency": "BGN",
                    "unitText": "лв.",
                    "valueAddedTaxIncluded": true
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Корпоративен сайт - бизнес пакет",
                  "description": "Многопланинков корпоративен сайт с CMS, SEO оптимизация, административен панел, блог секция и AI интеграции.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "1800",
                    "priceCurrency": "BGN",
                    "unitText": "лв.",
                    "valueAddedTaxIncluded": true
                  },
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "55",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Клиент 1"
                },
                "reviewBody": "Отлична изработка на сайт – бързо, качествено и с AI оптимизация. Препоръчвам!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Клиент 2"
                },
                "reviewBody": "Професионален подход и модерни технологии. Сайтът ни сега е по-бърз и видим в Google.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                }
              }
            ]
          })
        }}
      />
      <Column as="section" gap="l" padding="s" fillWidth>
        <RevealFx speed="fast">
          <Column gap="s" align="center" fillWidth>
            <LetterFx>
              <Heading as="h1" variant="display-strong-l" align="center">
                Изработка на Сайт и Лендинг Страници 2026 – Модерни Уебсайтове с AI за Вашия Бизнес
              </Heading>
            </LetterFx>
            <Text variant="display-default-s" align="center" onBackground="neutral-weak">
              <strong>Изработка на сайт</strong> с React, Next.js, Tailwind CSS и AI инструменти. Създавам модерни, бързи и SEO оптимизирани уебсайтове, които привличат клиенти и конвертират посетители. Ако търсите цялостни <a href="/web">уеб разработка услуги</a> с фокус върху 2026 тенденции, тук е мястото да започнете.
            </Text>
            <Flex horizontal="center">
              <GlitchFx>
                <Button
                  variant="primary"
                  size="l"
                  href="/kontakti"
                  prefixIcon="checkCircle"
                  data-border="rounded"
                >
                  Заяви Безплатна Консултация за 2026
                </Button>
              </GlitchFx>
            </Flex>
          </Column>
        </RevealFx>
        <RevealFx delay={0.2}>
          <Flex gap="8" wrap horizontal="center">
            {["Уеб Разработка 2026", "React", "Next.js", "Tailwind CSS", "AI Интеграция", "SEO Оптимизация"].map((lbl) => (
              <Tag key={lbl} size="l" variant="brand">
                {lbl}
              </Tag>
            ))}
          </Flex>
        </RevealFx>
        <RevealFx delay={0.3}>
          <Column gap="l">
            <Heading as="h2" variant="display-default-m">
              Какво Включва Изработката на Сайт от Stanchev Digital през 2026?
            </Heading>
            <Text variant="body-default-l">
              Работя с най-модерните технологии: <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>TypeScript</strong> и AI инструменти за автоматизация. Всеки сайт е изграден с SEO и AI в ум от самото начало – правилна структура, бърза скорост, мобилна съвместимост, достъпност и оптимизирано съдържание. Целта е проста: красив, функционален и видим сайт в Google и AI търсачки.
            </Text>
            <Grid columns={2} s={{ columns: 1 }} gap="l" fillWidth>
              {[
                { icon: FaPaintBrush, title: "Модерен Дизайн с AI", desc: "Чист, професионален и респонсивен дизайн за всички устройства, с AI генерирани елементи" },
                { icon: FaSearch, title: "SEO и AI Оптимизация", desc: "Core Web Vitals, мета тагове, schema markup, sitemap, AI-friendly структура" },
                { icon: FaRocket, title: "Бърза Скорост с Edge Computing", desc: "Оптимизиран код, компресирани изображения, CDN интеграция и edge deployment" },
                { icon: FaMobile, title: "Мобилна Съвместимост и Достъпност", desc: "Перфектно изглежда на всички устройства с WCAG стандарти" }
              ].map((item, index) => (
                <HoverCard key={item.title}>
                  <Card padding="l" border="neutral-alpha-medium" radius="l">
                    <Flex gap="m" vertical="start">
                      <item.icon size={24} color="var(--brand-strong)" />
                      <Column gap="xs">
                        <Heading as="h3" variant="heading-strong-m">{item.title}</Heading>
                        <Text variant="body-default-s" onBackground="neutral-weak">{item.desc}</Text>
                      </Column>
                    </Flex>
                  </Card>
                </HoverCard>
              ))}
            </Grid>
          </Column>
        </RevealFx>
        <RevealFx delay={0.4}>
          <Column gap="l">
            <Heading as="h2" variant="display-default-m">
              Защо да Инвестирате в Професионален Сайт през 2026?
            </Heading>
            <Text variant="body-default-l">
              <strong>Изработка на сайт</strong> е инвестиция в бъдещето на вашия бизнес. Модерният сайт привлича клиенти, изгражда доверие и работи 24/7 за вас. Със SEO и AI оптимизацията видими сте в Google и AI търсачки, а с бързата скорост и достъпност посетителите остават по-дълго на сайта.
            </Text>
            <Grid columns={3} s={{ columns: 1 }} gap="l" fillWidth>
              {[
                { icon: FaChartLine, title: "+30% Конверсии", desc: "С AI персонализация", value: 30 },
                { icon: FaUsers, title: "По-Високо Доверие", desc: "Чрез E-E-A-T", value: 50 },
                { icon: FaLightbulb, title: "AI Интеграции", desc: "За по-добър UX", value: 80 }
              ].map((benefit) => (
                <Card key={benefit.title} padding="m" border="neutral-alpha-medium" radius="l" align="center">
                  <Column gap="s" align="center">
                    <benefit.icon size={32} color="var(--brand-strong)" />
                    <Heading variant="heading-strong-m">{benefit.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">{benefit.desc}</Text>
                    <ProgressBar value={benefit.value} max={100} />
                  </Column>
                </Card>
              ))}
            </Grid>
          </Column>
        </RevealFx>
        <RevealFx delay={0.5}>
          <Column gap="l">
            <Heading as="h2" variant="display-default-m" align="center">
              Моят Процес в 4 Етапа с AI Подкрепа
            </Heading>
            <Timeline
              items={[
                {
                  title: "Планиране с AI Анализ",
                  description: "Анализирам вашите нужди, целева аудитория и бизнес цели с AI инструменти. Изграждам структура и план за съдържанието.",
                  icon: <FaUsers size={24} color="var(--brand-strong)" />,
                  connector: true
                },
                {
                  title: "Дизайн с AI Генерация",
                  description: "Създавам модерен дизайн с фокус върху потребителското изживяване и конверсията, подпомогнат от AI.",
                  icon: <FaPalette size={24} color="var(--success-strong)" />,
                  connector: true
                },
                {
                  title: "Разработка с Meta-Frameworks",
                  description: "Програмирам сайта с React, Next.js и Tailwind CSS. Интегрирам SEO, AI и функционалности.",
                  icon: <FaCode size={24} color="var(--warning-strong)" />,
                  connector: true
                },
                {
                  title: "Тестване и Оптимизация",
                  description: "Тествам всички функционалности, скоростта и съвместимостта. Оптимизирам за Google, AI и мобилни устройства.",
                  icon: <FaCheckCircle size={24} color="var(--info-strong)" />,
                  connector: false
                }
              ]}
            />
          </Column>
        </RevealFx>
        <RevealFx delay={0.6}>
          <Column gap="l">
            <Heading as="h3" variant="display-default-m" align="center">
              Пакети и Цени за Изработка на Сайт през 2026
            </Heading>
            <Carousel
              items={[
                <Card
                  padding="l"
                  border="neutral-alpha-medium"
                  radius="l"
                  style={{ minWidth: "300px" }}
                >
                  <Column gap="m" align="center">
                    <FaGlobe size={32} color="var(--brand-strong)" />
                    <Heading as="h4" variant="heading-strong-l" align="center">
                      Лендинг Страница
                    </Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                      Една лендинг страница за промоции или услуги с AI
                    </Text>
                    <Text variant="display-strong-l" align="center" onBackground="brand-strong">
                      900 лв.
                    </Text>
                    <Column gap="s" fillWidth>
                      {["Модерен дизайн с AI", "SEO и AI оптимизация", "Мобилна съвместимост", "Контактна форма", "Социални мрежи интеграция"].map((feature, i) => (
                        <Flex key={i} gap="s" vertical="center">
                          <FaCheckCircle size={16} color="var(--brand-strong)" />
                          <Text variant="body-default-s">{feature}</Text>
                        </Flex>
                      ))}
                    </Column>
                    <Button
                      variant="secondary"
                      size="m"
                      href="/kontakti"
                      fillWidth
                    >
                      Избери Този Пакет
                    </Button>
                  </Column>
                </Card>,
                <Card
                  padding="l"
                  border="brand-alpha-medium"
                  radius="l"
                  style={{ minWidth: "300px", background: "brand-alpha-weak", transform: "scale(1.05)" }}
                >
                  <Badge style={{ position: "absolute", top: "-8px", right: "16px" }}>Популярен през 2026</Badge>
                  <Column gap="m" align="center">
                    <FaLaptop size={32} color="var(--brand-strong)" />
                    <Heading as="h4" variant="heading-strong-l" align="center">
                      Корпоративен Сайт
                    </Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                      Стандартен корпоративен сайт с CMS и AI
                    </Text>
                    <Text variant="display-strong-l" align="center" onBackground="brand-strong">
                      1800 лв.
                    </Text>
                    <Column gap="s" fillWidth>
                      {["До 5 страници", "Административен панел", "SEO и AI оптимизация", "Контактна форма", "Блог секция с AI генериране"].map((feature, i) => (
                        <Flex key={i} gap="s" vertical="center">
                          <FaCheckCircle size={16} color="var(--brand-strong)" />
                          <Text variant="body-default-s">{feature}</Text>
                        </Flex>
                      ))}
                    </Column>
                    <Button
                      variant="primary"
                      size="m"
                      href="/kontakti"
                      fillWidth
                    >
                      Избери Този Пакет Сега
                    </Button>
                  </Column>
                </Card>
              ]}
            />
          </Column>
        </RevealFx>
        <RevealFx delay={0.7}>
          <Column gap="l">
            <Heading as="h3" variant="display-default-m" align="center">
              Често Задавани Въпроси за Изработка на Сайт през 2026
            </Heading>
            <AccordionGroup
              items={[
                {
                  title: "Колко време отнема изработката на един сайт от Stanchev Digital през 2026?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Времето за изработка зависи от сложността на проекта. Лендинг страница се прави за 1-2 седмици,
                      докато корпоративен сайт с множество страници може да отнеме 3-4 седмици. Включвам време за
                      планиране, дизайн с AI, разработка, тестване и пускане в експлоатация.
                    </Text>
                  ),
                },
                {
                  title: "Какви технологии използвате в Stanchev Digital при изработката на сайтове през 2026?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Работя с най-модерните технологии: React, Next.js, TypeScript, Tailwind CSS и AI инструменти за автоматизация.
                      Използвам също Node.js, PostgreSQL, MongoDB в зависимост от нуждите на проекта. Всички сайтове са оптимизирани
                      за SEO, AI търсачки и имат отлични Core Web Vitals резултати.
                    </Text>
                  ),
                },
                {
                  title: "Включвате ли SEO и AI оптимизация в цената на изработката в Stanchev Digital?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Да, всички мои сайтове включват основна SEO и AI оптимизация: мета тагове, правилна структура на
                      заглавията, schema markup, sitemap, robots.txt, AI-friendly съдържание и Core Web Vitals оптимизация. Това е част от
                      стандартния пакет и не се заплаща допълнително.
                    </Text>
                  ),
                },
                {
                  title: "Предоставяте ли поддръжка след пускането на сайта?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Да, предлагам различни пакети за поддръжка - от месечна поддръжка с актуализации и бекъп, до
                      пълноценна поддръжка включваща добавени функционалности и AI ъпгрейди. Също така осигурявам обучение за
                      управление на съдържанието и техническа документация.
                    </Text>
                  ),
                },
                {
                  title: "Могат ли да се правят промени по сайта след завършването?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Разбира се! Всички мои сайтове са изградени с модерни технологии, които позволяват лесни
                      промени и надграждания. Предлагам поддръжка за промени в съдържанието, дизайна и функционалността.
                      Цените зависят от сложността на промените.
                    </Text>
                  ),
                },
                {
                  title: "Работите ли с малки и средни бизнеси в Stanchev Digital?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Да, специализирам се в работа с малки и средни бизнеси, стартъпи и лични брандове. Предлагам
                      персонализиран подход и разбирам ограниченията в бюджета. Работя директно с собствениците на
                      бизнеси без посредници, което позволява по-бърза комуникация и по-добри цени.
                    </Text>
                  ),
                },
                {
                  title: "Как AI подобрява сайтовете ви през 2026?",
                  content: (
                    <Text onBackground="neutral-weak">
                      AI се използва за персонализация на съдържанието, автоматизирани чатботове, генериране на изображения и оптимизация за AI търсачки като ChatGPT. Това увеличава ангажираността и конверсиите с до 30%.
                    </Text>
                  ),
                },
                {
                  title: "Какво е E-E-A-T и защо е важно за моят сайт?",
                  content: (
                    <Text onBackground="neutral-weak">
                      E-E-A-T означава Experience, Expertise, Authoritativeness, Trustworthiness. Google го използва за оценка на качеството. Включвам го чрез author bios, testimonials и качествено съдържание за по-добро ранкиране.
                    </Text>
                  ),
                },
              ]}
            />
          </Column>
        </RevealFx>
        <RevealFx delay={0.8}>
          <Column gap="l">
            <Heading as="h3" variant="display-default-m" align="center">
              Статистики за Растеж от Клиенти
            </Heading>
            <Card padding="xl" radius="xl" style={{ maxWidth: "900px", margin: "0 auto" }}>
              <LineBarChart
                title="Ръст в Трафика и Конверсиите след Изработка на Сайт (2025-2026)"
                axis="both"
                date={{
                  format: "MMM yyyy",
                  start: new Date("2025-01-01"),
                  end: new Date("2026-02-01"),
                  selector: false,
                  presets: { display: true, granularity: "month" },
                  dual: true
                }}
                series={[
                  { key: "Трафик", color: "blue" },
                  { key: "Конверсии", color: "green" },
                ]}
                data={[
                  { date: new Date("2025-01-01"), "Трафик": 1000, "Конверсии": 50 },
                  { date: new Date("2025-02-01"), "Трафик": 1500, "Конверсии": 70 },
                  { date: new Date("2025-03-01"), "Трафик": 2000, "Конверсии": 100 },
                  { date: new Date("2025-04-01"), "Трафик": 3000, "Конверсии": 150 },
                  { date: new Date("2025-05-01"), "Трафик": 4500, "Конверсии": 220 },
                  { date: new Date("2025-06-01"), "Трафик": 6000, "Конверсии": 300 },
                  { date: new Date("2025-07-01"), "Трафик": 8000, "Конверсии": 400 },
                  { date: new Date("2025-08-01"), "Трафик": 10000, "Конверсии": 500 },
                  { date: new Date("2025-09-01"), "Трафик": 12000, "Конверсии": 600 },
                  { date: new Date("2025-10-01"), "Трафик": 15000, "Конверсии": 750 },
                  { date: new Date("2025-11-01"), "Трафик": 18000, "Конверсии": 900 },
                  { date: new Date("2025-12-01"), "Трафик": 20000, "Конверсии": 1000 },
                  { date: new Date("2026-01-01"), "Трафик": 25000, "Конверсии": 1250 },
                  { date: new Date("2026-02-01"), "Трафик": 30000, "Конверсии": 1500 }
                ]}
              />
            </Card>
          </Column>
        </RevealFx>
        <RevealFx delay={0.9}>
          <Column gap="l">
            <Heading as="h3" variant="display-default-m" align="center">
              Отзиви от Клиенти
            </Heading>
            <Carousel
              items={[
                <Card padding="l" radius="l" style={{ minWidth: "300px" }}>
                  <Column gap="m" align="center">
                    <FaStar size={32} color="var(--brand-strong)" />
                    <Text variant="body-default-l" align="center">"Отлична изработка – бързо и с AI! Препоръчвам."</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak" align="center">- Клиент 1</Text>
                  </Column>
                </Card>,
                <Card padding="l" radius="l" style={{ minWidth: "300px" }}>
                  <Column gap="m" align="center">
                    <FaStar size={32} color="var(--brand-strong)" />
                    <Text variant="body-default-l" align="center">"Професионален подход, сайтът ни е супер бърз."</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak" align="center">- Клиент 2</Text>
                  </Column>
                </Card>,
                <Card padding="l" radius="l" style={{ minWidth: "300px" }}>
                  <Column gap="m" align="center">
                    <FaStar size={32} color="var(--brand-strong)" />
                    <Text variant="body-default-l" align="center">"AI интеграциите промениха бизнеса ни."</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak" align="center">- Клиент 3</Text>
                  </Column>
                </Card>
              ]}
            />
          </Column>
        </RevealFx>
        <RevealFx delay={1.0}>
          <Column gap="l" align="center" paddingTop="xl">
            <CelebrationFx>
              <Heading as="h4" variant="display-strong-m" align="center">
                Готови ли Сте за Професионален Сайт с AI за Вашия Бизнес през 2026?
              </Heading>
            </CelebrationFx>
            <Grid columns={3} s={{ columns: 1 }} gap="l" fillWidth>
              {[
                { icon: FaClock, title: "Бърза Изработка", desc: "1-4 седмици" },
                { icon: FaShieldAlt, title: "Гарантирано Качество", desc: "100% тестване с AI" },
                { icon: FaStar, title: "SEO и AI Готов", desc: "Оптимизиран за Google и AI" }
              ].map((stat, index) => (
                <Card key={stat.title} padding="l" border="neutral-alpha-medium" radius="l" align="center">
                  <Column gap="s" align="center">
                    <stat.icon size={24} color="var(--brand-strong)" />
                    <Heading as="h5" variant="heading-strong-s" align="center">
                      {stat.title}
                    </Heading>
                    <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                      {stat.desc}
                    </Text>
                  </Column>
                </Card>
              ))}
            </Grid>
            <Flex gap="m" wrap horizontal="center">
              <Button
                variant="primary"
                size="l"
                href="/kontakti"
              >
                <Flex gap="s" vertical="center">
                  <FaRocket size={16} />
                  <Text>Свържете се с Мен Сега</Text>
                </Flex>
              </Button>
              <Button
                variant="secondary"
                size="l"
                href="/kontakti"
              >
                <Flex gap="s" vertical="center">
                  <FaUsers size={16} />
                  <Text>Безплатна Консултация за 2026</Text>
                </Flex>
              </Button>
            </Flex>
          </Column>
        </RevealFx>
      </Column>
    </>
  );
}
