import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
  imageUrl?: string;
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  type = 'website',
  imageUrl = 'https://raw.githubusercontent.com/stantchev/stanchev/main/koritsa.jpg',
  schema,
}) => {
  const baseUrl = 'https://stanchev.bg';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : baseUrl;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Language */}
      <html lang="en" />
      <link rel="alternate" hreflang="en" href={`${baseUrl}${currentUrl}`} />
      <link rel="alternate" hreflang="bg" href={`${baseUrl}${currentUrl}`} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;