import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  Card,
  Grid,
} from '@once-ui-system/core';
import { baseURL } from '@/resources';
import Script from 'next/script';
import { Posts } from '@/components/blog/Posts';
import {
  FaSearch,
  FaShieldAlt,
  FaRocket,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaStar,
} from 'react-icons/fa';

export async function generateMetadata() {
  return {
    title: 'SEO и Киберсигурност Блог – Съвети, Стратегии и Новини | Stanchev Digital',
    description:
      'Практически съвети по SEO оптимизация, киберсигурност, новини за Google алгоритми, защита от хакерски атаки и стратегии за дигитален успех.',
    keywords:
      'seo блог, seo съвети, seo новини, киберсигурност, онлайн сигурност, seo оптимизация, защита от хакери, google класиране, seo стратегии, киберсигурност новини, дигитален маркетинг, уеб защита, core web vitals, локално seo, линк билдинг',
    alternates: {
      canonical: `${baseURL}/blog`,
    },
    openGraph: {
      title: 'SEO и Киберсигурност Блог – Съвети и Новини | Stanchev Digital',
      description:
        'Актуални стратегии, уроци и новини по SEO и киберсигурност за по-добро класиране в Google и сигурност на сайта ви.',
      url: `${baseURL}/blog`,
      siteName: 'Stanchev Digital',
      images: [
        {
          url: `https://stanchev.bg/images/og/og-seo-cyber.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'SEO и Киберсигурност Блог – Съвети и Новини',
      description: 'Практически материали по SEO оптимизация и киберсигурност за бизнеса ви.',
      images: [`https://stanchev.bg/images/og/og-seo-cyber.jpg`],
    },
  };
}

export default function BlogPage() {
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

      <Column as="main" gap="l" padding="s" fillWidth>
        {/* Hero */}
        <Column gap="s" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            SEO и Киберсигурност Блог
          </Heading>
          <Text variant="display-default-s" align="center" onBackground="neutral-weak">
            Практически съвети, актуални стратегии и новини за по-добро класиране в Google и защита на сайта ви от онлайн заплахи.
          </Text>
          <Flex horizontal="center">
            <Button
              variant="primary"
              size="l"
              href="/kontakti"
              prefixIcon="checkCircle"
              data-border="rounded"
            >
              Задай въпрос или казус
            </Button>
          </Flex>
        </Column>

        <Flex gap="8" wrap horizontal="center" paddingY="m">
          {["SEO", "Киберсигурност", "Google", "AI", "Core Web Vitals"].map((lbl) => (
            <Tag key={lbl} size="l" variant="brand">
              {lbl}
            </Tag>
          ))}
        </Flex>

        {/* Какво ще откриете – по-сбита версия */}
        <Column gap="m">
          <Heading as="h2" variant="display-default-m">
            Какво ще откриете в блога
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Техническо и On-Page SEO, локално SEO, линк билдинг, защита от DDoS и malware, Core Web Vitals, AI в SEO, Google updates – реални примери и стратегии за 2025–2026.
          </Text>

          <Grid columns={2} s={{ columns: 1 }} gap="m" fillWidth>
            {[
              { icon: FaSearch, title: "SEO оптимизация", desc: "От ключови думи до Core Web Vitals" },
              { icon: FaShieldAlt, title: "Киберсигурност", desc: "Защита от хакери, DDoS, malware" },
              { icon: FaRocket, title: "Бързи сайтове", desc: "Скорост + Google класиране" },
              { icon: FaChartLine, title: "Анализи & Новини", desc: "Google updates и тенденции" },
            ].map((item) => (
              <Card
                key={item.title}
                padding="m"
                border="neutral-alpha-medium"
                radius="l"
                style={{ minHeight: '140px' }}
              >
                <Flex gap="m" vertical="start" fillWidth>
                  <item.icon size={28} color="var(--brand-strong)" />
                  <Column gap="xs" fillWidth>
                    <Heading as="h3" variant="heading-strong-m">
                      {item.title}
                    </Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {item.desc}
                    </Text>
                  </Column>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Column>

        {/* Последни статии – един под друг, само последният с thumbnail */}
        <Column gap="l">
          <Heading as="h2" variant="display-default-m" align="center">
            Последни статии
          </Heading>

          <Column gap="xl" fillWidth>
            {/* Всички постове без thumbnail */}
            <Posts thumbnail={false} /> {/* предполага се, че Posts приема prop thumbnail */}

            {/* Последният пост – с thumbnail */}
            {/* Ако Posts не може да се извика два пъти, може да се направи custom логика в компонента Posts */}
            {/* Алтернатива: Posts limit={1} thumbnail={true} offset={Posts.length - 1} – но зависи от имплементацията */}
            {/* За сега – отделен извикване за последния */}
            <Posts limit={1} thumbnail={true} latest={true} />
          </Column>

          <Flex horizontal="center" paddingTop="l">
            <Button variant="secondary" size="m" href="/blog">
              Виж всички статии
            </Button>
          </Flex>
        </Column>

        {/* Финален CTA – по-прибрани статистики */}
        <Column gap="l" align="center" paddingTop="xl">
          <Heading as="h4" variant="display-strong-m" align="center">
            Готови да подобрите класирането и сигурността си?
          </Heading>

          <Grid
            columns={3}
            s={{ columns: 1 }}
            gap="s"           // ← намален gap
            fillWidth
            style={{ maxWidth: '960px' }} // ← ограничава ширината за по-прибран вид
          >
            {[
              { icon: FaClock, title: "Актуални стратегии", desc: "2025–2026" },
              { icon: FaShieldAlt, title: "Практични съвети", desc: "Реални примери" },
              { icon: FaStar, title: "SEO + Security", desc: "Комбинирано" },
            ].map((stat) => (
              <Card
                key={stat.title}
                padding="m"           // ← по-малък padding
                border="neutral-alpha-medium"
                radius="l"
                align="center"
              >
                <Column gap="xs" align="center">
                  <stat.icon size={24} color="var(--brand-strong)" />
                  <Heading as="h5" variant="heading-strong-s" align="center">
                    {stat.title}
                  </Heading>
                  <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                    {stat.desc}
                  </Text>
                </Column>
              </Card>
            ))}
          </Grid>

          <Flex gap="m" wrap horizontal="center" paddingTop="m">
            <Button variant="primary" size="l" href="/kontakti">
              <Flex gap="s" vertical="center">
                <FaRocket size={16} />
                <Text>Пиши ми сега</Text>
              </Flex>
            </Button>
            <Button variant="secondary" size="l" href="/kontakti">
              <Flex gap="s" vertical="center">
                <FaCheckCircle size={16} />
                <Text>Безплатна консултация</Text>
              </Flex>
            </Button>
          </Flex>
        </Column>
      </Column>
    </>
  );
}
