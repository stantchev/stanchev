import React from "react";
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Card,
  Grid,
  Icon,
  Line,
  Accordion,
  AccordionGroup,
  Media,
  SmartLink,
  Feedback,
  Meta,
  Schema,
  ProgressBar,
  BlockQuote,
  LetterFx,
  Pulse,
} from "@once-ui-system/core";
import { home, about, person, newsletter, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
  openGraph: {
    title: home.title,
    description: home.description,
    url: "https://stanchev.bg/",
    siteName: "Станчев SEO",
    images: [
      {
        url: "https://stanchev.bg/images/og/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: home.title,
    description: home.description,
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
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "Станчев SEO",
            url: "https://stanchev.bg/",
            logo: "https://stanchev.bg/images/og/og.jpg",
            description:
              "SEO оптимизация и AI Automation за повече трафик, по-високо класиране и автоматизирано развитие на вашия бизнес | Станчев SEO",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "seo@stanchev.bg",
              },
            ],
            address: [
              {
                "@type": "PostalAddress",
                streetAddress: "Бул. Г.М. Димитров 26",
                addressLocality: "София",
                addressRegion: "София",
                postalCode: "1797",
                addressCountry: "BG",
              },
            ],
            sameAs: [
              "https://github.com/stantchev/",
              "https://www.linkedin.com/in/stantcheff/",
              "https://dev.to/stanchev",
            ],
          }),
        }}
      />

      <Column maxWidth="m" gap="l" horizontal="center" align="center">
        {/* Featured badge секция */}
        <Column fillWidth horizontal="center" gap="m">
          <Column maxWidth="s" horizontal="center" align="center">
            {home.featured.display && (
              <RevealFx
                fillWidth
                horizontal="center"
                paddingTop="16"
                paddingBottom="32"
              >
                <Badge
                  background="brand-alpha-weak"
                  paddingX="12"
                  paddingY="4"
                  onBackground="neutral-strong"
                  textVariant="label-default-s"
                  arrow={false}
                  href="https://stanchev.bg/seo-proekti/robots-txt-editor-cache-control-opencart-2302"
                >
                  <Row gap="8" vertical="center">
                    {home.featured.title}
                  </Row>
                </Badge>
              </RevealFx>
            )}
          </Column>
        </Column>

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
            <Heading
              wrap="balance"
              variant="display-strong-l"
              align="center"
              style={{ lineHeight: "1.2", textAlign: "center" }}
            >
              SEO оптимизация + AI Automation за вашия бизнес
            </Heading>
          </RevealFx>

          <RevealFx delay={0.2} speed="fast">
            <Column maxWidth="m" align="center" horizontal="center">
              <Text
                wrap="balance"
                onBackground="neutral-weak"
                align="center"
                variant="heading-default-l"
                style={{ maxWidth: "720px", textAlign: "center" }}
              >
                Искате ли повече клиенти и по-високи позиции в Google и AI системите? 
                Предлагам професионална SEO оптимизация и AI автоматизация за вашия бизнес. 
                Давам ви измерим ръст на трафика и реални резултати, без да губите време и ресурси.
              </Text>
            </Column>
          </RevealFx>

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
                  Започнете сега
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
            позиционирам и в AI системите за търсене. SEO услуги, SEO оптимизация, 
            оптимизация за търсачки, SEO специалист, линк билдинг, SEO анализ, 
            on-page оптимизация, off-page оптимизация, SEO за електронни магазини, 
            SEO за мобилни устройства, SEO консултации, SEO за WordPress. 
            Това ви дава двойно предимство – да излизате пред конкурентите там, където те все още
            липсват. Работя сам, без излишни посредници, така че получавате
            директна експертиза и бързи резултати.
          </Text>
        </Column>

        {/* AI Automation Section with Cards */}
        <Column maxWidth="l" align="center" horizontal="center" gap="l">
          <LetterFx
            speed="fast"
            trigger="instant"
            charset={["X", "$", "@", "a", "H", "z", "0", "y", "#", "?", "*", "0", "1", "+"]}>
            AI автоматизация за SEO
          </LetterFx>
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            align="center"
            variant="body-default-l"
            style={{ maxWidth: "720px", textAlign: "center" }}
          >
            Използвам AI технологии за автоматизация на SEO процеси и анализ на данни. 
            Това ви позволява да се фокусирате върху стратегическото планиране, 
            докато AI се грижи за повторяемите задачи и техническите оптимизации.
          </Text>
          
          {/* AI Services Grid */}
          <Grid columns="3" s={{ columns: 1 }} gap="m" maxWidth="l">
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4">
              <Column gap="m" align="center">
                <Badge>AI Powered</Badge>
                <Icon name="rocket" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-s" align="center">
                  AI Автоматизация
                </Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  Автоматизирайте повторяемите задачи с AI технологии
                </Text>
                <Row gap="xs" horizontal="center">
                  <Badge>Machine Learning</Badge>
                  <Badge>NLP</Badge>
                </Row>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4">
              <Column gap="m" align="center">
                <Badge>GEO Optimized</Badge>
                <Icon name="globe" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-s" align="center">
                  SEO Оптимизация
                </Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  Професионална SEO оптимизация за Google и AI търсачки
                </Text>
                <Row gap="xs" horizontal="center">
                  <Badge>GEO</Badge>
                  <Badge>AEO</Badge>
                </Row>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4">
              <Column gap="m" align="center">
                <Badge>Analytics</Badge>
                <Icon name="checkCircle" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-s" align="center">
                  Резултати
                </Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  Измерими резултати и по-високо класиране
                </Text>
                <Row gap="xs" horizontal="center">
                  <Badge>Google Analytics</Badge>
                  <Badge>GSC</Badge>
                </Row>
              </Column>
            </Card>
          </Grid>
        </Column>

        {/* Custom Solutions Section */}
        <Column maxWidth="l" align="center" horizontal="center" gap="l">
          <Heading variant="display-strong-m" align="center">
            Custom решения
          </Heading>
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            align="center"
            variant="body-default-l"
            style={{ maxWidth: "720px", textAlign: "center" }}
          >
            Специализирани SEO решения и AI интеграции за вашия бизнес
          </Text>
          
          <Grid columns="3" s={{ columns: 1 }} gap="l" maxWidth="l">
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" align="center" flex={1}>
                <Icon name="document" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-s" align="center">Robots.txt Editor</Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  OpenCart Cache Control
                </Text>
                <SmartLink href="/seo-proekti/robots-txt-editor-cache-control-opencart-2302">
                  <Button variant="primary" size="s">
                    Виж проекта
                  </Button>
                </SmartLink>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" align="center" flex={1}>
                <Icon name="globe" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-s" align="center">URL Fix Case Study</Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  Техническа SEO оптимизация
                </Text>
                <SmartLink href="/seo-proekti/fix-url-l-case-study">
                  <Button variant="primary" size="s">
                    Виж проекта
                  </Button>
                </SmartLink>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" align="center" flex={1}>
                <Icon name="checkCircle" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-s" align="center">Премахване на счупени изображения</Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  SEO оптимизация на медии
                </Text>
                <SmartLink href="/seo-proekti/premahvane-na-schupeni-izobrazhenia">
                  <Button variant="primary" size="s">
                    Виж проекта
                  </Button>
                </SmartLink>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" align="center" flex={1}>
                <Icon name="rocket" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-s" align="center">Shopify Euro Price Tag</Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  E-commerce SEO решение
                </Text>
                <SmartLink href="/seo-proekti/shopify-euro-price-tag">
                  <Button variant="primary" size="s">
                    Виж проекта
                  </Button>
                </SmartLink>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" align="center" flex={1}>
                <Icon name="globe" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-s" align="center">WooCommerce Brand Migration</Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  Миграция на брандове
                </Text>
                <SmartLink href="/seo-proekti/woocommerce-brand-migration">
                  <Button variant="primary" size="s">
                    Виж проекта
                  </Button>
                </SmartLink>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" align="center" flex={1}>
                <Icon name="rocket" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-s" align="center">ChatGPT WordPress Integration</Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  AI интеграция Case Study
                </Text>
                <SmartLink href="/seo-proekti/integraciya-chatgpt-wordpress-case-study">
                  <Button variant="primary" size="s">
                    Виж проекта
                  </Button>
                </SmartLink>
              </Column>
            </Card>
          </Grid>
        </Column>

        {/* Statistics Section */}
        <Column maxWidth="l" align="center" horizontal="center" gap="l">
          <Heading variant="display-strong-m" align="center">
            Резултати в цифри
          </Heading>
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            align="center"
            variant="body-default-l"
            style={{ maxWidth: "720px", textAlign: "center" }}
          >
            Доказани резултати от SEO оптимизация и AI автоматизация
          </Text>
          
          <Grid columns="2" gap="l" maxWidth="l">
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" align="center" flex={1}>
                <Row gap="m" vertical="center" horizontal="center">
                  <Icon name="arrowUpRight" size="m" onBackground="brand-strong" />
                  <Heading variant="heading-strong-s" align="center">200%+ ръст в трафика</Heading>
                </Row>
                <ProgressBar value={85} />
                <Text variant="body-default-s" onBackground="neutral-weak" align="center" style={{ marginTop: "auto" }}>
                  Среден ръст в органичния трафик за 6 месеца
                </Text>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" align="center" flex={1}>
                <Row gap="m" vertical="center" horizontal="center">
                  <Icon name="checkCircle" size="m" onBackground="brand-strong" />
                  <Heading variant="heading-strong-s" align="center">35% CTR подобрение</Heading>
                </Row>
                <ProgressBar value={70} />
                <Text variant="body-default-s" onBackground="neutral-weak" align="center" style={{ marginTop: "auto" }}>
                  Увеличение на кликване в Google резултатите
                </Text>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" align="center" flex={1}>
                <Row gap="m" vertical="center" horizontal="center">
                  <Icon name="globe" size="m" onBackground="brand-strong" />
                  <Heading variant="heading-strong-s" align="center">50+ SEO одита</Heading>
                </Row>
                <ProgressBar value={90} />
                <Text variant="body-default-s" onBackground="neutral-weak" align="center" style={{ marginTop: "auto" }}>
                  Проведени технически SEO анализи
                </Text>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" align="center" flex={1}>
                <Row gap="m" vertical="center" horizontal="center">
                  <Icon name="rocket" size="m" onBackground="brand-strong" />
                  <Heading variant="heading-strong-s" align="center">40% скорост</Heading>
                </Row>
                <ProgressBar value={80} />
                <Text variant="body-default-s" onBackground="neutral-weak" align="center" style={{ marginTop: "auto" }}>
                  Подобрение на Core Web Vitals показателите
                </Text>
              </Column>
            </Card>
          </Grid>
        </Column>

        {/* Services Table Section */}
        <Column maxWidth="l" align="center" horizontal="center" gap="l">
          <Heading variant="display-strong-m" align="center">
            SEO услуги и цени
          </Heading>
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            align="center"
            variant="body-default-l"
            style={{ maxWidth: "720px", textAlign: "center" }}
          >
            Пълна гама от SEO услуги за всички ваши нужди
          </Text>
          
          <Grid columns="1" gap="m" maxWidth="l">
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" flex={1}>
                <Row gap="l" vertical="center" flex={1}>
                  <Column flex="1">
                    <Text variant="body-strong-s">SEO Одит</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">Пълен технически анализ на сайта</Text>
                  </Column>
                  <Column align="center" gap="xs">
                    <Text variant="body-strong-s" onBackground="brand-strong">От 200 лв.</Text>
                    <Text variant="body-default-xs" onBackground="neutral-weak">3-5 дни</Text>
                  </Column>
                </Row>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" flex={1}>
                <Row gap="l" vertical="center" flex={1}>
                  <Column flex="1">
                    <Text variant="body-strong-s">On-Page SEO</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">Оптимизация на структура и съдържание</Text>
                  </Column>
                  <Column align="center" gap="xs">
                    <Text variant="body-strong-s" onBackground="brand-strong">От 300 лв.</Text>
                    <Text variant="body-default-xs" onBackground="neutral-weak">1-2 седмици</Text>
                  </Column>
                </Row>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" flex={1}>
                <Row gap="l" vertical="center" flex={1}>
                  <Column flex="1">
                    <Text variant="body-strong-s">Link Building</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">Изграждане на качествени линкове</Text>
                  </Column>
                  <Column align="center" gap="xs">
                    <Text variant="body-strong-s" onBackground="brand-strong">От 400 лв.</Text>
                    <Text variant="body-default-xs" onBackground="neutral-weak">2-4 седмици</Text>
                  </Column>
                </Row>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4" direction="column" fillWidth>
              <Column gap="m" flex={1}>
                <Row gap="l" vertical="center" flex={1}>
                  <Column flex="1">
                    <Text variant="body-strong-s">AI Автоматизация</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">Автоматизация на SEO процеси</Text>
                  </Column>
                  <Column align="center" gap="xs">
                    <Text variant="body-strong-s" onBackground="brand-strong">По договаряне</Text>
                    <Text variant="body-default-xs" onBackground="neutral-weak">1-3 месеца</Text>
                  </Column>
                </Row>
              </Column>
            </Card>
          </Grid>
        </Column>

        {/* Media Section */}
        <Column maxWidth="l" align="center" horizontal="center" gap="l">
          <Heading variant="display-strong-m" align="center">
            Процесът на работа
          </Heading>
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            align="center"
            variant="body-default-l"
            style={{ maxWidth: "720px", textAlign: "center" }}
          >
            Стъпка по стъпка към по-високи позиции в Google
          </Text>
          
          <Grid columns="3" s={{ columns: 1 }} gap="l" maxWidth="l">
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4">
              <Column gap="m" align="center">
                <Icon name="document" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-s" align="center">1. Анализ</Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  Пълен SEO одит и анализ на конкурентната среда
                </Text>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4">
              <Column gap="m" align="center">
                <Icon name="rocket" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-s" align="center">2. Оптимизация</Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  Техническа и съдържателна SEO оптимизация
                </Text>
              </Column>
            </Card>
            
            <Card padding="l" background="page" border="neutral-alpha-weak" radius="m-4">
              <Column gap="m" align="center">
                <Icon name="checkCircle" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-s" align="center">3. Резултати</Heading>
                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  Мониторинг и отчети за постигнатите резултати
                </Text>
              </Column>
            </Card>
          </Grid>
        </Column>

        {/* FAQ Section */}
        <Column maxWidth="m" align="center" horizontal="center" gap="l">
          <Heading variant="display-strong-m" align="center">
            Често задавани въпроси
          </Heading>
          <AccordionGroup
            items={[
              {
                title: "Какво е GEO (Generative Engine Optimization)?",
                content: (
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    GEO е новата SEO стратегия за AI търсачки като ChatGPT, Perplexity и Claude. 
                    Оптимизираме съдържанието да излиза в AI отговорите, което ви дава предимство 
                    пред конкурентите в новата ера на AI търсене.
                  </Text>
                )
              },
              {
                title: "Защо е важно AI автоматизацията?",
                content: (
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    AI автоматизацията ви позволява да автоматизирате повторяемите SEO задачи, 
                    да анализирате данни по-бързо и да фокусирате усилията си върху стратегическото 
                    планиране. Това ви дава конкурентно предимство и по-ефективно използване на времето.
                  </Text>
                )
              },
              {
                title: "Колко време отнема да видя резултати?",
                content: (
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Първите резултати се появяват след 2-4 седмици, но значителното подобрение 
                    на класирането и трафика се случва след 3-6 месеца постоянна работа. 
                    SEO е маратон, не спринт.
                  </Text>
                )
              },
              {
                title: "Работите ли с малки бизнеси?",
                content: (
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Да! Работя с бизнеси от всички размери - от стартъпи до големи корпорации. 
                    Всеки проект получава индивидуален подход и внимание, независимо от размера.
                  </Text>
                )
              }
            ]}
          />
        </Column>

        {/* Testimonials Section */}
        <Column maxWidth="l" align="center" horizontal="center" gap="l">
          <Heading variant="display-strong-m" align="center">
            Какво казват клиентите
          </Heading>
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            align="center"
            variant="body-default-l"
            style={{ maxWidth: "720px", textAlign: "center" }}
          >
            Реални отзиви от доволни клиенти
          </Text>
          
          <Grid columns="2" gap="l" maxWidth="l">
            <BlockQuote
              author={{
                name: "Иван Петров",
              }}
              subline="CEO, TechStart">
              "Станчев направи нещо невероятно с нашия сайт. Трафикът се увеличи с 300% 
              за 4 месеца. Професионален подход и измерими резултати!"
            </BlockQuote>
            
            <BlockQuote
              author={{
                name: "Мария Георгиева",
              }}
              subline="Маркетинг директор">
              "AI автоматизацията, която внедрихме, ни спести 20 часа седмично. 
              Сега фокусираме усилията си върху стратегическото планиране."
            </BlockQuote>
          </Grid>
        </Column>


        {/* CTA */}
        <Column align="center" paddingY="xl" fillWidth>
          <Heading variant="display-strong-m" align="center">
            Искате ли сайтът ви да се класира по-високо?
          </Heading>
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
              Свържете се с мен
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

        {/* Newsletter */}
        {newsletter.display && (
          <Column fillWidth maxWidth="s" align="center" paddingY="40">
            <Mailchimp />
          </Column>
        )}
      </Column>

    </>
  );
}
