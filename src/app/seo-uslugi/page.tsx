import {
  Flex,
  Meta,
  Schema,
  Column,
  Heading,
  Text,
  Button,
  Card,
  AccordionGroup,
} from "@once-ui-system/core";
import { baseURL, person, seoServices } from "@/resources";
import Script from "next/script";

export async function generateMetadata() {
  return {
    title: seoServices.title,
    description: seoServices.description,
    alternates: {
      keywords:
        "seo оптимизация, seo оптимизация цена, seo оптимизация цени, seo услуги, seo цена, линк билдинг, оптимизация на сайт, seo консултант, фирма за seo, seo специалист, seo агенция, seo оптимизатор, реклама в Google, дигитален маркетинг, seo одит, seo обучение, seo стратегия, оптимизация на онлайн магазин, ai overviews, core web vitals, structured data",
      canonical: `${baseURL}/seo-uslugi`,
    },
    openGraph: {
      title: seoServices.title,
      description: seoServices.description,
      url: `${baseURL}/seo-uslugi`,
      siteName: seoServices.title,
      images: [
        {
          url: `/api/og/generate?title=${encodeURIComponent(
            seoServices.title
          )}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "bg_BG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoServices.title,
      description: seoServices.description,
      images: [
        `/api/og/generate?title=${encodeURIComponent(seoServices.title)}`,
      ],
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
                name: "Пълна гама от SEO услуги, цени и пакети за вашия бизнес",
                description:
                  "SEO услуги, проектирани за реални резултати: технически одит, on-page, съдържание, линк билдинг и AI-оптимизация за Google Overviews. Ясни KPI, отчетност и устойчив растеж на органичния трафик.",
                url: "https://stanchev.bg/seo-uslugi",
                image: {
                  "@type": "ImageObject",
                  url: "https://stanchev.bg/images/og/og.jpg",
                },
                author: {
                  "@type": "Person",
                  name: "Станчев",
                  url: "https://www.linkedin.com/in/stantcheff/",
                  image: "https://stanchev.bg/assets/avatar.jpg",
                },
                publisher: {
                  "@id": "https://stanchev.bg/#organization",
                },
              },
              {
                "@type": "OfferCatalog",
                name: "Пълна гама от SEO услуги, цени и пакети",
                description:
                  "Одит → стратегия → изпълнение → растеж. Техническо SEO, CWV, структурирани данни, eCommerce оптимизация, локално SEO и AI-ready съдържание за по-голямо покритие в SERP и Overviews.",
                url: "https://stanchev.bg/seo-uslugi",
                provider: {
                  "@type": "Organization",
                  "@id": "https://stanchev.bg/#organization",
                  name: "Станчев SEO",
                  url: "https://stanchev.bg/",
                  logo: "https://stanchev.bg/images/og/og.jpg",
                  email: "seo@stanchev.bg",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Бул. Г.М. Димитров 26",
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
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    email: "seo@stanchev.bg",
                    areaServed: "BG",
                    availableLanguage: "bg",
                  },
                },
                itemListElement: seoServices.services.map((s) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: s.title,
                    description: s.description,
                  },
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    priceCurrency: "BGN",
                    unitText: s.price,
                    name: `Цена за ${s.title}`,
                  },
                  url: `https://stanchev.bg/seo-uslugi/${s.slug}`,
                })),
              },
            ],
          }),
        }}
      />

      <Column maxWidth="l" gap="xl">
        <Schema
          as="webPage"
          baseURL={baseURL}
          title={seoServices.title}
          description={seoServices.description}
          path="/seo-uslugi"
          image={`/api/og/generate?title=${encodeURIComponent(
            seoServices.title
          )}`}
          author={{
            name: person.name,
            url: `${baseURL}/seo-uslugi`,
            image: `${baseURL}${person.avatar}`,
          }}
        />

        <Column gap="l" paddingX="l">
          <Heading variant="display-default-m" marginBottom="m" as="h1">
            SEO услуги за вашия бизнес
          </Heading>
          <Text
            variant="heading-default-xl"
            onBackground="neutral-weak"
            wrap="balance"
          >
            Предлагам цялостна{" "}
            <a href="/seo-uslugi/seo-optimizatsiya">
              <strong>SEO оптимизация</strong>
            </a>
            , проектирана за <strong>реални запитвания и продажби</strong>, а не
            само за позиции. Комбинирам <strong>техническо SEO</strong>,{" "}
            <strong>on-page</strong>, <strong>съдържание</strong> и{" "}
            <strong>линк билдинг</strong>, за да постигнете{" "}
            <strong>устойчив органичен растеж</strong>. Съдържанието е{" "}
            <strong>AI-ready</strong> (водачи, сравнения, Q&A), със{" "}
            <strong>структурирани данни</strong> и отлични{" "}
            <strong>Core Web Vitals</strong>, така че сайтът ви да присъства и в{" "}
            <strong>Google Overviews</strong>.
          </Text>
        </Column>

        <Column gap="m" paddingX="l">
          <Heading variant="heading-strong-xl" marginBottom="m" as="h2">
            Как мога да помогна?
          </Heading>
          <Text
            variant="body-default-xl"
            onBackground="neutral-weak"
            wrap="balance"
          >
            Започвам с <strong>одит</strong> и приоритизиран{" "}
            <strong>roadmap</strong>, след което изпълнявам фиксове и
            съдържателни подобрения по спринтове. Оптимизирам{" "}
            <strong>информационната архитектура</strong>,{" "}
            <strong>вътрешното свързване</strong> и{" "}
            <strong>индексирането</strong>, управлявам{" "}
            <strong>фасети/филтри</strong> и дублирано съдържание, внедрявам{" "}
            <strong>schema</strong> (Product/Offer/Review, Organization,
            Breadcrumb) и подобрявам <strong>CWV</strong>. За eCommerce
            структурирам категории и продуктови страници, а за локален бизнес –
            профили и локални сигнали. Всичко се измерва с ясни{" "}
            <strong>KPI</strong> и месечни отчети.
          </Text>
        </Column>

        {/* Grid за картите – Tailwind wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 items-stretch">
          {seoServices.services.map((service, index) => (
            <Card
              key={index}
              padding="l"
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
              direction="column"
              gap="m"
              className="h-full flex flex-col"
            >
              <Heading variant="heading-strong-l" marginBottom="s" as="h3">
                {service.title}
              </Heading>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                marginBottom="m"
              >
                {service.description}
              </Text>
              <Column gap="8" className="flex-1">
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
                  className="mt-2"
                >
                  Виж повече
                </Button>
              )}
            </Card>
          ))}
        </div>

        <AccordionGroup
          items={[
            {
              title: "Какви точно SEO услуги предлагате?",
              content: (
                <Text onBackground="neutral-weak">
                  Предлагам технически одит и фиксове, on-page оптимизация,
                  съдържание и вътрешно свързване, линк билдинг и проследяване
                  на KPI. Работя с AI-готови формати (водачи, сравнения, FAQ) и
                  структурирани данни за по-силно присъствие в Overviews.
                </Text>
              ),
            },
            {
              title: "С какво подходът ви се отличава?",
              content: (
                <Text onBackground="neutral-weak">
                  Съчетавам традиционното SEO с нетрадиционен AI подход и при
                  нужда за корпоративни клиенти автоматизирам ключови процеси за
                  мащабируемост и ефективност. С фокус върху CWV, crawl
                  ефективност и съдържание, което определено изпъква.
                </Text>
              ),
            },
            {
              title: "Подходящо ли е за моя бизнес и бюджет?",
              content: (
                <Text onBackground="neutral-weak">
                  Да — работя с фирмени сайтове, онлайн магазини и B2B. Предлагам
                  гъвкави пакети и ясно дефинирани етапи, за да видите ефект още
                  в първите месеци.
                </Text>
              ),
            },
          ]}
        />

        <Column gap="m" paddingX="l" horizontal="center">
          <Heading variant="display-strong-s" align="center" as="h4">
            Готови за по-добри резултати?
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
          >
            Свържете се с мен за безплатна консултация и кратък одит — ще
            получите приоритизиран план с ясни KPI и очакван ефект.
          </Text>
          <Button href="/kontakti" variant="primary" size="l" arrowIcon>
            Заявете консултация
          </Button>
        </Column>
      </Column>
    </>
  );
}
