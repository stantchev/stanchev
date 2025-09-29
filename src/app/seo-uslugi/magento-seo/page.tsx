import { Column, Heading, Text, Button, Tag, Flex } from '@once-ui-system/core';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';
import MagentoSEOFAQ from './faq';

const service = {
  title: 'SEO за Magento',
  slug: 'magento-seo',
  description:
    'Технически и съдържателни практики за Magento SEO. Оптимизирайте вашия Magento магазин за по-добро класиране и повече продажби.',
  keywords:
    'seo за magento, magento seo, оптимизация на magento, seo магазин magento, seo платформа magento',
  path: '/seo-uslugi/magento-seo',
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

export default function MagentoSEOPage() {
  return (
    <>
      <Script
        id="magento-seo-schema"
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
            serviceType: 'Magento SEO (Technical, Content, Link Building)',
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
            'magento seo',
            'seo за magento',
            'оптимизация на magento',
            'ecommerce seo',
            'seo разширения magento',
            'линк билдинг magento',
          ].map((lbl) => (
            <Tag key={lbl}>{lbl}</Tag>
          ))}
        </Flex>

        <Column gap="l">
          <Heading
            as="h2"
            variant="display-default-m"
            align="center"
          >
            Magento SEO – техническа и съдържателна оптимизация
          </Heading>
          <Text variant="body-default-xl">
            Magento е една от най-мощните e-commerce платформи, но за да разгърне
            пълния си потенциал, се изисква задълбочена SEO стратегия. <strong>Magento SEO</strong> включва комбинация от техническа оптимизация, 
            съдържание, вътрешно линкване и линк билдинг. Всеки детайл има значение – 
            от структурата на категориите и продуктите до скоростта на зареждане и 
            мобилната оптимизация. С правилната стратегия <strong>SEO за Magento</strong> 
            може да донесе устойчиво класиране и ръст на продажбите.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">
            Какво включва техническата оптимизация в Magento SEO
          </Heading>
          <Column as="ul" gap="s" paddingLeft="l">
            <li>
              <strong>URL структура:</strong> Чисти и кратки URL адреси, които улесняват индексирането.
            </li>
            <li>
              <strong>Мета тагове и описания:</strong> Автоматизация и уникалност на всяка страница.
            </li>
            <li>
              <strong>Скорост и Core Web Vitals:</strong> Кеширане, CDN и оптимизация на изображения.
            </li>
            <li>
              <strong>Сигурност:</strong> SSL, защита от ботове и стабилна хостинг среда.
            </li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">
            Съдържателна стратегия и линк билдинг за Magento SEO
          </Heading>
          <Text variant="body-default-xl">
            Добрата <strong>SEO за Magento</strong> стратегия се базира на уникално съдържание. 
            Всеки продукт трябва да има свое описание, оптимизирано за ключови думи, 
            но и полезно за клиента. Вътрешните връзки (breadcrumbs, категории, филтри) 
            помагат както на потребителите, така и на търсачките. Линк билдингът се 
            реализира чрез партньорства, guest posting и присъствие в локални каталози.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">
            Magento SEO за международни магазини
          </Heading>
          <Text variant="body-default-xl">
            Ако вашият магазин е насочен към различни пазари, <strong>Magento SEO</strong> трябва 
            да включва hreflang тагове, локализирано съдържание и подходяща структура 
            на домейни. По този начин се избягва дублирано съдържание и се гарантира 
            правилното индексиране за всяка държава. Международната стратегия е 
            ключова за растеж и доверие на глобално ниво.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">
            Процесът ми стъпка по стъпка
          </Heading>
          <Column as="ol" gap="xs">
            <li><strong>Одит:</strong> технически, съдържателен и конкурентен анализ.</li>
            <li><strong>Настройки:</strong> SEO разширения, sitemap, robots.txt, SSL.</li>
            <li><strong>Съдържание:</strong> уникални описания, мета данни, структурирани данни.</li>
            <li><strong>Вътрешно линкване:</strong> оптимизация на категории, breadcrumbs и филтри.</li>
            <li><strong>Линк билдинг:</strong> външни връзки, партньорства, локални каталози.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">
            Свързани услуги и платформи
          </Heading>
          <Text variant="body-default-l">
            Освен <strong>SEO за Magento</strong>, предлагаме оптимизация и за други системи: 
            <a href="/seo-uslugi/opencart-seo"> OpenCart SEO</a>, 
            <a href="/seo-uslugi/wordpress-seo"> WordPress SEO</a> и 
            <a href="/seo-uslugi/ecommerce-seo"> SEO за онлайн магазини</a>.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s">
            Често задавани въпроси
          </Heading>
          <MagentoSEOFAQ />
        </Column>

        <Column align="center" paddingTop="xl" fillWidth>
          <Heading as="h4" variant="display-strong-m" align="center">
            Искате ли вашият Magento магазин да се класира по-високо?
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
