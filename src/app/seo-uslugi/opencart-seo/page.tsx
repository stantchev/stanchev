import { Column, Heading, Text, Button, Tag, Flex } from '@once-ui-system/core';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';
import OpenCartSEOFAQ from './faq';

const service = {
  title: 'SEO за OpenCart',
  slug: 'opencart-seo',
  description: 'SEO стратегии, специфични за OpenCart платформи. Оптимизирайте вашия OpenCart магазин за по-добро класиране и повече продажби.',
  keywords: 'seo за opencart, opencart seo, оптимизация на opencart, seo магазин opencart, seo платформа opencart',
  path: '/seo-uslugi/opencart-seo',
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

export default function OpenCartSEOPage() {
  return (
    <>
      <Script id="opencart-seo-schema" type="application/ld+json" dangerouslySetInnerHTML={{
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
          {["opencart seo", "seo за opencart", "оптимизация на opencart"].map(lbl => (
            <Tag key={lbl}>{lbl}</Tag>
          ))}
        </Flex>
        <Column gap="l">
          <Heading as="h2">OpenCart SEO – специфики и предимства</Heading>
          <Text variant="body-default-l">
            OpenCart е популярна платформа за онлайн магазини, но изисква специфични SEO настройки: оптимизация на URL адреси, мета тагове, изображения, скорост и сигурност. Добрата OpenCart SEO стратегия включва техническа оптимизация, съдържание и линк билдинг, както и интеграция с разширения за SEO. Ако използвате <a href="/seo-uslugi/wordpress-seo">WordPress</a> или <a href="/seo-uslugi/magento-seo">Magento</a>, вижте и нашите услуги за тези платформи.
          </Text>
        </Column>
        <Column gap="l">
          <Heading as="h2">Ключови стъпки в OpenCart SEO</Heading>
          <Column as="ol" gap="s">
            <li><strong>SEO разширения:</strong> SEO Pack, SEO URL, Google Sitemap</li>
            <li><strong>Оптимизация на продуктови страници:</strong> Мета тагове, уникални описания, изображения</li>
            <li><strong>Скорост и сигурност:</strong> Кеширане, SSL, оптимизация на сървъра</li>
            <li><strong>Вътрешна линк структура:</strong> Категории, филтри, breadcrumbs</li>
            <li><strong>Линк билдинг:</strong> Партньорства, guest posting, локални каталози</li>
          </Column>
        </Column>
        <Column gap="l">
          <Heading as="h2">Често задавани въпроси</Heading>
          <OpenCartSEOFAQ />
        </Column>
        <Column align="center" paddingTop="xl" fillWidth>
          <Heading variant="display-strong-m" align="center">
            Искате ли OpenCart магазинът ви да се класира по-високо?
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