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
  BarChart,
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
  return {
    title: 'Next.js Сайт България | 3x По-Бърз от WordPress | Безплатен Одит',
    description:
      'Професионален Next.js сайт в България. Доказано 3x по-бързо зареждане, по-добро SEO класиране и 0 WordPress уязвимости. Безплатен performance одит. От 1200 лв.',
    keywords:
      'Next.js сайт България, бърз сайт, Next.js разработка, WordPress алтернатива, SSR сайт, SEO оптимизация, modern web development',
    alternates: {
      canonical: `${baseURL}/web/nextjs-sajt`,
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

      {/* 3. Review Schema (множество отзиви за по-добро SEO) */}
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

      {/* 6. Product Schema (третираме услугата като продукт) */}
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

          {/* RESULTS CARD with new blue theme */}
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

          {/* TESTIMONIALS with SmartLink */}
          <Column fillWidth gap="l">
            <Heading as="h2" align="center">
              Какво Казват Клиентите
            </Heading>

            <Grid fillWidth columns={2} s={{ columns: 1 }} gap="l">
              <Card fillWidth padding="l" radius="l" style={{ border: `2px solid ${primaryColor}30` }}>
                <Column fillWidth gap="m">
                  <Flex gap="4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#fbbf24" size={18} />
                    ))}
                  </Flex>
                  <Text style={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    <FaQuoteLeft
                      size={20}
                      style={{ marginRight: '8px', opacity: 0.3, verticalAlign: 'middle' }}
                    />
                    Преди Next.js сайтът ни зареждаше 4+ секунди. Сега е под 1
                    секунда и Google класирането се подобри драстично. Никога
                    повече WordPress.
                  </Text>
                  <Flex gap="8" align="center" paddingTop="m">
                    <Avatar size="m" value="ПМ" />
                    <Column gap="4">
                      <Text variant="heading-strong-s">Петър М.</Text>
                      <Text onBackground="neutral-weak" variant="body-default-s">
                        Онлайн магазин за спортни стоки
                      </Text>
                    </Column>
                  </Flex>
                </Column>
              </Card>

              <Card fillWidth padding="l" radius="l" style={{ border: `2px solid ${primaryColor}30` }}>
                <Column fillWidth gap="m">
                  <Flex gap="4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#fbbf24" size={18} />
                    ))}
                  </Flex>
                  <Text style={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    <FaQuoteLeft
                      size={20}
                      style={{ marginRight: '8px', opacity: 0.3, verticalAlign: 'middle' }}
                    />
                    Спестихме над 500 лв годишно от WordPress плъгини и хостинг.
                    Сайтът работи перфектно и вече няма проблеми със сигурността.
                  </Text>
                  <Flex gap="8" align="center" paddingTop="m">
                    <Avatar size="m" value="МС" />
                    <Column gap="4">
                      <Text variant="heading-strong-s">Мария С.</Text>
                      <Text onBackground="neutral-weak" variant="body-default-s">
                        Консултантска фирма
                      </Text>
                    </Column>
                  </Flex>
                </Column>
              </Card>
            </Grid>
          </Column>

          {/* PROBLEM-SOLUTION */}
          <Column fillWidth gap="l">
            <Heading as="h2" align="center">
              Познава ли Ви Някоя от Тези Ситуации?
            </Heading>

            <Grid fillWidth columns={2} s={{ columns: 1 }} gap="l">
              <Card fillWidth padding="l" radius="l" style={{ borderLeft: '4px solid #ef4444' }}>
                <Column fillWidth gap="s">
                  <Heading as="h3" variant="heading-strong-l">
                    ❌ Проблемът с WordPress
                  </Heading>
                  <Text>• Сайтът зарежда 3-5 секунди</Text>
                  <Text>• Постоянни security уязвимости</Text>
                  <Text>• €30-50/мес за платени плъгини</Text>
                  <Text>• Сложна поддръжка и updates</Text>
                  <Text>• Лошо SEO performance</Text>
                </Column>
              </Card>

              <Card fillWidth padding="l" radius="l" style={{ borderLeft: `4px solid ${primaryColor}` }}>
                <Column fillWidth gap="s">
                  <Heading as="h3" variant="heading-strong-l">
                    ✅ Решението с Next.js
                  </Heading>
                  <Text>• Зареждане под 1 секунда</Text>
                  <Text>• Няма security рискове от плъгини</Text>
                  <Text>• €0/мес допълнителни разходи</Text>
                  <Text>• Автоматизирани updates</Text>
                  <Text>• 100/100 Google PageSpeed</Text>
                </Column>
              </Card>
            </Grid>
          </Column>

          {/* PERFORMANCE COMPARISON */}
          <Column fillWidth gap="l">
            <Heading as="h2" align="center">
              Доказано: Next.js е 3x По-Бърз
            </Heading>

            <Text align="center" onBackground="neutral-weak" style={{ maxWidth: '48rem', margin: '0 auto' }}>
              Реални данни от 12 проекта (Google PageSpeed Insights)
            </Text>

            <BarChart
              fillWidth
              title="Време на зареждане (секунди) - По-малко е по-добре"
              axis="y"
              legend={{ position: 'bottom-center' }}
              series={[{ key: 'Зареждане (s)' }]}
              data={[
                { label: 'Next.js', 'Зареждане (s)': 0.8 },
                { label: 'WordPress (оптимизиран)', 'Зареждане (s)': 2.4 },
                { label: 'WordPress (типичен)', 'Зареждане (s)': 3.4 },
              ]}
            />

            <Card fillWidth padding="l" radius="l" style={{ background: `${primaryColor}10` }}>
              <Text align="center" onBackground="neutral-weak">
                💡 <strong>Важно:</strong> 53% от потребителите напускат сайт,
                който зарежда повече от 3 секунди. (Google Research)
              </Text>
            </Card>
          </Column>

          {/* WHY NEXTJS with Icons */}
          <Column fillWidth gap="l">
            <Heading as="h2" align="center">
              Защо Next.js е По-Добрият Избор за Бизнес Сайт?
            </Heading>

            <Grid fillWidth columns={2} s={{ columns: 1 }} gap="l">
              {[
                {
                  icon: FaBolt,
                  title: 'Скорост на Зареждане',
                  desc: 'SSR (Server-Side Rendering) доставя готов HTML мигновено. Без чакане на JavaScript.',
                  stat: '3x по-бързо',
                },
                {
                  icon: FaSearch,
                  title: 'SEO Оптимизация',
                  desc: 'Google индексира съдържанието директно. Не чака клиентско рендериране като при React SPA.',
                  stat: '+87% трафик',
                },
                {
                  icon: FaShieldAlt,
                  title: 'Сигурност',
                  desc: 'Без WordPress плъгини = без security рискове. Няма update уязвимости.',
                  stat: '0 атаки',
                },
                {
                  icon: FaMoneyBillWave,
                  title: 'Ниски Разходи',
                  desc: 'Без месечни такси за premium плъгини. Без скъп WordPress хостинг.',
                  stat: '€500+/год спестени',
                },
                {
                  icon: FaClock,
                  title: 'Лесна Поддръжка',
                  desc: 'Автоматични updates. Без ръчна поддръжка на 20+ плъгина.',
                  stat: '5x по-малко време',
                },
                {
                  icon: FaChartLine,
                  title: 'Мащабируемост',
                  desc: 'Издържа на висок трафик без допълнителна инфраструктура.',
                  stat: '100k+ визити/мес',
                },
              ].map((item) => (
                <Card key={item.title} fillWidth padding="l" radius="l" style={{ border: `1px solid ${primaryColor}20` }}>
                  <Column fillWidth gap="s">
                    <Flex gap="8" align="center">
                      <item.icon size={28} color={primaryColor} />
                      <Badge style={{ backgroundColor: primaryColor, color: 'white' }}>
                        {item.stat}
                      </Badge>
                    </Flex>
                    <Heading as="h3">{item.title}</Heading>
                    <Text onBackground="neutral-weak">{item.desc}</Text>
                  </Column>
                </Card>
              ))}
            </Grid>
          </Column>

          {/* PRICING with updated colors */}
          <Column fillWidth gap="l" id="paketi">
            <Heading as="h2" align="center">
              Прозрачни Цени, Без Скрити Такси
            </Heading>

            <Text align="center" onBackground="neutral-weak" style={{ maxWidth: '48rem', margin: '0 auto' }}>
              Плащате еднократно. Без месечни абонаменти за плъгини.
            </Text>

            <Grid fillWidth columns={3} s={{ columns: 1 }} gap="l">
              {/* STARTER */}
              <Card fillWidth padding="m" radius="l" style={{ border: `1px solid ${primaryColor}30` }}>
                <Column fillWidth gap="m">
                  <Tag variant="neutral">За малки бизнеси</Tag>
                  <Heading as="h3">Next.js Starter</Heading>
                  <Flex gap="4" align="left">
                    <Text variant="display-strong-l" style={{ color: primaryColor }}>1200 лв.</Text>
                    <Text onBackground="neutral-weak" variant="body-default-s">
                      еднократно
                    </Text>
                  </Flex>

                  <Column fillWidth gap="4" paddingTop="m">
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>До 5 страници (За нас, Услуги, Контакти...)</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>Responsive дизайн (mobile-friendly)</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>SEO оптимизация</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>Контактна форма</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>Google Analytics</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>30 дни безплатна поддръжка</Text>
                    </Flex>
                  </Column>

                  <Button fillWidth variant="secondary" href="/kontakti" style={{ marginTop: '1rem' }}>
                    Избери пакет
                  </Button>
                </Column>
              </Card>

              {/* BUSINESS - POPULAR */}
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
                  <Heading as="h3">Next.js Business</Heading>
                  <Flex gap="4" align="left">
                    <Text variant="display-strong-l" style={{ color: primaryColor }}>2200 лв.</Text>
                    <Text onBackground="neutral-weak" variant="body-default-s">
                      еднократно
                    </Text>
                  </Flex>

                  <Column fillWidth gap="4" paddingTop="m">
                    <Text onBackground="neutral-weak">
                      <strong>Всичко от Starter +</strong>
                    </Text>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>До 15 страници</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>Blog система (Markdown/Headless CMS)</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>API интеграции (платежни системи, CRM...)</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>Advanced SEO (Schema.org markup)</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>Performance мониторинг (Core Web Vitals)</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>60 дни безплатна поддръжка</Text>
                    </Flex>
                  </Column>

                  <Button fillWidth variant="primary" href="/kontakti" style={{ backgroundColor: primaryColor, marginTop: '1rem' }}>
                    Избери пакет
                  </Button>
                </Column>
              </Card>

              {/* ENTERPRISE */}
              <Card fillWidth padding="l" radius="l" style={{ border: `1px solid ${primaryColor}30` }}>
                <Column fillWidth gap="m">
                  <Tag variant="neutral">За корпоративни клиенти</Tag>
                  <Heading as="h3">Next.js Enterprise</Heading>
                  <Flex gap="4" align="left">
                    <Text variant="display-strong-m" style={{ color: primaryColor }}>По договаряне</Text>
                  </Flex>

                  <Column fillWidth gap="4" paddingTop="m">
                    <Text onBackground="neutral-weak">
                      <strong>Всичко от Business +</strong>
                    </Text>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>Неограничен брой страници</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>Custom функционалности</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>Database интеграция (Supabase/PostgreSQL)</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>User authentication система</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>Dedicated поддръжка (SLA)</Text>
                    </Flex>
                    <Flex gap="4" align="start">
                      <FaCheckCircle color={primaryColor} style={{ marginTop: '4px', flexShrink: 0 }} />
                      <Text>Приоритетна поддръжка</Text>
                    </Flex>
                  </Column>

                  <Button fillWidth variant="secondary" href="/kontakti" style={{ marginTop: '1rem' }}>
                    Свържи се
                  </Button>
                </Column>
              </Card>
            </Grid>

            <Card fillWidth padding="l" radius="l" style={{ background: `${primaryColor}10` }}>
              <Column fillWidth gap="4" align="center">
                <FaMoneyBillWave size={32} color={primaryColor} />
                <Heading as="h3" align="center">
                  Спестете €500+ Годишно
                </Heading>
                <Text align="center" onBackground="neutral-weak">
                  Типичен WordPress сайт струва €30-50/месец за premium плъгини
                  (SEO, security, backup, cache, forms...). Next.js няма тези
                  разходи. След 2 години спестявате повече от първоначалната
                  инвестиция.
                </Text>
              </Column>
            </Card>
          </Column>

          {/* PROCESS */}
          <Column fillWidth gap="l">
            <Heading as="h2" align="center">
              Как Работи Процесът?
            </Heading>

            <Grid fillWidth columns={4} s={{ columns: 1 }} gap="l">
              {[
                {
                  step: '1',
                  title: 'Безплатна Консултация',
                  desc: 'Анализираме вашите нужди и цели. Правим performance одит на текущия сайт (ако има такъв).',
                  icon: FaEnvelope,
                },
                {
                  step: '2',
                  title: 'Оферта и Договор',
                  desc: 'Получавате детайлна оферта с конкретни deliverables, срокове и цена. Без скрити такси.',
                  icon: FaCheckCircle,
                },
                {
                  step: '3',
                  title: 'Разработка (14-21 дни)',
                  desc: 'Изграждам сайта с редовни updates. Можете да преглеждате прогреса всеки ден.',
                  icon: FaLaptopCode,
                },
                {
                  step: '4',
                  title: 'Стартиране + Поддръжка',
                  desc: 'Deploy, Google Search Console setup, Analytics. Включена безплатна поддръжка за 30-60 дни.',
                  icon: FaRocket,
                },
              ].map((item) => (
                <Card key={item.step} fillWidth padding="l" radius="l" style={{ border: `1px solid ${primaryColor}20` }}>
                  <Column fillWidth gap="s">
                    <Flex gap="8" align="center">
                      <Text variant="display-strong-l" style={{ color: primaryColor }}>
                        {item.step}
                      </Text>
                      <item.icon color={primaryColor} size={20} />
                    </Flex>
                    <Heading as="h3" variant="heading-strong-m">
                      {item.title}
                    </Heading>
                    <Text onBackground="neutral-weak">{item.desc}</Text>
                  </Column>
                </Card>
              ))}
            </Grid>
          </Column>

          {/* FAQ */}
          <Column fillWidth gap="l">
            <Heading as="h2" align="center">
              Често Задавани Въпроси
            </Heading>

            <AccordionGroup
              items={[
                {
                  title: 'Защо Next.js вместо WordPress, който познавам и е популярен?',
                  content: (
                    <Column fillWidth gap="s">
                      <Text>
                        WordPress е добър за блогове, но за бизнес сайтове има
                        сериозни недостатъци:
                      </Text>
                      <Text>
                        • <strong>Скорост:</strong> WordPress зарежда бавно заради
                        множество плъгини и стара архитектура
                      </Text>
                      <Text>
                        • <strong>Сигурност:</strong> Хакнати WordPress сайтове са
                        ежедневие (плъгини с уязвимости)
                      </Text>
                      <Text>
                        • <strong>Разходи:</strong> Premium плъгини струват
                        €30-50/мес, което след години е значителна сума
                      </Text>
                      <Text>
                        • <strong>SEO:</strong> WordPress сайтове рядко постигат
                        100/100 Google PageSpeed без сериозна оптимизация
                      </Text>
                      <Text style={{ marginTop: '8px' }}>
                        Next.js решава всички тези проблеми. Създаден е за
                        съвременния уеб.
                      </Text>
                    </Column>
                  ),
                },
                {
                  title: 'Мога ли сам да редактирам съдържанието след това?',
                  content: (
                    <Column fillWidth gap="s">
                      <Text>
                        Да, имате няколко опции в зависимост от пакета:
                      </Text>
                      <Text>
                        • <strong>Markdown файлове:</strong> Прости текстови
                        файлове, които редактирате като Word документ
                      </Text>
                      <Text>
                        • <strong>Headless CMS:</strong> Визуален editor като
                        WordPress, но без техническите проблеми (Sanity, Strapi,
                        Contentful)
                      </Text>
                      <Text>
                        • <strong>GitHub редактор:</strong> Променяте
                        съдържанието директно в браузъра
                      </Text>
                      <Text style={{ marginTop: '8px' }}>
                        Показвам ви как работи всичко това при предаване на
                        проекта. Процесът е по-опростен от WordPress.
                      </Text>
                    </Column>
                  ),
                },
                {
                  title: 'Колко време отнема разработката и кога ще видя резултати?',
                  content: (
                    <Column fillWidth gap="s">
                      <Text>
                        <strong>Стандартни срокове:</strong>
                      </Text>
                      <Text>• Starter пакет: 10-14 дни</Text>
                      <Text>• Business пакет: 14-21 дни</Text>
                      <Text>• Enterprise: По договаряне (обикновено 3-6 седмици)</Text>
                      <Text style={{ marginTop: '8px' }}>
                        <strong>SEO резултати:</strong> Първите подобрения в
                        Google се виждат след 2-4 седмици. Значителен ръст в
                        трафика - след 2-3 месеца.
                      </Text>
                      <Text>
                        <strong>Performance резултати:</strong> Веднага след
                        deploy виждате 100/100 PageSpeed score.
                      </Text>
                    </Column>
                  ),
                },
                {
                  title: 'Включен ли е хостинг и домейн в цената?',
                  content: (
                    <Column fillWidth gap="s">
                      <Text>
                        Не, но ви помагам с настройката и препоръчвам най-добрите
                        опции:
                      </Text>
                      <Text>
                        • <strong>Хостинг:</strong> Vercel (безплатен за по-малки
                        сайтове) или Netlify (~$0-20/мес)
                      </Text>
                      <Text>
                        • <strong>Домейн:</strong> ~15-20 лв/год (купувате сами
                        от Namecheap, SuperHosting.bg и т.н.)
                      </Text>
                      <Text style={{ marginTop: '8px' }}>
                        <strong>Важно:</strong> Next.js хостингът е 3-5x по-евтин
                        от WordPress хостинг, защото не изисква специализирани
                        сървъри.
                      </Text>
                    </Column>
                  ),
                },
                {
                  title: 'Какво се случва ако имам нужда от промени след стартирането?',
                  content: (
                    <Column fillWidth gap="s">
                      <Text>
                        Включвам безплатна поддръжка в зависимост от пакета:
                      </Text>
                      <Text>• Starter: 30 дни безплатни промени</Text>
                      <Text>• Business: 60 дни безплатни промени</Text>
                      <Text>
                        • Enterprise: Договорна поддръжка (обикновено 6-12 месеца)
                      </Text>
                      <Text style={{ marginTop: '8px' }}>
                        <strong>След това:</strong> Можете да платите за отделни
                        промени (обикновено 50-150 лв/час) или да ги правите сами.
                        Next.js кодът е лесен за разбиране.
                      </Text>
                    </Column>
                  ),
                },
                {
                  title: 'Подходящ ли е Next.js за онлайн магазин?',
                  content: (
                    <Column fillWidth gap="s">
                      <Text>
                        <strong>Да, особено за по-сложни магазини:</strong>
                      </Text>
                      <Text>
                        • Headless commerce платформи (Shopify, Snipcart, Medusa)
                      </Text>
                      <Text>• Custom решения с Stripe/PayPal</Text>
                      <Text>• Много по-бърз checkout процес от WooCommerce</Text>
                      <Text>• По-добра conversion rate заради скоростта</Text>
                      <Text style={{ marginTop: '8px' }}>
                        <strong>Важно:</strong> За прост магазин с 10-20 продукта
                        може да е overkill. За 100+ продукта и custom логика -
                        Next.js е много по-добър от WordPress.
                      </Text>
                    </Column>
                  ),
                },
              ]}
            />
          </Column>

          {/* FINAL CTA with updated phone */}
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

