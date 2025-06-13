import express from 'express';
import { createServer as createViteServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import compression from 'compression';
import { shouldRedirect, transliterateCyrillicToLatin } from '../utils/transliteration.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  
  // Enable compression
  app.use(compression());
  
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });
  
  // Use Vite's middleware
  app.use(vite.middlewares);
  
  // Handle URL transliteration and redirects
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    
    try {
      // Check for redirects
      const redirectCheck = shouldRedirect(url);
      if (redirectCheck.redirect) {
        return res.redirect(301, redirectCheck.to);
      }
      
      // Load the server entry
      const { render } = await vite.ssrLoadModule('/src/server/entry-server.tsx');
      
      // Render the app
      const { html, helmetContext } = render(url);
      
      // Get helmet data
      const { helmet } = helmetContext;
      
      // Read the index.html template
      let template = await vite.transformIndexHtml(url, `
        <!DOCTYPE html>
        <html lang="bg">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            ${helmet ? helmet.title.toString() : '<title>Станчев SEO</title>'}
            ${helmet ? helmet.meta.toString() : ''}
            ${helmet ? helmet.link.toString() : ''}
            <link rel="icon" type="image/png" href="/станчевseo.png" />
            <link rel="preload" href="/fonts/notoserif-regular.ttf" as="font" type="font/ttf" crossorigin>
            <style>
              @font-face {
                font-family: 'NotoSerif';
                src: url('/fonts/notoserif-regular.ttf') format('truetype');
                font-display: swap;
                font-weight: normal;
                font-style: normal;
              }
              * { font-family: 'NotoSerif', serif; }
              body { margin: 0; padding: 0; background-color: #0a0a0f; color: #f3f4f6; }
            </style>
          </head>
          <body>
            <div id="root"><!--ssr-outlet--></div>
            <script type="module" src="/src/main.tsx"></script>
          </body>
        </html>
      `);
      
      // Replace the placeholder with the rendered HTML
      const finalHtml = template.replace('<!--ssr-outlet-->', html);
      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
}

createServer();