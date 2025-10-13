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
    title: 'Custom плъгини за OpenCart & WordPress | Персонализирани модули и разширения | Станчев SEO',
    description: 'Разработка на персонализирани плъгини и модули за OpenCart и WordPress. Custom функционалности, WooCommerce разширения и специализирани решения за вашия бизнес.',
    keywords: 'custom плъгини цена, WordPress плъгини България, OpenCart модули София, WooCommerce разширения цена, персонализирани модули цена, custom функционалности България, PHP разработчик, custom плъгин за WordPress, OpenCart модул цена',
    alternates: {
      canonical: `${baseURL}/web/custom-plagini`,
    },
    openGraph: {
      title: 'Custom плъгини за OpenCart & WordPress | Персонализирани модули и разширения',
      description: 'Разработка на персонализирани плъгини и модули за OpenCart и WordPress. Custom функционалности, WooCommerce разширения и специализирани решения за вашия бизнес.',
      url: `${baseURL}/web/custom-plagini`,
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
      title: 'Custom плъгини за OpenCart & WordPress | Персонализирани модули и разширения',
      description: 'Разработка на персонализирани плъгини и модули за OpenCart и WordPress. Custom функционалности, WooCommerce разширения и специализирани решения за вашия бизнес.',
      images: [`https://stanchev.bg/images/og/web.jpg`],
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
            "@context": "http://schema.org",
            "@type": "Service",
            "name": "Custom плъгини за OpenCart & WordPress",
            "serviceType": "Уеб разработка",
            "description": "Разработка на персонализирани плъгини и модули за OpenCart и WordPress. Custom функционалности, WooCommerce разширения и специализирани решения за вашия бизнес.",
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
            "url": "https://stanchev.bg/web/custom-plagini",
            "areaServed": {
              "@type": "Place",
              "name": "България"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Custom плъгини услуги и цени",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "WordPress плъгини разработка",
                    "description": "Професионално разработване на персонализирани плъгини за WordPress с custom функционалности и hook система."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "OpenCart модули разработка",
                    "description": "Специализирани модули за OpenCart с административен панел и база данни интеграция за разширяване на функционалността."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "WooCommerce разширения разработка",
                    "description": "Custom разширения за WooCommerce с персонализирани функционалности за онлайн магазини."
                  }
                },
                {
                  "@type": "Offer",
                  "name": "WordPress плъгин - професионален пакет",
                  "description": "Персонализиран плъгин за WordPress с custom функционалности, settings страница, hook система и документация.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "600",
                    "priceCurrency": "BGN",
                    "unitText": "лв.",
                    "valueAddedTaxIncluded": true
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "OpenCart модул - бизнес пакет",
                  "description": "Специализиран модул за OpenCart с custom функционалности, административен панел, база данни интеграция и тестване.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "500",
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
              "ratingValue": "4.8",
              "reviewCount": "23",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
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
          <Heading as="h2" variant="display-default-m">
            Защо да изберете custom плъгини?
          </Heading>

          <Text variant="body-default-l">
            <strong>Custom плъгини</strong> решават уникални бизнес нужди, които стандартните разширения не покриват. Персонализираните решения са оптимизирани за вашия конкретен случай, работят по-бързо и не съдържат ненужни функции. Освен това имате пълен контрол върху функционалността и бъдещите надграждания.
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
              <Text variant="display-strong-l" align="center" onBackground="brand">
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
              <Text variant="display-strong-l" align="center" onBackground="brand">
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


