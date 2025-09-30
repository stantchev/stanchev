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
  Meta,
  Schema,
  Row,
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
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://stanchev.bg/za-men",
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
                  name: "Softuni Digital",
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

        {about.tableOfContent.display && (
          <Column
            left="0"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            position="fixed"
            paddingLeft="8"
            gap="32"
            s={{ hide: true }}
          >
            <TableOfContents structure={structure} about={about} />
          </Column>
        )}

        <Flex fillWidth className="flex-col md:flex-row" horizontal="center">
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

              {person.languages && person.languages.length > 0 && (
                <>
                  <Flex wrap gap="8">
                    {person.languages.map((language, index) => (
                      <Tag key={language} size="l">
                        {language}
                      </Tag>
                    ))}
                  </Flex>

                  {/* Сертификати */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, auto)",
                      gap: "12px",
                      justifyContent: "center",
                      marginTop: 16,
                    }}
                  >
                    <a
                      href="https://skillshop.credential.net/d830b358-fac9-4299-9028-783755d639b1#acc.S5yMU1dc"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        src="/images/GA-badge-80x80.png"
                        alt="Google Analytics Certified Badge"
                        width={80}
                        height={80}
                        style={{ display: "block" }}
                      />
                    </a>

                    <a
                      href="https://skillshop.credential.net/6636f0fe-fd86-4a18-b25b-27a219fca1c8#acc.zCBJHLMX"
                      rel="noreferrer nofollow"
                      target="_blank"
                    >
                      <img
                        src="/images/Google Ads AI-Powered Performance Certified badge.png"
                        alt="Google Ads AI-Powered Performance Certified"
                        width={80}
                        height={80}
                        style={{ display: "block" }}
                      />
                    </a>

                    <a
                      href="https://digital.softuni.bg/certificates/details/72195/759fe551"
                      rel="noreferrer nofollow"
                      target="_blank"
                    >
                      <img
                        src="/images/digital-small-logo-white.png"
                        alt="SoftUni SEO Digital Marketing Certificate"
                        width={80}
                        height={80}
                        style={{ display: "block" }}
                      />
                    </a>

                    <a
                      href="https://stanchev.bg/images/Web%20Cactus%20SEO%20Certificate.png"
                      rel="noreferrer nofollow"
                      target="_blank"
                    >
                      <img
                        src="/images/icon-cactus-80x80.png"
                        alt="Web Cactus Academy SEO Certificate"
                        width={80}
                        height={80}
                        style={{ display: "block" }}
                      />
                    </a>

                    <a
                      href="https://static.semrush.com/academy/certificates/dfbe013175/milen-stanchev_26.pdf"
                      rel="noreferrer nofollow"
                      target="_blank"
                    >
                      <img
                        src="/images/semrush-digital-maketing-ai-certification-80x80.png"
                        alt="AI-Powered Marketer Certificate"
                        width={80}
                        height={80}
                        style={{ display: "block" }}
                      />
                    </a>

                    <a
                      href="https://static.semrush.com/academy/certificates/c326ee55fe/milen-stanchev_25.pdf"
                      rel="noreferrer nofollow"
                      target="_blank"
                    >
                      <img
                        src="/images/semrush-digital-maketing-ai-certification-80x80.png"
                        alt="On-Page SEO Essentials with Semrush Certificate"
                        width={80}
                        height={80}
                        style={{ display: "block" }}
                      />
                    </a>
                  </div>
                </>
              )}
            </Column>
          )}

          {/* Дясна колона със съдържание */}
          <Column className={styles.blockAlign} flex={9} maxWidth={40}>
            {/* Intro */}
            <Column
              id={about.intro.title}
              fillWidth
              minHeight="160"
              vertical="center"
              marginBottom="32"
            >
              {about.calendar.display && (
                <Flex
                  fitWidth
                  border="brand-alpha-medium"
                  className={styles.blockAlign}
                  radius="full"
                  gap="8"
                  marginBottom="m"
                  vertical="center"
                >
                  <Icon paddingLeft="12" name="calendar" />
                  <Flex paddingX="8">Заяви консултация</Flex>
                  <IconButton
                    href={about.calendar.link}
                    data-border="rounded"
                    variant="secondary"
                    icon="chevronRight"
                  />
                </Flex>
              )}

              <Heading
                className={styles.textAlign}
                variant="display-strong-xl"
              >
                {person.name}
              </Heading>
              <Text className={styles.textAlign} variant="display-default-xs">
                {person.role}
              </Text>

              {social.length > 0 && (
                <Flex
                  className={styles.blockAlign}
                  paddingTop="20"
                  paddingBottom="8"
                  gap="8"
                  wrap
                  horizontal="center"
                  fitWidth
                  data-border="rounded"
                >
                  {social.map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Button
                            className="s-flex-hide styled-button"
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                          <IconButton
                            className="s-flex-show styled-button"
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </React.Fragment>
                      )
                  )}
                </Flex>
              )}
            </Column>

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

            {/* Work */}
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
                  {about.work.experiences.map((experience, expIdx) => (
                    <Column
                      key={`${experience.company}-${experience.role}-${expIdx}`}
                      fillWidth
                    >
                      <Flex
                        fillWidth
                        horizontal="between"
                        vertical="end"
                        marginBottom="4"
                      >
                        <Text id={experience.company} variant="heading-strong-l">
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
                        {experience.achievements.map(
                          (achievement: ReactNode, index: number) => (
                            <Text
                              as="li"
                              variant="body-default-m"
                              key={`${experience.company}-${index}`}
                            >
                              {achievement}
                            </Text>
                          )
                        )}
                      </Column>

                      {Array.isArray(experience.images) &&
                        experience.images.length > 0 && (
                          <Flex
                            fillWidth
                            paddingTop="m"
                            paddingLeft="40"
                            gap="12"
                            wrap
                          >
                            {(experience.images as ExperienceImage[]).map(
                              (image, idx) => (
                                <Flex
                                  key={idx}
                                  border="neutral-medium"
                                  radius="m"
                                >
                                  <Media
                                    enlarge
                                    radius="m"
                                    sizes={
                                      image.width
                                        ? image.width.toString()
                                        : undefined
                                    }
                                    alt={image.alt || ""}
                                    src={image.src}
                                  />
                                </Flex>
                              )
                            )}
                          </Flex>
                        )}
                    </Column>
                  ))}
                </Column>
              </>
            )}

            {/* Studies */}
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
                  {about.studies.institutions.map((institution, index) => (
                    <Flex
                      key={`${institution.name}-${index}`}
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
                        {index < about.studies.institutions.length - 1 && (
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
                        <Text id={institution.name} variant="heading-strong-l">
                          {institution.name}
                        </Text>
                        <Text>{institution.description}</Text>
                      </Column>
                    </Flex>
                  ))}
                </Column>
              </>
            )}

{/* Skills */}
{about.technical.display && (
  <Column gap="l" marginTop="32">
    <Heading
      as="h3"
      variant="display-strong-m"
      className={styles.textAlign}
    >
      {about.technical.title}
    </Heading>
    {about.technical.skills.map((skill, idx) => (
      <Column key={skill.title} fillWidth gap="4">
        <Text variant="heading-strong-l">{skill.title}</Text>
        <Text>{skill.description}</Text>
        {skill.tags && skill.tags.length > 0 && (
          <Flex gap="4" paddingTop="4" wrap>
            {skill.tags.map((tag, i) => (
              <Flex
                key={`${skill.title}-${tag.name}-${i}`}
                className={styles.toolItem}
                vertical="center"
                gap="2"
              >
                {tag.icon && (
                  <Icon
                    name={tag.icon}
                    size="s"
                    onBackground="brand-strong"
                  />
                )}
                <Text variant="body-default-s">{tag.name}</Text>
              </Flex>
            ))}
          </Flex>
        )}
      </Column>
    ))}
  </Column>
)}
  );
}

