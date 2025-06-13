import express from 'express';
import compression from 'compression';
import sirv from 'sirv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { shouldRedirect } from '../utils/transliteration.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();
  
  // Enable compression
  app.use(compression());
  
  // Serve static files
  app.use(sirv(resolve(__dirname, '../../dist/client'), {
    gzip: true,
    brotli: true
  }));
  
  // Load the built server bundle
  const { render } = await import('./dist/server/entry-server.js');
  
  // Read the built template
  const template = readFileSync(resolve(__dirname, '../../dist/client/index.html'), 'utf-8');
  
  // Handle all routes
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    
    try {
      // Check for redirects
      const redirectCheck = shouldRedirect(url);
      if (redirectCheck.redirect) {
        return res.redirect(301, redirectCheck.to);
      }
      
      // Render the app
      const { html, helmetContext } = render(url);
      
      // Get helmet data
      const { helmet } = helmetContext;
      
      // Inject the rendered HTML and helmet data
      let finalHtml = template
        .replace('<!--ssr-outlet-->', html)
        .replace('<title>Станчев SEO</title>', helmet ? helmet.title.toString() : '<title>Станчев SEO</title>');
      
      // Add meta tags if available
      if (helmet) {
        finalHtml = finalHtml.replace('</head>', `${helmet.meta.toString()}${helmet.link.toString()}</head>`);
      }
      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    } catch (e) {
      console.error('SSR Error:', e);
      res.status(500).end('Internal Server Error');
    }
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🚀 Production server running at http://localhost:${port}`);
  });
}

createServer();