<div align="center">

# Stanchev Digital

**SEO консултант, SEO специалист и уеб разработчик.**
Официалният сайт на [stanchev.bg](https://stanchev.bg): услуги, цени в евро, SEO казуси и блог, изградени за Google и за AI търсачките.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Once UI](https://img.shields.io/badge/Once%20UI-2.6-7C5CFF)](https://once-ui.com)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-AGPL--3.0-blue)](LICENSE)

[Сайт](https://stanchev.bg) · [SEO услуги](https://stanchev.bg/seo-uslugi) · [Уеб услуги](https://stanchev.bg/web) · [Блог](https://stanchev.bg/blog) · [Контакти](https://stanchev.bg/kontakti)

</div>

---

## Съдържание

- [За проекта](#за-проекта)
- [Основни възможности](#основни-възможности)
- [Технологичен стек](#технологичен-стек)
- [Карта на сайта](#карта-на-сайта)
- [SEO и GEO архитектура](#seo-и-geo-архитектура)
- [Защита на контактите](#защита-на-контактите)
- [Структура на проекта](#структура-на-проекта)
- [Започване](#започване)
- [Променливи на средата](#променливи-на-средата)
- [Добавяне на съдържание](#добавяне-на-съдържание)
- [Качване във Vercel](#качване-във-vercel)
- [Лиценз](#лиценз)

---

## За проекта

Сайтът представя три роли в едно лице: **SEO консултант**, **SEO специалист** и **уеб разработчик**. Изграден е с мисъл за видимост в класическото търсене и за цитиране в AI отговорите (Google AI Overviews, ChatGPT, Gemini, Perplexity), с прозрачни цени в евро и без обещания за позиции.

Езикът на съдържанието е български. Кодът, структурираните данни и метаданните са подредени така, че всяка страница да има ясна цел, уникално заглавие, canonical адрес и подходящ markup.

## Основни възможности

| Област | Какво включва |
| --- | --- |
| **Дизайн** | Компоненти и блокове на Once UI 2: hero, Features, bento мрежи, времеви линии, цени, FAQ. Светла и тъмна тема. |
| **Услуги** | 22 услуги (13 SEO и 9 уеб) от един източник на данни. Всяка страница е със собствена структура и теми. |
| **Блог** | Търсене, филтри по тема, време за четене, свързани статии, съдържание само с основните заглавия, `updatedAt`. |
| **Проекти** | Филтрируема мрежа със SEO казуси и структурирани данни. |
| **Интерактивни инструменти** | AI готовност (самооценка), спецификация за SEO интеграция, бриф за сайт, диагностика на скоростта. |
| **Производителност** | Сървърно рендиране, `next/image`, оптимизиран CSS, минимален JavaScript за съдържанието. |
| **Контакти** | Форма с reCAPTCHA v3, имейл и телефон, защитени от спам ботове. |

## Технологичен стек

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack), [React 19](https://react.dev), [TypeScript 7](https://www.typescriptlang.org)
- **UI:** [Once UI](https://once-ui.com) `@once-ui-system/core` 2.6 (компоненти, блокове, графики с Recharts)
- **Съдържание:** MDX (`next-mdx-remote`, `@next/mdx`, `gray-matter`)
- **Стилове:** CSS и SCSS модули, токени на Once UI
- **Икони:** `react-icons` през типизиран регистър
- **Имейл:** Nodemailer (SMTP), по избор известия в Telegram
- **Хостинг:** Vercel

## Карта на сайта

| Адрес | Страница |
| --- | --- |
| `/` | Начало: hero, услуги, GEO, процес, цени, блог |
| `/seo-uslugi` | SEO услуги и цени, плюс 13 страници на отделните услуги |
| `/seo-konsultant` | SEO консултант в България |
| `/web` | Уеб разработка, плюс 9 страници на уеб услугите (Next.js, WordPress, GEO и др.) |
| `/seo-proekti` | SEO проекти и казуси |
| `/blog` | Библиотека със статии и ръководства |
| `/za-men` | За мен: роли, опит, умения, сертификати |
| `/kontakti` | Контакти и форма |

## SEO и GEO архитектура

- **Един източник на истина:** [`src/resources/services.ts`](src/resources/services.ts) описва всички услуги (метаданни, цени, FAQ, процес). От него се генерират страниците, sitemap-ът и връзките.
- **Метаданни:** `buildMetadata` и `serviceMetadata` в [`src/components/seo/metadata.ts`](src/components/seo/metadata.ts) задават заглавие, описание, canonical, Open Graph и Twitter.
- **Структурирани данни:** JSON-LD се рендира на сървъра като обикновен `<script>`, за да се вижда от ботове без JavaScript. Използват се `WebPage`, `Service`, `Person`, `ProfilePage`, `ContactPage`, `CollectionPage`, `ItemList`, `Blog`, `BlogPosting` и `BreadcrumbList`.
- **Sitemap и robots:** [`src/app/sitemap.ts`](src/app/sitemap.ts) използва реални дати само за статиите (`updatedAt` или `publishedAt`). Адресите `/api/*` носят `X-Robots-Tag: noindex, nofollow`.
- **AI търсачки:** [`public/llms.txt`](public/llms.txt) в стандартния формат, отговор в началото на секциите, самостоятелни пасажи и последователна информация за автора и фирмата.
- **Вътрешно свързване:** автоматични свързани статии, основни ръководства на началната страница и в страниците на услугите.

## Защита на контактите

Имейлът и телефонът са видими за хора, Google и AI, но не се срещат като цял низ в HTML-а:

- На екрана текстът е разделен на части, които се четат като цяло.
- Връзките `mailto:` и `tel:` се създават при посочване, фокус или докосване.
- В JSON-LD стойностите са записани с unicode escape, който JSON парсерите декодират.

Реализация: [`src/lib/contact.ts`](src/lib/contact.ts) и [`src/components/ProtectedContact.tsx`](src/components/ProtectedContact.tsx). Защитата ограничава прости скенери и не замества формата с reCAPTCHA.

## Структура на проекта

```text
src/
├── app/                    # Маршрути (App Router)
│   ├── blog/               # Блог и MDX статии (posts/)
│   ├── seo-uslugi/         # SEO услуги
│   ├── web/                # Уеб услуги
│   ├── seo-proekti/        # Казуси
│   ├── za-men/, kontakti/  # За мен и контакти
│   ├── api/                # Маршрути за OG изображения и достъп
│   ├── sitemap.ts, robots.ts
│   └── layout.tsx
├── components/
│   ├── seo/                # Блокове за страниците, JSON-LD, шаблони, инструменти
│   ├── blog/               # Статии, свързани статии, съдържание
│   ├── Header.tsx, Footer.tsx, ProtectedContact.tsx
│   └── mdx.tsx             # Компоненти за MDX съдържанието
├── lib/                    # Имейл, Telegram, защита на контакти
├── resources/              # Конфигурация, съдържание, услуги, иконки
└── utils/                  # Помощни функции за MDX и теми
public/                     # Изображения, llms.txt, шрифтове
```

## Започване

**Изисквания:** Node.js 20.9 или по-нова (препоръчително 22) и npm.

```bash
git clone https://github.com/stantchev/stanchev.git
cd stanchev
npm install
npm run dev
```

Сайтът е на [http://localhost:3000](http://localhost:3000).

| Команда | Описание |
| --- | --- |
| `npm run dev` | Среда за разработка |
| `npm run build` | Продукционен build |
| `npm run start` | Стартира продукционния build |
| `npm run lint` | ESLint |

## Променливи на средата

Създайте `.env.local` в корена на проекта. Build-ът не изисква тези стойности, но функциите зависят от тях.

| Променлива | Предназначение |
| --- | --- |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Публичен ключ за reCAPTCHA v3 във формата |
| `RECAPTCHA_SECRET` | Таен ключ за проверка на reCAPTCHA на сървъра |
| `SMTP_USER`, `SMTP_PASS` | Достъп до пощата за изпращане на запитвания |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | Известия в Telegram (по избор) |
| `PAGE_ACCESS_PASSWORD` | Парола за защитени страници |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (по избор) |

Никога не добавяйте тези стойности в хранилището.

## Добавяне на съдържание

### Статия в блога

Създайте файл в `src/app/blog/posts/<slug>.mdx`:

```mdx
---
title: "Заглавие до 60 знака"
summary: "Описание до около 155 знака."
keywords: ["ключова дума", "друга ключова дума"]
publishedAt: "2026-01-15"
updatedAt: "2026-03-01"
tag: "SEO"
image: /images/posts/<slug>.jpg
---

Текст на статията. Основните раздели са с H2.
```

- Картинката от `image` се показва в началото на статията, затова не я добавяйте повторно в текста.
- Темата (SEO и GEO, Уеб разработка, AI, Киберсигурност) се определя от `tag`.
- В MDX могат да се ползват компоненти на Once UI: `Table`, `AccordionGroup`, `Timeline`, `BlockQuote`, `Grid`, `Column`, `BarChart` и други.

### SEO казус

Добавете MDX файл в `src/app/work/projects/`. Казусите се показват на `/seo-proekti`.

### Услуга

Редактирайте или добавете запис в `src/resources/services.ts`. Страницата, sitemap-ът и връзките се обновяват автоматично. Уникалното оформление на страница се намира в `src/app/seo-uslugi/*` и `src/app/web/*`.

## Качване във Vercel

1. Импортирайте хранилището във [Vercel](https://vercel.com/new). Framework се разпознава като Next.js.
2. Задайте променливите на средата от таблицата по-горе.
3. Build командата е `npm run build`, а изходната директория е по подразбиране.
4. След първото качване подайте sitemap-а (`/sitemap.xml`) в Google Search Console и заявете индексиране на основните страници.

## Лиценз

Проектът е лицензиран под **GNU Affero General Public License v3.0**. Вижте [LICENSE](LICENSE).

---

<div align="center">

**Stanchev Digital** · [stanchev.bg](https://stanchev.bg) · [Контакти](https://stanchev.bg/kontakti)

</div>
