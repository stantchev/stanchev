import { Handler } from '@netlify/functions';
import { generateSitemap } from './sitemap';

export const handler: Handler = async () => {
  const sitemap = generateSitemap();
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
    body: sitemap,
  };
};
