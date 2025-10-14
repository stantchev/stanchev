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
  ProgressBar,
  LineBarChart,
  PieChart,
  BarChart,
} from "@once-ui-system/core";
import { person, routes } from "@/resources";
import type { Metadata } from "next";
import { 
  FaCode, 
  FaPalette, 
  FaMobile, 
  FaRocket, 
  FaShoppingCart, 
  FaWordpress, 
  FaStore, 
  FaCogs, 
  FaSearch, 
  FaShieldAlt, 
  FaClock, 
  FaCheckCircle,
  FaLaptop,
  FaGlobe,
  FaCog,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaHeart
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Уеб разработка и дизайн | Модерни сайтове за вашия бизнес | Станчев SEO",
  description: "Професионални услуги за уеб разработка, дизайн и SEO оптимизация в България. Създавам модерни, бързи и функционални уебсайтове с React, Next.js, Tailwind CSS. Core Web Vitals оптимизация, мобилно-първи дизайн, техническа SEO интеграция.",
  keywords: "уеб разработка, уеб дизайн, SEO оптимизация, React разработчик, Next.js, Tailwind CSS, Core Web Vitals, мобилно приложение, лендинг страница, уебсайт за бизнес, техническа SEO, производителност на сайт, модерен дизайн, респонсивен дизайн, WordPress плъгини, OpenCart модули, WooCommerce разширения, custom плъгини",
  openGraph: {
    title: "Уеб разработка и дизайн | Модерни сайтове за вашия бизнес | Станчев SEO",
    description: "Професионални услуги за уеб разработка, дизайн и SEO оптимизация в България. Създавам модерни, бързи и функционални уебсайтове с React, Next.js, Tailwind CSS.",
    url: "https://stanchev.bg/web",
    siteName: "Станчев SEO",
    images: [
      {
        url: "https://stanchev.bg/images/og/web.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Уеб разработка и дизайн | Модерни сайтове за вашия бизнес | Станчев SEO",
    description: "Професионални услуги за уеб разработка, дизайн и SEO оптимизация в България. Създавам модерни, бързи и функционални уебсайтове с React, Next.js, Tailwind CSS.",
    images: ["https://stanchev.bg/images/og/web.jpg"],
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

export default function WebPage() {
  return (
    <>
      {/* Структурирани данни за AI търсачки */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Уеб разработка и дизайн услуги",
            "description": "Професионални услуги за уеб разработка, дизайн и SEO оптимизация в България. Създавам модерни, бързи и функционални уебсайтове с React, Next.js, Tailwind CSS.",
            "provider": {
              "@type": "Person",
              "name": "Станчев",
              "url": "https://stanchev.bg",
              "image": "https://stanchev.bg/images/avatar.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/stantcheff/",
                "https://github.com/stantchev/"
              ]
            },
            "areaServed": {
              "@type": "Country",
              "name": "България"
            },
            "serviceType": [
              "Уеб разработка",
              "Уеб дизайн", 
              "SEO оптимизация",
              "Core Web Vitals оптимизация",
              "React разработка",
              "Next.js разработка",
              "WordPress плъгини",
              "OpenCart модули",
              "WooCommerce разширения",
              "Custom плъгини"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Уеб разработка услуги",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Изработка на сайт / лендинг страница",
                    "description": "Изчистен, модерен дизайн с фокус върху потребителското изживяване и скоростта."
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Оптимизация на съществуващ сайт",
                    "description": "Ускоряване на зареждането, подобряване на мобилния изглед, фиксиране на визуални грешки."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "SEO интеграция и структура",
                    "description": "Метатагове, schema markup, правилна йерархия на заглавията, sitemap и Google Search Console интеграция."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Поддръжка и надграждане", 
                    "description": "Актуализации, дребни промени по съдържанието, сигурност, следене на скоростта."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom плъгини за OpenCart & WordPress",
                    "description": "Разработвам персонализирани плъгини и модули за OpenCart и WordPress, които решават конкретни бизнес нужди."
                  }
                }
              ]
            }
          })
        }}
      />

      <Column as="section" gap="l" padding="l" maxWidth="m" horizontal="center" style={{ width: "100%", maxWidth: "100vw", overflow: "hidden" }}>

        {/* Hero секция */}
        <Column gap="xl" align="center" paddingBottom="xl">
          <RevealFx speed="fast">
            <Column gap="m" align="center">
              <Heading
                wrap="balance"
                variant="display-strong-xl"
                align="center"
                style={{ lineHeight: "1.2", textAlign: "center" }}
              >
                Модерни, бързи и SEO-оптимизирани уебсайтове
              </Heading>
              <Text
                wrap="balance"
                onBackground="neutral-weak"
                align="center"
                variant="display-default-s"
              >
                Всеки проект е бърз, адаптивен и оптимизиран за по-добро класиране в Google — защото впечатлението онлайн започва със скоростта и стила.
              </Text>
            </Column>
          </RevealFx>

          <RevealFx delay={0.2} speed="fast">
            <Column align="center" fillWidth>
              <Flex 
                gap="m" 
                horizontal="center" 
                vertical="center" 
                wrap
                className="justify-center"
              >
                <Button
                  href="/seo-proekti"
                  variant="primary"
                  size="l"
                  prefixIcon="eye"
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
            </Column>
          </RevealFx>
        </Column>

        {/* Основни услуги */}
        <Column gap="xl" align="center" paddingY="xl">
        <RevealFx>
          <Column gap="m" align="center">
            <Heading variant="display-strong-m" align="center">
              Какво получаваш
            </Heading>
            <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
              Професионални уеб услуги за модерни бизнеси - от изработка на сайт и лендинг страници до SEO оптимизация и поддръжка. Създавам модерни, бързи и функционални уебсайтове с React, Next.js и Tailwind CSS, които привличат клиенти и конвертират посетители.
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
                <FaLaptop size={20} color="var(--brand-strong)" />
                <Text variant="label-default-s" wrap="balance">Изработка на сайт / лендинг страница</Text>
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
                <FaCheckCircle size={32} color="var(--brand-strong)" />
              </div>
              
              <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1} align="center">
                <Text variant="body-default-xl" wrap="balance" align="center">Изработка на сайт / лендинг страница</Text>
                <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                  Изчистен, модерен дизайн с фокус върху потребителското изживяване и скоростта.
                </Text>
                <Column gap="xs" align="center">
                  <Text variant="body-default-s" wrap="balance" align="center">✓ React, Next.js, Tailwind CSS</Text>
                  <Text variant="body-default-s" wrap="balance" align="center">✓ SEO best practices</Text>
                  <Text variant="body-default-s" wrap="balance" align="center">✓ Респонсивен дизайн</Text>
                </Column>
              </Column>
              
              <Column paddingX="m" paddingBottom="m" align="center" horizontal="center">
                <Button
                  href="/web/izrabotka-sajt"
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
                <FaRocket size={20} color="var(--success-strong)" />
                <Text variant="label-default-s" wrap="balance">Оптимизация на съществуващ сайт</Text>
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
                <FaCheckCircle size={32} color="var(--success-strong)" />
              </div>
              
              <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1} align="center">
                <Text variant="body-default-xl" wrap="balance" align="center">Оптимизация на съществуващ сайт</Text>
                <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                  Ускоряване на зареждането, подобряване на мобилния изглед, фиксиране на визуални грешки.
                </Text>
                <Column gap="xs" align="center">
                  <Text variant="body-default-s" wrap="balance" align="center">✓ +70% по-бързо зареждане</Text>
                  <Text variant="body-default-s" wrap="balance" align="center">✓ По-добро мобилно изживяване</Text>
                  <Text variant="body-default-s" wrap="balance" align="center">✓ Технически одит</Text>
                </Column>
              </Column>
              
              <Column paddingX="m" paddingBottom="m" align="center" horizontal="center">
                <Button
                  href="/web/optimizatsiya-sajt"
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
                <FaSearch size={20} color="var(--warning-strong)" />
                <Text variant="label-default-s" wrap="balance">SEO интеграция и структура</Text>
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
                <FaCheckCircle size={32} color="var(--warning-strong)" />
              </div>
              
              <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1} align="center">
                <Text variant="body-default-xl" wrap="balance" align="center">SEO интеграция и структура</Text>
                <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                  Метатагове, schema markup, правилна йерархия на заглавията, sitemap и Google Search Console интеграция.
                </Text>
                <Column gap="xs" align="center">
                  <Text variant="body-default-s" wrap="balance" align="center">✓ По-добра видимост в Google</Text>
                  <Text variant="body-default-s" wrap="balance" align="center">✓ Schema markup</Text>
                  <Text variant="body-default-s" wrap="balance" align="center">✓ Google Search Console</Text>
                </Column>
              </Column>
              
              <Column paddingX="m" paddingBottom="m" align="center" horizontal="center">
                <Button
                  href="/web/seo-integratsiya"
                  variant="primary"
                  size="m"
                  prefixIcon="rocket"
                >
                  Виж повече
                </Button>
              </Column>
            </Card>
          </RevealFx>

          <RevealFx delay={0.4}>
            <Card 
              radius="l" 
              direction="column" 
              border="neutral-alpha-medium" 
              fillWidth
              gap="0"
            >
              <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                <FaCogs size={20} color="var(--info-strong)" />
                <Text variant="label-default-s" wrap="balance">Поддръжка и надграждане</Text>
              </Row>
              
              <div
                style={{
                  width: "100%",
                  height: "192px",
                  background: "linear-gradient(135deg, var(--info-alpha-weak), var(--info-alpha-medium))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderTop: "1px solid var(--neutral-alpha-weak)",
                  borderBottom: "1px solid var(--neutral-alpha-weak)"
                }}
              >
                <FaCheckCircle size={32} color="var(--info-strong)" />
              </div>
              
              <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1} align="center">
                <Text variant="body-default-xl" wrap="balance" align="center">Поддръжка и надграждане</Text>
                <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                  Актуализации, дребни промени по съдържанието, сигурност, следене на скоростта.
                </Text>
                <Column gap="xs" align="center">
                  <Text variant="body-default-s" wrap="balance" align="center">✓ Месечна поддръжка</Text>
                  <Text variant="body-default-s" wrap="balance" align="center">✓ Сигурностни актуализации</Text>
                  <Text variant="body-default-s" wrap="balance" align="center">✓ Регулярен бекъп</Text>
                </Column>
              </Column>
              
              <Column paddingX="m" paddingBottom="m" align="center" horizontal="center">
                <Button
                  href="/web/poddrzhka-nadgradzhdane"
                  variant="primary"
                  size="m"
                  prefixIcon="rocket"
                >
                  Виж повече
                </Button>
              </Column>
            </Card>
          </RevealFx>

          <RevealFx delay={0.5}>
            <Card 
              radius="l" 
              direction="column" 
              border="neutral-alpha-medium" 
              fillWidth
              gap="0"
            >
              <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                <FaCode size={20} color="var(--accent-strong)" />
                <Text variant="label-default-s" wrap="balance">Custom плъгини за OpenCart & WordPress</Text>
              </Row>
              
              <div
                style={{
                  width: "100%",
                  height: "192px",
                  background: "linear-gradient(135deg, var(--accent-alpha-weak), var(--accent-alpha-medium))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderTop: "1px solid var(--neutral-alpha-weak)",
                  borderBottom: "1px solid var(--neutral-alpha-weak)"
                }}
              >
                <FaCheckCircle size={32} color="var(--accent-strong)" />
              </div>
              
              <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1} align="center">
                <Text variant="body-default-xl" wrap="balance" align="center">Custom плъгини за OpenCart & WordPress</Text>
                <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                  Разработвам персонализирани плъгини и модули за OpenCart и WordPress, които решават конкретни бизнес нужди.
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

        {/* Защо да избереш мен */}
        <Column gap="l" align="center" paddingY="l">
        <RevealFx>
          <Column gap="m" align="center">
            <Column gap="s" align="center">
              <Icon name="star" size="l" onBackground="brand-strong" />
              <Heading variant="display-strong-m" align="center">
                Защо да избереш мен
              </Heading>
            </Column>
            <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
              Опитен фронтенд разработчик и SEO специалист с доказани резултати. Специализирам се в създаване на модерни уебсайтове с отлични Core Web Vitals показатели, които се класират по-добре в Google и привличат повече клиенти за вашия бизнес.
            </Text>
          </Column>
        </RevealFx>

        <Row gap="xl" align="start" wrap>
          <Column>
            <RevealFx delay={0.1}>
              <Card padding="xl" radius="xl" background="surface">
                <Column gap="m" align="center">
                  <Flex gap="m" align="center" horizontal="center">
                    <Avatar src={person.avatar} size="l" />
                    <Column gap="xs">
                      <Text variant="body-default-s" weight="strong">Станчев</Text>
                      <Text variant="body-default-xs" onBackground="neutral-weak">Frontend Developer & SEO Specialist</Text>
                    </Column>
                  </Flex>
                  
                  <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                    Аз съм фронтенд разработчик, който вярва, че уебсайтът не е просто визитка, а дигитално преживяване.
                    Всеки проект съчетавам с реална SEO логика — защото красивият сайт е безсмислен, ако никой не го открива.
                    Работя с внимание към детайла, комуникирам открито и съм до клиента през целия процес.
                  </Text>
                </Column>
              </Card>
            </RevealFx>
          </Column>

          <Column>
            <RevealFx delay={0.2}>
              <Card padding="xl" radius="xl">
                <Column gap="l">
                  <Heading variant="heading-strong-l" align="center">
                    Core Web Vitals подобрения
                  </Heading>
                  
                  <Row gap="m" align="start">
                    <Column align="center">
                      {/* BarChart за сравнение преди/след */}
                      <BarChart
                        title="Подобрения в производителността"
                        description="Сравнение на метриките преди и след оптимизацията"
                        axis="none"
                        legend={{ position: "bottom-center" }}
                        series={[
                          { key: "Преди", color: "red" },
                          { key: "След", color: "green" }
                        ]}
                        data={[
                          { label: "LCP (секунди)", "Преди": 4.8, "След": 2.1 },
                          { label: "FID (ms)", "Преди": 180, "След": 45 },
                          { label: "CLS", "Преди": 0.35, "След": 0.08 },
                          { label: "Performance", "Преди": 52, "След": 94 }
                        ]}
                      />
                    </Column>

                    <Column align="center">
                      {/* PieChart за разпределение на подобренията */}
                      <PieChart
                        title="Разпределение на подобренията"
                        description="Процентно разпределение на подобренията по категории"
                        legend={{
                          display: true,
                          position: "bottom-center"
                        }}
                        ring={{ inner: 60, outer: 80 }}
                        series={{ key: "value" }}
                        data={[
                          { name: "LCP подобрение", value: 56 },
                          { name: "FID подобрение", value: 75 },
                          { name: "CLS подобрение", value: 77 },
                          { name: "Performance подобрение", value: 81 }
                        ]}
                      />
                    </Column>
                  </Row>

                  <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                    <strong>Средно подобрение: +81%</strong> в Core Web Vitals метриките
                  </Text>
                  <Text variant="body-default-xs" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                    * Това са средни данни от всички клиенти до момента
                  </Text>
                </Column>
              </Card>
            </RevealFx>
          </Column>
        </Row>
      </Column>

        {/* Процес на работа - Roadmap */}
        <Column gap="l" align="center" paddingY="l">
        <RevealFx>
          <Column gap="m" align="center">
            <Column gap="s" align="center">
              <Heading variant="display-strong-m" align="center">
                Процес на работа
              </Heading>
            </Column>
            <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
              Ясен и структуриран процес за създаване на вашия уебсайт - от първоначалната консултация и планиране до пускането и поддръжката. Работя прозрачно, с редовни актуализации и винаги съм до клиента през целия цикъл на разработка.
            </Text>
          </Column>
        </RevealFx>

        <RevealFx delay={0.1}>
          <Column gap="l" style={{ width: "100%", maxWidth: "100%" }}>
            {/* Стъпка 1 */}
            <Row gap="l" align="center" style={{ width: "100%" }}>
              <Column align="center">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "var(--brand-background-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid var(--brand-background-strong)"
                  }}
                >
                  <FaUsers size={24} color="var(--brand-strong)" />
                </div>
              </Column>
              <Column>
                <Card padding="l" radius="xl" style={{ width: "100%" }}>
                  <Column gap="s">
                    <Text variant="heading-strong-m">Свързване и безплатна консултация</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      Обсъждаме целите и нуждите на проекта. Анализирам текущото състояние и предлагам решения.
                    </Text>
                  </Column>
                </Card>
              </Column>
            </Row>

            {/* Стъпка 2 */}
            <Row gap="l" align="center" style={{ width: "100%" }}>
              <Column align="center">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "var(--success-background-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid var(--success-background-strong)"
                  }}
                >
                  <FaLightbulb size={24} color="var(--success-strong)" />
                </div>
              </Column>
              <Column>
                <Card padding="l" radius="xl" style={{ width: "100%" }}>
                  <Column gap="s">
                    <Text variant="heading-strong-m">План и оферта</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      Предлагам решение и точен срок. Детайлен план за реализация и ясни етапи на работа.
                    </Text>
                  </Column>
                </Card>
              </Column>
            </Row>

            {/* Стъпка 3 */}
            <Row gap="l" align="center" style={{ width: "100%" }}>
              <Column align="center">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "var(--warning-background-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid var(--warning-background-strong)"
                  }}
                >
                  <FaCode size={24} color="var(--warning-strong)" />
                </div>
              </Column>
              <Column>
                <Card padding="l" radius="xl" style={{ width: "100%" }}>
                  <Column gap="s">
                    <Text variant="heading-strong-m">Разработка и обратна връзка</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      Споделям визуализация, приемам корекции, изграждам сайта с регулярни актуализации.
                    </Text>
                  </Column>
                </Card>
              </Column>
            </Row>

            {/* Стъпка 4 */}
            <Row gap="l" align="center" style={{ width: "100%" }}>
              <Column align="center">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "var(--info-background-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid var(--info-background-strong)"
                  }}
                >
                  <FaRocket size={24} color="var(--info-strong)" />
                </div>
              </Column>
              <Column>
                <Card padding="l" radius="xl" style={{ width: "100%" }}>
                  <Column gap="s">
                    <Text variant="heading-strong-m">Пускане и поддръжка</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      Осигурявам SEO настройки и следпускова помощ. Месечна поддръжка и оптимизация.
                    </Text>
                  </Column>
                </Card>
              </Column>
            </Row>
          </Column>
        </RevealFx>
      </Column>

        {/* Метрики и резултати */}
        <Column gap="l" align="center" paddingY="l">
        <RevealFx>
          <Column gap="m" align="center">
            <Column gap="s" align="center">
              <Heading variant="display-strong-m" align="center">
                Реални резултати от проектите
              </Heading>
            </Column>
            <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
              Доказани резултати от реални клиенти - средно +433% ръст в органичния трафик, +585% увеличение на приходите и +148% подобрение на конверсията. Всички проекти показват значителни подобрения в Core Web Vitals метриките и по-добро класиране в Google.
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

        {/* ЧЗВ секция */}
        <Column gap="l" align="center" paddingY="l">
        <RevealFx>
          <Column gap="m" align="center">
            <Column gap="s" align="center">
              <Icon name="help-circle" size="l" onBackground="info-strong" />
              <Heading variant="display-strong-m" align="center">
                Често задавани въпроси
              </Heading>
            </Column>
            <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
              Отговори на най-често задаваните въпроси за уеб разработка, SEO оптимизация, технологии и процес на работа. Намери информация за времето за изработка, цени, поддръжка и всичко, което трябва да знаеш преди да започнем проект.
            </Text>
          </Column>
        </RevealFx>

        <RevealFx delay={0.1}>
          <AccordionGroup
            items={[
              {
                title: "Колко време отнема изработката на един уебсайт?",
                content: (
                  <Text onBackground="neutral-weak">
                    Времето за изработка зависи от сложността на проекта. Обикновено лендинг страница се прави за 1-2 седмици, 
                    докато пълноценен уебсайт с множество страници може да отнеме 3-6 седмици. Включвам време за планиране, 
                    дизайн, разработка, тестване и пускане в експлоатация.
                  </Text>
                ),
              },
              {
                title: "Какви технологии използвате при уеб разработката?",
                content: (
                  <Text onBackground="neutral-weak">
                    Работя с най-модерните технологии: React, Next.js, TypeScript, Tailwind CSS, Node.js. Използвам също 
                    GraphQL, Prisma, PostgreSQL, MongoDB в зависимост от нуждите на проекта. Всички сайтове са оптимизирани 
                    за SEO и имат отлични Core Web Vitals резултати.
                  </Text>
                ),
              },
              {
                title: "Предоставяте ли поддръжка след пускането на сайта?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, предлагам различни пакети за поддръжка - от месечна поддръжка с актуализации и бекъп, до пълноценна 
                    поддръжка включваща добавени функционалности. Също така осигурявам обучение за управление на съдържанието 
                    и техническа документация.
                  </Text>
                ),
              },
              {
                title: "Колко струва изработката на уебсайт?",
                content: (
                  <Text onBackground="neutral-weak">
                    Цената зависи от сложността и функционалностите на проекта. Лендинг страница започва от 800-1500 лв, 
                    докато пълноценен корпоративен сайт може да струва 2000-5000 лв. Включвам безплатна консултация, 
                    където обсъждаме точно вашите нужди и давам конкретна оферта.
                  </Text>
                ),
              },
              {
                title: "Как се осигурява SEO оптимизацията на сайта?",
                content: (
                  <Text onBackground="neutral-weak">
                    Всички сайтове са изградени с SEO в ум от самото начало. Включвам техническа SEO оптимизация, 
                    правилна структура на заглавията, мета тагове, schema markup, sitemap, robots.txt, Core Web Vitals 
                    оптимизация и интеграция с Google Search Console. Също така давам съвети за съдържателна SEO стратегия.
                  </Text>
                ),
              },
              {
                title: "Работите ли с малки и средни бизнеси?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, специализирам се в работа с малки и средни бизнеси, стартъпи и лични брандове. Предлагам 
                    персонализиран подход и разбирам ограниченията в бюджета. Работя директно с собствениците на бизнеси 
                    без посредници, което позволява по-бърза комуникация и по-добри цени.
                  </Text>
                ),
              },
            ]}
          />
        </RevealFx>
      </Column>

        {/* CTA секция */}
        <Column gap="m" align="center" paddingY="m">
        <RevealFx>
          <Column gap="m" align="center">
            <Column gap="s" align="center">
              <Heading variant="display-strong-m" align="center">
                Готов за твоя сайт?
              </Heading>
            </Column>
            <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
              Времето е сега да направиш стъпката към професионален онлайн присъствие. Свържи се с мен за безплатна консултация и получавай персонализирано предложение за модерен уебсайт, който ще привлече клиенти и ще увеличи продажбите на вашия бизнес.
            </Text>
            <Text variant="body-default-l" align="center" onBackground="neutral-weak">
              Пиши ми чрез формата тук или на имейл seo@stanchev.bg
            </Text>
            <Text variant="body-default-m" align="center" onBackground="neutral-weak">
              Ще ти отговоря с предложение още същия ден.
            </Text>
          </Column>
        </RevealFx>

        <RevealFx delay={0.2}>
          <Column align="center" style={{ width: "100%", maxWidth: "100%" }}>
            <Flex 
              gap="m" 
              horizontal="center" 
              vertical="center" 
              wrap
              className="justify-center"
            >
              <Button
                href="/kontakti"
                variant="primary"
                size="l"
                prefixIcon="message-circle"
              >
                Свържи се с мен
              </Button>
              <Button
                href="/za-men"
                variant="secondary"
                size="l"
                prefixIcon="user"
              >
                За мен
              </Button>
            </Flex>
          </Column>
        </RevealFx>
        </Column>
      </Column>
    </>
  );
}
