const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');
const isBot = require('isbot');

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
  const userAgent = event.headers['user-agent'] || '';
  const path = event.rawUrl.replace(/^https?:\/\/[^/]+/, '').split('?')[0];

  const shouldServeBot = isBot(userAgent);
  const isAllowedPath = ALLOWED_PATHS.some((rule) =>
    rule instanceof RegExp ? rule.test(path) : rule === path
  );

  if (!shouldServeBot || !isAllowedPath) {
    return {
      statusCode: 404,
      body: 'Not Found'
    };
  }

  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    defaultViewport: chromium.defaultViewport
  });

  const page = await browser.newPage();
  const url = `https://stanchev.bg${path}`;

  await page.goto(url, {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  const html = await page.content();
  await browser.close();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    },
    body: html
  };
};
