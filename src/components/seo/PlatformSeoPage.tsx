import { Background, Button, Column, Grid, Heading, Icon, Line, Row, Table, Tag, Text } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getService, servicePath } from "@/resources/services";
import { getPosts } from "@/utils/utils";
import { GeoBackground } from "./GeoBackground";
import { JsonLd } from "./JsonLd";
import { RevealOnView } from "./RevealOnView";
import { Faq, SectionTitle, Trail } from "./blocks";
import { FeaturesTimeline } from "./FeaturesMore";

export type PlatformContent = {
  tags: string[];
  heroTitle: string;
  heroPoints: string[];
  answer: { title: string; text: string; note?: string };
  problemsTitle: string;
  problemsLead: string;
  problems: { title: string; text: string; fix: string }[];
  settingsTitle: string;
  settingsLead: string;
  settings: [string, string, string][];
  toolsTitle: string;
  toolsLead: string;
  tools: { name: string; text: string }[];
  proof: { slug: string; why: string }[];
  guides: string[];
  extraFaq: { q: string; a: string }[];
  closing: { title: string; text: string };
};

export function PlatformSeoPage({ slug, content: c }: { slug: string; content: PlatformContent }) {
  const s = getService(slug);
  if (!s) throw new Error(`Unknown service ${slug}`);
  const url = `${baseURL}${servicePath(s)}`;
  const related = s.related.map((r) => getService(r)).filter((r): r is NonNullable<typeof r> => Boolean(r));
  const projects = getPosts(["src", "app", "work", "projects"]);
  const proof = c.proof.map((p) => ({ ...p, post: projects.find((x) => x.slug === p.slug) })).filter((p) => p.post);
  const posts = getPosts(["src", "app", "blog", "posts"]);
  const guides = c.guides.map((g) => posts.find((x) => x.slug === g)).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const faq = [...s.faq, ...c.extraFaq];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: s.metaTitle, description: s.metaDescription, inLanguage: "bg-BG", breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#service` } },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.name,
        serviceType: s.name,
        description: s.metaDescription,
        url,
        areaServed: { "@type": "Country", name: "България" },
        provider: { "@type": "ProfessionalService", name: "Stanchev Digital", url: baseURL },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name: "SEO услуги", item: `${baseURL}/seo-uslugi` },
          { "@type": "ListItem", position: 3, name: s.name, item: url },
        ],
      },
    ],
  };

  return (
    <Column fillWidth horizontal="center" paddingBottom="64" gap="48" s={{ paddingBottom: "40", gap: "32" }}>
      <JsonLd data={schema} />

      <Column fillWidth horizontal="center" paddingTop="8" paddingBottom="16">
        <Background
          position="absolute"
          fill
          pointerEvents="none"
          style={{ left: "50%", width: "100vw", transform: "translateX(-50%)", top: "-24px", height: "calc(100% + 24px)" }}
          gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 75, y: 0, width: 120, height: 80, opacity: 60 }}
          lines={{ display: true, size: "24", thickness: 1, angle: 0, color: "neutral-alpha-weak", opacity: 40 }}
          mask={{ x: 50, y: 0, radius: 100 }}
        />
        <Column zIndex={1} maxWidth="l" fillWidth gap="32">
          <Trail items={[{ label: "Начало", href: "/" }, { label: "SEO услуги", href: "/seo-uslugi" }, { label: s.name }]} />
          <Row fillWidth gap="48" vertical="center" m={{ direction: "column" }}>
            <Column flex={6} gap="24" fillWidth>
              <Row gap="8" wrap>
                {c.tags.map((t, i) => (
                  <Tag key={t} scheme={i === 0 ? "brand" : "neutral"} size="m">{t}</Tag>
                ))}
              </Row>
              <Heading as="h1" variant="display-strong-l" wrap="balance">{s.h1}</Heading>
              <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">{s.lead}</Text>
              <Row gap="12" s={{ direction: "column" }}>
                <Button href="/kontakti" size="l" arrowIcon>Поискайте оферта</Button>
                <Button href="/seo-uslugi/seo-odit" size="l" variant="secondary">SEO одит</Button>
              </Row>
              <Row gap="24" wrap textVariant="label-default-s" onBackground="neutral-weak">
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> Оферта след кратък преглед</Row>
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> Първи разговор безплатен</Row>
              </Row>
            </Column>
            <Column flex={5} fillWidth border="neutral-alpha-medium" radius="l" background="surface" overflow="hidden" shadow="l">
              <Row paddingX="16" paddingY="12" borderBottom="neutral-alpha-weak" vertical="center" gap="8">
                <Icon name={s.icon} size="xs" onBackground="brand-medium" />
                <Text variant="label-strong-s">{c.heroTitle}</Text>
              </Row>
              <Column padding="16" gap="12">
                {c.heroPoints.map((p, i) => (
                  <Row key={p} gap="12" vertical="center">
                    <Row width="32" height="32" center radius="m" background="brand-alpha-weak" border="brand-alpha-weak" onBackground="brand-weak" textVariant="code-default-s">{i + 1}</Row>
                    <Text variant="label-strong-s">{p}</Text>
                  </Row>
                ))}
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <RevealOnView>
            <Column fillWidth gap="12" paddingLeft="24" style={{ borderLeft: "3px solid var(--brand-solid-medium)" }}>
              <Heading as="h2" variant="heading-strong-xl" wrap="balance">{c.answer.title}</Heading>
              <Text variant="body-default-l" onBackground="neutral-medium">{c.answer.text}</Text>
              {c.answer.note && <Text variant="body-default-s" onBackground="neutral-weak">{c.answer.note}</Text>}
            </Column>
          </RevealOnView>

          <Column gap="24">
            <SectionTitle eyebrow="Проблеми" title={c.problemsTitle} lead={c.problemsLead} />
            <RevealOnView>
              <Grid fillWidth columns={2} s={{ columns: 1 }} gap="16">
                {c.problems.map((p) => (
                  <Column key={p.title} padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface">
                    <Heading as="h3" variant="heading-strong-m">{p.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">{p.text}</Text>
                    <Line />
                    <Row gap="8" vertical="start">
                      <Icon name="check" size="xs" onBackground="brand-medium" style={{ marginTop: 3, flexShrink: 0 }} />
                      <Text variant="body-default-s"><strong>Решение:</strong> {p.fix}</Text>
                    </Row>
                  </Column>
                ))}
              </Grid>
            </RevealOnView>
          </Column>

          <Column gap="24">
            <SectionTitle eyebrow="Настройки" title={c.settingsTitle} lead={c.settingsLead} />
            <Table
              data={{
                headers: [
                  { content: "Област", key: "a" },
                  { content: "Къде и как", key: "b" },
                  { content: "Защо е важно", key: "c" },
                ],
                rows: c.settings.map(([a, b, d]) => [a, b, d]),
              }}
            />
          </Column>

          <Column gap="24">
            <SectionTitle eyebrow="Инструменти" title={c.toolsTitle} lead={c.toolsLead} />
            <Grid fillWidth columns={3} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
              {c.tools.map((t) => (
                <Column key={t.name} padding="20" gap="8" radius="l" border="neutral-alpha-weak" background="surface">
                  <Text variant="heading-strong-s">{t.name}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">{t.text}</Text>
                </Column>
              ))}
            </Grid>
          </Column>

          <Column gap="24">
            <SectionTitle eyebrow="Какво включва" title={`Какво правя по ${s.name.replace("SEO за ", "")}`} lead="Шест области, всяка проверена с данни от Search Console." />
            <Grid fillWidth columns={3} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
              {s.includes.map((i) => (
                <Column key={i.title} padding="20" gap="8" radius="l" border="neutral-alpha-weak" background="surface">
                  <Heading as="h3" variant="heading-strong-s">{i.title}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">{i.text}</Text>
                </Column>
              ))}
            </Grid>
          </Column>

          {proof.length > 0 && (
            <Column gap="24">
              <SectionTitle eyebrow="Реални примери" title="Какво съм правил на практика" lead="Казуси от проекти, които можете да отворите и да проверите." />
              <Grid fillWidth columns={proof.length >= 3 ? 3 : 2} m={{ columns: 1 }} gap="16">
                {proof.map((p) => (
                  <Column key={p.slug} padding="24" gap="12" radius="l" border="brand-alpha-weak" background="surface">
                    <Heading as="h3" variant="heading-strong-s">{p.post!.metadata.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">{p.why}</Text>
                    <Row><Button href={`/seo-proekti/${p.slug}`} variant="secondary" size="s" arrowIcon>Към казуса</Button></Row>
                  </Column>
                ))}
              </Grid>
            </Column>
          )}

          <FeaturesTimeline
            title="Как протича работата"
            lead="От прегледа до проверката след промените."
            steps={s.process.map((x) => ({ title: x.title, description: x.text }))}
            side={
              <Column fillWidth aspectRatio="3/4" m={{ aspectRatio: "16/10" }} radius="l" border overflow="hidden" center padding="xl" gap="16" align="center">
                <Background position="absolute" top="0" left="0" fill gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 50, y: 100, width: 120, height: 90, opacity: 70 }} dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }} />
                <Column zIndex={1} center gap="12" align="center">
                  <Icon name={s.icon} size="xl" onBackground="brand-weak" />
                  <Text variant="heading-strong-l">{s.name}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">Цената зависи от размера на сайта. Оферта след кратък безплатен преглед.</Text>
                </Column>
              </Column>
            }
          />

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title={`Често задавани въпроси за ${s.name.toLowerCase()}`} />
            <Faq items={faq} />
          </Column>

          {guides.length > 0 && (
            <Column gap="16">
              <SectionTitle eyebrow="Прочетете още" title="Свързани ръководства" />
              <Grid fillWidth columns={3} m={{ columns: 2 }} s={{ columns: 1 }} gap="12">
                {guides.map((g) => (
                  <Button key={g.slug} href={`/blog/${g.slug}`} variant="secondary" size="l" fillWidth arrowIcon style={{ height: "auto", padding: 16, justifyContent: "flex-start", textAlign: "left" }}>
                    {g.metadata.title}
                  </Button>
                ))}
              </Grid>
            </Column>
          )}

          <Column gap="16">
            <SectionTitle eyebrow="Свързани" title="Свързани услуги" />
            <Grid fillWidth columns={4} m={{ columns: 2 }} s={{ columns: 1 }} gap="12">
              {related.map((r) => (
                <Button key={r.slug} href={servicePath(r)} variant="secondary" size="l" prefixIcon={r.icon} fillWidth arrowIcon>{r.name}</Button>
              ))}
            </Grid>
          </Column>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingY="56" theme="dark" s={{ paddingY: "32" }}>
        <GeoBackground style={{ left: "50%", width: "100vw", transform: "translateX(-50%)" }} />
        <Column zIndex={1} maxWidth="m" fillWidth paddingX="24" gap="20" horizontal="center" align="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">{c.closing.title}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">{c.closing.text}</Text>
          <Row gap="12" wrap horizontal="center">
            <Button href="/kontakti" size="l" arrowIcon>Поискайте оферта</Button>
            <Button href="/seo-uslugi" size="l" variant="secondary">Всички SEO услуги</Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
