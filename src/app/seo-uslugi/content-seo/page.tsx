import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  Icon,
  RevealFx,
} from '@once-ui-system/core';
import SeoContentFAQ from './faq';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';

const service = seoServices.services.find(s => s.slug === 'content-seo');

export async function generateMetadata() {
  const keywords = [
    'content seo',
    'seo копирайтинг',
    'оптимизация съдържание',
	  'seo копирайтинг цена',
	  'seo копирайтинг цени',
	  'content seo цена',
	  'content seo цени'
  ].join(', ');

  if (!service) {
    return {
      title: 'Content SEO – оптимизация на съдържание за класиране в Google',
      description: 'SEO копирайтинг, блог стратегия и оптимизация на текстовете за по-добри резултати в търсачките.',
      keywords,
      alternates: {
        canonical: `${baseURL}/seo-uslugi/content-seo`,
      },
      openGraph: {
        title: 'Content SEO – SEO копирайтинг и съдържание за оптимизация',
        description: 'SEO копирайтинг, блог стратегия и оптимизация на текстовете за по-добри резултати в търсачките.',
        url: `${baseURL}/seo-uslugi/content-seo`,
        siteName: seoServices.title,
        images: [{
          url: `https://stanchev.bg/images/og/og.jpg`,
          width: 1200,
          height: 630,
        }],
        locale: 'bg_BG',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Content SEO – SEO копирайтинг и съдържание за оптимизация',
        description: 'SEO копирайтинг, блог стратегия и оптимизация на текстовете за по-добри резултати в търсачките.',
        images: [`https://stanchev.bg/images/og/og.jpg`],
      },
    };
  }
  return {title: 'Content SEO – оптимизация на съдържание за класиране в Google',
      description: 'SEO копирайтинг, блог стратегия и оптимизация на текстовете за по-добри резултати в търсачките.',
      keywords,
      alternates: {
        canonical: `${baseURL}/seo-uslugi/content-seo`,
      },
      openGraph: {
        title: 'Content SEO – SEO копирайтинг и съдържание за оптимизация',
        description: 'SEO копирайтинг, блог стратегия и оптимизация на текстовете за по-добри резултати в търсачките.',
        url: `${baseURL}/seo-uslugi/content-seo`,
        siteName: seoServices.title,
        images: [{
          url: `https://stanchev.bg/images/og/og.jpg`,
          width: 1200,
          height: 630,
        }],
        locale: 'bg_BG',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Content SEO – SEO копирайтинг и съдържание за оптимизация',
        description: 'SEO копирайтинг, блог стратегия и оптимизация на текстовете за по-добри резултати в търсачките.',
        images: [`https://stanchev.bg/images/og/og.jpg`],
      },
	  };
}

export default function ContentSEOPage() {
  return (
    <>
      <Script
        id="content-seo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": "Content SEO – оптимизация на съдържание за класиране в Google",
                "description": "SEO копирайтинг, блог стратегия и оптимизация на текстовете за по-добри резултати в търсачките.",
                "url": "https://stanchev.bg/seo-uslugi/content-seo",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://stanchev.bg/images/og/og.jpg"
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://stanchev.bg/seo-uslugi/content-seo"
                },
                "author": {
                  "@type": "Person",
                  "name": "Станчев",
                  "url": "https://www.linkedin.com/in/stantcheff/",
                  "image": "https://stanchev.bg/assets/avatar.jpg"
                },
                "publisher": {
                  "@id": "https://stanchev.bg/#organization"
                }
              },
              {
                "@type": "Service",
                "serviceType": "Content SEO",
                "name": "Content SEO – оптимизация на съдържание за класиране в Google",
                "description": "Оптимизация на съдържанието за търсачки и потребители – стратегия, писане и подобрения.",
                "url": "https://stanchev.bg/seo-uslugi/content-seo",
                "provider": {
                  "@id": "https://stanchev.bg/#organization"
                }
              }
            ]
          })
        }}
      />
      <Column as="section" gap="xl" padding="xl" fillWidth>
        {/* Header */}
        <Column gap="m" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            Content SEO – оптимизирайте съдържанието си за търсачки и потребители
          </Heading>
          <Text variant="display-default-s" align="center" onBackground="neutral-weak">
            Комбинирам <strong>SEO копирайтинг</strong> и <strong>Content SEO</strong> с изчистен UX и ясна структура, за да печелите видимост в SERP, богати резултати и присъствие в AI резюмета/Overviews. Пиша кратко, полезно и машинно-четимо – Q&amp;A блокове, списъци, таблици, които се разбират от хора и алгоритми.
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

        {/* Tags */}
        <Flex gap="8" wrap horizontal="center">
          {["content seo", "seo копирайтинг", "оптимизация съдържание"].map(lbl => (
            <Tag key={lbl}>{lbl}</Tag>
          ))}
        </Flex>

        {/* Основни ползи */}
        <Column gap="l">
          <Heading as="h2">Защо Content SEO е задължителен?</Heading>
          <Text variant="body-default-l">
            Правилно изпълненият <strong>SEO копирайтинг</strong> е двигателят на <strong>Content SEO</strong>. Аз превеждам намерението на търсене в съдържание, което отговаря конкретно и проверимо, така че AI системи и търсачки да го резюмират коректно. Резултатът: повече релевантни кликове, по-висок CTR и трафик, който конвертира.
          </Text>
          <Column as="ul">
            <li>Позиционирам ви като авторитет с доказуема експертиза (E-E-A-T)</li>
            <li>Покривам всички етапи от фунията – водачи, сравнения, FAQ, продуктови страници</li>
            <li>Редуцирам bounce и повишавам ангажираността чрез ясна структура и вътрешни връзки</li>
          </Column>
        </Column>

        {/* Процес */}
        <Column gap="l">
          <Heading as="h2">Процес на Content SEO в 5 стъпки</Heading>
          <Column as="ol" gap="s">
            <li><strong>Проучвам:</strong> теми/ентитети, намерение и конкуренция за ефективен <strong>SEO копирайтинг</strong></li>
            <li><strong>Планирам:</strong> pillar/cluster карта, вътрешно свързване и schema точки за богати резултати</li>
            <li><strong>Създавам:</strong> заглавия, Q&amp;A, списъци, таблици, ясни CTA – формат, удобен за AI и хора</li>
            <li><strong>Оптимизирам:</strong> мета, хедъри, internal links, редакции и фактологична проверка</li>
            <li><strong>Измервам:</strong> позиции, CTR, покритие, rich results и присъствие в Overviews</li>
          </Column>
        </Column>

        {/* Най-чести грешки */}
        <Column gap="l">
          <Heading as="h2">Най-често срещани грешки</Heading>
          <Column as="ul">
            <li>Кратки текстове без дълбочина и намерение (&lt; 400 думи)</li>
            <li>Ориентация само към ключова дума – слаб <strong>SEO копирайтинг</strong>, ниска стойност</li>
            <li>Липса на кластерно мислене и вътрешна линк структура в <strong>Content SEO</strong></li>
            <li>Дублирани/машинни текстове без редакция → компрометиран E-E-A-T</li>
          </Column>
        </Column>

        {/* Измерване */}
        <Column gap="l">
          <Heading as="h2">Как измервам успеха на Content SEO?</Heading>
          <Text variant="body-default-l">
            Следя сигналите, по които търсачките и AI системите класират и резюмират съдържание, и ги превеждам в ясни KPI.
          </Text>
          <Column as="ul">
            <li>CTR и средна позиция на съдържателни страници (Search Console)</li>
            <li>Органични влизания и ангажираност (GA4: време, скрол, събития)</li>
            <li>Богати резултати/валидни schema и покритие на теми/ентитети</li>
            <li>Растеж на вътрешни сесии чрез смислено вътрешно свързване</li>
          </Column>
        </Column>

        {/* Чеклист */}
        <Column gap="l">
          <Heading as="h2">Чеклист за Content SEO</Heading>
          <Text>Преди публикуване се уверявам, че материалът е полезен за хора и разбираем за машини:</Text>
          <Column as="ul">
            <li>Ясни ключови фрази + покритие на свързани теми/ентитети</li>
            <li>Оптимизирани заглавия/подзаглавия и логична структура за AI резюмиране</li>
            <li>Смислени вътрешни и надеждни външни връзки за контекст и E-E-A-T</li>
            <li>Мета заглавие/описание с ценностно предложение и релевантен CTA</li>
            <li>Оптимизирани изображения (alt/формати) и валиден schema където е уместно</li>
          </Column>
        </Column>

        {/* FAQ */}
        <Heading as="h4">Често задавани въпроси</Heading>
        <SeoContentFAQ />

        {/* Call to action */}
        <Column align="center" paddingTop="xl" fillWidth>
          <RevealFx translateY="8" delay={0.2}>
            <Heading variant="display-strong-m" align="center">
              Готови ли сте да повишите органичното си присъствие?
            </Heading>
          </RevealFx>
          <Flex horizontal="center">
            <Button
              variant="primary"
              size="l"
              prefixIcon="rocket"
              href="/kontakti"
            >
              Свържи се с мен
            </Button>
          </Flex>
        </Column>
      </Column>
    </>
  );
}
