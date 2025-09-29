import { Column, Heading, Text, Button, Tag, Flex } from '@once-ui-system/core';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';
import MagentoSEOFAQ from './faq';

const service = {
  title: 'SEO за Magento',
  slug: 'magento-seo',
  description: 'Технически и съдържателни практики за Magento SEO. Оптимизирайте вашия Magento магазин за по-добро класиране и повече продажби.',
  keywords: 'seo за magento, magento seo, оптимизация на magento, seo магазин magento, seo платформа magento',
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
      <Script id="magento-seo-schema" type="application/ld+json" dangerouslySetInnerHTML={{
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
          {["magento seo", "seo за magento", "оптимизация на magento"].map(lbl => (
            <Tag key={lbl}>{lbl}</Tag>
          ))}
        </Flex>
        <Column gap="l">
          <Heading as="h2">Magento SEO – специфики и предимства</Heading>
          <Text variant="body-default-l">
            Magento е мощна e-commerce платформа, която изисква техническа и съдържателна SEO оптимизация: оптимизация на URL адреси, мета тагове, изображения, скорост и сигурност. Добрата Magento SEO стратегия включва техническа оптимизация, съдържание и линк билдинг, както и интеграция с разширения за SEO. Ако използвате <a href="/seo-uslugi/opencart-seo">OpenCart</a> или <a href="/seo-uslugi/wordpress-seo">WordPress</a>, вижте и нашите услуги за тези платформи.
          </Text>
          <Text variant="body-default-l">
            SEO за Magento се различава от други CMS платформи, защото тук всеки детайл има значение – от структурата на категориите и продуктите до скоростта на зареждане на страниците. За разлика от стандартни магазини, Magento изисква задълбочен подход: правилна конфигурация на robots.txt, XML sitemap и hreflang тагове за международни проекти. Всички тези технически подобрения водят до по-добро индексиране от Google и по-високи позиции за ключови фрази като “Magento SEO” и “SEO за Magento”.
          </Text>
        </Column>
        <Column gap="l">
          <Heading as="h2">Ключови стъпки в Magento SEO</Heading>
          <Column as="ol" gap="s">
            <li><strong>SEO разширения:</strong> Mageworx, Amasty, SEO Suite</li>
            <li><strong>Оптимизация на продуктови страници:</strong> Мета тагове, уникални описания, изображения</li>
            <li><strong>Скорост и сигурност:</strong> Кеширане, SSL, оптимизация на сървъра</li>
            <li><strong>Вътрешна линк структура:</strong> Категории, филтри, breadcrumbs</li>
            <li><strong>Линк билдинг:</strong> Партньорства, guest posting, локални каталози</li>
          </Column>
          <Text variant="body-default-l">
            В процеса на оптимизация е важно всяка продуктова страница да бъде уникална. Дублираното съдържание е чест проблем при Magento магазини с голям асортимент. Затова правилният подход към мета заглавията, описанията и структурираното съдържание е ключов за ефективното SEO за Magento.
          </Text>
          <Text variant="body-default-l">
            Освен това, интеграцията със системи за кеширане и CDN подобрява скоростта – фактор, който пряко влияе върху класирането. Magento SEO не е еднократна задача, а постоянен процес от технически и маркетингови действия.
          </Text>
        </Column>
        <Column gap="l">
          <Heading as="h2">Magento SEO за международни магазини</Heading>
          <Text variant="body-default-l">
            Когато управлявате мултиезичен магазин, SEO за Magento включва работа с hreflang атрибути и различни домейн структури (.com, .de, .bg). Добрата международна SEO стратегия гарантира, че всеки пазар вижда съдържанието на съответния език. Това повишава доверието, намалява степента на отпадане и води до повече продажби.
          </Text>
          <Text variant="body-default-l">
            В международен мащаб Magento SEO включва още интеграция с локални платежни системи и оптимизация на съдържанието за специфични културни и езикови нужди. С правилен подход магазинът ви може да се конкурира успешно на глобално ниво.
          </Text>
        </Column>
        <Column gap="l">
          <Heading as="h2">Magento SEO и потребителско изживяване</Heading>
          <Text variant="body-default-l">
            Търсачките все повече обръщат внимание на поведението на потребителите. Добрата навигация, лесното филтриране и оптимизираната мобилна версия са задължителни. SEO за Magento не е само мета тагове и линкове – то е цялостна стратегия за по-добро потребителско изживяване, което води до по-висока конверсия.
          </Text>
          <Text variant="body-default-l">
            Включването на структурирани данни (rich snippets) – цени, наличност и ревюта – подобрява видимостта в резултатите на Google. Това дава конкурентно предимство и повишава CTR-а на вашите страници.
          </Text>
        </Column>
        <Column gap="l">
          <Heading as="h2">Често задавани въпроси</Heading>
          <MagentoSEOFAQ />
        </Column>
        <Column align="center" paddingTop="xl" fillWidth>
          <Heading variant="display-strong-m" align="center">
            Искате ли Magento магазинът ви да се класира по-високо?
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
