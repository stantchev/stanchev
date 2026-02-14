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
  CodeBlock,
  Tag,
} from "@once-ui-system/core";
import { baseURL } from "@/resources";
import type { Metadata } from "next";
import Script from "next/script";
import { 
  FaCode, 
  FaRocket, 
  FaCheckCircle,
  FaWordpress,
  FaBolt,
  FaShieldAlt,
  FaClock,
  FaUsers,
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
  FaChartLine,
  FaMobile,
} from 'react-icons/fa';
import { SiReact, SiWordpress, SiGraphql } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

export const metadata: Metadata = {
  title: "Headless WordPress | Next.js + WP CMS | Модерен подход | Stanchev Digital",
  description: "Професионална Headless WordPress разработка в България. WordPress CMS за управление + React/Next.js frontend за скорост и UX. Най-доброто от двата свята - лесно управление + modern performance. От €1500.",
  keywords: "Headless WordPress, WordPress API, Next.js WordPress, React WordPress, WP REST API, GraphQL WordPress, JAMstack, декъплинг WordPress, modern WordPress, WordPress frontend",
  alternates: {
    canonical: `${baseURL}/web/headless-wordpress`,
  },
  openGraph: {
    title: "Headless WordPress | Next.js + WP CMS | Модерен подход",
    description: "WordPress CMS за управление + React/Next.js frontend за скорост. Най-доброто от двата свята.",
    url: `${baseURL}/web/headless-wordpress`,
    siteName: "Stanchev Digital",
    images: [
      {
        url: `${baseURL}/images/og/headless-wordpress.jpg`,
        width: 1200,
        height: 630,
        alt: "Headless WordPress Development",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Headless WordPress | Next.js + WP CMS",
    description: "WordPress управление + React/Next.js скорост и performance",
    images: [`${baseURL}/images/og/headless-wordpress.jpg`],
    creator: "@stanchev",
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

export default function HeadlessWordPressPage() {
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
            name: "Headless WordPress Разработка",
            description: "Професионална Headless WordPress разработка - WordPress CMS за управление комбиниран с React/Next.js frontend за максимална скорост и UX.",
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
              sameAs: [
                "https://www.linkedin.com/in/stantcheff/",
                "https://github.com/stantchev/"
              ],
            },
            areaServed: {
              "@type": "Country",
              name: "България",
            },
            serviceType: "Headless CMS Development",
            category: "WordPress Development",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "1500",
              highPrice: "8000",
              offers: [
                {
                  "@type": "Offer",
                  name: "Headless WP Starter",
                  price: "1500",
                  priceCurrency: "EUR",
                  description: "Basic Headless WordPress с Next.js frontend",
                },
                {
                  "@type": "Offer",
                  name: "Headless WP Business",
                  price: "3500",
                  priceCurrency: "EUR",
                  description: "Advanced с custom post types и ACF",
                },
                {
                  "@type": "Offer",
                  name: "Headless WP Enterprise",
                  price: "6000+",
                  priceCurrency: "EUR",
                  description: "GraphQL API с WPGraphQL и multi-site",
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "7",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />

      {/* 2. TechArticle Schema */}
      <Script
        id="tech-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Headless WordPress: Пълно ръководство и best practices",
            description: "Как работи Headless WordPress архитектурата, предимства, недостатъци и практически примери с код.",
            author: {
              "@type": "Person",
              name: "Stanchev",
              url: `${baseURL}/za-men`,
            },
            publisher: {
              "@type": "Organization",
              name: "Stanchev Digital",
              logo: {
                "@type": "ImageObject",
                url: `${baseURL}/images/logo.png`,
              },
            },
            datePublished: "2024-02-15",
            dateModified: "2026-02-15",
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
                name: "Какво е Headless WordPress?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Headless WordPress е архитектура, при която WordPress се използва само като CMS (backend) за управление на съдържание, а frontend-ът се изгражда с модерни технологии като React/Next.js. Комуникацията става чрез REST API или GraphQL.",
                },
              },
              {
                "@type": "Question",
                name: "Какви са предимствата на Headless WordPress?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Предимствата включват: 3x по-бърза скорост (SSR/SSG), по-добро SEO, по-висока сигурност (separated concerns), по-добро UX, запазване на WordPress admin panel за управление, и възможност за multi-platform (web, mobile, IoT).",
                },
              },
              {
                "@type": "Question",
                name: "Колко струва Headless WordPress проект?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Starter проект от €1500 (basic setup), Business от €3500 (custom post types, ACF), Enterprise от €6000+ (GraphQL, multi-site, advanced features). Безплатна консултация.",
                },
              },
              {
                "@type": "Question",
                name: "Колко време отнема разработката?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Starter: 4-5 седмици, Business: 6-8 седмици, Enterprise: 10-14 седмици. Включва WordPress setup, API integration, frontend development и testing.",
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
                name: "Headless WordPress",
                item: `${baseURL}/web/headless-wordpress`,
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
                name: "Headless WordPress Разработка",
              },
              author: {
                "@type": "Person",
                name: "Димитър Г.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody: "Отличен Headless WP сайт - запазихме познатия WordPress admin, но сайтът е светкавично бърз. Най-доброто от двата свята.",
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "Service",
                name: "Headless WordPress Разработка",
              },
              author: {
                "@type": "Person",
                name: "Антония В.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody: "Екипът продължава да използва WordPress за публикуване, но клиентите виждат модерен и бърз сайт. Перфектно решение!",
            },
          ]),
        }}
      />

      {/* 6. HowTo Schema */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Как работи Headless WordPress",
            description: "Стъпка по стъпка обяснение как WordPress API комуникира с React/Next.js frontend",
            step: [
              {
                "@type": "HowToStep",
                name: "WordPress Backend Setup",
                text: "Инсталираме WordPress и конфигурираме WP REST API или WPGraphQL за излагане на данни",
              },
              {
                "@type": "HowToStep",
                name: "API Configuration",
                text: "Създаваме custom endpoints, authentication и правим API optimization",
              },
              {
                "@type": "HowToStep",
                name: "Frontend Development",
                text: "Изграждаме Next.js/React frontend който консумира WordPress API",
              },
              {
                "@type": "HowToStep",
                name: "Deployment",
                text: "Deploy на WordPress на традиционен хостинг и frontend на Vercel/Netlify",
              },
            ],
          }),
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
                <Badge size="l" style={{ backgroundColor: primaryColor, color: 'white' }}>
                  <Flex gap="4" align="center">
                    <SiWordpress size={20} />
                    <Text>+</Text>
                    <RiNextjsFill size={20} />
                    <Text>Най-доброто от двата свята</Text>
                  </Flex>
                </Badge>

                <Heading
                  wrap="balance"
                  variant="display-strong-xl"
                  align="center"
                  style={{ lineHeight: "1.2" }}
                >
                  Headless WordPress - Запази Управлението, Спечели Скорост
                </Heading>
                <Text
                  wrap="balance"
                  onBackground="neutral-weak"
                  align="center"
                  variant="display-default-s"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  WordPress CMS за лесно управление на съдържание + React/Next.js frontend 
                  за светкавична скорост и отлично SEO. Получи познатия WordPress admin 
                  без недостатъците на традиционния WordPress.
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
                  <Text onBackground="neutral-weak">3x по-бързо</Text>
                </Flex>
                <Flex gap="4" align="center">
                  <SiWordpress color={primaryColor} size={20} />
                  <Text onBackground="neutral-weak">WordPress admin</Text>
                </Flex>
                <Flex gap="4" align="center">
                  <FaCheckCircle color={primaryColor} size={20} />
                  <Text onBackground="neutral-weak">7+ завършени проекта</Text>
                </Flex>
              </Flex>
            </RevealFx>
          </Column>

          {/* WHAT IS HEADLESS WP */}
          <Column fillWidth gap="l" align="center" paddingY="xl">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Icon name="info" size="l" onBackground="brand-strong" />
                <Heading variant="display-strong-m" align="center">
                  Какво е Headless WordPress?
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Headless WordPress е модерна архитектура, при която WordPress се използва 
                  само като CMS (backend) за управление, а frontend-ът се изгражда със 
                  съвременни технологии като React или Next.js.
                </Text>
              </Column>
            </RevealFx>

            <RevealFx delay={0.1}>
              <Card fillWidth padding="xl" radius="xl" style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <Column fillWidth gap="l">
                  <Heading variant="heading-strong-l" align="center">
                    Как работи архитектурата?
                  </Heading>

                  <Grid fillWidth columns={3} s={{ columns: 1 }} gap="l">
                    <Card fillWidth padding="l" radius="l" style={{ background: `${primaryColor}10` }}>
                      <Column fillWidth gap="s" align="center">
                        <SiWordpress size={48} color={primaryColor} />
                        <Text variant="heading-strong-m" align="center">1. WordPress Backend</Text>
                        <Text align="center" onBackground="neutral-weak" variant="body-default-s">
                          WordPress CMS за създаване и управление на съдържание. 
                          Познатият admin panel остава непроменен.
                        </Text>
                      </Column>
                    </Card>

                    <Card fillWidth padding="l" radius="l" style={{ background: `${primaryColor}10` }}>
                      <Column fillWidth gap="s" align="center">
                        <FaPlug size={48} color={primaryColor} />
                        <Text variant="heading-strong-m" align="center">2. API Layer</Text>
                        <Text align="center" onBackground="neutral-weak" variant="body-default-s">
                          WP REST API или GraphQL излага данните. 
                          Frontend получава JSON вместо HTML.
                        </Text>
                      </Column>
                    </Card>

                    <Card fillWidth padding="l" radius="l" style={{ background: `${primaryColor}10` }}>
                      <Column fillWidth gap="s" align="center">
                        <RiNextjsFill size={48} color={primaryColor} />
                        <Text variant="heading-strong-m" align="center">3. React/Next.js Frontend</Text>
                        <Text align="center" onBackground="neutral-weak" variant="body-default-s">
                          Модерен frontend с SSR/SSG за максимална 
                          скорост, SEO и потребителско изживяване.
                        </Text>
                      </Column>
                    </Card>
                  </Grid>

                  {/* Code Example */}
                  <Column fillWidth gap="m" paddingTop="l">
                    <Text variant="heading-strong-m">📝 Как се извличат данните:</Text>
                    
                    <CodeBlock
					  lineNumbers
					  compact
					  codes={[
						{
						  language: "ts",
						  label: "Next.js страница, която използва WordPress API",
						  code:
					`import { WordPressPost } from '@/types/wordpress';

					// Server-side data fetching
					export async function getStaticProps() {
					  // Извличаме постове от WordPress REST API
					  const res = await fetch('https://yoursite.com/wp-json/wp/v2/posts');
					  const posts: WordPressPost[] = await res.json();

					  return {
						props: { posts },
						revalidate: 60, // Revalidate every 60 seconds
					  };
					}

					// React компонент
					export default function BlogPage({ posts }: { posts: WordPressPost[] }) {
					  return (
						<div>
						  <h1>Blog</h1>
						  {posts.map(post => (
							<article key={post.id}>
							  <h2>{post.title.rendered}</h2>
							  <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
							  <Link href={\`/blog/\${post.slug}\`}>Прочети повече</Link>
							</article>
						  ))}
						</div>
					  );
					}`
						}
					  ]}
					/>

                    <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: 'italic' }}>
                      💡 WordPress остава на традиционен хостинг, Next.js се deploy-ва на Vercel/Netlify за максимална производителност.
                    </Text>
                  </Column>
                </Column>
              </Card>
            </RevealFx>
          </Column>

          {/* BENEFITS */}
          <Column fillWidth gap="l" align="center" paddingY="xl">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Heading variant="display-strong-m" align="center">
                  Защо Headless WordPress?
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Комбинацията от WordPress CMS и React/Next.js frontend ти дава 
                  най-доброто от двата свята без компромиси.
                </Text>
              </Column>
            </RevealFx>

            <Grid fillWidth columns={2} s={{ columns: 1 }} gap="l">
              <RevealFx delay={0.1}>
                <Card fillWidth padding="xl" radius="xl" style={{ border: `2px solid ${primaryColor}30` }}>
                  <Column fillWidth gap="m">
                    <Flex gap="8" align="center">
                      <FaBolt size={32} color={primaryColor} />
                      <Heading as="h3" variant="heading-strong-l">
                        Скорост и Performance
                      </Heading>
                    </Flex>
                    <Text onBackground="neutral-weak">
                      Next.js SSR/SSG прави сайта 3x по-бърз от традиционен WordPress. 
                      Lighthouse scores 90-100/100 и отлични Core Web Vitals.
                    </Text>
                    <Column gap="4" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Static Site Generation (SSG)</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Incremental Static Regeneration</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Image optimization</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">CDN caching</Text>
                      </Flex>
                    </Column>
                  </Column>
                </Card>
              </RevealFx>

              <RevealFx delay={0.2}>
                <Card fillWidth padding="xl" radius="xl" style={{ border: `2px solid ${primaryColor}30` }}>
                  <Column fillWidth gap="m">
                    <Flex gap="8" align="center">
                      <FaUsers size={32} color={primaryColor} />
                      <Heading as="h3" variant="heading-strong-l">
                        Запазено UX за редактори
                      </Heading>
                    </Flex>
                    <Text onBackground="neutral-weak">
                      Екипът продължава да работи с познатия WordPress admin panel. 
                      Gutenberg editor, плъгини и всичко останало работи нормално.
                    </Text>
                    <Column gap="4" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Познат WordPress admin</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Gutenberg block editor</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Advanced Custom Fields</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Без обучение на екипа</Text>
                      </Flex>
                    </Column>
                  </Column>
                </Card>
              </RevealFx>

              <RevealFx delay={0.3}>
                <Card fillWidth padding="xl" radius="xl" style={{ border: `2px solid ${primaryColor}30` }}>
                  <Column fillWidth gap="m">
                    <Flex gap="8" align="center">
                      <FaShieldAlt size={32} color={primaryColor} />
                      <Heading as="h3" variant="heading-strong-l">
                        По-висока сигурност
                      </Heading>
                    </Flex>
                    <Text onBackground="neutral-weak">
                      WordPress admin е скрит от публичния интернет. Посетителите 
                      виждат само статичен frontend без директен достъп до PHP/DB.
                    </Text>
                    <Column gap="4" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Separated concerns</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Скрит WP admin</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">API rate limiting</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">По-малко attack surface</Text>
                      </Flex>
                    </Column>
                  </Column>
                </Card>
              </RevealFx>

              <RevealFx delay={0.4}>
                <Card fillWidth padding="xl" radius="xl" style={{ border: `2px solid ${primaryColor}30` }}>
                  <Column fillWidth gap="m">
                    <Flex gap="8" align="center">
                      <FaGlobe size={32} color={primaryColor} />
                      <Heading as="h3" variant="heading-strong-l">
                        Multi-platform готовност
                      </Heading>
                    </Flex>
                    <Text onBackground="neutral-weak">
                      Едно WordPress backend може да захранва множество frontend-и - 
                      web, mobile app, IoT devices, smart TV и други платформи.
                    </Text>
                    <Column gap="4" paddingTop="s">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Web (Next.js)</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Mobile (React Native)</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">IoT devices</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Third-party integrations</Text>
                      </Flex>
                    </Column>
                  </Column>
                </Card>
              </RevealFx>
            </Grid>
          </Column>

          {/* COMPARISON */}
          <Column fillWidth gap="l" align="center" paddingY="xl">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Heading variant="display-strong-m" align="center">
                  Headless vs Traditional WordPress
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Виж конкретните разлики между традиционния WordPress подход 
                  и модерната Headless архитектура.
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
                      { key: "Headless WP", color: "green" },
                      { key: "Traditional WP", color: "red" }
                    ]}
                    data={[
                      { label: "Load Time (s)", "Headless WP": 1.0, "Traditional WP": 3.4 },
                      { label: "Time to Interactive (s)", "Headless WP": 1.5, "Traditional WP": 4.2 },
                      { label: "Lighthouse Score", "Headless WP": 95, "Traditional WP": 58 },
                      { label: "SEO Score", "Headless WP": 100, "Traditional WP": 72 }
                    ]}
                  />

                  <Grid fillWidth columns={2} s={{ columns: 1 }} gap="l">
                    <Card fillWidth padding="m" radius="l" style={{ background: `${primaryColor}10` }}>
                      <Column fillWidth gap="s">
                        <Text variant="heading-strong-s" style={{ color: primaryColor }}>
                          ✅ Headless WordPress
                        </Text>
                        <Text variant="body-default-s">✓ 3x по-бърз (SSG/SSR)</Text>
                        <Text variant="body-default-s">✓ Отлично SEO (100/100)</Text>
                        <Text variant="body-default-s">✓ Modern tech stack</Text>
                        <Text variant="body-default-s">✓ По-висока сигурност</Text>
                        <Text variant="body-default-s">✓ Multi-platform готовност</Text>
                        <Text variant="body-default-s">✓ Запазен WordPress admin</Text>
                      </Column>
                    </Card>

                    <Card fillWidth padding="m" radius="l" style={{ background: "rgba(239, 68, 68, 0.1)" }}>
                      <Column fillWidth gap="s">
                        <Text variant="heading-strong-s" style={{ color: "#ef4444" }}>
                          ⚠️ Traditional WordPress
                        </Text>
                        <Text variant="body-default-s">⚠ Бавно зареждане (3-5s)</Text>
                        <Text variant="body-default-s">⚠ По-слабо SEO (без оптимизация)</Text>
                        <Text variant="body-default-s">⚠ Стара архитектура</Text>
                        <Text variant="body-default-s">⚠ Security уязвимости</Text>
                        <Text variant="body-default-s">⚠ Само web platform</Text>
                        <Text variant="body-default-s">✓ Познат admin panel</Text>
                      </Column>
                    </Card>
                  </Grid>
                </Column>
              </Card>
            </RevealFx>
          </Column>

          {/* CODE EXAMPLES */}
          <Column fillWidth gap="l" align="center" paddingY="xl">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Icon name="code" size="l" onBackground="brand-strong" />
                <Heading variant="display-strong-m" align="center">
                  Практически примери с код
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Виж как практически се имплементира Headless WordPress с Next.js
                </Text>
              </Column>
            </RevealFx>

            <Column fillWidth gap="xl" style={{ maxWidth: "1000px", margin: "0 auto" }}>
              
              {/* Example 1: Fetching Posts */}
              <RevealFx delay={0.1}>
                <Card fillWidth padding="l" radius="l">
                  <Column fillWidth gap="m">
                    <Text variant="heading-strong-l">1. Извличане на постове от WordPress</Text>
                    <Text onBackground="neutral-weak">
                      Използваме WordPress REST API за извличане на постове и 
                      Next.js getStaticProps за SSG.
                    </Text>
                    
                    <CodeBlock
					  lineNumbers
					  compact
					  codes={[
						{
						  language: "typescript",
						  label: "WordPress API helper + Blog index страница",
						  code:
					`// lib/wordpress.ts - API helper функции
					const WP_API_URL = process.env.WORDPRESS_API_URL;

					export async function getAllPosts() {
					  const response = await fetch(\`\${WP_API_URL}/wp/v2/posts?_embed\`);
					  
					  if (!response.ok) {
						throw new Error('Failed to fetch posts');
					  }
					  
					  return response.json();
					}

					export async function getPostBySlug(slug: string) {
					  const response = await fetch(
						\`\${WP_API_URL}/wp/v2/posts?slug=\${slug}&_embed\`
					  );
					  const posts = await response.json();
					  return posts[0];
					}

					// pages/blog/index.tsx
					import { getAllPosts } from '@/lib/wordpress';

					export async function getStaticProps() {
					  const posts = await getAllPosts();
					  
					  return {
						props: { posts },
						revalidate: 60, // Revalidate every 60 seconds
					  };
					}

					export default function BlogIndex({ posts }) {
					  return (
						<div>
						  <h1>Blog</h1>
						  {posts.map(post => (
							<article key={post.id}>
							  <h2>{post.title.rendered}</h2>
							  <time>{new Date(post.date).toLocaleDateString('bg-BG')}</time>
							  <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
							  <Link href={\`/blog/\${post.slug}\`}>Прочети</Link>
							</article>
						  ))}
						</div>
					  );
					}`
						}
					  ]}
					/>

                  </Column>
                </Card>
              </RevealFx>

              {/* Example 2: GraphQL */}
              <RevealFx delay={0.2}>
                <Card fillWidth padding="l" radius="l">
                  <Column fillWidth gap="m">
                    <Flex gap="8" align="center">
                      <SiGraphql size={24} color={primaryColor} />
                      <Text variant="heading-strong-l">2. Използване на WPGraphQL (Advanced)</Text>
                    </Flex>
                    <Text onBackground="neutral-weak">
                      За по-сложни queries използваме WPGraphQL плъгин вместо REST API.
                    </Text>
                    
                    <CodeBlock
					  lineNumbers
					  compact
					  codes={[
						{
						  language: "typescript",
						  label: "WordPress GraphQL client",
						  code:
					`// lib/graphql.ts
					import { GraphQLClient } from 'graphql-request';

					const client = new GraphQLClient(process.env.WORDPRESS_GRAPHQL_URL);

					const GET_POSTS = \`
					  query GetPosts {
						posts(first: 10) {
						  nodes {
							id
							title
							slug
							excerpt
							date
							author {
							  node {
								name
								avatar {
								  url
								}
							  }
							}
							featuredImage {
							  node {
								sourceUrl
								altText
							  }
							}
							categories {
							  nodes {
								name
								slug
							  }
							}
						  }
						}
					  }
					\`;

					export async function getPosts() {
					  const data = await client.request(GET_POSTS);
					  return data.posts.nodes;
					}

					// Примерна употреба
					const posts = await getPosts();`
						}
					  ]}
					/>

                    <Card fillWidth padding="s" radius="m" style={{ background: `${primaryColor}10` }}>
                      <Text variant="body-default-s">
                        💡 <strong>Защо GraphQL?</strong> По-мощен от REST API - можеш да извлечеш 
                        точно данните които ти трябват в един query (overfetching/underfetching решени).
                      </Text>
                    </Card>
                  </Column>
                </Card>
              </RevealFx>

              {/* Example 3: Custom Post Types */}
              <RevealFx delay={0.3}>
                <Card fillWidth padding="l" radius="l">
                  <Column fillWidth gap="m">
                    <Text variant="heading-strong-l">3. Custom Post Types с ACF</Text>
                    <Text onBackground="neutral-weak">
                      Advanced Custom Fields данните са достъпни през API автоматично.
                    </Text>
                    
                    <CodeBlock
					  lineNumbers
					  compact
					  codes={[
						{
						  language: "typescript",
						  label: "WordPress Custom Post Type + Next.js properties страница",
						  code:
					`// WordPress: Регистрираме Custom Post Type 'property'
					// functions.php
					function register_property_post_type() {
					  register_post_type('property', [
						'label' => 'Properties',
						'public' => true,
						'show_in_rest' => true, // Важно за REST API
						'supports' => ['title', 'editor', 'thumbnail', 'custom-fields']
					  ]);
					}
					add_action('init', 'register_property_post_type');

					// Next.js: Извличаме properties
					export async function getProperties() {
					  const response = await fetch(
						\`\${WP_API_URL}/wp/v2/property?_embed&acf_format=standard\`
					  );
					  return response.json();
					}

					// pages/properties/[slug].tsx
					export async function getStaticProps({ params }) {
					  const property = await getPropertyBySlug(params.slug);
					  
					  return {
						props: {
						  title: property.title.rendered,
						  price: property.acf.price,
						  bedrooms: property.acf.bedrooms,
						  location: property.acf.location,
						  images: property.acf.gallery,
						},
						revalidate: 300,
					  };
					}`
						}
					  ]}
					/>

                  </Column>
                </Card>
              </RevealFx>

              {/* Example 4: Image Optimization */}
              <RevealFx delay={0.4}>
                <Card fillWidth padding="l" radius="l">
                  <Column fillWidth gap="m">
                    <Text variant="heading-strong-l">4. Image Optimization</Text>
                    <Text onBackground="neutral-weak">
                      Next.js Image компонент автоматично оптимизира WordPress изображения.
                    </Text>
                    
                    <CodeBlock
					  lineNumbers
					  compact
					  codes={[
						{
						  language: "typescript",
						  label: "Next.js WordPress Image component",
						  code:
					`// components/WordPressImage.tsx
					import Image from 'next/image';

					interface Props {
					  src: string;
					  alt: string;
					  width: number;
					  height: number;
					}

					export function WordPressImage({ src, alt, width, height }: Props) {
					  // WordPress изображението минава през Next.js image optimizer
					  return (
						<Image
						  src={src}
						  alt={alt}
						  width={width}
						  height={height}
						  quality={85}
						  loading="lazy"
						  placeholder="blur"
						  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
						/>
					  );
					}

					// Употреба
					<WordPressImage
					  src={post.featuredImage.node.sourceUrl}
					  alt={post.featuredImage.node.altText}
					  width={800}
					  height={600}
					/>`
						}
					  ]}
					/>

                    <Card fillWidth padding="s" radius="m" style={{ background: `${primaryColor}10` }}>
                      <Text variant="body-default-s">
                        ⚡ <strong>Performance boost:</strong> Next.js автоматично преобразува изображенията 
                        в WebP формат, добавя lazy loading и генерира responsive versions.
                      </Text>
                    </Card>
                  </Column>
                </Card>
              </RevealFx>

            </Column>
          </Column>

          {/* TECH STACK */}
          <Column fillWidth gap="l" align="center" paddingY="xl">
            <RevealFx>
              <Column fillWidth gap="m" align="center">
                <Heading variant="display-strong-m" align="center">
                  Tech Stack
                </Heading>
                <Text 
                  variant="body-default-xl" 
                  align="center" 
                  onBackground="neutral-weak"
                  style={{ maxWidth: "48rem", margin: "0 auto" }}
                >
                  Модерни технологии за максимална производителност и developer experience
                </Text>
              </Column>
            </RevealFx>

            <RevealFx delay={0.1}>
              <Card fillWidth padding="xl" radius="xl" style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <Grid fillWidth columns={3} s={{ columns: 1 }} gap="l">
                  <Column fillWidth gap="m">
                    <Flex gap="8" align="center">
                      <SiWordpress size={28} color={primaryColor} />
                      <Text variant="heading-strong-m">Backend</Text>
                    </Flex>
                    <Column gap="4">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">WordPress 6+</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">WP REST API</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">WPGraphQL</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Advanced Custom Fields</Text>
                      </Flex>
                    </Column>
                  </Column>

                  <Column fillWidth gap="m">
                    <Flex gap="8" align="center">
                      <RiNextjsFill size={28} color={primaryColor} />
                      <Text variant="heading-strong-m">Frontend</Text>
                    </Flex>
                    <Column gap="4">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Next.js 14+</Text>
                      </Flex>
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
                    </Column>
                  </Column>

                  <Column fillWidth gap="m">
                    <Flex gap="8" align="center">
                      <FaServer size={28} color={primaryColor} />
                      <Text variant="heading-strong-m">Deployment</Text>
                    </Flex>
                    <Column gap="4">
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Vercel / Netlify</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">Traditional WP hosting</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">CDN (Cloudflare)</Text>
                      </Flex>
                      <Flex gap="4" align="center">
                        <FaCheckCircle color={primaryColor} size={14} />
                        <Text variant="body-default-s">CI/CD pipeline</Text>
                      </Flex>
                    </Column>
                  </Column>
                </Grid>
              </Card>
            </RevealFx>
          </Column>

          {/* PRICING */}
          <Column fillWidth gap="l" align="center" paddingY="xl" id="paketi">
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
                  Ясни пакети в евро без скрити такси
                </Text>
              </Column>
            </RevealFx>

            <Grid fillWidth columns={3} s={{ columns: 1 }} gap="l">
              
              {/* Starter */}
              <RevealFx delay={0.1}>
                <Card fillWidth padding="l" radius="l" style={{ border: `1px solid ${primaryColor}30` }}>
                  <Column fillWidth gap="m">
                    <Tag variant="neutral">За малки сайтове</Tag>
                    <Heading as="h3">Headless WP Starter</Heading>
                    <Flex gap="4" align="baseline">
                      <Text variant="display-strong-l" style={{ color: primaryColor }}>€1500</Text>
                      <Text onBackground="neutral-weak" variant="body-default-s">еднократно</Text>
                    </Flex>

                    <Column fillWidth gap="4" paddingTop="m">
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">WordPress setup + REST API</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Next.js frontend (до 10 страници)</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Blog система</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">SEO оптимизация</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Responsive design</Text>
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
                    <Badge size="l" style={{ backgroundColor: primaryColor, color: 'white' }}>
                      ⭐ Най-популярен
                    </Badge>
                    <Heading as="h3">Headless WP Business</Heading>
                    <Flex gap="4" align="baseline">
                      <Text variant="display-strong-l" style={{ color: primaryColor }}>€3500</Text>
                      <Text onBackground="neutral-weak" variant="body-default-s">еднократно</Text>
                    </Flex>

                    <Column fillWidth gap="4" paddingTop="m">
                      <Text onBackground="neutral-weak"><strong>Всичко от Starter +</strong></Text>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Custom Post Types</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Advanced Custom Fields Pro</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Custom taxonomies</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Preview functionality</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Multi-language (Polylang)</Text>
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
                    <Heading as="h3">Headless WP Enterprise</Heading>
                    <Flex gap="4" align="baseline">
                      <Text variant="display-strong-l" style={{ color: primaryColor }}>€6000+</Text>
                    </Flex>

                    <Column fillWidth gap="4" paddingTop="m">
                      <Text onBackground="neutral-weak"><strong>Всичко от Business +</strong></Text>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">WPGraphQL implementation</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">WordPress Multisite</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Advanced caching strategy</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Custom WP plugins</Text>
                      </Flex>
                      <Flex gap="4" align="start">
                        <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} size={14} />
                        <Text variant="body-default-s">Load testing & optimization</Text>
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

            <Card fillWidth padding="l" radius="l" style={{ background: `${primaryColor}10`, maxWidth: "900px", margin: "0 auto" }}>
              <Column fillWidth gap="4" align="center">
                <FaMoneyBillWave size={32} color={primaryColor} />
                <Heading as="h3" align="center">
                  Hosting разходи
                </Heading>
                <Text align="center" onBackground="neutral-weak">
                  <strong>WordPress:</strong> €5-15/месец (традиционен WP хостинг)<br/>
                  <strong>Frontend:</strong> €0-20/месец (Vercel free tier или pro)<br/>
                  Общо: ~€5-35/месец (зависи от трафика)
                </Text>
              </Column>
            </Card>
          </Column>

          {/* FAQ */}
          <Column fillWidth gap="l" align="center" paddingY="xl">
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
                      title: "Какво е Headless WordPress точно?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Headless WordPress е архитектура, при която WordPress се използва само като backend CMS 
                          (за управление на съдържание), а frontend-ът се изгражда с React/Next.js. Комуникацията 
                          става чрез REST API или GraphQL. Екипът продължава да работи с познатия WordPress admin, 
                          но посетителите виждат модерен, бърз frontend.
                        </Text>
                      ),
                    },
                    {
                      title: "Какви са предимствата спрямо традиционен WordPress?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Ключови предимства: 3x по-бърза скорост (SSG/SSR), отлично SEO (100/100 Lighthouse), 
                          по-висока сигурност (separated concerns), запазен WordPress admin за екипа, възможност 
                          за multi-platform (web, mobile, IoT), по-добро developer experience и по-лесно мащабиране.
                        </Text>
                      ),
                    },
                    {
                      title: "Колко време отнема разработката?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Starter проект: 4-5 седмици (WordPress setup, basic Next.js frontend, blog). 
                          Business: 6-8 седмици (CPT, ACF, advanced features). Enterprise: 10-14 седмици 
                          (GraphQL, multisite, complex logic). Включва testing и deployment.
                        </Text>
                      ),
                    },
                    {
                      title: "Колко струва Headless WordPress проект?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Starter от €1500 (basic setup), Business от €3500 (CPT, ACF, multilang), 
                          Enterprise от €6000+ (GraphQL, multisite, custom). Месечни разходи: 
                          €5-35 за hosting (WP + frontend). Безплатна консултация и детайлна оферта.
                        </Text>
                      ),
                    },
                    {
                      title: "Може ли екипът да продължи да използва WordPress админ панела?",
                      content: (
                        <Text onBackground="neutral-weak">
                          Да! Това е една от най-големите предимства. WordPress admin остава напълно 
                          непроменен - Gutenberg editor, плъгини, ACF, всичко работи както преди. 
                          Екипът не се нуждае от обучение или промяна в работния процес.
                        </Text>
                      ),
                    },
                    {
                      title: "Какво е разликата между REST API и GraphQL?",
                      content: (
                        <Text onBackground="neutral-weak">
                          REST API е built-in в WordPress и е по-прост за setup. GraphQL (чрез WPGraphQL плъгин) 
                          е по-мощен - позволява да извличаш точно данните които ти трябват в един query. 
                          За основни проекти REST API е достатъчен, за сложни препоръчвам GraphQL.
                        </Text>
                      ),
                    },
                  ]}
                />
              </Column>
            </RevealFx>
          </Column>

          {/* CTA */}
          <Column fillWidth gap="l" align="center" paddingY="xl">
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
                    Готов за Headless WordPress?
                  </Heading>
                  
                  <Text 
                    variant="body-default-xl" 
                    align="center" 
                    style={{ color: "white", maxWidth: "600px", margin: "0 auto" }}
                  >
                    Свържи се за безплатна консултация. Ще обсъдим твоя проект и 
                    ще ти покажа конкретно как Headless WordPress може да подобри 
                    скоростта и UX без да загубиш познатото WordPress управление.
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
