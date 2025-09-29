import React from "react";
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
} from "@once-ui-system/core";
import { home, about, person, newsletter, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: home.titleText,
  description: home.descriptionText,
  openGraph: {
    title: "SEO оптимизация и AI Automation за вашия бизнес",
    description:
      "Комбинация от SEO оптимизация и AI Automation за повече трафик, по-високо класиране и автоматизирано развитие на вашия бизнес | Станчев SEO",
    url: "https://stanchev.bg/",
    siteName: "Станчев SEO",
    images: [{ url: `https://stanchev.bg/images/og/og.jpg`, width: 1200, height: 630 }],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO оптимизация и AI Automation за вашия бизнес",
    description:
      "Комбинация от SEO оптимизация и AI Automation за повече трафик, по-високо класиране и автоматизирано развитие на вашия бизнес | Станчев SEO",
    images: [`https://stanchev.bg/images/og/og.jpg`],
  },
};

export default function Nachalo() {
  return (
    <>
      <Script
        id="organization-homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "Станчев SEO",
            url: "https://stanchev.bg/",
            logo: "https://stanchev.bg/images/og/og.jpg",
            description:
              "SEO оптимизация и AI Automation за повече трафик, по-високо класиране и автоматизирано развитие на вашия бизнес | Станчев SEO",
          }),
        }}
      />

      <Column maxWidth="m" gap="xl" horizontal="center">
        {/* HERO */}
        <Column fillWidth paddingY="40" gap="m" align="center">
          <Badge background="brand-alpha-weak">SEO + AI Automation</Badge>
          <Heading variant="display-strong-l" align="center">
            Повече трафик. По-високи класации. По-умна автоматизация.
          </Heading>
          <Text variant="heading-default-l" align="center" onBackground="neutral-weak">
            Комбинираме SEO стратегии с AI технологии, за да изградим растеж, който не спира.
          </Text>
          <Flex gap="m" horizontal="center" paddingTop="24">
            <Button href="/kontakti" variant="primary" size="l" data-border="rounded">
              Заяви безплатна консултация
            </Button>
            <Button href="/za-men" variant="secondary" size="l" data-border="rounded">
              Научи повече
            </Button>
          </Flex>
        </Column>

        {/* WHAT IS IT / WHAT’S IN IT FOR ME */}
        <Flex fillWidth gap="40" mobileDirection="column">
          <Column flex={1} gap="m">
            <Heading as="h2" variant="display-strong-s">Какво е това?</Heading>
            <Text>
              Професионална SEO оптимизация за онлайн магазини и бизнес сайтове,
              комбинирана с AI Automation, която спестява време и ресурси.
              Резултатът – устойчива видимост в Google и автоматизация на ключови процеси.
            </Text>
          </Column>
          <Column flex={1} gap="m">
            <Heading as="h2" variant="display-strong-s">Какво печеля аз?</Heading>
            <Text>
              Повече органичен трафик, по-ниска цена на клиент и ясни, измерими резултати.
              Фокусът е върху ръст на продажби, а не празни отчети.
            </Text>
          </Column>
        </Flex>

        {/* CASE / PROJECT */}
        <Column fillWidth gap="l" paddingY="40">
          <Heading as="h2" variant="display-strong-s" align="center">
            Реални проекти. Реални резултати.
          </Heading>
          <Projects range={[1]} />
        </Column>

        {/* BLOG */}
        {routes["/blog"] && (
          <Column fillWidth gap="l" paddingY="40">
            <Heading as="h2" variant="display-strong-s" align="center">
              Последни публикации
            </Heading>
            <Posts range={[1, 3]} columns="3" />
          </Column>
        )}

        {/* WHY YOU */}
        <Column fillWidth gap="m" paddingY="40" align="center">
          <Heading as="h2" variant="display-strong-s">Защо да изберете нас?</Heading>
          <Text align="center">
            Защото комбинираме дългогодишен SEO опит с най-новите AI технологии.
            Получавате резултати по-бързо, по-ефективно и с по-малко риск.
          </Text>
          <Flex gap="m" wrap horizontal="center" paddingTop="16">
            <Badge background="brand-alpha-weak">Техническа SEO експертиза</Badge>
            <Badge background="brand-alpha-weak">AI автоматизация</Badge>
            <Badge background="brand-alpha-weak">Прозрачни отчети</Badge>
            <Badge background="brand-alpha-weak">Фокус върху ROI</Badge>
          </Flex>
        </Column>

        {/* CTA */}
        <Column align="center" gap="m" paddingY="40">
          <Heading variant="display-strong-m" align="center">
            Искате ли вашият сайт да се класира по-високо?
          </Heading>
          <Button href="/kontakti" variant="primary" size="l" prefixIcon="rocket">
            Свържете се с нас
          </Button>
        </Column>

        {newsletter.display && <Mailchimp newsletter={newsletter} />}
      </Column>
    </>
  );
}
