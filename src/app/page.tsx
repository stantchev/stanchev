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
  PieChart
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
  verification: {
    google: "ULHB2WBDkeyXyEYc7jVHf2nyPUUqKl_KOVBxnuiykpo",
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
            description: home.description,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "seo@stanchev.bg",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Бул. Г.М. Димитров 26",
              addressLocality: "София",
              addressRegion: "София",
              postalCode: "1797",
              addressCountry: "BG",
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
        <Column fillWidth paddingY="24" gap="m">
          <Column maxWidth="s">
            <RevealFx fillWidth horizontal="start" paddingBottom="16" speed="fast">
              <Heading wrap="balance" variant="display-strong-m">
                <Pulse size="s" variant="success" /> SEO + AI Automation
              </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32" speed="fast">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
                {home.description}
              </Text>
            </RevealFx>
            <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12" speed="fast">
              <Button
                id="about"
                data-border="rounded"
                href="/za-men"
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Flex gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && <Avatar marginRight="8" src={person.avatar} size="m" />}
                  {about.title}
                </Flex>
              </Button>
            </RevealFx>
          </Column>
        </Column>

        <Column gap="xl" paddingY="40" fillWidth>
          <Heading variant="display-strong-s" align="center">
            Търсене с AI срещу Google Search
          </Heading>
          <Text align="center" onBackground="neutral-weak" variant="heading-default-m">
            Все повече хора започват да търсят информация директно в AI системи. Аз знам как да ви позиционирам там, където конкуренцията ви още не е стъпила.
          </Text>

          <LineChart
            title="AI Search VS Google Search (2020-2025)"
            axis="x"
            date={{ format: "yyyy" }}
            series={[
              { key: "Google Search", color: "cyan" },
              { key: "AI Search", color: "magenta" }
            ]}
            data={[
              { date: new Date("2020-01-01"), "Google Search": 95, "AI Search": 1 },
              { date: new Date("2022-01-01"), "Google Search": 93, "AI Search": 3 },
              { date: new Date("2023-01-01"), "Google Search": 91, "AI Search": 5 },
              { date: new Date("2024-01-01"), "Google Search": 89, "AI Search": 8 },
              { date: new Date("2025-01-01"), "Google Search": 85, "AI Search": 12 },
            ]}
          />

          <Text align="center" paddingTop="20" onBackground="neutral-weak">
            До 2025 г. над 12% от глобалните търсения вече минават през AI. Аз знам как да ви изведа сред първите резултати.
          </Text>

          <BarChart
            title="Резултати за мои клиенти"
            axis="none"
            barWidth="xl"
            legend={{ position: "bottom-center" }}
            series={[
              { key: "AI Overviews", color: "yellow" },
              { key: "Google Rankings", color: "aqua" }
            ]}
            data={[
              { label: "Клиент A", "AI Overviews": 72, "Google Rankings": 88 },
              { label: "Клиент B", "AI Overviews": 64, "Google Rankings": 92 },
              { label: "Клиент C", "AI Overviews": 81, "Google Rankings": 85 }
            ]}
          />

          <Text align="center" paddingTop="20" onBackground="neutral-weak">
            Моите клиенти вече печелят позиции в AI Overviews, докато повечето конкуренти дори не знаят за тяхното значение.
          </Text>

          <PieChart
            title="Дял на търсене (2025)"
            legend={{ display: true, position: "bottom-center" }}
            ring={{ inner: 60, outer: 70 }}
            series={{ key: "value" }}
            data={[
              { name: "Google", value: 85 },
              { name: "AI Search", value: 12 },
              { name: "Други", value: 3 }
            ]}
          />

          <Text align="center" paddingTop="20" onBackground="neutral-weak">
            Google остава гигант, но делът на AI Search расте стремглаво. Ако не сте там днес, губите клиенти още утре.
          </Text>
        </Column>

        <Column align="center" paddingY="40" fillWidth>
          <Heading variant="display-strong-m" align="center">
            Искате ли сайтът ви да се класира по-високо?
          </Heading>
          <Flex horizontal="center" paddingTop="16">
            <Button variant="primary" prefixIcon="rocket" size="l" href="/kontakti">
              Свържете се с мен
            </Button>
          </Flex>
        </Column>

        {routes["/blog"] && (
          <Flex fillWidth gap="24" direction="column">
            <Flex flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Последни публикации
              </Heading>
            </Flex>
            <Flex flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Flex>
          </Flex>
        )}

        <Projects range={[2]} />

        {newsletter.display && <Mailchimp />}
      </Column>
    </>
  );
}

