# 📝 Complete Project Updates - SEO Portfolio Website

## v3.1: Platform SEO pages, content & indexing fixes

### Added
- **Shopify SEO** (`/seo-uslugi/shopify-seo`) and **WooCommerce SEO**
  (`/seo-uslugi/woocommerce-seo`) service pages, built on the shared
  `PlatformSeoPage` component
- 5 new blog posts: SEO glossary, how an SEO consultation works, measuring
  AI visibility, Google Business Profile step by step, why a site does not
  appear in Google
- `LazyFx` component for lazily loaded visual effects

### Changed
- New title/meta description on `/seo-uslugi`, "SEO цени 2026" and
  "Какво прави SEO консултантът" (price signal, clearer intent)
- WordPress, OpenCart, Magento and e-commerce SEO pages expanded with more
  content, FAQ and cross-links
- LocalBusiness schema: address, opening hours, map link, Sofia service area
- Theme toggle, provider, header and styles refreshed

### Fixed (indexing)
- OG image endpoint now returns `X-Robots-Tag: noindex`, removing 5 non-page
  URLs from Search Console's "crawled - not indexed" list
- Added internal links to posts stuck in "discovered - not indexed"

## v3.0: Website Rebuild & Stack Upgrade

### Major Release

Complete rebuild of **stanchev.bg**, modernizing the technology stack, restructuring service pages, and strengthening technical SEO, GEO, and AI-search readiness.

## Technology Stack
- Upgraded to Next.js 16 with Turbopack, React 19, and TypeScript 7.
- Once UI Core 2.6 integration.
- Updated dependencies: next-mdx-remote 6 (blockJS disabled), cookie 2, react-icons 5.7, and recharts 3.
- Introduced a typed icon registry, LayoutProvider from core/next, and transition tokens.

## Website & Architecture

### Homepage
- Full-bleed hero and auto-scrolling platform strip.
- GEO positioning band.
- Redesigned process and euro-denominated pricing cards.
- Simplified blog section and expanded FAQ.

### SEO Services
- Rebuilt `/seo-uslugi` with promotional, sticky, grid, timeline, and bordered feature layouts.
- Introduced a reusable bento template for 12 SEO services.
- Added a dedicated, hand-built SEO audit page.
- New pages: `/seo-konsultant`, `/za-men`, `/seo-proekti`, `/blog`, and `/kontakti`.
- Filterable project cases and improved blog discovery with search, topics, and reading-time indicators.

### Web Development
- Rebuilt `/web` and nine individual service pages, each with dedicated layouts and interactive tools.
- Added code tabs, rendering-mode comparisons, SPA vs SSR explanations, development pipeline, plugin decision guidance, speed diagnostics, and maintenance board.
- Introduced `/web/llm-seo` with an AI answer demonstration and readiness self-assessment.
- Added `/web/seo-integratsiya` with an integration diagram and specification builder.

## SEO, GEO & AI Search Readiness
- Established `services.ts` as the single source of truth for service pages, sitemap entries, and internal links.
- Server-rendered JSON-LD structured data, excluding FAQPage markup.
- Centralized canonical and Open Graph metadata helpers.
- Sitemap improvements with real `lastmod` values exclusively for blog posts.
- Added `X-Robots-Tag` protection for `/api/*`.
- Implemented standard `llms.txt`.
- Optimized page titles and descriptions for SERP display lengths.
- Added related-post ring linking and pillar guides across the homepage and service pages.
- Improved blog content with `updatedAt` support and main-heading-only table of contents.
- Rebuilt the 2026 SEO pricing guide with EUR pricing, comparison tables, charts, timelines, accordions, and official nofollow references.

## Contact & Privacy
- Split email and phone numbers into inline parts.
- Contact links activate only through user interaction.
- JSON-LD contact values use Unicode escapes to avoid exposing plain-text values in raw HTML.
- Unified the contact phone number across the website.

## Fixes & Cleanup
- Removed duplicated hero images in blog posts.
- Fixed invalid chart properties and missing React keys.
- Eliminated nested LayoutProviders and nested `<main>` elements.
- Replaced all instances of "Станчев SEO" with "Stanchev Digital".
- Removed unnecessary code comments while preserving functional directives.
- Rewrote the project README.

## Positioning & Business Updates
- Repositioned the website around three professional roles:
  - SEO Consultant
  - SEO Specialist
  - Web Developer
- Introduced EUR-based pricing.
- Revised service messaging to prioritize transparency, realistic claims, and measurable value.
- Strengthened positioning around traditional search engine optimization, Generative Engine Optimization (GEO), and AI-search readiness.

## 🚀 Version 2.2 - Complete SEO Portfolio Overhaul (Latest)

### **🎯 Major Features Added**

#### **1. SEO & Metadata Optimization**
- **Dynamic canonical tags** for all blog posts with proper URL structure
- **Keywords extraction** from MDX frontmatter and integration into `<head>`
- **Open Graph & Twitter Card** metadata for enhanced social sharing
- **Structured data** implementation for better search visibility
- **Article metadata** with published time and author information

#### **2. Time-Based Theme System**
- **Intelligent theme switching** based on Sofia timezone (8:00-20:00 light, 20:00-8:00 dark)
- **Automatic theme updates** every 60 seconds when no user preference is set
- **Working theme toggle** with proper react-icons (HiSun, HiMoon)
- **User preference persistence** via localStorage
- **Sofia timezone synchronization** for accurate time-based switching

#### **3. Bulgarian Localization**
- **Time display** in Bulgarian format with Sofia timezone
- **Date formatting** with Bulgarian locale throughout the site
- **Location display** as "София, България" in all relevant sections
- **Consistent localization** across Header, About, and Contact pages

#### **4. New Off-Page SEO Service**
- **Complete service page** at `/seo-uslugi/off-page-seo`
- **Professional content** following existing template structure
- **Pricing and FAQ sections** with relevant information
- **SEO-optimized** with proper metadata and structure

### **🔧 Technical Improvements**

#### **Blog System Enhancement**
```typescript
// Dynamic metadata generation with canonical URLs
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  const canonicalURL = `${baseURL}${blog.path}/${post.slug}`;
  
  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    keywords: post.metadata.keywords?.join(", "),
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      url: canonicalURL,
      images: [post.metadata.image],
    },
    alternates: {
      canonical: canonicalURL,
    },
  };
}
```

#### **Theme Management System**
```typescript
// Time-based theme switching with Sofia timezone
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
```

#### **Bulgarian Localization**
```typescript
// Time display with Bulgarian locale and Sofia timezone
const TimeDisplay = ({ timeZone, locale = "bg-BG" }) => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Europe/Sofia",
    hour: "2-digit",
    minute: "2-digit", 
    second: "2-digit",
    hour12: false,
  };
  return new Intl.DateTimeFormat(locale, options).format(new Date());
};
```

### **📁 Files Modified in v2.2**

| File | Changes | Impact |
|------|---------|--------|
| `src/app/blog/[slug]/page.tsx` | Dynamic canonical tags, keywords extraction | Enhanced SEO |
| `src/utils/utils.ts` | Keywords support in Metadata type | Content optimization |
| `src/components/ThemeToggle.tsx` | Time-based theme switching | User experience |
| `src/app/layout.tsx` | Sofia timezone theme initialization | Theme management |
| `src/components/Providers.tsx` | LayoutProvider wrapper for useTheme | Theme functionality |
| `src/components/Header.tsx` | Bulgarian time display | Localization |
| `src/resources/content.tsx` | Location text updates | Bulgarian localization |
| `src/app/seo-uslugi/off-page-seo/` | New service page | Content expansion |

### **🎨 Design & UX Improvements**

#### **Theme Toggle Enhancement**
- **React Icons integration** (HiSun, HiMoon) for proper icon display
- **Time synchronization** with Sofia timezone for accurate switching
- **User preference persistence** with localStorage integration
- **Automatic theme updates** based on time of day

#### **Bulgarian Localization**
- **Time display** in Bulgarian format with proper timezone
- **Location text** updated to "София, България" across all pages
- **Consistent formatting** throughout the application
- **Cultural adaptation** for Bulgarian users

#### **SEO Optimization**
- **Dynamic canonical URLs** for all blog posts
- **Keywords integration** from MDX frontmatter
- **Rich metadata** for social media sharing
- **Structured data** for search engines

---

## 🔧 Previous Updates (v2.1 and earlier)

## 🔧 Fixed Issues

### **1. Responsive Layout Improvements**
- **Homepage**: Centered buttons below main heading on desktop and mobile
- **Services page**: Uniform 400x430px cards, 2 per row desktop, 1 mobile
- **About page**: Avatar and languages at top on mobile, left on desktop

### **2. Fixed Duplicated Elements**
- **About page**: Removed duplicate avatar and language sections
- **Header navbar**: Fixed duplicate navigation items (icon + text vs icon only)

### **3. Icon System Overhaul**
- **Problem**: Icon components not working properly
- **Solution**: Replaced with direct react-icons components
- **Files affected**: Header.tsx, seo-uslugi/page.tsx, za-men/page.tsx

### **4. CSS Modules & Sass Updates**
- **Fixed Sass deprecation**: Replaced `@import` with `@use` in PlansSection.scss
- **Fixed CSS Modules errors**: Removed invalid selectors for mobile responsiveness

### **5. React Key Prop Errors**
- **Fixed duplicate keys**: Added unique prefixes for mobile/desktop versions
- **Clean console output**: No more React warnings

## 🎨 Layout Improvements

### **Homepage (src/app/page.tsx)**
```tsx
// Centered buttons with proper spacing
<RevealFx delay={0.4} speed="fast">
  <Column align="center" horizontal="center" fillWidth>
    <Flex
      gap="16"
      horizontal="center"
      vertical="center"
      wrap
      className="justify-center w-full"
    >
      <Button href="/kontakti" variant="primary" size="l" prefixIcon="rocket">
        Започнете сега
      </Button>
      <Button href="/za-men" variant="secondary" size="l" prefixIcon="user">
        <Flex vertical="center" gap="8">
          <Avatar src={person.avatar} size="s" />
          За мен
        </Flex>
      </Button>
    </Flex>
  </Column>
</RevealFx>
```

### **Services Page (src/app/seo-uslugi/page.tsx)**
- **Uniform card dimensions**: 400x430px exactly
- **Text wrapping**: Proper line breaks instead of stretching
- **Service icons**: Replaced images with relevant react-icons
- **Added missing service**: Off-Page SEO with proper pricing

```tsx
// Service icon mapping
const getServiceIcon = (slug: string, size: number = 20) => {
  const iconMap: { [key: string]: React.ReactElement } = {
    'seo-optimizatsiya': <HiOutlineRocketLaunch size={size} />,
    'link-building': <HiOutlineLink size={size} />,
    'ecommerce-seo': <PiGridFourDuotone size={size} />,
    'on-page-seo': <HiOutlineDocument size={size} />,
    'off-page-seo': <HiArrowTopRightOnSquare size={size} />,
    'keyword-research': <HiOutlineGlobeAsiaAustralia size={size} />,
    'seo-odit': <HiCheckCircle size={size} />,
    'seo-konsultaciya': <PiUserCircleDuotone size={size} />
  };
  return iconMap[slug] || <HiOutlineRocketLaunch size={size} />;
};
```

### **About Page (src/app/za-men/page.tsx)**
- **Mobile layout**: Avatar and languages at top, content below
- **Desktop layout**: Avatar left (sticky), content right
- **Increased content width**: maxWidth from 40 to 80
- **Better spacing**: Added proper padding and margins
- **React keys**: Fixed duplicate key warnings

```tsx
// Mobile version - vertical layout
<Column className="lg:hidden" fillWidth gap="l" paddingX="l">
  {/* Avatar section at top on mobile */}
  {about.avatar.display && (
    <Column fillWidth paddingY="l" gap="m" horizontal="center">
      <Avatar src={person.avatar} size="xl" />
      <Flex gap="8" vertical="center">
        <HiOutlineGlobeAsiaAustralia size={16} />
        <Text>{person.location}</Text>
      </Flex>
      {/* Languages with unique keys */}
      {languages.map((language, index) => (
        <Tag key={`mobile-${language}`} size="l">{language}</Tag>
      ))}
    </Column>
  )}
</Column>
```

## 🌐 Header Navigation (src/components/Header.tsx)

### **Complete Header Overhaul**
- **Working responsive logic**: Separate components for desktop/mobile
- **Proper icon implementation**: Direct react-icons instead of icon components
- **Fixed TypeScript errors**: Corrected Fade component props

```tsx
// Desktop version - icons + text
<Row s={{ hide: true }}>
  <ToggleButton href="/za-men" label={about.label}>
    <FaUser size={16} />
  </ToggleButton>
</Row>

// Mobile version - icons only
<Row hide s={{ hide: false }}>
  <ToggleButton href="/za-men">
    <FaUser size={16} />
  </ToggleButton>
</Row>
```

### **Icon Mapping**
- **Home**: `AiOutlineHome`
- **About**: `FaUser`
- **Projects**: `FaThLarge`
- **Services**: `MdOutlineRocketLaunch`
- **Contacts**: `MdOutlineMail`
- **Blog**: `FaRegNewspaper`

## 🌍 Localization Updates

### **Blog Dates (src/utils/formatDate.ts)**
```typescript
// Bulgarian date formatting
export function formatDate(date: string, includeRelative = false) {
  // ... existing logic ...
  
  if (yearsAgo > 0) {
    formattedDate = `преди ${yearsAgo} г.`;
  } else if (monthsAgo > 0) {
    formattedDate = `преди ${monthsAgo} мес.`;
  } else if (daysAgo > 0) {
    formattedDate = `преди ${daysAgo} дни`;
  } else {
    formattedDate = "Днес";
  }

  const fullDate = targetDate.toLocaleString("bg-BG", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return includeRelative ? `${fullDate} (${formattedDate})` : fullDate;
}
```

## 📦 New Services Added

### **Off-Page SEO Service (src/resources/content.tsx)**
```tsx
{
  title: "Off-Page SEO",
  slug: "off-page-seo",
  description: "Външна оптимизация за подобряване на авторитета.",
  features: ["Link building", "Social media signals", "Brand mentions"],
  price: "От 400 лв.",
}
```

## 🔧 Technical Fixes

### **Sass Modernization (src/components/PlansSection.scss)**
```scss
// Before (deprecated)
@import './breakpoints.scss';

// After (modern)
@use './breakpoints.scss' as breakpoints;

.plans {
  @include breakpoints.m {
    // mobile styles
  }
  @include breakpoints.s {
    // small screen styles
  }
}
```

### **CSS Modules Fixes (src/components/Header.module.scss)**
```scss
/* Mobile: Hide text labels completely */
@media (max-width: 768px) {
  .nav-label {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    width: 0 !important;
    height: 0 !important;
    overflow: hidden !important;
    position: absolute !important;
    left: -9999px !important;
  }
}
```

## 📁 Files Modified

| File | Changes | Status |
|------|---------|--------|
| `src/app/page.tsx` | Centered homepage buttons | ✅ |
| `src/app/seo-uslugi/page.tsx` | Uniform service cards with react-icons | ✅ |
| `src/app/za-men/page.tsx` | Complete responsive redesign | ✅ |
| `src/components/Header.tsx` | Fixed navbar with react-icons | ✅ |
| `src/resources/content.tsx` | Added Off-Page SEO service | ✅ |
| `src/utils/formatDate.ts` | Bulgarian date localization | ✅ |
| `src/components/PlansSection.scss` | Updated Sass syntax | ✅ |
| `src/components/Header.module.scss` | Fixed CSS Modules | ✅ |

## ✨ Final Result

### **🎯 Achievements**
- ✅ **Professional responsive design** across all pages
- ✅ **All icons displaying correctly** with react-icons
- ✅ **Better content readability** and spacing
- ✅ **Bulgarian localization** for dates
- ✅ **Clean, modern layout** following best practices
- ✅ **No console errors** or warnings
- ✅ **Perfect mobile experience** with proper navigation

### **📱 Mobile Experience**
- Header shows only icons, centered at bottom
- About page: Avatar and languages at top, content below
- Services: 1 card per row with proper text wrapping
- All content fits properly without horizontal scrolling

### **💻 Desktop Experience**
- Header shows icons + text labels
- About page: Avatar sticky left, content right with more space
- Services: 2 cards per row, uniform 400x430px dimensions
- Professional layout with proper spacing

### **🔧 Technical Quality**
- Clean TypeScript code with no errors
- Modern Sass syntax
- Proper React key management
- Component system integration
- Responsive design with mobile-first approach

---

**Total Development Time**: Multiple iterations with continuous improvements  
**Code Quality**: Production-ready with best practices  
**User Experience**: Seamless across all devices and screen sizes
