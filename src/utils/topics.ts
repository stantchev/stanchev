export function topicOf(tag: unknown): string {
  const t = (Array.isArray(tag) ? tag.join(" ") : String(tag ?? "")).toLowerCase();
  if (/кибер|cyber|outage|инфраструктура/.test(t)) return "cyber";
  if (/seo|линк|link|aio|e-e-a-t|маркетинг|local/.test(t)) return "seo";
  if (/next|wordpress|react|shopify|уеб|web/.test(t)) return "web";
  if (/\bai\b|ai /.test(t)) return "ai";
  return "seo";
}
