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

      {/* PAGE ROOT – без padding */}
      <Column as="main" fillWidth>
        {/* MAX WIDTH CONTAINER – ЕДИНСТВЕН padding */}
        <Column
          gap="xl"
          padding={{ base: 'm', m: 'xl' }}
          maxWidth="l"
          align="center"
        >

          {/* HERO */}
          <RevealFx trigger="inview">
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
                style={{ maxWidth: 760 }}
              >
                Модерни, бързи и SEO-готови уебсайтове с React, Next.js,
                Tailwind CSS и AI интеграции.
              </Text>

              <Flex gap="m" wrap horizontal="center">
                <Button variant="primary" size="l" href="/kontakti" prefixIcon="rocket">
                  Започни проект
                </Button>
                <Button variant="secondary" size="l" href="/kontakti">
                  Безплатна консултация
                </Button>
              </Flex>
            </Column>
          </RevealFx>

          {/* TAGS */}
          <RevealFx>
            <Flex gap="8" wrap horizontal="center">
              {[
                'React + Next.js',
                'Tailwind CSS',
                'AI Интеграция',
                'SEO 2026',
                'Бързи сайтове',
              ].map((t) => (
                <Tag key={t} size="l" variant="brand">
                  {t}
                </Tag>
              ))}
            </Flex>
          </RevealFx>

          {/* TIMELINE */}
          <RevealFx>
            <Column gap="m" align="center" fillWidth>
              <Heading as="h2" variant="display-strong-m" align="center">
                Процесът в 4 ясни етапа
              </Heading>

              <Timeline
                fillWidth
                direction={{ base: 'column', m: 'row' }}
                gap={{ base: 'xl', m: 'l' }}
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
                    description: 'UX / UI + AI предложения.',
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
            <Column gap="l" fillWidth>
              <Heading as="h2" variant="display-strong-m" align="center">
                Защо професионален сайт?
              </Heading>

              <Grid columns={{ base: 1, s: 2, m: 3 }} gap="l" fillWidth>
                {[
                  { icon: FaRocket, title: 'Бърз', desc: 'Core Web Vitals 90+' },
                  { icon: FaSearch, title: 'SEO', desc: 'Schema + AI ready' },
                  { icon: FaMobile, title: 'Responsive', desc: 'Мобилен first' },
                  { icon: FaRobot, title: 'AI', desc: 'Интеграции' },
                  { icon: FaShieldAlt, title: 'Сигурен', desc: 'HTTPS + защита' },
                  { icon: FaChartLine, title: 'Конверсии', desc: 'UX фокус' },
                ].map((b) => (
                  <HoverCard key={b.title}>
                    <Card padding="l" radius="l" fillWidth>
                      <Column gap="m" align="center">
                        <b.icon size={36} />
                        <Heading variant="heading-strong-m" align="center">
                          {b.title}
                        </Heading>
                        <Text align="center" onBackground="neutral-weak">
                          {b.desc}
                        </Text>
                      </Column>
                    </Card>
                  </HoverCard>
                ))}
              </Grid>
            </Column>
          </RevealFx>

          {/* CTA */}
          <RevealFx>
            <Column gap="xl" align="center">
              <CelebrationFx trigger="inview">
                <Heading variant="display-strong-l" align="center">
                  Готови ли сте?
                </Heading>
              </CelebrationFx>

              <Text align="center" onBackground="neutral-weak">
                Създаваме сайтове, които носят реални резултати.
              </Text>

              <Flex gap="m" horizontal="center">
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
              <Flex gap="l" horizontal="center" wrap>
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
      </Column>
    </>
  );
}
