import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  Icon,
  Feedback,
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
    'оптимизация съдържание'
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
            Комбинираме SEO копирайтинг, анализ на ключови фрази и UX структури, за да увеличим трафика и ангажираността на вашето съдържание.
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
            Без качествено и правилно структурирано съдържание, нито един уебсайт не може да постигне дългосрочен органичен успех.
          </Text>
          <Column as="ul">
            <li>Позиционира ви като авторитет в нишата</li>
            <li>Привлича трафик от различни етапи на потребителската пътека</li>
            <li>Намалява bounce rate и повишава ангажираността</li>
          </Column>
        </Column>

        {/* Процес */}
        <Column gap="l">
          <Heading as="h2">Процес на Content SEO в 5 стъпки</Heading>
          <Column as="ol" gap="s">
            <li><strong>Проучване:</strong> Анализ на ключови фрази, intent и конкуренция</li>
            <li><strong>Планиране:</strong> Създаване на content стратегия по етапи от фунията</li>
            <li><strong>Създаване:</strong> Копирайтинг със SEO структура, подходяща дължина и CTA</li>
            <li><strong>Оптимизация:</strong> Заглавия, мета тагове, вътрешни връзки, структура</li>
            <li><strong>Измерване:</strong> Мониторинг на класиране, трафик и ангажираност</li>
          </Column>
        </Column>

        {/* Кейсове */}
        <Column gap="l">
          <Heading as="h2">Пример от реална кампания</Heading>
          <Feedback
            title="Резултат: +74% органичен трафик за 4 месеца"
          >
            Онлайн магазин за обувки увеличи органичния си трафик с 74% след 4 месеца чрез публикуване на 12 оптимизирани блога, всеки с таргетирани ключови думи по темата "удобни обувки за работа".
          </Feedback>
        </Column>

        {/* Най-чести грешки */}
        <Column gap="l">
          <Heading as="h2">Най-често срещани грешки</Heading>
          <Column as="ul">
            <li>Прекалено кратко съдържание (&lt; 400 думи)</li>
            <li>Фокус само върху ключова дума, без потребителска стойност</li>
            <li>Липса на вътрешна линк структура</li>
            <li>Дублирано съдържание или машинен превод</li>
          </Column>
        </Column>

        {/* Измерване */}
        <Column gap="l">
          <Heading as="h2">Как измерваме успеха на Content SEO?</Heading>
          <Text variant="body-default-l">
            Използваме Google Search Console, Ahrefs и GA4, за да следим:
          </Text>
          <Column as="ul">
            <li>CTR на съдържателни страници</li>
            <li>Средна позиция в SERP</li>
            <li>Брой органични влизания</li>
            <li>Време на страница и bounce rate</li>
          </Column>
        </Column>

        {/* Чеклист */}
        <Column gap="l">
          <Heading as="h2">Чеклист за Content SEO</Heading>
          <Text>Преди да публикувате съдържание, проверете дали сте:</Text>
          <Column as="ul">
            <li>Включили таргетирани ключови фрази</li>
            <li>Оптимизирали заглавия и подзаглавия</li>
            <li>Добавили вътрешни и външни връзки</li>
            <li>Задавали мета заглавие и описание</li>
            <li>Оразмерили и оптимизирали изображения</li>
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
            Свържи се с нас
          </Button>
        </Flex>
        </Column>
      </Column>
    </>
  );
}
