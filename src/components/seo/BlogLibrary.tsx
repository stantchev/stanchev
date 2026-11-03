"use client";

import { useMemo, useState } from "react";
import { Button, Column, Heading, Icon, Input, Row, Tag, Text, type IconName } from "@once-ui-system/core";

export type PostItem = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tag: string;
  cat: string;
  minutes: number;
};

export type PostCategory = { key: string; label: string; icon: IconName };

const dateFormat = new Intl.DateTimeFormat("bg-BG", { day: "numeric", month: "short", year: "numeric" });
const clamp = (t: string, n = 170) => (t.length > n ? `${t.slice(0, n).replace(/\s+\S*$/, "")}…` : t);

export function BlogLibrary({ posts, categories }: { posts: PostItem[]; categories: PostCategory[] }) {
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");

  const visible = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return new Set(
      posts
        .filter((p) => (cat === "all" || p.cat === cat) && (!needle || `${p.title} ${p.summary} ${p.tag}`.toLowerCase().includes(needle)))
        .map((p) => p.slug),
    );
  }, [posts, cat, q]);

  const countOf = (k: string) => posts.filter((p) => p.cat === k).length;

  return (
    <Column fillWidth gap="24">
      <Input id="blog-search" label="Търсене в статиите" value={q} onChange={(e) => setQ(e.target.value)} />
      <Row gap="8" wrap>
        <Button size="s" variant={cat === "all" ? "primary" : "secondary"} onClick={() => setCat("all")}>
          Всички ({posts.length})
        </Button>
        {categories.map((c) => (
          <Button key={c.key} size="s" variant={cat === c.key ? "primary" : "secondary"} prefixIcon={c.icon} onClick={() => setCat(c.key)}>
            {c.label} ({countOf(c.key)})
          </Button>
        ))}
      </Row>

      <Text variant="label-default-s" onBackground="neutral-weak" aria-live="polite">
        {visible.size === 0 ? "Няма статии по тази заявка." : `Показани: ${visible.size} от ${posts.length}`}
      </Text>

      <Column fillWidth radius="l" border="neutral-alpha-weak" background="surface" overflow="hidden">
        {posts.map((p, i) => (
          <a
            key={p.slug}
            href={`/blog/${p.slug}`}
            style={{ display: visible.has(p.slug) ? "block" : "none", color: "inherit", textDecoration: "none" }}
          >
            <Row fillWidth padding="20" gap="16" vertical="start" borderTop={i === 0 ? undefined : "neutral-alpha-weak"} s={{ direction: "column", gap: "8" }}>
              <Column flex={1} gap="8" fillWidth>
                <Row gap="8" vertical="center" wrap>
                  <Tag size="s" scheme="brand">{categories.find((c) => c.key === p.cat)?.label ?? p.tag}</Tag>
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    {dateFormat.format(new Date(p.date))} · {p.minutes} мин четене
                  </Text>
                </Row>
                <Heading as="h3" variant="heading-strong-m" wrap="balance">{p.title}</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">{clamp(p.summary)}</Text>
              </Column>
              <Row s={{ hide: true }} vertical="center" paddingTop="8">
                <Icon name="arrowRight" size="s" onBackground="neutral-weak" />
              </Row>
            </Row>
          </a>
        ))}
      </Column>
    </Column>
  );
}
