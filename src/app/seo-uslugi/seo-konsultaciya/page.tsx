// src/app/seo-uslugi/seo-konsultaciya/page.tsx

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
import SeoConsultationFAQ from './faq';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';

const service = seoServices.services.find(s => s.slug === 'seo-konsultaciya');

export async function generateMetadata() {
  if (!service) {
    return {
      title: 'SEO Консултация – експертна помощ за вашия сайт',
      description: 'Безплатна персонализирана SEO консултация с анализ на сайта ви и ясна стратегия за по-добро класиране, повече трафик и реални резултати.',
	    keywords: 'seo консултация, seo консултант, seo съвети, seo експерт, консултация по seo, seo анализ, сео консултант, сео анализ онлайн',
	    alternates: {
    canonical: `${baseURL}/seo-uslugi/seo-konsultaciya`,
  },
      openGraph: { title: 'SEO Консултация – експертна помощ за вашия сайт', description: 'Получете персонализирана SEO консултация и стратегия за по-добро класиране и повече трафик.', url: `${baseURL}/seo-uslugi/seo-konsultaciya` },
      twitter: { title: 'SEO Консултация – експертна помощ за вашия сайт', description: 'Получете персонализирана SEO консултация и стратегия за по-добро класиране и повече трафик.' },
    };
  }
  return {
    title: 'SEO Консултация – експертна помощ за вашия сайт',
    description: 'Безплатна персонализирана SEO консултация и стратегия за по-добро класиране и повече трафик.',
    keywords: 'seo консултация, seo консултант, seo експерт, seo услуги, персонална seo стратегия, анализ на сайт, seo одит, консултация за оптимизация на сайт, seo съвети, професионален seo анализ',
	alternates: {
    canonical: `${baseURL}/seo-uslugi/seo-konsultaciya`,
  },
	  openGraph: {
      title: 'SEO Консултация – експертна помощ за вашия сайт',
      description: 'Безплатна персонализирана SEO консултация и стратегия за по-добро класиране и повече трафик.',
      url: `${baseURL}/seo-uslugi/${service.slug}`,
      siteName: seoServices.title,
      images: [
        {
          url: `https://stanchev.bg/images/og/og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'SEO Консултация – експертна помощ за вашия сайт',
      description: 'Безплатна персонализирана SEO консултация и стратегия за по-добро класиране и повече трафик.',
      images: [`https://stanchev.bg/images/og/og.jpg`],
    },
  };
}

export default function SeoConsultationPage() {
  return (
     <>
      <Script
        id="seo-consultation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": "SEO Консултация – най-бързият начин да разберете защо сайтът ви не се класира",
                "description": "Независимо дали имате нужда от технически съвет, преглед на структурата или стратегия за съдържание – SEO консултацията е идеалният начин да получите персонален план за действие.",
                "url": "https://stanchev.bg/seo-uslugi/seo-konsultaciya",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://stanchev.bg/images/og/og.jpg"
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://stanchev.bg/seo-uslugi/seo-konsultaciya"
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
                "serviceType": "SEO Консултация",
                "name": "Индивидуална SEO Консултация",
                "description": "До 30 минути анализ и съвети, насочени към най-важните проблеми и възможности на сайта ви.",
                "url": "https://stanchev.bg/seo-uslugi/seo-konsultaciya",
                "provider": {
                  "@id": "https://stanchev.bg/#organization" 
                },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "BGN",
                  "price": "0", // Защото е "от 0 лв."
                  "name": "Безплатна SEO консултация",
                  "availability": "http://schema.org/InStock", 
                  "url": "https://stanchev.bg/kontakti" 
                }
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
                    "name": "Колко струва една SEO консултация при Вас?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Консултацията до 1 (един) час е напълно безплатна. За един час се броят 60 (шестдесет) минути от началото на консултацията."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Какви точно SEO услуги предлага Станчев SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Станчев SEO предлага цялостни SEO услуги, които включват детайлен технически одит на уебсайта, оптимизация на съдържанието (on-page SEO), изграждане на качествени връзки (off-page SEO), анализ на ключови думи и мониторинг на конкуренцията. Ние се фокусираме върху дългосрочни резултати и устойчив растеж на органичния трафик, като нашата SEO стратегия е съобразена с най-новите алгоритми."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "С какво услугите на Станчев SEO се отличават от конкурентните?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Станчев SEO се отличава с персонализиран подход към всеки клиент и прозрачност в работата. Ние не просто изпълняваме задачи, а задълбочено разбираме вашите бизнес цели и адаптираме стратегията си. Използваме утвърдени и етични (white-hat) SEO практики, гарантиращи сигурност и устойчивост на резултатите ви. Работим като отдаден SEO консултант за вашия онлайн успех."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "За какъв тип бизнес са подходящи SEO услугите на Станчев SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Нашите SEO оптимизации са подходящи за широк кръг бизнеси, които искат да увеличат онлайн видимостта си. Работим успешно както с малки и средни предприятия, така и с големи компании от различни сектори, включително електронни магазини, фирмени уебсайтове и блогове. Важно е да имате желание за дългосрочна инвестиция в дигиталния си маркетинг. За нас е важно да сме вашата надеждна SEO фирма."
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
          SEO Консултация – най-бързият начин да разберете защо сайтът ви не се класира
        </Heading>

        <Text variant="display-default-s" align="center" onBackground="neutral-weak">
          Независимо дали имате нужда от технически съвет, преглед на структурата или стратегия за съдържание – SEO консултацията е идеалният начин да получите персонален план за действие.
        </Text>

        <Flex horizontal="center">
          <Button
            variant="primary"
            size="l"
            href="/kontakti"
            prefixIcon="search"
            data-border="rounded"
          >
            Заяви безплатна консултация
          </Button>
        </Flex>
      </Column>

      <Flex gap="8" wrap horizontal="center">
        {["SEO одит", "on-page оптимизация", "линк билдинг", "техническа SEO проверка"].map((lbl) => (
          <Tag key={lbl} size="l">
            {lbl}
          </Tag>
        ))}
      </Flex>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Какво включва SEO консултацията?
        </Heading>

        <Text variant="body-default-l">
          Консултацията е насочена към разбиране на настоящото състояние на вашия уеб сайт и създаване на ефективни насоки за подобрение. Без значение дали сте собственик на малък бизнес или мащабна платформа, ще получите индивидуално внимание и реални решения.
        </Text>

        <Column as="ul" gap="s" paddingLeft="l">
          <li><strong>Анализ на състоянието</strong> – технически преглед, съдържание, линкове и структура.</li>
          <li><strong>Оценка на видимостта</strong> – текущи позиции в търсачките и потенциал за растеж.</li>
          <li><strong>Индивидуални препоръки</strong> – конкретни действия с бърз ефект.</li>
          <li><strong>Съвети за дългосрочна стратегия</strong> – как да изградите силно SEO присъствие.</li>
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h3" variant="display-default-m">
          Кога е правилният момент за SEO консултация?
        </Heading>

        <Text variant="body-default-l">
          Най-доброто време да потърсите SEO консултант е още преди проблемите да станат критични. Консултацията ви дава насока какво да промените, как да оптимизирате и какво да избегнете, за да спестите време, средства и пропуснати възможности.
        </Text>

        <Feedback
          title="Препоръка"
          description="Ако подготвяте нов сайт, включете SEO консултацията в етапа на планиране – това ще ви даде огромно предимство."
        />
      </Column>

      <Column gap="l">
        <Heading as="h3" variant="display-default-m">
          Как протича самата консултация?
        </Heading>

        {["Заявка", "Предварителен анализ", "Среща онлайн", "Препоръки"].map((step, i) => (
          <Flex key={i} gap="8" vertical="start">
            <Icon name="checkCircle" onBackground="brand-strong" />
            <Column gap="2">
              <Heading as="h4" variant="heading-strong-l">
                {step}
              </Heading>
              <Text variant="body-default-m">
                {step === "Заявка"
                  ? "Изпращате запитване през сайта и уточняваме нуждите ви."
                  : step === "Предварителен анализ"
                  ? "Преглеждаме вашия сайт с помощта на професионални SEO инструменти."
                  : step === "Среща онлайн"
                  ? "Провеждаме кратка среща за обсъждане на резултатите и въпроси."
                  : "Изпращаме ви персонализиран документ с конкретни стъпки и съвети."
                }
              </Text>
            </Column>
          </Flex>
        ))}
      </Column>

      <Column gap="l">
        <Heading as="h3" variant="display-default-m">
          Цена за SEO консултация
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
                Индивидуална консултация
              </Heading>
              <Text variant="body-default-m">
                До 30 минути анализ и съвети, насочени към най-важните проблеми и възможности на сайта ви.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading as="h4" variant="display-strong-s">от 0&nbsp;лв.</Heading>
            </Column>
          </Flex>
        </Column>
      </Column>

      <Heading as="h3" variant="display-default-s">
        Често задавани въпроси (ЧЗВ) за SEO консултацията
      </Heading>

      <SeoConsultationFAQ />

      <Column gap="m" align="center" paddingTop="xl">
        <Heading as="h4" variant="display-strong-m" align="center">
          Искате ли експертно мнение за SEO състоянието на сайта ви?
        </Heading>
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
