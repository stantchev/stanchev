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
  title: home.title,
  description: home.description,
  keywords: [
  "SEO оптимизация",
  "линк билдинг",
  "SEO услуги",
  "оптимизация на сайт",
  "SEO цена",
  "SEO консултация",
  "линк билдинг стратегия",
  "оптимизация на онлайн магазин",
  "реклама в Google",
  "SEO обучение",
  "SEO копирайтинг",
  "дигитален маркетинг",
],
  metadataBase: new URL(baseURL),
  openGraph: {
    title: home.title,
    description: home.description,
    url: baseURL,
    siteName: home.title,
    images: [{ url: home.image, width: 1200, height: 630 }],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: home.title,
    description: home.description,
    images: [home.image],
  },
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
