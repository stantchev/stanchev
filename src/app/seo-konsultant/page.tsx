import { Avatar, Background, Button, Column, Heading, Icon, Row, Table, Tag, Text, type IconName } from "@once-ui-system/core";
import { GeoBackground } from "@/components/seo/GeoBackground";
import { HomeBlog } from "@/components/seo/HomeBlog";
import { JsonLd } from "@/components/seo/JsonLd";
import { RevealOnView } from "@/components/seo/RevealOnView";
import { buildMetadata } from "@/components/seo/metadata";
import { Checklist, Faq, SectionTitle, Trail } from "@/components/seo/blocks";
import { FreeResources, Toolkit, WhoWorks, WorkFormats } from "@/components/seo/Engagement";
import { FeaturesBordered, FeaturesGrid } from "@/components/seo/Features";
import { FeaturesPromo, FeaturesSticky, FeaturesTimeline } from "@/components/seo/FeaturesMore";
import { baseURL, person } from "@/resources";
import { getService, servicePath } from "@/resources/services";

const path = "/seo-konsultant";
const title = "SEO консултант България - одит, стратегия и GEO | Stanchev Digital";
const description =
  "SEO консултант в България, който е и SEO специалист и уеб разработчик: одит, стратегия и GEO оптимизация. Първи разговор безплатен, цени в евро.";

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords: [
    "seo консултант",
    "seo консултант българия",
    "сео консултант",
    "seo експерт",
    "seo консултация",
    "seo консултации",
    "seo консултант цена",
    "независим seo консултант",
    "geo оптимизация",
    "ai seo",
    "seo одит",
  ],
});

const priceSlugs = ["seo-konsultaciya", "seo-odit", "keyword-research", "on-page-seo", "lokalno-seo", "off-page-seo", "llm-seo"];
const priceRows = priceSlugs.map((slug) => getService(slug)).filter((s): s is NonNullable<typeof s> => Boolean(s));

const whatItems: { icon: IconName; title: string; description: string; href?: string }[] = [
  { icon: "seoaudit", title: "Технически SEO одит", description: "Индексиране, обхождане, Core Web Vitals, дублирано съдържание и грешки, които тихо отнемат позиции.", href: servicePath(getService("seo-odit")!) },
  { icon: "keywordresearch", title: "Ключови думи и намерение", description: "Коя страница коя заявка да покрива и какво всъщност търси потребителят.", href: servicePath(getService("keyword-research")!) },
  { icon: "document", title: "On-Page оптимизация", description: "Заглавия, мета описания, структура на съдържанието и вътрешно свързване.", href: servicePath(getService("on-page-seo")!) },
  { icon: "lightbulb", title: "GEO и AI SEO", description: "Структура и директни отговори, които ChatGPT, Gemini и AI Overviews могат да цитират.", href: servicePath(getService("llm-seo")!) },
  { icon: "map", title: "Локално SEO", description: "Видимост в картата и в търсенията „близо до мен“ за бизнеси с физически обект.", href: servicePath(getService("lokalno-seo")!) },
  { icon: "link", title: "Линкове и авторитет", description: "Естествен профил от връзки и доверие към марката, без рискови схеми.", href: servicePath(getService("off-page-seo")!) },
  { icon: "box", title: "SEO за магазини", description: "WooCommerce, OpenCart, Magento: категории, филтри, продуктови данни.", href: servicePath(getService("ecommerce-seo")!) },
  { icon: "chartBar", title: "Измерване и отчет", description: "Следене на импресии, позиции и кликове в Search Console и Analytics." },
  { icon: "trendingUp", title: "Втора гледна точка", description: "Независимо мнение за работата на агенция или предишен специалист." },
];

const forWhom: { icon: IconName; title: string; description: string }[] = [
  { icon: "user", title: "Собственици на бизнес", description: "Започвате със SEO и искате ясна посока, без да се губите в термини." },
  { icon: "briefcase", title: "Маркетинг екипи", description: "Нужна ви е втора гледна точка или независим технически одит." },
  { icon: "trendingUp", title: "Сайт с паднал трафик", description: "След редизайн, миграция или промяна в алгоритъма на Google." },
  { icon: "box", title: "Онлайн магазини", description: "Много продукти, дублирани страници и слаба видимост на категориите." },
  { icon: "map", title: "Локални бизнеси", description: "Клиентите ви ви търсят „близо до мен“ или във вашия град." },
  { icon: "target", title: "Недоволни от агенция", description: "Плащате месечно, но не виждате ясно какво се прави и какъв е ефектът." },
];

const faq = [
  { q: "Какво прави SEO консултантът?", a: "SEO консултантът анализира сайта технически и съдържателно, открива причините за ниските позиции, подрежда проблемите по ефект и усилие и дава конкретен план. Може да го изпълни и самият консултант, или вашият екип по негови указания." },
  { q: "Кой е най-добрият SEO консултант в България?", a: "Няма обективна класация и не бих се обявил за най-добър. По-полезно е да сравните по проверими неща: прозрачен процес, реални примери, ясни цени и липса на гаранции за позиция. Вижте моите SEO проекти и решете сами." },
  { q: "С какво SEO консултантът се различава от SEO специалист и от агенция?", a: "Консултантът определя посоката и приоритетите, специалистът изпълнява оптимизацията, а агенцията обикновено разделя тези роли между няколко души. При мен консултант, специалист и уеб разработчик са един човек, затова няма предаване на задачи и посредници." },
  { q: "Колко струва SEO консултант?", a: "Първият разговор до 30 минути е безплатен. По-задълбочена консултация е 50 € на час, SEO одитът е от 330 €, а On-Page оптимизацията от 245 €. Крайната цена зависи от размера на сайта и обхвата, затова давам оферта след кратък преглед." },
  { q: "Какво включва първият безплатен разговор?", a: "Преглед на сайта ви, чувам целите ви и ви казвам кои са най-важните следващи стъпки. Не е продажбена презентация и не води до задължение." },
  { q: "Колко време отнема да видя резултати?", a: "Технически поправки и подобрени заглавия могат да дадат ефект за седмици, но устойчивото подобряване при конкурентни термини обикновено отнема няколко месеца. Не обещавам конкретна позиция в Google. Обещавам ясен план и измерим напредък." },
  { q: "Гарантирате ли първо място в Google?", a: "Не. Никой честен специалист не може да гарантира позиция, защото алгоритъмът не е под негов контрол. Гарантирам прозрачна работа и отчитане на напредъка в Search Console." },
  { q: "Работите ли с GEO и AI търсачки (ChatGPT, Gemini, Perplexity)?", a: "Да. Освен класическото SEO за Google оптимизирам сайтове за цитиране в AI отговори: ясна структура, директни отговори в началото на секциите, структурирани данни, ясна идентичност на автора и надеждни източници. Никой не може да гарантира цитиране, но тези основи го правят по-вероятно." },
  { q: "Какво е GEO оптимизация?", a: "GEO (Generative Engine Optimization) е оптимизация на съдържанието така, че генеративните търсачки и AI асистентите да го разбират, да му се доверяват и да го цитират в отговорите си. Допълва класическото SEO, не го заменя." },
  { q: "Колко трае една консултация?", a: "Първият разговор е до 30 минути. По-задълбочената консултация е по час и обсъждаме толкова, колкото е нужно по вашия случай и приоритети." },
  { q: "Подходяща ли е консултацията, ако имам вътрешен маркетинг екип?", a: "Да. Мога да прегледам работата на екипа или на агенцията, да подредя приоритетите и да обясня на разработчиците и копирайтърите какво е нужно." },
  { q: "Може ли консултацията да замени месечната SEO оптимизация?", a: "За много сайтове да: получавате план и го изпълнявате сами. Консултацията не замества постоянната работа, ако нямате кой да я изпълнява, затова предлагам и продължителна оптимизация." },
  { q: "Нужен ли ми е дългосрочен договор?", a: "Не за единични услуги като консултация или одит. При продължителна работа условията (обхват, срок, отчети) се уточняват писмено предварително." },
  { q: "Работите ли с онлайн магазини и с WordPress, OpenCart, Magento?", a: "Да. Работя с WooCommerce, OpenCart, Magento и персонализирани платформи, като адаптирам SEO стратегията към конкретната платформа." },
  { q: "Можете ли и да направите промените в сайта?", a: "Да, като уеб разработчик мога да внедря препоръките директно: скорост, структурирани данни, URL структура, Next.js или WordPress. Ако предпочитате, предавам указания на вашия екип." },
  { q: "Как следите и отчитате напредъка?", a: "С Google Search Console и Analytics: импресии, позиции, кликове и индексиране. Показвам какво се е променило и какво правим по-нататък, без прекалено много графики." },
  { q: "Работите ли с клиенти извън България?", a: "Да, дистанционно, на български или английски. Основният ми фокус са български сайтове и българскоезична аудитория." },
];

const compare: [string, string, string][] = [
  ["Кой анализира", "Директно консултантът", "Често отделен акаунт мениджър"],
  ["Кой прави промените", "Същият човек, включително в кода", "Различни хора по роли"],
  ["Комуникация", "Без посредници", "През координатор"],
  ["Ангажимент", "Единични услуги или месечно по договаряне", "Често абонамент"],
  ["Подходящо за", "Малки и средни сайтове, магазини, локални бизнеси", "Големи проекти с много екипи"],
];

export default function SeoKonsultantPage() {
  const url = `${baseURL}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: "bg-BG",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${url}#service` },
        mainEntity: { "@id": `${url}#service` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        serviceType: "SEO консултации, одит и оптимизация",
        name: "SEO консултант България",
        description,
        url,
        inLanguage: "bg-BG",
        areaServed: { "@type": "Country", name: "България" },
        provider: { "@type": "ProfessionalService", name: "Stanchev Digital", url: baseURL },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SEO консултантски услуги",
          itemListElement: [
            { "@type": "Offer", name: "SEO консултация (до 30 минути)", price: "0", priceCurrency: "EUR", url: `${baseURL}${servicePath(getService("seo-konsultaciya")!)}` },
            { "@type": "Offer", name: "SEO одит", priceSpecification: { "@type": "PriceSpecification", minPrice: 330, priceCurrency: "EUR" }, url: `${baseURL}${servicePath(getService("seo-odit")!)}` },
            { "@type": "Offer", name: "On-Page SEO", priceSpecification: { "@type": "PriceSpecification", minPrice: 245, priceCurrency: "EUR" }, url: `${baseURL}${servicePath(getService("on-page-seo")!)}` },
            { "@type": "Offer", name: "Keyword Research", priceSpecification: { "@type": "PriceSpecification", minPrice: 165, priceCurrency: "EUR" }, url: `${baseURL}${servicePath(getService("keyword-research")!)}` },
          ],
        },
      },
      {
        "@type": "Person",
        "@id": `${baseURL}/#person`,
        name: person.name,
        url: baseURL,
        jobTitle: "SEO консултант, SEO специалист и уеб разработчик",
        knowsAbout: ["SEO", "Технически SEO", "GEO", "Core Web Vitals", "Next.js", "WordPress"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name: "SEO консултант", item: url },
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
          <Trail items={[{ label: "Начало", href: "/" }, { label: "SEO консултант" }]} />
          <Row gap="8" horizontal="center" wrap>
            <Tag scheme="brand" size="m">SEO консултант</Tag>
            <Tag scheme="accent" size="m">SEO специалист</Tag>
            <Tag scheme="neutral" size="m">Уеб разработчик</Tag>
          </Row>
          <Heading as="h1" variant="display-strong-xl" align="center" wrap="balance">
            SEO консултант в България
          </Heading>
          <Text variant="body-default-xl" onBackground="neutral-weak" align="center" wrap="balance">
            Технически одит, SEO стратегия и GEO оптимизация за Google и AI търсачки. Работите директно с човека, който анализира, оптимизира и изгражда сайта, с ясен план и цени в евро.
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
              <Icon name="check" size="xs" onBackground="brand-medium" /> Първи разговор до 30 минути - безплатен
            </Row>
            <Row gap="8" vertical="center">
              <Icon name="check" size="xs" onBackground="brand-medium" /> Без гаранции за позиция, само измерим напредък
            </Row>
            <Row gap="8" vertical="center">
              <Icon name="check" size="xs" onBackground="brand-medium" /> Без посредници
            </Row>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <RevealOnView>
            <Column fillWidth border="neutral-alpha-weak" radius="l" padding="32" s={{ padding: "20" }} gap="16" background="surface">
              <Text variant="label-default-s" onBackground="brand-medium">
                Накратко
              </Text>
              <Heading as="h2" variant="heading-strong-xl" wrap="balance">
                Какво е SEO консултант и кога ви е нужен?
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-medium">
                SEO консултантът е специалист, който анализира сайта ви, открива защо не се класира в Google и в AI търсачките и ви дава приоритизиран план за действие. Нужен е, когато трафикът е спрял или е паднал, когато след редизайн или миграция сте загубили позиции, когато плащате за SEO, без да виждате резултат, или когато просто започвате и искате правилна посока.
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                При мен консултантът, специалистът и разработчикът са един човек: {person.name}. Анализът, оптимизацията и промените в кода минават през едно лице.
              </Text>
            </Column>
          </RevealOnView>

          <Column gap="24">
            <SectionTitle eyebrow="Откъде да започнете" title="Два входа към работа със SEO консултант" />
            <RevealOnView>
              <FeaturesPromo
                cards={[
                  {
                    tag: "Безплатно",
                    variant: "brand",
                    title: "SEO консултация",
                    description: "Кратък разговор по вашия случай и конкретни следващи стъпки. Първите 30 минути са безплатни.",
                    image: "/images/posts/seo-after-core-updates-2025.jpg",
                    alt: "Илюстрация към статия за SEO след промените в алгоритъма на Google",
                    href: servicePath(getService("seo-konsultaciya")!),
                    cta: "Вижте консултацията",
                  },
                  {
                    tag: "Ново",
                    variant: "accent",
                    title: "GEO и AI SEO",
                    description: "Подгответе съдържанието да бъде разбирано и цитирано от ChatGPT, Gemini, Perplexity и AI Overviews.",
                    image: "/images/posts/generative-engine-optimization-geo.jpg",
                    alt: "Илюстрация към ръководство за генеративна оптимизация (GEO)",
                    href: servicePath(getService("llm-seo")!),
                    cta: "Вижте GEO оптимизацията",
                  },
                ]}
              />
            </RevealOnView>
          </Column>

          <RevealOnView>
            <FeaturesGrid
              title="С какво помага един SEO консултант"
              lead="Повечето сайтове не губят позиции заради един голям проблем, а заради няколко малки. Консултацията ги подрежда по влияние върху трафика."
              items={whatItems}
              callout={
                <>
                  Искате конкретен отговор за вашия сайт? <a href="/kontakti">Опишете го в запитване</a> и получавате първи преглед безплатно.
                </>
              }
            />
          </RevealOnView>

          <Column gap="32">
            <SectionTitle
              eyebrow="Един човек, три роли"
              title="Консултант, специалист и разработчик"
              lead="Разликата между консултант и специалист е в ролята. При мен получавате и двете, плюс човек, който може да промени кода."
            />
            <FeaturesSticky
              cards={[
                {
                  title: "Консултантът определя посоката.",
                  description: "Анализ на сайта, конкуренцията и Search Console. Получавате ясен приоритетен план, а не списък от 200 неподредени проблема.",
                  action: { label: "SEO одит", href: servicePath(getService("seo-odit")!) },
                },
                {
                  title: "Специалистът изпълнява.",
                  description: "On-page оптимизация, съдържание, ключови думи, линкове и измерване. Всяка промяна е обяснена и проследима.",
                  action: { label: "SEO оптимизация", href: servicePath(getService("seo-optimizatsiya")!) },
                },
                {
                  title: "Разработчикът внедрява.",
                  description: "Скорост, структурирани данни, URL структура, Next.js или WordPress. Препоръките не остават само в документ.",
                  action: { label: "Уеб услуги", href: "/web" },
                },
              ]}
            />
          </Column>

          <FeaturesTimeline
            title="Как протича работата"
            lead="Пет стъпки от първия разговор до измерим резултат."
            steps={[
              { title: "Безплатен разговор", description: "Опишете сайта и целта си. До 30 минути, без задължение." },
              { title: "Преглед и анализ", description: "Разглеждам сайта, Search Console и конкуренцията." },
              { title: "Приоритизиран план", description: "Задачи, подредени по ефект и усилие, с ясни цени." },
              { title: "Изпълнение", description: "Прилагам промените или ги предавам на вашия екип с указания." },
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
                  <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">
                    SEO консултант, SEO специалист и уеб разработчик
                  </Text>
                  <Button href="/za-men" variant="secondary" size="s" arrowIcon>
                    За мен
                  </Button>
                </Column>
              </Column>
            }
          />

          <WorkFormats />

          <Column gap="32" id="ceni">
            <SectionTitle
              eyebrow="Цени"
              title="Колко струва SEO консултант"
              lead="Стартови цени „от“ в евро. Първият разговор до 30 минути е безплатен, а консултацията по час е 50 €. Конкретна оферта получавате след кратък преглед."
            />
            <Table
              data={{
                headers: [
                  { content: "Услуга", key: "service" },
                  { content: "Цена", key: "price", align: "right" },
                ],
                rows: [
                  ...priceRows.map((s) => [<a key={s.slug} href={servicePath(s)}>{s.name}</a>, s.slug === "seo-konsultaciya" ? "безплатно до 30 мин, после 50 €/час" : s.priceFrom]),
                ],
              }}
            />
            <Text variant="body-default-m" onBackground="neutral-weak">
              Всички услуги са на страницата <a href="/seo-uslugi">SEO услуги и цени</a>. Прочетете и <a href="/blog/seo-cena-2025">как се формират SEO цените</a>.
            </Text>
          </Column>

          <RevealOnView>
            <FeaturesBordered title="За кого е подходяща консултацията" lead="Ако разпознавате себе си в някоя от ситуациите, започнете оттук." items={forWhom} />
          </RevealOnView>

          <Column gap="32">
            <SectionTitle
              eyebrow="Сравнение"
              title="Работа директно с консултант или с агенция"
              lead="Няма универсално по-добър избор. Ето как се различават най-често в практиката."
            />
            <Table
              data={{
                headers: [
                  { content: "", key: "k" },
                  { content: "Директно с консултант", key: "c" },
                  { content: "Типична агенция", key: "a" },
                ],
                rows: compare.map(([k, c, a]) => [k, c, a]),
              }}
            />
          </Column>

          <Column gap="32">
            <SectionTitle eyebrow="Принципи" title="Как работя" lead="Без неясни обещания: само това, което мога да докажа с данни." />
            <Checklist
              items={[
                "Не обещавам позиция в Google и не работя със схеми за бързо класиране.",
                "Всяка препоръка е с обяснение защо и как ще проверим ефекта.",
                "Измервам с Search Console и Analytics, а не с лично усещане.",
                "Подреждам задачите по ефект и усилие, а не по обем часове.",
                "Предавам достъпите, кода и документацията: сайтът е ваш.",
              ]}
            />
          </Column>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingY="56" theme="dark" s={{ paddingY: "32" }}>
        <GeoBackground style={{ left: "50%", width: "100vw", transform: "translateX(-50%)" }} />
        <Column zIndex={1} maxWidth="m" fillWidth paddingX="24" gap="20" horizontal="center" align="center">
          <Tag scheme="accent" size="m">GEO и AI SEO</Tag>
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Видими не само в Google, но и в отговорите на AI
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Все повече хора питат ChatGPT, Gemini и Perplexity вместо да търсят. Структурирано съдържание, директни отговори и ясна идентичност на автора увеличават шанса сайтът ви да бъде разбран и цитиран. Никой не може да гарантира цитиране.
          </Text>
          <Row gap="12" wrap horizontal="center">
            <Button href={servicePath(getService("llm-seo")!)} size="l" arrowIcon>
              GEO оптимизация
            </Button>
            <Button href="/blog/generative-engine-optimization-geo" size="l" variant="secondary">
              Прочетете ръководството
            </Button>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <Column gap="24">
            <SectionTitle eyebrow="Примери" title="Реални проекти" lead="Технически одит и отстраняване на грешки, структурирани данни за онлайн магазин и SEO при редизайн с Next.js." />
            <Row>
              <Button href="/seo-proekti" variant="secondary" arrowIcon>
                Вижте SEO проектите
              </Button>
            </Row>
          </Column>

          <HomeBlog />

          <WhoWorks />

          <Toolkit />

          <FreeResources />

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси за SEO консултант" />
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
            <Button href="/seo-uslugi" size="l" variant="secondary">
              SEO услуги и цени
            </Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
