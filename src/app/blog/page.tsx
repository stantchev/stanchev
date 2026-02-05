import {
  Column,
  Heading,
  Text,
  Button,
  Tag,
  Flex,
  Grid,
  Card,
} from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { baseURL, person } from "@/resources";
import Script from "next/script";
import { FaSearch, FaShieldAlt, FaRocket, FaChartLine } from "react-icons/fa";

export async function generateMetadata() {
  return {
    title: "SEO и Киберсигурност Блог – Съвети, Стратегии и Новини | Stanchev Digital",
    description:
      "Практически съвети по SEO оптимизация, киберсигурност, новини за Google алгоритми, защита от хакерски атаки и стратегии за дигитален успех.",
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
        gap="xl"
        padding="l"               // статичен – безопасен и responsive чрез дизайна
        fillWidth
      >
        {/* Hero Section */}
        <Column
          gap="m"
          align="center"
          paddingTop="2xl"          // статичен, но голям – изглежда добре на всички екрани
          fillWidth
        >
          <Heading as="h1" variant="display-strong-xl" align="center">
            SEO и Киберсигурност Блог
          </Heading>

          <Text
            variant="heading-default-l"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
            maxWidth="m"
          >
            Практически съвети, актуални стратегии и новини за по-добро класиране в Google и защита на сайта ви от онлайн заплахи.
          </Text>

          <Flex horizontal="center" gap="m" wrap>
            <Button variant="primary" size="l" href="/kontakti">
              Задай въпрос или казус
            </Button>
          </Flex>

          <Flex gap="s" wrap horizontal="center">
            {["SEO", "Киберсигурност", "Google", "AI", "Core Web Vitals"].map((tag) => (
              <Tag key={tag} variant="brand" size="m">
                {tag}
              </Tag>
            ))}
          </Flex>
        </Column>

        {/* Какво ще намерите */}
        <Column gap="l" align="center" maxWidth="xl">
          <Heading as="h2" variant="display-default-m" align="center">
            Какво ще откриете в блога
          </Heading>

          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            Полезни статии за техническо SEO, On-Page оптимизация, локално SEO, линк билдинг, защита от DDoS, SSL/HTTPS, firewall, AI в SEO и киберсигурност. Реални примери, чеклисти и стратегии, които работят през 2025–2026 г.
          </Text>

          <Grid columns={{ initial: 1, m: 2, l: 4 }} gap="l" fillWidth>
            {[
              { icon: FaSearch, title: "SEO оптимизация", desc: "От ключови думи до Core Web Vitals" },
              { icon: FaShieldAlt, title: "Киберсигурност", desc: "Защита от хакери, DDoS, malware" },
              { icon: FaRocket, title: "Бързи сайтове", desc: "Скорост + Google класиране" },
              { icon: FaChartLine, title: "Анализи & Новини", desc: "Google updates и тенденции" },
            ].map((item) => (
              <Card key={item.title} padding="l" radius="l" border="neutral-alpha-medium">
                <Column gap="m" align="center">
                  <item.icon size={32} color="var(--brand-strong)" />
                  <Heading as="h3" variant="heading-strong-m" align="center">
                    {item.title}
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                    {item.desc}
                  </Text>
                </Column>
              </Card>
            ))}
          </Grid>
        </Column>

        {/* Последни статии */}
        <Column gap="l">
          <Heading as="h2" variant="display-default-m" align="center">
            Последни статии и новини
          </Heading>

          <Column fillWidth gap="xl" columns={{ initial: 1, m: 2, l: 3 }} responsive>
            <Posts range={[1, 3]} thumbnail />
            <Posts range={[4, 6]} thumbnail />
          </Column>

          <Flex horizontal="center" paddingTop="l">
            <Button variant="secondary" size="m" href="/blog">
              Виж всички статии
            </Button>
          </Flex>
        </Column>

        {/* CTA */}
        <Column
          gap="l"
          align="center"
          paddingTop="2xl"
          fillWidth
        >
          <Heading as="h3" variant="display-strong-m" align="center">
            Готови да подобрите класирането и сигурността си?
          </Heading>

          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            Споделете казус или задайте въпрос – ще ви отговоря персонално.
          </Text>

          <Flex gap="m" wrap horizontal="center">
            <Button variant="primary" size="l" href="/kontakti">
              Пиши ми сега
            </Button>
            <Button variant="secondary" size="l" href="/kontakti">
              Безплатна консултация
            </Button>
          </Flex>
        </Column>
      </Column>
    </>
  );
}


