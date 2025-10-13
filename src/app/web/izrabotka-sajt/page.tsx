import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  Icon,
  Feedback,
  AccordionGroup,
} from '@once-ui-system/core';
import { baseURL } from '@/resources';
import Script from 'next/script';

export async function generateMetadata() {
  return {
    title: 'Изработка на сайт и лендинг страници | Модерни уебсайтове за вашия бизнес | Станчев SEO',
    description: 'Професионална изработка на сайт и лендинг страници с React, Next.js, Tailwind CSS. Модерни, бързи и SEO оптимизирани уебсайтове за малки и средни бизнеси.',
    keywords: 'изработка на сайт България, лендинг страница цена, уеб дизайн София, React разработчик България, Next.js уебсайт, Tailwind CSS дизайн, модерен корпоративен сайт, респонсивен уебсайт, SEO оптимизиран сайт цена, професионален уебсайт за бизнес, изработка на уебсайт цена, лендинг страница дизайн, корпоративен сайт цена, уеб разработка услуги, персонализиран уебсайт',
    alternates: {
      canonical: `${baseURL}/web/izrabotka-sajt`,
    },
    openGraph: {
      title: 'Изработка на сайт и лендинг страници | Модерни уебсайтове за вашия бизнес',
      description: 'Професионална изработка на сайт и лендинг страници с React, Next.js, Tailwind CSS. Модерни, бързи и SEO оптимизирани уебсайтове за малки и средни бизнеси.',
      url: `${baseURL}/web/izrabotka-sajt`,
      siteName: 'Станчев SEO',
      images: [
        {
          url: `https://stanchev.bg/images/og/web.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Изработка на сайт и лендинг страници | Модерни уебсайтове за вашия бизнес',
      description: 'Професионална изработка на сайт и лендинг страници с React, Next.js, Tailwind CSS. Модерни, бързи и SEO оптимизирани уебсайтове за малки и средни бизнеси.',
      images: [`https://stanchev.bg/images/og/web.jpg`],
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
            "@context": "http://schema.org",
            "@type": "Service",
            "name": "Изработка на сайт и лендинг страници",
            "serviceType": "Уеб разработка",
            "description": "Професионална изработка на сайт и лендинг страници с React, Next.js, Tailwind CSS. Създавам модерни, бързи и SEO оптимизирани уебсайтове за малки и средни бизнеси.",
            "provider": {
              "@type": "Organization",
              "name": "Станчев SEO",
              "url": "https://stanchev.bg/",
              "logo": "https://stanchev.bg/images/og/og.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "seo@stanchev.bg"
              }
            },
            "url": "https://stanchev.bg/web/izrabotka-sajt",
            "areaServed": {
              "@type": "Place",
              "name": "България"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Уеб разработка услуги и цени",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Лендинг страница с модерен дизайн",
                    "description": "Професионална едностранична лендинг страница за промоции, услуги или продукти с фокус върху конверсията и SEO оптимизация."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Корпоративен сайт с CMS",
                    "description": "Многопланинков корпоративен сайт с административен панел, SEO оптимизация и респонсивен дизайн за управление на съдържанието."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Портфолио сайт за творци",
                    "description": "Персонализиран портфолио сайт за творци, фотографи, дизайнери и фрийлансери с модерен дизайн и SEO оптимизация."
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Лендинг страница - професионален пакет",
                  "description": "Едностранична лендинг страница с модерен дизайн, SEO оптимизация, контактна форма и социални мрежи.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "800",
                    "priceCurrency": "BGN",
                    "unitText": "лв.",
                    "valueAddedTaxIncluded": true
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Корпоративен сайт - бизнес пакет",
                  "description": "Многопланинков корпоративен сайт с CMS, SEO оптимизация, административен панел и блог секция.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "1500",
                    "priceCurrency": "BGN",
                    "unitText": "лв.",
                    "valueAddedTaxIncluded": true
                  },
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "47",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      <Column as="section" gap="xl" padding="xl" fillWidth>
        <Column gap="m" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            Изработка на сайт и лендинг страници – модерни уебсайтове за вашия бизнес
          </Heading>

          <Text variant="display-default-s" align="center" onBackground="neutral-weak">
            <strong>Изработка на сайт</strong> с React, Next.js и Tailwind CSS. Създавам модерни, бързи и SEO оптимизирани уебсайтове, които привличат клиенти и конвертират посетители. Ако търсите цялостни <a href="/web">уеб разработка услуги</a>, тук е мястото да започнете.
          </Text>
          <Flex horizontal="center">
            <Button
              variant="primary"
              size="l"
              href="/kontakti"
              prefixIcon="checkCircle"
              data-border="rounded"
            >
              Заяви безплатна консултация
            </Button>
          </Flex>
        </Column>

        <Flex gap="8" wrap horizontal="center">
          {["Уеб разработка", "React", "Next.js", "Tailwind CSS", "SEO оптимизация"].map((lbl) => (
            <Tag key={lbl} size="l">
              {lbl}
            </Tag>
          ))}
        </Flex>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Какво включва изработката на сайт?
          </Heading>

          <Text variant="body-default-l">
            Работя с най-модерните технологии: <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong> и <strong>TypeScript</strong>. Всеки сайт е изграден с SEO в ум от самото начало – правилна структура, бърза скорост, мобилна съвместимост и оптимизирано съдържание. Целта е проста: красив, функционален и видим сайт в Google.
          </Text>

          <Column as="ul" gap="s" paddingLeft="l">
            <li><strong>Модерен дизайн</strong> – чист, професионален и респонсивен дизайн за всички устройства.</li>
            <li><strong>Техническа SEO оптимизация</strong> – Core Web Vitals, мета тагове, schema markup, sitemap.</li>
            <li><strong>Бърза скорост</strong> – оптимизиран код, компресирани изображения, CDN интеграция.</li>
            <li><strong>Мобилна съвместимост</strong> – перфектно изглежда на всички устройства и екрани.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Защо да инвестирате в професионален сайт?
          </Heading>

          <Text variant="body-default-l">
            <strong>Изработка на сайт</strong> е инвестиция в бъдещето на вашия бизнес. Модерният сайт привлича клиенти, изгражда доверие и работи 24/7 за вас. Със SEO оптимизацията видими сте в Google, а с бързата скорост посетителите остават по-дълго на сайта.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Моят процес в 4 етапа
          </Heading>

          {["Планиране", "Дизайн", "Разработка", "Тестване"].map((step, i) => (
            <Flex key={i} gap="8" vertical="start">
              <Icon name="checkCircle" onBackground="brand-strong" />
              <Column gap="2">
                <Heading as="h3" variant="heading-strong-l">
                  {step}
                </Heading>
                <Text variant="body-default-m">
                  {step === "Планиране"
                    ? "Анализирам вашите нужди, целева аудитория и бизнес цели. Изграждам структура и план за съдържанието."
                    : step === "Дизайн"
                    ? "Създавам модерен дизайн с фокус върху потребителското изживяване и конверсията."
                    : step === "Разработка"
                    ? "Програмирам сайта с React, Next.js и Tailwind CSS. Интегрирам SEO оптимизация и функционалности."
                    : "Тествам всички функционалности, скоростта и съвместимостта. Оптимизирам за Google и мобилни устройства."}
                </Text>
              </Column>
            </Flex>
          ))}
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-m" align="center">
            Пакети и цени за изработка на сайт
          </Heading>
          
          <Flex gap="l" wrap horizontal="center">
            <Column gap="m" padding="l" border="neutral-alpha-medium" radius="l" style={{ minWidth: "300px" }}>
              <Heading as="h4" variant="heading-strong-l" align="center">
                Лендинг страница
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Едностранична лендинг страница за промоции или услуги
              </Text>
              <Text variant="display-strong-l" align="center" onBackground="brand-strong">
                800 лв.
              </Text>
              <Column gap="s">
                <Text variant="body-default-s">• Модерен дизайн</Text>
                <Text variant="body-default-s">• SEO оптимизация</Text>
                <Text variant="body-default-s">• Мобилна съвместимост</Text>
                <Text variant="body-default-s">• Контактна форма</Text>
                <Text variant="body-default-s">• Социални мрежи</Text>
              </Column>
              <Button variant="primary" size="m" href="/kontakti">
                Избери този пакет
              </Button>
            </Column>

            <Column gap="m" padding="l" border="neutral-alpha-medium" radius="l" style={{ minWidth: "300px" }}>
              <Heading as="h4" variant="heading-strong-l" align="center">
                Корпоративен сайт
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Многопланинков корпоративен сайт с CMS
              </Text>
              <Text variant="display-strong-l" align="center" onBackground="brand-strong">
                1500 лв.
              </Text>
              <Column gap="s">
                <Text variant="body-default-s">• До 5 страници</Text>
                <Text variant="body-default-s">• Административен панел</Text>
                <Text variant="body-default-s">• SEO оптимизация</Text>
                <Text variant="body-default-s">• Контактна форма</Text>
                <Text variant="body-default-s">• Блог секция</Text>
              </Column>
              <Button variant="primary" size="m" href="/kontakti">
                Избери този пакет
              </Button>
            </Column>
          </Flex>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-m" align="center">
            Често задавани въпроси за изработка на сайт
          </Heading>
          
          <AccordionGroup
            items={[
              {
                title: "Колко време отнема изработката на един сайт?",
                content: (
                  <Text onBackground="neutral-weak">
                    Времето за изработка зависи от сложността на проекта. Лендинг страница се прави за 1-2 седмици, 
                    докато корпоративен сайт с множество страници може да отнеме 3-4 седмици. Включвам време за 
                    планиране, дизайн, разработка, тестване и пускане в експлоатация.
                  </Text>
                ),
              },
              {
                title: "Какви технологии използвате при изработката на сайтове?",
                content: (
                  <Text onBackground="neutral-weak">
                    Работя с най-модерните технологии: React, Next.js, TypeScript, Tailwind CSS. Използвам също 
                    Node.js, PostgreSQL, MongoDB в зависимост от нуждите на проекта. Всички сайтове са оптимизирани 
                    за SEO и имат отлични Core Web Vitals резултати.
                  </Text>
                ),
              },
              {
                title: "Включвате ли SEO оптимизация в цената на изработката?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, всички мои сайтове включват основна SEO оптимизация: мета тагове, правилна структура на 
                    заглавията, schema markup, sitemap, robots.txt и Core Web Vitals оптимизация. Това е част от 
                    стандартния пакет и не се заплаща допълнително.
                  </Text>
                ),
              },
              {
                title: "Предоставяте ли поддръжка след пускането на сайта?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, предлагам различни пакети за поддръжка - от месечна поддръжка с актуализации и бекъп, до 
                    пълноценна поддръжка включваща добавени функционалности. Също така осигурявам обучение за 
                    управление на съдържанието и техническа документация.
                  </Text>
                ),
              },
              {
                title: "Могат ли да се правят промени по сайта след завършването?",
                content: (
                  <Text onBackground="neutral-weak">
                    Разбира се! Всички мои сайтове са изградени с модерни технологии, което позволява лесни 
                    промени и надграждания. Предлагам поддръжка за промени в съдържанието, дизайна и функционалността. 
                    Цените зависят от сложността на промените.
                  </Text>
                ),
              },
              {
                title: "Работите ли с малки и средни бизнеси?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, специализирам се в работа с малки и средни бизнеси, стартъпи и лични брандове. Предлагам 
                    персонализиран подход и разбирам ограниченията в бюджета. Работя директно с собствениците на 
                    бизнеси без посредници, което позволява по-бърза комуникация и по-добри цени.
                  </Text>
                ),
              },
            ]}
          />
        </Column>

        <Column gap="m" align="center" paddingTop="xl">
          <Heading as="h4" variant="display-strong-m" align="center">
            Готови за модерен и професионален сайт?
          </Heading>
          <Flex horizontal="center">
            <Button
              variant="primary"
              size="l"
              prefixIcon="rocket"
              href="/kontakti"
            >
              Свържи се с мен
            </Button>
          </Flex>
        </Column>
      </Column>
    </>
  );
}
