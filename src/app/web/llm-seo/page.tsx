import { Background, Button, Column, Grid, Heading, Icon, Mask, MatrixFx, Row, Table, Tag, Text, type IconName } from "@once-ui-system/core";
import { CodeBlock } from "@once-ui-system/core/code";
import { AiAnswerDemo } from "@/components/seo/AiDemo";
import { AiReadiness } from "@/components/seo/AiReadiness";

import { GeoBackground } from "@/components/seo/GeoBackground";
import { JsonLd } from "@/components/seo/JsonLd";
import { RevealOnView } from "@/components/seo/RevealOnView";
import { serviceMetadata } from "@/components/seo/metadata";
import { Checklist, Faq, SectionTitle, Trail } from "@/components/seo/blocks";
import { FeaturesBordered } from "@/components/seo/Features";
import { FeaturesTimeline } from "@/components/seo/FeaturesMore";
import { baseURL } from "@/resources";
import { getService, servicePath } from "@/resources/services";

export const metadata = serviceMetadata("llm-seo");

const s = getService("llm-seo")!;
const url = `${baseURL}${servicePath(s)}`;

const robotsCode = `# robots.txt - позволете на легитимните ботове за търсене
User-agent: Googlebot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Блокирането на GPTBot спира само обучението на модели,
# не и появата ви в търсенето на ChatGPT.
Sitemap: https://example.com/sitemap.xml`;

const answerFirstCode = `<section>
  <h2>Колко време отнема SEO одитът?</h2>
  <!-- Отговорът е в първите две изречения -->
  <p>Обикновено от няколко дни до две седмици, според размера на сайта.</p>
  <p>След това следват подробности, примери и изключения...</p>
</section>`;

const signals: { icon: IconName; title: string; text: string; points: string[]; wide?: boolean }[] = [
  { icon: "lock", title: "Достъп за ботовете", text: "AI системите не могат да цитират страница, която не виждат.", points: ["Googlebot, OAI-SearchBot, PerplexityBot", "Защитна стена и CDN не блокират легитимен трафик", "Съдържание в HTML, не само в JavaScript"], wide: true },
  { icon: "target", title: "Директен отговор", text: "Първите две изречения на секцията отговарят на въпроса.", points: ["Самостоятелни пасажи", "Конкретни факти и числа"] },
  { icon: "document", title: "Ясна структура", text: "Подзаглавия, списъци и таблици, които се цитират лесно.", points: ["Един H1", "Таблици за сравнения"] },
  { icon: "user", title: "Автор и идентичност", text: "Кой стои зад съдържанието и защо му се доверяват.", points: ["Видим автор и роля", "Person и Organization данни"], wide: true },
  { icon: "code", title: "Структурирани данни", text: "Съвпадат с видимия текст на страницата.", points: ["JSON-LD", "Валидиране преди пускане"] },
  { icon: "globe", title: "Последователна марка", text: "Еднакво име и описание навсякъде.", points: ["Сайт и Google Business Profile", "Профили и каталози"] },
  { icon: "trendingUp", title: "Измерване", text: "Тест на реални въпроси и трафик от AI.", points: ["Search Console и Analytics", "Месечен тест на въпроси"] },
];

const versus: [string, string, string][] = [
  ["Цел", "Позиция в списък с резултати", "Присъствие и цитиране в генериран отговор"],
  ["Как работи", "Индексира и подрежда страници", "Извлича пасажи и ги съставя в отговор"],
  ["Пример за заявка", "seo консултант българия", "Кой е добър SEO консултант за онлайн магазин и защо?"],
  ["Какво се оптимизира", "Страници, ключови думи, линкове", "Пасажи, факти, entity сигнали, достъп за ботове"],
  ["Как се измерва", "Позиции, импресии, кликове", "Споменавания, цитирания, реферален трафик"],
];

const faq = [
  ...s.faq,
  { q: "Какво е LLM SEO?", a: "LLM SEO е оптимизация на съдържанието за големи езикови модели като ChatGPT, Gemini и Claude, така че да го намират, разбират и цитират в отговорите си. На практика е част от GEO и се основава на същите принципи: достъп, ясна структура, надеждност и сигнали за автора и марката." },
  { q: "Каква е разликата между GEO, AEO и AI SEO?", a: "Термините се използват почти взаимозаменяемо. GEO е оптимизация за генеративни системи, AEO е оптимизация за отговори, а AI SEO е общото название. Целта е една: съдържанието ви да бъде част от AI отговорите." },
  { q: "Какво казва Google за AI Overviews?", a: "Google заявява, че няма допълнителни технически изисквания за AI Overviews и AI Mode и не са нужни специални оптимизации. Страницата трябва да е индексирана и да има право да се показва с откъс. Затова доброто класическо SEO е основата, а GEO добавя яснота и структура." },
  { q: "Нужна ли е специална schema за AI Overviews?", a: "Не. Google не изисква специален markup. Структурираните данни са полезни, ако съвпадат с видимото съдържание, но сами по себе си не гарантират цитиране." },
  { q: "Трябва ли да блокирам GPTBot?", a: "Решението е ваше. Блокирането на GPTBot ограничава обучението на модели, но не пречи на търсенето на ChatGPT през OAI-SearchBot. Ако искате да се появявате в отговорите, не блокирайте ботовете за търсене." },
  { q: "Как да разбера дали AI ме цитира?", a: "Тествам реални въпроси от вашата ниша в основните AI платформи, записвам кои източници са цитирани и следя реферален трафик в Analytics. За Google AI Overviews трафикът се вижда в отчета за ефективност в Search Console." },
  { q: "Колко време отнема да се видят резултати?", a: "Зависи от сайта и конкуренцията. Техническите поправки могат да имат ефект по-бързо, а авторитетът и споменаванията се градят месеци. Не обещавам срок и позиция." },
  { q: "Подходящо ли е GEO за онлайн магазини?", a: "Да, когато категориите и продуктите са структурирани ясно: сравнения, критерии за избор, въпроси и отговори и валидни продуктови данни. Основата остава добрата индексация." },
  { q: "Колко струва GEO оптимизацията?", a: "Цената зависи от състоянието на SEO основата, размера на сайта, конкуренцията, броя езици и колко съдържание подготвяте сами. Проверката за готовност към AI влиза в SEO одита (от 330 €), а продължителната работа се оферира след кратък преглед." },
];

export default function LlmSeoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: s.metaTitle, description: s.metaDescription, inLanguage: "bg-BG", breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#service` } },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "GEO и LLM SEO оптимизация",
        serviceType: "Оптимизация за AI търсачки и генеративни отговори",
        description: s.metaDescription,
        url,
        areaServed: { "@type": "Country", name: "България" },
        provider: { "@type": "ProfessionalService", name: "Stanchev Digital", url: baseURL },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name: "Уеб услуги", item: `${baseURL}/web` },
          { "@type": "ListItem", position: 3, name: s.name, item: url },
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
          gradient={{ display: true, colorStart: "accent-alpha-medium", colorEnd: "static-transparent", x: 80, y: 0, width: 120, height: 90, opacity: 60 }}
          dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }}
        />
        <Column zIndex={1} maxWidth="l" fillWidth gap="32">
          <Trail items={[{ label: "Начало", href: "/" }, { label: "Уеб услуги", href: "/web" }, { label: "GEO и LLM SEO" }]} />
          <Row fillWidth gap="48" vertical="center" m={{ direction: "column" }}>
            <Column flex={6} gap="24" fillWidth>
              <Row gap="8" wrap>
                <Tag scheme="accent" size="m">ChatGPT</Tag>
                <Tag scheme="accent" size="m">Gemini</Tag>
                <Tag scheme="accent" size="m">Perplexity</Tag>
                <Tag scheme="brand" size="m">AI Overviews</Tag>
              </Row>
              <Heading as="h1" variant="display-strong-l" wrap="balance">
                GEO и LLM SEO оптимизация: бъдете цитирани в отговорите на AI
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
                {s.lead} Подходът е прозрачен и основан на данни: без гаранции за цитиране и без измислени трикове.
              </Text>
              <Row gap="12" s={{ direction: "column" }}>
                <Button href="/kontakti" size="l" arrowIcon>Поискайте GEO преглед</Button>
                <Button href="#proverka" size="l" variant="secondary">Проверете се сами</Button>
              </Row>
              <Row gap="24" wrap textVariant="label-default-s" onBackground="neutral-weak">
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> Без гаранции за цитиране</Row>
                <Row gap="8" vertical="center"><Icon name="check" size="xs" onBackground="brand-medium" /> Основано на официалните насоки на Google</Row>
              </Row>
            </Column>
            <Column flex={5} fillWidth minWidth={0}>
              <AiAnswerDemo />
            </Column>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <RevealOnView>
            <Column fillWidth gap="12" paddingLeft="24" style={{ borderLeft: "3px solid var(--brand-solid-medium)" }}>
              <Heading as="h2" variant="heading-strong-xl" wrap="balance">Какво е GEO и LLM SEO оптимизация?</Heading>
              <Text variant="body-default-l" onBackground="neutral-medium">
                GEO (Generative Engine Optimization) е оптимизация на съдържанието и марката така, че ChatGPT, Gemini, Perplexity и Google AI Overviews да го намират, разбират и цитират в генерираните си отговори. Тя не замества класическото SEO, а го надгражда: без индексирана и достъпна страница няма какво да бъде цитирано.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Google официално заявява, че за AI Overviews и AI Mode няма допълнителни технически изисквания и не са нужни специални оптимизации. Затова отправната точка са добрите SEO основи, а GEO добавя яснота на отговорите и сигнали за автора и марката.
              </Text>
            </Column>
          </RevealOnView>

          <Column gap="24">
            <SectionTitle eyebrow="Разлика" title="GEO срещу класическо SEO" lead="Двете работят заедно, но целите и измерването са различни." />
            <Table
              data={{
                headers: [
                  { content: "", key: "k" },
                  { content: "Класическо SEO", key: "s" },
                  { content: "GEO и LLM SEO", key: "g" },
                ],
                rows: versus.map(([k, a, b]) => [k, a, b]),
              }}
            />
          </Column>

          <Column gap="24">
            <SectionTitle eyebrow="Какво работи" title="Какво прави съдържанието цитируемо" lead="Седем сигнала, с които работя. Нито един не е магия, всички са проверими." />
            <RevealOnView>
              <Grid fillWidth columns={3} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
                {signals.map((a) => (
                  <Column key={a.title} className={a.wide ? "bento-wide" : undefined} padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface" overflow="hidden">
                    {a.wide && (
                      <Mask position="absolute" right="0" top="0" radius={33} x={75} y={0}>
                        <MatrixFx size={1.5} colors={["accent-background-strong"]} flicker />
                      </Mask>
                    )}
                    <Icon name={a.icon} size="s" border="accent-alpha-weak" background="accent-alpha-weak" onBackground="accent-weak" radius="m" padding="8" />
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
            <SectionTitle eyebrow="Техническа основа" title="Достъп и структура в код" lead="Две малки промени, които често липсват." />
            <Row fillWidth gap="16" s={{ direction: "column" }} vertical="stretch">
              <Column flex={1} fillWidth minWidth={0}>
                <CodeBlock codes={[{ code: robotsCode, language: "bash", label: "robots.txt" }]} copyButton />
              </Column>
              <Column flex={1} fillWidth minWidth={0}>
                <CodeBlock codes={[{ code: answerFirstCode, language: "html", label: "answer-first" }]} copyButton />
              </Column>
            </Row>
          </Column>

          <Column gap="24" id="proverka">
            <SectionTitle eyebrow="Проверете се сами" title="Колко е готов сайтът ви за AI търсене" lead="Десет въпроса. Отговорете честно и вижте откъде да започнете." />
            <AiReadiness />
          </Column>

          <FeaturesTimeline
            title="Как протича GEO работата"
            lead="От тест на реални въпроси до месечно измерване."
            steps={[
              { title: "Тест и одит", description: "Събирам реални въпроси от вашата ниша, тествам ги в AI платформите и проверявам достъпа и структурата." },
              { title: "Технически достъп", description: "robots.txt, защити, HTML съдържание и скорост." },
              { title: "Съдържание answer-first", description: "Директни отговори, самостоятелни пасажи, таблици и конкретни факти." },
              { title: "Entity и сигнали", description: "Автор, организация, структурирани данни и еднаква информация навсякъде." },
              { title: "Измерване", description: "Месечен тест на въпросите, Search Console и реферален трафик." },
            ]}
            side={
              <Column fillWidth aspectRatio="3/4" m={{ aspectRatio: "16/10" }} radius="l" border overflow="hidden" center padding="xl" gap="16" align="center">
                <Background position="absolute" top="0" left="0" fill gradient={{ display: true, colorStart: "accent-alpha-medium", colorEnd: "static-transparent", x: 50, y: 100, width: 120, height: 90, opacity: 70 }} dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }} />
                <Column zIndex={1} center gap="12" align="center">
                  <Icon name="lightbulb" size="xl" onBackground="accent-weak" />
                  <Text variant="heading-strong-l">Измеримо, не гадаене</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">Всеки резултат се проверява с данни от вашия сайт.</Text>
                </Column>
              </Column>
            }
          />

          <RevealOnView>
            <FeaturesBordered
              title="Кога GEO не е първата стъпка"
              lead="Честно: понякога първо е нужно друго."
              items={[
                { icon: "search", title: "Сайтът не е индексиран", description: "Първо поправете индексирането и техническото SEO. Без него няма какво да се цитира." },
                { icon: "box", title: "Много малък бюджет", description: "Започнете със SEO одит и основите. Те покриват голяма част от GEO принципите." },
                { icon: "target", title: "Търсите гарантирано място", description: "Никой честен специалист не може да обещае цитиране. Ако някой го прави, бъдете предпазливи." },
              ]}
            />
          </RevealOnView>

          <Column gap="24" id="ceni">
            <SectionTitle eyebrow="Обхват и цена" title="Какво включва услугата и как се формира цената" lead="Проверката за готовност към AI влиза в SEO одита от 330 €. Продължителната работа се оферира писмено." />
            <Row fillWidth gap="16" s={{ direction: "column" }} vertical="stretch">
              <Column flex={1} fillWidth padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface">
                <Heading as="h3" variant="heading-strong-m">Включено</Heading>
                <Checklist items={s.includes.map((i) => `${i.title}: ${i.text}`)} />
              </Column>
              <Column flex={1} fillWidth padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface">
                <Heading as="h3" variant="heading-strong-m">От какво зависи цената</Heading>
                <Checklist
                  items={[
                    "Състояние на SEO основата и индексирането.",
                    "Размер на сайта: няколко страници или хиляди.",
                    "Конкуренция в нишата.",
                    "Брой езици и пазари.",
                    "Колко съдържание подготвяте сами.",
                  ]}
                />
                <Row paddingTop="8" gap="8" wrap>
                  <Button href="/seo-uslugi/seo-odit" variant="secondary" size="s" arrowIcon>SEO одит</Button>
                  <Button href="/kontakti" size="s" arrowIcon>Запитване</Button>
                </Row>
              </Column>
            </Row>
          </Column>

          <Column gap="24">
            <SectionTitle eyebrow="Прочетете още" title="Ръководства за GEO" />
            <Grid fillWidth columns={3} m={{ columns: 1 }} gap="16">
              {[
                { href: "/blog/generative-engine-optimization-geo", title: "GEO оптимизация - пълно ръководство", text: "Как работи генеративната оптимизация." },
                { href: "/blog/google-ai-optimization-guide-kakvo-ima-znachenie-2026", title: "Насоки на Google за AI оптимизация", text: "Какво има значение според Google." },
                { href: "/blog/google-search-console-ai-performance-report-2026", title: "Search Console и AI трафик", text: "Как се вижда ефективността в AI." },
              ].map((r) => (
                <Button key={r.href} href={r.href} variant="secondary" size="l" fillWidth arrowIcon style={{ height: "auto", padding: 16, justifyContent: "flex-start", textAlign: "left" }}>
                  <Column gap="4" horizontal="start">
                    <Text variant="label-strong-m">{r.title}</Text>
                    <Text variant="body-default-xs" onBackground="neutral-weak">{r.text}</Text>
                  </Column>
                </Button>
              ))}
            </Grid>
          </Column>

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси за GEO и LLM SEO" />
            <Faq items={faq} />
          </Column>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingY="56" theme="dark" s={{ paddingY: "32" }}>
        <GeoBackground style={{ left: "50%", width: "100vw", transform: "translateX(-50%)" }} />
        <Column zIndex={1} maxWidth="m" fillWidth paddingX="24" gap="20" horizontal="center" align="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">Нека проверим как AI вижда вашия сайт</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Опишете сайта и нишата си. Първоначалният разговор до 30 минути е безплатен и без ангажимент.
          </Text>
          <Row gap="12" wrap horizontal="center">
            <Button href="/kontakti" size="l" arrowIcon>Поискайте GEO преглед</Button>
            <Button href="/seo-konsultant" size="l" variant="secondary">SEO консултант</Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
