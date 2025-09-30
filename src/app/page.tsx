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
  Pulse,
  BarChart,
  LineChart,
  PieChart,
} from "@once-ui-system/core";
import { home, about, person, newsletter, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: home.title,
  description: home.description,
  openGraph: {
    title: home.title,
    description: home.description,
    url: "https://stanchev.bg/",
    siteName: "Станчев SEO",
    images: [
      {
        url: `https://stanchev.bg/images/og/og.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: home.title,
    description: home.description,
    images: [`https://stanchev.bg/images/og/og.jpg`],
  },
};

export default function Nachalo() {
  return (
    <>
      {/* Schema.org */}
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
            description: home.description,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "seo@stanchev.bg",
            },
            sameAs: [
              "https://github.com/stantchev/",
              "https://www.linkedin.com/in/stantcheff/",
              "https://dev.to/stanchev",
            ],
          }),
        }}
      />

      <Column maxWidth="m" gap="xl" horizontal="center">
        {/* Featured badge with pulse */}
        <Column fillWidth horizontal="center" gap="m">
          <Column maxWidth="s" horizontal="center" align="center">
            {home.featured.display && (
              <RevealFx
                fillWidth
                horizontal="center"
                paddingTop="16"
                paddingBottom="32"
              >
                <Badge
                  background="brand-alpha-weak"
                  paddingX="12"
                  paddingY="4"
                  onBackground="neutral-strong"
                  textVariant="label-default-s"
                  arrow={false}
                  href="https://stanchev.bg/seo-proekti/robots-txt-editor-cache-control-opencart-2302"
                >
                  <Row gap="8" vertical="center">
                    <Pulse size="s" variant="success" />
                    {home.featured.title}
                  </Row>
                </Badge>
              </RevealFx>
            )}
          </Column>
        </Column>

        {/* Hero */}
        <Column maxWidth="m" align="center" gap="l" paddingBottom="xl">
          <RevealFx speed="fast">
            <Heading
              wrap="balance"
              variant="display-strong-l"
              align="center"
              style={{ lineHeight: "1.2" }}
            >
              SEO + AI Automation за вашия бизнес
            </Heading>
          </RevealFx>
          <RevealFx delay={0.2} speed="fast">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              align="center"
              variant="heading-default-l"
              style={{ maxWidth: "720px" }}
            >
              Аз комбинирам SEO оптимизация с AI Automation, за да дам на
              бизнеса ви повече трафик, по-високо класиране и автоматизирано
              развитие.
            </Text>
          </RevealFx>
          <RevealFx delay={0.4} speed="fast">
            <Flex gap="16" horizontal="center" wrap>
              <Button
                href="/kontakti"
                variant="primary"
                size="l"
                prefixIcon="rocket"
              >
                Започнете сега
              </Button>
              <Button
                href="/za-men"
                variant="secondary"
                size="l"
                prefixIcon="user"
              >
                <Flex vertical="center" gap="8">
                  <Avatar src={person.avatar} size="s" />
                  {about.label}
                </Flex>
              </Button>
            </Flex>
          </RevealFx>
        </Column>

        {/* Charts Section */}
        <Column fillWidth maxWidth="s" gap="l">
          <Heading variant="display-strong-s" align="center">
            Търсене с AI срещу Google Search
          </Heading>
          <Text
            align="center"
            onBackground="neutral-weak"
            variant="body-default-l"
          >
            Все повече хора търсят информация директно в AI системи. Аз знам как
            да ви позиционирам там, където конкуренцията ви още не е стъпила.
          </Text>

          <LineChart
            title="AI Search VS Google Search (2020-2025)"
            axis="x"
            date={{ format: "yyyy" }}
            series={[
              { key: "Google Search", color: "cyan" },
              { key: "AI Search", color: "magenta" },
            ]}
            data={[
              { date: new Date("2020-01-01"), "Google Search": 95, "AI Search": 1 },
              { date: new Date("2022-01-01"), "Google Search": 93, "AI Search": 3 },
              { date: new Date("2023-01-01"), "Google Search": 91, "AI Search": 5 },
              { date: new Date("2024-01-01"), "Google Search": 89, "AI Search": 8 },
              { date: new Date("2025-01-01"), "Google Search": 85, "AI Search": 12 },
            ]}
          />
          <BarChart
            title="Резултати за мои клиенти"
            axis="none"
            barWidth="l"
            legend={{ position: "bottom-center" }}
            series={[
              { key: "AI Overviews", color: "yellow" },
              { key: "Google Rankings", color: "aqua" },
            ]}
            data={[
              { label: "Клиент A", "AI Overviews": 72, "Google Rankings": 88 },
              { label: "Клиент B", "AI Overviews": 64, "Google Rankings": 92 },
              { label: "Клиент C", "AI Overviews": 81, "Google Rankings": 85 },
            ]}
          />
          <PieChart
            title="Дял на търсене (2025)"
            legend={{ display: true, position: "bottom-center" }}
            ring={{ inner: 50, outer: 60 }}
            series={{ key: "value" }}
            data={[
              { name: "Google", value: 85 },
              { name: "AI Search", value: 12 },
              { name: "Други", value: 3 },
            ]}
          />
        </Column>

        {/* CTA */}
        <Column align="center" paddingY="xl" fillWidth>
          <Heading variant="display-strong-m" align="center">
            Искате ли сайтът ви да се класира по-високо?
          </Heading>
          <Flex horizontal="center" paddingTop="m" gap="l">
            <Button variant="primary" prefixIcon="rocket" size="l" href="/kontakti">
              Свържете се с мен
            </Button>
            <Button variant="secondary" size="l" href="/za-men">
              Научете повече
            </Button>
          </Flex>
        </Column>

        {/* Blog */}
        {routes["/blog"] && (
          <Column fillWidth maxWidth="l" gap="m">
            <Heading as="h2" variant="display-strong-xs" align="center">
              Последни публикации
            </Heading>
            <Posts range={[1, 2]} columns="2" />
          </Column>
        )}

        {/* Projects */}
        <Projects range={[3]} />

        {/* Newsletter */}
        {newsletter.display && (
          <Column fillWidth maxWidth="s" align="center" paddingY="40">
            <Mailchimp />
          </Column>
        )}
      </Column>
    </>
  );
}
