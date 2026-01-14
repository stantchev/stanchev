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
  FaWordpress, 
  FaShoppingCart, 
  FaStore, 
  FaCode, 
  FaSearch, 
  FaPalette, 
  FaCogs, 
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaHeadset,
  FaRocket,
  FaPhone,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

export async function generateMetadata() {
  return {
    title: 'Custom плъгини за OpenCart & WordPress | Stanchev Digital',
    description: 'Разработка на персонализирани плъгини и модули за OpenCart и WordPress. Custom функционалности, WooCommerce разширения и специализирани решения за вашия бизнес.',
    keywords: 'custom плъгини цена, WordPress плъгини България, OpenCart модули София, WooCommerce разширения цена, персонализирани модули цена, custom функционалности България, PHP разработчик, custom плъгин за WordPress, OpenCart модул цена',
    alternates: {
      canonical: `${baseURL}/web/custom-plagini`,
    },
    openGraph: {
      title: 'Custom плъгини за OpenCart & WordPress | Stanchev Digital',
      description: 'Разработка на персонализирани плъгини и модули за OpenCart и WordPress. Custom функционалности, WooCommerce разширения и специализирани решения за вашия бизнес.',
      url: `${baseURL}/web/custom-plagini`,
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
      title: 'Custom плъгини за OpenCart & WordPress | Stanchev Digital',
      description: 'Разработка на персонализирани плъгини и модули за OpenCart и WordPress. Custom функционалности, WooCommerce разширения и специализирани решения за вашия бизнес.',
      images: [`https://stanchev.bg/images/og/og.jpg`],
    },
  };
}

export default function CustomPlaginiPage() {
  return (
    <>
      <Script
        id="custom-plugins-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Service",
            "name": "Custom плъгини за OpenCart & WordPress",
            "serviceType": "Уеб разработка",
            "description": "Разработка на персонализирани плъгини и модули за OpenCart и WordPress. Custom функционалности, WooCommerce разширения и специализирани решения за вашия бизнес.",
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
            "url": "https://stanchev.bg/web/custom-plagini",
            "areaServed": {
              "@type": "Place",
              "name": "България"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Custom плъгини услуги и цени",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "WordPress плъгини разработка",
                    "description": "Професионално разработване на персонализирани плъгини за WordPress с custom функционалности и hook система."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "OpenCart модули разработка",
                    "description": "Специализирани модули за OpenCart с административен панел и база данни интеграция за разширяване на функционалността."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "WooCommerce разширения разработка",
                    "description": "Custom разширения за WooCommerce с персонализирани функционалности за онлайн магазини."
                  }
                },
                {
                  "@type": "Offer",
                  "name": "WordPress плъгин - професионален пакет",
                  "description": "Персонализиран плъгин за WordPress с custom функционалности, settings страница, hook система и документация.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "600",
                    "priceCurrency": "BGN",
                    "unitText": "лв.",
                    "valueAddedTaxIncluded": true
                  },
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "OpenCart модул - бизнес пакет",
                  "description": "Специализиран модул за OpenCart с custom функционалности, административен панел, база данни интеграция и тестване.",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "500",
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
              "ratingValue": "4.8",
              "reviewCount": "23",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      <Column as="section" gap="xl" padding="xl" fillWidth>
        <Column gap="m" align="center" fillWidth>
          <Heading as="h1" variant="display-strong-l" align="center">
            Custom плъгини за OpenCart & WordPress – персонализирани модули за вашия бизнес
          </Heading>

          <Text variant="display-default-s" align="center" onBackground="neutral-weak">
            <strong>Custom плъгини</strong> и модули за OpenCart и WordPress, които решават конкретни бизнес нужди. Разработвам персонализирани функционалности, WooCommerce разширения и специализирани решения. Ако търсите цялостна <a href="/web">уеб разработка</a>, тук е мястото да започнете.
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
		  <Tag variant="brand">WordPress плъгини</Tag>
		  <Tag variant="brand">OpenCart модули</Tag>
		  <Tag variant="brand">WooCommerce</Tag>
		  <Tag variant="brand">Custom функционалности</Tag>
		  <Tag variant="brand">PHP разработка</Tag>
        </Flex>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Какво включва разработката на custom плъгини?
          </Heading>

          <Text variant="body-default-l">
            <strong>Custom плъгини</strong> са персонализирани решения, създадени специално за вашите бизнес нужди. Разработвам модули за WordPress, OpenCart и WooCommerce, които добавят уникални функционалности, които не се намират в стандартните разширения. Всички плъгини са оптимизирани за производителност и съвместимост.
          </Text>

          <Grid columns={2} gap="l">
            {[
              { icon: FaWordpress, title: "WordPress плъгини", desc: "Персонализирани функционалности за WordPress сайтове" },
              { icon: FaShoppingCart, title: "OpenCart модули", desc: "Специализирани модули за разширяване на функционалността на онлайн магазина" },
              { icon: FaStore, title: "WooCommerce разширения", desc: "Custom функционалности за WooCommerce онлайн магазини" },
              { icon: FaCode, title: "PHP разработка", desc: "Чист, оптимизиран код с фокус върху сигурността и производителността" }
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
            Защо да изберете custom плъгини?
          </Heading>

          <Text variant="body-default-l">
            <strong>Custom плъгини</strong> решават уникални бизнес нужди, които стандартните разширения не покриват. Персонализираните решения са оптимизирани за вашия конкретен случай, работят по-бързо и не съдържат ненужни функции. Освен това имате пълен контрол върху функционалността и бъдещите надграждания.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m">
            Примерен OpenCart модул: Robots.txt Editor
          </Heading>

          <Text variant="body-default-l">
            Ето пример за <strong>практически модул</strong>, който създадох за OpenCart 2.3.0.2. 
            <a href="https://github.com/stantchev/opencart-robots-editor" target="_blank" rel="noopener noreferrer">
              Robots.txt Editor & Cache Control
            </a> позволява директна редакция на robots.txt от админ панела и селективно изчистване на кеша му.
          </Text>

          <Column gap="m" padding="l" border="neutral-alpha-medium" radius="l" background="neutral-alpha-weak">
            <Heading as="h3" variant="heading-strong-m">
             Ключови функции на модула:
            </Heading>
            <Column gap="s">
              <Text variant="body-default-s">• <strong>Директна редакция</strong> на robots.txt от админ панела</Text>
              <Text variant="body-default-s">• <strong>Clear Cache бутон</strong> – премахва само кеша на robots.txt</Text>
              <Text variant="body-default-s">• <strong>SEO Ready</strong> – промените са видими веднага за crawler-и</Text>
              <Text variant="body-default-s">• <strong>Без риск</strong> – реализирано с OCMOD, не изисква промени по ядрото</Text>
            </Column>
            
            <Flex gap="s" wrap>
              <Tag size="m">OpenCart 2.3.0.2</Tag>
              <Tag size="m">PHP</Tag>
              <Tag size="m">SEO Tools</Tag>
              <Tag size="m">Admin Panel</Tag>
            </Flex>

            <Button 
              variant="secondary" 
              size="m" 
              href="https://github.com/stantchev/opencart-robots-editor" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex gap="s" vertical="center">
                <FaGithub size={16} />
                <Text>Виж в GitHub</Text>
              </Flex>
            </Button>
          </Column>

          <Text variant="body-default-m" onBackground="neutral-weak">
            Този модул демонстрира как custom решенията решават реални SEO проблеми. 
            Вместо да се налага FTP достъп за всяка промяна в robots.txt, администраторите могат 
            да правят промени директно от панела и да виждат резултата веднага.
          </Text>
        </Column>

        <Column gap="l">
          <Heading as="h2" variant="display-default-m" align="center">
            Моят процес в 4 етапа
          </Heading>

          <Grid columns={4} gap="l">
            {[
              { 
                step: "Анализ", 
                icon: FaSearch, 
                desc: "Анализирам вашите нужди, изискванията и съществуващата функционалност за да разбера какво точно трябва да се създаде.",
                progress: 25
              },
              { 
                step: "Проектиране", 
                icon: FaPalette, 
                desc: "Проектирам архитектурата на плъгина, базата данни и API интерфейсите за оптимална производителност.",
                progress: 50
              },
              { 
                step: "Разработка", 
                icon: FaCode, 
                desc: "Програмирам плъгина с чист, оптимизиран PHP код, следвайки най-добрите практики за сигурност.",
                progress: 75
              },
              { 
                step: "Тестване", 
                icon: FaCheckCircle, 
                desc: "Тествам плъгина в различни сценарии, проверявам съвместимостта и оптимизирам производителността.",
                progress: 100
              }
            ].map((item, i) => (
              <Card key={item.step} padding="l" border="neutral-alpha-medium" radius="l">
                <Column gap="m" align="center">
                  <item.icon size={32} color="var(--brand-strong)" />
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
            Пакети и цени за custom плъгини
          </Heading>
          
          <Grid columns={2} gap="m" align="center">
            {[
              {
                title: "OpenCart модул",
                subtitle: "Персонализиран модул за OpenCart",
                price: "250 €",
                features: [
                  "Custom функционалности",
                  "Административен панел", 
                  "База данни интеграция",
                  "Тестване и оптимизация",
                  "Документация"
                ],
                icon: "shoppingCart",
                popular: false
              },
              {
                title: "WordPress плъгин",
                subtitle: "Персонализиран плъгин за WordPress",
                price: "300 €",
                features: [
                  "Custom функционалности",
                  "Settings страница",
                  "Hook система",
                  "Тестване и оптимизация",
                  "30-дневна поддръжка"
                ],
                icon: "wordpress",
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
                  {pkg.icon === "shoppingCart" ? <FaShoppingCart size={32} color="var(--brand-strong)" /> : 
                   pkg.icon === "wordpress" ? <FaWordpress size={32} color="var(--brand-strong)" /> : 
                   <FaCode size={32} color="var(--brand-strong)" />}
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
            Често задавани въпроси за custom плъгини
          </Heading>
          
          <AccordionGroup
            items={[
              {
                title: "Колко време отнема разработката на custom плъгин?",
                content: (
                  <Text onBackground="neutral-weak">
                    Времето зависи от сложността на функционалността. Обикновено WordPress плъгин се прави за 1-2 седмици, 
                    докато OpenCart модул може да отнеме 1-3 седмици. Включвам време за планиране, разработка, тестване 
                    и документация.
                  </Text>
                ),
              },
              {
                title: "Какви технологии използвате за разработката?",
                content: (
                  <Text onBackground="neutral-weak">
                    За WordPress плъгини използвам чист PHP код, WordPress hooks и filters система, JavaScript за 
                    frontend функционалности и MySQL за база данни. За OpenCart модули използвам MVC архитектура, 
                    PHP и OpenCart API система.
                  </Text>
                ),
              },
              {
                title: "Предоставяте ли документация за плъгина?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, всички плъгини включват пълна документация: инструкции за инсталация, настройки, 
                    употреба и поддръжка. Също така предоставям чист, коментиран код за лесно разбиране и 
                    бъдещи модификации.
                  </Text>
                ),
              },
              {
                title: "Може ли плъгинът да се адаптира в бъдеще?",
                content: (
                  <Text onBackground="neutral-weak">
                    Разбира се! Всички плъгини са разработени с модулна архитектура, което позволява лесни 
                    промени и надграждания. Предоставям поддръжка за модификации и нови функционалности според 
                    нуждите на бизнеса.
                  </Text>
                ),
              },
            ]}
          />
        </Column>

        <Column gap="l" align="center" paddingTop="xl">
          <Heading as="h4" variant="display-strong-m" align="center">
            Готови за персонализиран плъгин за вашия бизнес?
          </Heading>
          
          <Grid columns={3} gap="l" fillWidth>
            {[
              { icon: FaClock, title: "Бърза разработка", desc: "1-3 седмици" },
              { icon: FaShieldAlt, title: "Гарантирано качество", desc: "100% тестване" },
              { icon: FaHeadset, title: "Поддръжка", desc: "30 дни включена" }
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
                <FaPhone size={16} />
                <Text>Безплатна консултация</Text>
              </Flex>
            </Button>
          </Flex>
        </Column>
      </Column>
    </>
  );
}


