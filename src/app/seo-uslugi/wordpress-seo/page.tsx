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
      <Script id="wordpress-seo-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `${baseURL}${service.path}`,
        })
      }} />
      <Column as="section" gap="xl" padding="xl" fillWidth>
        <Column gap="m" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">{service.title}</Heading>
          <Text variant="display-default-s" align="center" onBackground="neutral-weak">
            {service.description}
          </Text>
          <Flex horizontal="center">
            <Button variant="primary" size="l" href="/kontakti" prefixIcon="checkCircle" data-border="rounded">
              Заяви безплатна консултация
            </Button>
          </Flex>
        </Column>
        <Flex gap="8" wrap horizontal="center">
          {["wordpress seo", "seo за wordpress", "оптимизация на wordpress"].map(lbl => (
            <Tag key={lbl}>{lbl}</Tag>
          ))}
        </Flex>
        <Column gap="l">
          <Heading as="h2">Защо WordPress SEO е важно?</Heading>
          <Text variant="body-default-l">
            WordPress е най-популярната CMS платформа, но изисква специфични SEO настройки: оптимизация на permalinks, използване на SEO плъгини (Yoast, RankMath), сигурност, скорост и мобилна съвместимост. Добрата WordPress SEO стратегия включва техническа оптимизация, съдържание и линк билдинг. Ако имате онлайн магазин, вижте <a href="/seo-uslugi/ecommerce-seo">SEO за онлайн магазини</a> или <a href="/seo-uslugi/opencart-seo">OpenCart SEO</a> за други платформи.
          </Text>
        </Column>
        <Column gap="l">
          <Heading as="h2">Ключови стъпки в WordPress SEO</Heading>
          <Column as="ol" gap="s">
            <li><strong>SEO плъгини:</strong> Yoast, RankMath, All in One SEO</li>
            <li><strong>Оптимизация на скоростта:</strong> Кеширане, оптимизация на изображения, CDN</li>
            <li><strong>Сигурност:</strong> SSL, защита от спам, актуализации</li>
            <li><strong>Структурирани данни:</strong> Schema.org, breadcrumbs</li>
            <li><strong>Вътрешна линк структура:</strong> Категории, тагове, навигация</li>
          </Column>
        </Column>
        <Column gap="l">
          <Heading as="h2">Често задавани въпроси</Heading>
          <WordpressSEOFAQ />
        </Column>
        <Column align="center" paddingTop="xl" fillWidth>
          <Heading variant="display-strong-m" align="center">
            Искате ли WordPress сайтът ви да се класира по-високо?
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