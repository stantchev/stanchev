import { Avatar, Background, Button, Column, Grid, Heading, Icon, IconButton, Line, Mask, MatrixFx, Media, Row, Tag, Text, type IconName } from "@once-ui-system/core";
import { getPosts } from "@/app/utils/utils";
import { GeoBackground } from "@/components/seo/GeoBackground";
import { JsonLd } from "@/components/seo/JsonLd";
import { RevealOnView } from "@/components/seo/RevealOnView";
import { buildMetadata } from "@/components/seo/metadata";
import { Faq, SectionTitle, Trail } from "@/components/seo/blocks";
import { about, baseURL, person, social } from "@/resources";

const path = "/za-men";
const title = "За мен - SEO консултант и уеб разработчик | Stanchev Digital";
const description =
  "Кой стои зад Stanchev Digital: SEO консултант, SEO специалист и уеб разработчик с опит в техническо SEO, GEO и Next.js. Опит, умения и сертификати.";

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords: ["за мен", "seo консултант", "seo специалист", "уеб разработчик", "станчев seo", "stanchev digital", "техническо seo", "next.js разработчик"],
});

const roles: { icon: IconName; title: string; text: string; href: string; cta: string }[] = [
  { icon: "messageCircle", title: "SEO консултант", text: "Анализирам сайта, подреждам приоритетите и давам ясен план без посредници.", href: "/seo-konsultant", cta: "SEO консултант" },
  { icon: "seoaudit", title: "SEO специалист", text: "Изпълнявам техническото SEO, съдържанието, линковете и измерването.", href: "/seo-uslugi", cta: "SEO услуги" },
  { icon: "code", title: "Уеб разработчик", text: "Изграждам бързи сайтове с Next.js и WordPress със SEO, вградено в кода.", href: "/web", cta: "Уеб услуги" },
];

const principles: { icon: IconName; title: string; text: string }[] = [
  { icon: "lightbulb", title: "Прозрачност", text: "Всяка промяна е обяснена и проследима. Не обещавам позиции, а измерим напредък." },
  { icon: "trendingUp", title: "Ефективност", text: "Първо промените с най-голям ефект за бизнеса, подредени по ефект и усилие." },
  { icon: "check", title: "Устойчиви резултати", text: "Баланс между код, съдържание и потребителско изживяване, а не бързи трикове." },
];

const faq = [
  { q: "Кой стои зад Stanchev Digital?", a: "Stanchev Digital е практиката на SEO консултант, SEO специалист и уеб разработчик в София. Работя директно с клиентите, без посредници, като съчетавам техническо SEO, GEO оптимизация за AI търсачки и уеб разработка с Next.js и WordPress." },
  { q: "С какво се занимавам?", a: "Със SEO одити, оптимизация, оптимизация за AI търсачки (GEO), изработка и ускоряване на сайтове с Next.js и WordPress, и поддръжка. Всички услуги са описани със цени в евро." },
  { q: "Какъв е опитът и квалификацията?", a: "Опитът е в онлайн магазини и бизнес сайтове, а квалификацията включва сертификати и курсове на Google, SEMrush, SoftUni и Web Cactus Academy. Пълният списък е по-горе на страницата, с връзки към сертификатите." },
  { q: "Работите ли сам или с екип?", a: "По проектите на Stanchev Digital работя директно аз. В някои казуси съм бил част от по-голям SEO екип, което е посочено в самия казус." },
  { q: "Как да се свържа с вас?", a: "Чрез формата на страницата за контакти или като запазите 15-минутен разговор. Първоначалният разговор до 30 минути е безплатен." },
  { q: "На какви езици работите?", a: "На български и английски." },
];

export default function About() {
  const cases = getPosts(["src", "app", "work", "projects"]).length;
  const articles = getPosts(["src", "app", "blog", "posts"]).length;
  const certs = about.studies.institutions.filter((i) => !/Военна/.test(i.name)).length;

  const stats = [
    { value: String(cases), label: "SEO казуса" },
    { value: String(articles), label: "статии в блога" },
    { value: "30+", label: "GEO и технически одита" },
    { value: String(certs), label: "сертификата и курса" },
  ];

  const socialLinks = social.filter((s) => s.link && !s.link.startsWith("mailto:"));
  const url = `${baseURL}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ProfilePage", "@id": `${url}#webpage`, url, name: title, description, inLanguage: "bg-BG", mainEntity: { "@id": `${baseURL}/#person` }, breadcrumb: { "@id": `${url}#breadcrumb` } },
      {
        "@type": "Person",
        "@id": `${baseURL}/#person`,
        name: person.name,
        url: baseURL,
        image: `${baseURL}${person.avatar}`,
        jobTitle: person.role,
        description,
        knowsLanguage: ["bg", "en"],
        address: { "@type": "PostalAddress", addressLocality: "София", addressCountry: "BG" },
        knowsAbout: ["SEO", "Техническо SEO", "GEO", "Core Web Vitals", "Next.js", "WordPress", "Структурирани данни"],
        sameAs: socialLinks.map((s) => s.link),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name: "За мен", item: url },
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
          gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 30, y: 0, width: 130, height: 80, opacity: 60 }}
          lines={{ display: true, size: "24", thickness: 1, angle: 45, color: "neutral-alpha-weak", opacity: 40 }}
          mask={{ x: 70, y: 0, radius: 100 }}
        />
        <Column zIndex={1} maxWidth="l" fillWidth gap="32">
          <Trail items={[{ label: "Начало", href: "/" }, { label: "За мен" }]} />
          <Heading as="h1" variant="display-strong-xl" wrap="balance" style={{ maxWidth: "18ch" }}>
            За мен: SEO консултант, SEO специалист и уеб разработчик
          </Heading>

          <Row fillWidth radius="xl" border="neutral-alpha-medium" background="surface" overflow="hidden" s={{ direction: "column" }}>
            <Column flex={4} fillWidth minWidth={0} center padding="l" gap="16" overflow="hidden">
              <Background position="absolute" fill gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 50, y: 100, width: 120, height: 90, opacity: 70 }} dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }} />
              <Column zIndex={1} center gap="16" align="center">
                <Media src={person.avatar} alt={`${person.name} - портрет`} aspectRatio="1 / 1" radius="xl" border="neutral-alpha-medium" sizes="320px" style={{ width: 220, maxWidth: "100%" }} priority />
                <Row gap="8" vertical="center" onBackground="neutral-weak">
                  <Icon name="globe" size="xs" onBackground="accent-weak" /> София, България
                </Row>
                <Row gap="8" wrap horizontal="center">
                  {person.languages?.map((l) => (
                    <Tag key={l} size="m">{l}</Tag>
                  ))}
                </Row>
              </Column>
            </Column>
            <Column flex={7} fillWidth padding="xl" s={{ padding: "l" }} gap="16">
              <Row gap="8" wrap>
                <Tag scheme="brand" size="m">SEO консултант</Tag>
                <Tag scheme="accent" size="m">SEO специалист</Tag>
                <Tag scheme="neutral" size="m">Уеб разработчик</Tag>
              </Row>
              <Heading as="h2" variant="heading-strong-xl">Накратко</Heading>
              <Column textVariant="body-default-l" gap="12" onBackground="neutral-medium">
                {about.intro.description}
              </Column>
              <Row gap="12" wrap paddingTop="8">
                <Button href="/kontakti" size="l" arrowIcon>Безплатна консултация</Button>
                <Button href={about.calendar.link} size="l" variant="secondary" prefixIcon="calendar">Запазете 15 минути</Button>
              </Row>
              <Row gap="8" wrap paddingTop="4">
                {socialLinks.map((s) => (
                  <IconButton key={s.name} href={s.link} icon={s.icon} variant="secondary" size="l" tooltip={s.name} />
                ))}
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <RevealOnView>
            <Column fillWidth borderTop borderLeft radius="l" overflow="hidden" border="neutral-alpha-medium">
              <Grid fillWidth columns={4} m={{ columns: 2 }} s={{ columns: 1 }}>
                {stats.map((s) => (
                  <Column key={s.label} padding="24" center gap="4" borderRight borderBottom>
                    <Text variant="display-strong-s">{s.value}</Text>
                    <Text variant="label-default-s" onBackground="neutral-weak">{s.label}</Text>
                  </Column>
                ))}
              </Grid>
            </Column>
          </RevealOnView>

          <Column gap="24">
            <SectionTitle eyebrow="Един човек, три роли" title="Какво правя" lead="Консултантът определя посоката, специалистът изпълнява, а разработчикът внедрява в кода." />
            <RevealOnView>
              <Grid fillWidth columns={3} m={{ columns: 1 }} gap="16">
                {roles.map((r, i) => (
                  <Column key={r.title} padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface" overflow="hidden">
                    {i === 1 && (
                      <Mask position="absolute" right="0" top="0" radius={33} x={75} y={0}>
                        <MatrixFx size={1.5} colors={["brand-background-strong"]} flicker />
                      </Mask>
                    )}
                    <Icon name={r.icon} size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" />
                    <Heading as="h3" variant="heading-strong-m">{r.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">{r.text}</Text>
                    <Row paddingTop="4"><Button href={r.href} variant="secondary" size="s" arrowIcon>{r.cta}</Button></Row>
                  </Column>
                ))}
              </Grid>
            </RevealOnView>
          </Column>

          {about.work.display && (
            <Column gap="24">
              <SectionTitle eyebrow="Опит" title={about.work.title} />
              <Column fillWidth gap="16">
                {about.work.experiences.map((e) => (
                  <Column key={e.company} fillWidth padding="24" s={{ padding: "20" }} gap="16" radius="l" border="neutral-alpha-weak" background="surface">
                    <Row fillWidth horizontal="between" vertical="center" wrap gap="8">
                      <Column gap="4">
                        <Heading as="h3" variant="heading-strong-l">{e.company}</Heading>
                        <Text variant="body-default-s" onBackground="brand-weak">{e.role}</Text>
                      </Column>
                      <Tag size="m" scheme="neutral">{e.timeframe}</Tag>
                    </Row>
                    <Line />
                    <Column as="ul" gap="12" style={{ paddingLeft: 0, listStyle: "none" }}>
                      {e.achievements.map((a, i) => (
                        <Row as="li" key={i} gap="12" vertical="start">
                          <Icon name="check" size="xs" onBackground="brand-medium" style={{ marginTop: 4, flexShrink: 0 }} />
                          <Text variant="body-default-m" onBackground="neutral-medium">{a}</Text>
                        </Row>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </Column>
          )}

          {about.technical.display && (
            <Column gap="24">
              <SectionTitle eyebrow="Умения" title={about.technical.title} />
              <Grid fillWidth columns={3} m={{ columns: 1 }} gap="16">
                {about.technical.skills.map((sk) => (
                  <Column key={sk.title} padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface">
                    <Heading as="h3" variant="heading-strong-m">{sk.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">{sk.description}</Text>
                    <Row gap="8" wrap paddingTop="4">
                      {sk.tags?.map((t) => (
                        <Tag key={t.name} size="m" prefixIcon={t.icon as IconName}>{t.name}</Tag>
                      ))}
                    </Row>
                  </Column>
                ))}
              </Grid>
            </Column>
          )}

          {about.studies.display && (
            <Column gap="24">
              <SectionTitle eyebrow="Квалификация" title="Сертификати и образование" lead="Връзките водят към самите сертификати." />
              <Grid fillWidth columns={3} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
                {about.studies.institutions.map((inst) => (
                  <Column key={inst.name} padding="20" gap="8" radius="l" border="neutral-alpha-weak" background="surface">
                    <Row gap="8" vertical="center">
                      <Icon name="check" size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="4" />
                      <Heading as="h3" variant="heading-strong-s">{inst.name}</Heading>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak">{inst.description}</Text>
                  </Column>
                ))}
              </Grid>
            </Column>
          )}

          <Column gap="24">
            <SectionTitle eyebrow="Подход" title="Как работя" lead="Прозрачност, ефективност и устойчиви резултати." />
            <Grid fillWidth columns={3} m={{ columns: 1 }} gap="16">
              {principles.map((p) => (
                <Column key={p.title} padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface">
                  <Icon name={p.icon} size="s" border="accent-alpha-weak" background="accent-alpha-weak" onBackground="accent-weak" radius="m" padding="8" />
                  <Heading as="h3" variant="heading-strong-m">{p.title}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">{p.text}</Text>
                </Column>
              ))}
            </Grid>
          </Column>

          <Row gap="12" wrap>
            <Button href="/seo-proekti" variant="secondary" arrowIcon>SEO проекти</Button>
            <Button href="/blog" variant="secondary" arrowIcon>Блог</Button>
            <Button href="/seo-uslugi" variant="secondary" arrowIcon>SEO услуги и цени</Button>
          </Row>

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси" />
            <Faq items={faq} />
          </Column>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingY="56" theme="dark" s={{ paddingY: "32" }}>
        <GeoBackground style={{ left: "50%", width: "100vw", transform: "translateX(-50%)" }} />
        <Column zIndex={1} maxWidth="m" fillWidth paddingX="24" gap="20" horizontal="center" align="center">
          <Avatar src={person.avatar} size="l" />
          <Heading as="h2" variant="display-strong-xs" wrap="balance">Нека поговорим за вашия сайт</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Първоначалният разговор до 30 минути е безплатен и без ангажимент.
          </Text>
          <Row gap="12" wrap horizontal="center">
            <Button href="/kontakti" size="l" arrowIcon>Безплатна консултация</Button>
            <Button href={about.calendar.link} size="l" variant="secondary" prefixIcon="calendar">Запазете 15 минути</Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
