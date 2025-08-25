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
import SeoAuditFAQ from './faq';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';
import PlansSection from '@/components/PlansSection';
import { SEOPlans } from "@/data/pricing/seo-pricing";

const service = seoServices.services.find(s => s.slug === 'seo-optimizatsiya');

export async function generateMetadata() {
  if (!service) {
    return {
      title: 'SEO оптимизация с професионален подход за видимост в Google',
      description: 'SEO оптимизация за вашия бизнес! Подобрете класирането си в Google, увеличете трафика и осигурете устойчив растеж с нашите експертни SEO услуги.',
	    keywords: 'seo услуги, seo фирма, seo агенция, фирми за seo, seo услуги цени, оптимизация на сайтове, seo компания, услуги seo цена, добра seo фирма, seo оптимизация, как се прави ефективна seo оптимизация за онлайн магазин, цени за seo оптимизация на сайт за малък бизнес, добър seo консултант за оптимизация на уеб сайт',
	    alternates: {
    canonical: `${baseURL}/seo-uslugi/seo-optimizatsiya`,
  },
      openGraph: { title: 'SEO Оптимизация – повишете видимостта си в Google с професионален подход', description: 'SEO оптимизация за вашия бизнес! Подобрете класирането си в Google, увеличете трафика и осигурете устойчив растеж с нашите експертни SEO услуги.', url: `${baseURL}/seo-uslugi/seo-optimizatsiya` },
      twitter: { title: 'SEO Оптимизация – повишете видимостта си в Google с професионален подход', description: 'SEO оптимизация за вашия бизнес! Подобрете класирането си в Google, увеличете трафика и осигурете устойчив растеж с нашите експертни SEO услуги.' },
    };
  }
  return {
    title: 'SEO Оптимизация – повишете видимостта си в Google с професионален подход',
    description: 'SEO оптимизация за вашия бизнес! Подобрете класирането си в Google, увеличете трафика и осигурете устойчив растеж с нашите експертни SEO услуги.',
	keywords: 'seo оптимизация, оптимизация на сайт, seo оптимизация на онлайн магазин, seo услуги, цени за seo оптимизация, фирма за seo оптимизация, seo консултация, seo анализ сайта, ефективна seo оптимизация, seo експерт',
    openGraph: {
      title: 'SEO Оптимизация – повишете видимостта си в Google с професионален подход',
      description: 'SEO оптимизация за вашия бизнес! Подобрете класирането си в Google, увеличете трафика и осигурете устойчив растеж с нашите експертни SEO услуги.',
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
      title: 'SEO Оптимизация – повишете видимостта си в Google с професионален подход',
      description: 'SEO оптимизация за вашия бизнес! Подобрете класирането си в Google, увеличете трафика и осигурете устойчив растеж с нашите експертни SEO услуги.',
      images: [`https://stanchev.bg/images/og/og.jpg`],
    },
  };
}

export default function SeoAuditPage() {
  return (
	<>
      <Script
        id="seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            "name": "Професионална SEO Оптимизация",
            "serviceType": "SEO Оптимизация",
            "description": "Предлагам комплексни услуги по SEO оптимизация, за да подобря видимостта на вашия уебсайт в търсачките, да увелича трафика и да осигуря устойчив онлайн растеж за вашия бизнес. Включва технически анализ, оптимизация на съдържанието, линк билдинг стратегия и конкурентен анализ.",
            "provider": {
              "@type": "Organization",
              "name": "Станчев SEO",
              "url": "https://stanchev.bg/",
              "logo": "https://stanchev.bg/images/og/og.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "seo@stanchev.bg"
              }
            },
            "url": "https://stanchev.bg/seo-uslugi/seo-optimizatsiya",
            "areaServed": {
              "@type": "Place",
              "name": "България"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SEO Услуги и Пакети",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Одит и Анализ",
                    "description": "Детайлен SEO анализ на сайта с цел откриване на слаби места и изграждане на дългосрочна стратегия."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Техническа SEO Оптимизация",
                    "description": "Мобилна съвместимост, Core Web Vitals, скорост и структура на сайта."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Оптимизация на Съдържанието",
                    "description": "SEO копирайтинг, проучване на ключови думи, структура на страниците."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Линк Билдинг Стратегия",
                    "description": "Изграждане на линкове от релевантни източници и директории."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Конкурентен Анализ",
                    "description": "Анализ на конкурентни SEO фирми и стратегии."
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Еднократна SEO Оптимизация",
                  "description": "Подходящ за оптимизация на онлайн магазин или малки бизнес сайтове.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "750",
                    "priceCurrency": "BGN",
                    "unitText": "лв."
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Разширен SEO пакет + Link Building",
                  "description": "Комбинирана услуга за цялостна оптимизация на сайтове и външна SEO подкрепа.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "550",
                    "priceCurrency": "BGN",
                    "unitText": "лв./мес",
                    "valueAddedTaxIncluded": true
                  }
                }
              ]
            }
          })
        }}
      />
    <Column as="section" gap="xl" padding="xl" fillWidth>
      <Column gap="m" align="center" fillWidth>
        <Heading as="h1" variant="display-strong-l" align="center">
          SEO Оптимизация – повишете видимостта си в Google с професионален подход
        </Heading>

        <Text variant="display-default-s" align="center" onBackground="neutral-weak">
          <strong>SEO оптимизация</strong>, която превръща трафика в запитвания и продажби. Ясна стратегия, измерими KPI и съдържание, оптимизирано за <strong>AI</strong>, <strong>Google Overviews</strong> и асистенти като ChatGPT. Ако търсите цялостни <a href="/seo-uslugi">SEO услуги</a>, тук е мястото да започнете.
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
        {["SEO оптимизация", "on-page оптимизация", "линк билдинг стратегия", "Цени за SEO"].map((lbl) => (
          <Tag key={lbl} size="l">
            {lbl}
          </Tag>
        ))}
      </Flex>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Какво включва моята SEO оптимизация?
        </Heading>

        <Text variant="body-default-l">
          Работя по ясен план: техническо здраве → съдържание → авторитет → конверсия. <strong>SEO оптимизация</strong> означава: коректно индексиране, бърз сайт, теми и ключови думи по намерение, структурирани данни и смислени вътрешни линкове. Всичко е описано, измерено и приоритизирано. Целта е проста: повече видимост в Google и по-ниска цена на придобиване.
        </Text>

        <Column as="ul" gap="s" paddingLeft="l">
          <li><strong>Технически анализ</strong> – индексиране, Core Web Vitals, скорост, структура, мобилна съвместимост.</li>
          <li><strong>Оптимизация на съдържанието</strong> – SEO копирайтинг, намерение на търсене, заглавия и вътрешни линкове.</li>
          <li><strong>Линк билдинг</strong> – тематични споменавания и рич препратки, които подсилват <strong>SEO оптимизация</strong>.</li>
          <li><strong>Конкурентен анализ</strong> – какво работи при другите и как да го надскочим.</li>
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Защо да инвестирате в SEO оптимизация?
        </Heading>

        <Text variant="body-default-l">
          <strong>SEO оптимизация</strong> изгражда актив, който расте във времето. Печелите стабилна видимост, богати резултати (schema), повече кликове и по-висока конверсия. Съдържанието, форматирано ясно (въпроси/отговори, списъци, таблици), има по-голям шанс да попадне в <strong>Overviews</strong> и AI отговори.
        </Text>

      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Моят процес в 4 етапа
        </Heading>

        {["Анализ", "Стратегия", "Имплементация", "Проследяване"].map((step, i) => (
          <Flex key={i} gap="8" vertical="start">
            <Icon name="checkCircle" onBackground="brand-strong" />
            <Column gap="2">
              <Heading as="h3" variant="heading-strong-l">
                {step}
              </Heading>
              <Text variant="body-default-m">
                {step === "Анализ"
                  ? "Детайлен SEO анализ на сайта: индексиране, логически конфликти, дублирани страници, Core Web Vitals. Извеждам бързи победи и пречки."
                  : step === "Стратегия"
                  ? "Roadmap за SEO оптимизация: теми по намерение, вътрешна архитектура, линк билдинг и schema за богати резултати."
                  : step === "Имплементация"
                  ? "Приоритизирам задачите с екипа ви. Пиша/редактирам съдържание, коригирам технически детайли, изграждам релевантни линкове."
                  : "Мониторинг на позиции, покритие, CWV и конверсии. Редовни отчети и итерации за стабилен растеж."}
              </Text>
            </Column>
          </Flex>
        ))}
      </Column>
		<Column gap="l">
		<Heading as="h3" variant="display-default-m" align="center">
            Пакети и цени за SEO оптимизация
          </Heading>
<PlansSection plans={SEOPlans} />
      <Heading as="h3" variant="display-default-s" align="center">Често задавани въпроси за SEO оптимизация</Heading>
      <SeoAuditFAQ />

      <Column gap="m" align="center" paddingTop="xl">
        <Heading as="h4" variant="display-strong-m" align="center">
          Искате ли повече органичен трафик и по-добро класиране?
        </Heading>
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
</Column>		
   </>
  );
}
