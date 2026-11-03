import { Background, Button, Column, Grid, Heading, Icon, Line, Mask, MatrixFx, Row, Table, Tag, Text, type IconName } from "@once-ui-system/core";
import { GeoBackground } from "@/components/seo/GeoBackground";
import { JsonLd } from "@/components/seo/JsonLd";
import { RevealOnView } from "@/components/seo/RevealOnView";
import { serviceMetadata } from "@/components/seo/metadata";
import { Faq, SectionTitle, Trail } from "@/components/seo/blocks";
import { FreeResources, Toolkit } from "@/components/seo/Engagement";
import { FeaturesBordered } from "@/components/seo/Features";
import { FeaturesTimeline } from "@/components/seo/FeaturesMore";
import { baseURL } from "@/resources";
import { getService, servicePath } from "@/resources/services";

export const metadata = serviceMetadata("seo-odit");

const s = getService("seo-odit")!;
const url = `${baseURL}${servicePath(s)}`;

const areas: { icon: IconName; title: string; text: string; points: string[]; wide?: boolean }[] = [
  { icon: "seoaudit", title: "Технически проверки", text: "Може ли Google да обходи, разбере и индексира сайта ви?", points: ["Обхождане и индексиране", "Sitemap и robots.txt", "Пренасочвания и 404", "HTTPS и мобилна версия"], wide: true },
  { icon: "trendingUp", title: "Скорост и Core Web Vitals", text: "LCP, INP и CLS на ключовите страници и какво ги забавя.", points: ["Измерване на ключови шаблони", "Причини, не само оценки"] },
  { icon: "document", title: "On-page елементи", text: "Заглавия, описания, структура на заглавията, дублиране.", points: ["Title и meta", "Йерархия H1-H3", "Вътрешно свързване"] },
  { icon: "code", title: "Структурирани данни", text: "Наличие и валидност на schema markup.", points: ["Проверка на валидност", "Възможности за обогатени резултати"] },
  { icon: "keywordresearch", title: "Съдържание и намерение", text: "Тънко или припокриващо се съдържание и пропуснати теми.", points: ["Канибализация на заявки", "Пропуснати теми"] },
  { icon: "lightbulb", title: "Готовност за GEO и AI", text: "Може ли съдържанието да бъде разбрано и цитирано от AI търсачките?", points: ["Директни отговори", "Идентичност на автора и марката", "Достъп за AI обхождащи ботове", "Тест с реални въпроси в AI инструменти"] },
  { icon: "link", title: "Линк профил", text: "Какви сайтове сочат към вас и дали има рискови връзки.", points: ["Качество на входящите връзки", "Спам и нужда от disavow"] },
  { icon: "chartBar", title: "Измерване и аналитика", text: "Дали данните ви са верни, преди да вземате решения.", points: ["Search Console и Analytics", "Проследяване на ключовите действия"] },
];

const matrix = [
  { tag: "Първо", title: "Голям ефект, малко усилие", text: "Бързите победи: счупени пренасочвания, липсващи заглавия, грешни canonical.", scheme: "brand" as const },
  { tag: "Планирайте", title: "Голям ефект, голямо усилие", text: "По-големи проекти: преструктуриране на категории, скорост на шаблоните.", scheme: "accent" as const },
  { tag: "Когато остане време", title: "Малък ефект, малко усилие", text: "Дребни подобрения, които се правят в движение.", scheme: "neutral" as const },
  { tag: "Пропуснете", title: "Малък ефект, голямо усилие", text: "Неща, които инструментите отбелязват, но не си струва да се правят.", scheme: "neutral" as const },
];

const compare: [string, string, string][] = [
  ["Какво открива", "Симптоми и оценки", "Причини, свързани с вашите цели"],
  ["Приоритети", "Дълъг списък без ред", "Подредено по ефект и усилие"],
  ["Контекст", "Не познава бизнеса ви", "Взема предвид ниша, конкуренция и Search Console"],
  ["Какво получавате", "Автоматичен отчет", "Документ на ясен език и разговор"],
];

const faq = [
  ...s.faq,
  { q: "Колко често се прави SEO одит?", a: "Препоръчително е поне веднъж годишно, както и преди редизайн, миграция или при внезапен спад на трафика." },
  { q: "С какво одитът се различава от анализа?", a: "Анализът обикновено показва текущо състояние и данни. Одитът добавя приоритизиран план със задачи, подредени по ефект и усилие, и обяснява какво да се направи." },
  { q: "Еднократна услуга ли е SEO одитът?", a: "Да, може да е еднократна услуга. След одита можете да изпълните плана сами, с вашия екип или с моя помощ, но това не е задължително." },
  { q: "Получавам ли указания, които разработчикът ми може да приложи?", a: "Да. Докладът съдържа конкретни стъпки с примери, а след него провеждаме разговор, в който обясняваме приоритетите." },
  { q: "Какво е SEO одит?", a: "SEO одитът е цялостна проверка на сайта: технически състояния, скорост, структура, съдържание, структурирани данни и конкуренция. Резултатът е приоритизиран план със задачи, а не просто списък с грешки." },
  { q: "Колко струва SEO одитът?", a: "Базовият одит е от 330 €, а разширеният, с конкурентен анализ и план за линкове, от 895 €. Крайната цена зависи от размера на сайта и броя шаблони." },
  { q: "Какво трябва да ви предоставя за одита?", a: "Достъп (само за четене) до Google Search Console и Analytics, ако ги имате, и описание на целите. Не ми трябват пароли за администрация." },
  { q: "Одитът проверява ли и готовността за AI търсачки?", a: "Да. Проверявам дали съдържанието има директни отговори, ясна структура, структурирани данни и идентичност на автора, и дали AI обхождащите ботове имат достъп. Не мога да гарантирам цитиране, но откривам какво го спира." },
  { q: "Гарантирате ли по-високи позиции след одита?", a: "Не. Одитът показва какво трябва да се поправи и в какъв ред. Резултатът зависи от изпълнението, конкуренцията и времето." },
  { q: "Ще получа ли разговор или само документ?", a: "И двете: писмен доклад и разговор, в който обсъждаме резултатите и следващите стъпки." },
];

export default function SeoOditPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: s.metaTitle, description: s.metaDescription, inLanguage: "bg-BG", breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#service` } },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.name,
        serviceType: "Технически и съдържателен SEO одит",
        description: s.metaDescription,
        url,
        areaServed: { "@type": "Country", name: "България" },
        provider: { "@type": "ProfessionalService", name: "Stanchev Digital", url: baseURL },
        offers: [
          { "@type": "Offer", name: "Базов одит", priceSpecification: { "@type": "PriceSpecification", minPrice: 330, priceCurrency: "EUR" } },
          { "@type": "Offer", name: "Разширен одит + план за линкове", priceSpecification: { "@type": "PriceSpecification", minPrice: 895, priceCurrency: "EUR" } },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name: "SEO услуги", item: `${baseURL}/seo-uslugi` },
          { "@type": "ListItem", position: 3, name: s.name, item: url },
        ],
      },
    ],
  };

  const related = s.related.map((r) => getService(r)).filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <Column fillWidth horizontal="center" paddingBottom="64" gap="48" s={{ paddingBottom: "40", gap: "32" }}>
      <JsonLd data={schema} />

      <Column fillWidth horizontal="center" paddingTop="8" paddingBottom="16">
        <Background
          position="absolute"
          fill
          pointerEvents="none"
          style={{ left: "50%", width: "100vw", transform: "translateX(-50%)", top: "-24px", height: "calc(100% + 24px)" }}
          gradient={{ display: true, colorStart: "accent-alpha-medium", colorEnd: "static-transparent", x: 20, y: 0, width: 120, height: 80, opacity: 60 }}
          dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }}
        />
        <Column zIndex={1} maxWidth="l" fillWidth gap="32">
          <Trail items={[{ label: "Начало", href: "/" }, { label: "SEO услуги", href: "/seo-uslugi" }, { label: "SEO одит" }]} />
          <Row fillWidth gap="48" vertical="center" m={{ direction: "column" }}>
            <Column flex={6} gap="24" fillWidth>
              <Row gap="8" wrap>
                <Tag scheme="brand" size="m">SEO одит</Tag>
                <Tag scheme="neutral" size="m">{s.priceFrom}</Tag>
              </Row>
              <Heading as="h1" variant="display-strong-l" wrap="balance">
                {s.h1}
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
                {s.lead}
              </Text>
              <Row gap="12" s={{ direction: "column" }}>
                <Button href="/kontakti" size="l" arrowIcon>
                  Поискайте одит
                </Button>
                <Button href="#paketi" size="l" variant="secondary">
                  Пакети и цени
                </Button>
              </Row>
              <Row gap="24" wrap textVariant="label-default-s" onBackground="neutral-weak">
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> Приоритизиран план</Row>
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> Доклад на ясен език</Row>
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> Разговор след доклада</Row>
              </Row>
            </Column>

            <Column flex={5} fillWidth border="neutral-alpha-medium" radius="l" background="surface" overflow="hidden" shadow="l">
              <Row paddingX="16" paddingY="12" borderBottom="neutral-alpha-weak" vertical="center" gap="8">
                <Icon name="document" size="xs" onBackground="brand-medium" />
                <Text variant="label-strong-s">Структура на SEO доклада</Text>
              </Row>
              <Column padding="16" gap="12">
                {[
                  { n: "1", t: "Обобщение за собственика", d: "Най-важното на една страница" },
                  { n: "2", t: "Критични проблеми", d: "Блокират индексиране или видимост" },
                  { n: "3", t: "Бързи победи", d: "Малко усилие, видим ефект" },
                  { n: "4", t: "Стратегически задачи", d: "По-големи проекти по ред" },
                  { n: "5", t: "Възможности за GEO и AI", d: "Какво да подготвите за цитиране" },
                ].map((r) => (
                  <Row key={r.n} gap="12" vertical="center">
                    <Row width="32" height="32" center radius="m" background="brand-alpha-weak" border="brand-alpha-weak" onBackground="brand-weak" textVariant="code-default-s">
                      {r.n}
                    </Row>
                    <Column gap="2">
                      <Text variant="label-strong-s">{r.t}</Text>
                      <Text variant="body-default-xs" onBackground="neutral-weak">{r.d}</Text>
                    </Column>
                  </Row>
                ))}
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <RevealOnView>
            <Column fillWidth gap="12" paddingLeft="24" style={{ borderLeft: "3px solid var(--brand-solid-medium)" }}>
              <Heading as="h2" variant="heading-strong-xl" wrap="balance">
                Какво е SEO одит?
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-medium">
                SEO одитът е цялостна проверка на сайта, която показва защо не се класира в Google и в AI търсачките. Обхваща технически състояния, скорост, структура, съдържание, структурирани данни и конкуренция и завършва с подреден план: какво да се поправи първо и защо.
              </Text>
            </Column>
          </RevealOnView>

          <Column gap="24">
            <SectionTitle eyebrow="Обхват" title="Какво проверявам" lead="Шест области, всяка свързана с реалния ефект върху видимостта." />
            <RevealOnView>
              <Grid fillWidth columns={3} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
                {areas.map((a) => (
                  <Column
                    key={a.title}
                    padding="24"
                    gap="12"
                    radius="l"
                    border="neutral-alpha-weak"
                    background="surface"
                    overflow="hidden"
                    className={a.wide ? "bento-wide" : undefined}
                  >
                    {a.wide && (
                      <Mask position="absolute" right="0" top="0" radius={33} x={75} y={0}>
                        <MatrixFx size={1.5} colors={["brand-background-strong"]} flicker />
                      </Mask>
                    )}
                    <Icon name={a.icon} size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" />
                    <Heading as="h3" variant="heading-strong-m">{a.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">{a.text}</Text>
                    <Column gap="4" paddingTop="4">
                      {a.points.map((p) => (
                        <Row key={p} gap="8" vertical="center" textVariant="label-default-s" onBackground="neutral-medium">
                          <Icon name="check" size="xs" onBackground="brand-medium" /> {p}
                        </Row>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Grid>
            </RevealOnView>
          </Column>

          <Column gap="24">
            <SectionTitle eyebrow="Резултатът" title="Не списък с грешки, а ред на действията" lead="Всяка находка влиза в една от четирите зони според ефекта и усилието. Така знаете откъде да започнете." />
            <RevealOnView>
              <Grid fillWidth columns={2} s={{ columns: 1 }} gap="16">
                {matrix.map((m) => (
                  <Column key={m.title} padding="24" gap="12" radius="l" overflow="hidden" border={m.scheme === "neutral" ? "neutral-alpha-weak" : `${m.scheme}-alpha-weak`}>
                    {m.scheme !== "neutral" && (
                      <Background position="absolute" fill gradient={{ display: true, colorStart: `${m.scheme}-alpha-weak`, colorEnd: "static-transparent", x: 0, y: 0, width: 100, height: 100, opacity: 60 }} />
                    )}
                    <Row zIndex={1}><Tag scheme={m.scheme} size="s">{m.tag}</Tag></Row>
                    <Heading as="h3" variant="heading-strong-m" style={{ zIndex: 1 }}>{m.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak" style={{ zIndex: 1 }}>{m.text}</Text>
                  </Column>
                ))}
              </Grid>
            </RevealOnView>
          </Column>

          <FeaturesTimeline
            title="Как протича одитът"
            lead="От достъпа до разговора за следващите стъпки."
            steps={s.process.map((p) => ({ title: p.title, description: p.text }))}
            side={
              <Column fillWidth aspectRatio="3/4" m={{ aspectRatio: "16/10" }} radius="l" border overflow="hidden" center padding="xl" gap="16" align="center">
                <Background position="absolute" top="0" left="0" fill gradient={{ display: true, colorStart: "accent-alpha-medium", colorEnd: "static-transparent", x: 50, y: 100, width: 120, height: 90, opacity: 70 }} dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }} />
                <Column zIndex={1} center gap="12" align="center">
                  <Text variant="display-strong-l">до 2 седмици</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
                    обикновено от няколко дни до две седмици, според размера на сайта
                  </Text>
                </Column>
              </Column>
            }
          />

          <Column gap="24" id="paketi">
            <SectionTitle eyebrow="Пакети" title="Цени на SEO одита" lead="Стартови цени в евро. Крайната цена зависи от размера на сайта." />
            <RevealOnView>
              <Grid fillWidth columns={2} s={{ columns: 1 }} gap="16">
                {(s.packages ?? []).map((p, i) => (
                  <Column key={p.name} padding="32" s={{ padding: "20" }} gap="16" radius="l" border={i === 0 ? "brand-alpha-medium" : "neutral-alpha-medium"} background="surface" overflow="hidden">
                    {i === 0 && <Background position="absolute" fill gradient={{ display: true, colorStart: "brand-alpha-weak", colorEnd: "static-transparent", x: 50, y: 0, width: 120, height: 70, opacity: 60 }} />}
                    <Row zIndex={1} horizontal="between" vertical="center" wrap gap="8">
                      <Heading as="h3" variant="heading-strong-l">{p.name}</Heading>
                      {i === 0 && <Tag scheme="brand" size="s">Най-често избирано</Tag>}
                    </Row>
                    <Text zIndex={1} variant="display-strong-s">{p.price}</Text>
                    <Text zIndex={1} variant="body-default-s" onBackground="neutral-weak">{p.fit}</Text>
                    <Line zIndex={1} />
                    <Column zIndex={1} gap="8">
                      {p.features.map((f) => (
                        <Row key={f} gap="8" vertical="center" textVariant="body-default-s">
                          <Icon name="check" size="xs" onBackground="brand-medium" /> {f}
                        </Row>
                      ))}
                    </Column>
                    <Row zIndex={1} paddingTop="8"><Button href="/kontakti" variant={i === 0 ? "primary" : "secondary"} arrowIcon>Поискайте оферта</Button></Row>
                  </Column>
                ))}
              </Grid>
            </RevealOnView>
          </Column>

          <Column gap="24">
            <SectionTitle eyebrow="Сравнение" title="Одит или автоматична проверка?" lead="Инструментите са полезни, но не разбират контекста на бизнеса ви." />
            <Table
              data={{
                headers: [
                  { content: "", key: "k" },
                  { content: "Автоматичен инструмент", key: "a" },
                  { content: "SEO одит", key: "b" },
                ],
                rows: compare.map(([k, a, b]) => [k, a, b]),
              }}
            />
          </Column>

          <RevealOnView>
            <FeaturesBordered
              title="Кога е най-полезен одитът"
              items={[
                { icon: "code", title: "Преди редизайн или миграция", description: "Разберете какво да запазите, за да не загубите позиции." },
                { icon: "trendingUp", title: "Трафикът пада", description: "Открийте дали причината е техническа, съдържателна или от алгоритъма." },
                { icon: "user", title: "Независимо мнение", description: "Оценка на работата на агенция или предишен специалист." },
              ]}
            />
          </RevealOnView>

          <Toolkit />

          <FreeResources />

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси за SEO одита" />
            <Faq items={faq} />
          </Column>

          <Column gap="16">
            <SectionTitle eyebrow="Следващи стъпки" title="Свързани услуги" />
            <Grid fillWidth columns={4} m={{ columns: 2 }} s={{ columns: 1 }} gap="12">
              {related.map((r) => (
                <Button key={r.slug} href={servicePath(r)} variant="secondary" size="l" prefixIcon={r.icon} fillWidth arrowIcon>
                  {r.name}
                </Button>
              ))}
            </Grid>
          </Column>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingY="56" theme="dark" s={{ paddingY: "32" }}>
        <GeoBackground style={{ left: "50%", width: "100vw", transform: "translateX(-50%)" }} />
        <Column zIndex={1} maxWidth="m" fillWidth paddingX="24" gap="20" horizontal="center" align="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Разберете какво ви спира в Google
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Опишете сайта си. Първоначалният разговор до 30 минути е безплатен и ще покаже дали одитът е правилната стъпка.
          </Text>
          <Row gap="12" wrap horizontal="center">
            <Button href="/kontakti" size="l" arrowIcon>Поискайте одит</Button>
            <Button href="/seo-konsultant" size="l" variant="secondary">SEO консултант</Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
