import { Background, Button, Column, Grid, Heading, Icon, Line, Mask, MatrixFx, Row, Tag, Text, type IconName } from "@once-ui-system/core";
import type { ReactNode } from "react";
import { baseURL } from "@/resources";
import { getPosts } from "@/utils/utils";
import { getService, servicePath } from "@/resources/services";
import { GeoBackground } from "./GeoBackground";
import { JsonLd } from "./JsonLd";
import { RevealOnView } from "./RevealOnView";
import { Faq, SectionTitle, Trail } from "./blocks";
import { FeaturesTimeline } from "./FeaturesMore";

const iconCycle: IconName[] = ["target", "code", "trendingUp", "document", "lightbulb", "check"];
const wideSet = [0, 2, 5];

const numericPrice = (p: string) => {
  const m = p.match(/(\d[\d\s]*)\s*€/);
  return m ? Number(m[1].replace(/\s/g, "")) : undefined;
};

export type ShellProps = {
  slug: string;
  tags: { label: string; scheme?: "brand" | "accent" | "neutral" }[];
  h1: string;
  lead?: string;
  visual: ReactNode;
  glow?: { color: "brand" | "accent"; style: "lines" | "dots" };
  answer: { title: string; text: string; note?: string };
  before?: ReactNode;
  after?: ReactNode;
  includes: { title: string; text: string; icon?: IconName }[];
  includesTitle: string;
  includesLead: string;
  processTitle: string;
  processLead: string;
  side: { icon: IconName; title: string; text: string };
  priceTitle: string;
  priceLead: string;
  faqTitle: string;
  faqExtra?: { q: string; a: string }[];
  closing: { title: string; text: string };
  secondaryCta?: { label: string; href: string };
  guides?: string[];
};

export function WebServiceShell(p: ShellProps) {
  const s = getService(p.slug);
  if (!s) throw new Error(`Unknown service ${p.slug}`);
  const url = `${baseURL}${servicePath(s)}`;
  const glow = p.glow ?? { color: "brand", style: "dots" };
  const faq = [...s.faq, ...(p.faqExtra ?? [])];
  const related = s.related.map((r) => getService(r)).filter((r): r is NonNullable<typeof r> => Boolean(r));
  const packages = s.packages ?? [{ name: s.name, price: s.priceFrom, fit: s.summary, features: s.includes.slice(0, 4).map((i) => i.title) }];
  const min = numericPrice(s.priceFrom);
  const posts = getPosts(["src", "app", "blog", "posts"]);
  const guides = (p.guides ?? []).map((slug) => posts.find((x) => x.slug === slug)).filter((x): x is NonNullable<typeof x> => Boolean(x));

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
        ...(min !== undefined && { offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: min, priceCurrency: "EUR" } } }),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name: "Уеб услуги", item: `${baseURL}/web` },
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
          gradient={{ display: true, colorStart: `${glow.color}-alpha-medium`, colorEnd: "static-transparent", x: 25, y: 0, width: 120, height: 80, opacity: 60 }}
          {...(glow.style === "lines"
            ? { lines: { display: true, size: "24", thickness: 1, angle: 0, color: "neutral-alpha-weak", opacity: 40 }, mask: { x: 50, y: 0, radius: 100 } }
            : { dots: { display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 } })}
        />
        <Column zIndex={1} maxWidth="l" fillWidth gap="32">
          <Trail items={[{ label: "Начало", href: "/" }, { label: "Уеб услуги", href: "/web" }, { label: s.name }]} />
          <Row fillWidth gap="48" vertical="center" m={{ direction: "column" }}>
            <Column flex={6} gap="24" fillWidth>
              <Row gap="8" wrap>
                {p.tags.map((t) => (
                  <Tag key={t.label} scheme={t.scheme ?? "neutral"} size="m">{t.label}</Tag>
                ))}
              </Row>
              <Heading as="h1" variant="display-strong-l" wrap="balance">{p.h1}</Heading>
              <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">{p.lead ?? s.lead}</Text>
              <Row gap="12" s={{ direction: "column" }}>
                <Button href="/kontakti" size="l" arrowIcon>Поискайте оферта</Button>
                <Button href="#ceni" size="l" variant="secondary">Цени</Button>
              </Row>
              <Row gap="24" wrap textVariant="label-default-s" onBackground="neutral-weak">
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> {s.priceFrom === "По договаряне" ? "Оферта след кратък преглед" : s.priceFrom}</Row>
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> SEO в основата</Row>
              </Row>
            </Column>
            <Column flex={5} fillWidth minWidth={0}>{p.visual}</Column>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <RevealOnView>
            <Column fillWidth gap="12" paddingLeft="24" style={{ borderLeft: "3px solid var(--brand-solid-medium)" }}>
              <Heading as="h2" variant="heading-strong-xl" wrap="balance">{p.answer.title}</Heading>
              <Text variant="body-default-l" onBackground="neutral-medium">{p.answer.text}</Text>
              {p.answer.note && <Text variant="body-default-s" onBackground="neutral-weak">{p.answer.note}</Text>}
            </Column>
          </RevealOnView>

          {p.before}

          <Column gap="24">
            <SectionTitle eyebrow="Обхват" title={p.includesTitle} lead={p.includesLead} />
            <RevealOnView>
              <Grid fillWidth columns={3} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
                {p.includes.map((a, i) => (
                  <Column key={a.title} className={p.includes.length === 6 && wideSet.includes(i) ? "bento-wide" : undefined} padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface" overflow="hidden">
                    {p.includes.length === 6 && wideSet.includes(i) && (
                      <Mask position="absolute" right="0" top="0" radius={33} x={75} y={0}>
                        <MatrixFx size={1.5} colors={[`${glow.color}-background-strong`]} flicker />
                      </Mask>
                    )}
                    <Icon name={a.icon ?? iconCycle[i % iconCycle.length]} size="s" border={`${glow.color}-alpha-weak`} background={`${glow.color}-alpha-weak`} onBackground={`${glow.color}-weak`} radius="m" padding="8" />
                    <Heading as="h3" variant="heading-strong-m">{a.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">{a.text}</Text>
                  </Column>
                ))}
              </Grid>
            </RevealOnView>
          </Column>

          {p.after}

          <FeaturesTimeline
            title={p.processTitle}
            lead={p.processLead}
            steps={s.process.map((x) => ({ title: x.title, description: x.text }))}
            side={
              <Column fillWidth aspectRatio="3/4" m={{ aspectRatio: "16/10" }} radius="l" border overflow="hidden" center padding="xl" gap="16" align="center">
                <Background position="absolute" top="0" left="0" fill gradient={{ display: true, colorStart: `${glow.color}-alpha-medium`, colorEnd: "static-transparent", x: 50, y: 100, width: 120, height: 90, opacity: 70 }} dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }} />
                <Column zIndex={1} center gap="12" align="center">
                  <Icon name={p.side.icon} size="xl" onBackground={`${glow.color}-weak`} />
                  <Text variant="heading-strong-l">{p.side.title}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">{p.side.text}</Text>
                </Column>
              </Column>
            }
          />

          <Column gap="24" id="ceni">
            <SectionTitle eyebrow="Цени" title={p.priceTitle} lead={p.priceLead} />
            <RevealOnView>
              <Grid fillWidth columns={packages.length > 1 ? 2 : 1} s={{ columns: 1 }} gap="16">
                {packages.map((k, i) => (
                  <Column key={k.name} padding="32" s={{ padding: "20" }} gap="16" radius="l" border={i === 0 ? "brand-alpha-medium" : "neutral-alpha-medium"} background="surface" overflow="hidden">
                    {i === 0 && <Background position="absolute" fill gradient={{ display: true, colorStart: "brand-alpha-weak", colorEnd: "static-transparent", x: 50, y: 0, width: 120, height: 70, opacity: 60 }} />}
                    <Heading as="h3" variant="heading-strong-l" style={{ zIndex: 1 }}>{k.name}</Heading>
                    <Text zIndex={1} variant="display-strong-s">{k.price}</Text>
                    <Text zIndex={1} variant="body-default-s" onBackground="neutral-weak">{k.fit}</Text>
                    <Line zIndex={1} />
                    <Column zIndex={1} gap="8">
                      {k.features.map((f) => (
                        <Row key={f} gap="8" vertical="center" textVariant="body-default-s"><Icon name="check" size="xs" onBackground="brand-medium" /> {f}</Row>
                      ))}
                    </Column>
                    <Row zIndex={1} paddingTop="8"><Button href="/kontakti" variant={i === 0 ? "primary" : "secondary"} arrowIcon>Поискайте оферта</Button></Row>
                  </Column>
                ))}
              </Grid>
            </RevealOnView>
          </Column>

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title={p.faqTitle} />
            <Faq items={faq} />
          </Column>

          {guides.length > 0 && (
            <Column gap="16">
              <SectionTitle eyebrow="Прочетете още" title="Ръководства по темата" />
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
          <Heading as="h2" variant="display-strong-xs" wrap="balance">{p.closing.title}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">{p.closing.text}</Text>
          <Row gap="12" wrap horizontal="center">
            <Button href="/kontakti" size="l" arrowIcon>Поискайте оферта</Button>
            <Button href={p.secondaryCta?.href ?? "/web"} size="l" variant="secondary">{p.secondaryCta?.label ?? "Всички уеб услуги"}</Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
