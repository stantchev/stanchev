import { notFound } from "next/navigation";
import { CustomMDX, ScrollToHash } from "@/components";
import {
  Meta,
  Schema,
  Column,
  Heading,
  HeadingNav,
  Icon,
  Row,
  Text,
  SmartLink,
  Avatar,
  Media,
  Line,
  Button,
  AccordionGroup,
  BarChart,
  Feedback,
  AvatarGroup,
  BlockQuote,
  LineBarChart,
} from "@once-ui-system/core";
import { baseURL, about, blog, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import { Metadata } from "next";
import React from "react";
import { Posts } from "@/components/blog/Posts";
import { ShareSection } from "@/components/blog/ShareSection";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "blog", "posts"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  const canonicalURL = `${baseURL}${blog.path}/${post.slug}`;
  
  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    keywords: post.metadata.keywords?.join(", ") || "",
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      url: canonicalURL,
      siteName: "Станчев SEO",
      images: [
        {
          url: post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`,
          width: 1200,
          height: 630,
          alt: post.metadata.title,
        },
      ],
      locale: "bg_BG",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.summary,
      images: [post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`],
    },
    alternates: {
      canonical: canonicalURL,
    },
    other: {
      "article:published_time": post.metadata.publishedAt,
      "article:author": "Станчев",
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts(["src", "app", "blog", "posts"]).find(
    (post) => post.slug === slugPath
  );

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Row fillWidth>
      <Row maxWidth={12} m={{ hide: true }} />
      <Row fillWidth horizontal="center">
        <Column
          as="section"
          maxWidth="m"
          horizontal="center"
          gap="l"
          paddingTop="24"
        >
          <Schema
            as="blogPosting"
            baseURL={baseURL}
            path={`${blog.path}/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.summary}
            datePublished={post.metadata.publishedAt}
            dateModified={post.metadata.publishedAt}
            image={
              post.metadata.image ||
              `/api/og/generate?title=${encodeURIComponent(
                post.metadata.title
              )}`
            }
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />

          <Button
            data-border="rounded"
            href="/blog"
            weight="default"
            variant="tertiary"
            size="s"
            prefixIcon="chevronLeft"
          >
            Към блога
          </Button>

          <Column maxWidth="s" gap="16" horizontal="center" align="center">
            <SmartLink href="/blog">
              <Text variant="label-strong-m">Блог</Text>
            </SmartLink>
            <Text
              variant="body-default-xs"
              onBackground="neutral-weak"
              marginBottom="12"
            >
              {post.metadata.publishedAt &&
                formatDate(post.metadata.publishedAt)}
            </Text>
            <Heading variant="display-strong-m">
              {post.metadata.title}
            </Heading>
          </Column>

          <Row marginBottom="32" horizontal="center">
            <Row gap="16" vertical="center">
              <Avatar size="s" src={person.avatar} />
              <Text variant="label-default-m" onBackground="brand-weak">
                {person.name}
              </Text>
              {avatars.length > 0 && (
                <AvatarGroup size="s" avatars={avatars} />
              )}
            </Row>
          </Row>

          {/* Оставяме само еднократно визуално рендериране на снимката */}
          {post.metadata.image && (
            <Media
              src={post.metadata.image}
              alt={post.metadata.title}
              aspectRatio="16/9"
              priority
              sizes="(min-width: 768px) 100vw, 768px"
              border="neutral-alpha-weak"
              radius="l"
              marginTop="12"
              marginBottom="8"
            />
          )}

          <Column as="article" maxWidth="s">
            <CustomMDX source={post.content} />
          </Column>

          <ShareSection
            title={post.metadata.title}
            url={`${baseURL}${blog.path}/${post.slug}`}
          />

          <Column fillWidth gap="40" horizontal="center" marginTop="40">
            <Line maxWidth="40" />
            <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
              Последни публикации
            </Heading>
            <Posts
              exclude={[post.slug]}
              range={[1, 2]}
              columns="2"
              thumbnail
              direction="column"
            />
          </Column>

          <ScrollToHash />
        </Column>
      </Row>

      <Column
        maxWidth={12}
        paddingLeft="40"
        fitHeight
        position="sticky"
        top="80"
        gap="16"
        m={{ hide: true }}
      >
        <Row
          gap="12"
          paddingLeft="2"
          vertical="center"
          onBackground="neutral-medium"
          textVariant="label-default-s"
        >
          <Icon name="document" size="xs" />
          На тази страница
        </Row>
        <HeadingNav fitHeight />
      </Column>
    </Row>
  );
}



