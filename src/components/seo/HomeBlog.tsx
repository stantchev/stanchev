import { Avatar, Button, Card, Column, Grid, Heading, Media, Row, Tag, Text } from "@once-ui-system/core";
import { getPosts } from "@/utils/utils";
import { person } from "@/resources";

const pillarSlugs = [
  "kakvo-e-seo",
  "generative-engine-optimization-geo",
  "google-ai-optimization-guide-kakvo-ima-znachenie-2026",
  "headless-wordpress-react-nextjs-frontend-seo",
  "kakvo-e-seo-konsultant",
  "seo-cena-2025",
];

const dateFormat = new Intl.DateTimeFormat("bg-BG", { day: "numeric", month: "short", year: "numeric" });

export function HomeBlog({ count = 3 }: { count?: number }) {
  const posts = getPosts(["src", "app", "blog", "posts"])
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .slice(0, count);

  const pillars = pillarSlugs
    .map((slug) => getPosts(["src", "app", "blog", "posts"]).find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (posts.length === 0) return null;
  const [featured, ...rest] = posts;
  const when = (iso: string) => dateFormat.format(new Date(iso));
  const tagOf = (t: unknown) => (typeof t === "string" ? t : "");
  const excerpt = (text: string, max = 150) => (text.length > max ? `${text.slice(0, max).replace(/\s+\S*$/, "")}…` : text);

  return (
    <Column fillWidth gap="24">
      <Column gap="8">
        <Text variant="label-default-s" onBackground="brand-medium">
          Блог
        </Text>
        <Heading as="h2" variant="display-strong-xs">
          Последни публикации
        </Heading>
        <Text onBackground="neutral-medium" variant="body-default-l">
          Бележки за SEO, GEO и уеб технологиите.
        </Text>
      </Column>

      <Card href={`/blog/${featured.slug}`} radius="l" border="transparent" background="transparent" fillWidth>
        <Row fillWidth aspectRatio="16/7" m={{ aspectRatio: "16/9" }} s={{ aspectRatio: "4/5" }} radius="l" overflow="hidden">
          {featured.metadata.image && (
            <Media stretch sizes="(max-width: 768px) 100vw, 1024px" src={featured.metadata.image} alt={`Корица: ${featured.metadata.title}`} />
          )}
          <Column fill position="absolute" vertical="end" padding="32" s={{ padding: "20" }} gap="12" background="overlay">
            {tagOf(featured.metadata.tag) && <Tag size="s">{tagOf(featured.metadata.tag)}</Tag>}
            <Heading as="h3" variant="display-strong-xs" onBackground="neutral-strong">
              {featured.metadata.title}
            </Heading>
            <Text onBackground="neutral-weak" variant="body-default-m" wrap="balance">
              {excerpt(featured.metadata.summary)}
            </Text>
            <Row gap="8" vertical="center" paddingTop="4">
              <Avatar src={person.avatar} size="s" />
              <Text variant="label-default-s" onBackground="neutral-weak">
                {person.name} · {when(featured.metadata.publishedAt)}
              </Text>
            </Row>
          </Column>
        </Row>
      </Card>

      <Grid fillWidth columns={2} s={{ columns: 1 }} gap="16">
        {rest.map((post) => (
          <Card key={post.slug} href={`/blog/${post.slug}`} radius="l" border="transparent" background="transparent" direction="column" fillWidth>
            {post.metadata.image && (
              <Media
                sizes="(max-width: 768px) 100vw, 480px"
                border
                cursor="interactive"
                radius="l"
                src={post.metadata.image}
                alt={`Миниатюра: ${post.metadata.title}`}
                aspectRatio="16 / 9"
              />
            )}
            <Column paddingTop="16" gap="12" fillWidth>
              {tagOf(post.metadata.tag) && (
                <Text variant="label-strong-s" onBackground="neutral-weak">
                  {tagOf(post.metadata.tag)}
                </Text>
              )}
              <Heading as="h3" variant="heading-strong-m">
                {post.metadata.title}
              </Heading>
              <Text onBackground="neutral-weak" variant="body-default-s" wrap="balance">
                {excerpt(post.metadata.summary)}
              </Text>
              <Row gap="8" vertical="center" paddingTop="4">
                <Avatar src={person.avatar} size="s" />
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {person.name} · {when(post.metadata.publishedAt)}
                </Text>
              </Row>
            </Column>
          </Card>
        ))}
      </Grid>

      <Column gap="8">
        <Text variant="label-default-s" onBackground="neutral-weak">
          Основни ръководства
        </Text>
        <Row gap="8" wrap>
          {pillars.map((p) => (
            <Button key={p.slug} href={`/blog/${p.slug}`} variant="tertiary" size="s">
              {p.metadata.title}
            </Button>
          ))}
        </Row>
      </Column>

      <Row>
        <Button href="/blog" variant="secondary" arrowIcon>
          Към блога
        </Button>
      </Row>
    </Column>
  );
}
