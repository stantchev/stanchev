import { Background, Button, Column, Grid, Heading, Icon, Line, Mask, MatrixFx, Row, Table, Tag, Text, type IconName } from "@once-ui-system/core";
import { CodeBlock } from "@once-ui-system/core/code";
import { Toolkit } from "@/components/seo/Engagement";
import { GeoBackground } from "@/components/seo/GeoBackground";
import { IntegrationHub } from "@/components/seo/IntegrationHub";
import { IntegrationSpec } from "@/components/seo/IntegrationSpec";
import { JsonLd } from "@/components/seo/JsonLd";
import { RevealOnView } from "@/components/seo/RevealOnView";
import { serviceMetadata } from "@/components/seo/metadata";
import { Faq, SectionTitle, Trail } from "@/components/seo/blocks";
import { FeaturesBordered } from "@/components/seo/Features";
import { FeaturesTimeline } from "@/components/seo/FeaturesMore";
import { baseURL } from "@/resources";
import { getService, servicePath } from "@/resources/services";

export const metadata = serviceMetadata("seo-integratsiya");

const s = getService("seo-integratsiya")!;
const url = `${baseURL}${servicePath(s)}`;

const metaCode = `// lib/seo.ts - един източник на метаданни
import type { Metadata } from "next";

export function buildMetadata(p: { title: string; description: string; path: string }): Metadata {
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: p.path },
    openGraph: { title: p.title, description: p.description, url: p.path, type: "website" },
  };
}`;

const sitemapCode = `// app/sitemap.ts - генериран от същите данни като страниците
import type { MetadataRoute } from "next";
import { pages } from "@/data/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: \`https://example.com\${p.path}\`,
    lastModified: p.updatedAt,
  }));
}`;

const jsonLdCode = `// components/JsonLd.tsx - сървърен компонент
export function JsonLd({ data }: { data: object }) {
  // "<" се екранира, за да не може данните да затворят тага
  const json = JSON.stringify(data).replace(/</g, "\\\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}`;

const redirectCode = `// next.config.mjs - карта на пренасочванията при миграция
export default {
  async redirects() {
    return [
      { source: "/stara-stranica", destination: "/nova-stranica", permanent: true },
    ];
  },
};`;

const trackCode = `// събитие при изпратена форма (GA4 през gtag или Tag Manager)
window.gtag?.("event", "generate_lead", { form_id: "contact" });`;

const matrix: [string, string, string, string][] = [
  ["Метаданни", "Metadata API в кода", "SEO плъгин или код в темата", "Модул или шаблон на темата"],
  ["Структурирани данни", "JSON-LD компонент", "Плъгин или персонализиран код", "Модул или шаблон"],
  ["Sitemap и robots", "Генерират се от кода", "Плъгин или ядрото на WordPress", "Модул или настройка"],
  ["Пренасочвания", "Конфигурация или middleware", "Плъгин или правила на сървъра", "Модул или правила на сървъра"],
  ["Измерване", "Скрипт или Tag Manager", "Скрипт или Tag Manager", "Скрипт или Tag Manager"],
];

const migrationItems: { icon: IconName; title: string; description: string }[] = [
  { icon: "code", title: "Тестова среда", description: "Сайтът се изгражда на отделен адрес, докато старият работи без прекъсване." },
  { icon: "arrowRight", title: "Карта на 301", description: "Всеки стар адрес сочи към най-близката нова страница, без вериги." },
  { icon: "lock", title: "Една HTTPS версия", description: "http, www и без www водят с пренасочване към единствената версия на домейна." },
  { icon: "globe", title: "Sitemap и robots", description: "Новата карта на сайта е подадена, а robots.txt не блокира нищо по грешка." },
  { icon: "document", title: "Метаданни и canonical", description: "Title, description и H1 на важните страници са пренесени и проверени." },
  { icon: "search", title: "Search Console", description: "След пускането следим индексирането, грешките и промените в позициите." },
];

const faq = [
  ...s.faq,
  { q: "Какво е SEO интеграция?", a: "SEO интеграцията вгражда SEO механизмите - метаданни, структурирани данни, sitemap, robots, пренасочвания и измерване - директно в сайта, така че да работят автоматично и да се поддържат лесно. За разлика от SEO оптимизацията на съдържанието, тя е инженерна работа по кода или темата." },
  { q: "С какво SEO интеграцията се различава от SEO одита?", a: "Одитът открива проблемите и подрежда приоритетите. Интеграцията ги решава на ниво код: внедрява поправките и механизмите, които ги предотвратяват. Често започваме с одит, а след него следва интеграция." },
  { q: "Подходяща ли е за нов сайт или само за съществуващ?", a: "И за двата. При нов сайт SEO основата се заражда още в разработката и е най-евтина. При съществуващ внедряваме липсващото, без да пипаме дизайна." },
  { q: "Работите ли с наш разработчик или агенция?", a: "Да. Мога да подготвя спецификация, да прегледам промените преди пускане и да проверя внедряването. Можете да ползвате генератора на спецификация по-горе." },
  { q: "Как се прави SEO миграция без загуба на позиции?", a: "Преди пускането се подготвя карта на постоянните пренасочвания, пренасят се метаданните на важните страници, сайтът се тества на отделна среда, а след пускането следим Search Console. Позиции не се гарантират, но рискът от загуби намалява." },
  { q: "Какво е нужно за интеграция в WordPress?", a: "Зависи от темата и плъгините. Понякога стига правилна настройка на SEO плъгин, а в други случаи е нужен персонализиран код. След кратък преглед предлагам по-простото решение." },
  { q: "Настройвате ли Search Console и Analytics?", a: "Да. Верификация на сайта, подаване на sitemap, GA4 и ключови събития като заявка, обаждане или покупка." },
  { q: "Колко струва SEO интеграцията?", a: "Основната интеграция за малък сайт е от 170 €, а разширената за по-голям сайт или магазин е от 280 €. Крайната цена зависи от платформата и броя шаблони." },
];

export default function SeoIntegrationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: s.metaTitle, description: s.metaDescription, inLanguage: "bg-BG", breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#service` } },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "SEO интеграция",
        serviceType: "Внедряване на SEO механизми в сайт",
        description: s.metaDescription,
        url,
        areaServed: { "@type": "Country", name: "България" },
        provider: { "@type": "ProfessionalService", name: "Stanchev Digital", url: baseURL },
        offers: [
          { "@type": "Offer", name: "Основна интеграция", priceSpecification: { "@type": "PriceSpecification", minPrice: 170, priceCurrency: "EUR" } },
          { "@type": "Offer", name: "Разширена интеграция", priceSpecification: { "@type": "PriceSpecification", minPrice: 280, priceCurrency: "EUR" } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name: "Уеб услуги", item: `${baseURL}/web` },
          { "@type": "ListItem", position: 3, name: "SEO интеграция", item: url },
        ],
      },
    ],
  };

  const bentoWide = [0, 2, 5];

  return (
    <Column fillWidth horizontal="center" paddingBottom="64" gap="48" s={{ paddingBottom: "40", gap: "32" }}>
      <JsonLd data={schema} />

      <Column fillWidth horizontal="center" paddingTop="8" paddingBottom="16">
        <Background
          position="absolute"
          fill
          pointerEvents="none"
          style={{ left: "50%", width: "100vw", transform: "translateX(-50%)", top: "-24px", height: "calc(100% + 24px)" }}
          gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 20, y: 0, width: 120, height: 80, opacity: 60 }}
          lines={{ display: true, size: "24", thickness: 1, angle: 0, color: "neutral-alpha-weak", opacity: 40 }}
          mask={{ x: 50, y: 0, radius: 100 }}
        />
        <Column zIndex={1} maxWidth="l" fillWidth gap="32">
          <Trail items={[{ label: "Начало", href: "/" }, { label: "Уеб услуги", href: "/web" }, { label: "SEO интеграция" }]} />
          <Row fillWidth gap="48" vertical="center" m={{ direction: "column" }}>
            <Column flex={6} gap="24" fillWidth>
              <Row gap="8" wrap>
                <Tag scheme="brand" size="m">Next.js</Tag>
                <Tag scheme="brand" size="m">WordPress</Tag>
                <Tag scheme="neutral" size="m">Search Console</Tag>
                <Tag scheme="neutral" size="m">GA4</Tag>
              </Row>
              <Heading as="h1" variant="display-strong-l" wrap="balance">
                SEO интеграция: оптимизация, вградена в кода на сайта
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
                {s.lead} Метаданни, structured data, sitemap, пренасочвания и измерване - свързани в една система, а не залепени накрая.
              </Text>
              <Row gap="12" s={{ direction: "column" }}>
                <Button href="/kontakti" size="l" arrowIcon>Запитване</Button>
                <Button href="#spetsifikatsiya" size="l" variant="secondary">Съберете спецификация</Button>
              </Row>
              <Row gap="24" wrap textVariant="label-default-s" onBackground="neutral-weak">
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> От {s.priceFrom.replace("от ", "")}</Row>
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> Работя и с вашия разработчик</Row>
              </Row>
            </Column>
            <Column flex={5} fillWidth minWidth={0}>
              <IntegrationHub />
            </Column>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <RevealOnView>
            <Column fillWidth gap="12" paddingLeft="24" style={{ borderLeft: "3px solid var(--brand-solid-medium)" }}>
              <Heading as="h2" variant="heading-strong-xl" wrap="balance">Какво е SEO интеграция?</Heading>
              <Text variant="body-default-l" onBackground="neutral-medium">
                SEO интеграцията вгражда SEO механизмите - метаданни, структурирани данни, sitemap, robots.txt, пренасочвания и измерване - директно в кода или темата на сайта, така че да работят автоматично и да се поддържат лесно. Това е инженерната част на SEO: при нов сайт спестява поправки по-късно, а при съществуващ затваря техническите пропуски.
              </Text>
            </Column>
          </RevealOnView>

          <Column gap="24">
            <SectionTitle eyebrow="Обхват" title="Какво се интегрира" lead="Шест механизма, всеки проверен с инструментите на Google." />
            <RevealOnView>
              <Grid fillWidth columns={3} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
                {s.includes.map((a, i) => (
                  <Column key={a.title} className={bentoWide.includes(i) ? "bento-wide" : undefined} padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface" overflow="hidden">
                    {bentoWide.includes(i) && (
                      <Mask position="absolute" right="0" top="0" radius={33} x={75} y={0}>
                        <MatrixFx size={1.5} colors={["brand-background-strong"]} flicker />
                      </Mask>
                    )}
                    <Icon name={(["document", "code", "globe", "chartBar", "arrowRight", "check"] as IconName[])[i % 6]} size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" />
                    <Heading as="h3" variant="heading-strong-m">{a.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">{a.text}</Text>
                  </Column>
                ))}
              </Grid>
            </RevealOnView>
          </Column>

          <Column gap="24">
            <SectionTitle eyebrow="В кода" title="Как изглежда интеграцията в Next.js" lead="Пет малки парчета, които заедно правят SEO автоматично. В други платформи същото се прави с модули или код в темата." />
            <CodeBlock
              codes={[
                { code: metaCode, language: "ts", label: "metadata" },
                { code: sitemapCode, language: "ts", label: "sitemap" },
                { code: jsonLdCode, language: "tsx", label: "json-ld" },
                { code: redirectCode, language: "js", label: "redirects" },
                { code: trackCode, language: "ts", label: "ga4" },
              ]}
              copyButton
            />
          </Column>

          <Column gap="24">
            <SectionTitle eyebrow="Платформи" title="Как се интегрира на различните платформи" lead="Принципът е един, начинът зависи от платформата." />
            <Table
              data={{
                headers: [
                  { content: "", key: "k" },
                  { content: "Next.js", key: "n" },
                  { content: "WordPress", key: "w" },
                  { content: "OpenCart / Magento", key: "m" },
                ],
                rows: matrix.map(([a, b, c, d]) => [a, b, c, d]),
              }}
            />
          </Column>

          <Column gap="24" id="spetsifikatsiya">
            <SectionTitle eyebrow="Инструмент" title="Съберете спецификация за вашия разработчик" lead="Изберете платформа и какво да се внедри. Копирайте готовия текст и го дайте на екипа си." />
            <IntegrationSpec />
          </Column>

          <FeaturesTimeline
            title="Как протича интеграцията"
            lead="Четири стъпки, всяка с проверка."
            steps={s.process.map((p) => ({ title: p.title, description: p.text }))}
            side={
              <Column fillWidth aspectRatio="3/4" m={{ aspectRatio: "16/10" }} radius="l" border overflow="hidden" center padding="xl" gap="16" align="center">
                <Background position="absolute" top="0" left="0" fill gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 50, y: 100, width: 120, height: 90, opacity: 70 }} lines={{ display: true, size: "16", thickness: 1, angle: 0, color: "neutral-alpha-weak", opacity: 40 }} />
                <Column zIndex={1} center gap="12" align="center">
                  <Icon name="chartBar" size="xl" onBackground="brand-weak" />
                  <Text variant="heading-strong-l">Проверено, не предположено</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">Rich Results Test, URL Inspection и Lighthouse преди предаването.</Text>
                </Column>
              </Column>
            }
          />

          <RevealOnView>
            <FeaturesBordered title="Интеграция при миграция и редизайн" lead="Шест проверки, които пазят позициите при смяна на сайт или платформа." items={migrationItems} />
          </RevealOnView>

          <Column gap="24" id="ceni">
            <SectionTitle eyebrow="Цени" title="Цени на SEO интеграцията" lead="Стартови цени в евро. Крайната цена зависи от платформата и броя шаблони." />
            <RevealOnView>
              <Grid fillWidth columns={2} s={{ columns: 1 }} gap="16">
                {(s.packages ?? []).map((p, i) => (
                  <Column key={p.name} padding="32" s={{ padding: "20" }} gap="16" radius="l" border={i === 1 ? "brand-alpha-medium" : "neutral-alpha-medium"} background="surface" overflow="hidden">
                    {i === 1 && <Background position="absolute" fill gradient={{ display: true, colorStart: "brand-alpha-weak", colorEnd: "static-transparent", x: 50, y: 0, width: 120, height: 70, opacity: 60 }} />}
                    <Row zIndex={1} horizontal="between" vertical="center" wrap gap="8">
                      <Heading as="h3" variant="heading-strong-l">{p.name}</Heading>
                      {i === 1 && <Tag scheme="brand" size="s">За магазини</Tag>}
                    </Row>
                    <Text zIndex={1} variant="display-strong-s">{p.price}</Text>
                    <Text zIndex={1} variant="body-default-s" onBackground="neutral-weak">{p.fit}</Text>
                    <Line zIndex={1} />
                    <Column zIndex={1} gap="8">
                      {p.features.map((f) => (
                        <Row key={f} gap="8" vertical="center" textVariant="body-default-s">
                          <Icon name="check" size="xs" onBackground="brand-medium" /> {f}
                        </Row>
                      ))}
                    </Column>
                    <Row zIndex={1} paddingTop="8"><Button href="/kontakti" variant={i === 1 ? "primary" : "secondary"} arrowIcon>Поискайте оферта</Button></Row>
                  </Column>
                ))}
              </Grid>
            </RevealOnView>
          </Column>

          <Toolkit />

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси за SEO интеграцията" />
            <Faq items={faq} />
          </Column>

          <Column gap="16">
            <SectionTitle eyebrow="Свързани" title="Свързани услуги" />
            <Grid fillWidth columns={4} m={{ columns: 2 }} s={{ columns: 1 }} gap="12">
              {s.related.map((r) => getService(r)).filter((r): r is NonNullable<typeof r> => Boolean(r)).map((r) => (
                <Button key={r.slug} href={servicePath(r)} variant="secondary" size="l" prefixIcon={r.icon} fillWidth arrowIcon>
                  {r.name}
                </Button>
              ))}
            </Grid>
          </Column>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingY="56" theme="dark" s={{ paddingY: "32" }}>
        <GeoBackground style={{ left: "50%", width: "100vw", transform: "translateX(-50%)" }} />
        <Column zIndex={1} maxWidth="m" fillWidth paddingX="24" gap="20" horizontal="center" align="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">Нека свържем SEO със сайта ви</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Опишете платформата и целта си. Първоначалният разговор до 30 минути е безплатен и без ангажимент.
          </Text>
          <Row gap="12" wrap horizontal="center">
            <Button href="/kontakti" size="l" arrowIcon>Запитване</Button>
            <Button href="/seo-uslugi/seo-odit" size="l" variant="secondary">SEO одит</Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
