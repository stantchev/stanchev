import { Background, Button, Column, Grid, Heading, Icon, Row, Tag, Text, type IconName } from "@once-ui-system/core";
import { getPosts } from "@/app/utils/utils";
import { CaseGrid, type CaseCategory, type CaseItem } from "@/components/seo/CaseGrid";
import { GeoBackground } from "@/components/seo/GeoBackground";
import { JsonLd } from "@/components/seo/JsonLd";
import { RevealOnView } from "@/components/seo/RevealOnView";
import { buildMetadata } from "@/components/seo/metadata";
import { Faq, SectionTitle, Trail } from "@/components/seo/blocks";
import { FeaturesBordered } from "@/components/seo/Features";
import { baseURL } from "@/resources";

const path = "/seo-proekti";
const title = "SEO проекти и казуси от практиката | Stanchev Digital";
const description =
  "SEO проекти и казуси от практиката: технически одит, онлайн магазини, WooCommerce, OpenCart, Shopify и Next.js. Проблем, подход и промяна, описани с реалния контекст.";

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords: ["seo проекти", "seo казуси", "seo примери", "case study seo", "seo портфолио", "технически seo казус", "seo за онлайн магазин пример"],
});

const categories: CaseCategory[] = [
  { key: "technical", label: "Технически SEO", icon: "seoaudit" },
  { key: "strategy", label: "Стратегия и линкове", icon: "trendingUp" },
  { key: "shop", label: "Онлайн магазини", icon: "box" },
  { key: "dev", label: "WordPress и AI", icon: "code" },
];

const catOf: Record<string, string> = {
  "false-400-404-greshki-semrush-seliton": "technical",
  "fix-url-l-case-study": "technical",
  "profitechs-technical-seo": "technical",
  "robots-txt-editor-cache-control-opencart-2302": "technical",
  "bardahl-seo-optimizatsiya": "strategy",
  ProSpeed: "strategy",
  "smart-bulgaria-seo-optimizatsiya": "strategy",
  "DarosBuild-moyat-proces-po-seo-optimizatsiya": "strategy",
  "seo-nextjs-redizain-sporten-magazin": "shop",
  "woocommerce-brand-migration": "shop",
  "shopify-euro-price-tag": "shop",
  "woocommerce-custom-product-schema-bez-plugini": "shop",
  "premahvane-na-schupeni-izobrazhenia": "shop",
  "Quick-Content-Notes-WordPress-Collaboration-Plugin-Case-Study": "dev",
  "integraciya-chatgpt-wordpress-case-study": "dev",
};

const faq = [
  { q: "Какво е SEO казус?", a: "SEO казусът описва конкретен проект: какъв беше проблемът, как беше диагностициран, какво беше променено и как се измерва резултатът. Така виждате реалния подход, а не само обещание." },
  { q: "Можете ли да ми покажете резултати за моята ниша?", a: "Обсъждам релевантни примери при първия разговор. Някои клиенти предпочитат да не бъдат публично назовавани." },
  { q: "С какви платформи сте работили?", a: "WordPress и WooCommerce, OpenCart, Magento, Shopify, Next.js и персонализирани сайтове." },
  { q: "Как измервате резултата?", a: "С данни от Google Search Console и Analytics: импресии, позиции, кликове и конверсии, преди и след промените." },
  { q: "Работили ли сте самостоятелно или като част от екип?", a: "И двете. При част от казусите съм част от по-голям SEO екип, а при други - единственият изпълнител. Това е посочено в самия казус." },
  { q: "Гарантирате ли същите резултати за моя сайт?", a: "Не. Всеки сайт е различен, а резултатите зависят от конкуренцията, състоянието на сайта и времето. Гарантирам прозрачна работа и измерим напредък." },
  { q: "Как да започна?", a: "Първият разговор е безплатен до 30 минути. Опишете сайта и целта си, а аз ви казвам какви са следващите стъпки." },
];

export default function SeoProekti() {
  const posts = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  const cases: CaseItem[] = posts.map((p) => ({
    slug: p.slug,
    title: p.metadata.title,
    summary: p.metadata.summary,
    date: new Date(p.metadata.publishedAt).toISOString(),
    image: p.metadata.images?.[0] || (p.metadata.image as string) || undefined,
    cat: catOf[p.slug] ?? "technical",
  }));

  const url = `${baseURL}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: title, description, inLanguage: "bg-BG", breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#list` } },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        numberOfItems: cases.length,
        itemListElement: cases.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${baseURL}/seo-proekti/${c.slug}`,
          name: c.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name: "SEO проекти", item: url },
        ],
      },
    ],
  };

  const stats: { icon: IconName; value: string; label: string }[] = [
    { icon: "document", value: String(cases.length), label: "описани казуса" },
    { icon: "box", value: String(categories.length), label: "направления" },
    { icon: "code", value: "5+", label: "платформи" },
  ];

  const anatomy: { icon: IconName; title: string; description: string }[] = [
    { icon: "search", title: "Проблем", description: "Какво не работеше и как се прояви: загубен трафик, грешки или липсваща видимост." },
    { icon: "seoaudit", title: "Диагностика", description: "Какви данни и инструменти показаха причината, преди да се пипне нещо." },
    { icon: "code", title: "Промяна", description: "Какво конкретно беше направено, често с код или настройка, която можете да проверите." },
    { icon: "chartBar", title: "Измерване", description: "Как се следи резултатът със Search Console и Analytics, с честни ограничения." },
  ];

  const platforms = ["WordPress", "WooCommerce", "OpenCart", "Magento", "Shopify", "Next.js", "React"];

  return (
    <Column fillWidth horizontal="center" paddingBottom="64" gap="48" s={{ paddingBottom: "40", gap: "32" }}>
      <JsonLd data={schema} />

      <Column fillWidth horizontal="center" paddingTop="8" paddingBottom="16">
        <Background
          position="absolute"
          fill
          pointerEvents="none"
          style={{ left: "50%", width: "100vw", transform: "translateX(-50%)", top: "-24px", height: "calc(100% + 24px)" }}
          gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 50, y: 0, width: 150, height: 80, opacity: 60 }}
          dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }}
        />
        <Column zIndex={1} horizontal="center" align="center" gap="24" maxWidth={52}>
          <Trail items={[{ label: "Начало", href: "/" }, { label: "SEO проекти" }]} />
          <Row gap="8" horizontal="center" wrap>
            <Tag scheme="brand" size="m">Казуси</Tag>
            <Tag scheme="neutral" size="m">Реален контекст</Tag>
          </Row>
          <Heading as="h1" variant="display-strong-xl" align="center" wrap="balance">
            SEO проекти и казуси от практиката
          </Heading>
          <Text variant="body-default-xl" onBackground="neutral-weak" align="center" wrap="balance">
            Какъв беше проблемът, какво направихме и какво се промени. От технически одити и онлайн магазини до Next.js редизайн: всеки казус е описан с реалния контекст на проекта.
          </Text>
          <Row gap="12" horizontal="center" s={{ direction: "column" }}>
            <Button href="#kazusi" size="l" arrowIcon>Разгледайте казусите</Button>
            <Button href="/kontakti" size="l" variant="secondary">Обсъдете вашия проект</Button>
          </Row>
          <Row gap="32" horizontal="center" wrap>
            {stats.map((s) => (
              <Row key={s.label} gap="12" vertical="center">
                <Icon name={s.icon} size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" />
                <Column gap="0" horizontal="start">
                  <Text variant="heading-strong-l">{s.value}</Text>
                  <Text variant="label-default-xs" onBackground="neutral-weak">{s.label}</Text>
                </Column>
              </Row>
            ))}
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <RevealOnView>
            <Column fillWidth gap="12" paddingLeft="24" style={{ borderLeft: "3px solid var(--brand-solid-medium)" }}>
              <Heading as="h2" variant="heading-strong-xl" wrap="balance">Какво ще намерите в SEO проектите?</Heading>
              <Text variant="body-default-l" onBackground="neutral-medium">
                Казуси от реални сайтове: технически одити и поправки, SEO стратегия и линк билдинг, оптимизация на онлайн магазини, миграции и структурирани данни. Всеки казус показва проблема, подхода и промяната, а резултатите се описват с контекст, не като голи проценти.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                При част от проектите съм част от по-голям SEO екип, което е посочено в самия казус.
              </Text>
            </Column>
          </RevealOnView>

          <Column gap="24" id="kazusi">
            <SectionTitle eyebrow="Портфолио" title="Избрани казуси" lead="Филтрирайте по направление. Всеки казус води към пълното описание." />
            <CaseGrid cases={cases} categories={categories} />
          </Column>

          <RevealOnView>
            <FeaturesBordered title="Как е изграден всеки казус" lead="Една и съща структура, за да можете да сравнявате." items={anatomy} />
          </RevealOnView>

          <Column gap="16">
            <SectionTitle eyebrow="Технологии" title="Платформи, с които съм работил" lead="Не само SEO теория: работя и в кода на сайта." />
            <Row gap="8" wrap>
              {platforms.map((p) => (
                <Tag key={p} size="l">{p}</Tag>
              ))}
            </Row>
          </Column>

          <Grid fillWidth columns={2} s={{ columns: 1 }} gap="16">
            <Column padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface">
              <Heading as="h3" variant="heading-strong-m">Как да четете резултатите</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Всеки сайт и ниша са различни. Резултатите зависят от конкуренцията, състоянието на сайта и времето, затова не обещавам същото за вашия проект. Измерването е със Search Console и Analytics.
              </Text>
            </Column>
            <Column padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface">
              <Heading as="h3" variant="heading-strong-m">Екип или самостоятелно</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Част от проектите са изпълнени като член на SEO екип, други самостоятелно. Ролята ми е описана във всеки казус, без да присвоявам чужда работа.
              </Text>
            </Column>
          </Grid>

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси за проектите" />
            <Faq items={faq} />
            <Row>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Вижте и <a href="/seo-uslugi">SEO услугите и цените</a>, <a href="/seo-konsultant">SEO консултант</a> или <a href="/web">уеб услугите</a>.
              </Text>
            </Row>
          </Column>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingY="56" theme="dark" s={{ paddingY: "32" }}>
        <GeoBackground style={{ left: "50%", width: "100vw", transform: "translateX(-50%)" }} />
        <Column zIndex={1} maxWidth="m" fillWidth paddingX="24" gap="20" horizontal="center" align="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">Вашият сайт може да е следващият казус</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Опишете накратко проекта. Първоначалният разговор до 30 минути е безплатен и без ангажимент.
          </Text>
          <Row gap="12" wrap horizontal="center">
            <Button href="/kontakti" size="l" arrowIcon>Обсъдете вашия проект</Button>
            <Button href="/seo-uslugi" size="l" variant="secondary">SEO услуги и цени</Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
