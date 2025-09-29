import { Column, Heading, Text, Button, Tag, Flex } from '@once-ui-system/core';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';
import OpenCartSEOFAQ from './faq';

const service = {
  title: 'SEO за OpenCart',
  slug: 'opencart-seo',
  description:
    'SEO стратегии, специфични за OpenCart платформи. Оптимизирайте вашия OpenCart магазин за по-добро класиране и повече продажби.',
  keywords:
    'seo за opencart, opencart seo, оптимизация на opencart, seo магазин opencart, seo платформа opencart',
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
      <Script
        id="opencart-seo-schema"
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
            serviceType: 'OpenCart SEO (Technical, Content, Link Building)',
          }),
        }}
      />

      <Column as="section" gap="xl" padding="xl" fillWidth>
        <Column gap="m" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            {service.title}
          </Heading>
          <Text
            variant="display-default-s"
            align="center"
            onBackground="neutral-weak"
          >
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
            'opencart seo',
            'seo за opencart',
            'оптимизация на opencart',
            'seo extensions',
            'ecommerce seo',
            'линк билдинг opencart',
          ].map((lbl) => (
            <Tag key={lbl}>{lbl}</Tag>
          ))}
        </Flex>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m" align="center">
            OpenCart SEO – специфики и предимства
          </Heading>
          <Text variant="body-default-xl">
            OpenCart е популярна и гъвкава e-commerce система, но за да постигнете
            реални резултати в търсачките, е нужна детайлна <strong>OpenCart SEO</strong>{' '}
            стратегия. В основата ѝ стоят технически подобрения, уникално съдържание и
            ефективен линк билдинг. Добрата <strong>SEO за OpenCart</strong> стратегия
            включва настройка на URL адреси, мета тагове, sitemap, изображения,
            скорост и сигурност. Правилното прилагане на тези практики гарантира по-добро
            класиране и повече продажби.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">
            Техническа оптимизация в OpenCart SEO
          </Heading>
          <Column as="ul" gap="s" paddingLeft="l">
            <li>
              <strong>SEO разширения:</strong> SEO Pack, SEO URL, Google Sitemap и други
              плъгини за подобряване на индексирането.
            </li>
            <li>
              <strong>Оптимизация на продуктови страници:</strong> уникални заглавия, мета
              описания и оптимизирани изображения.
            </li>
            <li>
              <strong>Скорост и Core Web Vitals:</strong> кеширане, CDN, оптимизация на
              сървъра и мобилна производителност.
            </li>
            <li>
              <strong>Сигурност:</strong> SSL сертификати, защита от злонамерени ботове и
              стабилна хостинг среда.
            </li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">
            Съдържателна стратегия и линк билдинг за OpenCart SEO
          </Heading>
          <Text variant="body-default-xl">
            Съдържанието е гръбнакът на всяка успешна SEO стратегия. При{' '}
            <strong>SEO за OpenCart</strong> всеки продукт трябва да има уникално описание
            с релевантни ключови думи. Вътрешното линкване чрез категории, филтри и
            breadcrumbs улеснява навигацията и повишава разбирането на сайта от
            търсачките. Линк билдингът – чрез партньорства, guest posting и присъствие в
            локални каталози – увеличава авторитета на магазина и подобрява
            класирането.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">
            OpenCart SEO за международни магазини
          </Heading>
          <Text variant="body-default-xl">
            Много онлайн търговци използват OpenCart за международни пазари. В тези случаи{' '}
            <strong>OpenCart SEO</strong> трябва да включва hreflang тагове, преведено
            съдържание и адаптирани домейн структури. Това осигурява правилно индексиране
            и елиминира риска от дублирано съдържание. Локализираното SEO е решаващо за
            изграждане на доверие и растеж на продажбите в различни държави.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">
            Процесът ми стъпка по стъпка
          </Heading>
          <Column as="ol" gap="xs">
            <li><strong>Одит:</strong> технически, съдържателен и конкурентен анализ.</li>
            <li><strong>Настройки:</strong> SEO плъгини, sitemap, robots.txt, SSL.</li>
            <li><strong>Съдържание:</strong> уникални описания, оптимизирани мета тагове, структурирани данни.</li>
            <li><strong>Вътрешно линкване:</strong> категории, breadcrumbs, филтри.</li>
            <li><strong>Линк билдинг:</strong> guest posting, партньорства, каталози.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">
            Свързани услуги и платформи
          </Heading>
          <Text variant="body-default-l">
            Ако използвате и други CMS системи, предлагаме също{' '}
            <a href="/seo-uslugi/wordpress-seo">WordPress SEO</a>,{' '}
            <a href="/seo-uslugi/magento-seo">Magento SEO</a> и{' '}
            <a href="/seo-uslugi/ecommerce-seo">цялостно SEO за онлайн магазини</a>.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">
            Често задавани въпроси
          </Heading>
          <OpenCartSEOFAQ />
        </Column>

        <Column align="center" paddingTop="xl" fillWidth>
          <Heading as="h4" variant="display-strong-m" align="center">
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
