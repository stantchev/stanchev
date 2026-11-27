# Changelog

All notable changes to **stanchev.bg** (SEO portfolio and services site) are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and versions follow
[Semantic Versioning](https://semver.org/) as closely as a content-driven site allows: a major
version marks a redesign or architecture change, a minor version marks new pages and features, and a
patch marks fixes.

| Version | Date | Summary |
|---|---|---|
| [3.1](#31---2026-11-26) | 2026-11-26 | Shopify and WooCommerce SEO pages, 5 new posts, CTR metadata, indexing fixes, Next.js 16.4.6 |
| [3.0](#30---2026-11-03) | 2026-11-03 | Full redesign, GEO and LLM SEO, web development services, content growth from 30 to 61 posts |
| [2.2](#22---2025-10-02) | 2025-10-02 | Theme system, Bulgarian localization, structured data, Off-Page SEO service |
| [2.0](#20---2025-10-01) | 2025-10-01 | Performance layer: critical CSS, service worker, loading states |
| [1.1.0](#110---2025-06-26) | 2025-06-26 | Content and layout refinements |
| [1.0.1](#101---2025-06-24) | 2025-06-24 | Header fixes |

---

## Measurements: before and after 3.0

The 3.0 release was deployed on **2026-11-03**. The tables compare two equal 22-day windows taken
from Google Search Console (web search, property `https://stanchev.bg/`), so the numbers are
comparable day for day. They are the baseline that 3.1 is measured against.

### Search performance

| Metric | Before 3.0<br>12 Oct - 2 Nov 2026 | After 3.0<br>3 Nov - 24 Nov 2026 | Change |
|---|---:|---:|---:|
| Clicks | 4 | 6 | +2 (+50%) |
| Impressions | 1,990 | 2,430 | +440 (+22%) |
| Average CTR | 0.2% | 0.2% | no change |
| Average position | 55.8 | 43.1 | 12.7 places higher |

Reading the numbers: visibility improved (more impressions at a clearly better position), but the
click count is still very low, so CTR did not move. Absolute volumes are small, which means a gain
or loss of a few clicks changes the percentages a lot. Treat the direction as meaningful and the
size as indicative.

### Site state

| Metric | Before 3.0 | After 3.0 | At 3.1 |
|---|---:|---:|---:|
| Blog posts | 61 | 61 | 66 |
| Pages (`page.tsx` routes) | 38 | 39 | 41 |
| Case studies | 14 | 14 | 14 |
| Services in `services.ts` | n/a | 24 | 26 |
| Next.js / React | 15.3.2 / 19.0 | 16.4.4 / 19.3 | 16.4.6 / 19.3 |

### Three-month Search Console snapshot at the time of 3.1

Window 25 Aug - 24 Nov 2026, used as the starting point for the next comparison.

| Metric | Value |
|---|---:|
| Clicks | 18 |
| Impressions | 9,640 |
| Average CTR | 0.2% |
| Average position | 46.4 |
| Indexed pages | 99 |
| Not indexed | 21 |

Not-indexed breakdown: 9 crawled but not indexed, 6 discovered but not indexed, 4 returning 404,
2 excluded by `noindex`.

Pages with the most impressions and almost no clicks, targeted by the 3.1 metadata rewrite:

| Page | Clicks | Impressions |
|---|---:|---:|
| `/seo-uslugi` | 0 | 3,179 |
| `/blog/seo-cena-2025` | 0 | 2,630 |
| `/blog/kakvo-e-seo-konsultant` | 0 | 2,143 |

**How to re-measure 3.1:** compare 4-6 weeks after deploy, using the same window length and the same
property. Compare these three pages and the sitewide position, not total clicks alone.

---

## [3.1] - 2026-11-26

Focus: broaden platform coverage, add content, fix the indexing problems found in Search Console,
and raise click-through on the highest-impression pages.

### Added
- **Shopify SEO** (`/seo-uslugi/shopify-seo`) and **WooCommerce SEO** (`/seo-uslugi/woocommerce-seo`)
  service pages, built on a new shared `PlatformSeoPage` component.
- `LazyFx` component that defers decorative visual effects until they are needed.
- Five blog posts:
  - `seo-rechnik` (SEO glossary)
  - `seo-konsultaciya-kak-protica` (how an SEO consultation works)
  - `kak-da-izmerim-ai-vidimost` (measuring AI visibility)
  - `google-business-profile-stapka-po-stapka` (Google Business Profile, step by step)
  - `zashto-saitat-ne-izliza-v-google` (why a site does not appear in Google)

### Changed
- **Metadata for CTR:** rewrote the title and description of `/seo-uslugi`, "SEO цени 2026" and
  "Какво прави SEO консултантът". The price signal (from 150 EUR per month, audit from 300 EUR) now
  appears in the title of the two pricing-intent pages.
- Expanded the WordPress, OpenCart, Magento and e-commerce SEO pages with more content, FAQ items
  and cross-links.
- `LocalBusiness` structured data now includes address, opening hours, map link and a Sofia
  service area. `services.ts` and site content were refreshed to match.
- Theme toggle, provider, header and stylesheet refinements, plus new icons.
- Upgraded **Next.js to 16.4.6** and `@next/mdx` to 16.4.6 (patch release). Type check and
  production build pass.

### Fixed
- The OG image endpoint (`/api/og/generate`) now responds with `X-Robots-Tag: noindex`. Five of
  these image URLs were listed under "crawled, currently not indexed" in Search Console.
- Added internal links from related posts to pages stuck under "discovered, currently not indexed"
  (back-button hijacking, React vs WordPress, headless WordPress).

### Known issues and next steps
- 4 URLs return 404 and 2 are excluded by `noindex`; they still need review.
- The off-topic cybersecurity posts are unlikely to be indexed and dilute topical focus.
- Request re-indexing for the rewritten pages after deploy.
- `npm audit` reports 7 transitive vulnerabilities (`js-yaml`, `minimatch`, `picomatch`,
  `source-map-js`) that `npm audit fix` can address.

---

## [3.0] - 2026-11-03

Major release: a full redesign and a shift from a portfolio site to a service-led SEO and web
development site. The release commit changed 183 files (+13,626 / -23,207 lines).

### Added
- **GEO and LLM SEO** positioning: dedicated service content, `public/llms.txt`, and posts on
  generative engine optimization and AI search reporting.
- **Web development services** under `/web`: website building, Next.js, React SPA, headless
  WordPress, custom plugins, speed optimization, SEO integration, LLM SEO, and maintenance.
- Central service registry (`src/resources/services.ts`) driving service pages, related links and
  the sitemap, with shared metadata and JSON-LD helpers (`components/seo/metadata.ts`, `JsonLd.tsx`).
- Legal pages: `cookie-policy` and `gdpr`.
- Content growth from **30 to 61 blog posts** and from **10 to 14 case studies** since 2.2,
  covering SEO after core updates, WordPress 7.0, Next.js 16 (Server vs Client Components, App Router
  migration, performance), headless WordPress, Search Console AI reports, and cybersecurity news.

### Changed
- Redesigned layout, navigation, service pages and components on the Once UI system.
- Rebuilt `sitemap.ts` to include blog, case studies, service pages and extra routes without
  duplicates.
- Upgraded to **Next.js 16.4 and React 19.3** (from Next.js 15.3.2 and React 19.0).

### Removed
- Obsolete build artefacts and legacy pages replaced by the new structure.

---

## [2.2] - 2025-10-02

### Added
- **Dynamic canonical tags**, keyword extraction from MDX frontmatter, Open Graph and Twitter Card
  metadata, article metadata and structured data for blog posts.
- **Time-based theme system** following Sofia time (light 08:00-20:00, dark otherwise), refreshed
  every 60 seconds unless the visitor has chosen a theme, with the choice kept in `localStorage`.
- **Bulgarian localization**: Sofia-timezone time display, Bulgarian date formatting and consistent
  "София, България" location text.
- **Off-Page SEO** service page at `/seo-uslugi/off-page-seo` with pricing and FAQ.
- New posts and a FAQ component.

### Changed
- Header navigation with `react-icons`, and a working theme toggle (`HiSun` / `HiMoon`).
- Uniform service cards (400 x 430 px, two per row on desktop, one on mobile) and a responsive
  About page layout.
- Modernized Sass syntax and CSS Modules.

### Fixed
- Icon rendering, homepage button alignment, mobile navigation overflow, and React key warnings.

---

## [2.0] - 2025-10-01

### Added
- **Performance layer:** critical CSS, a service worker (`sw.js`), a loading component and
  performance utilities.
- `README.md` for the project.
- Posts on cyber insurance and other security topics.

### Changed
- Tuned `next.config.mjs` and the root layout for faster first paint.

---

## [1.1.0] - 2025-06-26

### Changed
- Content and layout refinements across the main pages.

### Removed
- Leftover backup page `kontakti/page.tsx.bak`.

---

## [1.0.1] - 2025-06-24

### Fixed
- Header component issues.

---

## Notes on this changelog

- Versions 1.0.1 to 2.2 were reconstructed from tags and commit history; 3.0 and 3.1 reflect the
  current state of the repository. Between 2.2 and 3.0 about 420 commits were made without
  intermediate tags, so that period is summarized under 3.0.
- Search Console figures come from the Google Search Console web interface and may be revised by
  Google. Average position is impression-weighted.
