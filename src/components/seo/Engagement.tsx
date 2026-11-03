import { Avatar, Background, Button, Card, Column, Grid, Heading, Icon, Row, Tag, Text, type IconName } from "@once-ui-system/core";
import { person } from "@/resources";
import { SectionTitle } from "./blocks";

export function WorkFormats() {
  const formats: { icon: IconName; tag: string; title: string; text: string; price: string; href: string; cta: string }[] = [
    {
      icon: "seoaudit",
      tag: "Еднократно",
      title: "Одит или стратегия",
      text: "Диагностика, приоритизиран план или проверка преди редизайн, миграция и пускане на сайт. Изпълнявате сами или с моя помощ.",
      price: "SEO одит от 330 €",
      href: "/seo-uslugi/seo-odit",
      cta: "Вижте одита",
    },
    {
      icon: "messageCircle",
      tag: "По часове",
      title: "Консултация",
      text: "Конкретни отговори за вашия случай, преглед на работата на агенция или на вътрешния ви екип. Първите 30 минути са безплатни.",
      price: "50 € на час",
      href: "/seo-konsultant",
      cta: "SEO консултант",
    },
    {
      icon: "trendingUp",
      tag: "Продължително",
      title: "Оптимизация по договаряне",
      text: "Постоянна работа по техническо SEO, съдържание и линкове с месечен отчет. Обхватът и цената се уточняват писмено предварително.",
      price: "По договаряне",
      href: "/seo-uslugi/seo-optimizatsiya",
      cta: "SEO оптимизация",
    },
  ];

  return (
    <Column gap="24">
      <SectionTitle eyebrow="Формати на работа" title="Как можем да работим заедно" lead="Започнете с малко и надграждайте. Не е нужен дългосрочен договор за единични услуги." />
      <Grid fillWidth columns={3} m={{ columns: 1 }} gap="16">
        {formats.map((f, i) => (
          <Column key={f.title} padding="24" gap="12" radius="l" border={i === 1 ? "brand-alpha-medium" : "neutral-alpha-weak"} background="surface" overflow="hidden">
            {i === 1 && <Background position="absolute" fill gradient={{ display: true, colorStart: "brand-alpha-weak", colorEnd: "static-transparent", x: 50, y: 0, width: 120, height: 70, opacity: 60 }} />}
            <Row zIndex={1} horizontal="between" vertical="center">
              <Icon name={f.icon} size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" />
              <Tag scheme={i === 1 ? "brand" : "neutral"} size="s">{f.tag}</Tag>
            </Row>
            <Heading as="h3" variant="heading-strong-m" style={{ zIndex: 1 }}>{f.title}</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance" style={{ zIndex: 1 }}>{f.text}</Text>
            <Text variant="label-strong-m" onBackground="brand-weak" style={{ zIndex: 1 }}>{f.price}</Text>
            <Row zIndex={1} paddingTop="4">
              <Button href={f.href} variant="secondary" size="s" arrowIcon>{f.cta}</Button>
            </Row>
          </Column>
        ))}
      </Grid>
    </Column>
  );
}

export function WhoWorks() {
  return (
    <Row fillWidth radius="l" border="neutral-alpha-medium" background="surface" overflow="hidden" s={{ direction: "column" }}>
      <Column flex={4} fillWidth center padding="xl" s={{ padding: "l" }} gap="12" align="center">
        <Background
          position="absolute"
          fill
          gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 50, y: 100, width: 120, height: 90, opacity: 60 }}
          dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }}
        />
        <Column zIndex={1} center gap="12" align="center">
          <Avatar src={person.avatar} size="xl" />
          <Heading as="p" variant="heading-strong-l">{person.name}</Heading>
          <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">SEO консултант, SEO специалист и уеб разработчик</Text>
          <Button href="/za-men" variant="secondary" size="s" arrowIcon>За мен</Button>
        </Column>
      </Column>
      <Column flex={6} fillWidth padding="xl" s={{ padding: "l" }} gap="16">
        <Heading as="h2" variant="heading-strong-xl" wrap="balance">Кой ще работи по проекта ви</Heading>
        <Text variant="body-default-m" onBackground="neutral-medium">
          Един човек, от анализа до промените в кода. Говорите директно с този, който прави работата, без акаунт мениджъри и без предаване на задачи между отдели.
        </Text>
        <Column gap="8">
          {[
            "Директен контакт и бързи решения",
            "Същият човек анализира, оптимизира и внедрява",
            "Всяка промяна е обяснена и проследима в Search Console",
          ].map((x) => (
            <Row key={x} gap="8" vertical="center" textVariant="body-default-s">
              <Icon name="check" size="xs" onBackground="brand-medium" /> {x}
            </Row>
          ))}
        </Column>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Честно: за много големи проекти с няколко паралелни екипа е по-подходяща агенция. За малки и средни сайтове, магазини и локални бизнеси директната работа е по-бърза и по-прозрачна.
        </Text>
      </Column>
    </Row>
  );
}

export function Toolkit() {
  const tools = ["Google Search Console", "Google Analytics", "Lighthouse", "PageSpeed Insights", "Rich Results Test", "Chrome DevTools"];
  return (
    <Column gap="16">
      <SectionTitle eyebrow="Инструменти" title="С какво измервам" lead="Решенията се основават на данни от вашия сайт, а не на предположения." />
      <Row gap="8" wrap>
        {tools.map((t) => (
          <Tag key={t} size="l">{t}</Tag>
        ))}
      </Row>
    </Column>
  );
}

const resources = [
  { href: "/blog/kakvo-e-seo-konsultant", title: "Какво е SEO консултант и кога ви е нужен", text: "Ролята, задачите и как да изберете." },
  { href: "/blog/generative-engine-optimization-geo", title: "GEO оптимизация - пълно ръководство", text: "Как съдържанието се цитира от AI търсачките." },
  { href: "/blog/seo-cena-2025", title: "SEO цени 2026: колко струва SEO оптимизация", text: "Пазарни нива в евро, червени флагове и как да сравните оферти." },
  { href: "/blog/kakvo-e-seo", title: "Какво е SEO? Пълно ръководство за начинаещи", text: "Основите на оптимизацията стъпка по стъпка." },
];

export function FreeResources() {
  return (
    <Column gap="24">
      <SectionTitle eyebrow="Безплатно" title="Полезни ръководства" lead="Прочетете, преди да решите какво ви трябва." />
      <Grid fillWidth columns={4} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
        {resources.map((r) => (
          <Card key={r.href} href={r.href} fillWidth direction="column" padding="24" gap="8" radius="l" border="neutral-alpha-weak" background="surface">
            <Icon name="document" size="s" onBackground="brand-weak" />
            <Heading as="h3" variant="heading-strong-s">{r.title}</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">{r.text}</Text>
          </Card>
        ))}
      </Grid>
    </Column>
  );
}
