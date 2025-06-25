import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema, GlitchFx } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: "SEO Консултант България | Станчев SEO - Професионални SEO Услуги",
    description: "Професионален SEO консултант в България. SEO оптимизация, линк билдинг стратегия, оптимизация на сайт, SEO анализ. Повишете позициите си в Google с доказани SEO услуги.",
    keywords: "seo консултант, seo фирми, линк билдинг стратегия, seo обучение, seo цена, seo оптимизации, интернет реклама, seo оптимизация google, seo специалист, оптимизация на сайт, seo анализ, seo услуги, seo експерт, seo агенция, seo българия",
    openGraph: {
      title: "SEO Консултант България | Станчев SEO - Професионални SEO Услуги",
      description: "Професионален SEO консултант в България. SEO оптимизация, линк билдинг стратегия, оптимизация на сайт, SEO анализ. Повишете позициите си в Google с доказани SEO услуги.",
      url: `${baseURL}/`,
      siteName: "Станчев SEO - Професионални SEO Услуги България",
      images: [
        {
          url: "https://stanchev.vercel.app/images/og/og.jpg",
          width: 1200,
          height: 630,
          alt: "Станчев SEO - Професионални SEO услуги България",
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "SEO Консултант България | Станчев SEO - Професионални SEO Услуги",
      description: "Професионален SEO консултант в България. SEO оптимизация, линк билдинг стратегия, оптимизация на сайт, SEO анализ. Повишете позициите си в Google с доказани SEO услуги.",
      images: ["https://stanchev.vercel.app/images/og/og.jpg"],
    },
    alternates: {
      canonical: `${baseURL}/`,
    },
  )};
}

export default function Nachalo() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/"
        title="SEO Консултант България | Станчев SEO - Професионални SEO Услуги"
        description="Професионален SEO консултант в България. SEO оптимизация, линк билдинг стратегия, оптимизация на сайт, SEO анализ. Повишете позициите си в Google с доказани SEO услуги."
        image="https://stanchev.vercel.app/images/og/og.jpg"
        author={{
          name: person.name,
          url: `${baseURL}/za-men`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured.display && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
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
                    style={{ marginLeft: "-0.75rem" }}
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
        <Flex fillWidth gap="24" mobileDirection="column">
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
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
