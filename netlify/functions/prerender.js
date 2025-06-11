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
  const rawPath = event.rawUrl.replace(/^https?:\/\/[^/]+/, '').split('?')[0];
  const path = decodeURIComponent(rawPath);

  const shouldServeBot = isBot(userAgent);
  const isAllowedPath = ALLOWED_PATHS.some((rule) =>
    rule instanceof RegExp ? rule.test(path) : rule === path
  );

  console.log(`[Prerender] Заявка от ${userAgent}`);
  console.log(`[Prerender] Path: ${path}`);
  console.log(`[Prerender] Is bot: ${shouldServeBot}, Is allowed path: ${isAllowedPath}`);

  if (!shouldServeBot || !isAllowedPath) {
    console.log('[Prerender] Заявката не е от бот или не е към разрешен път. Връщаме 404.');
    return {
      statusCode: 404,
      body: 'Not Found'
    };
  }

  const url = `https://stanchev.bg${path}`;
  console.log(`[Prerender] Стартираме Puppeteer за ${url}`);

  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      defaultViewport: chromium.defaultViewport
    });

    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    console.log('[Prerender] Страницата е заредена. Генерирам HTML.');

    const html = await page.content();
    await browser.close();

    console.log('[Prerender] Успешно завършено. Връщаме HTML.');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600'
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
