import { notFound } from "next/navigation";
import { CustomMDX, ScrollToHash } from "@/components";
import { Meta, Schema, AvatarGroup, Button, Column, Heading, HeadingNav, Icon, Row, Text, AccordionGroup, BarChart, Feedback } from "@once-ui-system/core";
import { baseURL, about, blog, person } from "@/resources";
import { formatDate } from "@/app/utils/formatDate";
import { getPosts } from "@/app/utils/utils";
import { Metadata } from 'next';

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
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  const posts = getPosts(["src", "app", "blog", "posts"])
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};
  
  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    keywords: post.metadata.keywords,
    alternates: {
      canonical: `${baseURL}/blog/${post.slug}`,
    },
openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      url: `${baseURL}/blog/${post.slug}`,
      siteName: post.metadata.title,
      images: [
        {
          url: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata.title,
      description: post.metadata.summary,
      images: [post.metadata.image || `/api/og/generate?title=${post.metadata.title}`],
    },
  }as any;
}

export default async function Blog({
  params
}: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  let post = getPosts(["src", "app", "blog", "posts"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Row fillWidth>
      <Row maxWidth={12} hide="m"/>
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
            image={post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`}
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
          <Button data-border="rounded" href="/blog" weight="default" variant="tertiary" size="s" prefixIcon="chevronLeft">
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
    <Column maxWidth={12} paddingLeft="40" fitHeight position="sticky" top="80" gap="16" hide="m">
      <Row
        gap="12"
        paddingLeft="2"
        vertical="center"
        onBackground="neutral-medium"
        textVariant="label-default-xs"
      >
        <Icon name="document" size="xs" />
        В тази статия
      </Row>
      <HeadingNav
  width={15}
  position="sticky"
  top="64"
  fitHeight
  className="custom-heading-nav"
/>
    </Column>
    </Row>
  );
}




