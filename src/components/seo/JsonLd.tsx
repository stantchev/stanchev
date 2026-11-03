import { protectJson } from "@/lib/contact";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = protectJson(JSON.stringify(Array.isArray(data) ? data : data)).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
