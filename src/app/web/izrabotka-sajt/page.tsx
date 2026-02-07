import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  AccordionGroup,
  Card,
  Grid,
  Badge,
  RevealFx,
  Timeline,
  Carousel,
  ProgressBar,
  HoverCard,
  CelebrationFx,
  GlitchFx,
  LetterFx,
  Row,
} from '@once-ui-system/core';
import { baseURL } from '@/resources';
import Script from 'next/script';
import {
  FaCode,
  FaPalette,
  FaMobile,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaLaptop,
  FaGlobe,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaPaintBrush,
  FaStar,
  FaRobot,
} from 'react-icons/fa';
import {
  FaLinkedin,
  FaGithub,
  FaDev,
} from 'react-icons/fa';

export async function generateMetadata() {
  return {
    title: 'Изработка на Сайт и Лендинг Страници 2026 | Stanchev Digital',
    description:
      'Професионална изработка на модерни уебсайтове и лендинг страници с React, Next.js, Tailwind CSS и AI интеграции. Бързи, SEO оптимизирани сайтове за малък и среден бизнес.',
    keywords:
      'изработка на сайт България, лендинг страница цена, уеб дизайн София, React разработчик, Next.js уебсайт, Tailwind CSS, SEO оптимизиран сайт, AI уеб дизайн, корпоративен сайт, професионален уебсайт',
    alternates: {
      canonical: `${baseURL}/web/izrabotka-sajt`,
    },
    openGraph: {
      title: 'Изработка на Сайт и Лендинг Страници 2026 | Stanchev Digital',
      description:
        'Професионална изработка на модерни уебсайтове и лендинг страници с React, Next.js, Tailwind CSS и AI интеграции. Бързи, SEO оптимизирани сайтове за малък и среден бизнес.',
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
      description:
        'Професионална изработка на модерни уебсайтове и лендинг страници с React, Next.js, Tailwind CSS и AI интеграции. Бързи, SEO оптимизирани сайтове за малък и среден бизнес.',
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
            '@context': 'http://schema.org',
            '@type': 'Service',
            name: 'Изработка на сайт и лендинг страници 2026 | Stanchev Digital',
            serviceType: 'Уеб разработка',
            description:
              'Професионална изработка на модерни, бързи и SEO оптимизирани уебсайтове с React, Next.js, Tailwind CSS и AI интеграции за малки и средни бизнеси.',
            provider: {
              '@type': 'Organization',
              name: 'Stanchev Digital',
              url: 'https://stanchev.bg/',
              logo: 'https://stanchev.bg/images/og/og.jpg',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'seo@stanchev.bg',
              },
            },
            url: 'https://stanchev.bg/web/izrabotka-sajt',
            areaServed: { '@type': 'Place', name: 'България' },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Уеб разработка услуги и цени 2026',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Лендинг страница – професионален пакет',
                    description:
                      'Едностранична лендинг страница с модерен дизайн, SEO, AI оптимизация, контактна форма.',
                    priceSpecification: {
                      '@type': 'UnitPriceSpecification',
                      price: '900',
                      priceCurrency: 'BGN',
                      unitText: 'лв.',
                      valueAddedTaxIncluded: true,
                    },
                    availability: 'https://schema.org/InStock',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Корпоративен сайт – бизнес пакет',
                    description:
                      'Многопланинков сайт с CMS, SEO, AI елементи, блог и административен панел.',
                    priceSpecification: {
                      '@type': 'UnitPriceSpecification',
                      price: '1800',
                      priceCurrency: 'BGN',
                      unitText: 'лв.',
                      valueAddedTaxIncluded: true,
                    },
                    availability: 'https://schema.org/InStock',
                  },
                },
              ],
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '55',
              bestRating: '5',
              worstRating: '1',
            },
          }),
        }}
      />

      <Column as="section" gap="xl" padding={{ base: 'm', m: 'xl' }} fillWidth>

        {/* Hero */}
        <RevealFx speed="fast" trigger="inview">
          <Column gap="l" align="center" fillWidth>
            <GlitchFx>
              <LetterFx trigger="inview">
                <Heading
                  as="h1"
                  variant="display-strong-l"
                  align="center"
                  style={{ lineHeight: '1.1' }}
                >
                  Изработка на Сайт и Лендинг Страници 2026
                </Heading>
              </LetterFx>
            </GlitchFx>

            <Text
              variant="display-default-m"
              align="center"
              onBackground="neutral-weak"
              style={{ maxWidth: '760px' }}
            >
              Модерни, бързи и SEO-готови уебсайтове с <strong>React</strong>, <strong>Next.js</strong>,{' '}
              <strong>Tailwind CSS</strong> и AI интеграции – създадени да конвертират посетители в клиенти.
            </Text>

            <Flex gap="m" wrap horizontal="center">
              <Button variant="primary" size="l" href="/kontakti" prefixIcon="rocket">
                Започни проект сега
              </Button>
              <Button variant="secondary" size="l" href="/kontakti">
                Безплатна консултация
              </Button>
            </Flex>
          </Column>
        </RevealFx>

        {/* Тагове */}
        <RevealFx delay={0.2}>
          <Flex gap="8" wrap horizontal="center">
            {[
              'React + Next.js',
              'Tailwind CSS',
              'AI Интеграция',
              'SEO 2026',
              'Бързи сайтове',
              'Мобилен дизайн',
            ].map((lbl) => (
              <Tag key={lbl} size="l" variant="brand">
                {lbl}
              </Tag>
            ))}
          </Flex>
        </RevealFx>

        {/* Процес – Timeline */}
        <RevealFx delay={0.3}>
          <Column gap="m" align="center">
            <Heading as="h2" variant="display-strong-m" align="center">
              Процесът в 4 ясни етапа
            </Heading>

            <Timeline
              fillWidth
              direction={{ base: 'column', m: 'row' }}
              size="m"
              gap={{ base: 'xl', m: 'l' }}
              items={[
                {
                  state: 'completed',
                  label: (
                    <Row vertical="center" gap="8" wrap={false}>
                      <FaUsers size={20} />
                      <Text>Планиране + AI анализ</Text>
                      <Tag variant="success" size="s">
                        Готово
                      </Tag>
                    </Row>
                  ),
                  description:
                    'Разбираме вашите цели, аудитория и структура. AI помага за бърз и точен анализ.',
                },
                {
                  state: 'active',
                  label: (
                    <Row vertical="center" gap="8" wrap={false}>
                      <FaPalette size={20} />
                      <Text>Дизайн + AI генерация</Text>
                      <Tag variant="brand" size="s">
                        В процес
                      </Tag>
                    </Row>
                  ),
                  description:
                    'Създаваме модерен, конвертиращ дизайн с помощта на AI за цветове, layout и UX.',
                },
                {
                  state: 'default',
                  label: (
                    <Row vertical="center" gap="8" wrap={false}>
                      <FaCode size={20} />
                      <Text>Разработка + Оптимизация</Text>
                    </Row>
                  ),
                  description:
                    'Програмиране с React/Next.js, SEO, скорост, AI функционалности и сигурност.',
                },
                {
                  state: 'default',
                  label: (
                    <Row vertical="center" gap="8" wrap={false}>
                      <FaCheckCircle size={20} />
                      <Text>Тестване + Launch</Text>
                    </Row>
                  ),
                  description:
                    'Пълно тестване (Core Web Vitals, мобилност, AI checks) и пускане на живо.',
                },
              ]}
            />
          </Column>
        </RevealFx>

        {/* Предимства / Карти */}
        <RevealFx delay={0.4}>
          <Column gap="l">
            <Heading as="h2" variant="display-strong-m" align="center">
              Защо да изберете професионален сайт през 2026?
            </Heading>

            <Grid columns={{ base: 1, s: 2, m: 3 }} gap="l" fillWidth>
              {[
                {
                  icon: FaRocket,
                  title: 'Супер бърз',
                  desc: 'Оптимизиран код, edge rendering, Core Web Vitals 90+',
                },
                {
                  icon: FaSearch,
                  title: 'SEO & AI готов',
                  desc: 'Мета тагове, schema, AI-friendly структура, видимост в Google + ChatGPT',
                },
                {
                  icon: FaMobile,
                  title: 'Перфектен на мобилен',
                  desc: '100% responsive + WCAG достъпност',
                },
                {
                  icon: FaRobot,
                  title: 'AI интеграции',
                  desc: 'Чатботи, персонализация, AI генерирано съдържание',
                },
                {
                  icon: FaShieldAlt,
                  title: 'Сигурност',
                  desc: 'HTTPS, защита от атаки, редовни актуализации',
                },
                {
                  icon: FaChartLine,
                  title: 'Конверсии +',
                  desc: 'Дизайн и копирайтинг фокусирани върху резултати',
                },
              ].map((item) => (
                <HoverCard key={item.title}>
                  <Card padding="l" radius="l" border="neutral-alpha-medium" fillWidth>
                    <Column gap="m" align="center">
                      <item.icon size={36} color="var(--brand-strong)" />
                      <Heading variant="heading-strong-m" align="center">
                        {item.title}
                      </Heading>
                      <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                        {item.desc}
                      </Text>
                    </Column>
                  </Card>
                </HoverCard>
              ))}
            </Grid>
          </Column>
        </RevealFx>

        {/* Пакети */}
        <RevealFx delay={0.5}>
          <Column gap="l">
            <Heading as="h2" variant="display-strong-m" align="center">
              Пакети и цени 2026
            </Heading>

            <Grid columns={{ base: 1, m: 2 }} gap="l" fillWidth>
              {[
                {
                  title: 'Лендинг страница',
                  price: '900 лв.',
                  popular: false,
                  features: [
                    'Модерен едностраничен дизайн',
                    'SEO + AI оптимизация',
                    'Контактна форма',
                    'Мобилна съвместимост',
                    'Социални мрежи интеграция',
                  ],
                },
                {
                  title: 'Корпоративен сайт',
                  price: '1800 лв.',
                  popular: true,
                  features: [
                    'До 5–7 страници',
                    'Административен панел (CMS)',
                    'SEO + AI оптимизация',
                    'Блог секция',
                    'Контактна форма + Google Maps',
                  ],
                },
              ].map((pkg) => (
                <Card
                  key={pkg.title}
                  padding="xl"
                  radius="l"
                  border={pkg.popular ? 'brand-strong' : 'neutral-alpha-medium'}
                  style={{
                    position: 'relative',
                    ...(pkg.popular && { background: 'var(--brand-alpha-weak)' }),
                  }}
                >
                  {pkg.popular && (
                    <Badge
                      variant="brand"
                      style={{ position: 'absolute', top: '-12px', right: '24px' }}
                    >
                      Най-избран
                    </Badge>
                  )}

                  <Column gap="l" align="center">
                    <Heading variant="heading-strong-l" align="center">
                      {pkg.title}
                    </Heading>
                    <Text variant="display-strong-l" onBackground="brand-strong" align="center">
                      {pkg.price}
                    </Text>

                    <Column gap="s" fillWidth>
                      {pkg.features.map((f, i) => (
                        <Flex key={i} gap="s" vertical="center">
                          <FaCheckCircle size={18} color="var(--success-strong)" />
                          <Text variant="body-default-m">{f}</Text>
                        </Flex>
                      ))}
                    </Column>

                    <Button
                      variant={pkg.popular ? 'primary' : 'secondary'}
                      size="l"
                      fillWidth
                      href="/kontakti"
                    >
                      Избери този пакет
                    </Button>
                  </Column>
                </Card>
              ))}
            </Grid>
          </Column>
        </RevealFx>

        {/* FAQ */}
        <RevealFx delay={0.6}>
          <Column gap="l">
            <Heading as="h2" variant="display-strong-m" align="center">
              Често задавани въпроси
            </Heading>

            <AccordionGroup
              items={[
                {
                  title: 'Колко време отнема изработката?',
                  content: (
                    <Text onBackground="neutral-weak">
                      Лендинг страница – 1–2 седмици, корпоративен сайт – 3–5 седмици. Включва планиране, дизайн, разработка, тестване и пускане.
                    </Text>
                  ),
                },
                {
                  title: 'Включена ли е SEO оптимизация?',
                  content: (
                    <Text onBackground="neutral-weak">
                      Да – мета тагове, schema markup, бързина (Core Web Vitals), AI-friendly структура, sitemap и robots.txt са стандартна част.
                    </Text>
                  ),
                },
                {
                  title: 'Използвате ли AI в процеса?',
                  content: (
                    <Text onBackground="neutral-weak">
                      Да – за анализ на аудитория, предложения за дизайн, генериране на текстови елементи и оптимизация за AI търсачки.
                    </Text>
                  ),
                },
                {
                  title: 'Предлагате ли поддръжка след пускане?',
                  content: (
                    <Text onBackground="neutral-weak">
                      Да – месечни пакети за актуализации, бекъпи, подобрения и добавяне на нови функционалности.
                    </Text>
                  ),
                },
              ]}
            />
          </Column>
        </RevealFx>

        {/* Финален CTA */}
        <RevealFx delay={0.7}>
          <Column gap="xl" align="center" paddingY="xl">
            <CelebrationFx trigger="inview">
              <Heading variant="display-strong-l" align="center" onBackground="brand-strong">
                Готови ли сте да стартираме?
              </Heading>
            </CelebrationFx>

            <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
              Нека създадем сайт, който работи за вас 24/7 и носи реални резултати през 2026.
            </Text>

            <Flex gap="m" wrap horizontal="center">
              <Button variant="primary" size="l" href="/kontakti" prefixIcon="rocket">
                Заяви проект
              </Button>
              <Button variant="secondary" size="l" href="/kontakti">
                Безплатна 30-мин консултация
              </Button>
            </Flex>
          </Column>
        </RevealFx>

        {/* Социални */}
        <RevealFx delay={0.8}>
          <Column gap="m" align="center" paddingY="l">
            <Heading variant="display-strong-s" align="center">
              Свържете се директно
            </Heading>
            <Flex gap="l" horizontal="center" wrap>
              <Button
                href="https://www.linkedin.com/in/stanchev-seo/"
                variant="secondary"
                size="m"
                prefixIcon={<FaLinkedin />}
              >
                LinkedIn
              </Button>
              <Button
                href="https://github.com/stantchev/"
                variant="secondary"
                size="m"
                prefixIcon={<FaGithub />}
              >
                GitHub
              </Button>
              <Button
                href="https://dev.to/stanchev"
                variant="secondary"
                size="m"
                prefixIcon={<FaDev />}
              >
                Dev.to
              </Button>
            </Flex>
          </Column>
        </RevealFx>
      </Column>
    </>
  );
}
