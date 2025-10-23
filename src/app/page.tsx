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
  BarChart,
  PieChart,
  LineBarChart,
  AccordionGroup,
} from "@once-ui-system/core";
import { home, about, person, newsletter, routes } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import type { Metadata } from "next";
import Script from "next/script";
import { 
  FaRobot, 
  FaBrain, 
  FaSearch, 
  FaRocket, 
  FaChartLine, 
  FaLightbulb,
  FaCheckCircle,
  FaGlobe,
  FaCog,
  FaUsers,
  FaHeart,
  FaCode,
  FaShieldAlt,
  FaClock
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Stanchev Digital – SEO и AI Уеб Услуги за Бизнес Растеж",
  description:
    "SEO оптимизация, уеб услуги и AI решения от Stanchev Digital. Повиши онлайн видимостта и развий бизнеса си с интелигентни дигитални стратегии.",
  keywords: [
    "SEO оптимизация",
    "уеб услуги",
    "AI решения",
    "изработка на уебсайтове",
    "дигитален маркетинг",
    "бизнес растеж",
    "онлайн видимост",
    "SEO агенция",
    "Stanchev Digital",
  ],
  openGraph: {
    title: "Stanchev Digital – SEO и AI Уеб Услуги за Бизнес Растеж",
    description:
      "SEO оптимизация, уеб услуги и AI решения от Stanchev Digital. Повиши онлайн видимостта и развий бизнеса си с интелигентни дигитални стратегии.",
    url: "https://stanchev.bg/",
    siteName: "Stanchev Digital",
    images: [
      {
        url: "https://stanchev.bg/images/og/og.jpg",
        width: 1200,
        height: 630,
        alt: "Stanchev Digital – SEO и AI Уеб Услуги за Бизнес Растеж",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stanchev Digital – SEO и AI Уеб Услуги за Бизнес Растеж",
    description:
      "SEO оптимизация, уеб услуги и AI решения от Stanchev Digital. Повиши онлайн видимостта и развий бизнеса си с интелигентни дигитални стратегии.",
    images: ["https://stanchev.bg/images/og/og.jpg"],
  },
};

export default function Nachalo() {
  return (
    <>
      <Script
  id="organization-homepage-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Stanchev Digital",
      url: "https://stanchev.bg/",
      logo: "https://stanchev.bg/images/og/og.jpg",
      description:
        "Stanchev Digital предлага SEO оптимизация, изработка на уебсайтове, AI автоматизация и дигитален маркетинг за бизнес растеж и по-добра онлайн видимост.",
      foundingDate: "2025",
      founder: {
        "@type": "Person",
        name: "Stanchev",
        jobTitle: "SEO & Front-End Specialist",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "seo@stanchev.bg",
          availableLanguage: ["Bulgarian", "English"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Бул. Г.М. Димитров 33",
        addressLocality: "София",
        addressRegion: "София",
        postalCode: "1797",
        addressCountry: "BG",
      },
      sameAs: [
        "https://github.com/stantchev/",
        "https://www.linkedin.com/in/stantcheff/",
        "https://dev.to/stanchev",
      ],
      knowsAbout: [
        "SEO оптимизация",
        "уеб услуги",
        "изработка на сайтове",
        "AI автоматизация",
        "дигитален маркетинг",
        "онлайн видимост",
        "уеб дизайн",
      ],
      mainEntityOfPage: {
        "@type": "WebSite",
        name: "Stanchev Digital",
        url: "https://stanchev.bg/",
        description:
          "Официален сайт на Stanchev Digital – SEO оптимизация и AI уеб услуги за устойчив бизнес растеж и дигитално присъствие.",
      },
    }),
  }}
/>

      <Column maxWidth="m" gap="l" horizontal="center" align="center">
        {/* Hero */}
        <Column
          maxWidth="m"
          horizontal="center"
          vertical="center"
          align="center"
          gap="l"
          paddingBottom="xl"
        >
          <RevealFx speed="fast">
            <Column gap="s" align="center">
              <Heading
                wrap="balance"
                variant="display-strong-xl"
                align="center"
                style={{ lineHeight: "1.2", textAlign: "center" }}
              >
                Ново поколение SEO – за търсачки и AI модели (LLM SEO)
              </Heading>
            </Column>
          </RevealFx>

          <RevealFx delay={0.2} speed="fast">
            <Column maxWidth="m" align="center" horizontal="center">
              <Text
                wrap="balance"
                onBackground="neutral-weak"
                align="center"
                variant="display-default-s"
                style={{ maxWidth: "720px", textAlign: "center" }}
              >
                Позиционирам ви в ChatGPT, Gemini, Claude и всички AI търсачки. 
                <strong> Генеративно SEO</strong> за ерата на изкуствения интелект - 
                двойно предимство пред конкурентите в AI системите за търсене.
              </Text>
            </Column>
          </RevealFx>

<Flex gap="8" wrap horizontal="center">
          {["LLM SEO", "AI SEO", "Next.js", "Генеративно SEO", "SEO оптимизация"].map((lbl) => (
            <Tag key={lbl} size="l" variant="brand">
              {lbl}
            </Tag>
          ))}
        </Flex>

          <RevealFx delay={0.4} speed="fast">
            <Column align="center" horizontal="center" fillWidth>
              <Flex 
                gap="16" 
                horizontal="center" 
                vertical="center" 
                wrap
                className="justify-center w-full"
              >
                <Button
                  href="/kontakti"
                  variant="primary"
                  size="l"
                  prefixIcon="rocket"
                >
                  Започнете AI SEO
                </Button>
                <Button
                  href="/za-men"
                  variant="secondary"
                  size="l"
                  prefixIcon="user"
                >
                  <Flex vertical="center" gap="8">
                    <Avatar src={person.avatar} size="s" />
                    За мен
                  </Flex>
                </Button>
              </Flex>
            </Column>
          </RevealFx>
        </Column>

        {/* AI SEO Services */}
        <Column gap="xl" align="center" paddingY="xl">
          <RevealFx>
            <Column gap="m" align="center">
              <Heading variant="display-strong-m" align="center">
                AI SEO услуги за ерата на изкуствения интелект
              </Heading>
              <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
                Специализирам се в <strong>оптимизация за генеративно търсене</strong> и 
                <strong> SEO в ерата на AI търсачките</strong>. Позиционирам ви в ChatGPT, 
                Gemini, Claude и всички големи езикови модели, докато поддържам 
                отлично класиране в Google.
              </Text>
            </Column>
          </RevealFx>

          <Grid columns="3" s={{ columns: 1 }} gap="l" style={{ maxWidth: "100%", overflow: "hidden" }}>
            <RevealFx delay={0.1}>
              <Card 
                radius="l" 
                direction="column" 
                border="neutral-alpha-medium" 
                fillWidth
                gap="0"
              >
                <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                  <FaRobot size={20} color="var(--brand-strong)" />
                  <Text variant="label-default-s" wrap="balance">LLM SEO оптимизация</Text>
                </Row>
                
                <div
                  style={{
                    width: "100%",
                    height: "192px",
                    background: "linear-gradient(135deg, var(--brand-alpha-weak), var(--brand-alpha-medium))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTop: "1px solid var(--neutral-alpha-weak)",
                    borderBottom: "1px solid var(--neutral-alpha-weak)"
                  }}
                >
                  <FaBrain size={32} color="var(--brand-strong)" />
                </div>
                
                <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1} align="center">
                  <Text variant="body-default-xl" wrap="balance" align="center">SEO за ChatGPT / Gemini / Claude</Text>
                  <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                    Оптимизация за големите езикови модели и AI системи за търсене.
                  </Text>
                  <Column gap="xs" align="center">
                    <Text variant="body-default-s" wrap="balance" align="center">✓ AI-friendly структура</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ Генеративно SEO</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ LLM оптимизация</Text>
                  </Column>
                </Column>
                
                <Column paddingX="m" paddingBottom="m" align="center" horizontal="center">
                  <Button
                    href="/web/llm-seo"
                    variant="primary"
                    size="m"
                    prefixIcon="rocket"
                  >
                    Виж повече
                  </Button>
                </Column>
              </Card>
            </RevealFx>

            <RevealFx delay={0.2}>
              <Card 
                radius="l" 
                direction="column" 
                border="neutral-alpha-medium" 
                fillWidth
                gap="0"
              >
                <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                  <FaSearch size={20} color="var(--success-strong)" />
                  <Text variant="label-default-s" wrap="balance">Класическо SEO</Text>
                </Row>
                
                <div
                  style={{
                    width: "100%",
                    height: "192px",
                    background: "linear-gradient(135deg, var(--success-alpha-weak), var(--success-alpha-medium))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTop: "1px solid var(--neutral-alpha-weak)",
                    borderBottom: "1px solid var(--neutral-alpha-weak)"
                  }}
                >
                  <FaGlobe size={32} color="var(--success-strong)" />
                </div>
                
                <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1} align="center">
                  <Text variant="body-default-xl" wrap="balance" align="center">Google SEO оптимизация</Text>
                  <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                    Традиционна SEO оптимизация за по-добро класиране в Google.
                  </Text>
                  <Column gap="xs" align="center">
                    <Text variant="body-default-s" wrap="balance" align="center">✓ Техническа SEO</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ Контент стратегия</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ Link building</Text>
                  </Column>
                </Column>
                
                <Column paddingX="m" paddingBottom="m" align="center" horizontal="center">
                  <Button
                    href="/seo-uslugi"
                    variant="primary"
                    size="m"
                    prefixIcon="rocket"
                  >
                    Виж повече
                  </Button>
                </Column>
              </Card>
            </RevealFx>

            <RevealFx delay={0.3}>
              <Card 
                radius="l" 
                direction="column" 
                border="neutral-alpha-medium" 
                fillWidth
                gap="0"
              >
                <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                  <FaCode size={20} color="var(--warning-strong)" />
                  <Text variant="label-default-s" wrap="balance">Custom плъгини</Text>
                </Row>
                
                <div
                  style={{
                    width: "100%",
                    height: "192px",
                    background: "linear-gradient(135deg, var(--warning-alpha-weak), var(--warning-alpha-medium))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTop: "1px solid var(--neutral-alpha-weak)",
                    borderBottom: "1px solid var(--neutral-alpha-weak)"
                  }}
                >
                  <FaCode size={32} color="var(--warning-strong)" />
                </div>
                
                <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1} align="center">
                  <Text variant="body-default-xl" wrap="balance" align="center">Custom плъгини за WordPress & OpenCart</Text>
                  <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                    Персонализирани плъгини и модули за вашия бизнес.
                  </Text>
                  <Column gap="xs" align="center">
                    <Text variant="body-default-s" wrap="balance" align="center">✓ WordPress плъгини</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ OpenCart модули</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ WooCommerce разширения</Text>
                  </Column>
                </Column>
                
                <Column paddingX="m" paddingBottom="m" align="center" horizontal="center">
                  <Button
                    href="/web/custom-plagini"
                    variant="primary"
                    size="m"
                    prefixIcon="rocket"
                  >
                    Виж повече
                  </Button>
                </Column>
              </Card>
            </RevealFx>
          </Grid>
        </Column>

        {/* Why me */}
        <Column maxWidth="m" align="center" horizontal="center" gap="l">
          <Heading variant="display-strong-m" align="center">
            Защо да работите с мен?
          </Heading>
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            align="center"
            variant="body-default-l"
            style={{ maxWidth: "720px", textAlign: "center" }}
          >
            Докато повечето SEO агенции гонят само класиране в Google, аз ви
            позиционирам и в AI системите за търсене. Това ви дава двойно
            предимство – да излизате пред конкурентите там, където те все още
            липсват. Работя сам, без излишни посредници, така че получавате
            директна експертиза и бързи резултати.
          </Text>
        </Column>

        {/* SEO Results & Statistics */}
        <Column gap="l" align="center" paddingY="l">
          <RevealFx>
            <Column gap="m" align="center">
              <Column gap="s" align="center">
                <Icon name="trending-up" size="l" onBackground="brand-strong" />
                <Heading variant="display-strong-m" align="center">
                  Реални резултати от AI SEO проекти
                </Heading>
              </Column>
              <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
                Доказани резултати от реални клиенти - средно +433% ръст в органичния трафик, 
                +585% увеличение на приходите и +148% подобрение на конверсията. 
                <strong> Бъдещето на SEO</strong> е тук и работи.
              </Text>
            </Column>
          </RevealFx>

          <RevealFx delay={0.1}>
            <Card
              padding="xl"
              radius="xl"
              style={{
                margin: "0 auto",
                width: "fit-content",
                maxWidth: "100%",
                textAlign: "center"
              }}
            >
              <Column gap="l" align="center">
                <Heading variant="heading-strong-l" align="center">
                  Ръст в трафика, конверсия и продажби
                </Heading>

                <Column
                  align="center"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "900px",
                    margin: "0 auto"
                  }}
                >
                  <LineBarChart
                    marginTop="16"
                    title="Ръст в органичен трафик и приходи през периода Март-Ноември 2025"
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
                      { key: "Органичен трафик", color: "blue" },
                      { key: "Приходи (лв)", color: "yellow" },
                    ]}
                    data={[
                      { date: new Date("2025-03-01"), "Органичен трафик": 1200, "Приходи (лв)": 18500 },
                      { date: new Date("2025-04-01"), "Органичен трафик": 1650, "Приходи (лв)": 212400 },
                      { date: new Date("2025-05-01"), "Органичен трафик": 12100, "Приходи (лв)": 216800 },
                      { date: new Date("2025-06-01"), "Органичен трафик": 12750, "Приходи (лв)": 322100 },
                      { date: new Date("2025-07-01"), "Органичен трафик": 23400, "Приходи (лв)": 327900 },
                      { date: new Date("2025-08-01"), "Органичен трафик": 24100, "Приходи (лв)": 434200 },
                      { date: new Date("2025-09-01"), "Органичен трафик": 34850, "Приходи (лв)": 441800 },
                      { date: new Date("2025-10-01"), "Органичен трафик": 35600, "Приходи (лв)": 549500 },
                      { date: new Date("2025-11-01"), "Органичен трафик": 46400, "Приходи (лв)": 658200 }
                    ]}
                  />
                </Column>

                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  <strong>Ръст в трафика: +433%</strong> | <strong>Ръст в приходите: +585%</strong> | <strong>Ръст в конверсията: +148%</strong>
                </Text>
                <Text variant="body-default-xs" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                  * Това са средни данни от всички клиенти до момента
                </Text>
              </Column>
            </Card>
          </RevealFx>
        </Column>

        {/* AI SEO Benefits */}
        <Column gap="l" align="center" paddingY="l">
          <RevealFx>
            <Column gap="m" align="center">
              <Heading variant="display-strong-m" align="center">
                Защо AI SEO е бъдещето?
              </Heading>
              <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
                <strong>SEO в ерата на изкуствения интелект</strong> не е просто тренд - 
                това е революция в начина, по който хората търсят информация. 
                Позиционирайте се сега в AI системите, преди конкурентите ви.
              </Text>
            </Column>
          </RevealFx>

          <Grid columns="2" s={{ columns: 1 }} gap="l" style={{ maxWidth: "100%", overflow: "hidden" }}>
            <RevealFx delay={0.1}>
              <Card padding="xl" radius="xl" background="surface">
                <Column gap="m" align="center">
                  <FaRobot size={32} color="var(--brand-strong)" />
                  <Heading variant="heading-strong-m" align="center">
                    AI търсачки набират скорост
                  </Heading>
                  <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                    ChatGPT, Gemini, Claude и други AI системи стават все по-популярни за търсене. 
                    <strong>Генеративно SEO</strong> ви позиционира там, където потребителите отиват все повече.
                  </Text>
                  <ProgressBar 
                    value={75} 
                    max={100}
                  />
                  <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                    75% от потребителите използват AI за търсене
                  </Text>
                </Column>
              </Card>
            </RevealFx>

            <RevealFx delay={0.2}>
              <Card padding="xl" radius="xl" background="surface">
                <Column gap="m" align="center">
                  <FaChartLine size={32} color="var(--success-strong)" />
                  <Heading variant="heading-strong-m" align="center">
                    Двойно покритие
                  </Heading>
                  <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                    Моят подход ви дава <strong>двойно предимство</strong> - отлично класиране в Google 
                    И позициониране в AI системите. Покривате всички канали за търсене.
                  </Text>
                  <Row gap="m" align="center">
                    <Tag size="m" variant="success">Google SEO</Tag>
                    <Tag size="m" variant="brand">AI SEO</Tag>
                  </Row>
                </Column>
              </Card>
            </RevealFx>
          </Grid>
        </Column>

        {/* CTA */}
        <Column align="center" paddingY="xl" fillWidth>
          <Heading variant="display-strong-m" align="center">
            Готови ли сте за AI SEO революцията?
          </Heading>
          <Text variant="body-default-l" align="center" onBackground="neutral-weak">
            Не изоставайте от <strong>бъдещето на SEO</strong>. Позиционирайте се в AI системите 
            докато конкурентите ви все още спят. Започнете AI SEO оптимизацията днес.
          </Text>
          <Flex
            horizontal="center"
            vertical="center"
            paddingTop="m"
            gap="l"
            wrap
          >
            <Button
              variant="primary"
              prefixIcon="rocket"
              size="l"
              href="/kontakti"
            >
              Започнете AI SEO
            </Button>
            <Button variant="secondary" size="l" href="/za-men">
              Научете повече
            </Button>
          </Flex>
        </Column>

        {/* Blog */}
        {routes["/blog"] && (
          <Column fillWidth maxWidth="l" gap="m">
            <Heading as="h2" variant="display-strong-xs" align="center">
              Последни публикации
            </Heading>
            <Posts range={[1, 2]} columns="2" />
          </Column>
        )}

        {/* Projects */}
        <Projects range={[1, 3]} />

        {/* FAQ секция */}
        <Column gap="l" align="center" paddingY="l">
          <RevealFx>
            <Column gap="m" align="center">
              <Column gap="s" align="center">
                <Icon name="help-circle" size="l" onBackground="info-strong" />
                <Heading variant="display-strong-m" align="center">
                  Често задавани въпроси за AI SEO
                </Heading>
              </Column>
              <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
                Отговори на най-често задаваните въпроси за <strong>AI SEO</strong>, 
                <strong> генеративно SEO</strong> и <strong>оптимизация за големите езикови модели</strong>. 
                Намери информация за процеса, резултатите и всичко, което трябва да знаеш за AI SEO.
              </Text>
            </Column>
          </RevealFx>

          <RevealFx delay={0.1}>
            <AccordionGroup
              items={[
                {
                  title: "Какво е AI SEO и защо е важно?",
                  content: (
                    <Text onBackground="neutral-weak">
                      <strong>AI SEO</strong> е оптимизация за големите езикови модели като ChatGPT, Gemini и Claude. 
                      Това е <strong>бъдещето на SEO</strong> - докато традиционното SEO се фокусира върху Google, 
                      AI SEO ви позиционира в AI системите за търсене, където потребителите отиват все повече. 
                      <strong> Генеративно SEO</strong> ви дава двойно предимство пред конкурентите.
                    </Text>
                  ),
                },
                {
                  title: "Как работи SEO за ChatGPT и други AI системи?",
                  content: (
                    <Text onBackground="neutral-weak">
                      AI системите използват различни алгоритми от Google. <strong>LLM SEO</strong> оптимизацията 
                      се фокусира върху структуриране на съдържанието по начин, който AI моделите разбират по-добре. 
                      Това включва правилна семантична структура, schema markup за AI и оптимизация за 
                      <strong> генеративно търсене</strong>.
                    </Text>
                  ),
                },
                {
                  title: "Защо да инвестирам в AI SEO сега?",
                  content: (
                    <Text onBackground="neutral-weak">
                      <strong>SEO в ерата на изкуствения интелект</strong> не е просто тренд - това е революция. 
                      AI търсачките набират скорост и скоро ще бъдат толкова популярни колкото Google. 
                      Позиционирайте се сега в AI системите, преди конкурентите ви да се събудят. 
                      <strong> Бъдещето на SEO</strong> е тук.
                    </Text>
                  ),
                },
                {
                  title: "Какви резултати мога да очаквам от AI SEO?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Клиентите ми виждат средно +433% ръст в органичния трафик, +585% увеличение на приходите 
                      и +148% подобрение на конверсията. <strong> Оптимизация за генеративно търсене</strong> 
                      ви дава достъп до нови аудитории в AI системите, докато поддържа отлично класиране в Google.
                    </Text>
                  ),
                },
                {
                  title: "Колко време отнема AI SEO оптимизацията?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Първоначалната <strong>AI SEO</strong> оптимизация отнема 2-4 седмици, в зависимост от 
                      сложността на сайта. Включвам анализ на текущото състояние, оптимизация за AI системите, 
                      технически подобрения и мониторинг на резултатите. Продължителната оптимизация е процес, 
                      който се подобрява с времето.
                    </Text>
                  ),
                },
                {
                  title: "Работи ли AI SEO заедно с традиционното SEO?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Абсолютно! Моят подход ви дава <strong>двойно покритие</strong> - отлично класиране 
                      в Google И позициониране в AI системите. <strong>SEO в ерата на AI търсачките </strong> 
                      не замества традиционното SEO, а го допълва. Получавате най-доброто от двата свята.
                    </Text>
                  ),
                },
              ]}
            />
          </RevealFx>
        </Column>
      </Column>
    </>
  );
}

