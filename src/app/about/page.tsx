import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Schema,
  Accordion,
  AccordionItem
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import type { ReactNode } from "react";
import Script from "next/script";

type ExperienceImage = {
  src: string;
  alt?: string;
  width?: number;
};

export async function generateMetadata() {
  return {
    title: "За мен | Станчев SEO",
    description:
      "Кой стои зад проекта? Разгледай как започнах с SEO, какво ме движи и защо работя със страст по всеки сайт. Без клишета – само истина.",
    keywords:
      "Кой е Станчев SEO?, seo консултант, seo експерт, seo оптимизатор, seo специалист, seo консултация, фирма за seo, seo услуги, seo анализ сайта, seo стратегия, сео оптимизатор",
    alternates: {
      canonical: `${baseURL}/za-men`,
    },
    openGraph: {
      title: "За мен | Станчев SEO",
      description:
        "Кой стои зад проекта? Разгледай как започнах с SEO, какво ме движи и защо работя със страст по всеки сайт. Без клишета – само истина.",
      url: `${baseURL}/za-men`,
      siteName: "За мен | Станчев SEO",
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
      title: "За мен | Станчев SEO",
      description:
        "Кой стои зад проекта? Разгледай как започнах с SEO, какво ме движи и защо работя със страст по всеки сайт. Без клишета – само истина.",
      images: [`https://stanchev.bg/images/og/og.jpg`],
    },
  };
}

export default function ZaMen() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <>
      <Script
        id="about-me-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            name: "За Мен – Станчев SEO Консултант",
            description:
              "Научете повече за моя път като SEO специалист, моята философия и как мога да помогна на вашия бизнес да расте онлайн. Фокусиран върху резултатите и прозрачността.",
            url: "https://stanchev.bg/za-men",
            image: {
              "@type": "ImageObject",
              url: "https://stanchev.bg/images/og/og.jpg",
            },
          }),
        }}
      />

      <Column maxWidth="m">
        <Schema
          as="webPage"
          baseURL={baseURL}
          title={about.title}
          description={about.description}
          path="/za-men"
          image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}/za-men`,
            image: `${baseURL}${person.avatar}`,
          }}
        />

        {/* Desktop ToC */}
        {about.tableOfContent.display && (
          <Column
            left="0"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            position="fixed"
            paddingLeft="8"
            gap="32"
            hide={{ s: true }}
          >
            <TableOfContents structure={structure} about={about} />
          </Column>
        )}

        {/* Mobile ToC */}
        {about.tableOfContent.display && (
          <Column
            fillWidth
            padding="m"
            gap="m"
            hide={{ m: true, l: true, xl: true }}
          >
            <Accordion>
              <AccordionItem label="Съдържание">
                <TableOfContents structure={structure} about={about} />
              </AccordionItem>
            </Accordion>
          </Column>
        )}

        <Flex fillWidth mobileDirection="column" horizontal="center">
          {about.avatar.display && (
            <Column
              className={styles.avatar}
              position="sticky"
              minWidth="160"
              paddingX="l"
              paddingBottom="xl"
              gap="m"
              flex={3}
              horizontal="center"
            >
              <Avatar src={person.avatar} size="xl" />
              <Flex gap="8" vertical="center">
                <Icon onBackground="accent-weak" name="globe" />
                <Text>{person.location}</Text>
              </Flex>
              <Flex wrap gap="8">
                {person.languages.map((language) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            </Column>
          )}

          <Column className={styles.blockAlign} flex={9} maxWidth={40}>
            <Heading variant="display-strong-xl">{person.name}</Heading>
            <Text variant="display-default-xs">{person.role}</Text>

            {about.intro.display && (
              <Column
                textVariant="body-default-l"
                fillWidth
                gap="m"
                marginBottom="xl"
              >
                {about.intro.description}
              </Column>
            )}

            {about.work.display && (
              <>
                <Heading
                  as="h2"
                  id={about.work.title}
                  variant="display-strong-s"
                  marginBottom="m"
                >
                  {about.work.title}
                </Heading>
                <Column fillWidth gap="l" marginBottom="40">
                  {about.work.experiences.map((experience, idx) => (
                    <Column key={idx} fillWidth>
                      <Flex
                        fillWidth
                        horizontal="space-between"
                        vertical="end"
                        marginBottom="4"
                      >
                        <Text variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text variant="heading-default-xs">
                          {experience.timeframe}
                        </Text>
                      </Flex>
                      <Text variant="body-default-s" marginBottom="m">
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="16">
                        {experience.achievements.map((achievement, i) => (
                          <Text as="li" key={i} variant="body-default-m">
                            {achievement}
                          </Text>
                        ))}
                      </Column>
                    </Column>
                  ))}
                </Column>
              </>
            )}

            {about.studies.display && (
              <>
                <Heading
                  as="h2"
                  id={about.studies.title}
                  variant="display-strong-s"
                  marginBottom="m"
                >
                  {about.studies.title}
                </Heading>
                <Column fillWidth gap="l" marginBottom="40">
                  {about.studies.institutions.map((institution, i) => (
                    <Flex
                      key={i}
                      gap="16"
                      vertical="start"
                      horizontal="start"
                    >
                      <Column style={{ alignItems: "center", minWidth: 32 }}>
                        <Icon
                          name="checkCircle"
                          size="l"
                          onBackground="brand-strong"
                        />
                        {i < about.studies.institutions.length - 1 && (
                          <div
                            style={{
                              width: 2,
                              height: 40,
                              background: "var(--neutral-alpha-medium)",
                              margin: "0 auto",
                            }}
                          />
                        )}
                      </Column>
                      <Column gap="4">
                        <Text variant="heading-strong-l">
                          {institution.name}
                        </Text>
                        <Text>{institution.description}</Text>
                      </Column>
                    </Flex>
                  ))}
                </Column>
              </>
            )}

            {about.technical.display && (
              <Column gap="l" marginTop="32">
                <Heading as="h3" variant="display-strong-m">
                  {about.technical.title}
                </Heading>
                {about.technical.skills.map((skill, idx) => (
                  <Column key={idx} fillWidth gap="4">
                    <Text variant="heading-strong-l">{skill.title}</Text>
                    <Text>{skill.description}</Text>
                    <Flex gap="4" paddingTop="4" wrap>
                      {skill.tools.map((tool, i) => (
                        <Flex key={i} vertical="center" gap="2">
                          <Icon
                            name="check"
                            size="s"
                            onBackground="brand-strong"
                          />
                          <Text variant="body-default-s">{tool}</Text>
                        </Flex>
                      ))}
                    </Flex>
                  </Column>
                ))}
              </Column>
            )}
          </Column>
        </Flex>
      </Column>
    </>
  );
}
