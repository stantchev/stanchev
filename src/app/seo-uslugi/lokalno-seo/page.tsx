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
import { baseURL, seoServices } from '@/resources';
import LocalSEOFAQ from './faq';
import Script from 'next/script';

const service = seoServices.services.find(s => s.slug === 'lokalno-seo');

export async function generateMetadata() {
  return {
    title: 'Локално SEO – доминирай в Google търсенията във вашия град',
    description: 'Привлечете клиенти от вашия регион с професионална локална SEO оптимизация. Научете как добър SEO консултант подобрява присъствието ви в местните резултати.',
    keywords: 'локално seo, seo консултант, seo оптимизация google, линк билдинг стратегия, оптимизация на сайт цени',
    alternates: {
      canonical: `${baseURL}/seo-uslugi/lokalno-seo`,
    },
    openGraph: {
      title: 'Локално SEO – доминирай в Google търсенията във вашия град',
      description: 'Превърнете се в №1 избор в местните търсения чрез ефективна локална SEO стратегия и оптимизация на Google профил.',
      url: `${baseURL}/seo-uslugi/lokalno-seo`,
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
      title: 'Локално SEO – доминирай в Google търсенията във вашия град',
      description: 'Превърнете се в №1 избор в местните търсения чрез ефективна локална SEO стратегия и оптимизация на Google профил.',
      images: [`https://stanchev.bg/images/og/og.jpg`],
    },
  };
}

export default function LocalSEOPage() {
  return (
    <>
    <Script
  id="local-seo-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "http://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "name": "Локално SEO – доминирай в търсенията около теб",
          "description": "Привлечете клиенти от вашия регион с професионална локална SEO оптимизация. Научете как добър SEO консултант подобрява присъствието ви в местните резултати.",
          "url": "https://stanchev.bg/seo-uslugi/lokalno-seo",
          "image": {
            "@type": "ImageObject",
            "url": "https://stanchev.bg/images/og/og.jpg"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://stanchev.bg/seo-uslugi/lokalno-seo"
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
          "serviceType": "Локално SEO",
          "name": "Локално SEO – Доминирай в търсенията около теб",
          "description": "Оптимизация за местни търсения в Google, привличане на повече трафик от района ви.",
          "url": "https://stanchev.bg/seo-uslugi/lokalno-seo",
          "provider": {
            "@id": "https://stanchev.bg/#organization"
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "Базов Локален SEO пакет",
              "priceCurrency": "BGN",
              "price": "300",
              "unitText": "лв.",
              "description": "Идеален за малки бизнеси – включва основна регистрация в Google Business и базов линк билдинг.",
              "availability": "http://schema.org/InStock",
              "url": "https://stanchev.bg/kontakti"
            },
            {
              "@type": "Offer",
              "name": "Премиум Локално SEO + Онлайн репутация",
              "priceCurrency": "BGN",
              "price": "750",
              "unitText": "лв.",
              "description": "Подходящ за бизнеси с конкуренция – включва разширен SEO анализ, стратегия, линк билдинг и управление на отзиви.",
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
            // Assuming LocalSEOFAQ component will render these, if not, hardcode them here.
            // Including placeholder questions based on the page content to ensure the FAQPage is valid.
            {
              "@type": "Question",
              "name": "Какво е локално SEO и за кого е подходящо?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Локалното SEO е оптимизация на уебсайт и Google профил за местни търсения. Подходящо е за физически обекти като магазини, ресторанти, салони или офиси, които разчитат на клиенти от конкретен град или район."
              }
            },
            {
              "@type": "Question",
              "name": "Какви са ключовите елементи на ефективната локална SEO стратегия?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Основните елементи включват регистрация и оптимизация в Google Business Profile, създаване на локализирано съдържание, оптимизация на Google Maps, изграждане на локални линкове (цитации) и управление на онлайн репутацията (отзиви)."
              }
            },
            {
              "@type": "Question",
              "name": "Колко време отнема да се видят резултати от локалното SEO?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Времето за резултати варира, но обикновено можете да очаквате видими подобрения в рамките на 3-6 месеца. Редовната работа и поддръжка са ключови за дългосрочен успех."
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
          Локално SEO – доминирай в търсенията около теб
        </Heading>

        <Text variant="display-default-s" align="center" onBackground="neutral-weak">
          Имате бизнес, ориентиран към местни клиенти? Локалната SEO оптимизация е ключът към по-добро класиране в Google и привличане на повече трафик от района ви. Опитен SEO консултант ще изгради персонализирана стратегия, съобразена с вашето местоположение, конкуренция и ниша.
        </Text>

        <Flex horizontal="center">
          <Button
            variant="primary"
            size="l"
            href="/kontakti"
            prefixIcon="map"
            data-border="rounded"
          >
            Вземи локална SEO консултация
          </Button>
        </Flex>
      </Column>

      <Flex gap="8" wrap horizontal="center">
        {["Google My Business", "SEO оптимизация Google", "линк билдинг стратегия", "SEO обучение", "оптимизация на сайт цени"].map((lbl) => (
          <Tag key={lbl} size="l">
            {lbl}
          </Tag>
        ))}
      </Flex>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Какво е локално SEO и защо е важно?
        </Heading>

        <Text variant="body-default-l">
          Локално SEO е процесът на оптимизация на вашия уебсайт и Google профил, така че да се показвате пред хора, които търсят продукти или услуги във вашия район. Това е особено важно за физически обекти като магазини, ресторанти, салони или офиси.
        </Text>

        <Text variant="body-default-l">
          Без качествено локално SEO, бизнесът ви губи потенциални клиенти в полза на конкуренцията. Правилната SEO стратегия включва и изграждане на силна линк билдинг структура, локализирано съдържание и оптимизация на онлайн репутацията.
        </Text>

        <Column as="ul" gap="s" paddingLeft="l">
          <li><strong>Регистрация в Google Business</strong> – ключов компонент за локални резултати.</li>
          <li><strong>Локализирано съдържание</strong> – блогове, адреси, ревюта, които отговарят на местните търсения.</li>
          <li><strong>Оптимизация на карта</strong> – подобрено позициониране в Google Maps.</li>
          <li><strong>Изграждане на линкове</strong> – локални каталози, партньорства и SEO анализ на конкуренцията.</li>
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          За кого е подходяща локалната SEO услуга?
        </Heading>

        <Text variant="body-default-l">
          Услугата е перфектна за малки и средни бизнеси, които разчитат на местна аудитория. Ако имате физически обект, или обслужвате конкретен град или район, локалното SEO е задължителна стъпка за достигане до потенциални клиенти.
        </Text>

        <Feedback
          title="Съвет от SEO консултант"
          description="Редовната оптимизация на вашия Google профил и събирането на реални отзиви могат да увеличат посещенията ви с над 50%."
        />
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Как работим ние?
        </Heading>

        {["Анализ", "Стратегия", "Оптимизация", "Мониторинг"].map((step, i) => (
          <Flex key={i} gap="8" vertical="start">
            <Icon name="checkCircle" onBackground="brand-strong" />
            <Column gap="2">
              <Heading as="h3" variant="heading-strong-l">
                {step}
              </Heading>
              <Text variant="body-default-m">
                {step === "Анализ"
                  ? "Проверяваме текущото ви присъствие в Google и конкуренцията на локално ниво."
                  : step === "Стратегия"
                  ? "Изграждаме индивидуален план, съобразен с вашия район и бизнес цели."
                  : step === "Оптимизация"
                  ? "Прилагаме промени по сайта, съдържанието и линк профила за по-добро класиране."
                  : "Следим представянето и правим нужните корекции за максимален ефект."}
              </Text>
            </Column>
          </Flex>
        ))}
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Пакети и цени за локално SEO
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
                Базов Локален SEO пакет
              </Heading>
              <Text variant="body-default-m">
                Идеален за малки бизнеси – включва основна регистрация в Google Business и базов линк билдинг.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading variant="display-strong-s">от 300&nbsp;лв.</Heading>
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
                Премиум Локално SEO + Онлайн репутация
              </Heading>
              <Text variant="body-default-m">
                Подходящ за бизнеси с конкуренция – включва разширен SEO анализ, стратегия, линк билдинг и управление на отзиви.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading as="h4" variant="display-strong-s">от 750&nbsp;лв.</Heading>
            </Column>
          </Flex>
        </Column>
      </Column>

<Heading as="h3" variant="display-default-s">Често Задавани Въпроси (ЧЗВ) за on-page SEO</Heading>
    <LocalSEOFAQ />

      <Heading as="h4" variant="display-default-s">
        Готови ли сте да бъдете №1 в търсенията около вас?
      </Heading>

      <Column gap="m" align="center" paddingTop="xl">
        <Heading as="h4" variant="display-strong-m" align="center">
          Повече локален трафик, който реално се конвертира
        </Heading>
        <Flex horizontal="center">
          <Button
            variant="primary"
            size="l"
            prefixIcon="target"
            href="/kontakti"
          >
            Свържи се с SEO специалист
          </Button>
        </Flex>
      </Column>
    </Column>
    </>
  );
}
