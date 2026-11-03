import {
  AutoScroll,
  Avatar,
  Background,
  Button,
  Column,
  Grid,
  Heading,
  Icon,
  Row,
  Tag,
  Text,
  type IconName,
} from "@once-ui-system/core";
import { Projects } from "@/components/work/Projects";
import { GeoBackground } from "@/components/seo/GeoBackground";
import { HomeBlog } from "@/components/seo/HomeBlog";
import { JsonLd } from "@/components/seo/JsonLd";
import { RevealOnView } from "@/components/seo/RevealOnView";
import { buildMetadata } from "@/components/seo/metadata";
import { Checklist, CtaBand, Faq, SectionTitle, Steps } from "@/components/seo/blocks";
import { FeaturesBordered, FeaturesGrid } from "@/components/seo/Features";
import { baseURL, person, social } from "@/resources";
import { getService, servicePath } from "@/resources/services";

const title = "SEO консултант, SEO специалист и уеб разработчик | Stanchev Digital";
const description =
  "SEO консултант, SEO специалист и уеб разработчик в България: SEO и GEO консултации, оптимизация и сайтове с Next.js. Безплатен първи разговор до 30 минути.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/",
  keywords: ["seo консултант", "seo специалист", "уеб разработчик", "seo консултации", "seo консултация", "geo оптимизация", "ai seo", "seo услуги", "seo оптимизация", "seo одит"],
});

const byslug = (slugs: string[]) =>
  slugs.map((slug) => getService(slug)).filter((s): s is NonNullable<typeof s> => Boolean(s));

const featured = byslug(["seo-odit", "on-page-seo", "keyword-research", "lokalno-seo", "ecommerce-seo", "llm-seo"]);

const stack: { icon: IconName; label: string }[] = [
  { icon: "wordpress", label: "WordPress" },
  { icon: "nextjs", label: "Next.js" },
  { icon: "react", label: "React" },
  { icon: "magento", label: "Magento" },
  { icon: "opencart", label: "OpenCart" },
  { icon: "gsconsole", label: "Search Console" },
  { icon: "googleanalitycs", label: "Analytics" },
  { icon: "lighthouse", label: "Lighthouse" },
];

const signals: { icon: IconName; title: string; text: string }[] = [
  { icon: "search", title: "Не се появявате в Google", text: "Сайтът е индексиран, но не се класира по заявките, по които ви търсят клиентите." },
  { icon: "trendUp", title: "Трафикът е паднал", text: "След редизайн, миграция, смяна на платформа или обновяване на алгоритъма на Google." },
  { icon: "eye", title: "Много импресии, малко кликове", text: "Страниците се показват, но заглавията и описанията не печелят кликове." },
  { icon: "lightbulb", title: "AI ви пропуска", text: "Конкурентите се цитират в ChatGPT и AI Overviews, а вашата марка не се споменава." },
  { icon: "box", title: "Зависите от платена реклама", text: "Всяко запитване струва пари, а органичният канал не расте." },
  { icon: "lighthouse", title: "Сайтът е бавен или заплетен", text: "Лоши Core Web Vitals, дублирани страници или Google не индексира важните." },
];

const geo: { title: string; text: string }[] = [
  { title: "Директен отговор в началото", text: "Първите изречения отговарят на въпроса. Така съдържанието се цитира лесно и от Google, и от AI асистентите." },
  { title: "Ясна структура", text: "Подзаглавия, списъци и таблици, които машините разчитат без догадки." },
  { title: "Последователна идентичност", text: "Еднакви данни за марката, автора и услугите - в сайта, в структурираните данни и в профилите ви." },
  { title: "Достъп за AI роботите", text: "Правилен robots.txt, сървърно рендирано съдържание и структурирани данни, които не се зареждат с JavaScript." },
];

const prices = byslug(["seo-konsultaciya", "seo-odit", "on-page-seo"]);

const faq = [
  { q: "Консултант, специалист или разработчик - кого да наема?", a: "Не е нужно да избирате. Като SEO консултант анализирам и подреждам приоритетите, като SEO специалист ги изпълнявам, а като уеб разработчик изграждам или преработвам сайта със SEO, вградено в кода. Всичко е в едно лице, затова няма предаване на задачи между екипи." },
  { q: "Какво прави SEO консултантът?", a: "Анализира сайта технически и съдържателно, открива причините за ниските позиции, подрежда проблемите по приоритет и дава конкретен план - или го изпълнява заедно с вас. Работите директно със специалиста, без посредници." },
  { q: "Колко струва SEO консултант?", a: "Първоначалният разговор е безплатен (до 30 минути). По-задълбочената консултация е по час, а одитът и оптимизацията се оферират според обхвата. Стартовите цени са в таблицата и на страницата SEO услуги и цени." },
  { q: "Какво е GEO оптимизация?", a: "GEO (Generative Engine Optimization) подготвя съдържанието за AI системи като ChatGPT, Gemini, Perplexity и Google AI Overviews, така че сайтът да бъде намиран, разбиран и цитиран в техните отговори. Допълва класическото SEO, а не го замества." },
  { q: "Гарантирате ли първо място в Google или цитиране от AI?", a: "Не. Никой честен специалист не може да гарантира позиция или цитиране. Гарантирам прозрачна работа, приоритизиран план и измерим напредък в Search Console." },
  { q: "Колко време отнема да се види резултат?", a: "Технически поправки и подобрени заглавия могат да дадат ефект за седмици. При конкурентни заявки устойчивото подобрение обикновено отнема няколко месеца." },
  { q: "С какви сайтове работите?", a: "Фирмени сайтове, блогове и онлайн магазини на WordPress и WooCommerce, OpenCart, Magento, Next.js и персонализирани платформи." },
];

export default function HomePage() {
  const sameAs = social.filter((s) => s.link && !s.link.startsWith("mailto:")).map((s) => s.link);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${baseURL}/#webpage`, url: baseURL, name: title, description, inLanguage: "bg-BG", isPartOf: { "@id": `${baseURL}/#website` }, about: { "@id": `${baseURL}/#person` } },
      { "@type": "WebSite", "@id": `${baseURL}/#website`, url: baseURL, name: "Stanchev Digital", inLanguage: "bg-BG" },
      {
        "@type": "Person",
        "@id": `${baseURL}/#person`,
        name: person.name,
        jobTitle: "SEO консултант, SEO специалист и уеб разработчик",
        url: `${baseURL}/za-men`,
        image: `${baseURL}${person.avatar}`,
        knowsAbout: ["SEO", "Technical SEO", "GEO оптимизация", "Keyword research", "Локално SEO", "Уеб разработка", "Next.js", "WordPress"],
        sameAs,
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
          <Row gap="8" horizontal="center" wrap>
            <Tag scheme="brand" size="m">SEO консултант</Tag>
            <Tag scheme="accent" size="m">SEO специалист</Tag>
            <Tag scheme="neutral" size="m">Уеб разработчик</Tag>
          </Row>
          <Heading as="h1" variant="display-strong-xl" align="center" wrap="balance">
            SEO консултант, SEO специалист и уеб разработчик в България
          </Heading>
          <Text variant="body-default-xl" onBackground="neutral-weak" align="center" wrap="balance">
            Анализирам, оптимизирам и изграждам: от SEO стратегия и технически одит до сайт с Next.js, видим в Google и цитиран от ChatGPT, Gemini и Perplexity. Един човек, един план.
          </Text>
          <Row gap="12" horizontal="center" s={{ direction: "column" }}>
            <Button href="/kontakti" size="l" arrowIcon>
              Безплатна консултация
            </Button>
            <Button href="/seo-uslugi" size="l" variant="secondary">
              SEO услуги и цени
            </Button>
          </Row>
          <Row gap="24" horizontal="center" wrap textVariant="label-default-s" onBackground="neutral-weak">
            <Row gap="8" vertical="center">
              <Icon name="check" size="xs" onBackground="brand-medium" /> Първи разговор до 30 минути - безплатен
            </Row>
            <Row gap="8" vertical="center">
              <Icon name="check" size="xs" onBackground="brand-medium" /> Отчет с данни от Search Console
            </Row>
            <Row gap="8" vertical="center">
              <Icon name="check" size="xs" onBackground="brand-medium" /> Без дългосрочен договор за единични услуги
            </Row>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingX="l">
        <Column maxWidth="l" fillWidth gap="24" horizontal="center" align="center">
          <Text variant="label-default-s" onBackground="neutral-weak">
            Работя с платформи и инструменти като
          </Text>
          <AutoScroll
            fillWidth
            speed="slow"
            hover="pause"
            scrollGap={48}
            style={{ maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}
          >
            {stack.map((s) => (
              <Row key={s.label} gap="8" vertical="center" onBackground="neutral-weak">
                <Icon name={s.icon} size="m" />
                <Text variant="label-default-m">{s.label}</Text>
              </Row>
            ))}
          </AutoScroll>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingX="l" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <Column gap="24">
            <RevealOnView>
              <FeaturesGrid
                title="SEO услуги, които подреждат приоритетите"
                lead="Избирате само това, което ви трябва - от еднократен одит до продължителна оптимизация."
                items={featured.map((s) => ({
                  icon: s.icon,
                  title: s.name,
                  meta: s.priceFrom === "По договаряне" ? undefined : s.priceFrom,
                  description: s.summary,
                  href: servicePath(s),
                }))}
                callout={
                  <>
                    Не сте сигурни откъде да започнете? Първият разговор е безплатен - <a href="/kontakti">опишете сайта и целта си</a>.
                  </>
                }
              />
            </RevealOnView>
            <Row gap="12" wrap>
              <Button href="/seo-uslugi" variant="secondary" arrowIcon>
                Всички SEO услуги и цени
              </Button>
              <Button href="/web" variant="tertiary" arrowIcon>
                Уеб услуги
              </Button>
            </Row>
          </Column>

          <RevealOnView>
            <FeaturesBordered title="Кога имате нужда от SEO консултант" lead="Най-често клиентите идват със следните сигнали." items={signals.map((s) => ({ icon: s.icon, title: s.title, description: s.text }))} />
          </RevealOnView>

          <Column fillWidth paddingY="56" theme="dark" radius="xl" s={{ paddingY: "32" }}>
            <GeoBackground style={{ left: "50%", width: "100vw", transform: "translateX(-50%)" }} />
            <Column fillWidth zIndex={1} paddingX="24" s={{ paddingX: "8" }}>
              <Grid columns={2} gap="40" l={{ columns: 1 }} style={{ alignItems: "start" }}>
                <Column gap="24">
                  <SectionTitle
                    eyebrow="GEO и AI SEO"
                    title="Как AI търсачките избират кого да цитират"
                    lead="Все повече хора получават отговор от ChatGPT, Gemini или AI Overviews, преди да отворят сайт. GEO подготвя съдържанието да бъде намирано, разбирано и цитирано."
                  />
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Не мога да гарантирам цитиране - никой не може. Мога да подобря вероятността с по-ясно, по-структурирано и по-надеждно съдържание.
                  </Text>
                  <Row gap="12" wrap>
                    <Button href="/web/llm-seo" arrowIcon>
                      GEO оптимизация
                    </Button>
                    <Button href="/blog/generative-engine-optimization-geo" variant="secondary">
                      Ръководство за GEO
                    </Button>
                  </Row>
                </Column>
                <Column gap="16">
                  {geo.map((item, index) => (
                    <Row key={item.title} gap="16" padding="20" radius="l" background="surface" border vertical="start">
                      <Tag scheme="brand" size="s">
                        {String(index + 1).padStart(2, "0")}
                      </Tag>
                      <Column gap="4">
                        <Heading as="h3" variant="heading-strong-s">
                          {item.title}
                        </Heading>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                          {item.text}
                        </Text>
                      </Column>
                    </Row>
                  ))}
                </Column>
              </Grid>
            </Column>
          </Column>

          <Column gap="40">
            <SectionTitle eyebrow="Процес" title="Как протича работата" />
            <Steps
              items={[
                { title: "Преглед", text: "Разглеждам сайта, Search Console и конкуренцията и уточняваме целите." },
                { title: "План", text: "Получавате приоритизиран списък със задачи по ефект и усилие." },
                { title: "Изпълнение", text: "Прилагам промените или ги предавам на вашия екип с ясни указания." },
                { title: "Измерване", text: "Следим импресии, позиции и кликове и коригираме курса." },
              ]}
            />
          </Column>

          <Column gap="40">
            <SectionTitle
              eyebrow="Цени"
              title="Откъде да започнете"
              lead="Три входни точки с ясна стартова цена. Крайната цена зависи от размера на сайта и обхвата."
            />
            <Grid columns={3} gap="16" s={{ columns: 1 }}>
              {prices.map((s, index) => (
                <Column key={s.slug} gap="16" padding="24" radius="l" background="surface" border={index === 1 ? "brand-alpha-strong" : "neutral-alpha-medium"}>
                  <Row horizontal="between" vertical="center">
                    <Icon name={s.icon} size="m" onBackground="brand-medium" />
                    {index === 1 && <Tag scheme="brand" size="s">Най-често избирано за старт</Tag>}
                  </Row>
                  <Heading as="h3" variant="heading-strong-l">
                    {s.name}
                  </Heading>
                  <Text variant="display-strong-xs">{s.priceFrom}</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {s.summary}
                  </Text>
                  <Button href={servicePath(s)} variant={index === 1 ? "primary" : "secondary"} fillWidth arrowIcon>
                    Вижте подробности
                  </Button>
                </Column>
              ))}
            </Grid>
          </Column>

          <Grid columns={2} gap="40" l={{ columns: 1 }} style={{ alignItems: "start" }}>
            <Column gap="24">
              <SectionTitle eyebrow="Подход" title="Защо да работим заедно" />
              <Checklist
                items={[
                  "Работите директно със специалиста, който анализира и прави промените - без посредници.",
                  "Приоритети според ефекта върху бизнеса, а не дълъг списък с „грешки“.",
                  "Отчитане с реални данни от Google Search Console и Analytics.",
                  "Честни очаквания: не обещавам позиция в Google, а ясен план и измерим напредък.",
                  "Технически подход - скорост, индексиране, структурирани данни и достъпност за търсачки и AI роботи.",
                ]}
              />
            </Column>
            <Column gap="20" padding="32" radius="xl" background="surface" border>
              <Row gap="16" vertical="center">
                <Avatar src={person.avatar} size="l" />
                <Column gap="4">
                  <Text variant="heading-strong-l">{person.name}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {person.role}
                  </Text>
                </Column>
              </Row>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Занимавам се със SEO и GEO за фирмени сайтове и онлайн магазини, и пиша за технологиите зад тях - Next.js, headless WordPress и структурирани данни. Опитът ми е описан на страницата За мен.
              </Text>
              <Row gap="12" wrap>
                <Button href="/za-men" variant="secondary" size="s" arrowIcon>
                  За мен
                </Button>
                <Button href="/seo-konsultant" variant="tertiary" size="s" arrowIcon>
                  Работа със SEO консултант
                </Button>
              </Row>
            </Column>
          </Grid>

          <Column gap="40">
            <SectionTitle eyebrow="Проекти" title="Реални проекти" lead="Казуси от практиката - технически одит, структурирани данни и SEO при редизайн." />
            <Projects range={[1, 3]} />
            <Row>
              <Button href="/seo-proekti" variant="secondary" arrowIcon>
                Всички проекти
              </Button>
            </Row>
          </Column>

          <HomeBlog />

          <Column gap="40">
            <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси" />
            <Faq items={faq} />
            <Text variant="body-default-m" onBackground="neutral-weak">
              Още въпроси? Вижте <a href="/seo-konsultant">всичко за работата със SEO консултант</a>, <a href="/seo-uslugi/seo-konsultaciya">SEO консултацията</a> или <a href="/kontakti">пишете ми директно</a>.
            </Text>
          </Column>

          <CtaBand
            title="Нека разберем какво ви спира в Google"
            text="Опишете накратко сайта и целта си. Първоначалният разговор е безплатен и без ангажимент."
            secondary={{ label: "SEO консултант", href: "/seo-konsultant" }}
          />
        </Column>
      </Column>
    </Column>
  );
}
