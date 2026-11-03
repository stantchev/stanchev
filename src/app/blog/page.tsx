import { Avatar, Background, Button, Card, Column, Grid, Heading, Icon, Media, Row, Tag, Text, type IconName } from "@once-ui-system/core";
import { getPosts } from "@/app/utils/utils";
import { BlogLibrary, type PostCategory, type PostItem } from "@/components/seo/BlogLibrary";
import { GeoBackground } from "@/components/seo/GeoBackground";
import { JsonLd } from "@/components/seo/JsonLd";
import { RevealOnView } from "@/components/seo/RevealOnView";
import { buildMetadata } from "@/components/seo/metadata";
import { Faq, SectionTitle, Trail } from "@/components/seo/blocks";
import { baseURL, person } from "@/resources";
import { topicOf } from "@/utils/topics";

const path = "/blog";
const title = "Блог за SEO, GEO и уеб разработка | Stanchev Digital";
const description =
  "Практически ръководства и анализи за SEO, GEO оптимизация за AI търсачки, Next.js, WordPress и Core Web Vitals, плюс бонус теми за киберсигурност. Писано от практик.";

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords: ["seo блог", "seo ръководства", "geo оптимизация", "ai seo", "next.js seo", "core web vitals", "линк билдинг", "wordpress seo", "seo анализи"],
});

const categories: PostCategory[] = [
  { key: "seo", label: "SEO и GEO", icon: "search" },
  { key: "web", label: "Уеб разработка", icon: "code" },
  { key: "ai", label: "AI и технологии", icon: "lightbulb" },
  { key: "cyber", label: "Киберсигурност", icon: "lock" },
];

const pillarSlugs = [
  "kakvo-e-seo",
  "generative-engine-optimization-geo",
  "kakvo-e-seo-konsultant",
  "nextjs-performance-optimization-image-font-script-ot-nulata",
];

const faq = [
  { q: "Какво отличава този блог?", a: "Блогът комбинира актуални SEO и GEO анализи с практични технически ръководства за уеб разработка (React, Next.js, WordPress, производителност). Целта е директна полза: конкретни примери и чеклисти, които можете да приложите." },
  { q: "Колко често излизат нови статии?", a: "Когато има значимо събитие (промяна в Google, нова версия на Next.js, промяна в AI търсачките) или когато завърша практически експеримент. Няма фиксиран график." },
  { q: "Мога ли да поискам конкретна тема или казус?", a: "Да. Пишете ми през формата за контакт. Ако казусът е полезен за повече хора, го превръщам в статия, анонимизиран при нужда." },
  { q: "Използвате ли AI за писане на статиите?", a: "Статиите са писани ръчно от мен. AI използвам само помощно: проверка на факти, чернови на структури, превод на технически термини или анализ на големи логове. Окончателният текст, примерите и заключенията са мои." },
  { q: "Защо има статии за киберсигурност?", a: "Киберсигурността е бонус тема. Основният фокус са SEO и уеб разработката. Теми за сигурност излизат, когато са свързани с класирането (HTTPS, защита от негативен SEO) или при голяма актуална заплаха." },
  { q: "Как да следя новите статии?", a: "Следете блога и профила ми в LinkedIn. Ако искате конкретен въпрос, използвайте формата за контакт." },
];

export default function BlogPage() {
  const all = getPosts(["src", "app", "blog", "posts"]).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  const items: PostItem[] = all.map((p) => ({
    slug: p.slug,
    title: p.metadata.title,
    summary: p.metadata.summary,
    date: new Date(p.metadata.publishedAt).toISOString(),
    tag: Array.isArray(p.metadata.tag) ? p.metadata.tag.join(", ") : String(p.metadata.tag ?? ""),
    cat: topicOf(p.metadata.tag),
    minutes: Math.max(1, Math.round(p.content.split(/\s+/).filter(Boolean).length / 200)),
  }));

  const pillars = pillarSlugs
    .map((slug) => all.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const latest = all[0];
  const lastUpdated = latest
    ? new Intl.DateTimeFormat("bg-BG", { day: "numeric", month: "long", year: "numeric" }).format(new Date(latest.metadata.publishedAt))
    : "";

  const url = `${baseURL}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Blog", "CollectionPage"],
        "@id": `${url}#blog`,
        url,
        name: title,
        description,
        inLanguage: "bg-BG",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        publisher: { "@type": "Organization", name: "Stanchev Digital", url: baseURL, logo: { "@type": "ImageObject", url: `${baseURL}/images/og/og.jpg` } },
        author: { "@type": "Person", name: person.name, url: `${baseURL}/za-men` },
        blogPost: items.slice(0, 20).map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: `${baseURL}/blog/${p.slug}`,
          datePublished: p.date,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name: "Блог", item: url },
        ],
      },
    ],
  };

  const topics: { icon: IconName; key: string; title: string; text: string }[] = [
    { icon: "search", key: "seo", title: "SEO и GEO", text: "Техническо SEO, съдържание, линкове и оптимизация за AI търсачки." },
    { icon: "code", key: "web", title: "Уеб разработка", text: "Next.js, React, WordPress, headless и производителност." },
    { icon: "lightbulb", key: "ai", title: "AI и технологии", text: "Как AI променя търсенето, разработката и бизнеса." },
    { icon: "lock", key: "cyber", title: "Киберсигурност", text: "Бонус теми: заплахи, инциденти и защита, свързани със сайтовете." },
  ];

  return (
    <Column fillWidth horizontal="center" paddingBottom="64" gap="48" s={{ paddingBottom: "40", gap: "32" }}>
      <JsonLd data={schema} />

      <Column fillWidth horizontal="center" paddingTop="8" paddingBottom="16">
        <Background
          position="absolute"
          fill
          pointerEvents="none"
          style={{ left: "50%", width: "100vw", transform: "translateX(-50%)", top: "-24px", height: "calc(100% + 24px)" }}
          gradient={{ display: true, colorStart: "accent-alpha-medium", colorEnd: "static-transparent", x: 50, y: 0, width: 150, height: 80, opacity: 60 }}
          dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }}
        />
        <Column zIndex={1} horizontal="center" align="center" gap="24" maxWidth={52}>
          <Trail items={[{ label: "Начало", href: "/" }, { label: "Блог" }]} />
          <Row gap="8" horizontal="center" wrap>
            <Tag scheme="accent" size="m">SEO и GEO</Tag>
            <Tag scheme="brand" size="m">Уеб разработка</Tag>
            <Tag scheme="neutral" size="m">AI</Tag>
          </Row>
          <Heading as="h1" variant="display-strong-xl" align="center" wrap="balance">
            Блог за SEO, GEO и уеб разработка
          </Heading>
          <Text variant="body-default-xl" onBackground="neutral-weak" align="center" wrap="balance">
            Практически ръководства и анализи: как се класира сайт в Google, как се цитира в AI отговорите и как се изгражда бързо. Писано от практик, с примери и чеклисти.
          </Text>
          <Row gap="24" horizontal="center" wrap textVariant="label-default-s" onBackground="neutral-weak">
            <Row gap="8" vertical="center"><Icon name="document" size="xs" onBackground="brand-medium" /> {items.length} статии</Row>
            {lastUpdated && <Row gap="8" vertical="center"><Icon name="calendar" size="xs" onBackground="brand-medium" /> Последна: {lastUpdated}</Row>}
          </Row>
          <Row gap="12" horizontal="center" s={{ direction: "column" }}>
            <Button href="#statii" size="l" arrowIcon>Към статиите</Button>
            <Button href="/kontakti" size="l" variant="secondary">Предложете тема или казус</Button>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <RevealOnView>
            <Column fillWidth gap="12" paddingLeft="24" style={{ borderLeft: "3px solid var(--brand-solid-medium)" }}>
              <Heading as="h2" variant="heading-strong-xl" wrap="balance">За какво е този блог?</Heading>
              <Text variant="body-default-l" onBackground="neutral-medium">
                Блогът обяснява как да бъде намерен и цитиран един сайт: класическо SEO за Google, GEO за ChatGPT, Gemini и AI Overviews, и уеб разработка с Next.js и WordPress, която ги подпомага. Всяка статия цели конкретна полза, а не общи съвети.
              </Text>
            </Column>
          </RevealOnView>

          {pillars.length > 0 && (
            <Column gap="24">
              <SectionTitle eyebrow="Започнете оттук" title="Основните ръководства" lead="Четири статии, които дават най-добра основа." />
              <RevealOnView>
                <Grid fillWidth columns={4} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
                  {pillars.map((p) => (
                    <Card key={p.slug} href={`/blog/${p.slug}`} fillWidth direction="column" radius="l" border="neutral-alpha-weak" background="surface" overflow="hidden">
                      {p.metadata.image && <Media src={p.metadata.image} alt={`Корица: ${p.metadata.title}`} aspectRatio="16 / 10" sizes="(max-width: 768px) 100vw, 300px" />}
                      <Column padding="16" gap="8" fillWidth>
                        <Heading as="h3" variant="heading-strong-s" wrap="balance">{p.metadata.title}</Heading>
                        <Row gap="4" vertical="center" textVariant="label-default-xs" onBackground="brand-weak">
                          Прочетете <Icon name="arrowRight" size="xs" />
                        </Row>
                      </Column>
                    </Card>
                  ))}
                </Grid>
              </RevealOnView>
            </Column>
          )}

          <Column gap="24">
            <SectionTitle eyebrow="Теми" title="Четири теми, една цел" />
            <Grid fillWidth columns={4} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
              {topics.map((t) => (
                <Column key={t.key} padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface">
                  <Icon name={t.icon} size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" />
                  <Heading as="h3" variant="heading-strong-m">{t.title}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">{t.text}</Text>
                  <Text variant="label-default-xs" onBackground="brand-weak">{items.filter((i) => i.cat === t.key).length} статии</Text>
                </Column>
              ))}
            </Grid>
          </Column>

          <Column gap="24" id="statii">
            <SectionTitle eyebrow="Библиотека" title="Всички статии" lead="Търсете по тема или ключова дума и филтрирайте по направление." />
            <BlogLibrary posts={items} categories={categories} />
          </Column>

          <RevealOnView>
            <Row fillWidth radius="l" border="neutral-alpha-medium" background="surface" padding="xl" s={{ padding: "l", direction: "column" }} gap="24" vertical="center">
              <Avatar src={person.avatar} size="xl" />
              <Column gap="8" flex={1}>
                <Heading as="h2" variant="heading-strong-l">Кой пише</Heading>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  {person.name}: SEO консултант, SEO специалист и уеб разработчик. Пиша за неща, които прилагам в реални проекти: технически SEO, GEO, Next.js и WordPress.
                </Text>
                <Row gap="8" wrap paddingTop="8">
                  <Button href="/za-men" variant="secondary" size="s" arrowIcon>За мен</Button>
                  <Button href="/seo-proekti" variant="secondary" size="s" arrowIcon>SEO проекти</Button>
                </Row>
              </Column>
            </Row>
          </RevealOnView>

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси за блога" />
            <Faq items={faq} />
          </Column>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingY="56" theme="dark" s={{ paddingY: "32" }}>
        <GeoBackground style={{ left: "50%", width: "100vw", transform: "translateX(-50%)" }} />
        <Column zIndex={1} maxWidth="m" fillWidth paddingX="24" gap="20" horizontal="center" align="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">Имате въпрос или казус за SEO?</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Опишете сайта и целта си. Първоначалният разговор до 30 минути е безплатен и без ангажимент.
          </Text>
          <Row gap="12" wrap horizontal="center">
            <Button href="/kontakti" size="l" arrowIcon>Безплатна консултация</Button>
            <Button href="/seo-uslugi" size="l" variant="secondary">SEO услуги и цени</Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
