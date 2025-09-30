import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home } from "./content";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL: string = "https://stanchev.bg";

const routes: RoutesConfig = {
  "/": true,
  "/za-men": true,
  "/seo-proekti": true,
  "/seo-uslugi": true,
  "/kontakti": true,
  "/blog": true,
  "/gallery": false,
  "/obshti-usloviya": true,
  "/seo-uslugi/seo-odit": true,
  "/seo-uslugi/on-page-seo": true,
  "/seo-uslugi/keyword-research": true,
  "/seo-uslugi/seo-konsultaciya": true,
  "/seo-uslugi/seo-optimizatsiya": true,
  "/seo-uslugi/link-building": true,
  "/seo-uslugi/lokalno-seo": true,
  "/seo-uslugi/content-seo": true,
  "/seo-uslugi/ecommerce-seo": true,
  "/seo-uslugi/wordpress-seo": true,
  "/seo-uslugi/opencart-seo": true,
  "/seo-uslugi/magento-seo": true,
};

const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes: ProtectedRoutesConfig = {};

import { Sofia_Sans } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Sofia_Sans({
  variable: "--font-heading",
  subsets: ["cyrillic"],
  display: "swap",
});

const body = Sofia_Sans({
  variable: "--font-body",
  subsets: ["cyrillic"],
  display: "swap",
});

const label = Sofia_Sans({
  variable: "--font-label",
  subsets: ["cyrillic"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts: FontsConfig = {
  heading,
  body,
  label,
  code,
};

// default customization applied to the HTML in the main layout.tsx
const style: StyleConfig = {
  theme: "system",
  neutral: "gray",
  brand: "cyan",
  accent: "red",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "100",
};

const dataStyle: DataStyleConfig = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

const effects: EffectsConfig = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

// default schema data
const schema: SchemaConfig = {
  logo: "",
  type: "Organization",
  name: "Станчев SEO",
  description: home.description,
  email: "seo@stanchev.bg",
};

// social links
const sameAs: SameAsConfig = {
  github: "https://github.com/stantchev/",
  linkedin: "https://www.linkedin.com/in/stantcheff/",
  devto: "https://dev.to/stanchev",
};

// social sharing configuration for blog posts
const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: true,
    pinterest: true,
    whatsapp: true,
    reddit: true,
    telegram: true,
    email: true,
    copyLink: true,
  },
};

const llmsRules = [
  {
    userAgent: "Google-Extended",
    allow: ["/uslugi/", "/blog/"],
  },
  {
    userAgent: "OpenAI",
    allow: ["/uslugi/", "/blog/"],
    disallow: "/",
  },
  {
    userAgent: "Meta",
    allow: ["/uslugi/", "/blog/"],
    disallow: "/",
  },
  {
    userAgent: "Bingbot",
    allow: ["/uslugi/", "/blog/"],
    disallow: "/",
  },
  {
    userAgent: "Anthropic",
    disallow: "/",
  },
  {
    userAgent: "Perplexity",
    disallow: "/",
  },
  {
    userAgent: "CCBot",
    disallow: "/",
  },
  {
    userAgent: "*",
    disallow: "/",
  },
];

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
  llmsRules,
};


