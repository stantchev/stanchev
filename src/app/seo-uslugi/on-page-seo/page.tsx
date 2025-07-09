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
import OnPageFaq from './faq';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';

const service = seoServices.services.find(s => s.slug === 'on-page-seo');

export async function generateMetadata() {
  if (!service) {
    return {
      title: 'On-Page SEO – оптимизация на структура и съдържание',
      description: 'Подобрете позициите си в Google с on-page SEO чрез оптимизация на структурата, мета описанията, заглавията и съдържанието на страниците ви.',
      keywords: 'on-page оптимизация, seo оптимизация на страница, оптимизация на съдържание, seo текст, seo копирайтинг, оптимизация на мета тагове, оптимизация на заглавия, seo on-page, on-page seo',
	alternates: {
    canonical: `${baseURL}/seo-uslugi/on-page-seo`,
  },    
      openGraph: { title: 'On-Page SEO – оптимизация на структура и съдържание', description: 'Подобрете класирането си с on-page SEO: оптимизация на структура, мета данни и съдържание.', url: `${baseURL}/seo-uslugi/on-page-seo` },
      twitter: { title: 'On-Page SEO – оптимизация на структура и съдържание', description: 'Подобрете класирането си с on-page SEO: оптимизация на структура, мета данни и съдържание.' },
    };
  }
  return {
    title: 'On-Page SEO – оптимизация на структура и съдържание',
    description: 'Подобрете класирането си с on-page SEO: оптимизация на структура, мета данни и съдържание.',
    keywords: 'on-page seo, онпейдж оптимизация, оптимизация на съдържание, seo тагове, meta description, заглавни тагове, вътрешно линкване, ключови думи в съдържанието, структура на url, html оптимизация',
	openGraph: {
      title: 'On-Page SEO – оптимизация на структура и съдържание',
      description: 'Подобрете класирането си с on-page SEO: оптимизация на структура, мета данни и съдържание.',
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
      title: 'On-Page SEO – оптимизация на структура и съдържание',
      description: 'Подобрете класирането си с on-page SEO: оптимизация на структура, мета данни и съдържание.',
      images: [`https://stanchev.bg/images/og/og.jpg`],
    },
  };
}

export default function OnPageSeoPage() {
  return (
	  <>
	  <Script
  id="on-page-seo-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "http://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "name": "On-Page SEO – оптимизация на структура и съдържание",
          "description": "Подобрете класирането си с on-page SEO: оптимизация на структура, мета данни и съдържание.",
          "url": "https://stanchev.bg/seo-uslugi/on-page-seo",
          "image": {
            "@type": "ImageObject",
            "url": "https://stanchev.bg/images/og/og.jpg"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://stanchev.bg/seo-uslugi/on-page-seo"
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
          "serviceType": "On-Page SEO",
          "name": "On-Page SEO – Оптимизация на структура и съдържание",
          "description": "Оптимизация на структурата, мета данни и съдържание.",
          "url": "https://stanchev.bg/seo-uslugi/on-page-seo",
          "provider": {
            "@id": "https://stanchev.bg/#organization"
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "Базов пакет On-Page SEO",
              "priceCurrency": "BGN",
              "price": "480",
              "unitText": "лв.",
              "description": "Подходящ за оптимизация на сайт с ограничен бюджет.",
              "availability": "http://schema.org/InStock",
              "url": "https://stanchev.bg/kontakti"
            },
            {
              "@type": "Offer",
              "name": "Разширен пакет On-Page SEO",
              "priceCurrency": "BGN",
              "price": "950",
              "unitText": "лв.",
              "description": "Включва анализи и персонален SEO експерт за поддръжка.",
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
              "name": "Какво представлява On-Page SEO оптимизацията?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On-page SEO включва оптимизация на елементи директно на вашата уеб страница, като съдържание, мета тагове, URL структури, изображения и потребителско изживяване, за да подобри видимостта в търсачките."
              }
            },
            {
              "@type": "Question",
              "name": "Защо On-Page SEO е важно за моя сайт?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "On-page SEO е от съществено значение, защото помага на търсачките да разберат темата и релевантността на вашето съдържание. Добрата on-page оптимизация подобрява потребителското изживяване, увеличава органичния трафик и подпомага по-високо класиране."
              }
            },
            {
              "@type": "Question",
              "name": "Какви са основните стъпки при On-Page оптимизация?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Основните стъпки включват анализ на текущото състояние, планиране на стратегия, оптимизация на заглавия, мета описания, съдържание, изображения, вътрешно линкване и подобряване на скоростта на зареждане и мобилната съвместимост. "
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
          On-Page SEO – основата на <br /> ефективната SEO оптимизация
        </Heading>

        <Text variant="display-default-s" align="center" onBackground="neutral-weak">
          Ако искате да подобрите класирането на сайта си в Google и да постигнете висока SEO позиция, on-page оптимизацията е първата и най-важна стъпка. Без правилна структура и съдържание, нито линк билдинг стратегията, нито интернет рекламата ще бъдат достатъчни.
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
        {["seo копирайтинг", "meta оптимизация", "структура на сайт", "ui/ux дизайн"].map((lbl) => (
          <Tag key={lbl} size="l">
            {lbl}
          </Tag>
        ))}
      </Flex>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Какво включва on-page SEO?
        </Heading>

        <Text variant="body-default-l">
          On-page оптимизацията е сърцето на всяка ефективна SEO оптимизация. Тя включва технически и съдържателни аспекти, които гарантират, че сайтът ви е максимално достъпен и релевантен за потребителите и търсачките. Като SEO специалист, имам дългогодишен опит в оптимизация на сайтове за Google.
        </Text>

        <Column as="ul" gap="s" paddingLeft="l">
          <li><strong>Анализ на структурата</strong> – логично подредено меню, вътрешни връзки, URL-и и регистрация в директории.</li>
          <li><strong>SEO копирайтинг</strong> – съдържание, което интегрира ключови думи естествено, без пренасищане.</li>
          <li><strong>Оптимизация на изображения</strong> – alt тагове, компресия, подходящи формати.</li>
          <li><strong>Мета данни</strong> – правилно написани title, description и schema markup.</li>
          <li><strong>UX/UI дизайн</strong> – мобилна съвместимост, бързо зареждане и изчистено потребителско изживяване.</li>
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Защо on-page SEO е толкова важно?
        </Heading>

        <Text variant="body-default-l">
          Без стабилен on-page SEO, всички други усилия за SEO оптимизация в Google ще дават ограничен резултат. Правилно изградена вътрешна структура и качествено съдържание помагат на Google оптимизатора да класира сайта ви по-напред. Това намалява разходите за ppc реклама и повишава рейтинга на вашия сайт.
        </Text>

        <Feedback
          title="Съвет"
          description="Редовната on-page оптимизация води до траен ръст на органичния трафик, особено за онлайн магазини."
        />
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Стъпки при on-page оптимизиране
        </Heading>

        {["Анализ", "Планиране", "Оптимизация", "Проследяване"].map((step, i) => (
          <Flex key={i} gap="8" vertical="start">
            <Icon name="checkCircle" onBackground="brand-strong" />
            <Column gap="2">
              <Heading as="h3" variant="heading-strong-l">
                {step}
              </Heading>
              <Text variant="body-default-m">
                {step === "Анализ"
                  ? "Провеждаме SEO анализ на сайта – технически грешки, съдържание, мета данни."
                  : step === "Планиране"
                  ? "Създаваме индивидуална SEO стратегия с ясно разписани цели."
                  : step === "Оптимизация"
                  ? "Извършваме всички on-page подобрения – от структури до SEO копирайтинг."
                  : "Следим ключовите показатели и адаптираме стратегията при нужда."}
              </Text>
            </Column>
          </Flex>
        ))}
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Цени за on-page SEO оптимизация
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
                Базов пакет
              </Heading>
              <Text variant="body-default-m">
                Подходящ за оптимизация на сайт с ограничен бюджет.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading as="h4" variant="display-strong-s">от 480&nbsp;лв.</Heading>
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
                Разширен пакет
              </Heading>
              <Text variant="body-default-m">
                Включва анализи и персонален SEO експерт за поддръжка.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading as="h4" variant="display-strong-s">от 950&nbsp;лв.</Heading>
            </Column>
          </Flex>
        </Column>
      </Column>

    <Heading as="h3" variant="display-default-s">Често Задавани Въпроси (ЧЗВ) за on-page SEO</Heading>
    <OnPageFaq />

      <Column gap="m" align="center" paddingTop="xl">
        <Heading as="h4" variant="display-strong-m" align="center">
          Искате сайтът ви да се класира по-добре в Google?
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
