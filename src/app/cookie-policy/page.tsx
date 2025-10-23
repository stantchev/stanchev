import type { Metadata } from 'next';
import Script from 'next/script';
import { 
  Column, 
  Heading, 
  Text, 
  Card, 
  AccordionGroup,
  Button,
  Row,
  Icon,
  Tag,
  Flex
} from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { FaCookie, FaShieldAlt, FaCog, FaInfoCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Cookie Policy | Станчев SEO',
  description: 'Информация за използването на cookies на сайта Stanchev.bg. Научете как използваме cookies за подобряване на вашия опит.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${baseURL}/cookie-policy`,
  },
  openGraph: {
    title: 'Cookie Policy | Станчев SEO',
    description: 'Информация за използването на cookies на сайта Stanchev.bg. Научете как използваме cookies за подобряване на вашия опит.',
    url: `${baseURL}/cookie-policy`,
    siteName: 'Станчев SEO',
    images: [
      {
        url: `${baseURL}/images/og/og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Cookie Policy - Станчев SEO',
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Cookie Policy | Станчев SEO',
    description: 'Информация за използването на cookies на сайта Stanchev.bg.',
    images: [`${baseURL}/images/og/og.jpg`],
  },
};

export default function CookiePolicy() {
  return (
    <>
      <Script
        id="cookie-policy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "Cookie Policy - Станчев SEO",
            "description": "Информация за използването на cookies на сайта Stanchev.bg",
            "url": `${baseURL}/cookie-policy`,
            "author": {
              "@type": "Person",
              "name": "Станчев",
              "url": "https://www.linkedin.com/in/stantcheff/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Станчев SEO",
              "url": baseURL,
              "logo": `${baseURL}/images/og/og.jpg`
            }
          })
        }}
      />

      <Column maxWidth="l" gap="xl" paddingX="l" s={{ paddingX: "m" }}>
        {/* Header */}
        <Column gap="l" paddingY="xl" s={{ paddingY: "l" }}>
          <Row gap="m" vertical="center" s={{ direction: "column", gap: "s" }}>
            <FaCookie size={24} color="var(--brand-strong)"/>
            <Heading variant="display-strong-l">
              Cookie Policy
            </Heading>
          </Row>
          <Text variant="body-default-xl" onBackground="neutral-weak" style={{ maxWidth: "800px" }} s={{ variant: "body-default-l" }}>
            Тази страница обяснява как използваме cookies на нашия сайт и как можете да контролирате тяхното използване.
          </Text>
          <Tag size="l" variant="info" prefixIcon="info">
            Последна актуализация: {new Date().toLocaleDateString('bg-BG')}
          </Tag>
        </Column>

        {/* What are cookies */}
        <Card padding="xl" radius="l" background="surface">
          <Column gap="m" vertical="center">
            <Row gap="m" vertical="center">
              <FaInfoCircle size={24} color="var(--info-strong)" />
              <Heading variant="heading-strong-l">
                Какво са cookies?
              </Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Cookies са малки текстови файлове, които се съхраняват на вашето устройство, когато посещавате уебсайт. 
              Те помагат на сайта да запомни информация за вашия визит, като предпочитания език и други настройки.
            </Text>
          </Column>
        </Card>

        {/* Types of cookies */}
        <Column gap="l">
          <Heading variant="display-strong-m" align="center">
            Видове cookies, които използваме
          </Heading>
          
          <Row gap="l" wrap>
            <Card padding="l" radius="l" border="success-alpha-medium" flex={1} minWidth="300px">
              <Column gap="m">
                <Row gap="s" vertical="center">
                  <FaShieldAlt size={20} color="var(--success-strong)" />
                  <Heading variant="heading-strong-m">Необходими cookies</Heading>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Тези cookies са от съществено значение за функционирането на сайта. 
                  Не могат да бъдат деактивирани.
                </Text>
                <Column gap="xs">
                  <Text variant="body-default-xs">• Сесийни cookies</Text>
                  <Text variant="body-default-xs">• Свързани със сигурността</Text>
                  <Text variant="body-default-xs">• Функционални cookies</Text>
                </Column>
              </Column>
            </Card>

            <Card padding="l" radius="l" border="warning-alpha-medium" flex={1} minWidth="300px">
              <Column gap="m">
                <Row gap="s" vertical="center">
                  <FaCog size={20} color="var(--warning-strong)" />
                  <Heading variant="heading-strong-m">Аналитични cookies</Heading>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Помагат ни да разберем как посетителите използват сайта, 
                  за да го подобрим.
                </Text>
                <Column gap="xs">
                  <Text variant="body-default-xs">• Google Analytics</Text>
                  <Text variant="body-default-xs">• Статистики за използване</Text>
                  <Text variant="body-default-xs">• Производителност</Text>
                </Column>
              </Column>
            </Card>
          </Row>
        </Column>

        {/* FAQ */}
        <Column gap="l">
          <Heading variant="display-strong-m" align="center">
            Често задавани въпроси
          </Heading>
          
          <AccordionGroup
            items={[
              {
                title: "Как мога да контролирам cookies?",
                content: (
                  <Text onBackground="neutral-weak">
                    Можете да контролирате cookies чрез настройките на вашия браузър. 
                    Повечето браузъри ви позволяват да блокирате или изтривате cookies. 
                    Имайте предвид, че деактивирането на някои cookies може да повлияе на функционалността на сайта.
                  </Text>
                ),
              },
              {
                title: "Използваме ли трети страни cookies?",
                content: (
                  <Text onBackground="neutral-weak">
                    Да, използваме Google Analytics за анализиране на трафика. 
                    Тези cookies се използват само за статистически цели и не събират лична информация.
                  </Text>
                ),
              },
              {
                title: "Колко дълго се съхраняват cookies?",
                content: (
                  <Text onBackground="neutral-weak">
                    Сесийните cookies се изтриват автоматично при затваряне на браузъра. 
                    Постоянните cookies могат да се съхраняват от няколко дни до няколко години, 
                    в зависимост от тяхната цел.
                  </Text>
                ),
              },
              {
                title: "Мога ли да откажа cookies?",
                content: (
                  <Text onBackground="neutral-weak">
                    Можете да откажете аналитичните cookies, но необходимите cookies 
                    са от съществено значение за функционирането на сайта и не могат да бъдат деактивирани.
                  </Text>
                ),
              },
            ]}
          />
        </Column>

        {/* Contact */}
        <Card padding="xl" radius="l" background="brand-alpha-weak" border="brand-alpha-medium" >
          <Row gap="m" align="center">
            <Heading variant="heading-strong-m" align="center">
              Имате въпроси за cookies?
            </Heading>
            <Text variant="body-default-m" align="center" onBackground="neutral-weak">
              Ако имате въпроси относно нашата Cookie Policy, не се колебайте да се свържете с нас.
            </Text>
            <Button href="/kontakti" variant="primary" size="l" prefixIcon="mail" >
              Свържете се с нас
            </Button>
          </Row>
        </Card>

        {/* Footer info */}
        <Column gap="s" align="center" paddingY="l">
          <Text variant="body-default-s" align="center" onBackground="neutral-weak">
            Тази Cookie Policy е част от нашите Общи условия за ползване.
          </Text>
          <Row gap="l" wrap horizontal="center">
            <Button href="/obshti-usloviya" variant="secondary" size="s">
              Общи условия
            </Button>
            <Button href="/gdpr" variant="secondary" size="s">
              GDPR
            </Button>
            <Button href="/kontakti" variant="secondary" size="s">
              Контакти
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
}

