import { Flex, Meta, Schema, Column, Heading, Text, Button, Grid, Card, AccordionGroup } from "@once-ui-system/core";
import { baseURL, person, seoServices } from "@/resources";
import Script from 'next/script';

export async function generateMetadata() {
  return {
    title: seoServices.title,
    description: seoServices.description,
    alternates: {
      keywords: 'seo оптимизация, seo услуги, seo цена, линк билдинг, оптимизация на сайт, seo консултант, фирма за seo, seo специалист, seo агенция, seo оптимизатор, реклама в Google, дигитален маркетинг, seo одит, seo обучение, seo стратегия, оптимизация на онлайн магазин.',
      canonical: `${baseURL}/seo-uslugi`,
    },
    openGraph: {
      title: seoServices.title,
      description: seoServices.description,
      url: `${baseURL}/seo-uslugi`,
      siteName: seoServices.title,
      images: [
        {
          url: `/api/og/generate?title=${encodeURIComponent(seoServices.title)}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoServices.title,
      description: seoServices.description,
      images: [`/api/og/generate?title=${encodeURIComponent(seoServices.title)}`],
    },
  };
}

export default function SeoUslugi() {
  return (
     <>
      <Script
        id="seo-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": "Пълна гама от SEO услуги, цени и пакети за вашия бизнес",
                "description": "Предлагаме SEO оптимизация, линк билдинг, on-page и off-page оптимизация, PPC кампании и др. Вижте цените и изберете пакет.",
                "url": "https://stanchev.bg/seo-uslugi",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://stanchev.bg/images/og/og.jpg"
                },
                "author": {
                  "@type": "Person",
                  "name": "Станчев", // Използваме person.name от @/resources
                  "url": "https://www.linkedin.com/in/stantcheff/",
                  "image": "https://stanchev.bg/assets/avatar.jpg" // Използваме person.avatar от @/resources
                },
                "publisher": {
                  "@id": "https://stanchev.bg/#organization" // Референция към Organization в същия @graph
                }
              },
              {
                "@type": "OfferCatalog",
                "name": "Пълна гама от SEO услуги, цени и пакети",
                "description": "Предлагаме SEO оптимизация, линк билдинг, on-page и off-page оптимизация, PPC кампании и др. Вижте цените и изберете пакет.",
                "url": "https://stanchev.bg/seo-uslugi",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://stanchev.bg/#organization", // Явно дефиниране на организацията
                  "name": "Станчев SEO",
                  "url": "https://stanchev.bg/",
                  "logo": "https://stanchev.bg/images/og/og.jpg",
                  "email": "seo@stanchev.bg",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Бул. Г.М. Димитров 26",
                    "addressLocality": "София",
                    "addressRegion": "София",
                    "postalCode": "1797",
                    "addressCountry": "BG"
                  },
                  "sameAs": [
                    "https://github.com/stantchev/",
                    "https://www.linkedin.com/in/stantcheff/",
                    "https://dev.to/stanchev"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "email": "seo@stanchev.bg",
                    "areaServed": "BG",
                    "availableLanguage": "bg"
                  }
                },
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Оптимизация",
                      "description": "Пълна SEO оптимизация на вашия уебсайт за по-добро класиране в търсачките."
                    },
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "priceCurrency": "BGN",
                      "unitText": "По договаряне",
                      "name": "Цена за SEO Оптимизация по договаряне"
                    },
                    "url": "https://stanchev.bg/seo-uslugi/seo-optimizatsiya"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Link Building",
                      "description": "Ефективно изграждане на линкове за подобряване на SEO позициите и авторитета на вашия сайт."
                    },
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "priceCurrency": "BGN",
                      "unitText": "По договаряне",
                      "name": "Цена за Link Building по договаряне"
                    },
                    "url": "https://stanchev.bg/seo-uslugi/link-building"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Одит",
                      "description": "Анализ на SEO състоянието на сайта и стратегии за подобрение."
                    },
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "200",
                      "priceCurrency": "BGN",
                      "unitText": "лв.",
                      "name": "Начална цена за SEO Одит"
                    },
                    "url": "https://stanchev.bg/seo-uslugi/seo-odit"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "On-Page SEO",
                      "description": "Оптимизация на структурата, мета данни и съдържание."
                    },
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "300",
                      "priceCurrency": "BGN",
                      "unitText": "лв.",
                      "name": "Начална цена за On-Page SEO"
                    },
                    "url": "https://stanchev.bg/seo-uslugi/on-page-seo"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Keyword Research",
                      "description": "Изследване на ключови думи и създаване на SEO стратегия."
                    },
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "150",
                      "priceCurrency": "BGN",
                      "unitText": "лв.",
                      "name": "Начална цена за Keyword Research"
                    },
                    "url": "https://stanchev.bg/seo-uslugi/keyword-research"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Локално SEO",
                      "description": "SEO оптимизация за локални търсения и позициониране в Google Maps."
                    },
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "390",
                      "priceCurrency": "BGN",
                      "unitText": "лв.",
                      "name": "Начална цена за Локално SEO"
                    },
                    "url": "https://stanchev.bg/seo-uslugi/lokalno-seo"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Консултация",
                      "description": "Лична консултация със SEO експерт за вашия бизнес."
                    },
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "100",
                      "priceCurrency": "BGN",
                      "unitText": "лв./час",
                      "name": "Цена за SEO Консултация на час"
                    },
                    "url": "https://stanchev.bg/seo-uslugi/seo-konsultaciya"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Какви точно SEO услуги предлага Станчев SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Станчев SEO предлага цялостни SEO услуги, които включват детайлен технически одит на уебсайта, оптимизация на съдържанието (on-page SEO), изграждане на качествени връзки (off-page SEO), анализ на ключови думи и мониторинг на конкуренцията. Ние се фокусираме върху дългосрочни резултати и устойчив растеж на органичния трафик, като нашата SEO стратегия е съобразена с най-новите алгоритми."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "С какво услугите на Станчев SEO се отличават от конкурентните?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Станчев SEO се отличава с персонализиран подход към всеки клиент и прозрачност в работата. Ние не просто изпълняваме задачи, а задълбочено разбираме вашите бизнес цели и адаптираме стратегията си. Използваме утвърдени и етични (white-hat) SEO практики, гарантиращи сигурност и устойчивост на резултатите ви. Работим като отдаден SEO консултант за вашия онлайн успех."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "За какъв тип бизнес са подходящи SEO услугите на Станчев SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Нашите SEO оптимизации са подходящи за широк кръг бизнеси, които искат да увеличат онлайн видимостта си. Работим успешно както с малки и средни предприятия, така и с големи компании от различни сектори, включително електронни магазини, фирмени уебсайтове и блогове. Важно е да имате желание за дългосрочна инвестиция в дигиталния си маркетинг. За нас е важно да сме вашата надеждна SEO фирма."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
    <Column maxWidth="l" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={seoServices.title}
        description={seoServices.description}
        path="/seo-uslugi"
        image={`/api/og/generate?title=${encodeURIComponent(seoServices.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/seo-uslugi`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
        
      <Column gap="l" paddingX="l">
        <Heading variant="display-strong-l" marginBottom="m" as="h1"> {/* <-- ЕДИНСТВЕНО H1 */}
          SEO услуги за вашия бизнес
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Нашият екип предлага услуги като оптимизация на сайтове, seo копирайтинг и регистрация на сайт в търсачки за различни бизнеси и онлайн магазини. Вижте нашите <a href="/seo-proekti">успешни проекти</a> или се <a href="/kontakti">свържете с нас</a> за повече информация.
        </Text>
      </Column>

      <Column gap="m" paddingX="l">
        <Heading variant="heading-strong-l" marginBottom="m" as="h2"> {/* <-- ЕДИНСТВЕНО H2 */}
          Как можем да помогнем?
        </Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Извършваме услуги като seo анализ онлайн, seo стратегия, оптимизация на сайт за мобилни устройства и off-page оптимизация за фирми, онлайн магазини и блогове. Предлагаме индивидуален подход и прозрачни резултати.
        </Text>
      </Column>

      <Grid columns="2" mobileColumns="1" gap="l" paddingX="l">
        {seoServices.services.map((service, index) => (
          <Card
            key={index}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            direction="column"
            gap="m"
          >
            <Heading variant="heading-strong-l" marginBottom="s" as="h3"> {/* <-- Променено на H3 */}
              {service.title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
              {service.description}
            </Text>
            <Column gap="8">
              {service.features.map((feature, featureIndex) => (
                <Text key={featureIndex} variant="body-default-s">
                  • {feature}
                </Text>
              ))}
            </Column>
            <Text variant="heading-strong-m" marginTop="m">
              {service.price}
            </Text>
            {service.slug && (  
              <Button
                href={`/seo-uslugi/${service.slug}`}
                variant="primary"
                size="m"
                prefixIcon="rocket"
              >
                Виж повече
              </Button>
            )}
          </Card>
        ))}
      </Grid>

      <AccordionGroup
        items={[
          {
            title: "Какви точно SEO услуги предлага Станчев SEO?",
            content: (
              <Text onBackground="neutral-weak">
                Станчев SEO предлага цялостни SEO услуги, които включват детайлен технически одит на уебсайта, оптимизация на съдържанието (on-page SEO), изграждане на качествени връзки (off-page SEO), анализ на ключови думи и мониторинг на конкуренцията. Ние се фокусираме върху дългосрочни резултати и устойчив растеж на органичния трафик, като нашата SEO стратегия е съобразена с най-новите алгоритми.
              </Text>
            )
          },
          {
            title: "С какво услугите на Станчев SEO се отличават от конкурентните?",
            content: (
              <Text onBackground="neutral-weak">
                Станчев SEO се отличава с персонализиран подход към всеки клиент и прозрачност в работата. Ние не просто изпълняваме задачи, а задълбочено разбираме вашите бизнес цели и адаптираме стратегията си. Използваме утвърдени и етични (white-hat) SEO практики, гарантиращи сигурност и устойчивост на резултатите ви. Работим като отдаден SEO консултант за вашия онлайн успех.
              </Text>
            )
          },
          {
            title: "За какъв тип бизнес са подходящи SEO услугите на Станчев SEO?",
            content: (
              <Text onBackground="neutral-weak">
                Нашите SEO оптимизации са подходящи за широк кръг бизнеси, които искат да увеличат онлайн видимостта си. Работим успешно както с малки и средни предприятия, така и с големи компании от различни сектори, включително електронни магазини, фирмени уебсайтове и блогове. Важно е да имате желание за дългосрочна инвестиция в дигиталния си маркетинг. За нас е важно да сме вашата надеждна SEO фирма.
              </Text>
            )
          }
        ]}
      />

      <Column gap="m" paddingX="l" horizontal="center">
        <Heading variant="display-strong-s" align="center" as="h4"> {/* <-- ЕДИНСТВЕНО H4 */}
          Готови за по-добри резултати?
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          Свържете се с мен за безплатна консултация и анализ на вашия сайт
        </Text>
        <Button
          href="/kontakti"
          variant="primary"
          size="l"
          arrowIcon
        >
          Заявете консултация
        </Button>
      </Column>
    </Column>
     </>
  );
}
