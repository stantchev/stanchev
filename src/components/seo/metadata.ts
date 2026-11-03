import type { Metadata } from "next";
import { baseURL } from "@/resources";
import { getService, servicePath } from "@/resources/services";

const OG_IMAGE = `${baseURL}/images/og/og.jpg`;

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${baseURL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Stanchev Digital",
      locale: "bg_BG",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  };
}

export function serviceMetadata(slug: string): Metadata {
  const s = getService(slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return buildMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: servicePath(s),
    keywords: s.keywords,
  });
}
