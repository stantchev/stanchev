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
  Flex,
  Feedback,
  Grid
} from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { 
  FaShieldAlt, 
  FaUser, 
  FaDatabase, 
  FaLock, 
  FaEye, 
  FaEdit, 
  FaTrash,
  FaDownload,
  FaExclamationTriangle
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'GDPR и Защита на личните данни | Станчев SEO',
  description: 'Информация за обработката на личните данни съгласно GDPR. Вашите права и как защитаваме вашата поверителност.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${baseURL}/gdpr`,
  },
  openGraph: {
    title: 'GDPR и Защита на личните данни | Станчев SEO',
    description: 'Информация за обработката на личните данни съгласно GDPR. Вашите права и как защитаваме вашата поверителност.',
    url: `${baseURL}/gdpr`,
    siteName: 'Станчев SEO',
    images: [
      {
        url: `${baseURL}/images/og/og.jpg`,
        width: 1200,
        height: 630,
        alt: 'GDPR и Защита на личните данни - Станчев SEO',
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'GDPR и Защита на личните данни | Станчев SEO',
    description: 'Информация за обработката на личните данни съгласно GDPR.',
    images: [`${baseURL}/images/og/og.jpg`],
  },
};

export default function GDPR() {
  return (
    <>
      <Script
        id="gdpr-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "GDPR и Защита на личните данни - Станчев SEO",
            "description": "Информация за обработката на личните данни съгласно GDPR",
            "url": `${baseURL}/gdpr`,
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

      <Column maxWidth="l" gap="xl">
        {/* Header */}
        <Column gap="l" paddingX="l">
          <Heading variant="display-strong-l" marginBottom="m" as="h1">
            GDPR и Защита на личните данни
          </Heading>
          <Text variant="heading-default-xl" onBackground="neutral-weak" wrap="balance">
            Информация за обработката на личните данни съгласно Общия регламент за защита на данните (GDPR). 
            Научете вашите права и как защитаваме вашата поверителност.
          </Text>
        </Column>

        {/* Data Controller */}
        <Card padding="xl" radius="l" background="surface" border="success-alpha-medium">
          <Column gap="m">
            <Row gap="m" vertical="center">
              <FaUser size={24} color="var(--success-strong)" />
              <Heading variant="heading-strong-l">
                Администратор на личните данни
              </Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-weak">
              <strong>Име:</strong> Станчев<br/>
              <strong>Адрес:</strong> Бул. Г.М. Димитров 26, София 1797, България<br/>
              <strong>Телефон:</strong> 0877038729<br/>
              <strong>Email:</strong> seo@stanchev.bg<br/>
              <strong>Уебсайт:</strong> https://stanchev.bg<br/>
              <strong>Работно време:</strong> Понедлник-Петък 9:30-16:30 ч.
            </Text>
          </Column>
        </Card>

        {/* What data we collect */}
        <Column gap="l" paddingX="l">
          <Heading variant="heading-strong-l" marginBottom="m" as="h2">
            Какви данни събираме
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Събираме само необходимите данни за предоставяне на услугите и подобряване на потребителското изживяване.
          </Text>
        </Column>

        <Grid columns="2" s={{ columns: 1 }} fillWidth gap="l" paddingX="l">
          <Card radius="l" direction="column" border="info-alpha-medium" fillWidth gap="0">
            <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
              <FaUser size={20} color="var(--info-strong)" />
              <Text variant="label-default-s" wrap="balance">Контактни данни</Text>
            </Row>
            
            <div
              style={{
                width: "100%",
                height: "120px",
                background: "linear-gradient(135deg, var(--info-alpha-weak), var(--info-alpha-medium))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTop: "1px solid var(--neutral-alpha-weak)",
                borderBottom: "1px solid var(--neutral-alpha-weak)"
              }}
            >
              <FaUser size={32} color="var(--info-strong)" />
            </div>
            
            <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1}>
              <Text variant="body-default-xl" wrap="balance">Контактни данни</Text>
              <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance">
                Когато се свързвате с нас чрез контактната форма събираме:
              </Text>
              <Column gap="xs">
                <Text variant="body-default-s" wrap="balance">• Име</Text>
                <Text variant="body-default-s" wrap="balance">• Email адрес</Text>
                <Text variant="body-default-s" wrap="balance">• Съобщение</Text>
                <Text variant="body-default-s" wrap="balance">• Тема на запитването</Text>
              </Column>
            </Column>
          </Card>

          <Card radius="l" direction="column" border="warning-alpha-medium" fillWidth gap="0">
            <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
              <FaDatabase size={20} color="var(--warning-strong)" />
              <Text variant="label-default-s" wrap="balance">Технически данни</Text>
            </Row>
            
            <div
              style={{
                width: "100%",
                height: "120px",
                background: "linear-gradient(135deg, var(--warning-alpha-weak), var(--warning-alpha-medium))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTop: "1px solid var(--neutral-alpha-weak)",
                borderBottom: "1px solid var(--neutral-alpha-weak)"
              }}
            >
              <FaDatabase size={32} color="var(--warning-strong)" />
            </div>
            
            <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1}>
              <Text variant="body-default-xl" wrap="balance">Технически данни</Text>
              <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance">
                Автоматично събирани данни:
              </Text>
              <Column gap="xs">
                <Text variant="body-default-s" wrap="balance">• IP адрес</Text>
                <Text variant="body-default-s" wrap="balance">• Браузър и устройство</Text>
                <Text variant="body-default-s" wrap="balance">• Време на посещение</Text>
                <Text variant="body-default-s" wrap="balance">• Страници, които посещавате</Text>
              </Column>
            </Column>
          </Card>
        </Grid>

        {/* Legal basis */}
        <Card padding="xl" radius="l" background="surface">
          <Column gap="m">
            <Row gap="m" vertical="center">
              <FaLock size={24} color="var(--brand-strong)" />
              <Heading variant="heading-strong-l">
                Правно основание за обработка
              </Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Обработваме вашите лични данни на основание:
            </Text>
            <Column gap="s" paddingLeft="l">
              <Text variant="body-default-s">• <strong>Съгласие</strong> - когато се съгласите с обработката</Text>
              <Text variant="body-default-s">• <strong>Договорно изпълнение</strong> - за предоставяне на услуги</Text>
              <Text variant="body-default-s">• <strong>Законни интереси</strong> - за подобряване на услугите</Text>
            </Column>
          </Column>
        </Card>

        {/* Your rights */}
        <Column gap="l" paddingX="l">
          <Heading variant="heading-default-l" marginBottom="m" as="h2">
            Вашите права
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Съгласно GDPR имате редица права относно вашите лични данни. Ето как можете да ги упражнявате.
          </Text>
        </Column>

        <Grid columns="2" s={{ columns: 1 }} fillWidth gap="l" paddingX="l">
          <Card radius="l" direction="column" border="success-alpha-medium" fillWidth gap="0">
            <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
              <FaEye size={20} color="var(--success-strong)" />
              <Text variant="label-default-s" wrap="balance">Право на достъп</Text>
            </Row>
            
            <div
              style={{
                width: "100%",
                height: "120px",
                background: "linear-gradient(135deg, var(--success-alpha-weak), var(--success-alpha-medium))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTop: "1px solid var(--neutral-alpha-weak)",
                borderBottom: "1px solid var(--neutral-alpha-weak)"
              }}
            >
              <FaEye size={32} color="var(--success-strong)" />
            </div>
            
            <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1}>
              <Text variant="body-default-xl" wrap="balance">Право на достъп</Text>
              <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance">
                Можете да поискате информация за обработваните данни.
              </Text>
            </Column>
          </Card>

          <Card radius="l" direction="column" border="warning-alpha-medium" fillWidth gap="0">
            <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
              <FaEdit size={20} color="var(--warning-strong)" />
              <Text variant="label-default-s" wrap="balance">Право на коригиране</Text>
            </Row>
            
            <div
              style={{
                width: "100%",
                height: "120px",
                background: "linear-gradient(135deg, var(--warning-alpha-weak), var(--warning-alpha-medium))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTop: "1px solid var(--neutral-alpha-weak)",
                borderBottom: "1px solid var(--neutral-alpha-weak)"
              }}
            >
              <FaEdit size={32} color="var(--warning-strong)" />
            </div>
            
            <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1}>
              <Text variant="body-default-xl" wrap="balance">Право на коригиране</Text>
              <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance">
                Можете да поискате поправка на неточни данни.
              </Text>
            </Column>
          </Card>

          <Card radius="l" direction="column" border="danger-alpha-medium" fillWidth gap="0">
            <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
              <FaTrash size={20} color="var(--danger-strong)" />
              <Text variant="label-default-s" wrap="balance">Право на изтриване</Text>
            </Row>
            
            <div
              style={{
                width: "100%",
                height: "120px",
                background: "linear-gradient(135deg, var(--danger-alpha-weak), var(--danger-alpha-medium))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTop: "1px solid var(--neutral-alpha-weak)",
                borderBottom: "1px solid var(--neutral-alpha-weak)"
              }}
            >
              <FaTrash size={32} color="var(--danger-strong)" />
            </div>
            
            <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1}>
              <Text variant="body-default-xl" wrap="balance">Право на изтриване</Text>
              <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance">
                Можете да поискате изтриване на вашите данни.
              </Text>
            </Column>
          </Card>

          <Card radius="l" direction="column" border="info-alpha-medium" fillWidth gap="0">
            <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
              <FaDownload size={20} color="var(--info-strong)" />
              <Text variant="label-default-s" wrap="balance">Право на преносимост</Text>
            </Row>
            
            <div
              style={{
                width: "100%",
                height: "120px",
                background: "linear-gradient(135deg, var(--info-alpha-weak), var(--info-alpha-medium))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTop: "1px solid var(--neutral-alpha-weak)",
                borderBottom: "1px solid var(--neutral-alpha-weak)"
              }}
            >
              <FaDownload size={32} color="var(--info-strong)" />
            </div>
            
            <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1}>
              <Text variant="body-default-xl" wrap="balance">Право на преносимост</Text>
              <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance">
                Можете да получите вашите данни в структуриран формат.
              </Text>
            </Column>
          </Card>
        </Grid>

        {/* Data retention */}
        <Card padding="xl" radius="l" background="surface">
          <Column gap="m">
            <Row gap="m" vertical="center">
              <FaDatabase size={24} color="var(--info-strong)" />
              <Heading variant="heading-strong-l">
                Срок на съхранение
              </Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Вашите данни се съхраняват:
            </Text>
            <Column gap="s" paddingLeft="l">
              <Text variant="body-default-s">• <strong>Контактни данни:</strong> до 3 години след последната комуникация</Text>
              <Text variant="body-default-s">• <strong>Технически данни:</strong> до 2 години</Text>
              <Text variant="body-default-s">• <strong>Marketing данни:</strong> до оттегляне на съгласието</Text>
            </Column>
          </Column>
        </Card>

        {/* FAQ */}
        <Column gap="l" paddingX="l">
          <Heading variant="heading-strong-l" marginBottom="m" as="h2">
            Често задавани въпроси
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Отговори на най-често задаваните въпроси относно обработката на личните данни и вашите права.
          </Text>
        </Column>
          
        <AccordionGroup
          items={[
            {
              title: "Как мога да упражня правата си?",
              content: (
                <Text onBackground="neutral-weak">
                  Можете да се свържете с нас на email: seo@stanchev.bg с предмет "GDPR заявка". 
                  Ще отговорим в срок до 30 дни. В заявката посочете какво точно искате да направим с вашите данни.
                </Text>
              ),
            },
            {
              title: "Споделяме ли данни с трети страни?",
              content: (
                <Text onBackground="neutral-weak">
                  Не, не споделяме вашите лични данни с трети страни, освен ако това не е необходимо за 
                  предоставяне на услугите или не е изискано от закона.
                </Text>
              ),
            },
            {
              title: "Как защитаваме вашите данни?",
              content: (
                <Text onBackground="neutral-weak">
                  Използваме SSL криптиране, сигурни сървъри и редовни резервни копия. 
                  Достъпът до данните е ограничен само до уполномочени лица.
                </Text>
              ),
            },
            {
              title: "Мога ли да оттегля съгласието си?",
              content: (
                <Text onBackground="neutral-weak">
                  Да, можете да оттеглите съгласието си по всяко време, като се свържете с нас. 
                  Оттеглянето на съгласието не засяга законността на обработката преди оттеглянето.
                </Text>
              ),
            },
          ]}
        />

        {/* Contact for GDPR */}
        <Column gap="l" paddingX="l" align="center">
          <Heading variant="heading-strong-l" align="center" marginBottom="m" as="h2">
            Имате въпроси за GDPR?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            За упражняване на правата си или въпроси относно обработката на данни, 
            свържете се с нас на: <strong>seo@stanchev.bg</strong>
          </Text>
          <Row gap="l" wrap horizontal="center">
            <Button href="/kontakti" variant="primary" size="l" prefixIcon="mail">
              Свържете се с нас
            </Button>
            <Button href="mailto:seo@stanchev.bg?subject=GDPR%20заявка" variant="secondary" size="l" prefixIcon="mail">
              GDPR заявка
            </Button>
          </Row>
        </Column>

        {/* Footer info */}
        <Column gap="s" align="center" paddingY="l">
          <Text variant="body-default-s" align="center" onBackground="neutral-weak">
            Тази GDPR политика е част от нашите Общи условия за ползване.
          </Text>
          <Row gap="l" wrap horizontal="center">
            <Button href="/obshti-usloviya" variant="secondary" size="s">
              Общи условия
            </Button>
            <Button href="/cookie-policy" variant="secondary" size="s">
              Cookie Policy
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
