import { Background, Column, Icon, Row, Tag, Text, type IconName } from "@once-ui-system/core";

function Frame({ title, badge, children, accent = "brand" }: { title: string; badge?: string; children: React.ReactNode; accent?: "brand" | "accent" }) {
  return (
    <Column fillWidth radius="xl" border="neutral-alpha-medium" background="surface" overflow="hidden" shadow="l">
      <Background position="absolute" fill pointerEvents="none" gradient={{ display: true, colorStart: `${accent}-alpha-medium`, colorEnd: "static-transparent", x: 80, y: 0, width: 100, height: 80, opacity: 50 }} dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 30 }} />
      <Row zIndex={1} paddingX="16" paddingY="12" borderBottom="neutral-alpha-weak" vertical="center" gap="8">
        <Row gap="4" aria-hidden="true">
          <Row width="8" height="8" radius="full" background="neutral-alpha-medium" />
          <Row width="8" height="8" radius="full" background="neutral-alpha-medium" />
          <Row width="8" height="8" radius="full" background="neutral-alpha-medium" />
        </Row>
        <Text variant="label-strong-s">{title}</Text>
        {badge && <Tag size="s" scheme="neutral">{badge}</Tag>}
      </Row>
      <Column zIndex={1} padding="16" gap="12">{children}</Column>
    </Column>
  );
}

const Block = ({ h = 40, w = "100%", tone = "neutral-alpha-weak" }: { h?: number; w?: string; tone?: string }) => (
  <div style={{ height: h, width: w, borderRadius: 8, background: `var(--${tone})`, border: "1px solid var(--neutral-alpha-weak)" }} aria-hidden="true" />
);

export function WireframeVisual() {
  return (
    <Frame title="Структура на сайта" badge="илюстрация">
      <Block h={24} />
      <Row gap="8"><Column flex={3} gap="8"><Block h={18} w="80%" tone="brand-alpha-medium" /><Block h={10} /><Block h={10} w="70%" /><Block h={28} w="40%" tone="brand-alpha-weak" /></Column><Column flex={2}><Block h={84} tone="accent-alpha-weak" /></Column></Row>
      <Row gap="8"><Block h={56} /><Block h={56} /><Block h={56} /></Row>
      <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /><Text variant="label-default-xs" onBackground="neutral-weak">Една цел на страница, ясни заглавия, бърз старт</Text></Row>
    </Frame>
  );
}

export function PipelineVisual({ title, steps, accent = "brand" }: { title: string; steps: { icon: IconName; label: string; note: string }[]; accent?: "brand" | "accent" }) {
  return (
    <Frame title={title} badge="схема" accent={accent}>
      {steps.map((st, i) => (
        <Column key={st.label} gap="8">
          <Row gap="12" vertical="center" padding="12" radius="m" border="neutral-alpha-medium" background="page">
            <Icon name={st.icon} size="s" border={`${accent}-alpha-weak`} background={`${accent}-alpha-weak`} onBackground={`${accent}-weak`} radius="m" padding="8" />
            <Column gap="2">
              <Text variant="label-strong-s">{st.label}</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">{st.note}</Text>
            </Column>
          </Row>
          {i < steps.length - 1 && (
            <Row horizontal="center" aria-hidden="true"><div className="flow-wire-v" /></Row>
          )}
        </Column>
      ))}
    </Frame>
  );
}

export function StatusBoard({ rows }: { rows: { label: string; note: string }[] }) {
  return (
    <Frame title="Какво се следи" badge="илюстрация">
      {rows.map((r) => (
        <Row key={r.label} gap="12" vertical="center" padding="12" radius="m" border="neutral-alpha-medium" background="page">
          <Row width="8" height="8" radius="full" background="brand-strong" style={{ flexShrink: 0 }} aria-hidden="true" />
          <Text variant="label-strong-s" style={{ flex: 1 }}>{r.label}</Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">{r.note}</Text>
        </Row>
      ))}
    </Frame>
  );
}

export function BudgetVisual() {
  const m = [
    { k: "LCP", v: "≤ 2,5 s", n: "най-голямото съдържание" },
    { k: "INP", v: "≤ 200 ms", n: "реакция на действие" },
    { k: "CLS", v: "≤ 0,1", n: "стабилност на оформлението" },
  ];
  return (
    <Frame title="Бюджет за скорост" badge="цели" accent="accent">
      {m.map((x) => (
        <Row key={x.k} gap="12" vertical="center" padding="12" radius="m" border="neutral-alpha-medium" background="page">
          <Text variant="code-default-s" onBackground="accent-weak" style={{ width: 40 }}>{x.k}</Text>
          <Text variant="heading-strong-m" style={{ flex: 1 }}>{x.v}</Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">{x.n}</Text>
        </Row>
      ))}
      <Text variant="label-default-xs" onBackground="neutral-weak">Прагът "добро" според Google. Измерва се преди и след промените.</Text>
    </Frame>
  );
}
