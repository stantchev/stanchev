import { Column, Flex, Heading, Text, Button, Tag, Icon, Feedback } from '@once-ui-system/core';
import { baseURL, seoServices } from '@/resources';
import EcommerceSEOFAQ from './faq';
import Script from 'next/script';
import type { Metadata } from 'next';
import PlansSection from '@/components/PlansSection';
import { ecommercePlans } from "@/data/pricing/ecommerce-pricing";

const service = seoServices.services.find((s: { slug: string }) => s.slug === 'ecommerce-seo');

export async function generateMetadata(): Promise<Metadata> {
  const canonical = `${baseURL}/seo-uslugi/${service?.slug ?? 'ecommerce-seo'}`;

  if (!service) {
    return {
      title: 'SEO за Онлайн Магазини – повече продажби и видимост в Google',
      description:
        'Комплексно SEO за онлайн магазини: техническа оптимизация, категории и продукти, скорост, schema и AI-оптимизирано съдържание за Google Overviews.',
      keywords:
        'seo за онлайн магазини, ecommerce seo, seo оптимизация магазин, структурирани данни продукти, core web vitals, скорост на сайт, категории, филтри, каноникал, merchant center, ai overviews, chatgpt',
      alternates: { canonical },
      openGraph: {
        title: 'SEO за Онлайн Магазини – повече продажби и видимост в Google',
        description:
          'Техническо и съдържателно SEO за eCommerce: структури, категории, продукти, CWV, schema и AI-оптимизация за Google Overviews.',
        url: `${baseURL}/seo-uslugi/ecommerce-seo`,
      },
      twitter: {
        title: 'SEO за Онлайн Магазини – повече продажби и видимост в Google',
        description:
          'Е2Е eCommerce SEO: техническа оптимизация, скорост, структура, schema, Merchant Center и съдържание, готово за AI търсене.',
      },
    };
  }

  return {
    title: 'SEO за Онлайн Магазини – повече продажби и видимост в Google',
    description:
      'Комплексно eCommerce SEO: техническа оптимизация, структура на категории, продуктови страници, Core Web Vitals, структурирани данни и AI-оптимизирано съдържание.',
    keywords:
      'seo за онлайн магазини, ecommerce seo, seo оптимизация магазин, seo категории, продуктови страници, филтри и фасети, canonical, core web vitals, structured data, merchant center, ai overviews, chatgpt, google shopping',
    alternates: { canonical },
    openGraph: {
      title: 'SEO за Онлайн Магазини – повече продажби и видимост в Google',
      description:
        'Техническо и съдържателно SEO за eCommerce: структура, CWV, schema, Merchant Center и съдържание за AI и Google Overviews.',
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
      title: 'SEO за Онлайн Магазини – повече продажби и видимост в Google',
      description:
        'Е2Е eCommerce SEO: техническа оптимизация, скорост, структура, schema, Merchant Center и съдържание, готово за AI търсене.',
      images: ['https://stanchev.bg/images/og/og.jpg'],
    },
  };
}

export default function EcommerceSEOPage() {
  return (
    <>
      <Script
        id="ecommerce-seo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                name: 'SEO за Онлайн Магазини – повече продажби и видимост в Google',
                description:
                  'Ecommerce SEO с фокус върху техническа оптимизация, структура на категории и продукти, CWV, структурирани данни и AI-оптимизирано съдържание за Google Overviews.',
                url: 'https://stanchev.bg/seo-uslugi/ecommerce-seo',
                image: {
                  '@type': 'ImageObject',
                  url: 'https://stanchev.bg/images/og/og.jpg',
                },
                mainEntityOfPage: {
                  '@type': 'WebPage',
                  '@id': 'https://stanchev.bg/seo-uslugi/ecommerce-seo',
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
                serviceType: 'Ecommerce SEO',
                name: 'SEO за Онлайн Магазини',
                description:
                  'Комплексна SEO услуга за онлайн магазини: техническа оптимизация, архитектура, продуктови страници, CWV, schema, Merchant Center и AI-готово съдържание.',
                url: 'https://stanchev.bg/seo-uslugi/ecommerce-seo',
                provider: { '@id': 'https://stanchev.bg/#organization' },
                offers: [
                  {
                    '@type': 'Offer',
                    name: 'Стартов Ecommerce SEO пакет',
                    priceCurrency: 'BGN',
                    price: '990',
                    unitText: 'лв.',
                    description:
                      'Одит + техническо SEO + базова структура на категории и продукти. Подходящ за нови магазини или миграции.',
                    availability: 'http://schema.org/InStock',
                    url: 'https://stanchev.bg/kontakti',
                  },
                  {
                    '@type': 'Offer',
                    name: 'Premium Ecommerce SEO + поддръжка',
                    priceCurrency: 'BGN',
                    price: '750',
                    unitText: 'лв./мес.',
                    description:
                      'Непрекъсната работа: CWV, съдържание, линк билдинг, Merchant Center, CRO и месечни отчети.',
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
            ],
          }),
        }}
      />

      <Column as="section" gap="xl" padding="xl" fillWidth>
        <Column gap="m" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            SEO за Онлайн Магазини – повече продажби и видимост в Google
          </Heading>
          <Text variant="heading-default-xl" onBackground="neutral-weak" wrap="balance">
            AI-оптимизирана стратегия за <a href="/seo-uslugi/seo-optimizatsiya">SEO оптимизация</a> на eCommerce: технически фундамент, структура на категории и продукти, Core Web Vitals, структурирани данни и съдържание, което се класира в Google Overviews и асистенти като ChatGPT. Подхождам систематично – от корекция на индексирането и фасетите до изграждане на авторитет и повишаване на конверсиите, за да превърна органичния трафик в реални поръчки.
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
          {[
            'SEO за онлайн магазини',
            'техническо SEO за eCommerce',
            'структурирани данни (schema)',
            'Core Web Vitals',
            'оптимизация на категории',
            'продуктови страници',
            'AI оптимизация',
            'Google Overviews',
            'Google Merchant Center',
            'E-E-A-T сигнали',
          ].map((lbl) => (
            <Tag key={lbl} size="l">
              {lbl}
            </Tag>
          ))}
        </Flex>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Какво включва професионалното SEO за онлайн магазини?
          </Heading>
          <Text variant="body-default-l">
            Ефективното eCommerce SEO комбинира <strong>техническа стабилност</strong>, ясна <strong>информационна архитектура</strong> и <strong>AI-готово съдържание</strong>. Целта е повече органичен трафик, видимост в богати резултати и по-висока конверсия през категории, вътрешно търсене и продуктови страници.
          </Text>
          <Text variant="body-default-l">
            Моят подход адресира както основите – индексиране, каноникализация и скорост – така и детайлите, които правят магазина конкурентен в AI-епохата: структурирани данни, последователни именувания, ясни спецификации и стойностни сравнения. Така съдържанието ви се разбира от търсачките и се цитира в AI отговори.
          </Text>
          <Column as="ul" gap="s" paddingLeft="l">
            <li>Приоритизация по въздействие: бързи победи → стратегически инициативи.</li>
            <li>Баланс между crawl ефективност и покритие на ключови URL-и.</li>
            <li>Данни и измерване: Search Console, Merchant Center, аналитика и CRM.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="heading-strong-xl">Одит на онлайн магазина</Heading>
          <Text variant="body-default-l">
            Започвам с технически и съдържателен одит: лог анализ, robots правила, каноникализация, hreflang, статус кодове, sitemap-и по тип страници и блокиращи ресурси. Картирам текущата архитектура и идентифицирам пропуски във вътрешното свързване и семантиката на категориите.
          </Text>
          <Text variant="body-default-l">
            Резултатът е приоритетна пътна карта с бързи корекции и дългосрочни задачи, която намалява излишното пълзене, подобрява качеството на индекса и подготвя магазина за стабилен ръст в органичните продажби.
          </Text>
          <Column as="ul" gap="s" paddingLeft="l">
            <li>Диагностика на дублирани/тънки страници от филтри и параметри.</li>
            <li>Оценка на вътрешни анкори, breadcrumbs и навигационни модели.</li>
            <li>Съгласуване на продуктовите атрибути с таксономиите.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="heading-strong-xl">Техническо SEO за eCommerce</Heading>
          <Text variant="body-default-l">
            Управлявам фасети и филтри с ясни правила (indexability, canonical, nofollow където е уместно), оптимизирам пагинация, вариации, UTM и параметри за сортиране. Предотвратявам раздуване на индекса и фокусиране върху страници с намерение за покупка.
          </Text>
          <Text variant="body-default-l">
            Стабилното техническо изпълнение гарантира, че Google разбира коя страница е канонична, как се групират вариациите и кои комбинации от филтри заслужават видимост. Това повишава ефективността на crawl бюджета и подобрява класирането.
          </Text>
          <Column as="ul" gap="s" paddingLeft="l">
            <li>Правила за index/noindex и сигнализиране на каноника.</li>
            <li>Пагинация с последователни връзки и смислени списъци.</li>
            <li>Контрол на параметри: чисти URL-и за landing страници.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="heading-strong-xl">Категории, навигация и вътрешно свързване</Heading>
          <Text variant="body-default-l">
            Проектирам архитектура, базирана на поведение и търсене: тематични клъстери, свързани категории, контекстни блокове „водачи/сравнения“ и премислени breadcrumbs. Така насочвам PageRank-а и ускорявам откриването на ключови страници.
          </Text>
          <Text variant="body-default-l">
            Вътрешните линкове и анкорите отразяват езика на клиента и подобряват разбирането на темата от алгоритмите и AI моделите. Резултатът е по-висока релевантност и по-стабилни позиции.
          </Text>
          <Column as="ul" gap="s" paddingLeft="l">
            <li>Семантични заглавия и описания за категории.</li>
            <li>Навигационни филтри с ясни етикети и URL логика.</li>
            <li>Контекстни линкове към водачи и сравнения.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="heading-strong-xl">Продуктови страници и вариации</Heading>
          <Text variant="body-default-l">
            Изграждам уникални описания и структурирам спецификациите така, че да са разбираеми от хора и машини. Настройвам каноникализация при вариации, управление на out-of-stock и SEO логика за родител/дете продукти, за да не губите сигнали.
          </Text>
          <Text variant="body-default-l">
            Рич снипети (цена, наличност, рейтинг) и оптимизация на изображения (alt, WebP, lazyload) повишават CTR и UX. Добавям структурирани FAQ секции и подсилвам E-E-A-T с реални ревюта и политика за връщане.
          </Text>
          <Column as="ul" gap="s" paddingLeft="l">
            <li>Шаблони за атрибути и спецификации по категории.</li>
            <li>Модели за комбинирани/вариативни продукти.</li>
            <li>Управление на „изчерпани“ URL-и с ясни алтернативи.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="heading-strong-xl">Скорост и Core Web Vitals</Heading>
          <Text variant="body-default-l">
            Оптимизирам реални показатели (CrUX) чрез критичен CSS, preload на ключови ресурси, оптимизирани шрифтове, CDN, кеширане и контрол върху JS-бандъла. Фокусът е върху LCP, CLS и INP – метрики, които влияят пряко на конверсиите.
          </Text>
          <Text variant="body-default-l">
            Бързият магазин е конкурентно предимство – намалява отпаданията при мобилни посетители и подобрява позициите. Измервам често, тествам промени и приоритизирам подобренията спрямо въздействието върху прихода.
          </Text>
          <Column as="ul" gap="s" paddingLeft="l">
            <li>Компонентен lazyload и дефериране на не-критични скриптове.</li>
            <li>Оптимизация на изображения и responsive източници.</li>
            <li>Стратегии за кеширане и edge доставка.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="heading-strong-xl">Структурирани данни и Merchant Center</Heading>
          <Text variant="body-default-l">
            Имплементирам schema за Organization, Breadcrumb, Product, Offer и Review, като валидирам всички полета. Синхронизирам данните между сайта и Merchant Center, за да получавате стабилни богати резултати и коректно покритие в Google Shopping.
          </Text>
          <Text variant="body-default-l">
            Чистият product feed и консистентните данни за наличности и цени намаляват отхвърлянията и подобряват видимостта. Обучавам екипа ви как да поддържа структурните елементи при промени и нови категории.
          </Text>
          <Column as="ul" gap="s" paddingLeft="l">
            <li>Валидирани Product/Offer/Review маркъпи.</li>
            <li>Автоматизирани проверки за консистентност.</li>
            <li>Подобрения на feed-а за по-висок approval rate.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="heading-strong-xl">Съдържание за AI & Google Overviews</Heading>
          <Text variant="body-default-l">
            Проектирам ясно, проверимо съдържание: ръководства, сравнения, списъци със съвместимост, таблици със спецификации и чеклисти. Структурирам информацията така, че да отговаря на „как да избера“, „кое е по-добро“ и „съвместим ли е“ – типични задачи, решавани от AI.
          </Text>
          <Text variant="body-default-l">
            Използвам естествен език, уточнявам условия и изключения, добавям доказателства и цитируеми данни (на сайта ви), за да подсиля E-E-A-T. Това увеличава вероятността съдържанието да бъде обобщено или цитирано в AI резултати.
          </Text>
          <Column as="ul" gap="s" paddingLeft="l">
            <li>Секции „въпроси/отговори“ и „сравнения“ по категории.</li>
            <li>Стандартизирани данни за размери, материали, съвместимост.</li>
            <li>Шаблони за ръководства и buyer’s guides.</li>
          </Column>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="heading-strong-xl">Международно SEO и локализация</Heading>
          <Text variant="body-default-l">
            Настройвам hreflang, валута и локализирани елементи за мулти-регионални магазини. Осигурявам каноникали между версии и консистентни преводи на атрибутите, за да избегнете конфликтни сигнали и загуба на авторитет.
          </Text>
          <Text variant="body-default-l">
            Съобразявам се с локални търсения, измервам поведението по пазар и оптимизирам ключови страници с локален контекст (мерни единици, наличности, логистика), което повишава релевантността и доверието.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="heading-strong-xl">Проследяване, отчетност и растеж</Heading>
          <Text variant="body-default-l">
            Изграждам измерване краят-до-края: Search Console, Merchant Center, уеб аналитика и CRM. Свързвам органичния трафик с реалните продажби, за да виждате ясна възвръщаемост и да взимате решения на база данни, не интуиция.
          </Text>
          <Text variant="body-default-l">
            Докладите ми включват позиции, покритие, CWV, богати резултати, приходи от органичен трафик и приоритизиран план. Така екипите ви имат прозрачност и фокус, а бизнесът – предвидимост в ръста.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-s" align="center">Пакети и цени за SEO за онлайн магазини</Heading>
          <PlansSection plans={ecommercePlans} />

          <Heading as="h3" variant="display-default-s" align="center">
            Често задавани въпроси за SEO за онлайн магазини
          </Heading>
          <EcommerceSEOFAQ />

          <Column gap="m" align="center" paddingTop="xl">
            <Heading as="h4" variant="display-strong-m" align="center">
              Готови ли сте за повече органични продажби?
            </Heading>
            <Flex horizontal="center">
              <Button variant="primary" size="l" prefixIcon="rocket" href="/kontakti">
                Свържи се с мен
              </Button>
            </Flex>
          </Column>
        </Column>
      </Column>
    </>
  );
}