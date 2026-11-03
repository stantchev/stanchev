import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";
import {
  Background,
  Column,
  Flex,
  Opacity,
  SpacingToken,
} from "@once-ui-system/core";
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
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { protectJson } from "@/lib/contact";

export const metadata: Metadata = {
  title: "SEO Консултант България | Stanchev Digital",
  description:
    "Професионален SEO консултант в България: SEO оптимизация, линк билдинг и SEO анализ. Повишете позициите си в Google с доказани услуги.",
  keywords: [
    "seo консултант",
    "seo фирми",
    "линк билдинг стратегия",
    "seo оптимизация",
    "как да си направя сайт",
    "link building цена",
    "seo оптимизация цена",
    "seo цена",
  ],
  metadataBase: new URL(baseURL),
  authors: [{ name: "Станчев", url: baseURL }],
  creator: "Stanchev Digital",
  publisher: "Stanchev Digital",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: baseURL,
    siteName: "Stanchev Digital - Професионални SEO Услуги България",
    title: "SEO Консултант България | Stanchev Digital",
    description:
      "Професионален SEO консултант в България: SEO оптимизация, линк билдинг и SEO анализ. Повишете позициите си в Google с доказани услуги.",
    images: [
      {
        url: "https://stanchev.bg/images/og/og.jpg",
        width: 1200,
        height: 630,
        alt: "Stanchev Digital - Професионални SEO услуги България",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@stanchev_seo",
    creator: "@stanchev_seo",
    title: "SEO Консултант България | Stanchev Digital",
    description:
      "Професионален SEO консултант в България: SEO оптимизация, линк билдинг и SEO анализ. Повишете позициите си в Google с доказани услуги.",
    images: ["https://stanchev.bg/images/og/og.jpg"],
  },
  alternates: {
    canonical: baseURL,
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "SEO Services",
};

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: protectJson(JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Stanchev Digital",
              description:
                "Професионален SEO консултант в България. SEO оптимизация, линк билдинг стратегия, оптимизация на сайт, SEO анализ.",
              url: "https://stanchev.bg",
              logo: "https://stanchev.bg/images/og/og.jpg",
              image: "https://stanchev.bg/images/og/og.jpg",
              telephone: "+359898509650",
              email: "seo@stanchev.bg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "София",
                addressRegion: "София-град",
                addressCountry: "BG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "42.6977",
                longitude: "23.3219",
              },
              areaServed: {
                "@type": "Country",
                name: "България",
              },
              serviceType: [
                "SEO оптимизация",
                "Линк билдинг",
                "SEO консултация",
                "SEO анализ",
                "Оптимизация на сайт",
                "SEO одит",
                "On-page оптимизация",
                "Off-page оптимизация",
                "Keyword research",
                "SEO копирайтинг",
              ],
              priceRange: "$$",
              sameAs: [
                "https://github.com/stantchev/",
                "https://www.linkedin.com/in/stantcheff/",
                "https://dev.to/stanchev",
              ],
              founder: {
                "@type": "Person",
                name: "Станчев",
                jobTitle: "SEO консултант, SEO специалист и уеб разработчик",
                email: "seo@stanchev.bg",
                url: "https://stanchev.bg/za-men",
              },
            })),
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
              
              const getTimeBasedTheme = () => {
                const now = new Date();
                const sofiaTime = new Intl.DateTimeFormat("bg-BG", {
                  timeZone: "Europe/Sofia",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                }).formatToParts(now);
                
                const hour = parseInt(sofiaTime.find(part => part.type === "hour")?.value || "0");
                return hour >= 8 && hour < 20 ? "light" : "dark";
              };
              
              const resolveTheme = (t) => {
                if (!t) {
                  return getTimeBasedTheme();
                }
                return t;
              };
              
              root.setAttribute(
                "data-theme",
                resolveTheme(localStorage.getItem("data-theme"))
              );
              
              setInterval(() => {
                const currentTheme = localStorage.getItem("data-theme");
                if (!currentTheme) {
                  const newTheme = getTimeBasedTheme();
                  root.setAttribute("data-theme", newTheme);
                }
              }, 60000);
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
              gradient={{
                ...effects.gradient,
                opacity: effects.gradient.opacity as Opacity,
              }}
              dots={{
                ...effects.dots,
                opacity: effects.dots.opacity as Opacity,
                size: effects.dots.size as SpacingToken,
              }}
              grid={{
                ...effects.grid,
                opacity: effects.grid.opacity as Opacity,
              }}
              lines={{
                ...effects.lines,
                opacity: effects.lines.opacity as Opacity,
                size: effects.lines.size as SpacingToken,
              }}
            />
            <Header />
            <main
              className="main-content"
              style={{
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 24px",
                minHeight: "calc(100vh - 120px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "24px",
              }}
            >
              {children}
            </main>
            <Footer />
          </Providers>
      </body>
    </html>
  );
}
