import { Column, Heading, Text, Button, Tag, Flex } from '@once-ui-system/core';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';
import WordpressSEOFAQ from './faq';

const service = {
  title: 'SEO за WordPress',
  slug: 'wordpress-seo',
  description: 'Практики за оптимизация на WordPress сайтове. Повишете класирането и сигурността на вашия WordPress сайт с модерни SEO техники.',
  keywords: 'seo за wordpress, wordpress seo, оптимизация на wordpress, seo плъгини, seo практики wordpress',
  path: '/seo-uslugi/wordpress-seo',
};

export const metadata = {
  title: service.title + ' | Станчев SEO',
  description: service.description,
  keywords: service.keywords,
  alternates: { canonical: `${baseURL}${service.path}` },
  openGraph: {
    title: service.title,
    description: service.description,
    url: `${baseURL}${service.path}`,
    siteName: seoServices.title,
    images: [{ url: `${baseURL}/images/og/og.jpg`, width: 1200, height: 630 }],
    locale: 'bg_BG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: service.title,
    description: service.description,
    images: [`${baseURL}/images/og/og.jpg`],
  },
};

export default function WordpressSEOPage() {
  return (
    <>
      <Script
        id="wordpress-seo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.description,
            url: `${baseURL}${service.path}`,
            areaServed: { '@type': 'Country', name: 'Bulgaria' },
            provider: { '@type': 'Organization', name: 'Станчев SEO' },
            serviceType: 'WordPress SEO (Automation, Generative SEO, AI Overviews)',
          })
        }}
      />

      <Column as="section" gap="xl" padding="xl" fillWidth>

        <Column gap="m" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            {service.title}
          </Heading>
          <Text variant="display-default-s" align="center" onBackground="neutral-weak">
            {service.description}
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
          {[
            'wordpress seo',
            'seo за wordpress',
            'оптимизация на wordpress',
            'ai overviews',
            'generative seo',
            'seo automation'
          ].map((lbl) => (
            <Tag key={lbl}>{lbl}</Tag>
          ))}
        </Flex>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m" align="center">WordPress SEO с автоматизация и AI (Generative SEO, Overviews)</Heading>
          <Text variant="body-default-xl">
            Днес алгоритмите на търсачките и AI системите (Generative Engines) оценяват не само
            ключови думи и линкове, а и структура, семантика, скорост и яснота на отговорите.
            Подхождам с комбинация от техническа оптимизация, автоматизация и съдържание, което е
            <em> лесно за извличане от AI</em>. Това гарантира видимост както в класически SERP, така и
            в <strong>AI Overviews</strong>.
          </Text>
        </Column>
		
        <Column gap="l">
          <Heading as="h3" variant="display-default-s">Какво включва AI-ориентираното WordPress SEO</Heading>
          <Column as="ul" gap="s" paddingLeft="l">
            <li>
              <strong>Структурирани данни (Schema.org):</strong> Article, FAQPage, Breadcrumb,
              Product/Service – автоматично инжектирани там, където имат смисъл.
            </li>
            <li>
              <strong>Clear-answer контент:</strong> параграфи и списъци, форматирани за директно
              извличане в AI отговори и Overviews.
            </li>
            <li>
              <strong>Умно вътрешно линкване:</strong> контекстни връзки между релевантни статии/страници,
              за да се подсили темата и да се улесни разбираемостта за AI.
            </li>
            <li>
              <strong>Техническа база:</strong> бързина, Core Web Vitals, чист HTML, правилни заглавия (H1–H4).
            </li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">Автоматизация и персонализирани WordPress SEO плъгини</Heading>
          <Text variant="body-default-xl">
            Изграждам процеси и плъгини, които автоматизират повтаряемите задачи:
            автоматично генериране на мета заглавия/описания, подсказки за вътрешни линкове,
            валидиране на заглавни йерархии, добавяне на Schema и проверка за AI-readability.
            Така спестяваме време и минимизираме човешки грешки.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">Generative SEO &amp; Overviews: как печелим</Heading>
          <Text variant="body-default-xl">
            Съдържанието се структурира така, че да отговаря конкретно на интента. Използвам кратки
            резюмета, списъци и FAQ блокове за бързо извличане от AI, а схемите помагат на моделите
            да класифицират темата и контекста. Така се увеличава шансът за присъствие в Overviews.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">Процесът ми стъпка по стъпка</Heading>
          <Column as="ol" gap="xs">
            <li><strong>Одит:</strong> технически, съдържателен и семантичен преглед.</li>
            <li>
              <strong>Настройки:</strong> SEO плъгини (Yoast/RankMath/AIO), пермалинкове, sitemap, robots.
            </li>
            <li>
              <strong>Автоматизация:</strong> добавяне/настройка на плъгини и скриптове за мета, Schema, вътрешни линкове.
            </li>
            <li>
              <strong>Съдържание:</strong> оптимизация на структури, H-йерархия и ясни отговори на ключови въпроси.
            </li>
            <li>
              <strong>Мониторинг:</strong> логове, валидиране на schema, Crawl/Index статус, Core Web Vitals.
            </li>
          </Column>
        </Column>

	   <Column gap="l">
          <Heading as="h3" variant="display-default-s">Свързани услуги и платформи</Heading>
          <Text variant="body-default-l">
            Ако имате онлайн магазин, вижте <a href="/seo-uslugi/ecommerce-seo">SEO за онлайн магазини.</a> 
			<p>Ако желаете да разбрете малко повече за процеса <a href="/seo-proekti/integraciya-chatgpt-wordpress-case-study">ChatGPT & WordPress</a></p>
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">Често задавани въпроси</Heading>
          <WordpressSEOFAQ />
        </Column>

        <Column align="center" paddingTop="xl" fillWidth>
          <Heading as="h4" variant="display-strong-m" align="center">
            Готови ли сте за WordPress SEO, пригодено за AI и Overviews?
          </Heading>
          <Flex horizontal="center">
            <Button variant="primary" prefixIcon="rocket" size="l" href="/kontakti">
              Свържете се с нас
            </Button>
          </Flex>
        </Column>
      </Column>
    </>
  );
}

