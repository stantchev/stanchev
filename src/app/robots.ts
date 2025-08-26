import { baseURL } from "@/resources";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}

