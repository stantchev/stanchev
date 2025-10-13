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
    title: 'Поддръжка и надграждане на сайт | Месечна поддръжка и актуализации | Станчев SEO',
    description: 'Професионална поддръжка и надграждане на сайт. Месечна поддръжка, сигурностни актуализации, редовен бекъп и добавени функционалности за вашия сайт.',
    keywords: 'поддръжка на сайт цена, месечна поддръжка България, актуализации на сайт София, сигурност на сайт цена, бекъп на сайт услуги, надграждане на сайт цена, поддръжка на уебсайт, техническа поддръжка на сайт, поддръжка и актуализации',
    alternates: {
      canonical: `${baseURL}/web/poddrzhka-nadgradzhdane`,
    },
    openGraph: {
      title: 'Поддръжка и надграждане на сайт | Месечна поддръжка и актуализации',
      description: 'Професионална поддръжка и надграждане на сайт. Месечна поддръжка, сигурностни актуализации, редовен бекъп и добавени функционалности за вашия сайт.',
      url: `${baseURL}/web/poddrzhka-nadgradzhdane`,
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
      title: 'Поддръжка и надграждане на сайт | Месечна поддръжка и актуализации',
      description: 'Професионална поддръжка и надграждане на сайт. Месечна поддръжка, сигурностни актуализации, редовен бекъп и добавени функционалности за вашия сайт.',
      images: [`https://stanchev.bg/images/og/web.jpg`],
    },
  };
}

export default function PoddrzhkaNadgradzhdanePage() {
  return (
    <>
      <Script
        id="website-maintenance-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            "name": "Поддръжка и надграждане на сайт",
            "serviceType": "Уеб поддръжка",
            "description": "Професионална поддръжка и надграждане на сайт. Месечна поддръжка, сигурностни актуализации, редовен бекъп и добавени функционалности за вашия сайт.",
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
            "url": "https://stanchev.bg/web/poddrzhka-nadgradzhdane",
            "areaServed": {
              "@type": "Place",
              "name": "България"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Уеб поддръжка услуги и цени",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Месечна поддръжка на сайт",
                    "description": "Професионални редовни актуализации, мониторинг, бекъп и техническа поддръжка на сайта."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Сигурностни актуализации и защита",
                    "description": "Комплексна защита от хакери, SSL сертификати, сигурностни патчове и мониторинг на заплахи."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Надграждане на функционалности",
                    "description": "Добавяне на нови функции, подобрения на съществуващите и адаптация според нуждите на бизнеса."
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Базова поддръжка - стартов пакет",
                  "description": "Основни актуализации, мониторинг на сайта, бекъп на данните и техническа поддръжка.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "150",
                    "priceCurrency": "BGN",
                    "unitText": "лв./мес",
                    "valueAddedTaxIncluded": true
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Пълна поддръжка - професионален пакет",
                  "description": "Цялостна поддръжка с надграждания, сигурностни актуализации, SEO оптимизации и приоритетна поддръжка.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "250",
                    "priceCurrency": "BGN",
                    "unitText": "лв./мес",
                    "valueAddedTaxIncluded": true
                  },
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "41",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      <Column as="section" gap="xl" padding="xl" fillWidth>
        <Column gap="m" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            Поддръжка и надграждане на сайт – професионална поддръжка за вашия сайт
          </Heading>

          <Text variant="display-default-s" align="center" onBackground="neutral-weak">
            <strong>Поддръжка на сайт</strong> включва месечна поддръжка, сигурностни актуализации, редовен бекъп и надграждане на функционалности. Осигурявам стабилна работа и непрекъснато подобрение на вашия сайт. Ако търсите цялостни <a href="/web">уеб разработка услуги</a>, тук е мястото да започнете.
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
          {["Месечна поддръжка", "Сигурност", "Бекъп", "Актуализации", "Надграждания"].map((lbl) => (
            <Tag key={lbl} size="l">
              {lbl}
            </Tag>
          ))}
        </Flex>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Какво включва поддръжката на сайт?
          </Heading>

          <Text variant="body-default-l">
            <strong>Поддръжката на сайт</strong> е ключова за стабилната работа и сигурността на вашия онлайн присъствие. Включва редовни актуализации, мониторинг на производителността, сигурностни патчове, бекъп на данните и надграждане на функционалностите. Целта е вашият сайт да работи перфектно и да остава актуален.
          </Text>

          <Column as="ul" gap="s" paddingLeft="l">
            <li><strong>Месечна поддръжка</strong> – редовни актуализации, мониторинг и оптимизация на производителността.</li>
            <li><strong>Сигурностни актуализации</strong> – защита от хакери, SSL сертификати и сигурностни патчове.</li>
            <li><strong>Редовен бекъп</strong> – автоматични бекъпи на данните и възстановяване при нужда.</li>
            <li><strong>Надграждане на функционалности</strong> – добавени нови функции и подобрения според нуждите ви.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Защо е важна поддръжката на сайт?
          </Heading>

          <Text variant="body-default-l">
            <strong>Поддръжката на сайт</strong> гарантира сигурност, стабилност и актуалност. Без редовна поддръжка сайтът може да стане уязвим към хакери, да работи бавно или да има технически проблеми. Регулярните актуализации осигуряват най-добрата производителност и най-новите функции.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Моят процес в 4 етапа
          </Heading>

          {["Мониторинг", "Анализ", "Актуализация", "Отчет"].map((step, i) => (
            <Flex key={i} gap="8" vertical="start">
              <Icon name="checkCircle" onBackground="brand-strong" />
              <Column gap="2">
                <Heading as="h3" variant="heading-strong-l">
                  {step}
                </Heading>
                <Text variant="body-default-m">
                  {step === "Мониторинг"
                    ? "Следя производителността, скоростта, сигурността и функционалността на сайта 24/7."
                    : step === "Анализ"
                    ? "Анализирам логовете, грешките и възможностите за подобрение на сайта."
                    : step === "Актуализация"
                    ? "Прилагам необходимите актуализации, патчове и подобрения на сайта."
                    : "Предоставям месечен отчет с резултатите от поддръжката и препоръки за подобрения."}
                </Text>
              </Column>
            </Flex>
          ))}
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-m" align="center">
            Пакети и цени за поддръжка на сайт
          </Heading>
          
          <Flex gap="l" wrap horizontal="center">
            <Column gap="m" padding="l" border="neutral-alpha-medium" radius="l" style={{ minWidth: "300px" }}>
              <Heading as="h4" variant="heading-strong-l" align="center">
                Базова поддръжка
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Основни актуализации и мониторинг
              </Text>
              <Text variant="display-strong-l" align="center" onBackground="brand">
                150 лв./мес
              </Text>
              <Column gap="s">
                <Text variant="body-default-s">• Месечни актуализации</Text>
                <Text variant="body-default-s">• Мониторинг на сайта</Text>
                <Text variant="body-default-s">• Бекъп на данните</Text>
                <Text variant="body-default-s">• Техническа поддръжка</Text>
                <Text variant="body-default-s">• Месечен отчет</Text>
              </Column>
              <Button variant="primary" size="m" href="/kontakti">
                Избери този пакет
              </Button>
            </Column>

            <Column gap="m" padding="l" border="neutral-alpha-medium" radius="l" style={{ minWidth: "300px" }}>
              <Heading as="h4" variant="heading-strong-l" align="center">
                Пълна поддръжка
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Цялостна поддръжка с надграждания
              </Text>
              <Text variant="display-strong-l" align="center" onBackground="brand">
                250 лв./мес
              </Text>
              <Column gap="s">
                <Text variant="body-default-s">• Всичко от базовия пакет</Text>
                <Text variant="body-default-s">• Сигурностни актуализации</Text>
                <Text variant="body-default-s">• Надграждания на функционалности</Text>
                <Text variant="body-default-s">• SEO оптимизации</Text>
                <Text variant="body-default-s">• Приоритетна поддръжка</Text>
              </Column>
              <Button variant="primary" size="m" href="/kontakti">
                Избери този пакет
              </Button>
            </Column>
          </Flex>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-m" align="center">
            Често задавани въпроси за поддръжка на сайт
          </Heading>
          
          <AccordionGroup
            items={[
              {
                title: "Какво включва месечната поддръжка?",
                content: (
                  <Text onBackground="neutral-weak">
                    Месечната поддръжка включва: редовни актуализации на софтуера, мониторинг на производителността, 
                    бекъп на данните, техническа поддръжка, сигурностни проверки и месечен отчет с резултатите. 
                    Всичко е направено за да гарантира стабилна работа на сайта.
                  </Text>
                ),
              },
              {
                title: "Как често се правят бекъпи на данните?",
                content: (
                  <Text onBackground="neutral-weak">
                    Автоматичните бекъпи се правят всеки ден, като се запазват последните 30 дни. Допълнително 
                    правя ръчни бекъпи преди всяка голяма промяна или актуализация. Всички бекъпи се съхраняват 
                    на сигурно място и могат да се възстановят при нужда.
                  </Text>
                ),
              },
              {
                title: "Какво се случва ако сайтът се счупи?",
                content: (
                  <Text onBackground="neutral-weak">
                    При проблеми с сайта реагирам в рамките на 2-4 часа в работно време. Използвам бекъпите за 
                    бързо възстановяване и идентифицирам причината за проблема. Предоставям детайлен отчет за 
                    случилото се и мерки за предотвратяване в бъдеще.
                  </Text>
                ),
              },
              {
                title: "Могат ли да се добавят нови функционалности по време на поддръжката?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, в рамките на пълната поддръжка включвам малки и средни подобрения. За по-големи функционалности 
                    се договаря допълнителна работа и цена. Всички промени са тествани и документирани преди 
                    пускане в експлоатация.
                  </Text>
                ),
              },
            ]}
          />
        </Column>

        <Column gap="m" align="center" paddingTop="xl">
          <Heading as="h4" variant="display-strong-m" align="center">
            Готови за професионална поддръжка на сайта?
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
