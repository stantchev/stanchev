import { Column, Heading, Text, Button, Tag, Flex } from '@once-ui-system/core';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';
import EcommerceSEOFAQ from './faq';

const service = {
  title: 'SEO за Онлайн Магазини',
  slug: 'ecommerce-seo',
  description: 'Специализирана SEO стратегия за e-commerce платформи. Повишете видимостта и продажбите на вашия онлайн магазин с доказани техники за оптимизация.',
  keywords: 'seo за онлайн магазини, ecommerce seo, seo оптимизация магазин, seo за e-commerce, оптимизация на онлайн магазин',
  path: '/seo-uslugi/ecommerce-seo',
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

export default function EcommerceSEOPage() {
  return (
    <>
      <Script id="ecommerce-seo-schema" type="application/ld+json" dangerouslySetInnerHTML={{
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
          {["ecommerce seo", "seo за онлайн магазини", "оптимизация на магазин"].map(lbl => (
            <Tag key={lbl}>{lbl}</Tag>
          ))}
        </Flex>
        <Column gap="l">
          <Heading as="h2">Защо SEO за онлайн магазини е различно?</Heading>
          <Text variant="body-default-l">
            Онлайн магазините имат уникални SEO предизвикателства: голям брой продукти, дублирано съдържание, филтри и вариации, технически изисквания за скорост и мобилност. Специализираната SEO стратегия за e-commerce включва оптимизация на продуктови страници, категории, навигация, структурирани данни и интеграция с платформи като Google Merchant Center. Ако използвате <a href="/seo-uslugi/wordpress-seo">WordPress</a>, <a href="/seo-uslugi/opencart-seo">OpenCart</a> или <a href="/seo-uslugi/magento-seo">Magento</a>, вижте и нашите специализирани услуги за тези платформи.
          </Text>
        </Column>
        <Column gap="l">
          <Heading as="h2">Ключови стъпки в SEO за онлайн магазини</Heading>
          <Column as="ol" gap="s">
            <li><strong>Технически одит:</strong> Проверка на индексация, скорост, мобилна съвместимост</li>
            <li><strong>Оптимизация на продуктови страници:</strong> Уникални описания, заглавия, мета тагове</li>
            <li><strong>Вътрешна линк структура:</strong> Категории, филтри, breadcrumbs</li>
            <li><strong>Структурирани данни:</strong> Schema.org за продукти, ревюта, цени</li>
            <li><strong>Линк билдинг:</strong> Партньорства, guest posting, локални каталози</li>
          </Column>
        </Column>
        <Column gap="l">
          <Heading as="h2">Често задавани въпроси</Heading>
          <EcommerceSEOFAQ />
        </Column>
        <Column align="center" paddingTop="xl" fillWidth>
          <Heading variant="display-strong-m" align="center">
            Готови ли сте да увеличите продажбите си чрез SEO?
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