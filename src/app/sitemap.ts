import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";
import { services, servicePath } from "@/resources/services";

export default async function sitemap() {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.updatedAt || post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: `${baseURL}/seo-proekti/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig]
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route === "/" ? "" : route}`,
  }));

  const extraPaths = [
    "/seo-konsultant",
    "/blog/headless-wordpress-react-nextjs-frontend-seo",
    ...services.map((s) => servicePath(s)),
  ];
  const extraRoutes = extraPaths.map((route) => ({
    url: `${baseURL}${route}`,
  }));

  const seen = new Set<string>();
  return [...routes, ...blogs, ...works, ...extraRoutes].filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
