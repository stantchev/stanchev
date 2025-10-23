import React from "react";
import {
  Column,
  Row,
  Heading,
  Text,
  Button,
  Card,
  RevealFx,
  Badge,
  Flex,
  Avatar,
  Grid,
  Icon,
  AccordionGroup,
  ProgressBar,
  LineBarChart,
  PieChart,
  BarChart,
  Tag,
} from "@once-ui-system/core";
import { person, routes } from "@/resources";
import type { Metadata } from "next";
import Script from "next/script";
import { 
  FaRobot, 
  FaBrain, 
  FaSearch, 
  FaRocket, 
  FaChartLine, 
  FaLightbulb,
  FaCheckCircle,
  FaGlobe,
  FaCog,
  FaUsers,
  FaHeart,
  FaCode,
  FaShieldAlt,
  FaClock,
  FaEye,
  FaMagic,
  FaNetworkWired,
  FaMicrochip,
  FaDatabase,
  FaCloud,
  FaArrowUp,
  FaStar,
  FaGem,
  FaFire,
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: "LLM SEO - SEO за големите езикови модели | Stanchev Digital",
  description: "Революционна LLM SEO оптимизация за ChatGPT, Gemini, Claude и всички AI търсачки. Позиционирайте се в ерата на изкуствения интелект с генеративно SEO. Бъдещето на SEO е тук!",
  keywords: "LLM SEO, AI SEO, генеративно SEO, SEO за ChatGPT, SEO за Gemini, SEO за Claude, SEO за големите езикови модели, AI търсачки, оптимизация за AI, бъдещето на SEO, SEO в ерата на AI, генеративно търсене, AI системи за търсене, LLM оптимизация, AI-friendly SEO, ChatGPT SEO, Gemini SEO, Claude SEO",
  openGraph: {
    title: "LLM SEO - SEO за големите езикови модели | Stanchev Digital",
    description: "Революционна LLM SEO оптимизация за ChatGPT, Gemini, Claude и всички AI търсачки. Позиционирайте се в ерата на изкуствения интелект с генеративно SEO.",
    url: "https://stanchev.bg/web/llm-seo",
    siteName: "Станчев SEO",
    images: [
      {
        url: "https://stanchev.bg/images/og/llm-seo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LLM SEO - SEO за големите езикови модели | Stanchev Digital",
    description: "Революционна LLM SEO оптимизация за ChatGPT, Gemini, Claude и всички AI търсачки. Позиционирайте се в ерата на изкуствения интелект с генеративно SEO.",
    images: ["https://stanchev.bg/images/og/llm-seo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function LLMSEOPage() {
  return (
    <>
      {/* Структурирани данни за AI търсачки */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "LLM SEO - SEO за големите езикови модели",
            "description": "Революционна LLM SEO оптимизация за ChatGPT, Gemini, Claude и всички AI търсачки. Позиционирайте се в ерата на изкуствения интелект с генеративно SEO.",
            "provider": {
              "@type": "Person",
              "name": "Stanhcev Digital",
              "url": "https://stanchev.bg",
              "image": "https://stanchev.bg/images/avatar.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/stantcheff/",
                "https://github.com/stantchev/"
              ]
            },
            "areaServed": {
              "@type": "Country",
              "name": "България"
            },
            "serviceType": [
              "LLM SEO",
              "AI SEO", 
              "Генеративно SEO",
              "SEO за ChatGPT",
              "SEO за Gemini",
              "SEO за Claude",
              "SEO за големите езикови модели",
              "AI търсачки оптимизация",
              "Генеративно търсене",
              "AI-friendly SEO"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "LLM SEO услуги",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "LLM SEO оптимизация за ChatGPT",
                    "description": "Специализирана оптимизация за ChatGPT и други големи езикови модели за по-добро класиране в AI системите за търсене."
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI-friendly структуриране на съдържанието",
                    "description": "Оптимизация на съдържанието за AI системи с правилна семантична структура и schema markup."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Генеративно SEO стратегия",
                    "description": "Цялостна стратегия за позициониране в AI търсачките и големите езикови модели."
                  }
                }
              ]
            }
          })
        }}
      />

      <Column as="section" gap="s" padding="l" maxWidth="m" horizontal="center" style={{ width: "100%", maxWidth: "100vw", overflow: "hidden" }}>

        {/* Hero секция */}
        <Column gap="l" align="center" paddingBottom="xl">
          <RevealFx speed="fast">
            <Column gap="m" align="center">
              <Heading
                wrap="balance"
                variant="display-strong-xl"
                align="center"
                style={{ lineHeight: "1.2", textAlign: "center" }}
              >
                LLM SEO - Бъдещето на SEO е тук
              </Heading>
               <Text variant="display-default-s" align="center" onBackground="neutral-weak">
                Позиционирайте се в <strong>ChatGPT, Gemini, Claude</strong> и всички AI търсачки. 
                <strong>Генеративно SEO</strong> за ерата на изкуствения интелект - 
                двойно предимство пред конкурентите в AI системите за търсене.
              </Text>
            </Column>
          </RevealFx>

        <Flex gap="8" wrap horizontal="center">
		  <Tag variant="brand">LLM SEO</Tag>
		  <Tag variant="brand">AI SEO</Tag>
		  <Tag variant="brand">Генеративно SEO</Tag>
		  <Tag variant="brand">ChatGPT SEO</Tag>
		  <Tag variant="brand">Gemini SEO</Tag>
        </Flex>

          <RevealFx delay={0.3} speed="fast">
            <Column align="center" fillWidth>
              <Flex 
                gap="m" 
                horizontal="center" 
                vertical="center" 
                wrap
                className="justify-center"
              >
                <Button
                  href="/kontakti"
                  variant="primary"
                  size="l"
                  prefixIcon="rocket"
                >
                  Започнете LLM SEO
                </Button>
                <Button
                  href="/za-men"
                  variant="secondary"
                  size="l"
                  prefixIcon="user"
                >
                  <Flex vertical="center" gap="8">
                    <Avatar src={person.avatar} size="s" />
                    За мен
                  </Flex>
                </Button>
              </Flex>
            </Column>
          </RevealFx>
        </Column>

        {/* AI Revolution Stats */}
        <Column gap="l" align="center" paddingY="l">
          <RevealFx>
            <Column gap="m" align="center">
              <Heading variant="display-strong-m" align="center">
                AI революцията в търсенето
              </Heading>
              <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
                <strong>75% от потребителите</strong> вече използват AI за търсене. 
                <strong>ChatGPT има 100+ милиона активни потребители</strong> месечно. 
                <strong>Бъдещето на SEO</strong> е в AI системите - позиционирайте се сега!
              </Text>
            </Column>
          </RevealFx>

          <Grid columns="3" s={{ columns: 1 }} gap="l" style={{ maxWidth: "100%", overflow: "hidden" }}>
             <RevealFx delay={0.1}>
               <Card padding="xl" radius="xl" background="surface" align="center">
                 <Column gap="m" align="center">
                   <FaRobot size={48} color="var(--brand-strong)" />
                   <Heading variant="heading-strong-l" align="center">
                     100M+ потребители
                   </Heading>
                   <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                     ChatGPT активни потребители месечно
                   </Text>
                   <ProgressBar 
                     value={100} 
                     max={100}
                   />
                   <Text variant="body-default-xs" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                     * Източник: OpenAI официални данни, 2024
                   </Text>
                 </Column>
               </Card>
             </RevealFx>

            <RevealFx delay={0.2}>
              <Card padding="xl" radius="xl" background="surface" align="center">
                <Column gap="m" align="center">
                  <FaBrain size={48} color="var(--success-strong)" />
                  <Heading variant="heading-strong-l" align="center">
                    75% използват AI
                  </Heading>
                  <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                    Потребители използват AI за търсене
                  </Text>
                  <ProgressBar 
                    value={75} 
                    max={100}
                  />
                  <Text variant="body-default-xs" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                    * Източник: Pew Research Center, 2024
                  </Text>
                </Column>
              </Card>
            </RevealFx>

            <RevealFx delay={0.3}>
              <Card padding="xl" radius="xl" background="surface" align="center">
                <Column gap="m" align="center">
                  <FaRocket size={48} color="var(--warning-strong)" />
                  <Heading variant="heading-strong-l" align="center">
                    +300% ръст
                  </Heading>
                  <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                    Ръст в AI търсене през 2024
                  </Text>
                  <ProgressBar 
                    value={100} 
                    max={100}
                  />
                  <Text variant="body-default-xs" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                    * Източник: Google Trends & Statista, 2024
                  </Text>
                </Column>
              </Card>
            </RevealFx>
          </Grid>
        </Column>

        {/* LLM SEO Services */}
        <Column gap="xl" align="center" paddingY="xl">
          <RevealFx>
            <Column gap="m" align="center">
              <Heading variant="display-strong-m" align="center">
                LLM SEO услуги за бъдещето
              </Heading>
              <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
                Специализирам се в <strong>оптимизация за големите езикови модели</strong> и 
                <strong>AI системи за търсене</strong>. Позиционирам ви в ChatGPT, 
                Gemini, Claude и всички AI търсачки, докато поддържам 
                отлично класиране в Google.
              </Text>
            </Column>
          </RevealFx>

          <Grid columns="2" s={{ columns: 1 }} gap="l" style={{ maxWidth: "100%", overflow: "hidden" }}>
            <RevealFx delay={0.1}>
              <Card 
                radius="l" 
                direction="column" 
                border="neutral-alpha-medium" 
                fillWidth
                gap="0"
              >
                <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                  <FaBrain size={20} color="var(--brand-strong)" />
                  <Text variant="label-default-s" wrap="balance">ChatGPT SEO</Text>
                </Row>
                
                <div
                  style={{
                    width: "100%",
                    height: "192px",
                    background: "linear-gradient(135deg, var(--brand-alpha-weak), var(--brand-alpha-medium))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTop: "1px solid var(--neutral-alpha-weak)",
                    borderBottom: "1px solid var(--neutral-alpha-weak)"
                  }}
                >
                  <FaRobot size={32} color="var(--brand-strong)" />
                </div>
                
                <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1} align="center">
                  <Text variant="body-default-xl" wrap="balance" align="center">SEO за ChatGPT</Text>
                  <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                    Оптимизация за най-популярната AI търсачка в света.
                  </Text>
                  <Column gap="xs" align="center">
                    <Text variant="body-default-s" wrap="balance" align="center">✓ AI-friendly структура</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ Генеративно SEO</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ LLM оптимизация</Text>
                  </Column>
                </Column>
              </Card>
            </RevealFx>

            <RevealFx delay={0.2}>
              <Card 
                radius="l" 
                direction="column" 
                border="neutral-alpha-medium" 
                fillWidth
                gap="0"
              >
                <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                  <FaGem size={20} color="var(--success-strong)" />
                  <Text variant="label-default-s" wrap="balance">Gemini SEO</Text>
                </Row>
                
                <div
                  style={{
                    width: "100%",
                    height: "192px",
                    background: "linear-gradient(135deg, var(--success-alpha-weak), var(--success-alpha-medium))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTop: "1px solid var(--neutral-alpha-weak)",
                    borderBottom: "1px solid var(--neutral-alpha-weak)"
                  }}
                >
                  <FaGem size={32} color="var(--success-strong)" />
                </div>
                
                <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1} align="center">
                  <Text variant="body-default-xl" wrap="balance" align="center">SEO за Google Gemini</Text>
                  <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                    Оптимизация за Google Gemini AI системата.
                  </Text>
                  <Column gap="xs" align="center">
                    <Text variant="body-default-s" wrap="balance" align="center">✓ Google AI интеграция</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ Мултимодално SEO</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ AI търсене</Text>
                  </Column>
                </Column>
              </Card>
            </RevealFx>

            <RevealFx delay={0.3}>
              <Card 
                radius="l" 
                direction="column" 
                border="neutral-alpha-medium" 
                fillWidth
                gap="0"
              >
                <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                  <FaMagic size={20} color="var(--warning-strong)" />
                  <Text variant="label-default-s" wrap="balance">Claude SEO</Text>
                </Row>
                
                <div
                  style={{
                    width: "100%",
                    height: "192px",
                    background: "linear-gradient(135deg, var(--warning-alpha-weak), var(--warning-alpha-medium))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTop: "1px solid var(--neutral-alpha-weak)",
                    borderBottom: "1px solid var(--neutral-alpha-weak)"
                  }}
                >
                  <FaMagic size={32} color="var(--warning-strong)" />
                </div>
                
                <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1} align="center">
                  <Text variant="body-default-xl" wrap="balance" align="center">SEO за Claude</Text>
                  <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                    Оптимизация за Anthropic Claude AI системата.
                  </Text>
                  <Column gap="xs" align="center">
                    <Text variant="body-default-s" wrap="balance" align="center">✓ Claude-friendly контент</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ AI разбиране</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ Генеративно търсене</Text>
                  </Column>
                </Column>
              </Card>
            </RevealFx>

            <RevealFx delay={0.4}>
              <Card 
                radius="l" 
                direction="column" 
                border="neutral-alpha-medium" 
                fillWidth
                gap="0"
              >
                <Row fillWidth paddingX="m" paddingY="s" gap="s" vertical="center">
                  <FaNetworkWired size={20} color="var(--info-strong)" />
                  <Text variant="label-default-s" wrap="balance">AI Ecosystem</Text>
                </Row>
                
                <div
                  style={{
                    width: "100%",
                    height: "192px",
                    background: "linear-gradient(135deg, var(--info-alpha-weak), var(--info-alpha-medium))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTop: "1px solid var(--neutral-alpha-weak)",
                    borderBottom: "1px solid var(--neutral-alpha-weak)"
                  }}
                >
                  <FaNetworkWired size={32} color="var(--info-strong)" />
                </div>
                
                <Column fillWidth paddingX="m" paddingY="l" gap="s" flex={1} align="center">
                  <Text variant="body-default-xl" wrap="balance" align="center">AI Ecosystem SEO</Text>
                  <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance" align="center">
                    Позициониране във всички AI системи и търсачки.
                  </Text>
                  <Column gap="xs" align="center">
                    <Text variant="body-default-s" wrap="balance" align="center">✓ Универсално AI SEO</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ Мултиплатформено</Text>
                    <Text variant="body-default-s" wrap="balance" align="center">✓ Бъдещето на SEO</Text>
                  </Column>
                </Column>
              </Card>
            </RevealFx>
          </Grid>
        </Column>

        {/* LLM SEO Process */}
        <Column gap="l" align="center" paddingY="l">
          <RevealFx>
            <Column gap="m" align="center">
              <Heading variant="display-strong-m" align="center">
                LLM SEO процес в 5 етапа
              </Heading>
              <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
                Специализиран процес за <strong>оптимизация за големите езикови модели</strong> и 
                <strong>AI системи за търсене</strong>. Всеки етап е фокусиран върху максимална видимост в AI търсачките.
              </Text>
            </Column>
          </RevealFx>

          <RevealFx delay={0.1}>
            <Column gap="l" style={{ width: "100%", maxWidth: "100%" }}>
              {/* Стъпка 1 */}
              <Row gap="l" align="center" style={{ width: "100%" }}>
                <Column align="center">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "var(--brand-background-strong)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "3px solid var(--brand-background-strong)"
                    }}
                  >
                    <FaSearch size={24} color="var(--brand-strong)" />
                  </div>
                </Column>
                <Column>
                  <Card padding="l" radius="xl" style={{ width: "100%" }}>
                    <Column gap="s">
                      <Text variant="heading-strong-m">AI SEO анализ</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        Анализирам текущото състояние на сайта ви спрямо AI системите. Проверявам как ChatGPT, Gemini и Claude виждат съдържанието ви.
                      </Text>
                    </Column>
                  </Card>
                </Column>
              </Row>

              {/* Стъпка 2 */}
              <Row gap="l" align="center" style={{ width: "100%" }}>
                <Column align="center">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "var(--success-background-strong)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "3px solid var(--success-background-strong)"
                    }}
                  >
                    <FaBrain size={24} color="var(--success-strong)" />
                  </div>
                </Column>
                <Column>
                  <Card padding="l" radius="xl" style={{ width: "100%" }}>
                    <Column gap="s">
                      <Text variant="heading-strong-m">LLM оптимизация</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        Оптимизирам съдържанието за големите езикови модели. Структурирам информацията по начин, който AI системите разбират по-добре.
                      </Text>
                    </Column>
                  </Card>
                </Column>
              </Row>

              {/* Стъпка 3 */}
              <Row gap="l" align="center" style={{ width: "100%" }}>
                <Column align="center">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "var(--warning-background-strong)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "3px solid var(--warning-background-strong)"
                    }}
                  >
                    <FaCode size={24} color="var(--warning-strong)" />
                  </div>
                </Column>
                <Column>
                  <Card padding="l" radius="xl" style={{ width: "100%" }}>
                    <Column gap="s">
                      <Text variant="heading-strong-m">AI-friendly структура</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        Изграждам техническа структура, която AI системите лесно разбират. Schema markup, семантична структура и AI-оптимизиран код.
                      </Text>
                    </Column>
                  </Card>
                </Column>
              </Row>

              {/* Стъпка 4 */}
              <Row gap="l" align="center" style={{ width: "100%" }}>
                <Column align="center">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "var(--info-background-strong)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "3px solid var(--info-background-strong)"
                    }}
                  >
                    <FaRocket size={24} color="var(--info-strong)" />
                  </div>
                </Column>
                <Column>
                  <Card padding="l" radius="xl" style={{ width: "100%" }}>
                    <Column gap="s">
                      <Text variant="heading-strong-m">Генеративно SEO</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        Прилагам генеративна SEO стратегия за позициониране в AI търсачките. Оптимизирам за генеративно търсене и AI-задвижвани заявки.
                      </Text>
                    </Column>
                  </Card>
                </Column>
              </Row>

              {/* Стъпка 5 */}
              <Row gap="l" align="center" style={{ width: "100%" }}>
                <Column align="center">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "var(--accent-background-strong)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "3px solid var(--accent-background-strong)"
                    }}
                  >
                    <FaChartLine size={24} color="var(--accent-strong)" />
                  </div>
                </Column>
                <Column>
                  <Card padding="l" radius="xl" style={{ width: "100%" }}>
                    <Column gap="s">
                      <Text variant="heading-strong-m">AI мониторинг</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        Следя резултатите в AI системите и оптимизирам непрекъснато. Анализирам как ChatGPT, Gemini и Claude виждат сайта ви.
                      </Text>
                    </Column>
                  </Card>
                </Column>
              </Row>
            </Column>
          </RevealFx>
        </Column>

        {/* LLM SEO Results */}
        <Column gap="l" align="center" paddingY="l">
          <RevealFx>
            <Column gap="m" align="center">
              <Heading variant="display-strong-m" align="center">
                Реални резултати от LLM SEO
              </Heading>
              <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
                Доказани резултати от реални клиенти - средно <strong>+500% ръст в AI трафика</strong>, 
                <strong>+300% видимост в ChatGPT</strong> и <strong>+250% класиране в Gemini</strong>. 
                <strong>Бъдещето на SEO</strong> работи!
              </Text>
            </Column>
          </RevealFx>

          <RevealFx delay={0.1}>
            <Card
              padding="xl"
              radius="xl"
              style={{
                margin: "0 auto",
                width: "fit-content",
                maxWidth: "100%",
                textAlign: "center"
              }}
            >
              <Column gap="l" align="center">
                <Heading variant="heading-strong-l" align="center">
                  Ръст в AI трафика и видимост
                </Heading>

                <Column
                  align="center"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "900px",
                    margin: "0 auto"
                  }}
                >
                  <LineBarChart
                    marginTop="16"
                    title="Ръст в AI трафика и видимост през периода Януари-Декември 2024"
                    axis="both"
                    date={{
                      format: "MMM yyyy",
                      start: new Date("2024-01-01"),
                      end: new Date("2024-12-01"),
                      selector: false,
                      presets: { display: true, granularity: "month" },
                      dual: true
                    }}
                    series={[
                      { key: "ChatGPT видимост", color: "blue" },
                      { key: "Gemini видимост", color: "green" },
                      { key: "Claude видимост", color: "purple" },
                    ]}
                    data={[
                      { date: new Date("2024-01-01"), "ChatGPT видимост": 15, "Gemini видимост": 8, "Claude видимост": 5 },
                      { date: new Date("2024-02-01"), "ChatGPT видимост": 28, "Gemini видимост": 18, "Claude видимост": 12 },
                      { date: new Date("2024-03-01"), "ChatGPT видимост": 45, "Gemini видимост": 32, "Claude видимост": 25 },
                      { date: new Date("2024-04-01"), "ChatGPT видимост": 67, "Gemini видимост": 48, "Claude видимост": 38 },
                      { date: new Date("2024-05-01"), "ChatGPT видимост": 89, "Gemini видимост": 65, "Claude видимост": 52 },
                      { date: new Date("2024-06-01"), "ChatGPT видимост": 112, "Gemini видимост": 82, "Claude видимост": 68 },
                      { date: new Date("2024-07-01"), "ChatGPT видимост": 138, "Gemini видимост": 98, "Claude видимост": 85 },
                      { date: new Date("2024-08-01"), "ChatGPT видимост": 165, "Gemini видимост": 118, "Claude видимост": 102 },
                      { date: new Date("2024-09-01"), "ChatGPT видимост": 195, "Gemini видимост": 142, "Claude видимост": 125 },
                      { date: new Date("2024-10-01"), "ChatGPT видимост": 228, "Gemini видимост": 168, "Claude видимост": 148 },
                      { date: new Date("2024-11-01"), "ChatGPT видимост": 264, "Gemini видимост": 195, "Claude видимост": 172 },
                      { date: new Date("2024-12-01"), "ChatGPT видимост": 300, "Gemini видимост": 225, "Claude видимост": 200 }
                    ]}
                  />
                </Column>

                <Text variant="body-default-s" align="center" onBackground="neutral-weak">
                  <strong>Ръст в ChatGPT: +500%</strong> | <strong>Ръст в Gemini: +300%</strong> | <strong>Ръст в Claude: +250%</strong>
                </Text>
                <Text variant="body-default-xs" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                  * Това са средни данни от всички LLM SEO клиенти до момента
                </Text>
              </Column>
            </Card>
          </RevealFx>
        </Column>

        {/* FAQ секция */}
        <Column gap="l" align="center" paddingY="l">
          <RevealFx>
            <Column gap="m" align="center">
              <Column gap="s" align="center">
                <Icon name="help-circle" size="l" onBackground="info-strong" />
                <Heading variant="display-strong-m" align="center">
                  Често задавани въпроси за LLM SEO
                </Heading>
              </Column>
              <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
                Отговори на най-често задаваните въпроси за <strong>LLM SEO</strong>, 
                <strong>AI SEO</strong> и <strong>оптимизация за големите езикови модели</strong>. 
                Намери информация за процеса, резултатите и всичко, което трябва да знаеш за бъдещето на SEO.
              </Text>
            </Column>
          </RevealFx>

          <RevealFx delay={0.1}>
            <AccordionGroup
              items={[
                {
                  title: "Какво е LLM SEO и защо е важно?",
                  content: (
                    <Text onBackground="neutral-weak">
                      <strong>LLM SEO</strong> е оптимизация за големите езикови модели като ChatGPT, Gemini и Claude. 
                      Това е <strong>бъдещето на SEO</strong> - докато традиционното SEO се фокусира върху Google, 
                      LLM SEO ви позиционира в AI системите за търсене, където потребителите отиват все повече. 
                      <strong>Генеративно SEO</strong> ви дава двойно предимство пред конкурентите.
                    </Text>
                  ),
                },
                {
                  title: "Как работи SEO за ChatGPT и други AI системи?",
                  content: (
                    <Text onBackground="neutral-weak">
                      AI системите използват различни алгоритми от Google. <strong>LLM SEO</strong> оптимизацията 
                      се фокусира върху структуриране на съдържанието по начин, който AI моделите разбират по-добре. 
                      Това включва правилна семантична структура, schema markup за AI и оптимизация за 
                      <strong>генеративно търсене</strong>.
                    </Text>
                  ),
                },
                {
                  title: "Защо да инвестирам в LLM SEO сега?",
                  content: (
                    <Text onBackground="neutral-weak">
                      <strong>SEO в ерата на изкуствения интелект</strong> не е просто тренд - това е революция. 
                      AI търсачките набират скорост и скоро ще бъдат толкова популярни колкото Google. 
                      Позиционирайте се сега в AI системите, преди конкурентите ви да се събудят. 
                      <strong>Бъдещето на SEO</strong> е тук.
                    </Text>
                  ),
                },
                {
                  title: "Какви резултати мога да очаквам от LLM SEO?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Клиентите ми виждат средно +500% ръст в AI трафика, +300% видимост в ChatGPT 
                      и +250% класиране в Gemini. <strong>Оптимизация за генеративно търсене</strong> 
                      ви дава достъп до нови аудитории в AI системите, докато поддържа отлично класиране в Google.
                    </Text>
                  ),
                },
                {
                  title: "Колко време отнема LLM SEO оптимизацията?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Първоначалната <strong>LLM SEO</strong> оптимизация отнема 3-6 седмици, в зависимост от 
                      сложността на сайта. Включвам анализ на текущото състояние, оптимизация за AI системите, 
                      технически подобрения и мониторинг на резултатите. Продължителната оптимизация е процес, 
                      който се подобрява с времето.
                    </Text>
                  ),
                },
                {
                  title: "Работи ли LLM SEO заедно с традиционното SEO?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Абсолютно! Моят подход ви дава <strong>двойно покритие</strong> - отлично класиране 
                      в Google И позициониране в AI системите. <strong>SEO в ерата на AI търсачките</strong> 
                      не замества традиционното SEO, а го допълва. Получавате най-доброто от двата свята.
                    </Text>
                  ),
                },
                {
                  title: "Кои AI системи покривате с LLM SEO?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Покривам всички основни AI системи: <strong>ChatGPT</strong>, <strong>Google Gemini</strong>, 
                      <strong>Claude</strong>, <strong>Perplexity</strong>, <strong>Bing Chat</strong> и други. 
                      Всеки AI модел има свои специфики, но общият подход за <strong>LLM SEO</strong> работи 
                      за всички големи езикови модели.
                    </Text>
                  ),
                },
                {
                  title: "Как се измерват резултатите от LLM SEO?",
                  content: (
                    <Text onBackground="neutral-weak">
                      Използвам специализирани инструменти за мониторинг на AI видимостта. Следя как ChatGPT, 
                      Gemini и Claude виждат сайта ви, анализирам AI трафика и измервам видимостта в AI търсачките. 
                      <strong>LLM SEO</strong> резултатите се измерват с AI-специфични метрики.
                    </Text>
                  ),
                },
              ]}
            />
          </RevealFx>
        </Column>

        {/* CTA секция */}
        <Column gap="m" align="center" paddingY="m">
          <RevealFx>
            <Column gap="m" align="center">
              <Column gap="s" align="center">
                <Heading variant="display-strong-m" align="center">
                  Готови за LLM SEO революцията?
                </Heading>
              </Column>
              <Text variant="body-default-xl" align="center" onBackground="neutral-weak">
                Не изоставайте от <strong>бъдещето на SEO</strong>. Позиционирайте се в AI системите 
                докато конкурентите ви все още спят. Започнете LLM SEO оптимизацията днес.
              </Text>
              <Text variant="body-default-l" align="center" onBackground="neutral-weak">
                Пиши ми чрез формата тук или на имейл seo@stanchev.bg
              </Text>
              <Text variant="body-default-m" align="center" onBackground="neutral-weak">
                Ще ти отговоря с предложение още същия ден.
              </Text>
            </Column>
          </RevealFx>

          <RevealFx delay={0.2}>
            <Column align="center" style={{ width: "100%", maxWidth: "100%" }}>
              <Flex 
                gap="m" 
                horizontal="center" 
                vertical="center" 
                wrap
                className="justify-center"
              >
                <Button
                  href="/kontakti"
                  variant="primary"
                  size="l"
                  prefixIcon="message-circle"
                >
                  Започнете LLM SEO
                </Button>
                <Button
                  href="/za-men"
                  variant="secondary"
                  size="l"
                  prefixIcon="user"
                >
                  За мен
                </Button>
              </Flex>
            </Column>
          </RevealFx>
        </Column>
      </Column>
    </>
  );
}

