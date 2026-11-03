import { Column, Table } from "@once-ui-system/core";
import { CodeBlock } from "@once-ui-system/core/code";
import { SectionTitle } from "@/components/seo/blocks";
import { serviceMetadata } from "@/components/seo/metadata";
import { OptionTabs } from "@/components/seo/WebInteractive";
import { WebServiceShell } from "@/components/seo/WebServiceShell";
import { getService } from "@/resources/services";

export const metadata = serviceMetadata("izrabotka-sait-nextjs");

const s = getService("izrabotka-sait-nextjs")!;

const heroCode = `// app/blog/[slug]/page.tsx - страницата е готов HTML
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post.title, alternates: { canonical: \`/blog/\${slug}\` } };
}`;

const ssg = `// SSG: страниците се строят при публикуване
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}`;
const isr = `// ISR: статично, но се обновява по график
export const revalidate = 3600; // най-много веднъж на час`;
const ssr = `// SSR: рендира се при всяка заявка
export const dynamic = "force-dynamic";`;
const csr = `"use client";
// CSR: за интерактивни части, които не са нужни на търсачките
useEffect(() => {
  fetch("/api/stock").then((r) => r.json()).then(setStock);
}, []);`;

export default function Page() {
  return (
    <WebServiceShell
      slug="izrabotka-sait-nextjs"
      tags={[{ label: "Next.js", scheme: "brand" }, { label: "React" }, { label: "TypeScript" }]}
      h1="Изработка на сайт с Next.js: бърз за хората и за търсачките"
      lead="Next.js рендира страниците на сървъра, така че съдържанието е в HTML-а от първия миг. Резултатът е бързо зареждане, сигурна индексация и пълен контрол над SEO в кода."
      visual={<CodeBlock codes={[{ code: heroCode, language: "tsx", label: "page.tsx" }]} copyButton />}
      glow={{ color: "accent", style: "lines" }}
      answer={{
        title: "Защо Next.js е добър избор за сайт?",
        text: "Next.js е React framework със сървърно рендиране и статична генерация. Търсачките получават готов HTML, страниците се зареждат бързо, а метаданните, sitemap и структурираните данни се управляват в кода. Това не гарантира позиции, но премахва технически пречки за добро SEO.",
      }}
      before={
        <Column gap="24">
          <SectionTitle eyebrow="Рендиране" title="Четири начина да се рисува страница" lead="Избирам според това какво е нужно на всяка страница, не един режим за целия сайт." />
          <OptionTabs
            accent="accent"
            options={[
              { key: "ssg", label: "SSG", title: "Статична генерация", tag: "най-бързо", text: "Страниците се строят предварително и се сервират от CDN. Подходящо за услуги, статии и каталози.", points: ["Най-бърз старт", "Най-добро за SEO", "Нужно е ново пускане при промяна, освен с ISR"], code: { code: ssg, language: "tsx", label: "SSG" } },
              { key: "isr", label: "ISR", title: "Инкрементална регенерация", text: "Статични страници, които се обновяват на зададен интервал или при събитие. Подходящо за съдържание, което се променя.", points: ["Бързо като SSG", "Свежо съдържание без ново пускане"], code: { code: isr, language: "tsx", label: "ISR" } },
              { key: "ssr", label: "SSR", title: "Сървърно рендиране", text: "Страницата се прави при всяка заявка. Подходящо за персонализирано или често променящо се съдържание.", points: ["Винаги актуално", "По-висока цена на сървъра"], code: { code: ssr, language: "tsx", label: "SSR" } },
              { key: "csr", label: "CSR", title: "Рендиране в браузъра", text: "За интерактивни части, които не са нужни на търсачките: табла, филтри, калкулатори.", points: ["Гъвкаво", "Не за основното съдържание"], code: { code: csr, language: "tsx", label: "CSR" } },
            ]}
          />
        </Column>
      }
      includes={s.includes}
      includesTitle="Какво получавате с Next.js"
      includesLead="Шест неща, с които разликата се вижда и от Google."
      after={
        <Column gap="24">
          <SectionTitle eyebrow="Честно" title="Кога Next.js не е правилният избор" lead="Не всеки сайт има нужда от него." />
          <Table
            data={{
              headers: [
                { content: "Ситуация", key: "a" },
                { content: "По-добър избор", key: "b" },
              ],
              rows: [
                ["Малък сайт, редактиран от нетехнически екип", "WordPress или headless WordPress"],
                ["Много малък бюджет и прост сайт", "Готова тема на WordPress"],
                ["Нужни са стотици готови плъгини", "WordPress"],
                ["Сайтът е само вътрешно приложение без SEO", "React приложение"],
              ],
            }}
          />
        </Column>
      }
      processTitle="Как протича разработката с Next.js"
      processLead="От архитектурата до пускането и измерването."
      side={{ icon: "nextjs", title: "SEO в кода", text: "Метаданни, sitemap и schema от един източник." }}
      priceTitle="Цена на сайт с Next.js"
      priceLead="Цената зависи от обхвата. Първоначален разговор до 30 минути е безплатен."
      faqTitle="Често задавани въпроси за сайт с Next.js"
      faqExtra={[
        { q: "Какво е SSR, SSG и ISR?", a: "SSR рендира страницата при всяка заявка, SSG я строи предварително, а ISR е статична страница, която се обновява по график или събитие. Избирам режима според всяка страница." },
        { q: "Мога ли сам да редактирам съдържанието на сайт с Next.js?", a: "Да, ако включим CMS, например WordPress като headless панел или друг редакторски панел. Така редактирате лесно, а сайтът остава бърз." },
        { q: "Как се хоства сайт с Next.js?", a: "На платформи като Vercel или на собствен сървър с Node.js. Препоръчвам според трафика и бюджета." },
      ]}
      guides={["app-router-vs-pages-router-migraciya-i-kakvo-da-ochakvash", "nextjs-performance-optimization-image-font-script-ot-nulata", "server-components-vs-client-components-v-nextjs-16"]}
      closing={{ title: "Нека изградим бърз сайт с Next.js", text: "Опишете проекта си. Първоначалният разговор до 30 минути е безплатен." }}
    />
  );
}
