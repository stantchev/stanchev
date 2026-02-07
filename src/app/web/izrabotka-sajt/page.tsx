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
  FaCheckCircle,
  FaChartLine,
  FaUsers,
  FaRobot,
} from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';

export async function generateMetadata() {
  return {
    title: 'Изработка на Сайт и Лендинг Страници 2026 | Stanchev Digital',
    description:
      'Професионална изработка на модерни уебсайтове и лендинг страници с React, Next.js, Tailwind CSS и AI интеграции.',
    alternates: {
      canonical: `${baseURL}/web/izrabotka-sajt`,
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
            provider: {
              '@type': 'Organization',
              name: 'Stanchev Digital',
              url: 'https://stanchev.bg/',
            },
          }),
        }}
      />

      {/* ROOT SECTION – padding EXACT като референтния файл */}
      <Column as="section" gap="l" padding="s" fillWidth>

        {/* HERO */}
        <RevealFx trigger="inview">
          <Column gap="s" align="center" fillWidth>
            <GlitchFx>
              <LetterFx trigger="inview">
                <Heading as="h1" variant="display-strong-l" align="center">
                  Изработка на Сайт и Лендинг Страници 2026
                </Heading>
              </LetterFx>
            </GlitchFx>

            <Text variant="display-default-s" align="center" onBackground="neutral-weak">
              Модерни, бързи и SEO-готови уебсайтове с React, Next.js, Tailwind CSS
              и AI интеграции – създадени да конвертират.
            </Text>

            <Flex horizontal="center">
              <Button variant="primary" size="l" href="/kontakti" prefixIcon="rocket">
                Започни проект
              </Button>
            </Flex>
          </Column>
        </RevealFx>

        {/* TAGS */}
        <Flex gap="8" wrap horizontal="center">
          {[
            'React + Next.js',
            'Tailwind CSS',
            'AI Интеграция',
            'SEO 2026',
            'Бързи сайтове',
          ].map((lbl) => (
            <Tag key={lbl} size="l" variant="brand">
              {lbl}
            </Tag>
          ))}
        </Flex>

        {/* TIMELINE */}
        <RevealFx>
          <Column gap="l">
            <Heading as="h2" variant="display-default-m" align="center">
              Процесът в 4 ясни етапа
            </Heading>

            <Timeline
              fillWidth
              direction={{ base: 'column', m: 'row' }}
              gap={{ base: 'l', m: 'm' }}
              items={[
                {
                  state: 'completed',
                  label: (
                    <Row vertical="center" gap="8">
                      <FaUsers />
                      <Text>Планиране</Text>
                    </Row>
                  ),
                  description: 'Анализ на цели и аудитория.',
                },
                {
                  state: 'active',
                  label: (
                    <Row vertical="center" gap="8">
                      <FaPalette />
                      <Text>Дизайн</Text>
                    </Row>
                  ),
                  description: 'UX/UI + AI предложения.',
                },
                {
                  state: 'default',
                  label: (
                    <Row vertical="center" gap="8">
                      <FaCode />
                      <Text>Разработка</Text>
                    </Row>
                  ),
                  description: 'Next.js, SEO, оптимизация.',
                },
                {
                  state: 'default',
                  label: (
                    <Row vertical="center" gap="8">
                      <FaCheckCircle />
                      <Text>Launch</Text>
                    </Row>
                  ),
                  description: 'Тестване и пускане.',
                },
              ]}
            />
          </Column>
        </RevealFx>

        {/* BENEFITS */}
        <RevealFx>
          <Column gap="l">
            <Heading as="h2" variant="display-default-m" align="center">
              Защо професионален сайт?
            </Heading>

            <Grid columns={3} s={{ columns: 1 }} gap="l" fillWidth>
              {[
                { icon: FaRocket, title: 'Бърз', desc: 'Core Web Vitals 90+' },
                { icon: FaSearch, title: 'SEO', desc: 'Schema + AI ready' },
                { icon: FaMobile, title: 'Responsive', desc: 'Mobile-first' },
                { icon: FaRobot, title: 'AI', desc: 'Интеграции' },
                { icon: FaShieldAlt, title: 'Сигурен', desc: 'HTTPS + защита' },
                { icon: FaChartLine, title: 'Конверсии', desc: 'UX фокус' },
              ].map((item) => (
                <HoverCard key={item.title}>
                  <Card padding="l" border="neutral-alpha-medium" radius="l">
                    <Column gap="m" align="center">
                      <item.icon size={32} color="var(--brand-strong)" />
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

        {/* PACKAGES */}
        <RevealFx>
          <Column gap="l">
            <Heading as="h2" variant="display-default-m" align="center">
              Пакети и цени
            </Heading>

            <Grid columns={2} s={{ columns: 1 }} gap="l" fillWidth>
              {[
                {
                  title: 'Лендинг страница',
                  price: '900 лв.',
                  popular: false,
                  features: [
                    'Модерен дизайн',
                    'SEO оптимизация',
                    'Контактна форма',
                  ],
                },
                {
                  title: 'Корпоративен сайт',
                  price: '1800 лв.',
                  popular: true,
                  features: [
                    'До 7 страници',
                    'CMS панел',
                    'SEO + AI оптимизация',
                  ],
                },
              ].map((pkg) => (
                <Card
                  key={pkg.title}
                  padding="l"
                  border={pkg.popular ? 'brand-alpha-medium' : 'neutral-alpha-medium'}
                  radius="l"
                  style={pkg.popular ? { background: 'brand-alpha-weak' } : undefined}
                >
                  {pkg.popular && <Badge>Най-избран</Badge>}

                  <Column gap="m" align="center">
                    <Heading variant="heading-strong-l">{pkg.title}</Heading>
                    <Text variant="display-strong-l" onBackground="brand-strong">
                      {pkg.price}
                    </Text>

                    <Column gap="s" fillWidth>
                      {pkg.features.map((f) => (
                        <Flex key={f} gap="s" vertical="center">
                          <FaCheckCircle size={16} />
                          <Text variant="body-default-s">{f}</Text>
                        </Flex>
                      ))}
                    </Column>

                    <Button
                      variant={pkg.popular ? 'primary' : 'secondary'}
                      size="m"
                      fillWidth
                      href="/kontakti"
                    >
                      Избери пакет
                    </Button>
                  </Column>
                </Card>
              ))}
            </Grid>
          </Column>
        </RevealFx>

        {/* FAQ */}
        <RevealFx>
          <Column gap="l">
            <Heading as="h2" variant="display-default-m" align="center">
              Често задавани въпроси
            </Heading>

            <AccordionGroup
              items={[
                {
                  title: 'Колко време отнема?',
                  content: (
                    <Text onBackground="neutral-weak">
                      Лендинг – 1–2 седмици, корпоративен сайт – 3–5 седмици.
                    </Text>
                  ),
                },
                {
                  title: 'Включено ли е SEO?',
                  content: (
                    <Text onBackground="neutral-weak">
                      Да – мета тагове, schema, Core Web Vitals.
                    </Text>
                  ),
                },
              ]}
            />
          </Column>
        </RevealFx>

        {/* FINAL CTA */}
        <RevealFx>
          <Column gap="l" align="center">
            <CelebrationFx trigger="inview">
              <Heading variant="display-strong-m" align="center">
                Готови ли сте да стартираме?
              </Heading>
            </CelebrationFx>

            <Flex gap="m" wrap horizontal="center">
              <Button variant="primary" size="l" href="/kontakti">
                Заяви проект
              </Button>
              <Button variant="secondary" size="l" href="/kontakti">
                Консултация
              </Button>
            </Flex>
          </Column>
        </RevealFx>

        {/* SOCIAL */}
        <RevealFx>
          <Column gap="m" align="center">
            <Heading variant="display-strong-s">Свържи се</Heading>
            <Flex gap="l" wrap horizontal="center">
              <Button href="https://linkedin.com" variant="secondary" prefixIcon={<FaLinkedin />}>
                LinkedIn
              </Button>
              <Button href="https://github.com" variant="secondary" prefixIcon={<FaGithub />}>
                GitHub
              </Button>
              <Button href="https://dev.to" variant="secondary" prefixIcon={<FaDev />}>
                Dev.to
              </Button>
            </Flex>
          </Column>
        </RevealFx>

      </Column>
    </>
  );
}
