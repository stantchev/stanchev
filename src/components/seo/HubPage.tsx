import { Button, Column, Table } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { servicePath, servicesOf, type ServiceKind } from "@/resources/services";
import { JsonLd } from "./JsonLd";
import { Checklist, CtaBand, Faq, Hero, LinkCards, PageFrame, SectionTitle, Trail } from "./blocks";

export function HubPage({
  kind,
  path,
  name,
  h1,
  lead,
  eyebrow,
  guideTitle,
  guide,
  faq,
  priceTitle,
}: {
  kind: ServiceKind;
  path: string;
  name: string;
  h1: string;
  lead: string;
  eyebrow: string;
  guideTitle: string;
  guide: string[];
  faq: { q: string; a: string }[];
  priceTitle: string;
}) {
  const list = servicesOf(kind);
  const url = `${baseURL}${path}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: h1,
        inLanguage: "bg-BG",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#list` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        itemListElement: list.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.name,
          url: `${baseURL}${servicePath(s)}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name, item: url },
        ],
      },
    ],
  };

  return (
    <PageFrame>
      <JsonLd data={schema} />
      <Column gap="24">
        <Trail items={[{ label: "Начало", href: "/" }, { label: name }]} />
        <Hero
          eyebrow={eyebrow}
          h1={h1}
          lead={lead}
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
        />
      </Column>

      <Column gap="32">
        <SectionTitle eyebrow="Услуги" title={kind === "seo" ? "Всички SEO услуги" : "Всички уеб услуги"} />
        <LinkCards
          items={list.map((s) => ({
            href: servicePath(s),
            title: s.name,
            text: s.summary,
            icon: s.icon,
            meta: s.priceFrom === "По договаряне" ? undefined : s.priceFrom,
          }))}
        />
      </Column>

      <Column gap="32">
        <SectionTitle eyebrow="Как да изберете" title={guideTitle} />
        <Checklist items={guide} />
      </Column>

      <Column gap="32" id="ceni">
        <SectionTitle
          eyebrow="Цени"
          title={priceTitle}
          lead="Цените са ориентировъчни („от“) и зависят от размера на сайта и обхвата. Конкретна оферта получавате след кратък преглед."
        />
        <Table
          data={{
            headers: [
              { content: "Услуга", key: "service" },
              { content: "Цена", key: "price", align: "right" },
            ],
            rows: list.map((s) => [<a key={s.slug} href={servicePath(s)}>{s.name}</a>, s.priceFrom]),
          }}
        />
      </Column>

      <Column gap="32">
        <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси" />
        <Faq items={faq} />
      </Column>

      <CtaBand secondary={{ label: "SEO консултант", href: "/seo-konsultant" }} />
    </PageFrame>
  );
}
