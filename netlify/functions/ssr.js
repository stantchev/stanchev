const { render } = require('../../dist/server/entry-server.js');
const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(
  path.resolve(__dirname, '../../dist/client/index.html'),
  'utf-8'
);

exports.handler = async (event) => {
  const url = event.path;
  
  try {
    const { html, helmetContext } = render(url);
    const { helmet } = helmetContext;
    
    let finalHtml = template
      .replace('<!--ssr-outlet-->', html)
      .replace('<title>Станчев SEO</title>', helmet ? helmet.title.toString() : '<title>Станчев SEO</title>');
    
    if (helmet) {
      finalHtml = finalHtml.replace('</head>', `${helmet.meta.toString()}${helmet.link.toString()}</head>`);
    }
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
      body: finalHtml,
    };
  } catch (error) {
    console.error('SSR Error:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};