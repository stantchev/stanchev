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
  Timeline,
} from '@once-ui-system/core';
import { baseURL } from '@/resources';
import Script from 'next/script';

export async function generateMetadata() {
  return {
    title: 'Оптимизация на съществуващ сайт | Stanchev Digital',
    description: 'Професионална оптимизация на съществуващ сайт. Ускоряване на зареждането, подобряване на мобилния изглед, фиксиране на визуални грешки и Core Web Vitals оптимизация.',
    keywords: 'оптимизация на сайт цена, ускоряване на сайт България, Core Web Vitals оптимизация, мобилна оптимизация София, скорост на сайт подобрение, производителност на сайт цена, технически одит на сайт, оптимизация на уебсайт, подобряване на скоростта на сайт, модернизация на сайт',
    alternates: {
      canonical: `${baseURL}/web/optimizatsiya-sajt`,
    },
    openGraph: {
      title: 'Оптимизация на съществуващ сайт | Stanchev Digital',
      description: 'Професионална оптимизация на съществуващ сайт. Ускоряване на зареждането, подобряване на мобилния изглед, фиксиране на визуални грешки и Core Web Vitals оптимизация.',
      url: `${baseURL}/web/optimizatsiya-sajt`,
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
      title: 'Оптимизация на съществуващ сайт | Stanchev Digital',
      description: 'Професионална оптимизация на съществуващ сайт. Ускоряване на зареждането, подобряване на мобилния изглед, фиксиране на визуални грешки и Core Web Vitals оптимизация.',
      images: [`https://stanchev.bg/images/og/web.jpg`],
    },
  };
}

export default function OptimizatsiyaSajtPage() {
  return (
    <>
      <Script
        id="website-optimization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            "name": "Оптимизация на съществуващ сайт",
            "serviceType": "Уеб оптимизация",
            "description": "Професионална оптимизация на съществуващ сайт. Ускоряване на зареждането, подобряване на мобилния изглед, фиксиране на визуални грешки и Core Web Vitals оптимизация.",
            "provider": {
              "@type": "Organization",
              "name": "Stanchev Digital",
              "url": "https://stanchev.bg/",
              "logo": "https://stanchev.bg/images/og/og.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "seo@stanchev.bg"
              }
            },
            "url": "https://stanchev.bg/web/optimizatsiya-sajt",
            "areaServed": {
              "@type": "Place",
              "name": "България"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Уеб оптимизация услуги и цени",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Core Web Vitals оптимизация",
                    "description": "Професионално подобряване на LCP, FID и CLS метриките за по-добра производителност и Google класиране."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Скорост на сайт оптимизация",
                    "description": "Комплексна оптимизация на изображения, код, сървър и CDN за максимално бързо зареждане."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Мобилна оптимизация и респонсивен дизайн",
                    "description": "Подобряване на мобилното изживяване, touch интерфейса и респонсивния дизайн за всички устройства."
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Базова оптимизация - стартов пакет",
                  "description": "Технически одит и основни подобрения в скоростта, функционалността и мобилната съвместимост.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "450",
                    "priceCurrency": "BGN",
                    "unitText": "лв.",
                    "valueAddedTaxIncluded": true
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Пълна оптимизация - професионален пакет",
                  "description": "Цялостна оптимизация включваща Core Web Vitals, скорост, мобилна съвместимост и CDN настройка.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "750",
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
              "reviewCount": "32",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      <Column as="section" gap="xl" padding="xl" fillWidth>
        <Column gap="m" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            Оптимизация на сайта – по-бърза работа и по-висока ефективност
          </Heading>

          <Text variant="display-default-s" align="center" onBackground="neutral-weak">
            <strong>Оптимизация на сайт</strong> за +70% по-бързо зареждане, по-добро мобилно изживяване и Core Web Vitals подобрения. Анализирам, оптимизирам и подобрявам всички аспекти на вашия сайт. Ако търсите цялостни <a href="/web">уеб разработка услуги</a>, тук е мястото да започнете.
          </Text>
          <Flex horizontal="center">
            <Button
              variant="primary"
              size="l"
              href="/kontakti"
              prefixIcon="checkCircle"
              data-border="rounded"
            >
              Заяви безплатен технически одит
            </Button>
          </Flex>
        </Column>

        <Flex gap="8" wrap horizontal="center">
          {["Core Web Vitals", "Скорост на сайт", "Мобилна оптимизация", "Технически одит", "Производителност"].map((lbl) => (
            <Tag key={lbl} size="l">
              {lbl}
            </Tag>
          ))}
        </Flex>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Какво включва оптимизацията на сайт?
          </Heading>

          <Text variant="body-default-l">
            Анализирам вашия сайт от всички страни: скорост, мобилна съвместимост, Core Web Vitals, SEO елементи и функционалност. <strong>Оптимизацията на сайт</strong> включва технически подобрения, които правят сайта по-бърз, по-удобен и по-видим в Google. Резултатът: повече посетители, по-ниска bounce rate и по-висока конверсия.
          </Text>

          <Column as="ul" gap="s" paddingLeft="l">
            <li><strong>Core Web Vitals оптимизация</strong> – подобряване на LCP, FID и CLS за по-добра производителност.</li>
            <li><strong>Ускоряване на зареждането</strong> – оптимизация на изображения, код, CSS и JavaScript.</li>
            <li><strong>Мобилна оптимизация</strong> – подобряване на респонсивния дизайн и touch интерфейса.</li>
            <li><strong>Технически одит</strong> – анализ и фиксиране на грешки, дублирания и проблеми.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Защо е важна оптимизацията на сайт?
          </Heading>

          <Text variant="body-default-l">
            <strong>Оптимизацията на сайт</strong> директно влияе на потребителското изживяване и Google класирането. Бързият сайт задържа посетителите по-дълго, намалява bounce rate-а и подобрява конверсията. Google награждава бързите сайтове с по-добри позиции в търсачката.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Моят процес в 4 етапа
          </Heading>

         <Timeline
            items={[
              {
                label: "Анализ",
                description: "Провеждам пълен технически одит на сайта: скорост, мобилна съвместимост, Core Web Vitals и функционалност.",
                marker: <Icon name="search" />,
                state: "default"
              },
              {
                label: "Диагностика", 
                description: "Идентифицирам проблемите и приоритизирам оптимизациите според въздействието им върху производителността.",
                marker: <Icon name="chartBar" />,
                state: "default"
              },
              {
                label: "Оптимизация",
                description: "Прилагам оптимизациите: компресиране на изображения, минифициране на код, подобряване на мобилния дизайн.",
                marker: <Icon name="wrench" />,
                state: "default"
              },
              {
                label: "Тестване",
                description: "Тествам всички подобрения и проверявам резултатите. Осигурявам стабилна работа на всички устройства.",
                marker: <Icon name="checkCircle" />,
                state: "default"
              }
            ]}
          />
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-m" align="center">
            Пакети и цени за оптимизация на сайт
          </Heading>
          
          <Flex gap="l" wrap horizontal="center">
            <Column gap="m" padding="l" border="neutral-alpha-medium" radius="l" style={{ minWidth: "300px" }}>
              <Heading as="h4" variant="heading-strong-l" align="center">
                Базова оптимизация
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Основни подобрения в скоростта и функционалността
              </Text>
              <Text variant="display-strong-l" align="center" onBackground="brand-strong">
                450 лв.
              </Text>
              <Column gap="s">
                <Text variant="body-default-s">• Технически одит</Text>
                <Text variant="body-default-s">• Оптимизация на изображения</Text>
                <Text variant="body-default-s">• Минифициране на код</Text>
                <Text variant="body-default-s">• Мобилни подобрения</Text>
                <Text variant="body-default-s">• Отчет с резултати</Text>
              </Column>
              <Button variant="primary" size="m" href="/kontakti">
                Избери този пакет
              </Button>
            </Column>

            <Column gap="m" padding="l" border="neutral-alpha-medium" radius="l" style={{ minWidth: "300px" }}>
              <Heading as="h4" variant="heading-strong-l" align="center">
                Пълна оптимизация
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Цялостна оптимизация с Core Web Vitals подобрения
              </Text>
              <Text variant="display-strong-l" align="center" onBackground="brand-strong">
                750 лв.
              </Text>
              <Column gap="s">
                <Text variant="body-default-s">• Всичко от базовия пакет</Text>
                <Text variant="body-default-s">• Core Web Vitals оптимизация</Text>
                <Text variant="body-default-s">• CDN настройка</Text>
                <Text variant="body-default-s">• Кеширане оптимизация</Text>
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
            Често задавани въпроси за оптимизация на сайт
          </Heading>
          
          <AccordionGroup
            items={[
              {
                title: "Колко време отнема оптимизацията на сайт?",
                content: (
                  <Text onBackground="neutral-weak">
                    Базовата оптимизация се прави за 1-2 седмици, докато пълната оптимизация може да отнеме 2-3 седмици. 
                    Времето зависи от размера на сайта, сложността на проблемите и необходимите подобрения. 
                    Предоставям детайлен план и срокове преди започване на работата.
                  </Text>
                ),
              },
              {
                title: "Какви резултати мога да очаквам от оптимизацията?",
                content: (
                  <Text onBackground="neutral-weak">
                    Средните резултати включват: +70% по-бързо зареждане, подобрение на Core Web Vitals с 60-80%, 
                    по-добро мобилно изживяване и намаляване на bounce rate с 25-40%. Всички резултати са 
                    измерени и документирани в детайлен отчет.
                  </Text>
                ),
              },
              {
                title: "Работи ли оптимизацията за всички типове сайтове?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, оптимизацията работи за всички типове сайтове: WordPress, OpenCart, Magento, 
                    custom сайтове, React приложения и други. Адаптирам подхода според технологиите и 
                    архитектурата на конкретния сайт.
                  </Text>
                ),
              },
              {
                title: "Предоставяте ли отчет с резултатите?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, в края на оптимизацията предоставям детайлен отчет с всички направени промени, 
                    измерени подобрения и препоръки за бъдещо поддържане. Включвам и инструменти за 
                    мониторинг на производителността.
                  </Text>
                ),
              },
            ]}
          />
        </Column>

        <Column gap="m" align="center" paddingTop="xl">
          <Heading as="h4" variant="display-strong-m" align="center">
            Готови за по-бърз и оптимизиран сайт?
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




