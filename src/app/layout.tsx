// app/layout.tsx

import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";
import {
  Background,
  Column,
  Flex,
  opacity,
  SpacingToken,
} from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers } from "@/components";
import {
  baseURL,
  effects,
  fonts,
  style,
  dataStyle,
  home,
} from "@/resources";
import Script from "next/script";
import { Metadata } from "next";

// ───────────────────────────────────────────────────────────
// 1. Метаданни – Всичко тук ще бъде инжектирано в <head> от Next.js на сървъра
// ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "SEO Консултант България | Станчев SEO - Професионални SEO Услуги",
  description: "Професионален SEO консултант в България. SEO оптимизация, линк билдинг стратегия, оптимизация на сайт, SEO анализ. Повишете позициите си в Google с доказани SEO услуги.",
  keywords: [
    // ... всички твои ключови думи тук
    "seo консултант",
    "seo фирми",
    "линк билдинг стратегия",
    // ...
  ],
  metadataBase: new URL(baseURL), // Това е важно за абсолютни URL адреси
  authors: [{ name: "Станчев", url: baseURL }],
  creator: "Станчев SEO",
  publisher: "Станчев SEO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: baseURL,
    siteName: "Станчев SEO - Професионални SEO Услуги България",
    title: "SEO Консултант България | Станчев SEO - Професионални SEO Услуги",
    description: "Професионален SEO консултант в България. SEO оптимизация, линк билдинг стратегия, оптимизация на сайт, SEO анализ. Повишете позициите си в Google с доказани SEO услуги.",
    images: [
      {
        url: "https://stanchev.vercel.app/images/og/og.jpg",
        width: 1200,
        height: 630,
        alt: "Станчев SEO - Професионални SEO услуги България",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@stanchev_seo",
    creator: "@stanchev_seo",
    title: "SEO Консултант България | Станчев SEO - Професионални SEO Услуги",
    description: "Професионален SEO консултант в България. SEO оптимизация, линк билдинг стратегия, оптимизация на сайт, SEO анализ. Повишете позициите си в Google с доказани SEO услуги.",
    images: ["https://stanchev.vercel.app/images/og/og.jpg"],
  },
  alternates: {
    canonical: baseURL,
    // Други алтернативи, ако имаш:
    // languages: {
    //   'en-US': 'https://example.com/en-US',
    // },
  },
  verification: {
    google: "your-google-verification-code", // Добави реалния код
  },
  category: "SEO Services",
  // Директно добавяне на link и meta тагове, които не са част от стандартните
  // properties, но искаш да са в <head>.
  // Трябва да са в 'other' или да се конвертират към съвместими формати.
  // *Важно: Next.js ще добави default <meta> тагове от <metadata> обекта.*
  // *Не е нужно да добавяш description, title, keywords отново тук.*
  // *За custom meta тагове, които не са директноSUPPORTED от Metadata типа, може да се наложи:*
  // other: {
  //   'format-detection': 'telephone=no', // Пример, може да не е нужно
  //   'geo.region': 'BG',
  //   'geo.placename': 'София, България',
  //   'ICBM': '42.6977, 23.3219',
  //   'geo.position': '42.6977;23.3219',
  //   'language': 'Bulgarian',
  //   'distribution': 'global',
  //   'rating': 'general',
  //   'revisit-after': '7 days',
  //   'business:contact_data:locality': 'София',
  //   'business:contact_data:region': 'София-град',
  //   'business:contact_data:country_name': 'България',
  //   'business:contact_data:email': 'seo@stanchev.bg',
  //   'business:contact_data:website': 'https://stanchev.vercel.app',
  // },
  // icon: "/favicon.ico", // За favicon
  // appleWebApp: {
  //   capable: true,
  //   startupImage: '/images/avatar.jpg', // Може да се използва за apple-touch-icon
  // },
  // themeColor: "#ffffff", // За theme-color
};

// ───────────────────────────────────────────────────────────
// 2. Layout компонент – БЕЗ <head> таг в JSX
// ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bg"
      suppressHydrationWarning
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable
      )}
    >
      <body className="page-background flex flex-col items-center min-h-screen">
        <Script
          id="json-ld-professional-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Станчев SEO",
              "description": "Професионален SEO консултант в България. SEO оптимизация, линк билдинг стратегия, оптимизация на сайт, SEO анализ.",
              "url": "https://stanchev.vercel.app",
              "logo": "https://stanchev.vercel.app/images/og/og.jpg",
              "image": "https://stanchev.vercel.app/images/og/og.jpg",
              "telephone": "+359-XXX-XXX-XXX",
              "email": "seo@stanchev.bg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "София",
                "addressRegion": "София-град",
                "addressCountry": "BG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "42.6977",
                "longitude": "23.3219"
              },
              "areaServed": {
                "@type": "Country",
                "name": "България"
              },
              "serviceType": [
                "SEO оптимизация",
                "Линк билдинг",
                "SEO консултация",
                "SEO анализ",
                "Оптимизация на сайт",
                "SEO одит",
                "On-page оптимизация",
                "Off-page оптимизация",
                "Keyword research",
                "SEO копирайтинг"
              ],
              "priceRange": "$$",
              "sameAs": [
                "https://github.com/stantchev/",
                "https://www.linkedin.com/in/stantcheff/",
                "https://dev.to/stanchev"
              ],
              "founder": {
                "@type": "Person",
                "name": "Станчев",
                "jobTitle": "SEO Специалист",
                "email": "seo@stanchev.bg",
                "url": "https://stanchev.vercel.app/za-men"
              }
            })
          }}
        />
        <Script id="theme-init" strategy="beforeInteractive" async>{`
          (function () {
            try {
              const root = document.documentElement;
              const config = ${JSON.stringify({
                brand: style.brand,
                accent: style.accent,
                neutral: style.neutral,
                solid: style.solid,
                "solid-style": style.solidStyle,
                border: style.border,
                surface: style.surface,
                transition: style.transition,
                scaling: style.scaling,
                "viz-style": dataStyle.variant,
              })};
              Object.entries(config).forEach(([k, v]) =>
                root.setAttribute("data-" + k, v)
              );
              const resolveTheme = (t) =>
                !t || t === "system"
                  ? window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
                  : t;
              root.setAttribute("data-theme", resolveTheme(localStorage.getItem("data-theme")));
            } catch (e) {
              console.error(e);
              document.documentElement.setAttribute("data-theme", "dark");
            }
          })();
        `}</Script>
        <Providers>
          <Background
            position="fixed"
            mask={effects.mask}
            gradient={{ ...effects.gradient, opacity: effects.gradient.opacity as opacity }}
            dots={{ ...effects.dots, opacity: effects.dots.opacity as opacity, size: effects.dots.size as SpacingToken }}
            grid={{ ...effects.grid, opacity: effects.grid.opacity as opacity }}
            lines={{ ...effects.lines, opacity: effects.lines.opacity as opacity, size: effects.lines.size as SpacingToken }}
          />
          <Header />
          <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
