import { notFound } from "next/navigation";
import { CustomMDX, ScrollToHash } from "@/components";
import {
  Schema,
  AvatarGroup,
  Button,
  Column,
  Heading,
  HeadingNav,
  Icon,
  Row,
  Text,
} from "@once-ui-system/core";
import { baseURL, about, blog, person } from "@/resources";
import { formatDate } from "@/app/utils/formatDate";
import { getPosts } from "@/app/utils/utils";
import { Metadata } from "next";
import Head from "next/head";

// ───────────────────────────────────────────
// Типове за blog постове (.mdx мета)
// ───────────────────────────────────────────
type BlogPostMetadata = {
  title: string;
  summary: string;
  publishedAt?: string;
  image?: string;
  keywords?: string[];
  author?: string;
  team?: { avatar: string; name?: string }[];
};

type BlogPost = {
  slug: string;
  content: string;
  metadata: BlogPostMetadata;
};

// ───────────────────────────────────────────
// Генериране на параметри за статични маршрути
// ───────────────────────────────────────────
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts: BlogPost[] = getPosts(["src", "app", "blog", "posts"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// ───────────────────────────────────────────
// SEO мета за всеки пост (вкл. keywords)
// ───────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  const posts = getPosts(["src", "app", "blog", "posts"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  const title = post.metadata.title;
  const description = post.metadata.summary;
  const image = post.metadata.image || `/api/og/generate?title=${encodeURIComponent(title)}`;
  const url = `${baseURL}${blog.path}/${post.slug}`;
  const keywords = post.metadata.keywords?.join(", ") || "";

  return {
    title,
    description,
    keywords: post.metadata.keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
// ───────────────────────────────────────────
// Рендер на Blog Post страницата
// ───────────────────────────────────────────
export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts: BlogPost[] = getPosts(["src", "app", "blog", "posts"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
  <>
    <Head>
      <meta name="keywords" content={post.metadata.keywords?.join(", ")} />
    </Head>
    
  return (
    <Row fillWidth>
      <Row maxWidth={12} hide="m" />
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="xs" gap="l">
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
          <Heading variant="display-strong-s">{post.metadata.title}</Heading>
          <Row gap="12" vertical="center">
            {avatars.length > 0 && <AvatarGroup size="s" avatars={avatars} />}
            <Text variant="body-default-s" onBackground="neutral-weak">
              {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
            </Text>
          </Row>
          <Column as="article" fillWidth>
            <CustomMDX source={post.content} />
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
        hide="m"
      >
        <Row
          gap="20"
          paddingLeft="2"
          vertical="center"
          onBackground="neutral-medium"
          textVariant="label-default-s"
        >
          <Icon name="document" size="xs" />
          В тази статия
        </Row>
        <HeadingNav fitHeight />
      </Column>
    </Row>
  );
}
