import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = 'https://stanchev.bg/станчевseo.png',
  canonicalUrl,
  structuredData,
  noIndex = false,
}) => {
  const { pathname } = useLocation();
  const baseUrl = 'https://stanchev.bg';
  const fullCanonicalUrl = canonicalUrl || `${baseUrl}${pathname}`;
  const fullTitle = title.includes('Станчев') ? title : `${title} | Станчев SEO`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Станчев SEO" />
      <meta property="og:locale" content="bg_BG" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@StanchevSEO" />
      <meta name="twitter:creator" content="@StanchevSEO" />

      {/* Additional Meta Tags */}
      <meta name="author" content="Станчев" />
      <meta name="language" content="Bulgarian" />
      <meta name="geo.region" content="BG" />
      <meta name="geo.placename" content="София, България" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;