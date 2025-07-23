import { baseURL } from "@/resources";

export default function llms() {
  return {
    rules: [
      // ✅ Позволени AI ботове
      {
        userAgent: "Google-Extended",
        allow: ["/uslugi/", "/blog/"],
      },
      {
        userAgent: "OpenAI",
        allow: ["/uslugi/", "/blog/"],
        disallow: "/",
      },
      {
        userAgent: "Meta",
        allow: ["/uslugi/", "/blog/"],
        disallow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: ["/uslugi/", "/blog/"],
        disallow: "/",
      },

      // ❌ Блокирани
      {
        userAgent: "Anthropic",
        disallow: "/",
      },
      {
        userAgent: "Perplexity",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },

      // ❌ Всички останали
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`, // не е задължително, но някои AI го четат
    sitemap: `${baseURL}/llms.txt,`
  };
}
