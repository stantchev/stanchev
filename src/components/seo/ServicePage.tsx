import { Button, Column, Grid, Heading, Icon, Row, Tag, Text, type GridSize } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getService, servicePath } from "@/resources/services";
import { JsonLd } from "./JsonLd";
import { Checklist, CtaBand, Faq, FeatureGrid, Hero, LinkCards, PageFrame, SectionTitle, Steps, Trail } from "./blocks";

export function ServicePage({ slug }: { slug: string }) {
  const s = getService(slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);

  const url = `${baseURL}${servicePath(s)}`;
  const hub = s.kind === "seo" ? { label: "SEO услуги", href: "/seo-uslugi" } : { label: "Уеб услуги", href: "/web" };
  const related = s.related.map((r) => getService(r)).filter((r): r is NonNullable<typeof r> => Boolean(r));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: s.metaTitle,
        description: s.metaDescription,
        inLanguage: "bg-BG",
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
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
          { "@type": "ListItem", position: 2, name: hub.label, item: `${baseURL}${hub.href}` },
          { "@type": "ListItem", position: 3, name: s.name, item: url },
        ],
      },
    ],
  };

  return (
    <PageFrame>
      <JsonLd data={schema} />

      <Column gap="24">
        <Trail items={[{ label: "Начало", href: "/" }, { label: hub.label, href: hub.href }, { label: s.name }]} />
        <Hero
          eyebrow={s.eyebrow}
          h1={s.h1}
          lead={s.lead}
          ctas={
            <>
              <Button href="/kontakti" size="l" arrowIcon>
                Запитване
              </Button>
              <Button href="#ceni" size="l" variant="secondary">
                Цени
              </Button>
            </>
          }
          meta={
            <Tag scheme="neutral" size="m">
              {s.priceFrom === "По договаряне" ? "Цена по договаряне" : s.priceFrom}
            </Tag>
          }
        />
      </Column>

      <Column gap="32">
        <SectionTitle eyebrow="Какво включва" title={`Какво включва ${s.name.toLowerCase()}`} />
        <FeatureGrid items={s.includes.map((i) => ({ ...i, icon: s.icon }))} />
      </Column>

      <Column gap="32">
        <SectionTitle eyebrow="За кого е" title="Кога има смисъл" />
        <Checklist items={s.forWhom} />
      </Column>

      <Column gap="32">
        <SectionTitle eyebrow="Процес" title="Как протича работата" />
        <Steps items={s.process} />
      </Column>

      <Column gap="32" id="ceni">
        <SectionTitle
          eyebrow="Цени"
          title={s.packages ? `Цени за ${s.name.toLowerCase()}` : "Цена и обхват"}
          lead="Цените са ориентировъчни и зависят от размера на сайта и обхвата на работата."
        />
        {s.packages ? (
          <Grid columns={s.packages.length as GridSize} gap="16" s={{ columns: 1 }}>
            {s.packages.map((p) => (
              <Column key={p.name} background="surface" border radius="l" padding="24" gap="16">
                <Column gap="4">
                  <Heading as="h3" variant="heading-strong-l">
                    {p.name}
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {p.fit}
                  </Text>
                </Column>
                <Text variant="display-strong-xs">{p.price}</Text>
                <Column gap="8">
                  {p.features.map((f) => (
                    <Row key={f} gap="8" vertical="start">
                      <Icon name="check" size="s" onBackground="brand-medium" style={{ marginTop: 2 }} />
                      <Text variant="body-default-m">{f}</Text>
                    </Row>
                  ))}
                </Column>
                <Button href="/kontakti" variant="secondary" fillWidth>
                  Запитване
                </Button>
              </Column>
            ))}
          </Grid>
        ) : (
          <Column background="surface" border radius="l" padding="24" gap="16" maxWidth="m">
            <Text variant="body-default-l">
              Цената зависи от размера на сайта, състоянието му и конкуренцията в нишата. След кратък преглед давам конкретна оферта с ясен обхват.
            </Text>
            <Row>
              <Button href="/kontakti" variant="secondary">
                Поискайте оферта
              </Button>
            </Row>
          </Column>
        )}
      </Column>

      <Column gap="32">
        <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси" />
        <Faq items={s.faq} />
      </Column>

      {related.length > 0 && (
        <Column gap="32">
          <SectionTitle eyebrow="Свързани услуги" title="Вижте още" />
          <LinkCards
            items={related.map((r) => ({ href: servicePath(r), title: r.name, text: r.summary, icon: r.icon, meta: r.priceFrom === "По договаряне" ? undefined : r.priceFrom }))}
          />
        </Column>
      )}

      <CtaBand secondary={{ label: "SEO консултант", href: "/seo-konsultant" }} />
    </PageFrame>
  );
}
