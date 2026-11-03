"use client";

import { useState } from "react";
import { Background, Button, Card, Column, Grid, Heading, Icon, Media, Row, Tag, Text, type IconName } from "@once-ui-system/core";

export type CaseItem = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  image?: string;
  cat: string;
  external?: string;
};

export type CaseCategory = { key: string; label: string; icon: IconName };

const dateFormat = new Intl.DateTimeFormat("bg-BG", { month: "short", year: "numeric" });
const clamp = (t: string, n = 150) => (t.length > n ? `${t.slice(0, n).replace(/\s+\S*$/, "")}…` : t);

export function CaseGrid({ cases, categories }: { cases: CaseItem[]; categories: CaseCategory[] }) {
  const [active, setActive] = useState("all");
  const shown = active === "all" ? cases : cases.filter((c) => c.cat === active);
  const countOf = (k: string) => cases.filter((c) => c.cat === k).length;

  return (
    <Column fillWidth gap="24">
      <Row gap="8" wrap>
        <Button size="s" variant={active === "all" ? "primary" : "secondary"} onClick={() => setActive("all")}>
          Всички ({cases.length})
        </Button>
        {categories.map((c) => (
          <Button key={c.key} size="s" variant={active === c.key ? "primary" : "secondary"} prefixIcon={c.icon} onClick={() => setActive(c.key)}>
            {c.label} ({countOf(c.key)})
          </Button>
        ))}
      </Row>

      <Grid fillWidth columns={3} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
        {shown.map((c) => {
          const cat = categories.find((x) => x.key === c.cat);
          return (
            <Card key={c.slug} href={`/seo-proekti/${c.slug}`} fillWidth direction="column" radius="l" border="neutral-alpha-weak" background="surface" overflow="hidden">
              {c.image ? (
                <Media src={c.image} alt={`Илюстрация към казус: ${c.title}`} aspectRatio="16 / 9" sizes="(max-width: 768px) 100vw, 400px" />
              ) : (
                <Row fillWidth aspectRatio="16 / 9" center overflow="hidden">
                  <Background position="absolute" fill gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 50, y: 100, width: 120, height: 90, opacity: 70 }} dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }} />
                  <Icon name={cat?.icon ?? "document"} size="xl" onBackground="brand-weak" />
                </Row>
              )}
              <Column padding="20" gap="12" fillWidth>
                <Row gap="8" vertical="center" wrap>
                  <Tag size="s" scheme="brand">{cat?.label ?? "Казус"}</Tag>
                  <Text variant="label-default-xs" onBackground="neutral-weak">{dateFormat.format(new Date(c.date))}</Text>
                </Row>
                <Heading as="h3" variant="heading-strong-m" wrap="balance">{c.title}</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">{clamp(c.summary)}</Text>
              </Column>
            </Card>
          );
        })}
      </Grid>
    </Column>
  );
}
