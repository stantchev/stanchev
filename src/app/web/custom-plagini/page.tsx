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
    title: "Custom плъгини за WordPress и OpenCart | Stanchev Digital",
    description:
      "Персонализирани плъгини и модули за WordPress, OpenCart и WooCommerce. Специализирани решения за бизнес функционалности и висока производителност.",
    keywords: [
      "custom плъгини",
      "WordPress плъгини",
      "OpenCart модули",
      "WooCommerce разширения",
      "персонализирани модули",
      "PHP разработчик",
      "custom функционалности",
      "разработка на плъгини",
      "Stanchev Digital",
    ],
    alternates: {
      canonical: `${baseURL}/web/custom-plagini`,
    },
    openGraph: {
      title: "Custom плъгини за WordPress и OpenCart | Stanchev Digital",
      description:
        "Персонализирани плъгини и модули за WordPress, OpenCart и WooCommerce. Специализирани решения за бизнес функционалности и висока производителност.",
      url: `${baseURL}/web/custom-plagini`,
      siteName: "Stanchev Digital",
      images: [
        {
          url: "https://stanchev.bg/images/og/og.jpg",
          width: 1200,
          height: 630,
          alt: "Custom плъгини и модули за WordPress и OpenCart",
        },
      ],
      locale: "bg_BG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom плъгини за WordPress и OpenCart | Stanchev Digital",
      description:
        "Персонализирани плъгини и модули за WordPress, OpenCart и WooCommerce. Специализирани решения за бизнес функционалности и висока производителност.",
      images: ["https://stanchev.bg/images/og/og.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
export default function CustomPlaginiPage() {
  return (
    <>
     <Script
  id="custom-plugins-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://stanchev.bg/web/custom-plagini#service",
      name: "Custom плъгини за WordPress и OpenCart",
      serviceType: "Уеб разработка и програмиране",
      keywords: [
        "WordPress плъгини",
        "OpenCart модули",
        "WooCommerce разширения",
        "custom функционалности",
        "PHP разработка",
        "уеб програмиране България",
      ],
      description:
        "Разработка на персонализирани плъгини и модули за WordPress, OpenCart и WooCommerce. Custom функционалности и професионални решения за растеж на бизнеса.",
      serviceOutput:
        "Готов custom плъгин или модул с пълна интеграция, техническа SEO оптимизация и документация.",
      provider: {
        "@type": "Organization",
        name: "Stanchev Digital",
        url: "https://stanchev.bg/",
        logo: "https://stanchev.bg/images/og/og.jpg",
        sameAs: [
          "https://www.linkedin.com/in/stantcheff/",
          "https://github.com/stantchev/",
          "https://dev.to/stanchev",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "seo@stanchev.bg",
        },
      },
      url: "https://stanchev.bg/web/custom-plagini",
      areaServed: {
        "@type": "Place",
        name: "България",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "BGN",
        lowPrice: "500",
        highPrice: "600",
        offerCount: "2",
        availability: "https://schema.org/InStock",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Custom плъгини и модули",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WordPress плъгини разработка",
              description:
                "Професионално разработване на персонализирани WordPress плъгини с hook система и custom функционалности.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "OpenCart модули разработка",
              description:
                "Специализирани OpenCart модули с административен панел и интеграция с бази данни.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WooCommerce разширения разработка",
              description:
                "Custom разширения за WooCommerce с персонализирани функции за онлайн магазини.",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "23",
        bestRating: "5",
        worstRating: "1",
      },
    }),
  }}
/>
      <Column as="section" gap="xl" padding="xl" fillWidth>
        <Column gap="m" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            Custom плъгини за OpenCart & WordPress – персонализирани модули за вашия бизнес
          </Heading>

          <Text variant="display-default-s" align="center" onBackground="neutral-weak">
            <strong>Custom плъгини</strong> и модули за OpenCart и WordPress, които решават конкретни бизнес нужди. Разработвам персонализирани функционалности, WooCommerce разширения и специализирани решения. Ако търсите цялостни <a href="/web">уеб разработка услуги</a>, тук е мястото да започнете.
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
          {["WordPress плъгини", "OpenCart модули", "WooCommerce", "Custom функционалности", "PHP разработка"].map((lbl) => (
            <Tag key={lbl} size="l">
              {lbl}
            </Tag>
          ))}
        </Flex>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Какво включва разработката на custom плъгини?
          </Heading>

          <Text variant="body-default-l">
            <strong>Custom плъгини</strong> са персонализирани решения, създадени специално за вашите бизнес нужди. Разработвам модули за WordPress, OpenCart и WooCommerce, които добавят уникални функционалности, които не се намират в стандартните разширения. Всички плъгини са оптимизирани за производителност и съвместимост.
          </Text>

          <Column as="ul" gap="s" paddingLeft="l">
            <li><strong>WordPress плъгини</strong> – персонализирани функционалности за WordPress сайтове.</li>
            <li><strong>OpenCart модули</strong> – специализирани модули за разширяване на функционалността на онлайн магазина.</li>
            <li><strong>WooCommerce разширения</strong> – custom функционалности за WooCommerce онлайн магазини.</li>
            <li><strong>PHP разработка</strong> – чист, оптимизиран код с фокус върху сигурността и производителността.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-m">
            Защо да изберете custom плъгини?
          </Heading>
          <Text variant="body-default-l">
            <strong>Custom плъгини</strong> решават уникални бизнес нужди, които стандартните разширения не покриват. Персонализираните решения са оптимизирани за вашия конкретен случай, работят по-бързо и не съдържат ненужни функции. Освен това имате пълен контрол върху функционалността и бъдещите надграждания.
          </Text>
        </Column>
   <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Примерен OpenCart модул: Robots.txt Editor
          </Heading>

          <Text variant="body-default-l">
            Ето пример за <strong>практически модул</strong>, който създадох за OpenCart 2.3.0.2. 
            <a href="https://github.com/stantchev/opencart-robots-editor" target="_blank" rel="noopener noreferrer">
              Robots.txt Editor & Cache Control
            </a> позволява директна редакция на robots.txt от админ панела и селективно изчистване на кеша му.
          </Text>

          <Column gap="m" padding="l" border="neutral-alpha-medium" radius="l" background="neutral-alpha-weak">
            <Heading as="h3" variant="heading-strong-m">
             Ключови функции на модула:
            </Heading>
            <Column gap="s">
              <Text variant="body-default-s">• <strong>Директна редакция</strong> на robots.txt от админ панела</Text>
              <Text variant="body-default-s">• <strong>Clear Cache бутон</strong> – премахва само кеша на robots.txt</Text>
              <Text variant="body-default-s">• <strong>SEO Ready</strong> – промените са видими веднага за crawler-и</Text>
              <Text variant="body-default-s">• <strong>Без риск</strong> – реализирано с OCMOD, не изисква промени по ядрото</Text>
            </Column>
            
            <Flex gap="s" wrap>
              <Tag size="m">OpenCart 2.3.0.2</Tag>
              <Tag size="m">PHP</Tag>
              <Tag size="m">SEO Tools</Tag>
              <Tag size="m">Admin Panel</Tag>
            </Flex>

            <Button 
              variant="secondary" 
              size="m" 
              href="https://github.com/stantchev/opencart-robots-editor" 
              target="_blank"
              rel="noopener noreferrer"
              prefixIcon="externalLink"
            >
              Виж в GitHub
            </Button>
          </Column>

          <Text variant="body-default-m" onBackground="neutral-weak">
            Този модул демонстрира как custom решенията решават реални SEO проблеми. 
            Вместо да се налага FTP достъп за всяка промяна в robots.txt, администраторите могат 
            да правят промени директно от панела и да виждат резултата веднага.
          </Text>
        </Column>
        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Моят процес в 4 етапа
          </Heading>
          {["Анализ", "Проектиране", "Разработка", "Тестване"].map((step, i) => (
            <Flex key={i} gap="8" vertical="start">
              <Icon name="checkCircle" onBackground="brand-strong" />
              <Column gap="2">
                <Heading as="h3" variant="heading-strong-l">
                  {step}
                </Heading>
                <Text variant="body-default-m">
                  {step === "Анализ"
                    ? "Анализирам вашите нужди, изискванията и съществуващата функционалност за да разбера какво точно трябва да се създаде."
                    : step === "Проектиране"
                    ? "Проектирам архитектурата на плъгина, базата данни и API интерфейсите за оптимална производителност."
                    : step === "Разработка"
                    ? "Програмирам плъгина с чист, оптимизиран PHP код, следвайки най-добрите практики за сигурност."
                    : "Тествам плъгина в различни сценарии, проверявам съвместимостта и оптимизирам производителността."}
                </Text>
              </Column>
            </Flex>
          ))}
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-m" align="center">
            Пакети и цени за custom плъгини
          </Heading>
          
          <Flex gap="l" wrap horizontal="center">
            <Column gap="m" padding="l" border="neutral-alpha-medium" radius="l" style={{ minWidth: "300px" }}>
              <Heading as="h4" variant="heading-strong-l" align="center">
                OpenCart модул
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Персонализиран модул за OpenCart
              </Text>
              <Text variant="display-strong-l" align="center" onBackground="brand-strong">
                500 лв.
              </Text>
              <Column gap="s">
                <Text variant="body-default-s">• Custom функционалности</Text>
                <Text variant="body-default-s">• Административен панел</Text>
                <Text variant="body-default-s">• База данни интеграция</Text>
                <Text variant="body-default-s">• Тестване и оптимизация</Text>
                <Text variant="body-default-s">• Документация</Text>
              </Column>
              <Button variant="primary" size="m" href="/kontakti">
                Избери този пакет
              </Button>
            </Column>

            <Column gap="m" padding="l" border="neutral-alpha-medium" radius="l" style={{ minWidth: "300px" }}>
              <Heading as="h4" variant="heading-strong-l" align="center">
                WordPress плъгин
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Персонализиран плъгин за WordPress
              </Text>
              <Text variant="display-strong-l" align="center" onBackground="brand-strong">
                600 лв.
              </Text>
              <Column gap="s">
                <Text variant="body-default-s">• Custom функционалности</Text>
                <Text variant="body-default-s">• Settings страница</Text>
                <Text variant="body-default-s">• Hook система</Text>
                <Text variant="body-default-s">• Тестване и оптимизация</Text>
                <Text variant="body-default-s">• 30-дневна поддръжка</Text>
              </Column>
              <Button variant="primary" size="m" href="/kontakti">
                Избери този пакет
              </Button>
            </Column>
          </Flex>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-m" align="center">
            Често задавани въпроси за custom плъгини
          </Heading>
          
          <AccordionGroup
            items={[
              {
                title: "Колко време отнема разработката на custom плъгин?",
                content: (
                  <Text onBackground="neutral-weak">
                    Времето зависи от сложността на функционалността. Обикновено WordPress плъгин се прави за 1-2 седмици, 
                    докато OpenCart модул може да отнеме 1-3 седмици. Включвам време за планиране, разработка, тестване 
                    и документация.
                  </Text>
                ),
              },
              {
                title: "Какви технологии използвате за разработката?",
                content: (
                  <Text onBackground="neutral-weak">
                    За WordPress плъгини използвам чист PHP код, WordPress hooks и filters система, JavaScript за 
                    frontend функционалности и MySQL за база данни. За OpenCart модули използвам MVC архитектура, 
                    PHP и OpenCart API система.
                  </Text>
                ),
              },
              {
                title: "Предоставяте ли документация за плъгина?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, всички плъгини включват пълна документация: инструкции за инсталация, настройки, 
                    употреба и поддръжка. Също така предоставям чист, коментиран код за лесно разбиране и 
                    бъдещи модификации.
                  </Text>
                ),
              },
              {
                title: "Може ли плъгинът да се адаптира в бъдеще?",
                content: (
                  <Text onBackground="neutral-weak">
                    Разбира се! Всички плъгини са разработени с модулна архитектура, което позволява лесни 
                    промени и надграждания. Предоставям поддръжка за модификации и нови функционалности според 
                    нуждите на бизнеса.
                  </Text>
                ),
              },
            ]}
          />
        </Column>

        <Column gap="m" align="center" paddingTop="xl">
          <Heading as="h4" variant="display-strong-m" align="center">
            Готови за персонализиран плъгин за вашия бизнес?
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

