import React from "react";
import {
  Column,
  Row,
  Heading,
  Text,
  Button,
  Card,
  RevealFx,
  Badge,
  Flex,
  Avatar,
  Grid,
  Icon,
  AccordionGroup,
  LineBarChart,
  PieChart,
  BarChart,
} from "@once-ui-system/core";
import { person, baseURL } from "@/resources";
import type { Metadata } from "next";
import Script from "next/script";
import { 
  FaCode, 
  FaMobile, 
  FaRocket, 
  FaWordpress, 
  FaCogs, 
  FaSearch, 
  FaShieldAlt, 
  FaClock, 
  FaCheckCircle,
  FaLaptop,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaBolt,
  FaEnvelope,
  FaPhone,
  FaMoneyBillWave,
} from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Уеб разработка и дизайн | Модерни Next.js сайтове | Stanchev Digital",
  description: "Професионални услуги за уеб разработка в България. Създавам модерни, бързи Next.js сайтове с отлично SEO. От 1200 лв. Core Web Vitals оптимизация, 3x по-бързо от WordPress.",
  keywords: "уеб разработка, Next.js сайт, React разработчик, SEO оптимизация, Core Web Vitals, модерен дизайн, респонсивен дизайн, WordPress алтернатива, бърз сайт България",
  alternates: {
    canonical: `${baseURL}/web`,
  },
  openGraph: {
    title: "Уеб разработка и дизайн | Модерни Next.js сайтове | Stanchev Digital",
    description: "Професионални услуги за уеб разработка в България. Модерни Next.js сайтове с отлично SEO, 3x по-бързи от WordPress.",
    url: `${baseURL}/web`,
    siteName: "Stanchev Digital",
    images: [
      {
        url: `${baseURL}/images/og/web-services.jpg`,
        width: 1200,
        height: 630,
        alt: "Stanchev Digital - Уеб Разработка",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Уеб разработка и дизайн | Модерни Next.js сайтове",
    description: "Професионални Next.js сайтове - 3x по-бързи от WordPress, с отлично SEO",
    images: [`${baseURL}/images/og/web-services.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const primaryColor = "#005b96"; // Тъмно синьо

export default function WebPage() {
  return (
    <>
      {/* ============================================ */}
      {/* ЗВЕРСКО SEO - EXTENSIVE RICH SCHEMA */}
      {/* ============================================ */}

      {/* 1. Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Stanchev Digital",
            url: baseURL,
            logo: `${baseURL}/images/logo.png`,
            description: "Професионални Next.js и уеб разработка услуги в България. Специализирани в създаване на бързи, SEO оптимизирани сайтове.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "BG",
              addressLocality: "София",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+359-877-038-729",
              contactType: "Sales",
              email: "seo@stanchev.bg",
              areaServed: "BG",
              availableLanguage: ["Bulgarian", "English"],
            },
            founder: {
              "@type": "Person",
              name: "Stanchev",
            },
            sameAs: [
              "https://www.linkedin.com/in/stantcheff/",
              "https://github.com/stantchev/"
            ],
          }),
        }}
      />

      {/* 2. Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Уеб разработка и дизайн услуги",
            description: "Професионални услуги за уеб разработка с Next.js, React и SEO оптимизация. Създавам модерни сайтове, които се зареждат 3x по-бързо от WordPress.",
            provider: {
              "@type": "Organization",
              name: "Stanchev Digital",
              url: baseURL,
            },
            areaServed: {
              "@type": "Country",
              name: "България",
            },
            serviceType: [
              "Next.js разработка",
              "React разработка",
              "Уеб дизайн", 
              "SEO оптимизация",
              "Core Web Vitals оптимизация",
              "WordPress плъгини",
              "OpenCart модули",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Уеб разработка услуги",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Next.js бизнес сайт",
                    description: "Модерен Next.js сайт - 3x по-бърз от WordPress, отлично SEO",
                  },
                  priceCurrency: "BGN",
                  price: "1200",
                },
                {
                  "@type": "Offer", 
                  itemOffered: {
                    "@type": "Service",
                    name: "Изработка на лендинг страница",
                    description: "Професионална лендинг страница с React/Next.js и SEO",
                  },
                  priceCurrency: "BGN",
                  price: "800",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service", 
                    name: "SEO оптимизация на сайт",
                    description: "Техническа SEO, schema markup, Core Web Vitals оптимизация",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "WordPress/OpenCart плъгини", 
                    description: "Custom плъгини за специфични бизнес нужди",
                  },
                },
              ]
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "12",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />

      {/* 3. FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Колко време отнема изработката на един уебсайт?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Лендинг страница се прави за 1-2 седмици, пълноценен уебсайт - 3-6 седмици. Включва планиране, дизайн, разработка, тестване и пускане.",
                },
              },
              {
                "@type": "Question",
                name: "Какви технологии използвате при уеб разработката?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "React, Next.js, TypeScript, Tailwind CSS, Node.js. Всички сайтове са оптимизирани за SEO с отлични Core Web Vitals резултати.",
                },
              },
              {
                "@type": "Question",
                name: "Колко струва изработката на уебсайт?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Лендинг страница от 800-1500 лв, корпоративен сайт 2000-5000 лв. Next.js сайт от 1200 лв. Безплатна консултация и конкретна оферта.",
                },
              },
              {
                "@type": "Question",
                name: "Предоставяте ли поддръжка след пускането?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Да, предлагам месечна поддръжка с актуализации, бекъп и техническа помощ. Осигурявам обучение за управление на съдържанието.",
                },
              },
            ],
          }),
        }}
      />

      {/* 4. BreadcrumbList Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Начало",
                item: baseURL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Уеб Услуги",
                item: `${baseURL}/web`,
              },
            ],
          }),
        }}
      />

      {/* 5. Review Schema */}
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "Service",
                name: "Next.js Разработка",
              },
              author: {
                "@type": "Person",
                name: "Петър М.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody: "Отличен Next.js сайт - много по-бърз от предишния WordPress. Google класирането се подобри драстично.",
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "Service",
                name: "Уеб Разработка",
              },
              author: {
                "@type": "Person",
                name: "Мария С.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody: "Професионална работа и отлична комуникация. Сайтът е бърз, красив и с перфектно SEO.",
            },
          ]),
        }}
      />

      {/* Main Content */}
      <Column 
        as="section" 
        fillWidth 
        padding="l"
        style={{ 
          width: "100%", 
          maxWidth: "100vw", 
          overflow: "hidden",
        }}
      >
        <Column fillWidth style={{ maxWidth: "80rem", margin: "0 auto" }} gap="xl">

          {/* HERO SECTION */}
          <Column fillWidth gap="xl" align="center" paddingBottom="xl">
            <RevealFx speed="fast">
              <Column fillWidth gap="l" align="center">
                <Heading
                  wrap="balance"
                  variant="display-strong-xl"
                  align="center"
                  style={{ lineHeight: "1.2" }}
                >
                  Модерни, бързи и SEO-оптимизирани уебсайтове
                </Heading>
                <Text
                  wrap="balance"
                  onBackground="neutral-weak"
                  align="center"
                  variant="display-default-s"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Всеки проект е бърз, адаптивен и оптимизиран за по-добро класиране в Google — 
                  защото впечатлението онлайн започва със скоростта и стила.
                </Text>
              </Column>
            </RevealFx>

            <RevealFx delay={0.2} speed="fast">
              <Flex fillWidth gap="m" horizontal="center" vertical="center" wrap>
                <Button
                  href="/seo-proekti"
                  variant="primary"
                  size="l"
                  prefixIcon="eye"
                  style={{ backgroundColor: primaryColor }}
                >
                  Виж проекти
                </Button>
                <Button
                  href="/kontakti"
                  variant="secondary"
                  size="l"
                  prefixIcon="message-circle"
                >
                  Изпрати запитване
                </Button>
              </Flex>
            </RevealFx>

            {/* Quick Stats */}
            <RevealFx delay={0.3}>
              <Flex fillWidth gap="12" wrap horizontal="center" paddingTop="m">
                <Flex gap="4" align="center">
                  <FaBolt color={primaryColor} size={20} />
                  <Text onBackground="neutral-weak">&lt;1s зареждане</Text>
                </Flex>
                <Flex gap="4" align="center">
                  <FaSearch color={primaryColor} size={20} />
                  <Text onBackground="neutral-weak">100/100 SEO score</Text>
                </Flex>
                <Flex gap="4" align="center">
                  <FaCheckCircle color={primaryColor} size={20} />
                  <Text onBackground="neutral-weak">12+ завършени проекта</Text>
                </Flex>
              </Flex>
            </RevealFx>
          </Column>

          {/* TECHNOLOGY COMPARISON SECTION */}
          <Column fillWidth gap="xl" align="center" paddingY="s">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Heading variant="display-strong-m" align="center">
                  Кой тип сайт е подходящ за теб?
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Сравнение на технологиите - Next.js, React, WordPress и Headless WordPress. 
                  Всяка има предимства в зависимост от твоите нужди и цели.
                </Text>
              </Column>
            </RevealFx>

            <RevealFx delay={0.1}>
              <Card fillWidth padding="xl" radius="xl" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <Column fillWidth gap="l">
                  <Heading variant="heading-strong-l" align="center">
                    Сравнение на технологиите
                  </Heading>

                  {/* Comparison Table */}
                  <Grid fillWidth columns={5} s={{ columns: 1 }} gap="m">
                    {/* Header Row */}
                    <Column gap="4">
                      <Text variant="heading-strong-s">Характеристика</Text>
                    </Column>
                    <Column gap="4" align="center">
                      <RiNextjsFill size={24} color={primaryColor} />
                      <Text variant="heading-strong-s" align="center">Next.js</Text>
                    </Column>
                    <Column gap="4" align="center">
                      <FaCode size={24} color={primaryColor} />
                      <Text variant="heading-strong-s" align="center">React SPA</Text>
                    </Column>
                    <Column gap="4" align="center">
                      <FaWordpress size={24} color={primaryColor} />
                      <Text variant="heading-strong-s" align="center">WordPress</Text>
                    </Column>
                    <Column gap="4" align="center">
                      <FaRocket size={24} color={primaryColor} />
                      <Text variant="heading-strong-s" align="center">Headless WP</Text>
                    </Column>

                    {/* Speed Row */}
                    <Text variant="body-default-s" onBackground="neutral-weak">Скорост</Text>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaCheckCircle color="#22c55e" size={16} />
                      <Text variant="body-default-s" align="center">Отлична (0.8s)</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaCheckCircle color="#fbbf24" size={16} />
                      <Text variant="body-default-s" align="center">Добра (1.5s)</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaCheckCircle color="#ef4444" size={16} />
                      <Text variant="body-default-s" align="center">Бавна (3.4s)</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaCheckCircle color="#22c55e" size={16} />
                      <Text variant="body-default-s" align="center">Отлична (1.0s)</Text>
                    </Flex>

                    {/* SEO Row */}
                    <Text variant="body-default-s" onBackground="neutral-weak">SEO</Text>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaCheckCircle color="#22c55e" size={16} />
                      <Text variant="body-default-s" align="center">Отлично (SSR)</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaCheckCircle color="#fbbf24" size={16} />
                      <Text variant="body-default-s" align="center">Средно (CSR)</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaCheckCircle color="#22c55e" size={16} />
                      <Text variant="body-default-s" align="center">Добро</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaCheckCircle color="#22c55e" size={16} />
                      <Text variant="body-default-s" align="center">Отлично</Text>
                    </Flex>

                    {/* Security Row */}
                    <Text variant="body-default-s" onBackground="neutral-weak">Сигурност</Text>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaShieldAlt color="#22c55e" size={16} />
                      <Text variant="body-default-s" align="center">Отлична</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaShieldAlt color="#22c55e" size={16} />
                      <Text variant="body-default-s" align="center">Отлична</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaShieldAlt color="#ef4444" size={16} />
                      <Text variant="body-default-s" align="center">Рискове</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaShieldAlt color="#22c55e" size={16} />
                      <Text variant="body-default-s" align="center">Добра</Text>
                    </Flex>

                    {/* Cost Row */}
                    <Text variant="body-default-s" onBackground="neutral-weak">Месечни разходи</Text>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaMoneyBillWave color="#22c55e" size={16} />
                      <Text variant="body-default-s" align="center">€0-10</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaMoneyBillWave color="#22c55e" size={16} />
                      <Text variant="body-default-s" align="center">€0-10</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaMoneyBillWave color="#ef4444" size={16} />
                      <Text variant="body-default-s" align="center">€30-50</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaMoneyBillWave color="#fbbf24" size={16} />
                      <Text variant="body-default-s" align="center">€10-20</Text>
                    </Flex>

                    {/* Maintenance Row */}
                    <Text variant="body-default-s" onBackground="neutral-weak">Поддръжка</Text>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaClock color="#22c55e" size={16} />
                      <Text variant="body-default-s" align="center">Минимална</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaClock color="#22c55e" size={16} />
                      <Text variant="body-default-s" align="center">Минимална</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaClock color="#ef4444" size={16} />
                      <Text variant="body-default-s" align="center">Много</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <FaClock color="#fbbf24" size={16} />
                      <Text variant="body-default-s" align="center">Средна</Text>
                    </Flex>

                    {/* Content Management Row */}
                    <Text variant="body-default-s" onBackground="neutral-weak">Управление</Text>
                    <Flex gap="4" align="center" horizontal="center">
                      <Text variant="body-default-s" align="center">CMS/Code</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <Text variant="body-default-s" align="center">Само код</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <Text variant="body-default-s" align="center">WP Admin</Text>
                    </Flex>
                    <Flex gap="4" align="center" horizontal="center">
                      <Text variant="body-default-s" align="center">WP Admin</Text>
                    </Flex>

                    {/* Best For Row */}
                    <Text variant="body-default-s" onBackground="neutral-weak">Подходящ за</Text>
                    <Text variant="body-default-s" align="center">Бизнес сайтове, SaaS</Text>
                    <Text variant="body-default-s" align="center">Web apps, Dashboards</Text>
                    <Text variant="body-default-s" align="center">Блогове, Прости сайтове</Text>
                    <Text variant="body-default-s" align="center">Сложни сайтове с CMS</Text>
                  </Grid>

                  {/* Recommendation */}
                  <Card fillWidth padding="m" radius="l" style={{ background: `${primaryColor}10`, border: `2px solid ${primaryColor}30` }}>
                    <Column fillWidth gap="s" align="center">
                      <Text variant="heading-strong-m" align="center" style={{ color: primaryColor }}>
                        💡 Моята препоръка
                      </Text>
                      <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                        <strong>Next.js</strong> за бизнес сайтове и лендинг страници (най-добро SEO + скорост)
                      </Text>
                      <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                        <strong>React SPA</strong> за сложни web приложения и dashboards
                      </Text>
                      <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                        <strong>Headless WordPress</strong> за сайтове с много съдържание + екип редактори
                      </Text>
                      <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                        <strong>WordPress</strong> само ако имаш много специфични WP плъгини, които са критични
                      </Text>
                    </Column>
                  </Card>
                </Column>
              </Card>
            </RevealFx>
          </Column>

          {/* SERVICES SECTION */}
          <Column fillWidth gap="l" align="center" paddingY="s">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Heading variant="display-strong-m" align="center">
                  Какво получаваш
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Професионални уеб услуги за модерни бизнеси - от изработка на Next.js сайтове 
                  до SEO оптимизация и поддръжка. Всеки проект е бърз, сигурен и оптимизиран за конверсия.
                </Text>
              </Column>
            </RevealFx>

            <Grid fillWidth columns={4} s={{ columns: 1 }} gap="l">
              
              {/* Next.js Service Card */}
              <RevealFx delay={0}>
                <Card
                  fillWidth
                  radius="l"
                  direction="column"
                  style={{
                    border: `2px solid ${primaryColor}30`,
                    gap: 0,
                  }}
                >
                  <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                    <RiNextjsFill size={20} color={primaryColor} />
                    <Text variant="label-default-s" wrap="balance">
                      Next.js Бизнес Сайт
                    </Text>
                  </Row>

                  <div
                    style={{
                      width: "100%",
                      height: "192px",
                      background: `linear-gradient(135deg, ${primaryColor}10, ${primaryColor}20)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTop: "1px solid var(--neutral-alpha-weak)",
                      borderBottom: "1px solid var(--neutral-alpha-weak)"
                    }}
                  >
                    <RiNextjsFill size={48} color={primaryColor} />
                  </div>

                  <Column fillWidth paddingX="m" paddingY="l" gap="s">
                    <Text variant="body-default-xl" wrap="balance" align="center">
                      Next.js сайт за бизнес клиенти
                    </Text>
                    <Text
                      onBackground="neutral-weak"
                      variant="body-default-s"
                      wrap="balance"
                      align="center"
                    >
                      Модерен, SEO оптимизиран и до 3x по-бърз от WordPress. 
                      По-добро класиране в Google и по-висока конверсия.
                    </Text>
                    <Column gap="4" align="center" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">&lt;1s зареждане</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">100/100 SEO performance</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">€0 месечни плъгини</Text>
                      </Flex>
                    </Column>
                  </Column>

                  <Column paddingX="m" paddingBottom="m" align="center">
                    <Button
                      href="/web/izrabotka-sait-nextjs"
                      variant="primary"
                      size="m"
                      prefixIcon="rocket"
                      style={{ backgroundColor: primaryColor }}
                      fillWidth
                    >
                      Виж повече
                    </Button>
                  </Column>
                </Card>
              </RevealFx>

              {/* React SPA Service Card */}
              <RevealFx delay={0.1}>
                <Card
                  fillWidth
                  radius="l"
                  direction="column"
                  style={{
                    border: `1px solid var(--neutral-alpha-medium)`,
                    gap: 0,
                  }}
                >
                  <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                    <FaCode size={20} color={primaryColor} />
                    <Text variant="label-default-s" wrap="balance">
                      React SPA Приложение
                    </Text>
                  </Row>

                  <div
                    style={{
                      width: "100%",
                      height: "192px",
                      background: `linear-gradient(135deg, ${primaryColor}08, ${primaryColor}15)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTop: "1px solid var(--neutral-alpha-weak)",
                      borderBottom: "1px solid var(--neutral-alpha-weak)"
                    }}
                  >
                    <FaCode size={48} color={primaryColor} />
                  </div>

                  <Column fillWidth paddingX="m" paddingY="l" gap="s">
                    <Text variant="body-default-xl" wrap="balance" align="center">
                      React Single Page Application
                    </Text>
                    <Text
                      onBackground="neutral-weak"
                      variant="body-default-s"
                      wrap="balance"
                      align="center"
                    >
                      Интерактивни web приложения, dashboards и admin панели. 
                      Динамична функционалност и отлично потребителско изживяване.
                    </Text>
                    <Column gap="4" align="center" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Комплексност</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Real-time updates</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">API интеграции</Text>
                      </Flex>
                    </Column>
                  </Column>

                  <Column paddingX="m" paddingBottom="m" align="center">
                    <Button
                      href="/web/react-spa"
                      variant="primary"
                      size="m"
                      prefixIcon="rocket"
                      style={{ backgroundColor: primaryColor }}
                      fillWidth
                    >
                      Виж повече
                    </Button>
                  </Column>
                </Card>
              </RevealFx>

              {/* Headless WordPress Service Card */}
              <RevealFx delay={0.2}>
                <Card
                  fillWidth
                  radius="l"
                  direction="column"
                  style={{
                    border: `1px solid var(--neutral-alpha-medium)`,
                    gap: 0,
                  }}
                >
                  <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                    <FaRocket size={20} color={primaryColor} />
                    <Text variant="label-default-s" wrap="balance">
                      Headless WordPress
                    </Text>
                  </Row>

                  <div
                    style={{
                      width: "100%",
                      height: "192px",
                      background: `linear-gradient(135deg, ${primaryColor}08, ${primaryColor}15)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTop: "1px solid var(--neutral-alpha-weak)",
                      borderBottom: "1px solid var(--neutral-alpha-weak)"
                    }}
                  >
                    <Flex gap="8" align="center">
                      <FaWordpress size={32} color={primaryColor} />
                      <Text variant="display-strong-l" style={{ color: primaryColor }}>+</Text>
                      <FaCode size={32} color={primaryColor} />
                    </Flex>
                  </div>

                  <Column fillWidth paddingX="m" paddingY="l" gap="s">
                    <Text variant="body-default-xl" wrap="balance" align="center">
                      Headless WordPress + React/Next.js
                    </Text>
                    <Text
                      onBackground="neutral-weak"
                      variant="body-default-s"
                      wrap="balance"
                      align="center"
                    >
                      Най-доброто от двата свята - WordPress CMS за управление + 
                      модерен frontend за скорост и UX. Идеален за сайтове с много съдържание.
                    </Text>
                    <Column gap="4" align="center" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">WordPress управление</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">React/Next.js frontend</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Отлично SEO + скорост</Text>
                      </Flex>
                    </Column>
                  </Column>

                  <Column paddingX="m" paddingBottom="m" align="center">
                    <Button
                      href="/web/headless-wordpress-sait"
                      variant="primary"
                      size="m"
                      prefixIcon="rocket"
                      style={{ backgroundColor: primaryColor }}
                      fillWidth
                    >
                      Виж повече
                    </Button>
                  </Column>
                </Card>
              </RevealFx>

              {/* Landing Page Service */}
              <RevealFx delay={0.3}>
                <Card 
                  fillWidth
                  radius="l" 
                  direction="column"
                  style={{ border: "1px solid var(--neutral-alpha-medium)", gap: 0 }}
                >
                  <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                    <FaLaptop size={20} color={primaryColor} />
                    <Text variant="label-default-s">Лендинг страница</Text>
                  </Row>
                  
                  <div
                    style={{
                      width: "100%",
                      height: "192px",
                      background: `linear-gradient(135deg, ${primaryColor}08, ${primaryColor}15)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTop: "1px solid var(--neutral-alpha-weak)",
                      borderBottom: "1px solid var(--neutral-alpha-weak)"
                    }}
                  >
                    <FaLaptop size={40} color={primaryColor} />
                  </div>
                  
                  <Column fillWidth paddingX="m" paddingY="l" gap="s">
                    <Text variant="body-default-xl" wrap="balance" align="center">
                      Изработка на лендинг страница
                    </Text>
                    <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                      Изчистен, модерен дизайн с фокус върху потребителското изживяване и конверсия.
                    </Text>
                    <Column gap="4" align="center" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">React, Next.js, Tailwind</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">SEO оптимизация</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Responsive дизайн</Text>
                      </Flex>
                    </Column>
                  </Column>
                  
                  <Column paddingX="m" paddingBottom="m" align="center">
                    <Button
                      href="/web/izrabotka-sajt"
                      variant="primary"
                      size="m"
                      prefixIcon="rocket"
                      style={{ backgroundColor: primaryColor }}
                      fillWidth
                    >
                      Виж повече
                    </Button>
                  </Column>
                </Card>
              </RevealFx>

              {/* SEO Service */}
              <RevealFx delay={0.4}>
                <Card 
                  fillWidth
                  radius="l" 
                  direction="column"
                  style={{ border: "1px solid var(--neutral-alpha-medium)", gap: 0 }}
                >
                  <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                    <FaSearch size={20} color={primaryColor} />
                    <Text variant="label-default-s">SEO интеграция</Text>
                  </Row>
                  
                  <div
                    style={{
                      width: "100%",
                      height: "192px",
                      background: `linear-gradient(135deg, ${primaryColor}08, ${primaryColor}15)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTop: "1px solid var(--neutral-alpha-weak)",
                      borderBottom: "1px solid var(--neutral-alpha-weak)"
                    }}
                  >
                    <FaSearch size={40} color={primaryColor} />
                  </div>
                  
                  <Column fillWidth paddingX="m" paddingY="l" gap="s">
                    <Text variant="body-default-xl" wrap="balance" align="center">
                      SEO оптимизация
                    </Text>
                    <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                      Техническа SEO, schema markup, Core Web Vitals и Google Search Console.
                    </Text>
                    <Column gap="4" align="center" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Schema markup</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Core Web Vitals</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Google Search Console</Text>
                      </Flex>
                    </Column>
                  </Column>
                  
                  <Column paddingX="m" paddingBottom="m" align="center">
                    <Button
                      href="/web/seo-integratsiya"
                      variant="primary"
                      size="m"
                      prefixIcon="rocket"
                      style={{ backgroundColor: primaryColor }}
                      fillWidth
                    >
                      Виж повече
                    </Button>
                  </Column>
                </Card>
              </RevealFx>

              {/* WordPress Plugins */}
              <RevealFx delay={0.5}>
                <Card 
                  fillWidth
                  radius="l" 
                  direction="column"
                  style={{ border: "1px solid var(--neutral-alpha-medium)", gap: 0 }}
                >
                  <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                    <FaCode size={20} color={primaryColor} />
                    <Text variant="label-default-s">Custom плъгини</Text>
                  </Row>
                  
                  <div
                    style={{
                      width: "100%",
                      height: "192px",
                      background: `linear-gradient(135deg, ${primaryColor}08, ${primaryColor}15)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTop: "1px solid var(--neutral-alpha-weak)",
                      borderBottom: "1px solid var(--neutral-alpha-weak)"
                    }}
                  >
                    <FaWordpress size={40} color={primaryColor} />
                  </div>
                  
                  <Column fillWidth paddingX="m" paddingY="l" gap="s">
                    <Text variant="body-default-xl" wrap="balance" align="center">
                      WordPress & OpenCart плъгини
                    </Text>
                    <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                      Персонализирани плъгини и модули за конкретни бизнес нужди.
                    </Text>
                    <Column gap="4" align="center" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">WordPress плъгини</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">OpenCart модули</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">WooCommerce</Text>
                      </Flex>
                    </Column>
                  </Column>
                  
                  <Column paddingX="m" paddingBottom="m" align="center">
                    <Button
                      href="/web/custom-plagini"
                      variant="primary"
                      size="m"
                      prefixIcon="rocket"
                      style={{ backgroundColor: primaryColor }}
                      fillWidth
                    >
                      Виж повече
                    </Button>
                  </Column>
                </Card>
              </RevealFx>

              {/* Maintenance Service */}
              <RevealFx delay={0.6}>
                <Card 
                  fillWidth
                  radius="l" 
                  direction="column"
                  style={{ border: "1px solid var(--neutral-alpha-medium)", gap: 0 }}
                >
                  <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                    <FaCogs size={20} color={primaryColor} />
                    <Text variant="label-default-s">Поддръжка</Text>
                  </Row>
                  
                  <div
                    style={{
                      width: "100%",
                      height: "192px",
                      background: `linear-gradient(135deg, ${primaryColor}08, ${primaryColor}15)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTop: "1px solid var(--neutral-alpha-weak)",
                      borderBottom: "1px solid var(--neutral-alpha-weak)"
                    }}
                  >
                    <FaCogs size={40} color={primaryColor} />
                  </div>
                  
                  <Column fillWidth paddingX="m" paddingY="l" gap="s">
                    <Text variant="body-default-xl" wrap="balance" align="center">
                      Поддръжка и надграждане
                    </Text>
                    <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                      Месечна поддръжка, актуализации и техническа помощ.
                    </Text>
                    <Column gap="4" align="center" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Месечна поддръжка</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Сигурност и backup</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">24/7 техническа помощ</Text>
                      </Flex>
                    </Column>
                  </Column>
                  
                  <Column paddingX="m" paddingBottom="m" align="center">
                    <Button
                      href="/web/poddrzhka-nadgradzhdane"
                      variant="primary"
                      size="m"
                      prefixIcon="rocket"
                      style={{ backgroundColor: primaryColor }}
                      fillWidth
                    >
                      Виж повече
                    </Button>
                  </Column>
                </Card>
              </RevealFx>

              {/* Speed Optimization */}
              <RevealFx delay={0.7}>
                <Card 
                  fillWidth
                  radius="l" 
                  direction="column"
                  style={{ border: "1px solid var(--neutral-alpha-medium)", gap: 0 }}
                >
                  <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                    <FaRocket size={20} color={primaryColor} />
                    <Text variant="label-default-s">Оптимизация</Text>
                  </Row>
                  
                  <div
                    style={{
                      width: "100%",
                      height: "192px",
                      background: `linear-gradient(135deg, ${primaryColor}08, ${primaryColor}15)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTop: "1px solid var(--neutral-alpha-weak)",
                      borderBottom: "1px solid var(--neutral-alpha-weak)"
                    }}
                  >
                    <FaRocket size={40} color={primaryColor} />
                  </div>
                  
                  <Column fillWidth paddingX="m" paddingY="l" gap="s">
                    <Text variant="body-default-xl" wrap="balance" align="center">
                      Оптимизация на съществуващ сайт
                    </Text>
                    <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                      Ускоряване, подобряване на мобилния изглед, фиксиране на грешки.
                    </Text>
                    <Column gap="4" align="center" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">+70% по-бързо</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Технически одит</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Mobile-first</Text>
                      </Flex>
                    </Column>
                  </Column>
                  
                  <Column paddingX="m" paddingBottom="m" align="center">
                    <Button
                      href="/web/optimizatsiya-sajt"
                      variant="primary"
                      size="m"
                      prefixIcon="rocket"
                      style={{ backgroundColor: primaryColor }}
                      fillWidth
                    >
                      Виж повече
                    </Button>
                  </Column>
                </Card>
              </RevealFx>

            </Grid>
          </Column>

          {/* WHY ME SECTION */}
          <Column fillWidth gap="l" align="center" paddingY="m">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Icon name="star" size="l" onBackground="brand-strong" />
                <Heading variant="display-strong-m" align="center">
                  Защо да избереш мен
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Опитен фронтенд разработчик и SEO специалист с доказани резултати. 
                  Специализирам се в Next.js и React с фокус върху скорост и SEO.
                </Text>
              </Column>
            </RevealFx>

            <Grid fillWidth columns={2} s={{ columns: 1 }} gap="l">
              {/* About Card */}
              <RevealFx delay={0.1}>
                <Card fillWidth padding="xl" radius="xl">
                  <Column fillWidth gap="m" align="center">
                    <Flex gap="m" align="center" horizontal="center">
                      <Avatar src={person.avatar} size="l" />
                      <Column gap="4">
                        <Text variant="body-default-s" weight="strong">Stanchev</Text>
                        <Text variant="body-default-xs" onBackground="neutral-weak">
                          Frontend Developer & SEO
                        </Text>
                      </Column>
                    </Flex>
                    
                    <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                      Фронтенд разработчик, който вярва, че уебсайтът не е просто визитка, 
                      а дигитално преживяване. Всеки проект съчетавам с реална SEO логика — 
                      защото красивият сайт е безсмислен, ако никой не го открива.
                    </Text>

                    <Flex fillWidth gap="8" wrap horizontal="center" paddingTop="m">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} />
                        <Text variant="body-default-s">1+ години опит</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} />
                        <Text variant="body-default-s">5 проекта</Text>
                      </Flex>
                    </Flex>
                  </Column>
                </Card>
              </RevealFx>

              {/* Core Web Vitals Card */}
              <RevealFx delay={0.2}>
                <Card fillWidth padding="xl" radius="xl">
                  <Column fillWidth gap="l">
                    <Heading variant="heading-strong-l" align="center">
                      Core Web Vitals подобрения
                    </Heading>
                    
                    <BarChart
                      title="Подобрения в производителността"
                      axis="none"
                      legend={{ position: "bottom-center" }}
                      series={[
                        { key: "Преди", color: "red" },
                        { key: "След", color: "green" }
                      ]}
                      data={[
                        { label: "LCP (s)", "Преди": 4.8, "След": 2.1 },
                        { label: "FID (ms)", "Преди": 180, "След": 45 },
                        { label: "CLS", "Преди": 0.35, "След": 0.08 },
                        { label: "Score", "Преди": 52, "След": 94 }
                      ]}
                    />

                    <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                      <strong>Средно подобрение: +81%</strong> в Core Web Vitals
                    </Text>
                  </Column>
                </Card>
              </RevealFx>
            </Grid>
          </Column>

          {/* PROCESS SECTION */}
          <Column fillWidth gap="l" align="center" paddingY="xl">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Heading variant="display-strong-m" align="center">
                  Процес на работа
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Ясен и структуриран процес - от консултация до пускане и поддръжка. 
                  Работя прозрачно с редовни актуализации.
                </Text>
              </Column>
            </RevealFx>

            <RevealFx delay={0.1}>
              <Column fillWidth gap="l">
                {/* Step 1 */}
                <Row fillWidth gap="l" align="center">
                  <Column align="center">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: `${primaryColor}20`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `3px solid ${primaryColor}`,
                      }}
                    >
                      <FaUsers size={24} color={primaryColor} />
                    </div>
                  </Column>
                  <Column flex={1}>
                    <Card fillWidth padding="l" radius="xl">
                      <Column gap="s">
                        <Text variant="heading-strong-m">1. Безплатна консултация</Text>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                          Обсъждаме целите и нуждите. Анализирам текущото състояние и предлагам решения.
                        </Text>
                      </Column>
                    </Card>
                  </Column>
                </Row>

                {/* Step 2 */}
                <Row fillWidth gap="l" align="center">
                  <Column align="center">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: `${primaryColor}20`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `3px solid ${primaryColor}`,
                      }}
                    >
                      <FaLightbulb size={24} color={primaryColor} />
                    </div>
                  </Column>
                  <Column flex={1}>
                    <Card fillWidth padding="l" radius="xl">
                      <Column gap="s">
                        <Text variant="heading-strong-m">2. План и оферта</Text>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                          Детайлен план за реализация, ясни етапи и точни срокове.
                        </Text>
                      </Column>
                    </Card>
                  </Column>
                </Row>

                {/* Step 3 */}
                <Row fillWidth gap="l" align="center">
                  <Column align="center">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: `${primaryColor}20`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `3px solid ${primaryColor}`,
                      }}
                    >
                      <FaCode size={24} color={primaryColor} />
                    </div>
                  </Column>
                  <Column flex={1}>
                    <Card fillWidth padding="l" radius="xl">
                      <Column gap="s">
                        <Text variant="heading-strong-m">3. Разработка</Text>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                          Изграждам сайта с регулярни актуализации и обратна връзка.
                        </Text>
                      </Column>
                    </Card>
                  </Column>
                </Row>

                {/* Step 4 */}
                <Row fillWidth gap="l" align="center">
                  <Column align="center">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: `${primaryColor}20`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `3px solid ${primaryColor}`,
                      }}
                    >
                      <FaRocket size={24} color={primaryColor} />
                    </div>
                  </Column>
                  <Column flex={1}>
                    <Card fillWidth padding="l" radius="xl">
                      <Column gap="s">
                        <Text variant="heading-strong-m">4. Пускане + Поддръжка</Text>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                          SEO настройки, следпускова помощ и месечна поддръжка.
                        </Text>
                      </Column>
                    </Card>
                  </Column>
                </Row>
              </Column>
            </RevealFx>
          </Column>

          {/* RESULTS SECTION */}
          <Column fillWidth gap="l" align="center" paddingY="xl">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Heading variant="display-strong-m" align="center">
                  Реални резултати от проектите
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Доказани резултати - средно +433% ръст в трафика, +585% в приходите, 
                  +148% подобрение на конверсията.
                </Text>
              </Column>
            </RevealFx>

            <RevealFx delay={0.1}>
              <Card
                fillWidth
                padding="xl"
                radius="xl"
                style={{
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                <Column fillWidth gap="l" align="center">
                  <Heading variant="heading-strong-l" align="center">
                    Ръст в трафика, конверсия и продажби
                  </Heading>

                  <LineBarChart
                    title="Органичен трафик и приходи (Март-Ноември 2025)"
                    axis="both"
                    date={{
                      format: "MMM yyyy",
                      start: new Date("2025-03-01"),
                      end: new Date("2025-11-01"),
                      selector: false,
                      presets: { display: true, granularity: "month" },
                      dual: true
                    }}
                    series={[
                      { key: "Трафик", color: "blue" },
                      { key: "Приходи (лв)", color: "yellow" },
                    ]}
                    data={[
                      { date: new Date("2025-03-01"), "Трафик": 1200, "Приходи (лв)": 18500 },
                      { date: new Date("2025-04-01"), "Трафик": 1650, "Приходи (лв)": 21400 },
                      { date: new Date("2025-05-01"), "Трафик": 2100, "Приходи (лв)": 26800 },
                      { date: new Date("2025-06-01"), "Трафик": 2750, "Приходи (лв)": 32100 },
                      { date: new Date("2025-07-01"), "Трафик": 3400, "Приходи (лв)": 37900 },
                      { date: new Date("2025-08-01"), "Трафик": 4100, "Приходи (лв)": 44200 },
                      { date: new Date("2025-09-01"), "Трафик": 4850, "Приходи (лв)": 51800 },
                      { date: new Date("2025-10-01"), "Трафик": 5600, "Приходи (лв)": 59500 },
                      { date: new Date("2025-11-01"), "Трафик": 6400, "Приходи (лв)": 68200 }
                    ]}
                  />

                  <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                    <strong>Ръст в трафика: +433%</strong> | <strong>Ръст в приходите: +585%</strong> | <strong>Конверсия: +148%</strong>
                  </Text>
                  <Text variant="body-default-xs" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                    * Средни данни от всички клиенти до момента
                  </Text>
                </Column>
              </Card>
            </RevealFx>
          </Column>

          {/* FAQ SECTION */}
          <Column fillWidth gap="l" align="center" paddingY="s">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Icon name="help-circle" size="l" onBackground="info-strong" />
                <Heading variant="display-strong-m" align="center">
                  Често задавани въпроси
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Отговори на най-често задаваните въпроси за уеб разработка, 
                  цени, срокове и процес на работа.
                </Text>
              </Column>
            </RevealFx>

            <RevealFx delay={0.1}>
              <Column fillWidth style={{ maxWidth: "900px", margin: "0 auto" }}>
                <AccordionGroup
                  items={[
                    {
                      title: "Колко време отнема изработката на уебсайт?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Лендинг страница - 1-2 седмици. Пълноценен сайт - 3-6 седмици. 
                          Включва планиране, дизайн, разработка, тестване и пускане.
                        </Text>
                      ),
                    },
                    {
                      title: "Какви технологии използвате?",
                      content: (
                        <Text onBackground="neutral-weak">
                          React, Next.js, TypeScript, Tailwind CSS. Всички сайтове са 
                          оптимизирани за SEO с отлични Core Web Vitals резултати.
                        </Text>
                      ),
                    },
                    {
                      title: "Колко струва изработката на уебсайт?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Лендинг от 800-1500 лв. Корпоративен сайт 2000-5000 лв. 
                          Next.js сайт от 1200 лв. Безплатна консултация и оферта.
                        </Text>
                      ),
                    },
                    {
                      title: "Предоставяте ли поддръжка след пускането?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Да, месечна поддръжка с актуализации, бекъп и техническа помощ. 
                          Осигурявам обучение за управление на съдържанието.
                        </Text>
                      ),
                    },
                    {
                      title: "Как се осигурява SEO оптимизацията?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Техническа SEO, schema markup, meta tags, sitemap, Google Search Console, 
                          Core Web Vitals оптимизация. SEO е вградено от самото начало.
                        </Text>
                      ),
                    },
                  ]}
                />
              </Column>
            </RevealFx>
          </Column>

          {/* CTA SECTION */}
          <Column fillWidth gap="l" align="center" paddingY="s">
            <RevealFx>
              <Card
                fillWidth
                padding="xl"
                radius="xl"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, #003d66 100%)`,
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
              >
                <Column fillWidth gap="l" align="center">
                  <Heading variant="display-strong-m" align="center" style={{ color: "white" }}>
                    Готов за твоя сайт?
                  </Heading>
                  
                  <Text 
                    variant="body-default-xl" 
                    align="center" 
                    style={{ color: "white", maxWidth: "600px", margin: "0 auto" }}
                  >
                    Времето е сега да направиш стъпката към професионален онлайн присъствие. 
                    Свържи се за безплатна консултация.
                  </Text>

                  <Flex fillWidth gap="m" horizontal="center" wrap>
                    <Button
                      href="/kontakti"
                      variant="secondary"
                      size="l"
                      prefixIcon="message-circle"
                      style={{ backgroundColor: "white", color: primaryColor }}
                    >
                      Свържи се с мен
                    </Button>
                    <Button
                      href="tel:+359877038729"
                      variant="tertiary"
                      size="l"
                      style={{ color: "white", border: "2px solid white" }}
                    >
                      <Flex gap="4" align="center">
                        <FaPhone />
                        +359 877 038 729
                      </Flex>
                    </Button>
                  </Flex>

                  <Text variant="body-default-m" align="center" style={{ color: "white" }}>
                    Имейл: seo@stanchev.bg • Отговарям в рамките на 24 часа
                  </Text>
                </Column>
              </Card>
            </RevealFx>
          </Column>

        </Column>
      </Column>
    </>
  );
}

