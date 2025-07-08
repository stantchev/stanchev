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
  Schema
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import type { ReactNode } from "react";

type ExperienceImage = {
  src: string;
  alt?: string;
  width?: number;
};

export async function generateMetadata() {
  return {
    title: 'За мен | Станчев SEO',
    description: 'Кой стои зад проекта? Разгледай как започнах с SEO, какво ме движи и защо работя със страст по всеки сайт. Без клишета – само истина.',
    keywords: 'Кой е Станчев SEO?, seo консултант, seo експерт, seo оптимизатор, seo специалист, seo консултация, фирма за seo, seo услуги, seo анализ сайта, seo стратегия, сео оптимизатор',
	   alternates: {
    canonical: `${baseURL}/za-men`,
  },
	openGraph: {
      title: 'За мен | Станчев SEO',
      description: 'Кой стои зад проекта? Разгледай как започнах с SEO, какво ме движи и защо работя със страст по всеки сайт. Без клишета – само истина.',
      url: `${baseURL}/za-men`,
      siteName: 'За мен | Станчев SEO',
      images: [
        {
          url: `https://stanchev.vercel.app/images/og/og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'За мен | Станчев SEO',
      description: 'Кой стои зад проекта? Разгледай как започнах с SEO, какво ме движи и защо работя със страст по всеки сайт. Без клишета – само истина.',
      images: [`https://stanchev.vercel.app/images/og/og.jpg`],
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
    <Column 
      maxWidth="m"
    >
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
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
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
            <Avatar 
              src={person.avatar} 
              size="xl"
            />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              <Text>{person.location}</Text>
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag 
                    key={language} 
                    size="l"
                  >
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
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
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
            >
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
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, expIdx) => (
                  <Column key={`${experience.company}-${experience.role}-${expIdx}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
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
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {Array.isArray(experience.images) && experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {(experience.images as ExperienceImage[]).map((image, idx) => (
                          <Flex
                            key={idx}
                            border="neutral-medium"
                            radius="m"
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width ? image.width.toString() : undefined}
                              alt={image.alt || ''}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text>
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <Column gap="l" marginTop="32">
              <Heading as="h3" variant="display-strong-m" className={styles.textAlign}>
                {about.technical.title}
              </Heading>
              {about.technical.skills.map((skill, idx) => (
                <Column key={skill.title} fillWidth gap="4">
                  <Text variant="heading-strong-l">{skill.title}</Text>
                  <Text>{skill.description}</Text>
                  <Flex gap="4" paddingTop="4" wrap>
                    {skill.tools.map((tool, i) => (
                      <Flex key={tool} className={styles.toolItem} vertical="center" gap="2">
                        <Icon name="check" size="s" onBackground="brand-strong" />
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
  );
}
