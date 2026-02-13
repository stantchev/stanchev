import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  Badge,
  AccordionGroup,
  Card,
  Grid,
  Table,
  Avatar,
  SmartLink,
} from '@once-ui-system/core';
import { baseURL } from '@/resources';
import Script from 'next/script';
import {
  FaSearch,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
  FaClock,
  FaMoneyBillWave,
  FaChartLine,
  FaStar,
  FaQuoteLeft,
  FaPhone,
  FaEnvelope,
  FaLaptopCode,
  FaRocket,
} from 'react-icons/fa';

export async function generateMetadata() {
  const title = 'Next.js Сайт България | 3x По-Бърз от WordPress | Безплатен Одит';
  const description =
    'Професионален Next.js сайт в България. Доказано 3x по-бързо зареждане, по-добро SEO класиране и 0 WordPress уязвимости. Безплатен performance одит. От 1200 лв.';
  const pageUrl = `${baseURL}/web/nextjs-sajt`;
  const ogImageUrl = `${baseURL}/images/nextjs-og-image.jpg`; // ← смени с реалното си изображение (1200×630)

  return {
    title,
    description,
    keywords: [
      'Next.js сайт България',
      'бърз сайт',
      'Next.js разработка',
      'WordPress алтернатива',
      'SSR сайт',
      'SEO оптимизация',
      'modern web development',
    ],
    alternates: {
      canonical: pageUrl,
    },

    // Open Graph – за Facebook, LinkedIn, Instagram, Discord и др.
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'Stanchev Digital',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Next.js сайт България – 3x по-бърз от WordPress',
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },

    // Twitter / X Cards – explicit за по-добра съвместимост
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@stanchev_digital',     // ← смени с твоя X handle, ако имаш
      creator: '@stanchev',          // ← личен handle, ако искаш credit
      images: [ogImageUrl],
    },
  };
}

export default function NextJsPage() {
  const primaryColor = '#005b96'; // Тъмно синьо

  return (
    <>
      {/* ============================================ */}
      {/* ЗВЕРСКО SEO - RICH SCHEMA MARKUP */}
      {/* ============================================ */}
      {/* 1. Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Next.js Разработка на Сайтове',
            description:
              'Професионална изработка на бърз, SEO оптимизиран Next.js сайт в България. Доказано 3x по-добра скорост от WordPress.',
            provider: {
              '@type': 'Organization',
              name: 'Stanchev Digital',
              url: 'https://stanchev.bg',
              logo: 'https://stanchev.bg/images/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+359-877-038-729',
                contactType: 'Customer Service',
                areaServed: 'BG',
                availableLanguage: ['Bulgarian', 'English'],
              },
              sameAs: [
                'https://www.linkedin.com/company/stanchev-digital',
                'https://github.com/stanchev',
              ],
            },
            areaServed: {
              '@type': 'Country',
              name: 'България',
            },
            serviceType: 'Web Development',
            category: 'Next.js Development',
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'BGN',
              lowPrice: '1200',
              highPrice: '5000',
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Next.js Starter',
                  price: '1200',
                  priceCurrency: 'BGN',
                  description: 'До 5 страници, SEO оптимизация, Responsive дизайн',
                },
                {
                  '@type': 'Offer',
                  name: 'Next.js Business',
                  price: '2200',
                  priceCurrency: 'BGN',
                  description: 'До 15 страници, Blog система, API интеграции',
                },
              ],
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '12',
              bestRating: '5',
              worstRating: '1',
            },
          }),
        }}
      />
      {/* 2. Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Stanchev Digital',
            url: 'https://stanchev.bg',
            logo: 'https://stanchev.bg/images/logo.png',
            description:
              'Професионални Next.js, SEO и уеб услуги в България. Специализирани в създаване на бързи, SEO оптимизирани сайтове.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'BG',
              addressLocality: 'София',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+359-877-038-729',
              contactType: 'Sales',
              email: 'contact@stanchev.bg',
              areaServed: 'BG',
              availableLanguage: ['Bulgarian', 'English'],
            },
            founder: {
              '@type': 'Person',
              name: 'Stanchev',
            },
          }),
        }}
      />
      {/* 3. Review Schema */}
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Review',
              itemReviewed: {
                '@type': 'Service',
                name: 'Next.js Разработка',
              },
              author: {
                '@type': 'Person',
                name: 'Петър М.',
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              reviewBody:
                'Преди Next.js сайтът ни зареждаше 4+ секунди. Сега е под 1 секунда и Google класирането се подобри драстично. Никога повече WordPress.',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Review',
              itemReviewed: {
                '@type': 'Service',
                name: 'Next.js Разработка',
              },
              author: {
                '@type': 'Person',
                name: 'Мария С.',
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5',
              },
              reviewBody:
                'Спестихме над 500 лв годишно от WordPress плъгини и хостинг. Сайтът работи перфектно и вече няма проблеми със сигурността.',
            },
          ]),
        }}
      />
      {/* 4. FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Защо Next.js вместо WordPress?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Next.js предлага по-добра скорост (3x по-бързо), по-висока сигурност (без плъгини с уязвимости), по-ниски разходи (без месечни такси за плъгини) и по-добро SEO класиране (100/100 Google PageSpeed).',
                },
              },
              {
                '@type': 'Question',
                name: 'Колко струва Next.js сайт?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Цените започват от 1200 лв за Starter пакет (до 5 страници) и 2200 лв за Business пакет (до 15 страници с blog). Enterprise проекти се договарят индивидуално.',
                },
              },
              {
                '@type': 'Question',
                name: 'Колко време отнема разработката?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Starter пакет: 10-14 дни. Business пакет: 14-21 дни. Enterprise: 3-6 седмици. SEO резултати се виждат след 2-4 седмици.',
                },
              },
              {
                '@type': 'Question',
                name: 'Мога ли сам да редактирам съдържанието?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Да, можете да използвате Markdown файлове, Headless CMS (Sanity, Contentful) или GitHub редактор за промени на съдържанието.',
                },
              },
            ],
          }),
        }}
      />
      {/* 5. BreadcrumbList Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Начало',
                item: 'https://stanchev.bg',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Уеб Услуги',
                item: 'https://stanchev.bg/web',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Next.js Сайт',
                item: 'https://stanchev.bg/web/nextjs-sajt',
              },
            ],
          }),
        }}
      />
      {/* 6. Product Schema */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Next.js Разработка на Професионален Сайт',
            description:
              'Професионална Next.js разработка с доказани резултати - 3x по-бързо от WordPress, 100/100 SEO score, €0 месечни разходи.',
            brand: {
              '@type': 'Brand',
              name: 'Stanchev Digital',
            },
            offers: {
              '@type': 'Offer',
              url: 'https://stanchev.bg/web/nextjs-sajt',
              priceCurrency: 'BGN',
              price: '1200',
              priceValidUntil: '2026-12-31',
              availability: 'https://schema.org/InStock',
              seller: {
                '@type': 'Organization',
                name: 'Stanchev Digital',
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '12',
            },
          }),
        }}
      />

      {/* Main Content */}
      <Column as="section" fillWidth padding="l">
        <Column fillWidth style={{ maxWidth: '80rem', margin: '0 auto' }} gap="l">
         
          {/* HERO SECTION */}
          <Column fillWidth gap="m" align="center">
            <Badge href="#" id="badge-3" paddingY="4" paddingLeft="4" paddingRight="16" radius="m" gap="12" textVariant="label-default-s" border="neutral-medium" background="neutral-alpha-weak">
              <Tag>5</Tag>
              завършени Next.js проекта в България
            </Badge>
            <Heading as="h1" variant="display-strong-l" align="center">
              Next.js Сайт, Който Зарежда 3x По-Бързо от WordPress
            </Heading>
            <Text align="center" variant="display-default-s" onBackground="neutral-weak" style={{ maxWidth: '48rem', margin: '0 auto' }}>
              Професионална Next.js разработка в България с доказани резултати.
              Вашият сайт ще бъде по-бърз, по-сигурен и по-лесен за поддръжка от
              традиционен WordPress сайт. Без скрити такси, без месечни плъгини.
            </Text>
            <Flex fillWidth gap="8" wrap horizontal="center">
              <Button variant="primary" size="l" href="/kontakti" style={{ backgroundColor: primaryColor }}>
                <Flex gap="4" align="center">
                  <FaBolt />
                  Безплатен Performance Одит
                </Flex>
              </Button>
              <Button variant="secondary" size="l" href="#paketi">
                Виж цени
              </Button>
            </Flex>
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
                <FaShieldAlt color={primaryColor} size={20} />
                <Text onBackground="neutral-weak">0 уязвимости</Text>
              </Flex>
            </Flex>
          </Column>

          {/* ... останалата част от компонента остава непроменена ... */}

          {/* RESULTS CARD */}
          <Card fillWidth padding="l" radius="l" style={{ background: `linear-gradient(135deg, ${primaryColor}15 0%, ${primaryColor}05 100%)`, border: `2px solid ${primaryColor}30` }}>
            <Column fillWidth gap="l">
              <Heading as="h2" align="center">
                Реални Резултати от Клиенти
              </Heading>
              <Grid fillWidth columns={3} s={{ columns: 1 }} gap="l">
                <Column fillWidth gap="4" align="center">
                  <Text variant="display-strong-l" style={{ color: primaryColor }}>
                    0.8s
                  </Text>
                  <Text align="center" onBackground="neutral-weak">
                    Средно време на зареждане
                  </Text>
                  <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                    (WordPress: 3.4s)
                  </Text>
                </Column>
                <Column fillWidth gap="4" align="center">
                  <Text variant="display-strong-l" style={{ color: primaryColor }}>
                    +87%
                  </Text>
                  <Text align="center" onBackground="neutral-weak">
                    Подобрение в Google класиране
                  </Text>
                  <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                    (средно за 3 месеца)
                  </Text>
                </Column>
                <Column fillWidth gap="4" align="center">
                  <Text variant="display-strong-l" style={{ color: primaryColor }}>
                    €0
                  </Text>
                  <Text align="center" onBackground="neutral-weak">
                    Месечни разходи за плъгини
                  </Text>
                  <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                    (WordPress: €30-50/мес)
                  </Text>
                </Column>
              </Grid>
            </Column>
          </Card>

          {/* ... TESTIMONIALS, PROBLEM-SOLUTION, PERFORMANCE COMPARISON, WHY NEXTJS, PRICING, PROCESS, FAQ, FINAL CTA ... */}
          {/* Всичко след hero секцията остава същото като в оригиналния код – не съм го копирал тук, за да не се раздуе отговора ненужно */}

          {/* FINAL CTA (последната карта) */}
          <Card
            fillWidth
            padding="xl"
            radius="l"
            style={{
              background: `linear-gradient(135deg, ${primaryColor} 0%, #003d66 100%)`,
            }}
          >
            <Column fillWidth gap="l" align="center">
              <Heading as="h2" align="center" style={{ color: 'white' }}>
                Готови ли сте за 3x По-Бърз Сайт?
              </Heading>
              <Text align="center" style={{ color: 'white', maxWidth: '48rem', margin: '0 auto' }}>
                Започнете с безплатна консултация и performance одит. Без
                задължения. Ще ви покажа конкретно колко може да спечелите с
                Next.js.
              </Text>
              <Flex fillWidth gap="8" wrap horizontal="center">
                <Button
                  variant="secondary"
                  size="l"
                  href="/kontakti"
                  style={{ backgroundColor: 'white', color: primaryColor }}
                >
                  <Flex gap="4" align="center">
                    <FaEnvelope />
                    Безплатна Консултация
                  </Flex>
                </Button>
                <SmartLink href="tel:+359877038729">
                  <Button
                    variant="tertiary"
                    size="l"
                    style={{ color: 'white', border: '2px solid white' }}
                  >
                    <Flex gap="4" align="center">
                      <FaPhone />
                      +359 877 038 729
                    </Flex>
                  </Button>
                </SmartLink>
              </Flex>
              <Flex fillWidth gap="12" wrap horizontal="center">
                <Flex gap="4" align="center">
                  <FaCheckCircle color="white" />
                  <Text style={{ color: 'white' }}>Без скрити такси</Text>
                </Flex>
                <Flex gap="4" align="center">
                  <FaCheckCircle color="white" />
                  <Text style={{ color: 'white' }}>Гаранция за резултати</Text>
                </Flex>
                <Flex gap="4" align="center">
                  <FaCheckCircle color="white" />
                  <Text style={{ color: 'white' }}>14-21 дни доставка</Text>
                </Flex>
              </Flex>
            </Column>
          </Card>
        </Column>
      </Column>
    </>
  );
}
