import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Поддържка на __dirname за ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Примерен масив от постове – замени с реалните
const posts = [
  {
    slug: 'kak-da-optimizirate-svoya-uebsayt-za-balgarskiya-pazar',
    publishedAt: '2023-10-15T10:00:00.000Z',
    status: 'published',
  },
];

// ГЕНЕРИРАНЕ НА sitemap.xml
function generateSitemap() {
  const baseUrl = 'https://stanchev.bg';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/услуги', priority: '0.9', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'daily' },
  { url: '/за-мен', priority: '0.7', changefreq: 'monthly' },
  { url: '/контакти', priority: '0.6', changefreq: 'monthly' },

  // Допълнителни секции от router-а
  { url: '/политика-за-поверителност', priority: '0.3', changefreq: 'yearly' },
  { url: '/общи-условия', priority: '0.3', changefreq: 'yearly' },
  { url: '/бисквитки', priority: '0.3', changefreq: 'yearly' },

  // Услуги (SEO подстраници)
  { url: '/услуги/консултация', priority: '0.6', changefreq: 'monthly' },
  { url: '/услуги/seo-одит', priority: '0.6', changefreq: 'monthly' },
  { url: '/услуги/стратегия', priority: '0.6', changefreq: 'monthly' },
  { url: '/услуги/on-page-оптимизация', priority: '0.6', changefreq: 'monthly' },
  { url: '/услуги/ключови-думи', priority: '0.6', changefreq: 'monthly' },
  { url: '/услуги/техническо-seo', priority: '0.6', changefreq: 'monthly' },
  { url: '/услуги/оптимизация-на-съдържание', priority: '0.6', changefreq: 'monthly' },
  { url: '/услуги/локално-seo', priority: '0.6', changefreq: 'monthly' },
  { url: '/услуги/структурирани-данни', priority: '0.6', changefreq: 'monthly' },
  { url: '/услуги/линк-билдинг', priority: '0.6', changefreq: 'monthly' },
  { url: '/услуги/seo-мониторинг', priority: '0.6', changefreq: 'monthly' },

  // Инструменти и ресурси
  { url: '/ресурси', priority: '0.5', changefreq: 'monthly' },
  { url: '/tools/meta-tag-generator', priority: '0.5', changefreq: 'monthly' },
  { url: '/tools/schema-generator', priority: '0.5', changefreq: 'monthly' }
];

  const publishedPosts = posts.filter(post => post.status === 'published');

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  staticPages.forEach(page => {
    xml += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`;
  });

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
}

// ГЕНЕРИРАНЕ НА robots.txt
function generateRobotsTxt() {
  const baseUrl = 'https://stanchev.bg';
  return `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml

Disallow: /admin/
Disallow: /вход
`;
}

// Създаваме public/ ако я няма
const outputDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

// Записваме файловете
fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), generateSitemap());
fs.writeFileSync(path.join(outputDir, 'robots.txt'), generateRobotsTxt());

console.log('✅ sitemap.xml и robots.txt успешно генерирани.');
