import { Background, Button, Column, Heading, Line, Media, Row, Tag, Text, type Colors } from "@once-ui-system/core";
import type { ReactNode } from "react";

export type PromoCard = {
  tag?: string;
  variant: "brand" | "accent";
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  cta: string;
};

export function FeaturesPromo({ cards }: { cards: PromoCard[] }) {
  return (
    <Row fillWidth horizontal="center" gap="24" s={{ direction: "column" }}>
      {cards.map((card) => (
        <Column
          key={card.title}
          fillWidth
          horizontal="center"
          padding="4"
          radius="xl"
          overflow="hidden"
          border={card.variant === "brand" ? "brand-alpha-weak" : "accent-alpha-weak"}
        >
          <Background
            position="absolute"
            top="0"
            left="0"
            gradient={{
              display: true,
              x: 0,
              y: 0,
              colorStart: card.variant === "brand" ? "brand-background-medium" : "accent-background-medium",
            }}
          />
          <Column fillWidth vertical="center" padding="32" s={{ padding: "20" }} gap="12">
            {card.tag && (
              <Tag position="absolute" top="24" left="24" scheme={card.variant} size="l">
                {card.tag}
              </Tag>
            )}
            <Heading as="h3" variant="label-strong-s" onBackground={`${card.variant}-weak` as Colors} marginTop="56">
              {card.title}
            </Heading>
            <Text wrap="balance" variant="heading-default-xl">
              {card.description}
            </Text>
          </Column>
          <Media aspectRatio="16 / 10" radius="l" sizes="(max-width: 768px) 100vw, 640px" border src={card.image} alt={card.alt} />
          <Row maxWidth={24} horizontal="center" padding="32" s={{ padding: "20" }}>
            <Button fillWidth data-border="rounded" href={card.href} arrowIcon>
              {card.cta}
            </Button>
          </Row>
        </Column>
      ))}
    </Row>
  );
}

export type StickyCard = {
  title: string;
  description?: ReactNode;
  action?: { label: string; href: string };
};

const offsets = [
  { paddingX: "32", paddingTop: undefined },
  { paddingX: "24", paddingTop: "8" },
  { paddingX: "16", paddingTop: "16" },
  { paddingX: "8", paddingTop: "24" },
  { paddingX: "0", paddingTop: "32" },
] as const;

export function FeaturesSticky({ cards }: { cards: StickyCard[] }) {
  return (
    <Column fillWidth gap="24">
      {cards.map((card, index) => {
        const o = offsets[Math.min(index, offsets.length - 1)];
        return (
          <Row key={card.title} fillWidth position="sticky" top="64" paddingTop={o.paddingTop} paddingX={o.paddingX} s={{ paddingX: "0" }}>
            <Row fillWidth minHeight={24} radius="l" border center align="center" background="page" overflow="hidden" s={{ direction: "column" }}>
              <Background
                themeSolid="color"
                position="absolute"
                left="0"
                top="0"
                fill
                gradient={{ display: true, colorStart: "brand-solid-weak", x: 40, y: 100, width: 75, height: 75 }}
              />
              <Background
                position="absolute"
                left="0"
                top="0"
                fill
                gradient={{ display: true, colorStart: "accent-solid-weak", x: 60, y: 100, width: 75, height: 75 }}
              />
              <Column fillWidth center padding="xl" s={{ padding: "l" }}>
                <Column maxWidth="m" gap="24" horizontal="center" align="center">
                  <Heading as="h3" variant="display-strong-s" wrap="balance">
                    {card.title}
                  </Heading>
                  {card.description && (
                    <Text onBackground="neutral-weak" variant="heading-default-l" wrap="balance">
                      {card.description}
                    </Text>
                  )}
                  {card.action && (
                    <Row>
                      <Button href={card.action.href} variant="secondary" arrowIcon>
                        {card.action.label}
                      </Button>
                    </Row>
                  )}
                </Column>
              </Column>
            </Row>
          </Row>
        );
      })}
    </Column>
  );
}

export function FeaturesTimeline({
  title,
  lead,
  steps,
  side,
}: {
  title: string;
  lead?: string;
  steps: { title: string; description: string }[];
  side: ReactNode;
}) {
  return (
    <Row vertical="center" maxWidth="xl" padding="8" m={{ direction: "column-reverse" }}>
      {side}
      <Column fillWidth padding="xl" s={{ padding: "m" }} gap="16" horizontal="start">
        <Heading as="h2" variant="display-strong-s" wrap="balance">
          {title}
        </Heading>
        {lead && (
          <Text onBackground="neutral-weak" variant="heading-default-l" wrap="balance">
            {lead}
          </Text>
        )}
        <Column fillWidth paddingTop="24">
          {steps.map((step, index) => (
            <Row maxWidth={28} key={step.title} gap="32">
              <Column flex={1} minWidth="48" horizontal="center">
                <Row flex={1} horizontal="center">
                  {index === 0 && <Line position="absolute" top="0" width="16" background="brand-alpha-medium" />}
                  <Line vert background="brand-alpha-medium" />
                </Row>
                <Row fillWidth height="48" center textVariant="code-default-s" onBackground="brand-weak" radius="m" background="brand-alpha-weak" border="brand-alpha-weak">
                  {index + 1}
                </Row>
                <Row flex={1} horizontal="center">
                  <Line vert background="brand-alpha-medium" />
                  {index === steps.length - 1 && <Line position="absolute" bottom="0" width="16" background="brand-alpha-medium" />}
                </Row>
              </Column>
              <Column fillWidth gap="4" paddingY="16">
                <Text variant="heading-default-s" wrap="balance">
                  {step.title}
                </Text>
                <Text onBackground="neutral-weak" variant="body-default-xs" wrap="balance">
                  {step.description}
                </Text>
              </Column>
            </Row>
          ))}
        </Column>
      </Column>
    </Row>
  );
}
