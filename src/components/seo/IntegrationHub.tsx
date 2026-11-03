import { Background, Column, Icon, Row, Tag, Text, type IconName } from "@once-ui-system/core";

const outputs: { icon: IconName; label: string; note: string }[] = [
  { icon: "document", label: "Метаданни", note: "title, description, canonical" },
  { icon: "code", label: "JSON-LD", note: "schema по тип страница" },
  { icon: "globe", label: "Sitemap", note: "генерирана автоматично" },
  { icon: "lock", label: "robots.txt", note: "правила за ботове" },
  { icon: "arrowRight", label: "Пренасочвания", note: "карта стар - нов адрес" },
  { icon: "chartBar", label: "Измерване", note: "Search Console и Analytics" },
];

export function IntegrationHub() {
  return (
    <Column fillWidth radius="xl" border="neutral-alpha-medium" background="surface" overflow="hidden" shadow="l">
      <Background
        position="absolute"
        fill
        pointerEvents="none"
        gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 0, y: 50, width: 80, height: 100, opacity: 50 }}
        lines={{ display: true, size: "16", thickness: 1, angle: 0, color: "neutral-alpha-weak", opacity: 40 }}
      />
      <Row zIndex={1} paddingX="16" paddingY="12" borderBottom="neutral-alpha-weak" vertical="center" gap="8">
        <Icon name="code" size="xs" onBackground="brand-weak" />
        <Text variant="label-strong-s">Схема на интеграцията</Text>
        <Tag size="s" scheme="neutral">пример</Tag>
      </Row>

      <Row zIndex={1} padding="20" gap="0" vertical="center" s={{ direction: "column", gap: "12" }}>
        <Column flex={4} fillWidth padding="16" gap="8" radius="l" border="brand-alpha-medium" background="brand-alpha-weak" minWidth={12}>
          <Icon name="box" size="s" onBackground="brand-weak" />
          <Text variant="label-strong-m">Един източник на истина</Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Данните за страниците и услугите на едно място
          </Text>
        </Column>

        <Column s={{ hide: true }} gap="8" paddingX="4" style={{ width: 48, flexShrink: 0 }}>
          {outputs.map((o) => (
            <Row key={o.label} height="48" vertical="center" fillWidth>
              <div className="flow-wire" aria-hidden="true" />
            </Row>
          ))}
        </Column>
        <Row hide s={{ hide: false }} horizontal="center">
          <Icon name="chevronDown" size="s" onBackground="neutral-weak" />
        </Row>

        <Column flex={5} fillWidth gap="8">
          {outputs.map((o) => (
            <Row key={o.label} height="48" fillWidth paddingX="12" gap="12" vertical="center" radius="m" border="neutral-alpha-medium" background="page">
              <Icon name={o.icon} size="xs" onBackground="brand-weak" />
              <Text variant="label-strong-s" title={o.note}>{o.label}</Text>
            </Row>
          ))}
        </Column>
      </Row>
    </Column>
  );
}
