import { Column, Flex, Heading, Text, Button, Tag, Icon, Feedback } from '@once-ui-system/core';
import SeoAuditFAQ from './faq';
import { baseURL, seoServices } from '@/resources';
import Script from 'next/script';
import type { Metadata } from 'next';
import PlansSection from '@/components/PlansSection';

const service = seoServices.services.find((s: { slug: string }) => s.slug === 'link-building');

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${baseURL}/seo-uslugi/${service?.slug ?? 'link-building'}`;

  // Fallback if service is missing
  if (!service) {
    return {
      title: 'Link Building стратегии за SEO – изгради авторитет в Google',
      description:
        'Изгради силен линк профил с ефективна Link Building стратегия. Повиши авторитета на сайта си и се класирай по-високо в Google.',
      keywords:
        'линк билдинг, линк билдинг стратегия, изграждане на линкове, линк билдинг цени, линк билдинг цена, качествени линкове, обратни връзки, link building',
      alternates: { canonical },
      openGraph: {
        title:
          'Link Building стратегии за силно SEO – изгради авторитет и класиране в Google',
        description:
          'Изгради силен линк профил с ефективна Link Building стратегия. Повиши авторитета на сайта си и се класирай по-високо в Google.',
        url: `${baseURL}/seo-uslugi/link-building`,
      },
      twitter: {
        title:
          'Link Building стратегии за силно SEO – изгради авторитет и класиране в Google',
        description:
          'Изгради силен линк профил с ефективна Link Building стратегия. Повиши авторитета на сайта си и се класирай по-високо в Google.',
      },
    };
  }

  // Normal case when service exists
  return {
    title:
      'Link Building стратегии за силно SEO – изгради авторитет и класиране в Google',
    description:
      'Изгради силен линк профил с ефективна Link Building стратегия. Повиши авторитета на сайта си и се класирай по-високо в Google.',
    keywords:
      'link building, линк билдинг, линк билдинг стратегия, изграждане на линкове, външни връзки, линкове към сайт, линк билдинг цена, seo линкове, link building услуги, линк профил',
    alternates: { canonical },
    openGraph: {
      title:
        'Link Building стратегии за силно SEO – изгради авторитет и класиране в Google',
      description:
        'Изгради силен линк профил с ефективна Link Building стратегия. Повиши авторитета на сайта си и се класирай по-високо в Google.',
      url: canonical,
      siteName: seoServices.title,
      images: [
        {
          url: 'https://stanchev.bg/images/og/og.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Link Building стратегии за силно SEO – изгради авторитет и класиране в Google',
      description:
        'Изгради силен линк профил с ефективна Link Building стратегия. Повиши авторитета на сайта си и се класирай по-високо в Google.',
      images: ['https://stanchev.bg/images/og/og.jpg'],
    },
  };
}

export default function LinkBuildingPage() {
  return (
    <>
      <Script
        id="link-building-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                name: 'Link Building – изградете авторитет и класиране с качествени връзки',
                description:
                  'Добре планираната Link Building стратегия е основа за всяка успешна SEO оптимизация. Чрез изграждане на качествени външни връзки подобряваме вашия SEO рейтинг и видимост в Google.',
                url: 'https://stanchev.bg/seo-uslugi/link-building',
                image: {
                  '@type': 'ImageObject',
                  url: 'https://stanchev.bg/images/og/og.jpg',
                },
                mainEntityOfPage: {
                  '@type': 'WebPage',
                  '@id': 'https://stanchev.bg/seo-uslugi/link-building',
                },
                author: {
                  '@type': 'Person',
                  name: 'Станчев',
                  url: 'https://www.linkedin.com/in/stantcheff/',
                  image: 'https://stanchev.bg/assets/avatar.jpg',
                },
                publisher: { '@id': 'https://stanchev.bg/#organization' },
              },
              {
                '@type': 'Service',
                serviceType: 'Link Building',
                name: 'Link Building стратегии за силно SEO',
                description:
                  'Изграждане на силен линк профил с ефективна Link Building стратегия за повишаване на авторитета и класирането в Google.',
                url: 'https://stanchev.bg/seo-uslugi/link-building',
                provider: { '@id': 'https://stanchev.bg/#organization' },
                offers: [
                  {
                    '@type': 'Offer',
                    name: 'Стартов Link Building пакет',
                    priceCurrency: 'BGN',
                    price: '790',
                    unitText: 'лв.',
                    description:
                      'Подходящ за оптимизация на нови сайтове или онлайн магазини без история.',
                    availability: 'http://schema.org/InStock',
                    url: 'https://stanchev.bg/kontakti',
                  },
                  {
                    '@type': 'Offer',
                    name: 'Premium Link Building + SEO поддръжка',
                    priceCurrency: 'BGN',
                    price: '550', // месечна цена – уточнено в описанието
                    unitText: 'лв./мес.',
                    description:
                      'Подходящ за мащабни сайтове и постоянна работа с SEO оптимизатор.',
                    availability: 'http://schema.org/InStock',
                    url: 'https://stanchev.bg/kontakti',
                  },
                ],
              },
              {
                '@type': ['Organization', 'ProfessionalService'],
                '@id': 'https://stanchev.bg/#organization',
                name: 'Станчев SEO',
                url: 'https://stanchev.bg/',
                logo: 'https://stanchev.bg/images/og/og.jpg',
                email: 'seo@stanchev.bg',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Бул. Г.М. Димитров 26',
                  addressLocality: 'София',
                  addressRegion: 'София',
                  postalCode: '1797',
                  addressCountry: 'BG',
                },
                sameAs: [
                  'https://github.com/stantchev/',
                  'https://www.linkedin.com/in/stantcheff/',
                  'https://dev.to/stanchev',
                ],
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  email: 'seo@stanchev.bg',
                  areaServed: 'BG',
                  availableLanguage: 'bg',
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Какво е Link Building и защо е важен?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Link Building е процесът на изграждане на качествени външни връзки (backlinks) към вашия уебсайт. Той е ключов за SEO, защото Google разглежда тези връзки като сигнал за авторитет и доверие, което пряко влияе върху класирането ви в търсачките.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Какви методи за Link Building използвате?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Ние се фокусираме върху естествени и устойчиви методи, включително регистрация в релевантни директории, партньорства с блогове, гост публикации, създаване на висококачествено съдържание, което привлича естествени връзки, и анализ на конкуренцията за откриване на нови възможности.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Колко време отнема да се видят резултати от Link Building?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text:
                        'Link Building е дългосрочна стратегия. Първите резултати могат да се забележат след 3–6 месеца, но пълният потенциал и трайното подобрение на авторитета се развиват постепенно с течение на времето. Важно е постоянството и качеството на връзките.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <Column as="section" gap="xl" padding="xl" fillWidth>
        <Column gap="m" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            Link Building – изградете авторитет и класиране с качествени връзки
          </Heading>
          <Text variant="heading-default-xl" onBackground="neutral-weak" wrap="balance">
            Добре планираната Link Building стратегия е основа за всяка успешна{' '}
            <a href="/seo-uslugi/seo-optimizatsiya">SEO Оптимизация.</a> С изграждане на качествени външни връзки подобрявам вашия SEO рейтинг и видимост в Google.
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
          {['link building', 'линк билдинг стратегия', 'онлайн репутация', 'директории за регистрации'].map(
            (lbl) => (
              <Tag key={lbl} size="l">
                {lbl}
              </Tag>
            ),
          )}
        </Flex>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Какво включва моят Link Building процес?
          </Heading>
          <Text variant="body-default-l">
            Всяка ефективна SEO стратегия трябва да бъде подкрепена от <strong>естествени и надеждни линкове</strong>, които Google разпознава като сигнал за доверие. Като опитен <strong>seo консултант</strong>, подбирам точните източници за връзки, които ще повишат авторитета и органичното класиране на вашия сайт.
          </Text>
          <Column as="ul" gap="s" paddingLeft="l">
            <li>
              <strong>Анализ на линк профила</strong> – откриване на токсични връзки и пропуски в стратегиите на конкуренцията.
            </li>
            <li>
              <strong>Изграждане на връзки</strong> – регистрация в директории, блог партньорства, гост публикации и SEO статии.
            </li>
            <li>
              <strong>Онлайн репутация</strong> – комбиниране на линкове с управлението на публичния имидж на бранда.
            </li>
            <li>
              <strong>Мониторинг и отчет</strong> – проследяване на позициите и формиране на <strong>Link Building цена</strong> спрямо постигнатия резултат.
            </li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Защо Link Building е ключов за Google?
          </Heading>
          <Text variant="body-default-l">
            Външните връзки са сред най-силните фактори за класиране в Google. Когато бъдат изградени правилно от <strong>SEO фирма</strong>, те носят не само трафик, но и доверие, подобрявайки цялостното представяне на сайта в търсачките.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Процес в 4 стъпки
          </Heading>
          {['Анализ', 'Планиране', 'Изграждане', 'Проследяване'].map((step, i) => (
            <Flex key={i} gap="8" vertical="start">
              <Icon name="checkCircle" onBackground="brand-strong" />
              <Column gap="2">
                <Heading as="h3" variant="heading-strong-l">
                  {step}
                </Heading>
                <Text variant="body-default-m">
                  {step === 'Анализ'
                    ? 'Изследваме линк профила и идентифицираме приоритетни цели.'
                    : step === 'Планиране'
                    ? 'Изготвяме Link Building стратегия, съобразена с нишата и бюджета.'
                    : step === 'Изграждане'
                    ? 'Създаваме партньорства, SEO статии и релевантни връзки към сайта.'
                    : 'Предоставяме отчет и препоръки за поддръжка на постигнатите резултати.'}
                </Text>
              </Column>
            </Flex>
          ))}
        </Column>
        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Пакети и цени за Link Building
          </Heading>
		  
		  <PlansSection />
		  
          <Heading as="h3" variant="display-default-s">
            Често задавани въпроси за Link Building
          </Heading>
          <SeoAuditFAQ />

          <Column gap="m" align="center" paddingTop="xl">
            <Heading as="h4" variant="display-strong-m" align="center">
              Искате ли по-висок авторитет и позиции в Google?
            </Heading>
            <Flex horizontal="center">
              <Button variant="primary" size="l" prefixIcon="rocket" href="/kontakti">
                Свържи се с нас
              </Button>
            </Flex>
          </Column>
        </Column>
      </Column>
    </>
  );
}