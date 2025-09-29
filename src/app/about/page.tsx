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
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import React from "react";
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
  return (
    <>
      <Script
        id="about-me-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                name: "За Мен – Станчев SEO Консултант",
                description:
                  "Научете повече за моя път като SEO специалист, моята философия и как мога да помогна на вашия бизнес да расте онлайн. Фокусиран върху резултатите и прозрачността.",
                url: "https://stanchev.bg/za-men",
                image: {
                  "@type": "ImageObject",
                  url: "https://stanchev.bg/images/og/og.jpg",
                },
                author: {
                  "@type": "Person",
                  name: "Станчев",
                  url: "https://www.linkedin.com/in/stantcheff/",
                  image: "https://stanchev.bg/assets/avatar.jpg",
                },
                publisher: {
                  "@id": "https://stanchev.bg/#organization",
                },
              },
              {
                "@type": "Person",
                name: "Станчев",
                url: "https://stanchev.bg/za-men",
                image: "https://stanchev.bg/assets/avatar.jpg",
                alumniOf: {
                  "@type": "EducationalOrganization",
                  name: "Военна Академия 'Г.С.Раковски'",
                },
                knowsAbout: [
                  "SEO",
                  "Дигитален маркетинг",
                  "Уеб разработка",
                  "Предприемачество",
                  "Оптимизация на търсачки",
                ],
                jobTitle: "SEO Консултант и Разработчик",
                worksFor: {
                  "@id": "https://stanchev.bg/#organization",
                },
                sameAs: [
                  "https://www.linkedin.com/in/stantcheff/",
                  "https://github.com/stantchev/",
                  "https://dev.to/stanchev",
                ],
              },
              {
                "@type": ["Organization", "ProfessionalService"],
                "@id": "https://stanchev.bg/#organization",
                name: "Станчев SEO",
                url: "https://stanchev.bg/",
                logo: "https://stanchev.bg/images/og/og.jpg",
                email: "seo@stanchev.bg",
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
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  email: "seo@stanchev.bg",
                  areaServed: "BG",
                  availableLanguage: "bg",
                },
              },
            ],
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

        <Flex
          fillWidth
          direction={{ base: "column", m: "row" }}
          horizontal="center"
        >
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
              {person.languages.length > 0 && (
                <Flex wrap gap="8">
                  {person.languages.map((language) => (
                    <Tag key={language} size="l">
                      {language}
                    </Tag>
                  ))}
                </Flex>
              )}
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
