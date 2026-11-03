import { Column } from "@once-ui-system/core";
import { CodeBlock } from "@once-ui-system/core/code";
import { SectionTitle } from "@/components/seo/blocks";
import { serviceMetadata } from "@/components/seo/metadata";
import { OptionTabs } from "@/components/seo/WebInteractive";
import { WebServiceShell } from "@/components/seo/WebServiceShell";
import { getService } from "@/resources/services";

export const metadata = serviceMetadata("react-spa");

const s = getService("react-spa")!;

const spaHtml = `<!-- SPA без SSR: това получава ботът първоначално -->
<html>
  <head><title>Приложение</title></head>
  <body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
  </body>
</html>`;

const ssrHtml = `<!-- С SSR или SSG: съдържанието е вече в HTML -->
<html>
  <head>
    <title>Услуги | Бранд</title>
    <meta name="description" content="Кратко описание на страницата." />
    <link rel="canonical" href="https://example.com/uslugi" />
  </head>
  <body>
    <h1>Услуги</h1>
    <p>Видимият текст е в HTML от първия миг.</p>
  </body>
</html>`;

const prerender = `// Пререндеринг: ботовете получават готов HTML от услуга
// nginx - примерно правило за ботове
if ($http_user_agent ~* "googlebot|bingbot") {
  proxy_pass https://prerender.example.com;
}`;

const migrate = `// Миграция на маршрут към Next.js (стъпка по стъпка)
// 1. Публичните страници се местят към SSG/SSR
// 2. Интерактивните части остават клиентски компоненти
"use client";
export function Calculator() { /* ... */ }`;

export default function Page() {
  return (
    <WebServiceShell
      slug="react-spa"
      tags={[{ label: "React", scheme: "brand" }, { label: "SSR" }, { label: "Индексация" }]}
      h1="React приложения, които Google може да индексира"
      lead="Чистите едностранични приложения често не се индексират добре. Подготвям React проекти със сървърно или статично рендиране там, където SEO е важно, и клиентска интерактивност там, където не е."
      visual={
        <CodeBlock
          codes={[
            { code: spaHtml, language: "html", label: "SPA" },
            { code: ssrHtml, language: "html", label: "С SSR" },
          ]}
          copyButton
        />
      }
      glow={{ color: "accent", style: "dots" }}
      answer={{
        title: "Индексира ли Google React приложения?",
        text: "Google може да изпълнява JavaScript, но индексирането на едностранично приложение е по-бавно и по-рисково от това на страница с готов HTML. За публичните страници, които трябва да се намират в търсачките, най-надеждно е сървърно или статично рендиране, а за интерактивните части може да остане клиентско рендиране.",
        note: "Източниците препоръчват уникални метаданни за всеки маршрут и проверка с URL Inspection.",
      }}
      before={
        <Column gap="24">
          <SectionTitle eyebrow="Решения" title="Как се решава проблемът с индексацията" lead="Четири пътя. Избирам по състоянието на вашето приложение." />
          <OptionTabs
            accent="accent"
            options={[
              { key: "ssr", label: "SSR или SSG", title: "Рендиране на сървъра", tag: "препоръчано", text: "Публичните страници се рендират на сървъра или предварително. Най-надеждно е за нов проект.", points: ["Съдържание в HTML", "Метаданни за всеки маршрут", "Бърз старт"], code: { code: ssrHtml, language: "html", label: "HTML" } },
              { key: "prerender", label: "Пререндеринг", title: "Готов HTML за ботове", text: "Подходящо, когато приложението вече работи и промяната на архитектурата е рисково.", points: ["По-малко промени в кода", "Допълнителна услуга и поддръжка"], code: { code: prerender, language: "bash", label: "пример" } },
              { key: "migrate", label: "Към Next.js", title: "Поетапна миграция", text: "Публичните страници се местят към Next.js, а интерактивните части остават клиентски компоненти.", points: ["Контролиран риск", "Най-добър дългосрочен резултат"], code: { code: migrate, language: "tsx", label: "стратегия" } },
              { key: "spa", label: "Само SPA", title: "Когато SEO не е нужно", text: "Вътрешни табла и приложения зад вход не се нуждаят от индексация. Там клиентското рендиране е напълно подходящо.", points: ["Просто и бързо", "Не за публични страници"] },
            ]}
          />
        </Column>
      }
      includes={s.includes}
      includesTitle="Какво получавате"
      includesLead="Шест стъпки към приложение, което се индексира."
      processTitle="Как протича работата"
      processLead="От прегледа до проверката на индексацията."
      side={{ icon: "react", title: "Проверено в Google", text: "URL Inspection показва какво вижда ботът." }}
      priceTitle="Цена на React приложение със SEO"
      priceLead="Цената зависи от състоянието на приложението и обхвата."
      faqTitle="Често задавани въпроси за React и SEO"
      faqExtra={[
        { q: "Как да проверя дали Google вижда съдържанието ми?", a: "С инструмента URL Inspection в Search Console и с преглед на изходния HTML. Ако текстът го няма в HTML, а се появява след JavaScript, индексацията е по-рискова." },
        { q: "Трябва ли метаданни за всеки маршрут?", a: "Да. Всяка страница има нужда от собствено заглавие, описание и canonical адрес. В Next.js това става чрез Metadata API." },
        { q: "Мога ли да запазя приложението си и да добавя SEO?", a: "Често да, с пререндеринг или поетапна миграция на публичните страници. Правя кратък преглед и предлагам най-малко рисковия път." },
      ]}
      guides={["react-ili-wordpress-koe-da-izbera-za-proekta-si-2026", "app-router-vs-pages-router-migraciya-i-kakvo-da-ochakvash", "server-components-vs-client-components-v-nextjs-16"]}
      closing={{ title: "Нека направим приложението ви видимо", text: "Опишете проекта. Първоначалният разговор до 30 минути е безплатен." }}
    />
  );
}
