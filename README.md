 <div align="center">

# Stanchev Digital

**SEO Consultant, SEO Specialist & Web Developer.**

The official website of [stanchev.bg](https://stanchev.bg): services, EUR pricing, SEO case studies, and a blog, built for Google and AI-powered search engines.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Once UI](https://img.shields.io/badge/Once%20UI-2.6-7C5CFF)](https://once-ui.com)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-AGPL--3.0-blue)](LICENSE)

[Website](https://stanchev.bg) · [SEO Services](https://stanchev.bg/seo-uslugi) · [Web Development](https://stanchev.bg/web) · [Blog](https://stanchev.bg/blog) · [Contact](https://stanchev.bg/kontakti)

</div>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Site Map](#site-map)
- [SEO & GEO Architecture](#seo--geo-architecture)
- [Contact Protection](#contact-protection)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Adding Content](#adding-content)
- [Deployment to Vercel](#deployment-to-vercel)
- [License](#license)

---

## About the Project

The website brings together three professional roles: **SEO Consultant**, **SEO Specialist**, and **Web Developer**. It is designed for visibility in traditional search engines and inclusion in AI-generated answers (Google AI Overviews, ChatGPT, Gemini, Perplexity), with transparent EUR pricing and no ranking guarantees.

The website's content is written in Bulgarian. The codebase, structured data, and metadata are organized so that every page has a clearly defined purpose, a unique title, a canonical URL, and appropriate structured markup.

## Key Features

| Area | Features |
| --- | --- |
| **Design** | Once UI 2 components and blocks: hero sections, feature layouts, bento grids, timelines, pricing sections, and FAQs. Light and dark themes. |
| **Services** | 22 services (13 SEO and 9 web development services) managed through a single data source. Each page has its own layout and visual theme. |
| **Blog** | Search, topic filters, reading time, related articles, table of contents limited to main headings, and `updatedAt` support. |
| **Projects** | Filterable grid featuring SEO case studies and structured data. |
| **Interactive Tools** | AI readiness self-assessment, SEO integration specification builder, website brief, and performance diagnostics. |
| **Performance** | Server-side rendering, `next/image`, optimized CSS, and minimal JavaScript for content delivery. |
| **Contact** | Contact form with reCAPTCHA v3, email, and phone number protected against basic spam bots. |

## Technology Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack), [React 19](https://react.dev), [TypeScript 7](https://www.typescriptlang.org)
- **UI:** [Once UI](https://once-ui.com) `@once-ui-system/core` 2.6 (components, blocks, charts powered by Recharts)
- **Content:** MDX (`next-mdx-remote`, `@next/mdx`, `gray-matter`)
- **Styling:** CSS and SCSS modules, Once UI design tokens
- **Icons:** `react-icons` through a typed icon registry
- **Email:** Nodemailer (SMTP), with optional Telegram notifications
- **Hosting:** Vercel

## Site Map

| URL | Page |
| --- | --- |
| `/` | Homepage: hero, services, GEO, process, pricing, and blog |
| `/seo-uslugi` | SEO services and pricing, plus 13 individual service pages |
| `/seo-konsultant` | SEO Consultant in Bulgaria |
| `/web` | Web development, plus 9 individual service pages (Next.js, WordPress, GEO, and more) |
| `/seo-proekti` | SEO projects and case studies |
| `/blog` | Article and guide library |
| `/za-men` | About: professional roles, experience, skills, and certifications |
| `/kontakti` | Contact information and contact form |

## SEO & GEO Architecture

- **Single source of truth:** [`src/resources/services.ts`](src/resources/services.ts) defines all services, including metadata, pricing, FAQs, and processes. Pages, the sitemap, and internal links are generated from this source.
- **Metadata:** `buildMetadata` and `serviceMetadata` in [`src/components/seo/metadata.ts`](src/components/seo/metadata.ts) handle page titles, descriptions, canonical URLs, Open Graph, and Twitter metadata.
- **Structured Data:** JSON-LD is server-rendered as standard `<script>` elements, making it accessible to crawlers without requiring JavaScript execution. Implemented schemas include `WebPage`, `Service`, `Person`, `ProfilePage`, `ContactPage`, `CollectionPage`, `ItemList`, `Blog`, `BlogPosting`, and `BreadcrumbList`.
- **Sitemap & Robots:** [`src/app/sitemap.ts`](src/app/sitemap.ts) uses actual publication or update dates exclusively for blog posts (`updatedAt` or `publishedAt`). `/api/*` routes include `X-Robots-Tag: noindex, nofollow`.
- **AI Search:** [`public/llms.txt`](public/llms.txt) follows the standard format, with direct answers at the beginning of sections, self-contained content passages, and consistent author and business information.
- **Internal Linking:** Automated related-article recommendations and pillar guides across the homepage and service pages.

## Contact Protection

Email addresses and phone numbers remain visible and accessible to people, Google, and AI systems, but are not exposed as complete strings in the raw HTML:

- On-screen text is split into individual parts that are displayed as complete contact details.
- `mailto:` and `tel:` links are generated on hover, focus, or touch interaction.
- JSON-LD values are encoded using Unicode escape sequences, which are automatically decoded by JSON parsers.

Implementation: [`src/lib/contact.ts`](src/lib/contact.ts) and [`src/components/ProtectedContact.tsx`](src/components/ProtectedContact.tsx).

This approach helps limit basic automated scraping and does not replace the reCAPTCHA-protected contact form.

## Project Structure

```text
src/
├── app/                    # App Router routes
│   ├── blog/               # Blog and MDX articles (posts/)
│   ├── seo-uslugi/         # SEO services
│   ├── web/                # Web development services
│   ├── seo-proekti/        # SEO case studies
│   ├── za-men/, kontakti/  # About and contact pages
│   ├── api/                # OG image and access routes
│   ├── sitemap.ts, robots.ts
│   └── layout.tsx
├── components/
│   ├── seo/                # Page blocks, JSON-LD, templates, and tools
│   ├── blog/               # Articles, related posts, and table of contents
│   ├── Header.tsx, Footer.tsx, ProtectedContact.tsx
│   └── mdx.tsx             # MDX content components
├── lib/                    # Email, Telegram, contact protection
├── resources/              # Configuration, content, services, icons
└── utils/                  # MDX and theme utilities
public/                     # Images, llms.txt, fonts
```

## Getting Started

**Requirements:** Node.js 20.9 or later (22 recommended) and npm.

```bash
git clone https://github.com/stantchev/stanchev.git
cd stanchev
npm install
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000).

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Environment Variables

Create an `.env.local` file in the project root. The production build does not require these values, but the corresponding features depend on them.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Public reCAPTCHA v3 key for the contact form |
| `RECAPTCHA_SECRET` | Secret key for server-side reCAPTCHA verification |
| `SMTP_USER`, `SMTP_PASS` | Email credentials for sending contact inquiries |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | Optional Telegram notifications |
| `PAGE_ACCESS_PASSWORD` | Password for protected pages |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (optional) |

Never commit these values to the repository.

## Adding Content

### Blog Post

Create a file in `src/app/blog/posts/<slug>.mdx`:

```mdx
---
title: "Title under 60 characters"
summary: "Description of approximately 155 characters."
keywords: ["keyword", "another keyword"]
publishedAt: "2026-01-15"
updatedAt: "2026-03-01"
tag: "SEO"
image: /images/posts/<slug>.jpg
---

Article content goes here. Use H2 for main sections.
```

- The image specified in `image` is displayed at the beginning of the article. Do not insert it again in the article body.
- The topic category (SEO & GEO, Web Development, AI, Cybersecurity) is determined by the `tag` field.
- Once UI components can be used in MDX content, including `Table`, `AccordionGroup`, `Timeline`, `BlockQuote`, `Grid`, `Column`, `BarChart`, and others.

### SEO Case Study

Add an MDX file to `src/app/work/projects/`. Case studies are displayed on `/seo-proekti`.

### Service

Edit or add an entry in `src/resources/services.ts`. The corresponding page, sitemap entry, and internal links are updated automatically.

Individual page layouts are located in `src/app/seo-uslugi/*` and `src/app/web/*`.

## Deployment to Vercel

1. Import the repository through [Vercel](https://vercel.com/new). The framework is automatically detected as Next.js.
2. Configure the environment variables listed above.
3. The build command is `npm run build`. The output directory can remain at its default setting.
4. After the first deployment, submit the sitemap (`/sitemap.xml`) to Google Search Console and request indexing for the main pages.

## License

This project is licensed under the **GNU Affero General Public License v3.0**. See [LICENSE](LICENSE).

---

<div align="center">

**Stanchev Digital** · [stanchev.bg](https://stanchev.bg) · [Contact](https://stanchev.bg/kontakti)

</div>
