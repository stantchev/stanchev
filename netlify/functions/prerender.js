const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');
const rawIsBot = require('isbot');
const isBot = typeof rawIsBot === 'function' ? rawIsBot : rawIsBot.default;

const ALLOWED_PATHS = [
  '/',
  '/blog',
  /^\/blog\/.+/,
  '/услуги',
  '/за-мен',
  '/контакти',
  '/вход',
  '/политика-за-поверителност',
  '/общи-условия',
  '/бисквитки',
  '/услуги/консултация',
  '/услуги/seo-одит',
  '/услуги/стратегия',
  '/услуги/on-page-оптимизация',
  '/услуги/ключови-думи',
  '/услуги/техническо-seo',
  '/услуги/оптимизация-на-съдържание',
  '/услуги/локално-seo',
  '/услуги/структурирани-данни',
  '/услуги/линк-билдинг',
  '/услуги/seo-мониторинг',
  '/ресурси',
  '/tools/meta-tag-generator',
  '/tools/schema-generator'
];

exports.handler = async (event) => {
  console.log('[Prerender] Функцията е инициализирана');

  const userAgent = event.headers['user-agent'] || '';
  
  // Get the path from different possible sources
  let rawPath = '';
  if (event.rawUrl) {
    rawPath = event.rawUrl.replace(/^https?:\/\/[^/]+/, '').split('?')[0];
  } else if (event.path) {
    rawPath = event.path.split('?')[0];
  } else {
    rawPath = '/';
  }
  
  // Decode the URL properly to handle Cyrillic characters
  let path;
  try {
    path = decodeURIComponent(rawPath);
  } catch (e) {
    // If decoding fails, try to handle it manually
    path = rawPath.replace(/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8/g, '/услуги')
                  .replace(/%D0%B7%D0%B0-%D0%BC%D0%B5%D0%BD/g, '/за-мен')
                  .replace(/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B8/g, '/контакти')
                  .replace(/%D0%B2%D1%85%D0%BE%D0%B4/g, '/вход')
                  .replace(/%D1%80%D0%B5%D1%81%D1%83%D1%80%D1%81%D0%B8/g, '/ресурси');
  }

  // Check if this is a bot or social media crawler
  const shouldServeBot = isBot(userAgent) || 
    userAgent.includes('facebookexternalhit') ||
    userAgent.includes('Twitterbot') ||
    userAgent.includes('LinkedInBot') ||
    userAgent.includes('WhatsApp') ||
    userAgent.includes('Viber') ||
    userAgent.includes('Telegram') ||
    userAgent.includes('SkypeUriPreview') ||
    userAgent.includes('MessengerBot');

  const isAllowedPath = ALLOWED_PATHS.some((rule) =>
    rule instanceof RegExp ? rule.test(path) : rule === path
  );

  console.log(`[Prerender] Заявка от ${userAgent}`);
  console.log(`[Prerender] Raw path: ${rawPath}, Decoded path: ${path}`);
  console.log(`[Prerender] Is bot: ${shouldServeBot}, Is allowed path: ${isAllowedPath}`);

  if (!shouldServeBot || !isAllowedPath) {
    console.log('[Prerender] Заявката не е от бот или не е към разрешен път. Връщаме 404.');
    return {
      statusCode: 404,
      body: 'Not Found'
    };
  }

  // Construct the full URL for puppeteer
  const encodedPath = encodeURI(path);
  const url = `https://stanchev.netlify.app${encodedPath}`;
  console.log(`[Prerender] Стартираме Puppeteer за ${url}`);

  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      defaultViewport: chromium.defaultViewport
    });

    const page = await browser.newPage();
    
    // Set a longer timeout for complex pages
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 45000
    });

    console.log('[Prerender] Страницата е заредена. Почистваме дублирани <head> елементи.');

    // Clean up duplicate head elements and ensure proper OG tags
    await page.evaluate(() => {
      const keepAttrs = ['name', 'property', 'rel', 'type'];
      const seen = new Set();

      const tagSelector = 'meta[name], meta[property], link[rel], title, script[type="application/ld+json"]';
      document.head.querySelectorAll(tagSelector).forEach((el) => {
        const attr = keepAttrs.find((a) => el.hasAttribute(a));
        const key = `${el.tagName}:${attr ? el.getAttribute(attr) : el.textContent}`;

        if (seen.has(key)) {
          el.remove();
        } else {
          seen.add(key);
        }
      });

      // Ensure OG image is absolute URL
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        const imageUrl = ogImage.getAttribute('content');
        if (imageUrl && !imageUrl.startsWith('http')) {
          ogImage.setAttribute('content', `https://stanchev.bg${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`);
        }
      }

      // Ensure Twitter image is absolute URL
      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) {
        const imageUrl = twitterImage.getAttribute('content');
        if (imageUrl && !imageUrl.startsWith('http')) {
          twitterImage.setAttribute('content', `https://stanchev.bg${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`);
        }
      }
    });

    const html = await page.content();
    await browser.close();

    console.log('[Prerender] Успешно завършено. Връщаме HTML.');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Prerendered': 'true'
      },
      body: html
    };
  } catch (error) {
    console.error('[Prerender] ГРЕШКА при рендиране:', error);
    return {
      statusCode: 500,
      body: 'Server error during prerendering.'
    };
  }
};
