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
    title: 'SEO интеграция и структура | Техническа SEO оптимизация за сайтове | Станчев SEO',
    description: 'Професионална SEO интеграция и структура за сайтове. Метатагове, schema markup, правилна йерархия на заглавията, sitemap и Google Search Console интеграция.',
    keywords: 'SEO интеграция цена, техническа SEO България, schema markup оптимизация, мета тагове София, sitemap създаване, Google Search Console настройка, SEO структура на сайт, йерархия на заглавията оптимизация, структурирани данни, техническа SEO оптимизация',
    alternates: {
      canonical: `${baseURL}/web/seo-integratsiya`,
    },
    openGraph: {
      title: 'SEO интеграция и структура | Техническа SEO оптимизация за сайтове',
      description: 'Професионална SEO интеграция и структура за сайтове. Метатагове, schema markup, правилна йерархия на заглавията, sitemap и Google Search Console интеграция.',
      url: `${baseURL}/web/seo-integratsiya`,
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
      title: 'SEO интеграция и структура | Техническа SEO оптимизация за сайтове',
      description: 'Професионална SEO интеграция и структура за сайтове. Метатагове, schema markup, правилна йерархия на заглавията, sitemap и Google Search Console интеграция.',
      images: [`https://stanchev.bg/images/og/web.jpg`],
    },
  };
}

export default function SeoIntegratsiyaPage() {
  return (
    <>
      <Script
        id="seo-integration-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            "name": "SEO интеграция и структура",
            "serviceType": "Техническа SEO",
            "description": "Професионална SEO интеграция и структура за сайтове. Метатагове, schema markup, правилна йерархия на заглавията, sitemap и Google Search Console интеграция.",
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
            "url": "https://stanchev.bg/web/seo-integratsiya",
            "areaServed": {
              "@type": "Place",
              "name": "България"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SEO интеграция услуги и цени",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Schema markup интеграция",
                    "description": "Професионално добавяне на структурирани данни за по-добра индексация, богати резултати и AI търсачки оптимизация."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Техническа SEO оптимизация",
                    "description": "Комплексна техническа SEO оптимизация: мета тагове, robots.txt, sitemap, йерархия на заглавията и Open Graph тагове."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Google Search Console настройка",
                    "description": "Пълна интеграция и настройка на Google Search Console за мониторинг, индексиране и производителност."
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Базова SEO интеграция - стартов пакет",
                  "description": "Основни SEO елементи, техническа оптимизация, мета тагове и sitemap създаване.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "350",
                    "priceCurrency": "BGN",
                    "unitText": "лв.",
                    "valueAddedTaxIncluded": true
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Пълна SEO интеграция - професионален пакет",
                  "description": "Цялостна SEO интеграция с schema markup, Google Search Console, rich snippets оптимизация и 30-дневна поддръжка.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "550",
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
              "reviewCount": "28",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      <Column as="section" gap="xl" padding="xl" fillWidth>
        <Column gap="m" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            SEO интеграция и структура – техническа SEO оптимизация за вашия сайт
          </Heading>

          <Text variant="display-default-s" align="center" onBackground="neutral-weak">
            <strong>SEO интеграция</strong> с метатагове, schema markup, правилна йерархия на заглавията, sitemap и Google Search Console. Осигурявам правилно индексиране и по-добра видимост в Google. Ако търсите цялостни <a href="/web">уеб разработка услуги</a>, тук е мястото да започнете.
          </Text>
          <Flex horizontal="center">
            <Button
              variant="primary"
              size="l"
              href="/kontakti"
              prefixIcon="checkCircle"
              data-border="rounded"
            >
              Заяви безплатен SEO анализ
            </Button>
          </Flex>
        </Column>

        <Flex gap="8" wrap horizontal="center">
          {["Schema markup", "Мета тагове", "Sitemap", "Google Search Console", "Техническа SEO"].map((lbl) => (
            <Tag key={lbl} size="l">
              {lbl}
            </Tag>
          ))}
        </Flex>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Какво включва SEO интеграцията?
          </Heading>

          <Text variant="body-default-l">
            <strong>SEO интеграция</strong> е основата на всяка успешна SEO стратегия. Настройвам техническите елементи, които позволяват на Google да разбере и индексира правилно вашия сайт. Включва мета тагове, schema markup, sitemap, robots.txt и правилна структура на съдържанието.
          </Text>

          <Column as="ul" gap="s" paddingLeft="l">
            <li><strong>Schema markup интеграция</strong> – структурирани данни за по-добра индексация и богати резултати.</li>
            <li><strong>Мета тагове оптимизация</strong> – title, description, keywords и Open Graph тагове за всяка страница.</li>
            <li><strong>Sitemap и robots.txt</strong> – правилно индексиране и навигация за търсачките.</li>
            <li><strong>Google Search Console</strong> – настройка и мониторинг на производителността в Google.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Защо е важна SEO интеграцията?
          </Heading>

          <Text variant="body-default-l">
            <strong>SEO интеграцията</strong> е първата стъпка към видимост в Google. Без правилна техническа SEO основа, дори най-доброто съдържание може да остане невидимо за търсачките. Правилната структура и метаданни помагат на Google да разбере какво предлага вашият сайт и кога да го показва в резултатите.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Моят процес в 4 етапа
          </Heading>

          {["Анализ", "Структуриране", "Интеграция", "Тестване"].map((step, i) => (
            <Flex key={i} gap="8" vertical="start">
              <Icon name="checkCircle" onBackground="brand-strong" />
              <Column gap="2">
                <Heading as="h3" variant="heading-strong-l">
                  {step}
                </Heading>
                <Text variant="body-default-m">
                  {step === "Анализ"
                    ? "Анализирам текущата SEO структура на сайта: мета тагове, schema markup, sitemap и индексиране."
                    : step === "Структуриране"
                    ? "Планирам оптималната SEO структура: йерархия на заглавията, URL структура и навигация."
                    : step === "Интеграция"
                    ? "Интегрирам всички SEO елементи: schema markup, мета тагове, sitemap и Google Search Console."
                    : "Тествам всички SEO елементи и проверявам правилното индексиране в Google Search Console."}
                </Text>
              </Column>
            </Flex>
          ))}
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-m" align="center">
            Пакети и цени за SEO интеграция
          </Heading>
          
          <Flex gap="l" wrap horizontal="center">
            <Column gap="m" padding="l" border="neutral-alpha-medium" radius="l" style={{ minWidth: "300px" }}>
              <Heading as="h4" variant="heading-strong-l" align="center">
                Базова SEO интеграция
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Основни SEO елементи и техническа оптимизация
              </Text>
              <Text variant="display-strong-l" align="center" onBackground="brand-strong">
                350 лв.
              </Text>
              <Column gap="s">
                <Text variant="body-default-s">• Мета тагове оптимизация</Text>
                <Text variant="body-default-s">• Sitemap създаване</Text>
                <Text variant="body-default-s">• Robots.txt настройка</Text>
                <Text variant="body-default-s">• Йерархия на заглавията</Text>
                <Text variant="body-default-s">• Open Graph тагове</Text>
              </Column>
              <Button variant="primary" size="m" href="/kontakti">
                Избери този пакет
              </Button>
            </Column>

            <Column gap="m" padding="l" border="neutral-alpha-medium" radius="l" style={{ minWidth: "300px" }}>
              <Heading as="h4" variant="heading-strong-l" align="center">
                Пълна SEO интеграция
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Цялостна SEO интеграция с schema markup
              </Text>
              <Text variant="display-strong-l" align="center" onBackground="brand-strong">
                550 лв.
              </Text>
              <Column gap="s">
                <Text variant="body-default-s">• Всичко от базовия пакет</Text>
                <Text variant="body-default-s">• Schema markup интеграция</Text>
                <Text variant="body-default-s">• Google Search Console</Text>
                <Text variant="body-default-s">• Rich snippets оптимизация</Text>
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
            Често задавани въпроси за SEO интеграция
          </Heading>
          
          <AccordionGroup
            items={[
              {
                title: "Какво включва SEO интеграцията?",
                content: (
                  <Text onBackground="neutral-weak">
                    SEO интеграцията включва: мета тагове оптимизация, schema markup добавване, sitemap създаване, 
                    robots.txt настройка, йерархия на заглавията, Open Graph тагове и Google Search Console интеграция. 
                    Всичко е направено според най-новите Google стандарти.
                  </Text>
                ),
              },
              {
                title: "Колко време отнема SEO интеграцията?",
                content: (
                  <Text onBackground="neutral-weak">
                    Базовата SEO интеграция се прави за 3-5 дни, докато пълната интеграция с schema markup може да 
                    отнеме 1-2 седмици. Времето зависи от размера на сайта и броя страници, които трябва да се 
                    оптимизират.
                  </Text>
                ),
              },
              {
                title: "Какви са предимствата на schema markup?",
                content: (
                  <Text onBackground="neutral-weak">
                    Schema markup подобрява индексацията в Google, добавя богати резултати (rich snippets), 
                    оптимизира сайта за AI търсачки и Google Overviews. Това води до по-висока CTR и по-добро 
                    класиране в търсачката.
                  </Text>
                ),
              },
              {
                title: "Предоставяте ли обучение за управление на SEO елементите?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, включвам обучение за управление на основните SEO елементи, както и документация за 
                    всички направени промени. Също така предоставям инструменти за мониторинг на производителността 
                    в Google Search Console.
                  </Text>
                ),
              },
            ]}
          />
        </Column>

        <Column gap="m" align="center" paddingTop="xl">
          <Heading as="h4" variant="display-strong-m" align="center">
            Готови за правилна SEO интеграция?
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
