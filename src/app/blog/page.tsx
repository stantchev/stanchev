import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";
import Script from "next/script";

export async function generateMetadata() {
  return {
    ...Meta.generate({
      title: "SEO и Киберсигурност блог – Съвети, стратегии и новини за по-добро класиране и защита | Stanchev Digital",
      description: "Открийте практически съвети по SEO оптимизация, киберсигурност, новини за Google алгоритми, защита от хакерски атаки и стратегии за дигитален маркетинг в нашия блог.",
      baseURL: baseURL,
      image: `/api/og/generate?title=${encodeURIComponent("SEO и Киберсигурност Блог | Stanchev Digital")}`,
      path: "/blog",
    }),
    keywords:
      "seo блог, seo съвети, seo новини, seo уроци, seo обучение, seo копирайтинг, seo стратегии, как се прави seo оптимизация, анализ на сайт, оптимизация на сайт, киберсигурност блог, киберсигурност съвети, защита от хакери, киберсигурност новини, онлайн сигурност, seo и киберсигурност, google класиране, уеб защита, дигитален маркетинг",
    alternates: {
      canonical: `${baseURL}/blog`,
    },
    openGraph: {
      title:
        "SEO и Киберсигурност блог – Съвети, стратегии и новини за по-добро класиране и защита | Stanchev Digital",
      description:
        "Следи нашия блог за практически съвети по SEO оптимизация, киберсигурност, актуални стратегии, уроци и новини от света на дигиталната защита и оптимизация.",
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
      title:
        "SEO и Киберсигурност блог – Съвети, стратегии и новини за по-добро класиране и защита | Stanchev Digital",
      description:
        "Следи нашия блог за практически съвети по SEO оптимизация, киберсигурност, актуални стратегии, уроци и новини от света на дигиталната защита и оптимизация.",
      images: [`https://stanchev.bg/images/og/og-seo-cyber.jpg`],
    },
  };
}

export default function Blog() {
  return (
    <>
      {/* JSON-LD Schema for Enhanced SEO */}
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
              "Разгледайте последните статии и актуални новини от света на SEO оптимизацията, киберсигурността, дигиталния маркетинг и уеб разработването от Stanchev Digital. Практически съвети за класиране в Google и защита от онлайн заплахи.",
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
            keywords: [
              "seo оптимизация",
              "киберсигурност",
              "google класиране",
              "онлайн защита",
              "дигитален маркетинг",
              "seo съвети",
              "киберсигурност новини",
            ],
          }),
        }}
      />
      <Column maxWidth="l" paddingTop="32" paddingBottom="32" gap="xl" responsive>
        {/* Hero Section for Landing Page Feel */}
        <Column align="center" gap="m" paddingY="40" background="neutral-weak" borderRadius="m" fillWidth>
          <Heading as="h1" variant="display-strong-xl" textAlign="center">
            SEO и Киберсигурност Блог
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak" textAlign="center" wrap="balance" maxWidth="m">
            Практически съвети, стратегии и новини за по-добро класиране в Google и сигурна онлайн защита. Открийте как да оптимизирате сайта си и да го защитите от заплахи.
          </Text>
          <Schema
            as="blogPosting"
            baseURL={baseURL}
            title="SEO и Киберсигурност Блог | Stanchev Digital"
            description="Практически съвети по SEO и киберсигурност за бизнеса ви."
            path="/blog"
            image={`/api/og/generate?title=${encodeURIComponent("SEO и Киберсигурност Блог")}`}
            author={{
              name: person.name,
              url: `${baseURL}/blog`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
        </Column>

        {/* Introduction Section */}
        <Column gap="m" marginBottom="xl">
          <Heading as="h2" variant="heading-strong-l" marginBottom="s">
            Стратегии за SEO Оптимизация и Киберсигурност
          </Heading>
          <Text
            variant="body-default-xl"
            onBackground="neutral-weak"
            wrap="balance"
          >
            В нашия блог ще намерите полезни статии за SEO оптимизация в Google, киберсигурност съвети, новини за алгоритми, класиране на сайт, анализ на уязвимости и инструменти за защита. Информация за SEO, AI и киберсигурност от най-новите публикации на Stanchev Digital. Разгледайте теми за подобряване на онлайн присъствието ви или научете повече за нашите <a href="/seo-uslugi">SEO услуги</a> и <a href="/kibersigurnost-uslugi">Киберсигурност услуги</a>.
          </Text>
        </Column>

        {/* What You'll Find Section */}
        <Column gap="m" marginBottom="xl">
          <Heading as="h3" variant="heading-strong-m">
            Какво Ще Откриете в Блога на Stanchev Digital
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Публикациите са групирани по теми за техническо SEO, оптимизация на съдържание, локално SEO, линк билдинг, анализ на резултатите, киберсигурност стратегии, защита от хакерски атаки, SSL сертификати и уеб сигурност. Всеки материал е на български език с реални примери, чеклисти и стратегии от ежедневната ни работа.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Поддържаме блога актуален с новини за Google алгоритми, тенденции в AI, киберсигурност заплахи, локални SERP промени и тактики за малък и среден бизнес. От проучване на ключови думи и SEO копирайтинг до защита от DDoS атаки и интеграция с маркетинг канали.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            За начинаещи: Ръководства за първи стъпки в SEO и киберсигурност. За напреднали: Анализи, KPI таблици и workflows. Резервирайте <a href="/seo-uslugi/seo-konsultaciya">SEO консултация</a> или <a href="/kibersigurnost-konsultaciya">Киберсигурност консултация</a> през <a href="/kontakti">контактната форма</a>.
          </Text>
        </Column>

        {/* Latest Posts Section */}
        <Column gap="m" marginBottom="xl">
          <Heading as="h3" variant="heading-strong-m" marginBottom="m">
            Последни Статии и Новини по SEO и Киберсигурност
          </Heading>
          <Column fillWidth flex={1} gap="40" columns={{ sm: 1, md: 2, lg: 3 }} responsive>
            <Posts range={[1, 3]} thumbnail />
            <Posts range={[4, 6]} columns="1" />
          </Column>
        </Column>

        {/* Maximizing Content Section */}
        <Column gap="m" marginBottom="48">
          <Heading as="h3" variant="heading-strong-m">
            Как да Извлечете Максимума от Нашия Блог
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Запишете цели като подобряване на метаданни, ускоряване на сайта, защита от уязвимости или съдържателен календар. Използвайте категории за бързо търсене, разгледайте инструменти и шаблони.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            След всяка статия: Препоръки, свързани публикации и ръководства. Споделете казуси в коментари или на <a href="/kontakti">seo@stanchev.bg</a> за персонализирани материали.
          </Text>
        </Column>
      )}
    </>
  );
}
