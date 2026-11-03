import { Background, Column, Grid, Heading, Icon, Mask, MatrixFx, Row, SmartLink, Text, type IconName } from "@once-ui-system/core";
import type { ReactNode } from "react";

export type FeatureItem = {
  icon: IconName;
  title: string;
  meta?: string;
  description: string;
  href?: string;
};

export function FeaturesGrid({ title, lead, items, callout, wideLast }: { title: string; lead?: string; items: FeatureItem[]; callout?: ReactNode; wideLast?: boolean }) {
  return (
    <Column fillWidth>
      <Column fillWidth borderX borderTop gap="8" padding="l" s={{ padding: "m" }}>
        <Heading as="h2" variant="display-strong-s" wrap="balance">
          {title}
        </Heading>
        {lead && (
          <Text onBackground="neutral-weak" variant="heading-default-l" wrap="balance">
            {lead}
          </Text>
        )}
      </Column>
      <Grid fillWidth columns={3} m={{ columns: 2 }} xs={{ columns: 1 }} borderTop borderLeft>
        {items.map((item, index) => (
          <Column key={item.title} fillWidth padding="l" borderBottom borderRight gap="8" style={wideLast && index === items.length - 1 ? { gridColumn: "1 / -1" } : undefined}>
            <Icon name={item.icon} size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" marginBottom="12" />
            <Heading as="h3" variant="heading-strong-m">
              {item.href ? (
                <SmartLink href={item.href} unstyled>
                  {item.title}
                </SmartLink>
              ) : (
                item.title
              )}
              {item.meta && (
                <Text marginLeft="8" onBackground="brand-weak" weight="default">
                  {item.meta}
                </Text>
              )}
            </Heading>
            <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance">
              {item.description}
            </Text>
          </Column>
        ))}
      </Grid>
      {callout && (
        <Row fillWidth borderX padding="8" borderBottom>
          <Row fillWidth background="brand-alpha-weak" border="brand-alpha-weak" radius="l" padding="20" onBackground="brand-weak" align="center" horizontal="center">
            <Text wrap="balance">{callout}</Text>
          </Row>
        </Row>
      )}
    </Column>
  );
}

export function FeaturesBordered({ title, lead, items }: { title: string; lead?: string; items: Omit<FeatureItem, "meta" | "href">[] }) {
  return (
    <Column fillWidth horizontal="center" borderTop="neutral-medium">
      <Row fillWidth horizontal="center" borderLeft="neutral-medium" borderRight="neutral-medium">
        <Background
          fill={false}
          fillWidth
          s={{ hide: true }}
          borderRight="neutral-medium"
          mask={{ x: 100, y: 50, radius: 50 }}
          lines={{ display: true, size: "8", angle: -45, thickness: 1, color: "neutral-border-medium" }}
        />
        <Column fillWidth>
          <Column fillWidth horizontal="center" padding="32" s={{ padding: "24" }}>
            <Heading as="h2" variant="heading-strong-l" align="center" marginBottom="8" wrap="balance">
              {title}
            </Heading>
            {lead && (
              <Text align="center" onBackground="neutral-strong" variant="body-default-s" wrap="balance">
                {lead}
              </Text>
            )}
          </Column>
        </Column>
        <Background
          fill={false}
          fillWidth
          s={{ hide: true }}
          borderLeft="neutral-medium"
          mask={{ x: 0, y: 50, radius: 50 }}
          lines={{ display: true, size: "8", angle: 45, thickness: 1, color: "neutral-border-medium" }}
        />
      </Row>
      <Grid fillWidth borderLeft borderTop columns="3" m={{ columns: 2 }} s={{ columns: 1 }}>
        {items.map((item) => (
          <Column key={item.title} padding="40" s={{ padding: "24" }} borderBottom borderRight fillWidth gap="24">
            <Mask position="absolute" left="0" top="0" radius={33} x={25} y={0}>
              <MatrixFx size={1.5} colors={["brand-background-strong"]} flicker />
            </Mask>
            <Row vertical="center" gap="16">
              <Icon padding="8" name={item.icon} onBackground="brand-weak" size="xs" radius="m" border="brand-alpha-medium" background="brand-alpha-weak" />
              <Heading as="h3" variant="label-default-m" onBackground="brand-weak">
                {item.title}
              </Heading>
            </Row>
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-s">
              {item.description}
            </Text>
          </Column>
        ))}
      </Grid>
    </Column>
  );
}
