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
// 1.  Метаданни – Next.js ще ги сложи сам в <head>
// ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "SEO Консултант България | Станчев SEO - Професионални SEO Услуги",
  description: "Професионален SEO консултант в България. SEO оптимизация, линк билдинг стратегия, оптимизация на сайт, SEO анализ. Повишете позициите си в Google с доказани SEO услуги.",
  keywords: [
    "seo консултант",
    "seo фирми",
    "линк билдинг стратегия", 
    "seo обучение",
    "seo цена",
    "seo оптимизации",
    "интернет реклама",
    "seo оптимизация google",
    "linkbuilding цена",
    "seo уроци",
    "seo оптимизатор",
    "seo оптимизация цени",
    "оптимизация на сайт цени",
    "seo оптимизиране",
    "seo стратегия",
    "изграждане на линкове",
    "adwords реклама",
    "seo курс",
    "реклама в google цена",
    "ppc кампания",
    "seo оптимизация на онлайн магазин",
    "оптимизация на сайтове",
    "seo специалист",
    "редизайн на уеб сайт",
    "seo фирма",
    "seo сертификат",
    "seo за начинаещи",
    "seo оптимизация уроци",
    "seo учебник",
    "seo оптимизация за търсачки",
    "оптимизация на онлайн магазин",
    "линк билдинг цени",
    "сео цени",
    "оптимизиране на сайт цена",
    "seo оптимизация в google",
    "линк билдинг цена",
    "link building",
    "seo услуга",
    "seo анализ сайта",
    "оптимизация на сайт за мобилни устройства",
    "сео оптимизатор",
    "фирма за seo",
    "seo optimizacia",
    "онлайн реклама",
    "как се прави seo оптимизация",
    "оптимизация на сайтове цени",
    "seo статии",
    "оптимизация сайта цена",
    "seo копирайтинг",
    "оптимизиране на онлайн магазин",
    "seo оптимизация",
    "сео цена",
    "seo консултация",
    "seo optimizaciq",
    "seo",
    "сео анализ онлайн",
    "реклама в гугъл",
    "фирма за seo оптимизация",
    "seo експерт",
    "оптимизация на уеб сайт",
    "seo online magazin",
    "seo анализатор",
    "сео анализ",
    "seo текст",
    "seo цени",
    "seo оптимизация цена",
    "сео агенция",
    "seo сайт",
    "seo електронен магазин",
    "оптимизация на сайт цена",
    "seo маркетинг",
    "ефективна seo оптимизация",
    "seo агенция",
    "seo анализ онлайн",
    "link building цена",
    "сео специалист",
    "seo рейтинг",
    "seo анализ",
    "google оптимизатор",
    "цени за seo оптимизация",
    "сео на онлайн магазин",
    "регистрация в директории на сайт",
    "цена за сео оптимизация",
    "internet reklama",
    "seo specialist",
    "ppc реклама",
    "класиране на сайт",
    "seo на онлайн магазин",
    "директории за регистрации",
    "евтина seo оптимизация",
    "дигитален маркетинг",
    "услуги seo цена",
    "интернет репутация",
    "seo новини",
    "сео експерт",
    "онлайн маркетинг",
    "seo позиция",
    "seo компания",
    "seo оптимизация курс",
    "seo стратегии",
    "seo копирайтинг цена",
    "SEO обучение онлайн",
    "сео",
    "оптимизация на сайт за google",
    "seo блог",
    "seo консултации",
    "сео оптимизация",
    "ui ux дизайн",
    "seo онлайн магазин",
    "seo фирми мнения",
    "on-page оптимизация",
    "seo услуги цена",
    "оптимизиране на сайтове",
    "seo услуги цени",
    "регистрация на сайт в търсачки",
    "оптимизация сайт цена",
    "онлайн репутация",
    "добра seo фирма",
    "линк билдинг",
    "seo online магазин",
    "оптимизация на сайт",
    "сео оптимизация цени",
    "off-page оптимизация",
    "seo одит цена",
    "сео оптимизация цена",
    "seo българия",
    "фирма за оптимизиране на сайт",
    "реклама в google",
    "сео учебник",
    "seo съвети",
    "seo одит",
    "оптимизация за google",
    "как се прави seo оптимизация"
  ],
  metadataBase: new URL(baseURL),
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
  },
  verification: {
    google: "your-google-verification-code", // Добави реалния код
  },
  category: "SEO Services",
};

// ───────────────────────────────────────────────────────────
// 2.  Layout компонент – без <head>, без <Meta>
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/avatar.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="BG" />
        <meta name="geo.placename" content="София, България" />
        <meta name="ICBM" content="42.6977, 23.3219" />
        <meta name="geo.position" content="42.6977;23.3219" />
        <meta name="language" content="Bulgarian" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta property="business:contact_data:locality" content="София" />
        <meta property="business:contact_data:region" content="София-град" />
        <meta property="business:contact_data:country_name" content="България" />
        <meta property="business:contact_data:email" content="seo@stanchev.bg" />
        <meta property="business:contact_data:website" content="https://stanchev.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Станчев SEO",
              "description": "Професионален SEO консултант в България. SEO оптимизация, линк билдинг стратегия, оптимизация на сайт, SEO анализ.",
              "url": "https://stanchev.vercel.app",
              "logo": "https://stanchev.vercel.app/images/avatar.jpg",
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
      </head>
      <body className="page-background flex flex-col items-center min-h-screen">
        {/* theme-init скрипта – използвай next/script */}
        <Script id="theme-init" strategy="beforeInteractive" async >{`
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
