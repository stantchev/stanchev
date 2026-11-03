import { Background, Button, Column, Grid, Heading, Icon, Line, Mask, MatrixFx, Row, Table, Tag, Text, type IconName } from "@once-ui-system/core";
import { CodeBlock } from "@once-ui-system/core/code";
import { GeoBackground } from "@/components/seo/GeoBackground";
import { JsonLd } from "@/components/seo/JsonLd";
import { RevealOnView } from "@/components/seo/RevealOnView";
import { buildMetadata } from "@/components/seo/metadata";
import { Checklist, Faq, SectionTitle, Trail } from "@/components/seo/blocks";
import { FeaturesBordered } from "@/components/seo/Features";
import { FeaturesTimeline } from "@/components/seo/FeaturesMore";
import { baseURL } from "@/resources";
import { servicePath, servicesOf } from "@/resources/services";

const path = "/web";
const title = "Изработка на сайт и уеб разработка - цени | Stanchev Digital";
const description =
  "Изработка на сайт и уеб разработка със SEO в кода: Next.js, WordPress, цени в евро, какво е включено и как да сравните оферти. Работя дистанционно.";

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords: ["изработка на сайт", "изработка на уебсайт", "цена на изработка на сайт", "колко струва сайт", "изработка на фирмен сайт", "изработка на онлайн магазин", "уеб разработка", "next.js сайт", "headless wordpress", "оптимизация на сайт", "core web vitals", "geo оптимизация", "уеб разработчик"],
});

const list = servicesOf("web");

const heroCode = `// app/uslugi/page.tsx - SEO е част от кода, не добавка
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги | Бранд",
  description: "Кратко, конкретно описание на страницата.",
  alternates: { canonical: "/uslugi" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Изработка на сайт",
    areaServed: "BG",
  };
  return (
    <main>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <h1>Изработка на сайт</h1>
    </main>
  );
}`;

const lighthouseCode = `# Измерване преди и след всяка промяна
npx lighthouse https://example.com \\
  --only-categories=performance,seo,accessibility \\
  --output=html --output-path=./report.html`;

const flow: { icon: IconName; title: string; text: string }[] = [
  { icon: "globe", title: "Браузър и обхождащи ботове", text: "Получават готов HTML, не празна страница." },
  { icon: "cloud", title: "CDN и кеш", text: "Статичното съдържание идва от най-близкия сървър." },
  { icon: "nextjs", title: "Next.js", text: "SSG и SSR, metadata, sitemap, оптимизирани изображения." },
  { icon: "wordpress", title: "Съдържание (по избор)", text: "WordPress или друг CMS през API за редакторите." },
];

const spec: [string, string, string][] = [
  ["Рендиране", "SSG или SSR на сървъра", "Търсачките и AI ботовете виждат съдържанието без изпълнение на JavaScript"],
  ["Метаданни", "Metadata API на Next.js", "Уникални title, description, canonical и Open Graph за всяка страница"],
  ["Структурирани данни", "JSON-LD в HTML", "Ясна идентичност на организация, услуги и статии за Google и AI"],
  ["Sitemap и robots", "Генерирани от кода", "Картата на сайта винаги съответства на реалните страници"],
  ["Изображения", "next/image, AVIF и WebP", "По-малки файлове и зададени размери срещу скокове на оформлението"],
  ["Шрифтове", "next/font", "Без външни заявки и мигане на текста"],
  ["Пренасочвания", "301 карта при миграция", "Запазват се позициите и линковете от стария сайт"],
  ["Достъпност", "Семантичен HTML", "По-добро изживяване и по-ясна структура за обхождане"],
];

const budgets: { metric: string; target: string; note: string }[] = [
  { metric: "LCP", target: "≤ 2,5 s", note: "Най-голямото съдържание се зарежда бързо" },
  { metric: "INP", target: "≤ 200 ms", note: "Страницата реагира веднага на действие" },
  { metric: "CLS", target: "≤ 0,1", note: "Нищо не подскача по време на зареждане" },
];

const matrix: [string, string, string, string][] = [
  ["Скорост", "Много висока", "Зависи от теми и плъгини", "Много висока"],
  ["Редакторско изживяване", "Нужен е панел или CMS", "Познат панел", "Познат панел"],
  ["Контрол над SEO", "Пълен, в кода", "Чрез плъгини", "Пълен, в кода"],
  ["Сложност и цена", "По-висока", "По-ниска", "Средна до висока"],
  ["Подходящо за", "Бързи сайтове и приложения", "Малки сайтове и блогове", "Екипи на WordPress с нужда от скорост"],
];

const included: { icon: IconName; title: string; description: string }[] = [
  { icon: "code", title: "Чист код и бързо зареждане", description: "Сървърно рендиране, оптимизирани изображения и шрифтове, цели за Core Web Vitals." },
  { icon: "search", title: "SEO основа", description: "Структура на заглавията, адреси, метаданни, sitemap, robots и canonical." },
  { icon: "document", title: "Структурирани данни", description: "JSON-LD за организация, услуги и статии, валидиран преди пускане." },
  { icon: "globe", title: "Мобилна версия", description: "Адаптивен дизайн, тестван на реални размери на екрана." },
  { icon: "lock", title: "HTTPS и сигурност", description: "Защитена връзка, обновени зависимости и ограничени достъпи." },
  { icon: "box", title: "Предаване на проекта", description: "Получавате кода, достъпите и кратка документация. Сайтът е ваш." },
];

const siteTypes: { icon: IconName; title: string; description: string }[] = [
  { icon: "briefcase", title: "Фирмен сайт", description: "Представяне на услуги, екип и контакти, с акцент върху запитванията." },
  { icon: "box", title: "Онлайн магазин", description: "WooCommerce, OpenCart, Magento или персонализирано решение с SEO за категориите." },
  { icon: "target", title: "Landing страница", description: "Една страница за една цел: реклама, събитие или нова услуга." },
  { icon: "document", title: "Блог и медия", description: "Бързо публикуване, добра структура и готовност за търсачките." },
  { icon: "react", title: "Уеб приложение", description: "Интерактивни React приложения, които остават видими за търсачките." },
  { icon: "trendingUp", title: "Миграция и редизайн", description: "Нов сайт без загуба на позиции: карта на 301 и проверки преди пускане." },
];

const costDrivers = [
  "Брой и тип страници: малък фирмен сайт или каталог с много продукти.",
  "Дизайн: готова основа или изцяло индивидуален дизайн.",
  "Функционалност: форми, плащания, интеграции, потребителски акаунти.",
  "Съдържание: имате ли готови текстове и изображения, или трябва да се подготвят.",
  "Платформа: Next.js, WordPress, headless или магазин на OpenCart и Magento.",
  "След пускането: поддръжка, хостинг и домейн, които се плащат отделно на доставчиците им.",
];

const quoteChecklist = [
  "Фиксирана цена и обхват в писмен вид, а не само цена на час без таван.",
  "Какво точно е включено: дизайн, SEO основа, структурирани данни, пренасочвания.",
  "Срок с ясни етапи и дата за приемане.",
  "Кой притежава кода, домейна и достъпите след края на проекта.",
  "Какви са скритите разходи: хостинг, лицензи за плъгини, поддръжка.",
  "Измерима скорост: цели за Core Web Vitals и проверка преди пускане.",
  "Реални примери и проекти, които можете да отворите и проверите.",
];

const templateMatrix: [string, string, string][] = [
  ["Скорост на старта", "По-бързо", "По-дълго"],
  ["Уникалност и марка", "Ограничена от темата", "Пълна"],
  ["Скорост на сайта", "Зависи от темата и плъгините", "Оптимизирана за целта"],
  ["SEO и структурирани данни", "Чрез плъгини", "Вградени в кода"],
  ["Подходящо за", "Малък бюджет и прост сайт", "Бизнес, който разчита на сайта"],
];

const faq = [
  { q: "Next.js или WordPress?", a: "Next.js дава най-добра скорост и пълен контрол над SEO в кода. WordPress е по-познат за редакторите и по-евтин за малки сайтове. Често най-добрият избор е headless WordPress - удобно управление със скоростта на Next.js." },
  { q: "Включено ли е SEO в изработката?", a: "Да. Основите - структура, заглавия, адреси, скорост, структурирани данни, sitemap и canonical - са част от изработката, не допълнителна услуга." },
  { q: "Какво е headless WordPress?", a: "WordPress остава панел за съдържание, а сайтът, който виждат посетителите, е изграден с Next.js и взема съдържанието през API. Така редакторите работят с познатия панел, а сайтът е бърз." },
  { q: "Кой притежава сайта след приключване?", a: "Вие. Предавам кода, достъпите и кратка документация." },
  { q: "Гарантирате ли оценка 100 в Lighthouse?", a: "Не. Оценката зависи от съдържанието, скриптовете на трети страни и устройството. Поставям цели за Core Web Vitals и измервам преди и след промените." },
  { q: "Как сайтът става видим за AI търсачки?", a: "Чрез съдържание в HTML, ясна структура, директни отговори, структурирани данни и достъп за AI обхождащите ботове. Никой не може да гарантира цитиране, но тези основи го правят по-вероятно." },
  { q: "Поддържате ли сайтове, които не сте правили?", a: "Да, след кратък преглед на състоянието им." },
  { q: "Колко струва изработката на сайт?", a: "Изработка на сайт е от 410 €, сайт с Next.js е от 250 €, а оптимизация на съществуващ сайт е от 230 €. Цената зависи от броя страници, дизайна и функциите, затова давам писмена оферта след кратък преглед." },
  { q: "Какво влиза в цената и какво се плаща отделно?", a: "В цената на изработката влизат разработката, SEO основата, структурираните данни, мобилната версия и предаването на проекта. Хостингът и домейнът се плащат отделно на доставчиците им, а поддръжката след пускането е по желание." },
  { q: "Готов шаблон или изцяло индивидуален сайт?", a: "Шаблонът е по-бърз и по-евтин, но ограничава уникалността и често товари сайта с ненужен код. Индивидуалният сайт е оптимизиран за вашата цел и има SEO в кода. Избираме заедно според бюджета и ролята на сайта за бизнеса ви." },
  { q: "Можете ли да изработите сайта по наш готов дизайн?", a: "Да. Ако имате дизайн или фирмена идентичност, изграждам сайта по тях и ги адаптирам за мобилни устройства и скорост." },
  { q: "Ще мога ли сам да редактирам съдържанието?", a: "Да, ако изберем WordPress или headless WordPress с познат панел. При чист Next.js редакциите минават през код или през CMS, който включваме в проекта." },
  { q: "Нужно ли е да се срещаме лично?", a: "Не е задължително. Работя дистанционно с клиенти от цялата страна, а при нужда провеждаме видеоразговор." },
  { q: "Колко време отнема изработката на сайт?", a: "Малък сайт - обикновено няколко седмици. По-голям сайт, магазин или такъв с интеграции - според обхвата, който уточняваме предварително." },
  { q: "Колко струва уеб услугата?", a: "Изработка на сайт е от 410 €, сайт с Next.js от 250 €, оптимизация на сайт от 230 €, а поддръжка от 75 €. Крайната цена зависи от обхвата, затова давам оферта след кратък преглед." },
];

export default function WebPage() {
  const url = `${baseURL}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: title, description, inLanguage: "bg-BG", breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#list` } },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        itemListElement: list.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `${baseURL}${servicePath(s)}` })),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        serviceType: "Изработка на сайт и уеб разработка",
        name: "Изработка на сайт",
        description,
        url,
        areaServed: { "@type": "Country", name: "България" },
        provider: { "@type": "ProfessionalService", name: "Stanchev Digital", url: baseURL },
        offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: 410, priceCurrency: "EUR" } },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name: "Уеб услуги", item: url },
        ],
      },
    ],
  };

  return (
    <Column fillWidth horizontal="center" paddingBottom="64" gap="48" s={{ paddingBottom: "40", gap: "32" }}>
      <JsonLd data={schema} />

      <Column fillWidth horizontal="center" paddingTop="8" paddingBottom="16">
        <Background
          position="absolute"
          fill
          pointerEvents="none"
          style={{ left: "50%", width: "100vw", transform: "translateX(-50%)", top: "-24px", height: "calc(100% + 24px)" }}
          lines={{ display: true, size: "24", thickness: 1, angle: 0, color: "neutral-alpha-weak", opacity: 50 }}
          mask={{ x: 50, y: 0, radius: 100 }}
        />
        <Column zIndex={1} maxWidth="l" fillWidth gap="32">
          <Trail items={[{ label: "Начало", href: "/" }, { label: "Уеб услуги" }]} />
          <Row fillWidth gap="40" vertical="center" m={{ direction: "column" }}>
            <Column flex={5} gap="24" fillWidth>
              <Row gap="8" wrap>
                <Tag size="m">Next.js</Tag>
                <Tag size="m">React</Tag>
                <Tag size="m">TypeScript</Tag>
                <Tag size="m">WordPress</Tag>
              </Row>
              <Heading as="h1" variant="display-strong-l" wrap="balance">
                Изработка на сайт и уеб разработка със SEO в кода
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
                Бързи сайтове с Next.js, React и headless WordPress. Сървърно рендиране, метаданни, структурирани данни и Core Web Vitals са част от архитектурата, за да са видими за Google и за AI търсачките.
              </Text>
              <Row gap="12" s={{ direction: "column" }}>
                <Button href="/kontakti" size="l" arrowIcon>Запитване</Button>
                <Button href="#ceni" size="l" variant="secondary">Цени</Button>
              </Row>
            </Column>
            <Column flex={6} fillWidth minWidth={0}>
              <CodeBlock
                codes={[
                  { code: heroCode, language: "tsx", label: "page.tsx" },
                  { code: lighthouseCode, language: "bash", label: "измерване" },
                ]}
                copyButton
              />
            </Column>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <RevealOnView>
            <Column fillWidth gap="12" paddingLeft="24" style={{ borderLeft: "3px solid var(--brand-solid-medium)" }}>
              <Heading as="h2" variant="heading-strong-xl" wrap="balance">
                Какво е уеб разработка със SEO в кода?
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-medium">
                Това е изработка на сайт, при която видимостта в търсачките се проектира от първия ред код: съдържанието е в HTML, всяка страница има собствени метаданни и структурирани данни, а скоростта се измерва и поддържа. Така не се налага SEO да се &quot;закърпва&quot; след пускането.
              </Text>
            </Column>
          </RevealOnView>

          <Column gap="24">
            <SectionTitle eyebrow="Архитектура" title="Как пътува една заявка" lead="Опростена схема на типичен сайт с Next.js и по избор headless CMS." />
            <RevealOnView>
              <Row fillWidth gap="8" s={{ direction: "column" }} vertical="stretch">
                {flow.map((f, i) => (
                  <Row key={f.title} flex={1} fillWidth gap="8" vertical="center" s={{ direction: "column" }}>
                    <Column fillWidth flex={1} padding="20" gap="12" radius="l" border="neutral-alpha-medium" background="surface" overflow="hidden">
                      {i === 2 && (
                        <Mask position="absolute" right="0" top="0" radius={33} x={75} y={0}>
                          <MatrixFx size={1.5} colors={["brand-background-strong"]} flicker />
                        </Mask>
                      )}
                      <Row gap="8" vertical="center">
                        <Icon name={f.icon} size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" />
                        <Text variant="code-default-s" onBackground="neutral-weak">{`0${i + 1}`}</Text>
                      </Row>
                      <Heading as="h3" variant="heading-strong-s">{f.title}</Heading>
                      <Text variant="body-default-s" onBackground="neutral-weak">{f.text}</Text>
                    </Column>
                    {i < flow.length - 1 && (
                      <>
                        <Row s={{ hide: true }}><Icon name="arrowRight" size="s" onBackground="neutral-weak" /></Row>
                        <Row hide s={{ hide: false }}><Icon name="chevronDown" size="s" onBackground="neutral-weak" /></Row>
                      </>
                    )}
                  </Row>
                ))}
              </Row>
            </RevealOnView>
          </Column>

          <Column gap="24">
            <SectionTitle eyebrow="Спецификация" title="Какво е вградено във всеки проект" lead="Стандартна основа, която не е допълнителна услуга." />
            <Table
              data={{
                headers: [
                  { content: "Област", key: "a" },
                  { content: "Как", key: "b" },
                  { content: "Защо", key: "c" },
                ],
                rows: spec.map(([a, b, c]) => [a, b, c]),
              }}
            />
          </Column>

          <Column gap="24">
            <SectionTitle eyebrow="Скорост" title="Бюджет за Core Web Vitals" lead="Целите са прагът &quot;добро&quot; на Google за потребителски опит. Измервам преди и след промените." />
            <RevealOnView>
              <Grid fillWidth columns={3} s={{ columns: 1 }} gap="16">
                {budgets.map((b) => (
                  <Column key={b.metric} padding="24" gap="8" radius="l" border="neutral-alpha-medium" background="surface">
                    <Text variant="code-default-s" onBackground="brand-weak">{b.metric}</Text>
                    <Text variant="display-strong-m">{b.target}</Text>
                    <Line />
                    <Text variant="body-default-s" onBackground="neutral-weak">{b.note}</Text>
                  </Column>
                ))}
              </Grid>
            </RevealOnView>
          </Column>

          <Column gap="24" id="moduli">
            <SectionTitle eyebrow="Услуги" title="Модули" lead="Избирате само това, което ви трябва. Цените са стартови, в евро." />
            <RevealOnView>
              <Column fillWidth radius="l" border="neutral-alpha-medium" background="surface" overflow="hidden">
                {list.map((s, i) => (
                  <Row key={s.slug} fillWidth paddingX="20" paddingY="16" gap="16" vertical="center" borderTop={i === 0 ? undefined : "neutral-alpha-weak"} s={{ direction: "column", vertical: "start", gap: "8" }}>
                    <Row gap="12" vertical="center" flex={4} fillWidth>
                      <Text variant="code-default-s" onBackground="neutral-weak">{String(i + 1).padStart(2, "0")}</Text>
                      <Icon name={s.icon} size="s" onBackground="brand-weak" />
                      <Text variant="label-strong-m"><a href={servicePath(s)} style={{ color: "inherit" }}>{s.name}</a></Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak" style={{ flex: 5 }}>{s.summary}</Text>
                    <Row flex={2} horizontal="end" s={{ horizontal: "start" }}>
                      <Tag size="s" scheme={s.priceFrom === "По договаряне" ? "neutral" : "brand"}>{s.priceFrom}</Tag>
                    </Row>
                  </Row>
                ))}
              </Column>
            </RevealOnView>
          </Column>

          <Column gap="24" id="ceni">
            <SectionTitle eyebrow="Цени" title="Колко струва изработката на сайт" lead="Стартови цени в евро. Крайната цена зависи от обхвата, а оферта получавате писмено след кратък преглед." />
            <Table
              data={{
                headers: [
                  { content: "Услуга", key: "a" },
                  { content: "Цена", key: "b" },
                ],
                rows: list.filter((s) => s.priceFrom !== "По договаряне").map((s) => [<a key={s.slug} href={servicePath(s)}>{s.name}</a>, s.priceFrom]),
              }}
            />
            <Column gap="12">
              <Heading as="h3" variant="heading-strong-m">От какво зависи цената</Heading>
              <Checklist items={costDrivers} />
            </Column>
          </Column>

          <RevealOnView>
            <FeaturesBordered title="Какво е включено в изработката" lead="Основите са част от цената, не допълнителна услуга." items={included} />
          </RevealOnView>

          <RevealOnView>
            <FeaturesBordered title="Какви сайтове изработвам" lead="От фирмен сайт до уеб приложение и миграция." items={siteTypes} />
          </RevealOnView>

          <Column gap="24">
            <SectionTitle eyebrow="Избор на технология" title="Next.js, WordPress или headless" lead="Няма универсално най-добър избор. Ето как се различават на практика." />
            <Table
              data={{
                headers: [
                  { content: "", key: "k" },
                  { content: "Next.js", key: "n" },
                  { content: "WordPress", key: "w" },
                  { content: "Headless WP", key: "h" },
                ],
                rows: matrix.map(([k, n, w, h]) => [k, n, w, h]),
              }}
            />
          </Column>

          <FeaturesTimeline
            title="От бриф до пускане"
            lead="Шест стъпки, всяка с проверка."
            steps={[
              { title: "Бриф и цели", description: "Какво трябва да прави сайтът и как ще мерим успеха." },
              { title: "Структура и SEO план", description: "Страници, адреси, ключови думи и структурирани данни още преди дизайна." },
              { title: "Разработка", description: "Компоненти, шаблони и интеграции с TypeScript." },
              { title: "Тестове", description: "Скорост, достъпност, индексиране и проверка на пренасочванията." },
              { title: "Пускане", description: "Публикуване, Search Console, sitemap и наблюдение." },
              { title: "Поддръжка", description: "Обновявания, сигурност и измерване след пускането." },
            ]}
            side={
              <Column fillWidth radius="l" border overflow="hidden" padding="m" gap="12" minWidth={0}>
                <Text variant="label-strong-s">Измерване от командния ред</Text>
                <CodeBlock codes={[{ code: lighthouseCode, language: "bash", label: "lighthouse" }]} copyButton />
              </Column>
            }
          />

          <RevealOnView>
            <FeaturesBordered
              title="Проверки преди пускане"
              lead="Така не губите позиции при смяна на сайт."
              items={[
                { icon: "search", title: "Индексиране", description: "Няма noindex по грешка, а robots и sitemap са верни." },
                { icon: "arrowRight", title: "Пренасочвания", description: "Всеки стар адрес води към правилния нов с 301." },
                { icon: "document", title: "Метаданни", description: "Уникални title и description, canonical на всяка страница." },
                { icon: "code", title: "Структурирани данни", description: "JSON-LD е валиден и отговаря на видимото съдържание." },
                { icon: "lighthouse", title: "Core Web Vitals", description: "Измерени LCP, INP и CLS на ключовите шаблони." },
                { icon: "lock", title: "Сигурност", description: "HTTPS, обновени зависимости и ограничени достъпи." },
              ]}
            />
          </RevealOnView>

          <Column gap="24">
            <SectionTitle eyebrow="Избор" title="Готов шаблон или индивидуален сайт" lead="И двата варианта имат място, зависи от ролята на сайта за бизнеса." />
            <Table
              data={{
                headers: [
                  { content: "", key: "k" },
                  { content: "Готов шаблон", key: "t" },
                  { content: "Индивидуален сайт", key: "c" },
                ],
                rows: templateMatrix.map(([k, a, b]) => [k, a, b]),
              }}
            />
          </Column>

          <Column gap="24">
            <SectionTitle eyebrow="Преди да изберете" title="Как да сравнявате оферти за сайт" lead="Седем въпроса, които можете да зададете на всеки изпълнител, включително на мен." />
            <Checklist items={quoteChecklist} />
          </Column>

          <Column gap="16">
            <SectionTitle eyebrow="Примери" title="Реални проекти" lead="Технически одит, структурирани данни за онлайн магазин и SEO при редизайн с Next.js." />
            <Row gap="12" wrap>
              <Button href="/work" variant="secondary" arrowIcon>Вижте проектите</Button>
              <Button href="/seo-uslugi/seo-odit" variant="secondary" arrowIcon>SEO одит на сайт</Button>
            </Row>
          </Column>

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси за уеб разработката" />
            <Faq items={faq} />
          </Column>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingY="56" theme="dark" s={{ paddingY: "32" }}>
        <GeoBackground style={{ left: "50%", width: "100vw", transform: "translateX(-50%)" }} />
        <Column zIndex={1} maxWidth="m" fillWidth paddingX="24" gap="20" horizontal="center" align="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Имате проект или бавен сайт?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Опишете го накратко. Първоначалният разговор до 30 минути е безплатен и без ангажимент.
          </Text>
          <Row gap="12" wrap horizontal="center">
            <Button href="/kontakti" size="l" arrowIcon>Запитване</Button>
            <Button href="/seo-uslugi" size="l" variant="secondary">SEO услуги</Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
