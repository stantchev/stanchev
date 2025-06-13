import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';
import { AuthProvider } from '../context/AuthContext';

export function render(url: string, context: any = {}) {
  const helmetContext = {};
  
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url} context={context}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </StaticRouter>
    </HelmetProvider>
  );
  
  return { html, helmetContext };
}