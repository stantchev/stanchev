import { Grid } from "@once-ui-system/core";
import { getPosts } from "@/utils/utils";
import { topicOf } from "@/utils/topics";
import Post from "./Post";

export function RelatedPosts({ slug, limit = 4 }: { slug: string; limit?: number }) {
  const all = getPosts(["src", "app", "blog", "posts"]).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );
  const current = all.find((p) => p.slug === slug);
  if (!current) return null;

  const topic = topicOf(current.metadata.tag);
  const ring = all.filter((p) => topicOf(p.metadata.tag) === topic);
  const at = ring.findIndex((p) => p.slug === slug);
  const picked: typeof all = [];
  for (let i = 1; i < ring.length && picked.length < limit; i++) picked.push(ring[(at + i) % ring.length]);

  if (picked.length < limit) {
    const keywords = new Set((current.metadata.keywords || []).map((k: string) => k.toLowerCase()));
    const rest = all
      .filter((p) => p.slug !== slug && !picked.includes(p))
      .map((p) => ({ p, score: (p.metadata.keywords || []).filter((k: string) => keywords.has(k.toLowerCase())).length }))
      .sort((a, b) => b.score - a.score);
    for (const { p } of rest) {
      if (picked.length >= limit) break;
      picked.push(p);
    }
  }

  return (
    <Grid columns="2" s={{ columns: 1 }} fillWidth gap="16" marginBottom="40">
      {picked.map((post) => (
        <Post key={post.slug} post={post} thumbnail={false} />
      ))}
    </Grid>
  );
}
