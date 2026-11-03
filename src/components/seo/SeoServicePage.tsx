import { Background, Button, Column, Grid, Heading, Icon, Line, Mask, MatrixFx, Row, Tag, Text, type IconName } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getService, servicePath } from "@/resources/services";
import { GeoBackground } from "./GeoBackground";
import { JsonLd } from "./JsonLd";
import { RevealOnView } from "./RevealOnView";
import { Faq, SectionTitle, Trail } from "./blocks";
import { FeaturesBordered } from "./Features";
import { FeaturesTimeline } from "./FeaturesMore";

const cellIcons: IconName[] = ["target", "document", "trendingUp", "lightbulb", "search", "code"];

function wideIndexes(n: number): number[] {
  if (n === 6) return [0, 2, 5];
  const extra = (3 - (n % 3)) % 3;
  if (extra === 1) return [0];
  if (extra === 2) return [0, Math.min(3, n - 1)];
  return [];
}

const numericPrice = (priceFrom: string) => {
  const m = priceFrom.match(/(\d[\d\s]*)\s*€/);
  return m ? Number(m[1].replace(/\s/g, "")) : undefined;
};

export function SeoServicePage({ slug }: { slug: string }) {
  const s = getService(slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);

  const url = `${baseURL}${servicePath(s)}`;
  const related = s.related.map((r) => getService(r)).filter((r): r is NonNullable<typeof r> => Boolean(r));
  const wide = wideIndexes(s.includes.length);
  const minPrice = numericPrice(s.priceFrom);
  const priceLabel = s.priceFrom === "безплатно" ? "безплатно" : s.priceFrom;
  const lower = s.name.toLowerCase();

  const faq = [
    ...s.faq,
    {
      q: `Колко струва ${lower}?`,
      a:
        s.priceFrom === "По договаряне"
          ? `Цената на ${lower} зависи от размера на сайта и обхвата, затова давам оферта след кратък безплатен преглед.`
          : `Цената започва ${s.priceFrom === "безплатно" ? "от безплатен първоначален разговор до 30 минути" : s.priceFrom}. Крайната цена зависи от размера на сайта и обхвата, а конкретна оферта давам след кратък преглед.`,
    },
    { q: "Гарантирате ли първо място в Google?", a: "Не. Никой честен специалист не може да гарантира позиция в Google. Гарантирам прозрачна работа, ясен план и измерим напредък в Search Console." },
    { q: "Мога ли да комбинирам услугата с други?", a: "Да. Услугите са независими, но често се допълват. Мога да ви предложа подходящ ред след първия разговор." },
  ];

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
        ...(minPrice !== undefined && {
          offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice, priceCurrency: "EUR" } },
        }),
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

  const packages = s.packages ?? [{ name: s.name, price: priceLabel, fit: s.summary, features: s.includes.slice(0, 4).map((i) => i.title) }];

  return (
    <Column fillWidth horizontal="center" paddingBottom="64" gap="48" s={{ paddingBottom: "40", gap: "32" }}>
      <JsonLd data={schema} />

      <Column fillWidth horizontal="center" paddingTop="8" paddingBottom="16">
        <Background
          position="absolute"
          fill
          pointerEvents="none"
          style={{ left: "50%", width: "100vw", transform: "translateX(-50%)", top: "-24px", height: "calc(100% + 24px)" }}
          gradient={{ display: true, colorStart: "accent-alpha-medium", colorEnd: "static-transparent", x: 20, y: 0, width: 120, height: 80, opacity: 60 }}
          dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }}
        />
        <Column zIndex={1} maxWidth="l" fillWidth gap="32">
          <Trail items={[{ label: "Начало", href: "/" }, { label: "SEO услуги", href: "/seo-uslugi" }, { label: s.name }]} />
          <Row fillWidth gap="48" vertical="center" m={{ direction: "column" }}>
            <Column flex={6} gap="24" fillWidth>
              <Row gap="8" wrap>
                <Tag scheme="brand" size="m">{s.eyebrow}</Tag>
                <Tag scheme="neutral" size="m">{priceLabel}</Tag>
              </Row>
              <Heading as="h1" variant="display-strong-l" wrap="balance">
                {s.h1}
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
                {s.lead}
              </Text>
              <Row gap="12" s={{ direction: "column" }}>
                <Button href="/kontakti" size="l" arrowIcon>
                  Поискайте оферта
                </Button>
                <Button href="#ceni" size="l" variant="secondary">
                  Цени
                </Button>
              </Row>
              <Row gap="24" wrap textVariant="label-default-s" onBackground="neutral-weak">
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> Цени в евро</Row>
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> Без посредници</Row>
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> Първи разговор безплатен</Row>
              </Row>
            </Column>

            <Column flex={5} fillWidth border="neutral-alpha-medium" radius="l" background="surface" overflow="hidden" shadow="l">
              <Row paddingX="16" paddingY="12" borderBottom="neutral-alpha-weak" vertical="center" gap="8">
                <Icon name={s.icon} size="xs" onBackground="brand-medium" />
                <Text variant="label-strong-s">Какво включва</Text>
              </Row>
              <Column padding="16" gap="12">
                {s.includes.slice(0, 5).map((r, i) => (
                  <Row key={r.title} gap="12" vertical="center">
                    <Row width="32" height="32" center radius="m" background="brand-alpha-weak" border="brand-alpha-weak" onBackground="brand-weak" textVariant="code-default-s">
                      {i + 1}
                    </Row>
                    <Text variant="label-strong-s">{r.title}</Text>
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
              <Heading as="h2" variant="heading-strong-xl" wrap="balance">
                Какво представлява {lower}?
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-medium">
                {s.summary} {s.lead}
              </Text>
            </Column>
          </RevealOnView>

          <Column gap="24">
            <SectionTitle eyebrow="Обхват" title="Какво получавате" lead={`Ето от какво се състои ${lower}.`} />
            <RevealOnView>
              <Grid fillWidth columns={3} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
                {s.includes.map((a, i) => (
                  <Column key={a.title} className={wide.includes(i) ? "bento-wide" : undefined} padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface" overflow="hidden">
                    {wide.includes(i) && (
                      <Mask position="absolute" right="0" top="0" radius={33} x={75} y={0}>
                        <MatrixFx size={1.5} colors={["brand-background-strong"]} flicker />
                      </Mask>
                    )}
                    <Icon name={i === 0 ? s.icon : cellIcons[i % cellIcons.length]} size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" />
                    <Heading as="h3" variant="heading-strong-m">{a.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">{a.text}</Text>
                  </Column>
                ))}
              </Grid>
            </RevealOnView>
          </Column>

          <FeaturesTimeline
            title="Как протича работата"
            lead="От първия разговор до измерим резултат."
            steps={s.process.map((p) => ({ title: p.title, description: p.text }))}
            side={
              <Column fillWidth aspectRatio="3/4" m={{ aspectRatio: "16/10" }} radius="l" border overflow="hidden" center padding="xl" gap="16" align="center">
                <Background position="absolute" top="0" left="0" fill gradient={{ display: true, colorStart: "accent-alpha-medium", colorEnd: "static-transparent", x: 50, y: 100, width: 120, height: 90, opacity: 70 }} dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }} />
                <Column zIndex={1} center gap="12" align="center">
                  <Icon name={s.icon} size="xl" onBackground="brand-weak" />
                  <Text variant="heading-strong-l">{s.name}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">{priceLabel}</Text>
                </Column>
              </Column>
            }
          />

          <Column gap="24" id="ceni">
            <SectionTitle eyebrow="Цени" title={`Цена на ${lower}`} lead="Стартови цени в евро. Крайната цена зависи от размера на сайта и обхвата." />
            <RevealOnView>
              <Grid fillWidth columns={packages.length > 1 ? 2 : 1} s={{ columns: 1 }} gap="16">
                {packages.map((p, i) => (
                  <Column key={p.name} padding="32" s={{ padding: "20" }} gap="16" radius="l" border={i === 0 ? "brand-alpha-medium" : "neutral-alpha-medium"} background="surface" overflow="hidden">
                    {i === 0 && <Background position="absolute" fill gradient={{ display: true, colorStart: "brand-alpha-weak", colorEnd: "static-transparent", x: 50, y: 0, width: 120, height: 70, opacity: 60 }} />}
                    <Row zIndex={1} horizontal="between" vertical="center" wrap gap="8">
                      <Heading as="h3" variant="heading-strong-l">{p.name}</Heading>
                      {i === 0 && packages.length > 1 && <Tag scheme="brand" size="s">Най-често избирано</Tag>}
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
                    <Row zIndex={1} paddingTop="8"><Button href="/kontakti" variant={i === 0 ? "primary" : "secondary"} arrowIcon>Поискайте оферта</Button></Row>
                  </Column>
                ))}
              </Grid>
            </RevealOnView>
          </Column>

          <RevealOnView>
            <FeaturesBordered
              title="За кого е подходяща"
              lead="Ако се разпознавате в някоя от ситуациите, това е правилната стъпка."
              items={s.forWhom.map((w, i) => ({ icon: cellIcons[i % cellIcons.length], title: w, description: "" }))}
            />
          </RevealOnView>

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title={`Често задавани въпроси за ${lower}`} />
            <Faq items={faq} />
          </Column>

          <Column gap="16">
            <SectionTitle eyebrow="Следващи стъпки" title="Свързани услуги" />
            <Grid fillWidth columns={4} m={{ columns: 2 }} s={{ columns: 1 }} gap="12">
              {related.map((r) => (
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
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Нека започнем с кратък разговор
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Опишете сайта и целта си. Първоначалният разговор до 30 минути е безплатен и без ангажимент.
          </Text>
          <Row gap="12" wrap horizontal="center">
            <Button href="/kontakti" size="l" arrowIcon>Поискайте оферта</Button>
            <Button href="/seo-uslugi" size="l" variant="secondary">Всички SEO услуги</Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
