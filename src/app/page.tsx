import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, GlitchFx } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: home.titleText,
  description: home.descriptionText,
  openGraph: {
    title: home.titleText,
    description: home.descriptionText,
    images: [{ url: home.image }],
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
            "name": "Станчев SEO",
            "url": "https://stanchev.bg/",
            "logo": "https://stanchev.bg/images/og/og.jpg",
            "description": "Аз съм Станчев – SEO оптимизатор, който превръща хаоса в структура, съдържанието в резултати и кофеина в работещи решения. Помагам на бизнеси да увеличат видимостта си онлайн и да постигнат устойчив растеж.",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "seo@stanchev.bg"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Бул. Г.М. Димитров 26",
              "addressLocality": "София",
              "addressRegion": "София",
              "postalCode": "1797",
              "addressCountry": "BG"
            },
            "sameAs": [
              "https://github.com/stantchev/",
              "https://www.linkedin.com/in/stantcheff/",
              "https://dev.to/stanchev"
            ]
          })
        }}
      />,
    <Column 
      maxWidth="m" 
      gap="xl" 
      horizontal="center"
    >
      <Column 
        fillWidth 
        paddingY="24" 
        gap="m"
      >
        <Column maxWidth="s">
          {home.featured.display && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge 
              background="brand-alpha-weak" 
              paddingX="12" 
              paddingY="4" 
              onBackground="neutral-strong" 
              textVariant="label-default-s" 
              arrow={false}
              href={home.featured.href}
            >
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading 
              wrap="balance" 
              variant="display-strong-m"
            >
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text 
              wrap="balance" 
              onBackground="neutral-weak" 
              variant="heading-default-l"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
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
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex 
          fillWidth 
          gap="24" 
          mobileDirection="column"
        >
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading 
              as="h2" 
              variant="display-strong-xs" 
              wrap="balance"
            >
              Последни публикации
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && (
        <Mailchimp newsletter={newsletter} />
      )}
    </Column>
    </>
  );
}
