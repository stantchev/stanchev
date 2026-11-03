import { Avatar, Background, Button, Column, Icon, Row, Table, Tag, Text, Heading, type IconName } from "@once-ui-system/core";
import { GeoBackground } from "@/components/seo/GeoBackground";
import { JsonLd } from "@/components/seo/JsonLd";
import { RevealOnView } from "@/components/seo/RevealOnView";
import { buildMetadata } from "@/components/seo/metadata";
import { CtaBand, Faq, SectionTitle, Trail } from "@/components/seo/blocks";
import { FeaturesBordered, FeaturesGrid } from "@/components/seo/Features";
import { FreeResources, Toolkit, WhoWorks, WorkFormats } from "@/components/seo/Engagement";
import { FeaturesPromo, FeaturesSticky, FeaturesTimeline } from "@/components/seo/FeaturesMore";
import { baseURL, person } from "@/resources";
import { servicePath, servicesOf } from "@/resources/services";

const path = "/seo-uslugi";
const title = "SEO услуги и цени - консултант и специалист | Stanchev Digital";
const description =
  "SEO услуги и цени от SEO консултант, SEO специалист и уеб разработчик: одит, оптимизация, keyword research, линк билдинг, локално SEO и GEO. Ясен обхват и цени в евро.";

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords: ["seo услуги", "seo цени", "seo цена", "seo оптимизация цена", "seo специалист", "seo консултант", "уеб разработчик", "seo пакети"],
});

const list = servicesOf("seo");

const situations: { icon: IconName; title: string; description: string }[] = [
  { icon: "search", title: "Не знаете защо не се класирате", description: "Започнете със SEO одит или с безплатния първоначален разговор." },
  { icon: "document", title: "Имате съдържание, но малко трафик", description: "On-Page SEO и Keyword Research обикновено дават най-бързия ефект." },
  { icon: "map", title: "Имате физически обект", description: "Локалното SEO ви прави видими в картата и в търсенията „близо до мен“." },
  { icon: "box", title: "Имате онлайн магазин", description: "SEO за магазини, а при WordPress, OpenCart или Magento - услугата за вашата платформа." },
  { icon: "lightbulb", title: "Искате да ви цитират AI търсачките", description: "GEO и LLM SEO подготвя съдържанието за ChatGPT, Gemini и AI Overviews." },
  { icon: "code", title: "Сайтът ви е бавен или остарял", description: "Изработка, оптимизация на скоростта или headless архитектура - от същия човек." },
];

const faq = [
  { q: "Колко струва SEO оптимизацията?", a: "От размера и състоянието на сайта, конкуренцията и обхвата. Таблицата показва стартовите цени „от“ в евро, а за по-големи проекти давам оферта след кратък преглед." },
  { q: "С какво се различава консултант, специалист и разработчик?", a: "Консултантът анализира и подрежда приоритетите, специалистът изпълнява оптимизацията, а разработчикът изгражда или преправя сайта. При мен и трите роли са в едно лице, затова няма предаване на задачи между екипи." },
  { q: "Мога ли да започна само с одит?", a: "Да. Одитът е самостоятелна услуга - получавате приоритизиран план, който можете да изпълните сами или с моя помощ." },
  { q: "Гарантирате ли първо място в Google?", a: "Не. Никой честен специалист не може да гарантира позиция в Google. Гарантирам прозрачна работа, ясен план и измерим напредък в Search Console." },
  { q: "Има ли дългосрочен договор?", a: "Не е нужен дългосрочен ангажимент за единични услуги. При продължителна работа условията се уточняват предварително." },
  { q: "Колко струва месечна SEO оптимизация?", a: "Цената зависи от размера на сайта, конкуренцията и обхвата, затова я уточняваме писмено след кратък преглед. За да не плащате излишно, често започваме с одит или консултация и надграждаме." },
  { q: "Кога е по-добре да избера агенция?", a: "При много големи проекти с няколко паралелни екипа агенцията е по-подходяща. За малки и средни сайтове, магазини и локални бизнеси директната работа с един човек е по-бърза и прозрачна." },
  { q: "Работите ли с онлайн магазини?", a: "Да - WooCommerce, OpenCart, Magento и персонализирани платформи." },
];

export default function SeoUslugiPage() {
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
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name: "SEO услуги", item: url },
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
          top="0"
          fill
          pointerEvents="none"
          style={{ left: "50%", width: "100vw", transform: "translateX(-50%)", top: "-24px", height: "calc(100% + 24px)" }}
          gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 50, y: 0, width: 150, height: 80, opacity: 60 }}
          dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }}
        />
        <Column zIndex={1} horizontal="center" align="center" gap="24" maxWidth={52}>
          <Trail items={[{ label: "Начало", href: "/" }, { label: "SEO услуги" }]} />
          <Row gap="8" horizontal="center" wrap>
            <Tag scheme="brand" size="m">SEO консултант</Tag>
            <Tag scheme="accent" size="m">SEO специалист</Tag>
            <Tag scheme="neutral" size="m">Уеб разработчик</Tag>
          </Row>
          <Heading as="h1" variant="display-strong-xl" align="center" wrap="balance">
            SEO услуги и цени от консултант, специалист и уеб разработчик
          </Heading>
          <Text variant="body-default-xl" onBackground="neutral-weak" align="center" wrap="balance">
            Анализирам, оптимизирам и изграждам - от стратегия и технически SEO до сайт с Next.js, видим в Google и в AI търсачките. Един човек, един план, ясни цени.
          </Text>
          <Row gap="12" horizontal="center" s={{ direction: "column" }}>
            <Button href="/kontakti" size="l" arrowIcon>
              Безплатна консултация
            </Button>
            <Button href="#ceni" size="l" variant="secondary">
              Вижте цените
            </Button>
          </Row>
          <Row gap="24" horizontal="center" wrap textVariant="label-default-s" onBackground="neutral-weak">
            <Row gap="8" vertical="center">
              <Icon name="check" size="xs" onBackground="brand-medium" /> Цени в евро
            </Row>
            <Row gap="8" vertical="center">
              <Icon name="check" size="xs" onBackground="brand-medium" /> Първи разговор до 30 минути - безплатен
            </Row>
            <Row gap="8" vertical="center">
              <Icon name="check" size="xs" onBackground="brand-medium" /> Без дългосрочен договор за единични услуги
            </Row>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <Column gap="24">
            <SectionTitle eyebrow="Откъде да започнете" title="Два входа, които работят най-често" />
            <RevealOnView>
              <FeaturesPromo
                cards={[
                  {
                    tag: "Най-често избирано",
                    variant: "brand",
                    title: "SEO одит",
                    description: "Разберете какво ви спира в Google и получете приоритизиран план за действие.",
                    image: "/images/posts/seo-after-core-updates-2025.jpg",
                    alt: "Илюстрация към статия за SEO след промените в алгоритъма на Google",
                    href: "/seo-uslugi/seo-odit",
                    cta: "Вижте SEO одита",
                  },
                  {
                    tag: "Ново",
                    variant: "accent",
                    title: "GEO и AI SEO",
                    description: "Подгответе съдържанието да бъде намирано и цитирано от ChatGPT, Gemini и AI Overviews.",
                    image: "/images/posts/generative-engine-optimization-geo.jpg",
                    alt: "Илюстрация към ръководство за генеративна оптимизация (GEO)",
                    href: "/web/llm-seo",
                    cta: "Вижте GEO оптимизацията",
                  },
                ]}
              />
            </RevealOnView>
          </Column>

          <Column gap="32">
            <SectionTitle
              eyebrow="Един човек, три роли"
              title="Консултант, специалист и уеб разработчик"
              lead="Няма предаване на задачи между агенция, програмисти и копирайтъри. Същият човек, който анализира, прави и изгражда."
            />
            <FeaturesSticky
              cards={[
                {
                  title: "Консултантът казва какво да направите.",
                  description: "Преглеждам сайта, подреждам приоритетите и ви давам ясен план - без посредници и без излишни абонаменти.",
                  action: { label: "SEO консултант", href: "/seo-konsultant" },
                },
                {
                  title: "Специалистът го прави.",
                  description: "Технически одит, on-page оптимизация, съдържание, линкове и измерване - в сайта или заедно с вашия екип.",
                  action: { label: "SEO оптимизация", href: "/seo-uslugi/seo-optimizatsiya" },
                },
                {
                  title: "Разработчикът изгражда основата.",
                  description: "Бързи сайтове с Next.js и WordPress, със SEO, вградено в кода: структурирани данни, скорост и чиста структура.",
                  action: { label: "Уеб услуги", href: "/web" },
                },
                {
                  title: "Един човек, един план, един отговорник.",
                  description: "Всичко на едно място - от първия анализ до пускането на сайта и първите резултати в Search Console.",
                },
              ]}
            />
          </Column>

          <Column gap="24" id="uslugi">
            <RevealOnView>
              <FeaturesGrid
                title="Всички SEO услуги"
                wideLast
                lead="Избирате само това, което ви трябва - от еднократен одит до продължителна оптимизация."
                items={list.map((s) => ({
                  icon: s.icon,
                  title: s.name,
                  meta: s.priceFrom === "По договаряне" ? undefined : s.priceFrom,
                  description: s.summary,
                  href: servicePath(s),
                }))}
                callout={
                  <>
                    Не сте сигурни коя услуга ви трябва? Първият разговор е безплатен - <a href="/kontakti">опишете сайта и целта си</a>.
                  </>
                }
              />
            </RevealOnView>
          </Column>

          <FeaturesTimeline
            title="Как протича работата"
            lead="Четири стъпки от първия преглед до измерим резултат."
            steps={[
              { title: "Преглед", description: "Разглеждам сайта, Search Console и конкуренцията и уточняваме целите." },
              { title: "Приоритизиран план", description: "Получавате списък със задачи, подредени по ефект и усилие." },
              { title: "Изпълнение", description: "Прилагам промените или ги предавам на вашия екип с ясни указания." },
              { title: "Измерване", description: "Следим импресии, позиции и кликове и коригираме курса." },
            ]}
            side={
              <Column fillWidth aspectRatio="3/4" m={{ aspectRatio: "16/10" }} radius="l" border overflow="hidden" center padding="xl" gap="16" align="center">
                <Background
                  position="absolute"
                  top="0"
                  left="0"
                  fill
                  gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 50, y: 100, width: 120, height: 90, opacity: 70 }}
                  dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }}
                />
                <Column zIndex={1} center gap="16" align="center">
                  <Avatar src={person.avatar} size="xl" />
                  <Heading as="p" variant="heading-strong-l">
                    {person.name}
                  </Heading>
                  <Row gap="8" horizontal="center" wrap>
                    <Tag scheme="brand" size="s">Консултант</Tag>
                    <Tag scheme="accent" size="s">Специалист</Tag>
                    <Tag scheme="neutral" size="s">Разработчик</Tag>
                  </Row>
                </Column>
              </Column>
            }
          />

          <WorkFormats />

          <Column gap="32" id="ceni">
            <SectionTitle
              eyebrow="Цени"
              title="SEO цени - бърз преглед"
              lead="Стартови цени „от“ в евро. Крайната цена зависи от размера на сайта и обхвата. Конкретна оферта получавате след кратък преглед."
            />
            <Table
              data={{
                headers: [
                  { content: "Услуга", key: "service" },
                  { content: "Цена", key: "price", align: "right" },
                ],
                rows: list.map((s) => [<a key={s.slug} href={servicePath(s)}>{s.name}</a>, s.priceFrom]),
              }}
            />
          </Column>

          <RevealOnView>
            <FeaturesBordered title="Коя услуга ви трябва" lead="Започнете от ситуацията, в която сте." items={situations} />
          </RevealOnView>

          <WhoWorks />

          <Toolkit />

          <FreeResources />

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси" />
            <Faq items={faq} />
          </Column>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingY="56" theme="dark" s={{ paddingY: "32" }}>
        <GeoBackground style={{ left: "50%", width: "100vw", transform: "translateX(-50%)" }} />
        <Column zIndex={1} maxWidth="m" fillWidth paddingX="24" gap="20" horizontal="center" align="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Нека разберем какво ви спира в Google
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Опишете накратко сайта и целта си. Първоначалният разговор е безплатен и без ангажимент.
          </Text>
          <Row gap="12" wrap horizontal="center">
            <Button href="/kontakti" size="l" arrowIcon>
              Запитване за консултация
            </Button>
            <Button href="/seo-konsultant" size="l" variant="secondary">
              SEO консултант
            </Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
