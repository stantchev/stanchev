import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { baseURL, person } from "@/resources";
import Script from "next/script";

export async function generateMetadata() {
  return {
    ...Meta.generate({
      title: "SEO и Киберсигурност Блог – Съвети, Стратегии и Новини | Stanchev Digital",
      description:
        "Практически съвети по SEO оптимизация, киберсигурност, новини за Google алгоритми, защита от хакерски атаки и стратегии за дигитален успех.",
      baseURL: baseURL,
      image: `/api/og/generate?title=${encodeURIComponent("SEO и Киберсигурност Блог | Stanchev Digital")}`,
      path: "/blog",
    }),
    keywords:
      "seo блог, seo съвети, seo новини, киберсигурност, онлайн сигурност, seo оптимизация, защита от хакери, google класиране, seo стратегии, киберсигурност новини, дигитален маркетинг, уеб защита, core web vitals, локално seo, линк билдинг",
    alternates: {
      canonical: `${baseURL}/blog`,
    },
    openGraph: {
      title: "SEO и Киберсигурност Блог – Съвети и Новини за Класиране и Защита | Stanchev Digital",
      description:
        "Актуални стратегии, уроци и новини по SEO и киберсигурност за по-добро класиране в Google и сигурност на сайта ви.",
      url: `${baseURL}/blog`,
      siteName: "Stanchev Digital",
      images: [
        {
          url: `https://stanchev.bg/images/og/og-seo-cyber.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "bg_BG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "SEO и Киберсигурност Блог – Съвети и Новини",
      description:
        "Практически материали по SEO оптимизация и киберсигурност за бизнеса ви.",
      images: [`https://stanchev.bg/images/og/og-seo-cyber.jpg`],
    },
  };
}

export default function Blog() {
  return (
    <>
      {/* JSON-LD Schema */}
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": ["Blog", "CollectionPage"],
            name: "SEO и Киберсигурност Блог | Stanchev Digital",
            url: "https://stanchev.bg/blog",
            description:
              "Последни статии и новини по SEO оптимизация, киберсигурност, дигитален маркетинг и уеб защита от Stanchev Digital.",
            publisher: {
              "@type": "Organization",
              name: "Stanchev Digital",
              url: "https://stanchev.bg/",
              logo: {
                "@type": "ImageObject",
                url: "https://stanchev.bg/images/og/og-seo-cyber.jpg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://stanchev.bg/blog",
            },
          }),
        }}
      />

      <Column
        as="main"
        maxWidth="l"
        align="center"
        paddingTop={{
          initial: "16",    // малки екрани (мобилни)
          s: "24",
          m: "32",
          l: "40",
          xl: "48"          // големи десктоп екрани
        }}
        paddingBottom={{
          initial: "24",
          m: "32",
          xl: "40"
        }}
        gap="xl"
      >
        {/* Hero / Въведение */}
        <Column
          align="center"
          gap="m"
          paddingY={{
            initial: "24",
            m: "40",
            xl: "48"
          }}
        >
          <Heading as="h1" variant="display-strong-xl" textAlign="center">
            SEO и Киберсигурност Блог
          </Heading>
          <Text
            variant="heading-default-l"
            onBackground="neutral-weak"
            textAlign="center"
            wrap="balance"
            maxWidth="m"
          >
            Практически съвети, актуални стратегии и новини за по-добро класиране в Google и защита на сайта ви от онлайн заплахи.
          </Text>

          <Schema
            as="blogPosting"
            baseURL={baseURL}
            title="SEO и Киберсигурност Блог | Stanchev Digital"
            description="Полезни материали по SEO оптимизация и киберсигурност."
            path="/blog"
            image={`/api/og/generate?title=${encodeURIComponent("SEO и Киберсигурност Блог")}`}
            author={{
              name: person.name,
              url: `${baseURL}/blog`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
        </Column>

        {/* Основно съдържание */}
        <Column gap="xl" maxWidth="xl" align="center">
          <Column gap="m">
            <Heading as="h2" variant="heading-strong-l">
              Стратегии за SEO и Киберсигурност
            </Heading>
            <Text variant="body-default-xl" onBackground="neutral-weak" wrap="balance">
              В блога ще откриете полезни статии за <strong>SEO оптимизация</strong>, <strong>киберсигурност</strong>, Google алгоритми, защита от хакерски атаки, класиране на сайтове, анализ на уязвимости и модерни дигитални стратегии.
            </Text>
          </Column>

          <Column gap="m">
            <Heading as="h3" variant="heading-strong-m">
              Какво ще намерите тук
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
              Теми като техническо SEO, On-Page оптимизация, локално SEO, линк билдинг, Core Web Vitals, защита от DDoS, SSL/HTTPS, firewall конфигурации, AI в SEO и киберсигурност. Всички материали са на български език с реални примери и чеклисти.
            </Text>
            <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
              Следим последните новини за Google updates, нови заплахи в киберпространството и тактики, които работят за малък и среден бизнес през 2025–2026 г.
            </Text>
          </Column>

          <Column gap="m">
            <Heading as="h3" variant="heading-strong-m">
              Последни статии
            </Heading>
            <Column
              fillWidth
              gap="40"
              columns={{ initial: 1, m: 2, l: 3 }}
              responsive
            >
              <Posts range={[1, 3]} thumbnail />
              <Posts range={[4, 6]} thumbnail />
            </Column>
          </Column>

          <Column gap="m">
            <Heading as="h3" variant="heading-strong-m">
              Как да получите максимума
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
              Задайте си ясна цел преди четене – подобряване на скорост, оптимизация на метаданни, защита от атаки или изграждане на съдържателен план. След всяка статия ще намерите препоръки и свързани материали.
            </Text>
            <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
              Имате конкретен казус? Пишете ни на{" "}
              <a href="/kontakti">kontakti@stanchev.bg</a> или през{" "}
              <a href="/kontakti">формата за контакт</a> – ще ви помогнем с персонализирани съвети и ще подготвим още по-полезно съдържание.
            </Text>
          </Column>
        </Column>
      </Column>
    </>
  );
}
