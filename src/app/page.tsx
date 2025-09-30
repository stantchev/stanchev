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
              SEO оптимизация + AI Automation за вашия бизнес
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
              Искате ли повече клиенти и по-високи позиции в Google и AI
              системите? Давам ви измерим ръст на трафика и реални резултати,
              без да губите време и ресурси.
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
                  За мен
                </Flex>
              </Button>
            </Flex>
          </RevealFx>
        </Column>

        {/* Why Me */}
        <Column maxWidth="s" align="center" gap="m" paddingY="xl">
          <Heading variant="heading-strong-m" align="center">
            Защо да работите с мен?
          </Heading>
          <Text
            align="center"
            onBackground="neutral-weak"
            variant="body-default-l"
            style={{ maxWidth: "640px" }}
          >
            Докато повечето SEO агенции гонят само класиране в Google,
            аз ви позиционирам и в <strong>AI системите за търсене</strong>.
            Това ви дава двойно предимство – да излизате пред конкурентите там,
            където те все още липсват. Работя сам, без излишни посредници, така
            че получавате директна експертиза и бързи резултати.
          </Text>
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
        <Column fillWidth maxWidth="l" gap="m">
          <Heading as="h2" variant="display-strong-xs" align="center">
            Последни проекти
          </Heading>
          <Projects range={[3]} />
        </Column>

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
