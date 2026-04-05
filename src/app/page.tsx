import React from "react";
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Card,
  Badge,
  Tag,
  Grid,
  Icon,
  ProgressBar,
  AccordionGroup,
} from "@once-ui-system/core";
import { home, about, person, newsletter, routes } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import type { Metadata } from "next";
import Script from "next/script";
import {
  FaReact,
  FaSearch,
  FaRocket,
  FaChartLine,
  FaCode,
  FaShieldAlt,
  FaClock,
  FaLinkedin,
  FaGithub,
  FaDev,
  FaStar,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { SiNextdotjs, SiGooglesearchconsole } from "react-icons/si";

export const metadata: Metadata = {
  title: "Stanchev Digital – SEO Оптимизация, React & Next.js Разработка в София",
  description:
    "Премиум SEO оптимизация, React и Next.js разработка от Stanchev Digital. Изграждаме бързи, SEO-оптимизирани уебсайтове за малкия и среден бизнес в България. Реални резултати, доказани от клиенти.",
  keywords: [
    "SEO оптимизация",
    "React разработка",
    "Next.js разработка",
    "уеб разработка София",
    "SEO агенция България",
    "Next.js сайт",
    "бърз уебсайт",
    "технически SEO",
    "front-end разработка",
    "SEO за малък бизнес",
    "Google класиране",
    "уебсайт за бизнес",
    "Stanchev Digital",
    "локално SEO",
    "Core Web Vitals",
  ],
  openGraph: {
    title: "Stanchev Digital – SEO Оптимизация, React & Next.js Разработка",
    description:
      "Премиум SEO оптимизация и React/Next.js разработка. Бързи сайтове, реални резултати, доказани клиенти.",
    url: "https://stanchev.bg/",
    siteName: "Stanchev Digital",
    images: [
      {
        url: "https://stanchev.bg/images/og/og.jpg",
        width: 1200,
        height: 630,
        alt: "Stanchev Digital – SEO и Next.js разработка в София",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stanchev Digital – SEO & Next.js Разработка",
    description:
      "Премиум SEO оптимизация и React/Next.js разработка за бизнес растеж.",
    images: ["https://stanchev.bg/images/og/og.jpg"],
  },
};

// ─── Клиентски ревюта ────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Asylum Sofia",
    role: "Tattoo Studio",
    text: "След като Stanchev Digital оптимизира сайта ни с Next.js и SEO, трафикът от Google се утрои за три месеца. Записванията за час се увеличиха значително.",
    rating: 5,
    initials: "AS",
  },
  {
    name: "Vicious Intent",
    role: "Tattoo & Piercing",
    text: "Изключително професионален подход. Новият ни Next.js сайт зарежда мигновено, а позициите ни в Google са на първа страница за всички ключови думи.",
    rating: 5,
    initials: "VI",
  },
  {
    name: "DalGado Pizza & Coffee",
    role: "Ресторант, София",
    text: "Локалното SEO работи перфектно. Вече сме на топ позиции в Google Maps за 'pizza Sofia'. Поръчките онлайн са се увеличили значително.",
    rating: 5,
    initials: "DP",
  },
];

// ─── Услуги ──────────────────────────────────────────────────────────────────
const services = [
  {
    icon: <FaSearch size={28} />,
    color: "var(--brand-strong)",
    label: "SEO Оптимизация",
    title: "Техническо & Съдържателно SEO",
    description:
      "Пълен одит, техническа оптимизация, контент стратегия и link building. Реални позиции в Google с измерими резултати.",
    features: ["Core Web Vitals оптимизация", "Schema.org & структурирани данни", "Локално SEO & Google Maps"],
    href: "/seo-uslugi",
    accent: "brand",
  },
  {
    icon: <SiNextdotjs size={28} />,
    color: "var(--neutral-strong)",
    label: "Next.js Разработка",
    title: "Бързи Next.js & React Сайтове",
    description:
      "Изграждане на SEO-first уебсайтове с Next.js App Router, React Server Components и оптимална производителност от старт.",
    features: ["App Router & Server Components", "Perfect Lighthouse Score", "TypeScript + Tailwind CSS"],
    href: "/web/nextjs",
    accent: "neutral",
  },
  {
    icon: <FaCode size={28} />,
    color: "var(--warning-strong)",
    label: "Custom Решения",
    title: "WordPress & OpenCart Плъгини",
    description:
      "Персонализирани плъгини и модули, интеграции с външни API-та и WooCommerce разширения за вашия бизнес.",
    features: ["WordPress плъгини", "OpenCart модули", "REST API интеграции"],
    href: "/web/custom-plagini",
    accent: "warning",
  },
];

export default function Nachalo() {
  return (
    <>
      {/* ─── Schema.org: LocalBusiness + Person + Reviews ─────────────────── */}
      <Script
        id="schema-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://stanchev.bg/#business",
            name: "Stanchev Digital",
            alternateName: "Stanchev SEO & Web",
            url: "https://stanchev.bg/",
            logo: "https://stanchev.bg/images/og/og.jpg",
            image: "https://stanchev.bg/images/og/og.jpg",
            description:
              "Stanchev Digital предлага SEO оптимизация, React и Next.js разработка за малкия и среден бизнес в България.",
            foundingDate: "2025",
            priceRange: "$$",
            currenciesAccepted: "BGN",
            paymentAccepted: "Cash, Bank Transfer",
            openingHours: "Mo-Fr 09:00-18:00",
            telephone: "+359-88-888-8888",
            email: "seo@stanchev.bg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Бул. Г.М. Димитров 33",
              addressLocality: "София",
              addressRegion: "София-град",
              postalCode: "1797",
              addressCountry: "BG",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 42.6977,
              longitude: 23.3219,
            },
            areaServed: [
              { "@type": "City", name: "София" },
              { "@type": "Country", name: "България" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "SEO & Web услуги",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO Оптимизация",
                    description: "Техническо SEO, контент стратегия, локално SEO и link building.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Next.js & React Разработка",
                    description: "Изграждане на SEO-оптимизирани уебсайтове с Next.js App Router.",
                  },
                },
              ],
            },
            founder: {
              "@type": "Person",
              "@id": "https://stanchev.bg/#person",
              name: "Stanchev",
              jobTitle: "SEO Specialist & Front-End Developer",
              url: "https://stanchev.bg/za-men",
              email: "seo@stanchev.bg",
              sameAs: [
                "https://github.com/stantchev/",
                "https://www.linkedin.com/in/stanchev-seo/",
                "https://dev.to/stanchev",
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "3",
              reviewCount: "3",
            },
            review: [
              {
                "@type": "Review",
                author: { "@type": "Organization", name: "Asylum Sofia" },
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                reviewBody:
                  "След като Stanchev Digital оптимизира сайта ни с Next.js и SEO, трафикът от Google се утрои за три месеца.",
                datePublished: "2025-11-01",
              },
              {
                "@type": "Review",
                author: { "@type": "Organization", name: "Vicious Intent" },
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                reviewBody:
                  "Новият ни Next.js сайт зарежда мигновено, а позициите ни в Google са на първа страница за всички ключови думи.",
                datePublished: "2025-12-01",
              },
              {
                "@type": "Review",
                author: { "@type": "Organization", name: "DalGado Pizza & Coffee" },
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                reviewBody:
                  "Локалното SEO работи перфектно. Вече сме на топ позиции в Google Maps за 'pizza Sofia'.",
                datePublished: "2026-01-15",
              },
            ],
            sameAs: [
              "https://github.com/stantchev/",
              "https://www.linkedin.com/in/stanchev-seo/",
              "https://dev.to/stanchev",
            ],
          }),
        }}
      />

      {/* ─── Schema.org: WebSite + SearchAction ───────────────────────────── */}
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://stanchev.bg/#website",
            name: "Stanchev Digital",
            url: "https://stanchev.bg/",
            description: "SEO оптимизация и Next.js разработка за бизнес растеж в България.",
            inLanguage: "bg",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://stanchev.bg/blog?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <Column maxWidth="m" gap="l" horizontal="center" align="center">

        {/* ─── HERO ─────────────────────────────────────────────────────────── */}
        <Column
          maxWidth="m"
          horizontal="center"
          vertical="center"
          align="center"
          gap="l"
          paddingBottom="xl"
          paddingTop="xl"
        >
          <RevealFx speed="fast">
            <Badge title="Услуги" icon="rocket" arrow={false} effect={false}/>
              SEO + React + Next.js · София, България
            </Badge>
          </RevealFx>

          <RevealFx speed="fast" delay={0.1}>
            <Heading
              wrap="balance"
              variant="display-strong-xl"
              align="center"
              style={{ lineHeight: "1.15", textAlign: "center", maxWidth: "820px" }}
            >
              Уебсайтове, Които Google{" "}
              <span style={{ color: "var(--brand-strong)" }}>Обожава</span>.
              Бизнеси, Които Растат.
            </Heading>
          </RevealFx>

          <RevealFx delay={0.2} speed="fast">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              align="center"
              variant="display-default-s"
              style={{ maxWidth: "640px", textAlign: "center" }}
            >
              Изграждам <strong>бързи Next.js сайтове</strong> с вградено SEO от нулата — техническа оптимизация, перфектни Core Web Vitals и реални позиции в Google.
            </Text>
          </RevealFx>

          <RevealFx delay={0.3} speed="fast">
            <Flex gap="8" wrap horizontal="center">
              {["SEO", "React", "Next.js", "Core Web Vitals", "LocalBusiness SEO"].map((lbl) => (
                <Tag key={lbl} size="m" variant="brand">
                  {lbl}
                </Tag>
              ))}
            </Flex>
          </RevealFx>

          <RevealFx delay={0.4} speed="fast">
            <Flex gap="16" horizontal="center" vertical="center" wrap>
              <Button href="/kontakti" variant="primary" size="l" prefixIcon="rocket">
                Безплатна Консултация
              </Button>
              <Button href="/za-men" variant="secondary" size="l" prefixIcon="user">
                <Flex vertical="center" gap="8">
                  <Avatar src={person.avatar} size="s" />
                  Запознайте се с мен
                </Flex>
              </Button>
            </Flex>
          </RevealFx>

          {/* Social proof bar */}
          <RevealFx delay={0.5} speed="fast">
            <Row gap="l" horizontal="center" vertical="center" wrap paddingTop="m">
              <Row gap="xs" vertical="center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar key={i} size={14} color="var(--warning-strong)" />
                ))}
                <Text variant="label-default-s" onBackground="neutral-weak">
                  &nbsp;5.0 · 3 клиента
                </Text>
              </Row>
              <Text variant="label-default-s" onBackground="neutral-weak">·</Text>
              <Text variant="label-default-s" onBackground="neutral-weak">
                5+ години опит
              </Text>
              <Text variant="label-default-s" onBackground="neutral-weak">·</Text>
              <Text variant="label-default-s" onBackground="neutral-weak">
                Sofia, BG
              </Text>
            </Row>
          </RevealFx>
        </Column>

        {/* ─── КЛИЕНТСКИ ЛОГА ───────────────────────────────────────────────── */}
        <Column align="center" gap="m" paddingY="l" fillWidth>
          <Text variant="label-default-s" onBackground="neutral-weak" align="center">
            ДОВЕРЯВАТ МИ СЕ
          </Text>
          <Row gap="xl" horizontal="center" vertical="center" wrap>
            {[
              { name: "ASYLUM", sub: "Tattoo Studio" },
              { name: "VICIOUS INTENT", sub: "Tattoo & Piercing" },
              { name: "DALGADO", sub: "Pizza & Coffee" },
            ].map((client) => (
              <Card
                key={client.name}
                padding="m"
                radius="l"
                border="neutral-alpha-weak"
                style={{ minWidth: "180px", textAlign: "center" }}
              >
                <Column gap="xs" align="center">
                  <Text
                    variant="label-strong-l"
                    style={{ letterSpacing: "0.08em", fontWeight: 700 }}
                  >
                    {client.name}
                  </Text>
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    {client.sub}
                  </Text>
                </Column>
              </Card>
            ))}
          </Row>
        </Column>

        {/* ─── УСЛУГИ ───────────────────────────────────────────────────────── */}
        <Column gap="xl" align="center" paddingY="xl" fillWidth>
          <RevealFx>
            <Column gap="s" align="center">
              <Badge variant="neutral" size="m">Услуги</Badge>
              <Heading variant="display-strong-m" align="center">
                SEO + Next.js — Двойното Предимство
              </Heading>
              <Text
                variant="body-default-l"
                align="center"
                onBackground="neutral-weak"
                style={{ maxWidth: "600px" }}
              >
                Повечето разработчици правят сайтове. Аз правя сайтове, които се класират. Техническото SEO е вградено от ден едно.
              </Text>
            </Column>
          </RevealFx>

          <Grid columns="3" s={{ columns: 1 }} gap="l" style={{ maxWidth: "100%", overflow: "hidden" }}>
            {services.map((svc, i) => (
              <RevealFx key={svc.label} delay={0.1 * (i + 1)}>
                <Card
                  radius="l"
                  direction="column"
                  border="neutral-alpha-medium"
                  fillWidth
                  gap="0"
                >
                  {/* Header stripe */}
                  <Row
                    fillWidth
                    paddingX="m"
                    paddingY="s"
                    gap="s"
                    vertical="center"
                    style={{ color: svc.color }}
                  >
                    {svc.icon}
                    <Text variant="label-default-s">{svc.label}</Text>
                  </Row>

                  <Column fillWidth paddingX="m" paddingY="l" gap="m" flex={1} align="start">
                    <Text variant="body-default-xl" wrap="balance">
                      {svc.title}
                    </Text>
                    <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance">
                      {svc.description}
                    </Text>
                    <Column gap="xs">
                      {svc.features.map((f) => (
                        <Text key={f} variant="body-default-s">
                          ✓ {f}
                        </Text>
                      ))}
                    </Column>
                  </Column>

                  <Column paddingX="m" paddingBottom="m">
                    <Button href={svc.href} variant="primary" size="m" prefixIcon="arrowRight">
                      Научете повече
                    </Button>
                  </Column>
                </Card>
              </RevealFx>
            ))}
          </Grid>
        </Column>

        {/* ─── СТЕК ─────────────────────────────────────────────────────────── */}
        <Column gap="l" align="center" paddingY="l" fillWidth>
          <RevealFx>
            <Column gap="s" align="center">
              <Badge variant="neutral" size="m">Tech Stack</Badge>
              <Heading variant="display-strong-m" align="center">
                Инструментите, с Които Работя
              </Heading>
            </Column>
          </RevealFx>
          <Grid columns="4" s={{ columns: 2 }} gap="m" style={{ maxWidth: "100%", overflow: "hidden" }}>
            {[
              { label: "Next.js 15", sub: "App Router", icon: <SiNextdotjs size={24} /> },
              { label: "React 19", sub: "Server Components", icon: <FaReact size={24} color="#61DAFB" /> },
              { label: "Technical SEO", sub: "Core Web Vitals", icon: <FaSearch size={24} color="var(--brand-strong)" /> },
              { label: "Schema.org", sub: "Structured Data", icon: <SiGooglesearchconsole size={24} color="var(--success-strong)" /> },
            ].map((item) => (
              <RevealFx key={item.label} delay={0.1}>
                <Card padding="m" radius="l" border="neutral-alpha-medium" fillWidth>
                  <Column gap="s" align="center" horizontal="center">
                    {item.icon}
                    <Text variant="label-strong-s" align="center">{item.label}</Text>
                    <Text variant="label-default-xs" onBackground="neutral-weak" align="center">
                      {item.sub}
                    </Text>
                  </Column>
                </Card>
              </RevealFx>
            ))}
          </Grid>
        </Column>

        {/* ─── РЕЗУЛТАТИ ────────────────────────────────────────────────────── */}
        <Column gap="l" align="center" paddingY="xl" fillWidth>
          <RevealFx>
            <Column gap="s" align="center">
              <Badge variant="brand" size="m">Доказани резултати</Badge>
              <Heading variant="display-strong-m" align="center">
                Числата Говорят Сами
              </Heading>
              <Text variant="body-default-l" align="center" onBackground="neutral-weak" style={{ maxWidth: "560px" }}>
                Средни резултати от реални клиенти — измерени, не прогнозирани.
              </Text>
            </Column>
          </RevealFx>

          <Grid columns="3" s={{ columns: 1 }} gap="m" style={{ maxWidth: "100%", overflow: "hidden" }}>
            {[
              { metric: "+433%", label: "Ръст в органичен трафик", sub: "средно за 10 месеца", icon: "trending-up" },
              { metric: "+585%", label: "Увеличение на приходите", sub: "спрямо базовия период", icon: "dollar-sign" },
              { metric: "+148%", label: "Подобрение на конверсията", sub: "повече запитвания/поръчки", icon: "target" },
            ].map((stat) => (
              <RevealFx key={stat.metric} delay={0.1}>
                <Card padding="xl" radius="xl" border="brand-alpha-medium" fillWidth>
                  <Column gap="s" align="center" horizontal="center">
                    <Icon name={stat.icon as any} size="l" onBackground="brand-strong" />
                    <Heading variant="display-strong-l" align="center" style={{ color: "var(--brand-strong)" }}>
                      {stat.metric}
                    </Heading>
                    <Text variant="label-strong-m" align="center">{stat.label}</Text>
                    <Text variant="label-default-xs" onBackground="neutral-weak" align="center">
                      {stat.sub}
                    </Text>
                  </Column>
                </Card>
              </RevealFx>
            ))}
          </Grid>
        </Column>

        {/* ─── РЕВЮТА ───────────────────────────────────────────────────────── */}
        <Column gap="l" align="center" paddingY="xl" fillWidth>
          <RevealFx>
            <Column gap="s" align="center">
              <Badge variant="neutral" size="m">Клиентски отзиви</Badge>
              <Heading variant="display-strong-m" align="center">
                Какво Казват Клиентите
              </Heading>
            </Column>
          </RevealFx>

          <Grid columns="3" s={{ columns: 1 }} gap="l" style={{ maxWidth: "100%", overflow: "hidden" }}>
            {testimonials.map((t, i) => (
              <RevealFx key={t.name} delay={0.1 * (i + 1)}>
                <Card padding="xl" radius="xl" border="neutral-alpha-medium" fillWidth>
                  <Column gap="m">
                    {/* Stars */}
                    <Row gap="xs" vertical="center">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <FaStar key={j} size={14} color="var(--warning-strong)" />
                      ))}
                    </Row>

                    {/* Quote */}
                    <Column gap="xs">
                      <FaQuoteLeft size={16} color="var(--neutral-alpha-medium)" />
                      <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                        {t.text}
                      </Text>
                    </Column>

                    {/* Author */}
                    <Row gap="m" vertical="center">
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          background: "var(--brand-alpha-medium)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: 13,
                          color: "var(--brand-strong)",
                          flexShrink: 0,
                        }}
                      >
                        {t.initials}
                      </div>
                      <Column gap="0">
                        <Text variant="label-strong-s">{t.name}</Text>
                        <Text variant="label-default-xs" onBackground="neutral-weak">
                          {t.role}
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Card>
              </RevealFx>
            ))}
          </Grid>
        </Column>

        {/* ─── ПРОЦЕС ───────────────────────────────────────────────────────── */}
        <Column gap="l" align="center" paddingY="l" fillWidth>
          <RevealFx>
            <Column gap="s" align="center">
              <Badge variant="neutral" size="m">Как работим</Badge>
              <Heading variant="display-strong-m" align="center">
                4 Стъпки до Реални Резултати
              </Heading>
            </Column>
          </RevealFx>

          <Grid columns="2" s={{ columns: 1 }} gap="l" style={{ maxWidth: "100%", overflow: "hidden" }}>
            {[
              {
                step: "01",
                title: "SEO Одит & Анализ",
                desc: "Пълен технически одит на текущия ви сайт — скорост, структура, ключови думи, конкуренция и пропуснати възможности.",
                icon: "search",
              },
              {
                step: "02",
                title: "Стратегия & Архитектура",
                desc: "Изграждаме SEO архитектура за Next.js проекта — URL структура, вътрешно свързване, schema markup план.",
                icon: "layout",
              },
              {
                step: "03",
                title: "Разработка & Оптимизация",
                desc: "Next.js разработка с вградено техническо SEO — SSR/SSG стратегия, метаданни, sitemap, robots.txt, Core Web Vitals.",
                icon: "code",
              },
              {
                step: "04",
                title: "Мониторинг & Растеж",
                desc: "Месечни отчети с Google Search Console, Analytics и позиции. Постоянни подобрения на базата на данни.",
                icon: "trending-up",
              },
            ].map((s, i) => (
              <RevealFx key={s.step} delay={0.1 * (i + 1)}>
                <Card padding="xl" radius="xl" border="neutral-alpha-medium" fillWidth>
                  <Row gap="m" vertical="start">
                    <Text
                      variant="display-strong-m"
                      style={{ color: "var(--neutral-alpha-strong)", lineHeight: 1, minWidth: 44 }}
                    >
                      {s.step}
                    </Text>
                    <Column gap="s">
                      <Text variant="body-default-xl">{s.title}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {s.desc}
                      </Text>
                    </Column>
                  </Row>
                </Card>
              </RevealFx>
            ))}
          </Grid>
        </Column>

        {/* ─── BLOG ─────────────────────────────────────────────────────────── */}
        {routes["/blog"] && (
          <Column fillWidth maxWidth="l" gap="m" paddingY="l">
            <Heading as="h2" variant="display-strong-xs" align="center">
              Последни Публикации
            </Heading>
            <Posts range={[1, 2]} columns="2" />
          </Column>
        )}

        {/* ─── ПРОЕКТИ ──────────────────────────────────────────────────────── */}
        <Projects range={[1, 3]} />

        {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
        <Column gap="l" align="center" paddingY="xl" fillWidth>
          <RevealFx>
            <Column gap="s" align="center">
              <Badge variant="neutral" size="m">FAQ</Badge>
              <Heading variant="display-strong-m" align="center">
                Често Задавани Въпроси
              </Heading>
            </Column>
          </RevealFx>

          <RevealFx delay={0.1}>
            <AccordionGroup
              items={[
                {
                  title: "Защо да избера Next.js вместо WordPress?",
                  content: (
                    <Text onBackground="neutral-weak">
                      <strong>Next.js</strong> дава нативно предимство в SEO — Server-Side Rendering, статично генериране и перфектни Core Web Vitals. WordPress изисква куп плъгини, за да постигне същото, и обикновено остава по-бавен. За сериозни SEO резултати Next.js е стандартът.
                    </Text>
                  ),
                },
                {
                  title: "Колко бързо се виждат SEO резултати?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Технически подобрения (скорост, structured data) Google усеща в рамките на 2-4 седмици. Позиции за конкурентни ключови думи обикновено се подобряват видимо след 2-4 месеца. Дългосрочният ефект е кумулативен — колкото по-рано започнем, толкова по-добре.
                    </Text>
                  ),
                },
                {
                  title: "Правите ли локално SEO за физически магазини?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Да. Специализирам в <strong>LocalBusiness Schema.org</strong>, оптимизация на Google Business Profile, локални ключови думи и Citations management. Клиентите ми като DalGado Pizza & Coffee са на топ позиции в Google Maps.
                    </Text>
                  ),
                },
                {
                  title: "Работите ли само в София?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Базиран съм в <strong>София, България</strong>, но работя дистанционно с клиенти из цяла България и в чужбина. Комуникацията се осъществява онлайн — без компромис с качеството.
                    </Text>
                  ),
                },
                {
                  title: "Включено ли е поддържането след изграждане на сайта?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Предлагам месечни пакети за <strong>SEO мониторинг и поддръжка</strong> — Google Search Console отчети, актуализации на съдържанието, технически следене и реакция при алгоритмични промени. Цената зависи от обема на работа.
                    </Text>
                  ),
                },
                {
                  title: "Как изглежда Schema.org имплементацията ви?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Имплементирам пълен <strong>Schema.org граф</strong> — Organization, Person, LocalBusiness, Service, Review, AggregateRating, WebSite с SearchAction. Всичко е тествано с Google Rich Results Test и валидирано в Schema.org Validator.
                    </Text>
                  ),
                },
              ]}
            />
          </RevealFx>
        </Column>

        {/* ─── CTA ──────────────────────────────────────────────────────────── */}
        <Column align="center" paddingY="xl" gap="l" fillWidth>
          <RevealFx>
            <Column gap="m" align="center">
              <Badge variant="brand" size="m">Готови ли сте?</Badge>
              <Heading variant="display-strong-l" align="center" style={{ maxWidth: "700px" }}>
                Нека Изградим Сайт, Който{" "}
                <span style={{ color: "var(--brand-strong)" }}>Работи за Вас</span> 24/7
              </Heading>
              <Text
                variant="body-default-l"
                align="center"
                onBackground="neutral-weak"
                style={{ maxWidth: "520px" }}
              >
                Безплатна консултация. Анализирам текущия ви сайт и ви казвам конкретно какво можем да подобрим.
              </Text>
            </Column>
          </RevealFx>

          <RevealFx delay={0.2}>
            <Flex horizontal="center" vertical="center" gap="l" wrap>
              <Button variant="primary" prefixIcon="rocket" size="l" href="/kontakti">
                Заявете Безплатна Консултация
              </Button>
              <Button variant="secondary" size="l" href="/za-men">
                Вижте Моето Портфолио
              </Button>
            </Flex>
          </RevealFx>

          {/* Contact details */}
          <RevealFx delay={0.3}>
            <Row gap="l" horizontal="center" vertical="center" wrap paddingTop="m">
              <Row gap="s" vertical="center">
                <FaMapMarkerAlt size={14} color="var(--neutral-medium)" />
                <Text variant="label-default-s" onBackground="neutral-weak">
                  София, България
                </Text>
              </Row>
              <Row gap="s" vertical="center">
                <FaEnvelope size={14} color="var(--neutral-medium)" />
                <Text variant="label-default-s" onBackground="neutral-weak">
                  seo@stanchev.bg
                </Text>
              </Row>
              <Row gap="s" vertical="center">
                <FaLinkedin size={14} color="var(--neutral-medium)" />
                <Text variant="label-default-s" onBackground="neutral-weak">
                  linkedin.com/in/stanchev-seo
                </Text>
              </Row>
            </Row>
          </RevealFx>
        </Column>

      </Column>
    </>
  );
}
