import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  Card,
  Grid,
  AccordionGroup,
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
    title: 'SEO и Web Разработка Блог – Актуални Съвети, Прогнози и Ръководства | Stanchev Digital',
    description:
      'Практически съвети по SEO оптимизация, web разработка, прогнози за 2026, анализи на тенденции и ръководства за успех в дигиталния свят. Киберсигурността като бонус тема.',
    keywords:
      'seo блог, seo съвети, seo новини, web разработка, тенденции в web dev, seo прогнози 2026, web тенденции 2026, дигитален маркетинг, core web vitals, react next.js, локално seo, линк билдинг',
    alternates: {
      canonical: `${baseURL}/blog`,
    },
    openGraph: {
      title: 'SEO и Web Разработка Блог – Актуални Прогнози и Анализи | Stanchev Digital',
      description:
        'Актуални стратегии, ръководства и прогнози по SEO и web разработка за 2026. Киберсигурност като допълнителна тема за защита.',
      url: `${baseURL}/blog`,
      siteName: 'Stanchev Digital',
      images: [
        {
          url: `https://stanchev.bg/images/og/og-seo-web.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'SEO и Web Разработка Блог – Прогнози и Ръководства',
      description: 'Практически материали по SEO, web разработка и бонус киберсигурност за бизнеса ви.',
      images: [`https://stanchev.bg/images/og/og-seo-web.jpg`],
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
            name: "SEO и Web Разработка Блог | Stanchev Digital",
            url: "https://stanchev.bg/blog",
            description:
              "Актуални статии, прогнози и ръководства по SEO оптимизация, web разработка и дигитален маркетинг. Киберсигурност като бонус тема от Stanchev Digital.",
            publisher: {
              "@type": "Organization",
              name: "Stanchev Digital",
              url: "https://stanchev.bg/",
              logo: {
                "@type": "ImageObject",
                url: "https://stanchev.bg/images/og/og-seo-web.jpg",
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
            SEO и Web Разработка Блог
          </Heading>
          <Text variant="display-default-m" align="center" onBackground="neutral-weak">
            Актуални анализи, прогнози за 2026 и практически ръководства за SEO оптимизация, web разработка с React и Next.js. Киберсигурността като бонус тема за допълнителна защита.
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
          {["SEO 2026", "Web Dev Тенденции", "Прогнози", "Ръководства", "Киберсигурност (бонус)"].map((lbl) => (
            <Tag key={lbl} size="l" variant="brand">
              {lbl}
            </Tag>
          ))}
        </Flex>

        {/* Какво ще откриете – фокус върху SEO & Web, с кибер като бонус */}
        <Column gap="m">
          <Heading as="h2" variant="display-default-m">
            Какво ще откриете в блога
          </Heading>
          <Text variant="body-default-xl" onBackground="neutral-weak">
            Актуални прогнози за SEO тенденции като EEAT, AI-медиирани SERPs, човешко съдържание над AI. Тенденции в web разработка: AI-first development, мета-фреймуърки като Next.js, React Compiler. Ръководства за оптимизация, анализи на Google updates и бонус теми за киберсигурност: AI в кибер атаки, геополитика в сигурността.
          </Text>

          <Grid columns={4} s={{ columns: 2 }} gap="s" fillWidth>
            {[
              { icon: FaSearch, title: "SEO оптимизация", desc: "Ключови думи, EEAT, AI SERPs" },
              { icon: FaRocket, title: "Web разработка", desc: "Next.js, AI-first, Performance" },
              { icon: FaChartLine, title: "Анализи & Прогнози", desc: "Тенденции 2026, Google updates" },
              { icon: FaShieldAlt, title: "Киберсигурност (бонус)", desc: "AI атаки, уязвимости" },
            ].map((item) => (
              <Card
                key={item.title}
                padding="s"
                border="neutral-alpha-medium"
                radius="s"
                style={{ minHeight: '14px' }}
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
            Актуални статии, анализи и прогнози
          </Heading>

          <Column gap="xl" fillWidth>
			<Posts range={[2, 3]} columns="2" thumbnail direction="column" />
          <Posts range={[4]} columns="2" />
          </Column>
        </Column>

        {/* Финален CTA – по-прибрани статистики */}
        <Column gap="l" align="center" paddingTop="m">
          <Heading as="h4" variant="display-strong-m" align="center">
            Готови за актуални SEO и Web стратегии за 2026?
          </Heading>
		  
<Column gap="l" paddingTop="s">
  <Heading as="h3" variant="display-default-m">
    Често задавани въпроси за блога на Stanchev Digital
  </Heading>

  <AccordionGroup
    items={[
      {
        title: "Какво отличава блога на Stanchev Digital?",
        content: (
          <Text onBackground="neutral-weak" align="left">
            Блогът комбинира актуални SEO прогнози и реални технически ръководства за web разработка (React, Next.js, Tailwind, performance) с фокус върху 2025–2026 година. За разлика от повечето AI-генерирани или общи блогове, тук получавате:
            <br /><br />
            • Прогнози, базирани на личен опит с клиенти и последните Google updates<br />
            • Конкретни кодови примери и чеклисти, които можете да приложите веднага<br />
            • Минимално „водно“ съдържание – директно към същността<br />
            • Бонус теми по киберсигурност, които пряко влияят на дигиталния свят
          </Text>
        ),
      },
      {
        title: "Колко често излизат нови статии?",
        content: (
          <Text onBackground="neutral-weak" align="left">
            Статиите излизат когато има значими събития (Google update, нова версия на Next.js, важна промяна в AI търсачките) или когато завърша практически тест/експеримент с клиентски сайт. Ако искате да сте сред първите, които научават, следете в LinkedIn.
          </Text>
        ),
      },
      {
        title: "Мога ли да поискам конкретна тема или казус?",
        content: (
          <Text onBackground="neutral-weak" align="left">
            Да – пишете ми директно през формата за контакт или в LinkedIn. Ако казусът е интересен и може да помогне на повече хора, често го превръщам в подробна статия (анонимизирана, разбира се). Популярни теми от читатели през последните месеци: EEAT за малък бизнес, миграция от WordPress към Next.js, Core Web Vitals на 2026.
          </Text>
        ),
      },
      {
        title: "Използвате ли AI за писане на статиите?",
        content: (
          <Text onBackground="neutral-weak" align="left">
            Не – всички статии са писани ръчно от мен. Използвам AI инструменти само за: бърза проверка на факти, генериране на чернови за структури, превод на технически термини или анализ на големи логове. Окончателният текст, примерите и заключенията са 100% човешки. Това е важно за да може съдържанието да носи реална стойност на читателите.
          </Text>
        ),
      },
      {
        title: "Защо има статии за киберсигурност?",
        content: (
          <Text onBackground="neutral-weak" align="left">
            Киберсигурността е умишлено бонус тема, а не основен фокус. Основният ми приоритет са SEO и web разработка, защото там виждам най-голямо влияние върху бизнеса на клиентите. Темите за сигурност излизат, когато са пряко свързани с класирането (HTTPS, сигурност на Core Web Vitals, защита от негативен SEO) или когато има голяма актуална заплаха (напр. нови AI-базирани атаки).
          </Text>
        ),
      },
      {
        title: "Как да получа най-новите прогнози за SEO и web тенденции?",
        content: (
          <Text onBackground="neutral-weak" align="left">
            Най-бързият начин е да следите блога и LinkedIn: stanchev-seo.
          </Text>
        ),
      },
    ]}
  />
</Column>
          <Flex gap="s" wrap horizontal="center" paddingTop="xs">
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

