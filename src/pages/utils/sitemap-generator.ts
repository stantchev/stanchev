import { useBlogStore } from "../../store/blogStore";

/**
 * Generates a dynamic sitemap XML string
 * This function would typically be called from a server route or build script
 */
export const generateSitemap = () => {
  const { posts } = useBlogStore.getState();
  const publishedPosts = posts.filter(post => post.status === 'published');
  
  const baseUrl = 'https://stanchev-seo.bg';
  
  // Static pages
  const staticPages = [
    {
      url: '/',
      priority: '1.0',
      changefreq: 'daily',
    },
    {
      url: '/услуги',
      priority: '0.9',
      changefreq: 'weekly',
    },
    {
      url: '/blog',
      priority: '0.8',
      changefreq: 'daily',
    },
    {
      url: '/за-мен',
      priority: '0.7',
      changefreq: 'monthly',
    },
    {
      url: '/контакти',
      priority: '0.6',
      changefreq: 'monthly',
    },
  ];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  // Add static pages
  staticPages.forEach(page => {
    xml += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`;
  });
  
  // Add blog posts
  publishedPosts.forEach(post => {
    const lastmod = new Date(post.publishedAt).toISOString().split('T')[0];
    
    xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
    <lastmod>${lastmod}</lastmod>
  </url>`;
  });
  
  xml += `
</urlset>`;
  
  return xml;
};

/**
 * Creates a robots.txt file content
 */
export const generateRobotsTxt = () => {
  const baseUrl = 'https://stanchev-seo.bg';
  
  return `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin pages
Disallow: /admin/
Disallow: /вход
`;
};