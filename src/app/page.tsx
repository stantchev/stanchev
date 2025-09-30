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
<Script
  id="organization-homepage-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Станчев SEO",
      url: "https://stanchev.bg/",
      logo: "https://stanchev.bg/images/og/og.jpg",
      description:
        "SEO оптимизация и AI Automation за повече трафик, по-високо класиране и автоматизирано развитие на вашия бизнес | Станчев SEO",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "seo@stanchev.bg",
        },
      ],
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "Бул. Г.М. Димитров 26",
          addressLocality: "София",
          addressRegion: "София",
          postalCode: "1797",
          addressCountry: "BG",
        },
      ],
      sameAs: [
        "https://github.com/stantchev/",
        "https://www.linkedin.com/in/stantcheff/",
        "https://dev.to/stanchev",
      ],
    }),
  }}
/>
      
      <Column maxWidth="m" gap="l" horizontal="center" align="center">
        {/* Featured badge */}
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
        <Column
          maxWidth="m"
          horizontal="center"
          vertical="center"
          align="center"
          gap="l"
          paddingBottom="xl"
        >
          <RevealFx speed="fast">
            <Heading
              wrap="balance"
              variant="display-strong-l"
              align="center"
              style={{ lineHeight: "1.2", textAlign: "center" }}
            >
              SEO оптимизация + AI Automation за вашия бизнес
            </Heading>
          </RevealFx>

           <RevealFx delay={0.2} speed="fast">
            <Column maxWidth="m" align="center" horizontal="center">
              <Text
                wrap="balance"
                onBackground="neutral-weak"
                align="center"
                variant="heading-default-l"
                style={{ maxWidth: "720px", textAlign: "center" }}
              >
                Искате ли повече клиенти и по-високи позиции в Google и AI
                системите? Давам ви измерим ръст на трафика и реални резултати,
                без да губите време и ресурси.
              </Text>
            </Column>
          </RevealFx>

        <RevealFx delay={0.4} speed="fast">
          <Column align="center" horizontal="center">
            <Flex gap="16" horizontal="center" vertical="center" wrap>
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
          </Column>
        </RevealFx>

        {/* Why me */}
        <Column maxWidth="m" align="center" horizontal="center" gap="l">
          <Heading variant="display-strong-m" align="center">
            Защо да работите с мен?
          </Heading>
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            align="center"
            variant="body-default-l"
            style={{ maxWidth: "720px", textAlign: "center" }}
          >
            Докато повечето SEO агенции гонят само класиране в Google, аз ви
            позиционирам и в AI системите за търсене. Това ви дава двойно
            предимство – да излизате пред конкурентите там, където те все още
            липсват. Работя сам, без излишни посредници, така че получавате
            директна експертиза и бързи резултати.
          </Text>
        </Column>

        {/* CTA */}
        <Column align="center" paddingY="xl" fillWidth>
          <Heading variant="display-strong-m" align="center">
            Искате ли сайтът ви да се класира по-високо?
          </Heading>
          <Flex horizontal="center" vertical="center" paddingTop="m" gap="l" wrap>
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
        <Projects range={[1, 3]} />

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








