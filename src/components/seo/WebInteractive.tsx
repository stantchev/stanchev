"use client";

import { useMemo, useState } from "react";
import { Background, Button, Checkbox, Column, Heading, Icon, Row, Tag, Text } from "@once-ui-system/core";
import { CodeBlock } from "@once-ui-system/core/code";

export type TabOption = {
  key: string;
  label: string;
  title: string;
  text: string;
  points?: string[];
  tag?: string;
  code?: { code: string; language: string; label: string };
};

export function OptionTabs({ options, accent = "brand" }: { options: TabOption[]; accent?: "brand" | "accent" }) {
  const [active, setActive] = useState(options[0].key);
  const cur = options.find((o) => o.key === active) ?? options[0];
  return (
    <Column fillWidth radius="xl" border="neutral-alpha-medium" background="surface" overflow="hidden">
      <Background position="absolute" fill pointerEvents="none" gradient={{ display: true, colorStart: `${accent}-alpha-weak`, colorEnd: "static-transparent", x: 100, y: 0, width: 100, height: 80, opacity: 60 }} />
      <Row zIndex={1} padding="12" gap="8" wrap borderBottom="neutral-alpha-weak">
        {options.map((o) => (
          <Button key={o.key} size="s" variant={o.key === active ? "primary" : "secondary"} onClick={() => setActive(o.key)}>
            {o.label}
          </Button>
        ))}
      </Row>
      <Row zIndex={1} fillWidth s={{ direction: "column" }}>
        <Column flex={5} fillWidth padding="xl" s={{ padding: "l" }} gap="12">
          <Row gap="8" vertical="center" wrap>
            <Heading as="h3" variant="heading-strong-l">{cur.title}</Heading>
            {cur.tag && <Tag size="s" scheme={accent}>{cur.tag}</Tag>}
          </Row>
          <Text variant="body-default-m" onBackground="neutral-medium">{cur.text}</Text>
          {cur.points && (
            <Column gap="8">
              {cur.points.map((p) => (
                <Row key={p} gap="8" vertical="center" textVariant="body-default-s">
                  <Icon name="check" size="xs" onBackground="brand-medium" /> {p}
                </Row>
              ))}
            </Column>
          )}
        </Column>
        {cur.code && (
          <Column flex={6} fillWidth padding="16" minWidth={0}>
            <CodeBlock key={cur.key} codes={[cur.code]} copyButton />
          </Column>
        )}
      </Row>
    </Column>
  );
}

export type Symptom = { key: string; symptom: string; fix: string };

export function SymptomFixer({ items, title = "Вашият план", empty = "Отбележете какво забелязвате и ще получите подредени стъпки.", cta = { label: "Поискайте оферта", href: "/kontakti" } }: { items: Symptom[]; title?: string; empty?: string; cta?: { label: string; href: string } }) {
  const [picked, setPicked] = useState<Record<string, boolean>>({});
  const chosen = items.filter((i) => picked[i.key]);
  return (
    <Column fillWidth radius="xl" border="neutral-alpha-medium" background="surface" overflow="hidden">
      <Background position="absolute" fill pointerEvents="none" gradient={{ display: true, colorStart: "brand-alpha-weak", colorEnd: "static-transparent", x: 0, y: 100, width: 100, height: 80, opacity: 60 }} />
      <Row zIndex={1} fillWidth s={{ direction: "column" }}>
        <Column flex={5} fillWidth padding="xl" s={{ padding: "l" }} gap="12">
          {items.map((i) => (
            <Checkbox key={i.key} label={i.symptom} checked={!!picked[i.key]} onToggle={(v) => setPicked((s) => ({ ...s, [i.key]: v }))} />
          ))}
        </Column>
        <Column flex={6} fillWidth padding="xl" s={{ padding: "l" }} gap="12" borderLeft="neutral-alpha-weak">
          <Heading as="p" variant="heading-strong-m">{title}</Heading>
          {chosen.length === 0 ? (
            <Text variant="body-default-s" onBackground="neutral-weak">{empty}</Text>
          ) : (
            <Column gap="12">
              {chosen.map((c, n) => (
                <Row key={c.key} gap="12" vertical="start">
                  <Row width="32" height="32" center radius="m" background="brand-alpha-weak" border="brand-alpha-weak" onBackground="brand-weak" textVariant="code-default-s" style={{ flexShrink: 0 }}>{n + 1}</Row>
                  <Text variant="body-default-s">{c.fix}</Text>
                </Row>
              ))}
              <Row paddingTop="8"><Button href={cta.href} size="s" arrowIcon>{cta.label}</Button></Row>
            </Column>
          )}
          <Text variant="body-default-xs" onBackground="neutral-weak">Ориентир, не диагноза. Реалните причини се откриват с измерване. Нищо не се записва.</Text>
        </Column>
      </Row>
    </Column>
  );
}

export type BriefItem = { key: string; title: string; spec: string };

export function BriefBuilder({ heading, platformLabel, platforms, items, defaults, intro, outro }: { heading: string; platformLabel: string; platforms: string[]; items: BriefItem[]; defaults: string[]; intro: string; outro: string }) {
  const [platform, setPlatform] = useState(platforms[0]);
  const [picked, setPicked] = useState<Record<string, boolean>>(() => Object.fromEntries(defaults.map((d) => [d, true])));
  const [copied, setCopied] = useState(false);
  const text = useMemo(() => {
    const lines = items.filter((i) => picked[i.key]).map((i, n) => `${n + 1}. ${i.title}: ${i.spec}`);
    if (!lines.length) return "Изберете поне една точка.";
    return `${intro}\n${platformLabel}: ${platform}\n\n${lines.join("\n")}\n\n${outro}`;
  }, [picked, platform, items, intro, outro, platformLabel]);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
    }
  };
  return (
    <Column fillWidth radius="xl" border="neutral-alpha-medium" background="surface" overflow="hidden">
      <Background position="absolute" fill pointerEvents="none" gradient={{ display: true, colorStart: "accent-alpha-weak", colorEnd: "static-transparent", x: 100, y: 100, width: 100, height: 80, opacity: 60 }} />
      <Row zIndex={1} fillWidth s={{ direction: "column" }}>
        <Column flex={5} fillWidth padding="xl" s={{ padding: "l" }} gap="16">
          <Column gap="8">
            <Text variant="label-strong-s">{platformLabel}</Text>
            <Row gap="8" wrap>
              {platforms.map((p) => (
                <Button key={p} size="s" variant={platform === p ? "primary" : "secondary"} onClick={() => setPlatform(p)}>{p}</Button>
              ))}
            </Row>
          </Column>
          <Column gap="12">
            {items.map((i) => (
              <Checkbox key={i.key} label={i.title} checked={!!picked[i.key]} onToggle={(v) => setPicked((s) => ({ ...s, [i.key]: v }))} />
            ))}
          </Column>
        </Column>
        <Column flex={6} fillWidth padding="xl" s={{ padding: "l" }} gap="12" borderLeft="neutral-alpha-weak">
          <Row horizontal="between" vertical="center" gap="8" wrap>
            <Heading as="p" variant="heading-strong-m">{heading}</Heading>
            <Button size="s" variant="secondary" prefixIcon={copied ? "check" : "document"} onClick={copy}>{copied ? "Копирано" : "Копирай"}</Button>
          </Row>
          <Column padding="16" radius="m" border="neutral-alpha-medium" background="page" style={{ whiteSpace: "pre-wrap", fontFamily: "var(--font-code, monospace)", fontSize: 13, lineHeight: 1.6 }}>{text}</Column>
          <Text variant="body-default-xs" onBackground="neutral-weak">Изпратете ми го в запитването. Нищо не се записва автоматично.</Text>
        </Column>
      </Row>
    </Column>
  );
}
