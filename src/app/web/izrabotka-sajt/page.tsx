import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  Icon,
  Feedback,
  AccordionGroup,
  Card,
  Grid,
  Badge,
} from '@once-ui-system/core';
import { baseURL } from '@/resources';
import Script from 'next/script';
import { 
  FaCode, 
  FaPalette, 
  FaMobile, 
  FaRocket, 
  FaShoppingCart, 
  FaWordpress, 
  FaStore, 
  FaCogs, 
  FaSearch, 
  FaShieldAlt, 
  FaClock, 
  FaCheckCircle,
  FaLaptop,
  FaGlobe,
  FaCog,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaWrench,
  FaPaintBrush,
  FaStar
} from 'react-icons/fa';

export async function generateMetadata() {
  return {
    title: 'Изработка на сайт и лендинг страници | Stanchev Digital',
    description: 'Професионална изработка на сайт и лендинг страници с React, Next.js, Tailwind CSS. Модерни, бързи и SEO оптимизирани уебсайтове за малки и средни бизнеси.',
    keywords: 'изработка на сайт България, лендинг страница цена, уеб дизайн София, React разработчик България, Next.js уебсайт, Tailwind CSS дизайн, модерен корпоративен сайт, респонсивен уебсайт, SEO оптимизиран сайт цена, професионален уебсайт за бизнес, изработка на уебсайт цена, лендинг страница дизайн, корпоративен сайт цена, уеб разработка услуги, персонализиран уебсайт',
    alternates: {
      canonical: `${baseURL}/web/izrabotka-sajt`,
    },
    openGraph: {
      title: 'ИИзработка на сайт и лендинг страници | Stanchev Digital',
      description: 'Професионална изработка на сайт и лендинг страници с React, Next.js, Tailwind CSS. Модерни, бързи и SEO оптимизирани уебсайтове за малки и средни бизнеси.',
      url: `${baseURL}/web/izrabotka-sajt`,
      siteName: 'Станчев SEO',
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
      title: 'Изработка на сайт и лендинг страници | Stanchev Digital',
      description: 'Професионална изработка на сайт и лендинг страници с React, Next.js, Tailwind CSS. Модерни, бързи и SEO оптимизирани уебсайтове за малки и средни бизнеси.',
      images: [`https://stanchev.bg/images/og/og.jpg`],
    },
  };
}

export default function IzrabotkaSajtPage() {
  return (
    <>
      <Script
        id="web-development-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            "name": "Изработка на сайт и лендинг страници",
            "serviceType": "Уеб разработка",
            "description": "Професионална изработка на сайт и лендинг страници с React, Next.js, Tailwind CSS. Създавам модерни, бързи и SEO оптимизирани уебсайтове за малки и средни бизнеси.",
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
            "url": "https://stanchev.bg/web/izrabotka-sajt",
            "areaServed": {
              "@type": "Place",
              "name": "България"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Уеб разработка услуги и цени",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Лендинг страница с модерен дизайн",
                    "description": "Професионална едностранична лендинг страница за промоции, услуги или продукти с фокус върху конверсията и SEO оптимизация."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Корпоративен сайт с CMS",
                    "description": "Многопланинков корпоративен сайт с административен панел, SEO оптимизация и респонсивен дизайн за управление на съдържанието."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Портфолио сайт за творци",
                    "description": "Персонализиран портфолио сайт за творци, фотографи, дизайнери и фрийлансери с модерен дизайн и SEO оптимизация."
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Лендинг страница - професионален пакет",
                  "description": "Едностранична лендинг страница с модерен дизайн, SEO оптимизация, контактна форма и социални мрежи.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "800",
                    "priceCurrency": "BGN",
                    "unitText": "лв.",
                    "valueAddedTaxIncluded": true
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Корпоративен сайт - бизнес пакет",
                  "description": "Многопланинков корпоративен сайт с CMS, SEO оптимизация, административен панел и блог секция.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "1500",
                    "priceCurrency": "BGN",
                    "unitText": "лв.",
                    "valueAddedTaxIncluded": true
                  },
                  "availability": "https://schema.org/InStock"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "47",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      <Column as="section" gap="l" padding="s" fillWidth>
        <Column gap="s" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            Изработка на сайт и лендинг страници – модерни уебсайтове за вашия бизнес
          </Heading>

          <Text variant="display-default-s" align="center" onBackground="neutral-weak">
            <strong>Изработка на сайт</strong> с React, Next.js и Tailwind CSS. Създавам модерни, бързи и SEO оптимизирани уебсайтове, които привличат клиенти и конвертират посетители. Ако търсите цялостни <a href="/web">уеб разработка услуги</a>, тук е мястото да започнете.
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
          {["Уеб разработка", "React", "Next.js", "Tailwind CSS", "SEO оптимизация"].map((lbl) => (
            <Tag key={lbl} size="l" variant="brand">
              {lbl}
            </Tag>
          ))}
        </Flex>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Какво включва изработката на сайт?
          </Heading>

          <Text variant="body-default-l">
            Работя с най-модерните технологии: <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong> и <strong>TypeScript</strong>. Всеки сайт е изграден с SEO в ум от самото начало – правилна структура, бърза скорост, мобилна съвместимост и оптимизирано съдържание. Целта е проста: красив, функционален и видим сайт в Google.
          </Text>

          <Grid columns={2} gap="l">
            {[
              { icon: FaPaintBrush, title: "Модерен дизайн", desc: "Чист, професионален и респонсивен дизайн за всички устройства" },
              { icon: FaSearch, title: "SEO оптимизация", desc: "Core Web Vitals, мета тагове, schema markup, sitemap" },
              { icon: FaRocket, title: "Бърза скорост", desc: "Оптимизиран код, компресирани изображения, CDN интеграция" },
              { icon: FaMobile, title: "Мобилна съвместимост", desc: "Перфектно изглежда на всички устройства и екрани" }
            ].map((item, index) => (
              <Card key={item.title} padding="l" border="neutral-alpha-medium" radius="l">
                <Flex gap="m" vertical="start">
                  <item.icon size={24} color="var(--brand-strong)" />
                  <Column gap="xs">
                    <Heading as="h3" variant="heading-strong-m">{item.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">{item.desc}</Text>
                  </Column>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Защо да инвестирате в професионален сайт?
          </Heading>

          <Text variant="body-default-l">
            <strong>Изработка на сайт</strong> е инвестиция в бъдещето на вашия бизнес. Модерният сайт привлича клиенти, изгражда доверие и работи 24/7 за вас. Със SEO оптимизацията видими сте в Google, а с бързата скорост посетителите остават по-дълго на сайта.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m" align="center">
            Моят процес в 4 етапа
          </Heading>

          <Grid columns={4} gap="l">
            {[
              { 
                step: "Планиране", 
                icon: FaUsers, 
                desc: "Анализирам вашите нужди, целева аудитория и бизнес цели. Изграждам структура и план за съдържанието.",
                color: "var(--brand-strong)"
              },
              { 
                step: "Дизайн", 
                icon: FaPalette, 
                desc: "Създавам модерен дизайн с фокус върху потребителското изживяване и конверсията.",
                color: "var(--success-strong)"
              },
              { 
                step: "Разработка", 
                icon: FaCode, 
                desc: "Програмирам сайта с React, Next.js и Tailwind CSS. Интегрирам SEO оптимизация и функционалности.",
                color: "var(--warning-strong)"
              },
              { 
                step: "Тестване", 
                icon: FaCheckCircle, 
                desc: "Тествам всички функционалности, скоростта и съвместимостта. Оптимизирам за Google и мобилни устройства.",
                color: "var(--info-strong)"
              }
            ].map((item, i) => (
              <Card key={item.step} padding="l" border="neutral-alpha-medium" radius="l">
                <Column gap="m" align="center">
                  <item.icon size={32} color={item.color} />
                  <Heading as="h3" variant="heading-strong-m" align="center">
                    {item.step}
                  </Heading>
                  <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                    {item.desc}
                  </Text>
                  <Badge>
                    Етап {i + 1}
                  </Badge>
                </Column>
              </Card>
            ))}
          </Grid>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-m" align="center">
            Пакети и цени за изработка на сайт
          </Heading>
          
          <Grid columns={2} gap="l">
            {[
              {
                title: "Лендинг страница",
                subtitle: "Една лендинг страница за промоции или услуги",
                price: "800 лв.",
                features: [
                  "Модерен дизайн",
                  "SEO оптимизация",
                  "Мобилна съвместимост",
                  "Контактна форма",
                  "Социални мрежи"
                ],
                icon: FaGlobe,
                popular: false
              },
              {
                title: "Корпоративен сайт",
                subtitle: "Стандартен корпоративен сайт с CMS",
                price: "1500 лв.",
                features: [
                  "До 5 страници",
                  "Административен панел",
                  "SEO оптимизация",
                  "Контактна форма",
                  "Блог секция"
                ],
                icon: FaLaptop,
                popular: true
              }
            ].map((pkg, index) => (
              <Card 
                key={pkg.title}
                padding="l" 
                border={pkg.popular ? "brand-alpha-medium" : "neutral-alpha-medium"} 
                radius="l" 
                style={{ 
                  minWidth: "300px",
                  position: "relative",
                  ...(pkg.popular && { 
                    background: "brand-alpha-weak",
                    transform: "scale(1.05)"
                  })
                }}
              >
                {pkg.popular && (
                  <Badge 
                    style={{ 
                      position: "absolute", 
                      top: "-8px", 
                      right: "16px" 
                    }}
                  >
                    Популярен
                  </Badge>
                )}
                
                <Column gap="m" align="center">
                  <pkg.icon size={32} color="var(--brand-strong)" />
                  <Heading as="h4" variant="heading-strong-l" align="center">
                    {pkg.title}
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                    {pkg.subtitle}
                  </Text>
                  <Text variant="display-strong-l" align="center" onBackground="brand-strong">
                    {pkg.price}
                  </Text>
                  
                  <Column gap="s" fillWidth>
                    {pkg.features.map((feature, i) => (
                      <Flex key={i} gap="s" vertical="center">
                        <FaCheckCircle size={16} color="var(--brand-strong)" />
                        <Text variant="body-default-s">{feature}</Text>
                      </Flex>
                    ))}
                  </Column>
                  
                  <Button 
                    variant={pkg.popular ? "primary" : "secondary"} 
                    size="m" 
                    href="/kontakti"
                    fillWidth
                  >
                    Избери този пакет
                  </Button>
                </Column>
              </Card>
            ))}
          </Grid>
        </Column>

        <Column gap="l">
          <Heading as="h3" variant="display-default-m" align="center">
            Често задавани въпроси за изработка на сайт
          </Heading>
          
          <AccordionGroup
            items={[
              {
                title: "Колко време отнема изработката на един сайт?",
                content: (
                  <Text onBackground="neutral-weak">
                    Времето за изработка зависи от сложността на проекта. Лендинг страница се прави за 1-2 седмици, 
                    докато корпоративен сайт с множество страници може да отнеме 3-4 седмици. Включвам време за 
                    планиране, дизайн, разработка, тестване и пускане в експлоатация.
                  </Text>
                ),
              },
              {
                title: "Какви технологии използвате при изработката на сайтове?",
                content: (
                  <Text onBackground="neutral-weak">
                    Работя с най-модерните технологии: React, Next.js, TypeScript, Tailwind CSS. Използвам също 
                    Node.js, PostgreSQL, MongoDB в зависимост от нуждите на проекта. Всички сайтове са оптимизирани 
                    за SEO и имат отлични Core Web Vitals резултати.
                  </Text>
                ),
              },
              {
                title: "Включвате ли SEO оптимизация в цената на изработката?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, всички мои сайтове включват основна SEO оптимизация: мета тагове, правилна структура на 
                    заглавията, schema markup, sitemap, robots.txt и Core Web Vitals оптимизация. Това е част от 
                    стандартния пакет и не се заплаща допълнително.
                  </Text>
                ),
              },
              {
                title: "Предоставяте ли поддръжка след пускането на сайта?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, предлагам различни пакети за поддръжка - от месечна поддръжка с актуализации и бекъп, до 
                    пълноценна поддръжка включваща добавени функционалности. Също така осигурявам обучение за 
                    управление на съдържанието и техническа документация.
                  </Text>
                ),
              },
              {
                title: "Могат ли да се правят промени по сайта след завършването?",
                content: (
                  <Text onBackground="neutral-weak">
                    Разбира се! Всички мои сайтове са изградени с модерни технологии, което позволява лесни 
                    промени и надграждания. Предлагам поддръжка за промени в съдържанието, дизайна и функционалността. 
                    Цените зависят от сложността на промените.
                  </Text>
                ),
              },
              {
                title: "Работите ли с малки и средни бизнеси?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, специализирам се в работа с малки и средни бизнеси, стартъпи и лични брандове. Предлагам 
                    персонализиран подход и разбирам ограниченията в бюджета. Работя директно с собствениците на 
                    бизнеси без посредници, което позволява по-бърза комуникация и по-добри цени.
                  </Text>
                ),
              },
            ]}
          />
        </Column>

        <Column gap="l" align="center" paddingTop="xl">
          <Heading as="h4" variant="display-strong-m" align="center">
            Готови за професионален сайт за вашия бизнес?
          </Heading>
          
          <Grid columns={3} gap="l" fillWidth>
            {[
              { icon: FaClock, title: "Бърза изработка", desc: "1-4 седмици" },
              { icon: FaShieldAlt, title: "Гарантирано качество", desc: "100% тестване" },
              { icon: FaStar, title: "SEO готов", desc: "Оптимизиран за Google" }
            ].map((stat, index) => (
              <Card key={stat.title} padding="l" border="neutral-alpha-medium" radius="l" align="center">
                <Column gap="s" align="center">
                  <stat.icon size={24} color="var(--brand-strong)" />
                  <Heading as="h5" variant="heading-strong-s" align="center">
                    {stat.title}
                  </Heading>
                  <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                    {stat.desc}
                  </Text>
                </Column>
              </Card>
            ))}
          </Grid>

          <Flex gap="m" wrap horizontal="center">
            <Button
              variant="primary"
              size="l"
              href="/kontakti"
            >
              <Flex gap="s" vertical="center">
                <FaRocket size={16} />
                <Text>Свържи се с мен</Text>
              </Flex>
            </Button>
            <Button
              variant="secondary"
              size="l"
              href="/kontakti"
            >
              <Flex gap="s" vertical="center">
                <FaUsers size={16} />
                <Text>Безплатна консултация</Text>
              </Flex>
            </Button>
          </Flex>
        </Column>
      </Column>
    </>
  );
}
