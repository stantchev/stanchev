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
import OffPageSeoFaq from './faq';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';

const service = seoServices.services.find(s => s.slug === 'off-page-seo');

export async function generateMetadata() {
  if (!service) {
    return {
      title: 'Off-Page SEO – изграждане на авторитет и линк профил',
      description: 'Изградете силен линк профил с off-page SEO стратегии. Повишете авторитета на сайта си и се класирайте по-високо в Google с качествени обратни връзки.',
      keywords: 'off-page seo, офпейдж оптимизация, линк билдинг, обратни връзки, авторитет на сайт, seo линкове, външни линкове, link building, off-page оптимизация',
      alternates: {
        canonical: `${baseURL}/seo-uslugi/off-page-seo`,
      },    
      openGraph: { 
        title: 'Off-Page SEO – изграждане на авторитет и линк профил', 
        description: 'Изградете силен линк профил с off-page SEO стратегии. Повишете авторитета на сайта си и се класирайте по-високо в Google.', 
        url: `${baseURL}/seo-uslugi/off-page-seo` 
      },
      twitter: { 
        title: 'Off-Page SEO – изграждане на авторитет и линк профил', 
        description: 'Изградете силен линк профил с off-page SEO стратегии. Повишете авторитета на сайта си и се класирайте по-високо в Google.' 
      },
    };
  }
  return {
    title: 'Off-Page SEO – изграждане на авторитет и линк профил',
    description: 'Изградете силен линк профил с off-page SEO стратегии. Повишете авторитета на сайта си и се класирайте по-високо в Google.',
    keywords: 'off-page seo, офпейдж оптимизация, линк билдинг, обратни връзки, авторитет на сайт, seo линкове, външни линкове, link building, off-page оптимизация, качествени линкове, seo авторитет',
    alternates: {
      canonical: `${baseURL}/seo-uslugi/off-page-seo`,
    },   
    openGraph: {
      title: 'Off-Page SEO – изграждане на авторитет и линк профил',
      description: 'Изградете силен линк профил с off-page SEO стратегии. Повишете авторитета на сайта си и се класирайте по-високо в Google.',
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
      title: 'Off-Page SEO – изграждане на авторитет и линк профил',
      description: 'Изградете силен линк профил с off-page SEO стратегии. Повишете авторитета на сайта си и се класирайте по-високо в Google.',
      images: [`https://stanchev.bg/images/og/og.jpg`],
    },
  };
}

export default function OffPageSeoPage() {
  return (
    <>
    <Script
      id="off-page-seo-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "name": "Off-Page SEO – изграждане на авторитет и линк профил",
              "description": "Изградете силен линк профил с off-page SEO стратегии. Повишете авторитета на сайта си и се класирайте по-високо в Google.",
              "url": "https://stanchev.bg/seo-uslugi/off-page-seo",
              "image": {
                "@type": "ImageObject",
                "url": "https://stanchev.bg/images/og/og.jpg"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://stanchev.bg/seo-uslugi/off-page-seo"
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
              "serviceType": "Off-Page SEO",
              "name": "Off-Page SEO – Изграждане на авторитет и линк профил",
              "description": "Изграждане на силен линк профил и авторитет в Google.",
              "url": "https://stanchev.bg/seo-uslugi/off-page-seo",
              "provider": {
                "@id": "https://stanchev.bg/#organization"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Базов пакет Off-Page SEO",
                  "priceCurrency": "BGN",
                  "price": "680",
                  "unitText": "лв.",
                  "description": "Подходящ за изграждане на начален линк профил.",
                  "availability": "http://schema.org/InStock",
                  "url": "https://stanchev.bg/kontakti"
                },
                {
                  "@type": "Offer",
                  "name": "Разширен пакет Off-Page SEO",
                  "priceCurrency": "BGN",
                  "price": "1250",
                  "unitText": "лв.",
                  "description": "Включва стратегическо планиране и персонален SEO експерт.",
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
                  "name": "Какво представлява Off-Page SEO оптимизацията?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Off-page SEO включва всички дейности извън вашия уебсайт, които влияят на класирането му в търсачките. Това включва изграждане на линкове, социални сигнали, упоминания в медиите и общо изграждане на авторитет в индустрията."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Защо Off-Page SEO е важно за моя сайт?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Off-page SEO е от съществено значение, защото показва на Google, че други сайтове и потребители смятат вашето съдържание за ценено и достоверно. Качествените обратни връзки са един от най-важните фактори за класиране в Google."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Какви са основните стъпки при Off-Page оптимизация?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Основните стъпки включват анализ на текущия линк профил, планиране на стратегия за изграждане на линкове, създаване на качествено съдържание за споделяне, изграждане на отношения с други сайтове и проследяване на резултатите."
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
            Off-Page SEO – изграждане на <br /> авторитет и линк профил
          </Heading>

          <Text variant="display-default-s" align="center" onBackground="neutral-weak">
            Ако искате да се класирате по-високо в Google и да изградите траен авторитет, off-page SEO е ключът към успеха. Без качествени обратни връзки и силен линк профил, дори най-доброто on-page оптимизиране няма да донесе желаните резултати.
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
          {["линк билдинг", "авторитет", "обратни връзки", "социални сигнали"].map((lbl) => (
            <Tag key={lbl} size="l">
              {lbl}
            </Tag>
          ))}
        </Flex>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Какво включва off-page SEO?
          </Heading>

          <Text variant="body-default-l">
            Off-page оптимизацията е изграждането на авторитет и доверие извън границите на вашия сайт. Тя включва стратегии, които показват на Google, че други сайтове и потребители смятат вашето съдържание за ценено и достоверно. Като SEO специалист с дългогодишен опит, знам как да изградя ефективен линк профил.
          </Text>

          <Column as="ul" gap="s" paddingLeft="l">
            <li><strong>Линк билдинг</strong> – изграждане на качествени обратни връзки от авторитетни сайтове.</li>
            <li><strong>Създаване на съдържание</strong> – публикации, които други сайтове искат да споделят.</li>
            <li><strong>Социални сигнали</strong> – активност в социалните мрежи и споделяния.</li>
            <li><strong>Локални упоминания</strong> – регистрация в директории и упоминания в медиите.</li>
            <li><strong>Партньорства</strong> – изграждане на отношения с други сайтове в индустрията.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Защо off-page SEO е толкова важно?
          </Heading>

          <Text variant="body-default-l">
            Google използва обратните връзки като "гласове за доверие" за вашия сайт. Колкото повече качествени линкове имате, толкова по-високо ще се класирате. Без off-page SEO стратегия, дори най-доброто on-page оптимизиране няма да донесе устойчив резултат в Google.
          </Text>

          <Feedback
            title="Съвет"
            description="Качествените линкове от авторитетни сайтове са по-ценни от стотици евтини линкове от директории."
          />
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Стъпки при off-page оптимизиране
          </Heading>

          {["Анализ", "Стратегия", "Изпълнение", "Проследяване"].map((step, i) => (
            <Flex key={i} gap="8" vertical="start">
              <Icon name="checkCircle" onBackground="brand-strong" />
              <Column gap="2">
                <Heading as="h3" variant="heading-strong-l">
                  {step}
                </Heading>
                <Text variant="body-default-m">
                  {step === "Анализ"
                    ? "Анализираме текущия линк профил и конкуренцията – кои са вашите силни и слаби страни."
                    : step === "Стратегия"
                    ? "Създаваме индивидуална off-page стратегия с ясни цели и тактики за изграждане на линкове."
                    : step === "Изпълнение"
                    ? "Изпълняваме всички off-page дейности – от създаване на съдържание до изграждане на линкове."
                    : "Следим ключовите показатели и адаптираме стратегията според резултатите."}
                </Text>
              </Column>
            </Flex>
          ))}
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Цени за off-page SEO оптимизация
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
                  Подходящ за изграждане на начален линк профил.
                </Text>
              </Column>
              <Column flex={4} align="end">
                <Heading as="h4" variant="display-strong-s">от 680&nbsp;лв.</Heading>
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
                  Включва стратегическо планиране и персонален SEO експерт.
                </Text>
              </Column>
              <Column flex={4} align="end">
                <Heading as="h4" variant="display-strong-s">от 1250&nbsp;лв.</Heading>
              </Column>
            </Flex>
          </Column>
        </Column>

      <Heading as="h3" variant="display-default-s">Често Задавани Въпроси (ЧЗВ) за off-page SEO</Heading>
      <OffPageSeoFaq />

        <Column gap="m" align="center" paddingTop="xl">
          <Heading as="h4" variant="display-strong-m" align="center">
            Искате да изградите силен линк профил?
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
