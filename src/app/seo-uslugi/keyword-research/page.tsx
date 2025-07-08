// src/app/seo-uslugi/keyword-research/page.tsx

import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  Icon,
  Feedback,
} from '@once-ui-system/core';
import KeywordResearchFAQ from './faq';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';

const service = seoServices.services.find(s => s.slug === 'keyword-research');

export async function generateMetadata() {
  if (!service) {
    return {
      title: 'Keyword Research – основата на успешната SEO стратегия',
      description: 'Открийте печеливши ключови думи за бизнеса си с професионален keyword research и задълбочен анализ на конкуренцията и обема на търсене.',
	   keywords: 'ключови думи, проучване на ключови думи, изследване на ключови думи, анализ на ключови думи, инструменти за ключови думи, стратегия за ключови думи, намиране на ключови думи, сео ключови думи, оптимизация на ключови думи',
	    alternates: {
    canonical: `${baseURL}/seo-uslugi/keyword-research`,
  },
      openGraph: { title: 'Keyword Research – основата на успешната SEO стратегия', description: 'Открийте най-ценните ключови думи за вашия бизнес с професионален keyword research и анализ.', 
		  url: `${baseURL}/seo-uslugi/keyword-research` },
      twitter: { title: 'Keyword Research – основата на успешната SEO стратегия', description: 'Открийте най-ценните ключови думи за вашия бизнес с професионален keyword research и анализ.' },
    };
  }
  return {
    title: 'Keyword Research – основата на успешната SEO стратегия',
    description: 'Откриваме най-ценните ключови думи за вашия бизнес с професионален keyword research и анализ.',
	keywords: 'keyword research, проучване на ключови думи, keyword анализ, търсене на ключови думи, seo ключови думи, инструмент за ключови думи, keyword strategy, подбор на ключови думи, keyword mapping, анализ на търсене',
    openGraph: {
      title: 'Keyword Research – основата на успешната SEO стратегия',
      description: 'Откриваме най-ценните ключови думи за вашия бизнес с професионален keyword research и анализ.',
      url: `${baseURL}/seo-uslugi/${service.slug}`,
      siteName: seoServices.title,
      images: [
        {
          url: `https://stanchev.vercel.app/images/og/og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Keyword Research – основата на успешната SEO стратегия',
      description: 'Откриваме най-ценните ключови думи за вашия бизнес с професионален keyword research и анализ.',
      images: [`https://stanchev.vercel.app/images/og/og.jpg`],
    },
  };
}

export default function KeywordResearchPage() {
  return (
	  <>
<Script
  id="keyword-research-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "http://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "name": "Keyword Research – основата на всяка успешна SEO стратегия",
          "description": "Открийте печеливши ключови думи за бизнеса си с професионален keyword research и задълбочен анализ на конкуренцията и обема на търсене.",
          "url": "https://stanchev.bg/seo-uslugi/keyword-research",
          "image": {
            "@type": "ImageObject",
            "url": "https://stanchev.bg/images/og/og.jpg"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://stanchev.bg/seo-uslugi/keyword-research"
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
          "serviceType": "Keyword Research",
          "name": "Keyword Research – основата на успешната SEO стратегия",
          "description": "Откриваме най-ценните ключови думи за вашия бизнес с професионален keyword research и анализ.",
          "url": "https://stanchev.bg/seo-uslugi/keyword-research",
          "provider": {
            "@id": "https://stanchev.bg/#organization"
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "Базов Keyword Research",
              "priceCurrency": "BGN",
              "price": "320",
              "unitText": "лв.",
              "description": "Подходящ за оптимизация на сайт с ограничен обхват – малък бизнес или локален сайт.",
              "availability": "http://schema.org/InStock",
              "url": "https://stanchev.bg/kontakti"
            },
            {
              "@type": "Offer",
              "name": "Премиум Keyword Strategy + Конкурентен анализ",
              "priceCurrency": "BGN",
              "price": "850",
              "unitText": "лв.",
              "description": "Перфектен за онлайн магазини, които се стремят към дългосрочна SEO оптимизация в Google.",
              "availability": "http://schema.org/InStock",
              "url": "https://stanchev.bg/kontakti"
            }
          ]
        },
        {
          "@type": ["Organization", "ProfessionalService"],
          "@id": "https://stanchev.bg/#organization",
          "name": "Станчев SEO",
          "url": "https://stanchev.bg/",
          "logo": "https://stanchev.bg/images/og/og.jpg",
          "email": "seo@stanchev.bg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Бул. Г.М. Димитров 26",
            "addressLocality": "София",
            "addressRegion": "София",
            "postalCode": "1797",
            "addressCountry": "BG"
          },
          "sameAs": [
            "https://github.com/stantchev/",
            "https://www.linkedin.com/in/stantcheff/",
            "https://dev.to/stanchev"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "seo@stanchev.bg",
            "areaServed": "BG",
            "availableLanguage": "bg"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Какво е Keyword Research и защо е толкова важен?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Keyword Research е процесът на откриване на думи и фрази, които потребителите търсят в Google. Той е важен, защото осигурява основата за ефективна SEO стратегия, като насочва оптимизацията към реалните търсения и нужди на аудиторията."
              }
            },
            {
              "@type": "Question",
              "name": "Какви инструменти използвате за Keyword Research?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Използваме професионални SEO инструменти като Google Keyword Planner, SEMrush, Ahrefs и други, за да идентифицираме най-ценните ключови думи, анализираме обема на търсене, конкуренцията и намерението зад всяка дума."
              }
            },
            {
              "@type": "Question",
              "name": "Какво включва един Keyword Research пакет?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Един Keyword Research пакет включва задълбочено проучване на ключови думи, анализ на конкуренцията, групиране на ключови думи по теми и категории, и препоръки за тяхното внедряване в съдържанието и структурата на сайта за максимален SEO ефект."
              }
            }
          ]
        }
      ]
    })
  }}
/>
    <Column as="section" gap="xl" padding="xl" fillWidth>
      <Column gap="m" align="center" fillWidth>
        <Heading as="h1" variant="display-strong-l" align="center">
          Keyword Research – основата на всяка успешна SEO стратегия
        </Heading>

        <Text variant="display-default-s" align="center" onBackground="neutral-weak">
          Без правилно проучване на ключови думи, дори най-добрата SEO оптимизация може да се окаже неефективна. Изграждането на стабилна основа започва именно от тук – анализ на потребителските търсения, конкуренцията и потенциала за трафик.
        </Text>

        <Flex horizontal="center">
          <Button
            variant="primary"
            size="l"
            href="/kontakti"
            prefixIcon="search"
            data-border="rounded"
          >
            Заяви безплатна SEO консултация
          </Button>
        </Flex>
      </Column>

      <Flex gap="8" wrap horizontal="center">
        {["SEO оптимизация Google", "линк билдинг стратегия", "on-page оптимизация", "ppc реклама"].map((lbl) => (
          <Tag key={lbl} size="l">
            {lbl}
          </Tag>
        ))}
      </Flex>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Какво представлява keyword research?
        </Heading>

        <Text variant="body-default-l">
          Keyword research е процесът по откриване на думите и фразите, които реалните потребители въвеждат в Google. Това е критична част от всяка SEO стратегия, защото позволява на сайта ви да бъде позициониран спрямо реалното търсене.
        </Text>

        <Text variant="body-default-l">
          Една добра SEO фирма ще използва keyword research, за да формулира план за оптимизация на сайт, който е съобразен както с алгоритмите на търсачките, така и с реалните нужди на вашата аудитория.
        </Text>

        <Column as="ul" gap="s" paddingLeft="l">
          <li><strong>Анализ на търсенията</strong> – идентифициране на термини с висок потенциал за трафик.</li>
          <li><strong>Оценка на конкуренцията</strong> – кои сайтове вече се класират и какво съдържание предлагат.</li>
          <li><strong>Групиране на ключови думи</strong> – създаване на теми и подстраници.</li>
          <li><strong>Избор на приоритети</strong> – кои думи водят до конверсии и продажби.</li>
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h3" variant="display-default-m">
          Защо keyword research е толкова важен?
        </Heading>

        <Text variant="body-default-l">
          Без качествено проучване на ключови думи, дори една ефективна линк билдинг стратегия или интернет реклама няма да доведат до реална видимост. Keyword research дава яснота какво точно търси вашият клиент и как можете да му предложите най-доброто съдържание.
        </Text>

        <Feedback
          title="Съвет от SEO консултант"
          description="Не залагайте на обем на търсене, а на релевантност и намерение зад всяка ключова дума."
        />
      </Column>

      <Column gap="l">
        <Heading as="h3" variant="display-default-m">
          Как изглежда процесът при нас
        </Heading>

        {["Проучване", "Анализ", "Групиране", "Внедряване"].map((step, i) => (
          <Flex key={i} gap="8" vertical="start">
            <Icon name="checkCircle" onBackground="brand-strong" />
            <Column gap="2">
              <Heading as="h3" variant="heading-strong-l">
                {step}
              </Heading>
              <Text variant="body-default-m">
                {step === "Проучване"
                  ? "Използваме професионални SEO инструменти и данни от Google, за да идентифицираме най-ценните ключови думи."
                  : step === "Анализ"
                  ? "Оценяваме конкурентната среда, обема на търсене и намерението зад всяка дума."
                  : step === "Групиране"
                  ? "Създаваме теми, категории и страници, които отговарят на нуждите на потребителя."
                  : "Внедряваме ключовите думи в съдържание, meta елементи и вътрешна структура за максимален SEO рейтинг."}
              </Text>
            </Column>
          </Flex>
        ))}
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Примерни пакети за keyword research
        </Heading>

        <Column gap="m">
          <Flex
            background="surface"
            border="neutral-alpha-medium"
            radius="m"
            padding="l"
            gap="m"
          >
            <Column flex={8} gap="s">
              <Heading as="h3" variant="heading-strong-l">
                Базов Keyword Research
              </Heading>
              <Text variant="body-default-m">
                Подходящ за оптимизация на сайт с ограничен обхват – малък бизнес или локален сайт.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading as="h4" variant="display-strong-s">от 320&nbsp;лв.</Heading>
            </Column>
          </Flex>

          <Flex
            background="surface"
            border="neutral-alpha-medium"
            radius="m"
            padding="l"
            gap="m"
          >
            <Column flex={8} gap="s">
              <Heading as="h3" variant="heading-strong-l">
                Премиум Keyword Strategy + Конкурентен анализ
              </Heading>
              <Text variant="body-default-m">
                Перфектен за онлайн магазини, които се стремят към дългосрочна SEO оптимизация в Google.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading as="h4" variant="display-strong-s">от 850&nbsp;лв.</Heading>
            </Column>
          </Flex>
        </Column>
      </Column>

      <Heading as="h3" variant="display-default-s">
        Често задавани въпроси (ЧЗВ) за Keyword Research
      </Heading>

      <KeywordResearchFAQ />

      <Column gap="m" align="center" paddingTop="xl">
        <Heading as="h4" variant="display-strong-m" align="center">
          Искате ли ключовите думи да работят за вас?
        </Heading>
        <Flex horizontal="center">
          <Button
            variant="primary"
            size="l"
            prefixIcon="rocket"
            href="/kontakti"
          >
            Свържи се с наш SEO експерт
          </Button>
        </Flex>
      </Column>
    </Column>
	  </>
  );
}
