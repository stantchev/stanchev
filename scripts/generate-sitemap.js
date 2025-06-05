import fs from 'fs';
import path from 'path';
import { blogPosts } from '../src/pages/BlogPostPage.tsx';

const baseUrl = 'https://stanchev.bg';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/услуги', priority: '0.9', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'daily' },
  { url: '/за-мен', priority: '0.7', changefreq: 'monthly' },
  { url: '/ресурси', priority: '0.9', changefreq: 'weekly' },
  { url: '/контакти', priority: '0.6', changefreq: 'monthly' },
];

const generateSitemap = () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  staticPages.forEach(page => {
    xml += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`;
  });

  const publishedPosts = blogPosts.filter(p => p.status === 'published');
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

  xml += `\n</urlset>`;
  return xml;
};

const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml

Disallow: /admin/
Disallow: /вход
`;
};

// Създаване на папката public ако я няма
const outputDir = path.resolve('public');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), generateSitemap());
fs.writeFileSync(path.join(outputDir, 'robots.txt'), generateRobotsTxt());

console.log('✅ sitemap.xml и robots.txt са генерирани!');
