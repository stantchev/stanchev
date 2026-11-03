import type { ReactNode } from "react";
import {
  AccordionGroup,
  Background,
  Breadcrumbs,
  Button,
  Card,
  Column,
  Grid,
  Heading,
  Icon,
  Row,
  Tag,
  Text,
  type GridSize,
  type IconName,
} from "@once-ui-system/core";

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <Column fillWidth horizontal="center" paddingTop="24" paddingBottom="64" s={{ paddingBottom: "40" }}>
      <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
        {children}
      </Column>
    </Column>
  );
}

export function Trail({ items }: { items: { label: string; href?: string }[] }) {
  return <Breadcrumbs items={items} />;
}

export function Hero({
  eyebrow,
  h1,
  lead,
  ctas,
  meta,
}: {
  eyebrow?: string;
  h1: string;
  lead: string;
  ctas?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <Column fillWidth radius="xl" border background="surface" overflow="hidden" padding="xl" gap="24" s={{ padding: "l" }}>
      <Background
        position="absolute"
        top="0"
        left="0"
        fill
        pointerEvents="none"
        gradient={{ display: true, x: 80, y: 0, width: 140, height: 90, tilt: 0, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", opacity: 70 }}
        dots={{ display: true, opacity: 10, size: "24" }}
      />
      <Column gap="20" maxWidth="m" zIndex={1}>
        {eyebrow && (
          <Row>
            <Tag scheme="brand" size="m">
              {eyebrow}
            </Tag>
          </Row>
        )}
        <Heading as="h1" variant="display-strong-l" wrap="balance">
          {h1}
        </Heading>
        <Text variant="body-default-xl" onBackground="neutral-weak" wrap="balance">
          {lead}
        </Text>
      </Column>
      {(ctas || meta) && (
        <Row gap="16" vertical="center" wrap zIndex={1}>
          {ctas}
          {meta}
        </Row>
      )}
    </Column>
  );
}

export function SectionTitle({ eyebrow, title, lead, id }: { eyebrow?: string; title: string; lead?: string; id?: string }) {
  return (
    <Column gap="12" maxWidth="m">
      {eyebrow && (
        <Text variant="label-default-s" onBackground="brand-medium">
          {eyebrow}
        </Text>
      )}
      <Heading as="h2" variant="display-strong-xs" wrap="balance" id={id}>
        {title}
      </Heading>
      {lead && (
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {lead}
        </Text>
      )}
    </Column>
  );
}

export function FeatureGrid({ items }: { items: { title: string; text: string; icon?: IconName }[] }) {
  return (
    <Grid columns={3} gap="16" m={{ columns: 2 }} s={{ columns: 1 }}>
      {items.map((item) => (
        <Column key={item.title} background="surface" border radius="l" padding="24" gap="12">
          {item.icon && <Icon name={item.icon} size="m" onBackground="brand-medium" />}
          <Heading as="h3" variant="heading-strong-m">
            {item.title}
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {item.text}
          </Text>
        </Column>
      ))}
    </Grid>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <Column gap="12" maxWidth="m">
      {items.map((item) => (
        <Row key={item} gap="12" vertical="start">
          <Icon name="checkCircle" size="s" onBackground="brand-medium" style={{ marginTop: 2 }} />
          <Text variant="body-default-l">{item}</Text>
        </Row>
      ))}
    </Column>
  );
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <Grid columns={(items.length >= 4 ? 4 : items.length) as GridSize} gap="16" l={{ columns: 2 }} s={{ columns: 1 }}>
      {items.map((step, index) => (
        <Column key={step.title} gap="12" paddingTop="16" borderTop>
          <Text variant="label-default-s" onBackground="brand-medium">
            {String(index + 1).padStart(2, "0")}
          </Text>
          <Heading as="h3" variant="heading-strong-m">
            {step.title}
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {step.text}
          </Text>
        </Column>
      ))}
    </Grid>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <AccordionGroup
      maxWidth="m"
      items={items.map((item) => ({
        title: item.q,
        content: (
          <Text variant="body-default-m" onBackground="neutral-weak">
            {item.a}
          </Text>
        ),
      }))}
    />
  );
}

export function LinkCards({ items }: { items: { href: string; title: string; text: string; icon: IconName; meta?: string }[] }) {
  return (
    <Grid columns={3} gap="16" m={{ columns: 2 }} s={{ columns: 1 }}>
      {items.map((item) => (
        <Card key={item.href} href={item.href} radius="l" border padding="24" gap="12" fillHeight direction="column">
          <Row horizontal="between" vertical="center" fillWidth>
            <Icon name={item.icon} size="m" onBackground="brand-medium" />
            {item.meta && (
              <Tag size="s" scheme="neutral">
                {item.meta}
              </Tag>
            )}
          </Row>
          <Heading as="h3" variant="heading-strong-m">
            {item.title}
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {item.text}
          </Text>
        </Card>
      ))}
    </Grid>
  );
}

export function CtaBand({
  title = "Готови ли сте да подобрите видимостта си?",
  text = "Опишете накратко сайта и целта си. Първоначалният разговор е безплатен.",
  primary = { label: "Запитване за консултация", href: "/kontakti" },
  secondary,
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <Column fillWidth background="surface" border radius="xl" padding="xl" gap="20" horizontal="center" align="center" s={{ padding: "l" }}>
      <Heading as="h2" variant="display-strong-xs" wrap="balance">
        {title}
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" style={{ maxWidth: 560 }}>
        {text}
      </Text>
      <Row gap="12" wrap horizontal="center">
        <Button href={primary.href} size="l" arrowIcon>
          {primary.label}
        </Button>
        {secondary && (
          <Button href={secondary.href} size="l" variant="secondary">
            {secondary.label}
          </Button>
        )}
      </Row>
    </Column>
  );
}
