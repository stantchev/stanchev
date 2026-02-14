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
  BarChart,
  SmartLink,
  Tag
} from "@once-ui-system/core";
import { baseURL } from "@/resources";
import type { Metadata } from "next";
import Script from "next/script";
import { 
  FaCode, 
  FaRocket, 
  FaCheckCircle,
  FaChartLine,
  FaBolt,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaLaptop,
  FaMobile,
  FaDatabase,
  FaSync,
  FaPlug,
  FaGlobe,
  FaCog,
  FaPhone,
  FaEnvelope,
  FaLightbulb,
  FaMoneyBillWave,
  FaServer,
  FaLayerGroup,
} from 'react-icons/fa';
import { SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si';

export const metadata: Metadata = {
  title: "React SPA Разработка | Web Приложения & Dashboards | Stanchev Digital",
  description: "Професионална React SPA разработка в България. Интерактивни web приложения, admin панели и dashboards с TypeScript, React Query и modern stack. Real-time функционалност, API интеграции. От 2500 лв.",
  keywords: "React SPA, React приложение, web app разработка, React dashboard, admin panel, TypeScript, React Query, real-time приложение, API интеграция, single page application, SPA България",
  alternates: {
    canonical: `${baseURL}/web/react-spa`,
  },
  openGraph: {
    title: "React SPA Разработка | Web Приложения & Dashboards",
    description: "Професионална React SPA разработка - интерактивни web приложения с real-time функционалност и API интеграции.",
    url: `${baseURL}/web/react-spa`,
    siteName: "Stanchev Digital",
    images: [
      {
        url: `${baseURL}/images/og/react-spa.jpg`,
        width: 1200,
        height: 630,
        alt: "React SPA Разработка",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "React SPA Разработка | Web Приложения & Dashboards",
    description: "Професионална React SPA разработка с TypeScript и modern stack",
    images: [`${baseURL}/images/og/react-spa.jpg`],
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

const primaryColor = "#005b96";

export default function ReactSPAPage() {
  return (
    <>
      {/* ============================================ */}
      {/* ЗВЕРСКО SEO - EXTENSIVE RICH SCHEMA */}
      {/* ============================================ */}

      {/* 1. Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "React SPA Разработка",
            description: "Професионална разработка на React Single Page Applications - web приложения, admin панели, dashboards с TypeScript и modern stack.",
            provider: {
              "@type": "Organization",
              name: "Stanchev Digital",
              url: baseURL,
              logo: `${baseURL}/images/logo.png`,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+359-877-038-729",
                contactType: "Sales",
                email: "seo@stanchev.bg",
                areaServed: "BG",
                availableLanguage: ["Bulgarian", "English"],
              },
            },
            areaServed: {
              "@type": "Country",
              name: "България",
            },
            serviceType: "React SPA Development",
            category: "Web Application Development",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "BGN",
              lowPrice: "2500",
              highPrice: "15000",
              offers: [
                {
                  "@type": "Offer",
                  name: "React SPA Starter",
                  price: "2500",
                  priceCurrency: "BGN",
                  description: "Basic React приложение с CRUD функционалност",
                },
                {
                  "@type": "Offer",
                  name: "React SPA Business",
                  price: "5500",
                  priceCurrency: "BGN",
                  description: "Advanced приложение с API, real-time и auth",
                },
                {
                  "@type": "Offer",
                  name: "React SPA Enterprise",
                  price: "10000+",
                  priceCurrency: "BGN",
                  description: "Custom enterprise приложение с microservices",
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "8",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />

      {/* 2. Software Application Schema */}
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "React SPA Development Services",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "2500",
              priceCurrency: "BGN",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "8",
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
                name: "Какво е React SPA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "React SPA (Single Page Application) е web приложение, което зарежда една HTML страница и динамично обновява съдържанието без препращане. Идеален за dashboards, admin панели и комплексни web apps.",
                },
              },
              {
                "@type": "Question",
                name: "Колко струва React SPA разработка?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "React SPA Starter от 2500 лв (basic CRUD), Business от 5500 лв (API + auth + real-time), Enterprise от 10000+ лв (custom microservices). Безплатна консултация.",
                },
              },
              {
                "@type": "Question",
                name: "Колко време отнема разработката?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Starter проект: 3-4 седмици. Business проект: 6-8 седмици. Enterprise: 10-16 седмици. Зависи от сложността и функционалностите.",
                },
              },
              {
                "@type": "Question",
                name: "Какви технологии използвате?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "React 18+, TypeScript, React Query, Zustand/Redux, Tailwind CSS, Vite/Webpack, Jest, React Testing Library, REST/GraphQL APIs.",
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
              {
                "@type": "ListItem",
                position: 3,
                name: "React SPA",
                item: `${baseURL}/web/react-spa`,
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
                name: "React SPA Разработка",
              },
              author: {
                "@type": "Person",
                name: "Иван Д.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody: "Отличен React dashboard с real-time updates. Много по-бърз и интерактивен от старото PHP приложение.",
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "Service",
                name: "React SPA Разработка",
              },
              author: {
                "@type": "Person",
                name: "Елена К.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody: "Професионално изработен admin panel с TypeScript. Clean code и отлична документация.",
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
                <Badge style={{ backgroundColor: primaryColor, color: 'white' }}>
                  <Flex gap="4" align="center">
                    <SiReact size={20} />
                    <Text>React 18 + TypeScript + Modern Stack</Text>
                  </Flex>
                </Badge>

                <Heading
                  wrap="balance"
                  variant="display-strong-xl"
                  align="center"
                  style={{ lineHeight: "1.2" }}
                >
                  React SPA Разработка за Модерни Web Приложения
                </Heading>
                <Text
                  wrap="balance"
                  onBackground="neutral-weak"
                  align="center"
                  variant="display-default-s"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Професионална разработка на интерактивни Single Page Applications - 
                  dashboards, admin панели, CRM системи и сложни web apps с React, TypeScript 
                  и най-модерния tech stack.
                </Text>
              </Column>
            </RevealFx>

            <RevealFx delay={0.2} speed="fast">
              <Flex fillWidth gap="m" horizontal="center" vertical="center" wrap>
                <Button
                  href="/kontakti"
                  variant="primary"
                  size="l"
                  prefixIcon="message-circle"
                  style={{ backgroundColor: primaryColor }}
                >
                  Безплатна Консултация
                </Button>
                <Button
                  href="#paketi"
                  variant="secondary"
                  size="l"
                  prefixIcon="eye"
                >
                  Виж цени
                </Button>
              </Flex>
            </RevealFx>

            {/* Quick Stats */}
            <RevealFx delay={0.3}>
              <Flex fillWidth gap="12" wrap horizontal="center" paddingTop="m">
                <Flex gap="4" align="center">
                  <FaBolt color={primaryColor} size={20} />
                  <Text onBackground="neutral-weak">Бързи и responsive</Text>
                </Flex>
                <Flex gap="4" align="center">
                  <FaSync color={primaryColor} size={20} />
                  <Text onBackground="neutral-weak">Real-time updates</Text>
                </Flex>
                <Flex gap="4" align="center">
                  <FaCheckCircle color={primaryColor} size={20} />
                  <Text onBackground="neutral-weak">8+ завършени проекта</Text>
                </Flex>
              </Flex>
            </RevealFx>
          </Column>

          {/* WHAT IS REACT SPA */}
          <Column fillWidth gap="l" align="center" paddingY="s">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Icon name="info" size="l" onBackground="brand-strong" />
                <Heading variant="display-strong-m" align="center">
                  Какво е React SPA?
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Single Page Application (SPA) е модерен тип web приложение, което зарежда 
                  една HTML страница и динамично обновява съдържанието без пълно презареждане. 
                  Това прави приложението много по-бързо, плавно и интерактивно.
                </Text>
              </Column>
            </RevealFx>

            <RevealFx delay={0.1}>
              <Grid fillWidth columns={3} s={{ columns: 1 }} gap="l">
                <Card fillWidth padding="l" radius="l" style={{ border: `2px solid ${primaryColor}30` }}>
                  <Column fillWidth gap="s" align="center">
                    <FaBolt size={32} color={primaryColor} />
                    <Heading as="h3" variant="heading-strong-m" align="center">
                      Бързо и плавно
                    </Heading>
                    <Text align="center" onBackground="neutral-weak">
                      Без презареждане на страницата. Мигновени преходи между секции 
                      и моментален отговор на потребителски действия.
                    </Text>
                  </Column>
                </Card>

                <Card fillWidth padding="l" radius="l" style={{ border: `2px solid ${primaryColor}30` }}>
                  <Column fillWidth gap="s" align="center">
                    <FaLayerGroup size={32} color={primaryColor} />
                    <Heading as="h3" variant="heading-strong-m" align="center">
                      Модулна структура
                    </Heading>
                    <Text align="center" onBackground="neutral-weak">
                      Компонентна архитектура прави кода лесен за поддръжка, 
                      тестване и разширяване с нови функционалности.
                    </Text>
                  </Column>
                </Card>

                <Card fillWidth padding="l" radius="l" style={{ border: `2px solid ${primaryColor}30` }}>
                  <Column fillWidth gap="s" align="center">
                    <FaMobile size={32} color={primaryColor} />
                    <Heading as="h3" variant="heading-strong-m" align="center">
                      Mobile-first
                    </Heading>
                    <Text align="center" onBackground="neutral-weak">
                      Перфектно работи на всички устройства - desktop, tablet, mobile. 
                      Едно приложение за всички платформи.
                    </Text>
                  </Column>
                </Card>
              </Grid>
            </RevealFx>
          </Column>

          {/* USE CASES */}
          <Column fillWidth gap="l" align="center" paddingY="s">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Heading variant="display-strong-m" align="center">
                  Кога е подходящ React SPA?
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  React SPA е идеален за комплексни web приложения с много интерактивност 
                  и динамична функционалност. Ето най-популярните use cases:
                </Text>
              </Column>
            </RevealFx>

            <Grid fillWidth columns={2} s={{ columns: 1 }} gap="l">
              <RevealFx delay={0.1}>
                <Card fillWidth padding="xl" radius="xl">
                  <Column fillWidth gap="m">
                    <Flex gap="8" align="center">
                      <FaChartLine size={32} color={primaryColor} />
                      <Heading as="h3" variant="heading-strong-l">
                        Admin Панели & Dashboards
                      </Heading>
                    </Flex>
                    <Text onBackground="neutral-weak">
                      Интерактивни dashboard-и с real-time данни, графики и таблици. 
                      Управление на потребители, продукти, поръчки и аналитика.
                    </Text>
                    <Column gap="4" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Real-time analytics</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Интерактивни графики</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">CRUD операции</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Data visualization</Text>
                      </Flex>
                    </Column>
                  </Column>
                </Card>
              </RevealFx>

              <RevealFx delay={0.2}>
                <Card fillWidth padding="xl" radius="xl">
                  <Column fillWidth gap="m">
                    <Flex gap="8" align="center">
                      <FaUsers size={32} color={primaryColor} />
                      <Heading as="h3" variant="heading-strong-l">
                        CRM & ERP Системи
                      </Heading>
                    </Flex>
                    <Text onBackground="neutral-weak">
                      Системи за управление на клиенти, продажби и бизнес процеси. 
                      Комплексна логика, workflow automation и множество интеграции.
                    </Text>
                    <Column gap="4" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Управление на клиенти</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Sales pipeline</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Task management</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Reporting & analytics</Text>
                      </Flex>
                    </Column>
                  </Column>
                </Card>
              </RevealFx>

              <RevealFx delay={0.3}>
                <Card fillWidth padding="xl" radius="xl">
                  <Column fillWidth gap="m">
                    <Flex gap="8" align="center">
                      <FaDatabase size={32} color={primaryColor} />
                      <Heading as="h3" variant="heading-strong-l">
                        SaaS Platforms
                      </Heading>
                    </Flex>
                    <Text onBackground="neutral-weak">
                      Software as a Service приложения с subscription модел, 
                      multi-tenancy архитектура и advanced функционалност.
                    </Text>
                    <Column gap="4" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">User authentication</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Subscription billing</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Role-based access</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">API integrations</Text>
                      </Flex>
                    </Column>
                  </Column>
                </Card>
              </RevealFx>

              <RevealFx delay={0.4}>
                <Card fillWidth padding="xl" radius="xl">
                  <Column fillWidth gap="m">
                    <Flex gap="8" align="center">
                      <FaPlug size={32} color={primaryColor} />
                      <Heading as="h3" variant="heading-strong-l">
                        Data-Heavy Applications
                      </Heading>
                    </Flex>
                    <Text onBackground="neutral-weak">
                      Приложения с интензивна работа с данни - сложни филтри, 
                      сортиране, пагинация и real-time синхронизация.
                    </Text>
                    <Column gap="4" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Advanced filtering</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Real-time sync</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Bulk operations</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Export & import</Text>
                      </Flex>
                    </Column>
                  </Column>
                </Card>
              </RevealFx>
            </Grid>
          </Column>

          {/* TECH STACK */}
          <Column fillWidth gap="l" align="center" paddingY="s">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Icon name="code" size="l" onBackground="brand-strong" />
                <Heading variant="display-strong-m" align="center">
                  Modern Tech Stack
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Използвам най-модерните технологии и best practices за максимална 
                  производителност, сигурност и лесна поддръжка.
                </Text>
              </Column>
            </RevealFx>

            <RevealFx delay={0.1}>
              <Card fillWidth padding="xl" radius="xl" style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <Column fillWidth gap="l">
                  <Grid fillWidth columns={3} s={{ columns: 1 }} gap="l">
                    {/* Frontend */}
                    <Column fillWidth gap="m">
                      <Flex gap="8" align="center">
                        <SiReact size={28} color={primaryColor} />
                        <Heading as="h3" variant="heading-strong-m">Frontend</Heading>
                      </Flex>
                      <Column gap="4">
                        <Flex gap="4" align="center">
                          <FaCheckCircle color={primaryColor} size={14} />
                          <Text variant="body-default-s">React 18+</Text>
                        </Flex>
                        <Flex gap="4" align="center">
                          <FaCheckCircle color={primaryColor} size={14} />
                          <Text variant="body-default-s">TypeScript</Text>
                        </Flex>
                        <Flex gap="4" align="center">
                          <FaCheckCircle color={primaryColor} size={14} />
                          <Text variant="body-default-s">Tailwind CSS</Text>
                        </Flex>
                        <Flex gap="4" align="center">
                          <FaCheckCircle color={primaryColor} size={14} />
                          <Text variant="body-default-s">Vite / Webpack</Text>
                        </Flex>
                      </Column>
                    </Column>

                    {/* State & Data */}
                    <Column fillWidth gap="m">
                      <Flex gap="8" align="center">
                        <FaDatabase size={28} color={primaryColor} />
                        <Heading as="h3" variant="heading-strong-m">State & Data</Heading>
                      </Flex>
                      <Column gap="4">
                        <Flex gap="4" align="center">
                          <FaCheckCircle color={primaryColor} size={14} />
                          <Text variant="body-default-s">React Query</Text>
                        </Flex>
                        <Flex gap="4" align="center">
                          <FaCheckCircle color={primaryColor} size={14} />
                          <Text variant="body-default-s">Zustand / Redux</Text>
                        </Flex>
                        <Flex gap="4" align="center">
                          <FaCheckCircle color={primaryColor} size={14} />
                          <Text variant="body-default-s">Axios / Fetch</Text>
                        </Flex>
                        <Flex gap="4" align="center">
                          <FaCheckCircle color={primaryColor} size={14} />
                          <Text variant="body-default-s">GraphQL / REST</Text>
                        </Flex>
                      </Column>
                    </Column>

                    {/* Testing & Tools */}
                    <Column fillWidth gap="m">
                      <Flex gap="8" align="center">
                        <FaCog size={28} color={primaryColor} />
                        <Heading as="h3" variant="heading-strong-m">Testing & Tools</Heading>
                      </Flex>
                      <Column gap="4">
                        <Flex gap="4" align="center">
                          <FaCheckCircle color={primaryColor} size={14} />
                          <Text variant="body-default-s">Jest</Text>
                        </Flex>
                        <Flex gap="4" align="center">
                          <FaCheckCircle color={primaryColor} size={14} />
                          <Text variant="body-default-s">React Testing Library</Text>
                        </Flex>
                        <Flex gap="4" align="center">
                          <FaCheckCircle color={primaryColor} size={14} />
                          <Text variant="body-default-s">ESLint / Prettier</Text>
                        </Flex>
                        <Flex gap="4" align="center">
                          <FaCheckCircle color={primaryColor} size={14} />
                          <Text variant="body-default-s">Git / CI/CD</Text>
                        </Flex>
                      </Column>
                    </Column>
                  </Grid>

                  <Card fillWidth padding="m" radius="l" style={{ background: `${primaryColor}10` }}>
                    <Text align="center" variant="body-default-m">
                      💡 <strong>Модерен Stack = По-малко bugs + По-лесна поддръжка + Бързо развитие</strong>
                    </Text>
                  </Card>
                </Column>
              </Card>
            </RevealFx>
          </Column>

          {/* COMPARISON: SPA vs Traditional */}
          <Column fillWidth gap="l" align="center" paddingY="s">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Heading variant="display-strong-m" align="center">
                  React SPA vs Traditional Web App
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Виж разликите между модерния React SPA подход и традиционните 
                  multi-page приложения с server-side rendering.
                </Text>
              </Column>
            </RevealFx>

            <RevealFx delay={0.1}>
              <Card fillWidth padding="xl" radius="xl" style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <Column fillWidth gap="l">
                  <BarChart
                    title="Performance сравнение"
                    axis="y"
                    legend={{ position: "bottom-center" }}
                    series={[
                      { key: "React SPA", color: "green" },
                      { key: "Traditional", color: "red" }
                    ]}
                    data={[
                      { label: "Page Load (s)", "React SPA": 1.2, "Traditional": 3.8 },
                      { label: "Navigation (s)", "React SPA": 0.2, "Traditional": 2.5 },
                      { label: "Interaction (ms)", "React SPA": 50, "Traditional": 800 },
                      { label: "User Experience", "React SPA": 95, "Traditional": 65 }
                    ]}
                  />

                  <Grid fillWidth columns={2} s={{ columns: 1 }} gap="l">
                    <Card fillWidth padding="m" radius="l" style={{ background: `${primaryColor}10` }}>
                      <Column fillWidth gap="s">
                        <Text variant="heading-strong-s" style={{ color: primaryColor }}>
                          ✅ React SPA Предимства
                        </Text>
                        <Text variant="body-default-s">• Мигновена навигация (без пълно зареждане)</Text>
                        <Text variant="body-default-s">• По-добро UX и интерактивност</Text>
                        <Text variant="body-default-s">• Real-time updates без презареждане</Text>
                        <Text variant="body-default-s">• Може да работи offline (PWA)</Text>
                        <Text variant="body-default-s">• По-лесно за мащабиране</Text>
                      </Column>
                    </Card>

                    <Card fillWidth padding="m" radius="l" style={{ background: "rgba(239, 68, 68, 0.1)" }}>
                      <Column fillWidth gap="s">
                        <Text variant="heading-strong-s" style={{ color: "#ef4444" }}>
                          ⚠️ Traditional Недостатъци
                        </Text>
                        <Text variant="body-default-s">• Пълно презареждане при всяка навигация</Text>
                        <Text variant="body-default-s">• По-бавно и по-малко responsive</Text>
                        <Text variant="body-default-s">• Трудно за real-time функционалност</Text>
                        <Text variant="body-default-s">• По-сложна логика на сървъра</Text>
                        <Text variant="body-default-s">• По-лошо UX на слаби връзки</Text>
                      </Column>
                    </Card>
                  </Grid>
                </Column>
              </Card>
            </RevealFx>
          </Column>

          {/* FEATURES */}
          <Column fillWidth gap="l" align="center" paddingY="s">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Heading variant="display-strong-m" align="center">
                  Какво включва React SPA проект?
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Всеки проект включва пълен набор от функционалности, оптимизации 
                  и best practices за производствена среда.
                </Text>
              </Column>
            </RevealFx>

            <Grid fillWidth columns={3} s={{ columns: 1 }} gap="l">
              {[
                {
                  icon: FaShieldAlt,
                  title: "Authentication & Security",
                  desc: "JWT tokens, роли и права, защита срещу XSS/CSRF, secure API комуникация.",
                },
                {
                  icon: FaSync,
                  title: "Real-time Updates",
                  desc: "WebSockets / Server-Sent Events за live данни, notifications и sync.",
                },
                {
                  icon: FaDatabase,
                  title: "API Integration",
                  desc: "REST / GraphQL API интеграции, error handling, retry logic, caching.",
                },
                {
                  icon: FaMobile,
                  title: "Responsive Design",
                  desc: "Mobile-first подход, touch-friendly UI, адаптивен layout за всички екрани.",
                },
                {
                  icon: FaBolt,
                  title: "Performance",
                  desc: "Code splitting, lazy loading, optimistic updates, virtual scrolling.",
                },
                {
                  icon: FaCog,
                  title: "Developer Experience",
                  desc: "TypeScript, linting, formatting, testing, документация и CI/CD.",
                },
              ].map((feature, idx) => (
                <RevealFx key={feature.title} delay={0.1 * idx}>
                  <Card fillWidth padding="l" radius="l" style={{ border: `1px solid ${primaryColor}30` }}>
                    <Column fillWidth gap="s">
                      <feature.icon size={32} color={primaryColor} />
                      <Heading as="h3" variant="heading-strong-m">
                        {feature.title}
                      </Heading>
                      <Text onBackground="neutral-weak">{feature.desc}</Text>
                    </Column>
                  </Card>
                </RevealFx>
              ))}
            </Grid>
          </Column>

          {/* PRICING */}
          <Column fillWidth gap="l" align="center" paddingY="s" id="paketi">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Heading variant="display-strong-m" align="center">
                  Прозрачни Цени
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Ясни пакети без скрити такси. Всеки проект е персонализиран според вашите нужди.
                </Text>
              </Column>
            </RevealFx>

            <Grid fillWidth columns={3} s={{ columns: 1 }} gap="l">
              {/* Starter */}
              <RevealFx delay={0.1}>
                <Card fillWidth padding="l" radius="l" style={{ border: `1px solid ${primaryColor}30` }}>
                  <Column fillWidth gap="m">
                    <Tag variant="neutral">За стартиращи</Tag>
                    <Heading as="h3">React SPA Starter</Heading>
                    <Flex gap="4" align="left">
                      <Text variant="display-strong-l" style={{ color: primaryColor }}>2500 лв.</Text>
                      <Text onBackground="neutral-weak" variant="body-default-s">еднократно</Text>
                    </Flex>

                    <Column fillWidth gap="4" paddingTop="m">
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Basic CRUD функционалност</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">React + TypeScript setup</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Responsive UI components</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">API интеграция (REST)</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Basic authentication</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">30 дни поддръжка</Text>
                      </Flex>
                    </Column>

                    <Button fillWidth variant="secondary" href="/kontakti" style={{ marginTop: '1rem' }}>
                      Избери пакет
                    </Button>
                  </Column>
                </Card>
              </RevealFx>

              {/* Business - Popular */}
              <RevealFx delay={0.2}>
                <Card
                  fillWidth
                  padding="l"
                  radius="l"
                  style={{
                    transform: 'scale(1.05)',
                    border: `3px solid ${primaryColor}`,
                    boxShadow: `0 8px 24px ${primaryColor}30`,
                  }}
                >
                  <Column fillWidth gap="m">
                    <Badge style={{ backgroundColor: primaryColor, color: 'white' }}>
                      ⭐ Най-популярен
                    </Badge>
                    <Heading as="h3">React SPA Business</Heading>
                    <Flex gap="4" align="left">
                      <Text variant="display-strong-l" style={{ color: primaryColor }}>5500 лв.</Text>
                      <Text onBackground="neutral-weak" variant="body-default-s">еднократно</Text>
                    </Flex>

                    <Column fillWidth gap="4" paddingTop="m">
                      <Text onBackground="neutral-weak"><strong>Всичко от Starter +</strong></Text>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Advanced state management</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Real-time updates (WebSockets)</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Role-based access control</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Advanced charts & analytics</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Unit & integration testing</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">60 дни поддръжка</Text>
                      </Flex>
                    </Column>

                    <Button fillWidth variant="primary" href="/kontakti" style={{ backgroundColor: primaryColor, marginTop: '1rem' }}>
                      Избери пакет
                    </Button>
                  </Column>
                </Card>
              </RevealFx>

              {/* Enterprise */}
              <RevealFx delay={0.3}>
                <Card fillWidth padding="l" radius="l" style={{ border: `1px solid ${primaryColor}30` }}>
                  <Column fillWidth gap="m">
                    <Tag variant="neutral">За корпорации</Tag>
                    <Heading as="h3">React SPA Enterprise</Heading>
                    <Flex gap="4" align="left">
                      <Text variant="display-strong-l" style={{ color: primaryColor }}>10000+ лв.</Text>
                    </Flex>

                    <Column fillWidth gap="4" paddingTop="m">
                      <Text onBackground="neutral-weak"><strong>Всичко от Business +</strong></Text>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Microservices архитектура</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">GraphQL API</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Multi-tenancy support</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Advanced security & compliance</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">CI/CD pipeline</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Dedicated support</Text>
                      </Flex>
                    </Column>

                    <Button fillWidth variant="secondary" href="/kontakti" style={{ marginTop: '1rem' }}>
                      Свържи се
                    </Button>
                  </Column>
                </Card>
              </RevealFx>
            </Grid>
          </Column>

          {/* PROCESS */}
          <Column fillWidth gap="l" align="center" paddingY="s">
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
                  Прозрачен и структуриран процес от идея до production deploy.
                </Text>
              </Column>
            </RevealFx>

            <RevealFx delay={0.1}>
              <Column fillWidth gap="l">
                {[
                  {
                    step: "1",
                    icon: FaLightbulb,
                    title: "Discovery & Planning",
                    desc: "Разбираме бизнес целите, дефинираме features, правим технически план и timeline.",
                  },
                  {
                    step: "2",
                    icon: FaLaptop,
                    title: "Design & Prototype",
                    desc: "UI/UX дизайн, wireframes, интерактивен prototype за одобрение.",
                  },
                  {
                    step: "3",
                    icon: FaCode,
                    title: "Development",
                    desc: "Agile разработка с weekly updates, code reviews и continuous integration.",
                  },
                  {
                    step: "4",
                    icon: FaCheckCircle,
                    title: "Testing & QA",
                    desc: "Unit tests, integration tests, UAT, performance testing и bug fixing.",
                  },
                  {
                    step: "5",
                    icon: FaRocket,
                    title: "Deployment & Support",
                    desc: "Production deploy, мониторинг, documentation и continuous support.",
                  },
                ].map((item) => (
                  <Row key={item.step} fillWidth gap="l" align="center">
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
                        <item.icon size={24} color={primaryColor} />
                      </div>
                    </Column>
                    <Column flex={1}>
                      <Card fillWidth padding="l" radius="xl">
                        <Column gap="s">
                          <Flex gap="8" align="center">
                            <Text variant="heading-strong-m">{item.step}.</Text>
                            <Text variant="heading-strong-m">{item.title}</Text>
                          </Flex>
                          <Text variant="body-default-m" onBackground="neutral-weak">
                            {item.desc}
                          </Text>
                        </Column>
                      </Card>
                    </Column>
                  </Row>
                ))}
              </Column>
            </RevealFx>
          </Column>

          {/* FAQ */}
          <Column fillWidth gap="l" align="center" paddingY="s">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Icon name="help-circle" size="l" onBackground="info-strong" />
                <Heading variant="display-strong-m" align="center">
                  Често задавани въпроси
                </Heading>
              </Column>
            </RevealFx>

            <RevealFx delay={0.1}>
              <Column fillWidth style={{ maxWidth: "900px", margin: "0 auto" }}>
                <AccordionGroup
                  items={[
                    {
                      title: "Какво е React SPA и кога е подходящ?",
                      content: (
                        <Text onBackground="neutral-weak">
                          React SPA (Single Page Application) е web приложение, което зарежда една HTML страница 
                          и динамично обновява съдържанието. Подходящ е за: admin панели, dashboards, CRM/ERP системи, 
                          SaaS платформи и всякакви data-heavy приложения с много интерактивност.
                        </Text>
                      ),
                    },
                    {
                      title: "Колко време отнема разработката на React SPA?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Starter проект (basic CRUD): 3-4 седмици. Business проект (API + auth + real-time): 6-8 седмици. 
                          Enterprise (microservices + complex logic): 10-16 седмици. Зависи от сложността на функционалностите.
                        </Text>
                      ),
                    },
                    {
                      title: "Какви технологии използвате?",
                      content: (
                        <Text onBackground="neutral-weak">
                          React 18+, TypeScript, React Query (server state), Zustand/Redux (client state), Tailwind CSS, 
                          Vite, Jest, React Testing Library. За backend: Node.js/Express, PostgreSQL/MongoDB, REST/GraphQL APIs.
                        </Text>
                      ),
                    },
                    {
                      title: "Колко струва React SPA разработка?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Starter пакет от 2500 лв (basic CRUD). Business пакет от 5500 лв (advanced features + real-time). 
                          Enterprise от 10000+ лв (microservices + custom architecture). Безплатна консултация и детайлна оферта.
                        </Text>
                      ),
                    },
                    {
                      title: "Предоставяте ли поддръжка след пускането?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Да. Starter: 30 дни безплатна поддръжка. Business: 60 дни. Enterprise: договорна поддръжка. 
                          След това месечна поддръжка, bug fixing, feature updates и техническа помощ.
                        </Text>
                      ),
                    },
                    {
                      title: "Може ли React SPA да работи offline?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Да, с Progressive Web App (PWA) технологии. Можем да имплементираме Service Workers за caching 
                          и offline функционалност. Приложението ще работи и без интернет за базови операции.
                        </Text>
                      ),
                    },
                  ]}
                />
              </Column>
            </RevealFx>
          </Column>

          {/* CTA */}
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
                    Готов за модерно React приложение?
                  </Heading>
                  
                  <Text 
                    variant="body-default-xl" 
                    align="center" 
                    style={{ color: "white", maxWidth: "600px", margin: "0 auto" }}
                  >
                    Свържи се за безплатна консултация. Ще обсъдим проекта, технологиите 
                    и ще ти дам детайлна оферта с конкретни срокове.
                  </Text>

                  <Flex fillWidth gap="m" horizontal="center" wrap>
                    <Button
                      href="/kontakti"
                      variant="secondary"
                      size="l"
                      prefixIcon="message-circle"
                      style={{ backgroundColor: "white", color: primaryColor }}
                    >
                      Безплатна Консултация
                    </Button>
                    <SmartLink href="tel:+359877038729">
                      <Button
                        variant="tertiary"
                        size="l"
                        style={{ color: "white", border: "2px solid white" }}
                      >
                        <Flex gap="4" align="center">
                          <FaPhone />
                          +359 877 038 729
                        </Flex>
                      </Button>
                    </SmartLink>
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
