import { Background, Button, Column, Grid, Heading, Icon, Row, Tag, Text, type IconName } from "@once-ui-system/core";
import ContactForm from "./ContactForm";
import { ContactButton, ContactCopyButton, ContactText } from "@/components/ProtectedContact";
import { GeoBackground } from "@/components/seo/GeoBackground";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/components/seo/metadata";
import { Checklist, Faq, SectionTitle, Trail } from "@/components/seo/blocks";
import { EMAIL_PARTS, PHONE_GROUPS } from "@/lib/contact";
import { sendEmail } from "@/lib/sendEmail";
import { about, baseURL } from "@/resources";

export const dynamic = "force-dynamic";

const path = "/kontakti";
const title = "Контакти - безплатна SEO консултация | Stanchev Digital";
const description =
  "Безплатна първоначална SEO консултация и запитвания за одит, оптимизация и изработка на сайт: телефон, имейл, форма и онлайн разговор. София.";

export const metadata = buildMetadata({
  title,
  description,
  path,
  keywords: ["контакти seo консултант", "seo консултация", "безплатна seo консултация", "запитване за seo", "seo консултант софия", "seo оферта"],
});

const faq = [
  { q: "Как да се свържа със SEO консултант?", a: "Най-бързо е през формата на тази страница, по телефона или чрез онлайн разговор от 15 минути. Първоначалният разговор до 30 минути е безплатен и без ангажимент." },
  { q: "Колко струва първата консултация?", a: "Първият разговор до 30 минути е безплатен. По-задълбочената консултация е 50 € на час." },
  { q: "Какво да включа в запитването?", a: "Адрес на сайта, платформа (WordPress, OpenCart, Magento, Next.js и др.), какво искате да постигнете и всичко, което вече сте опитвали. Така мога да отговоря конкретно." },
  { q: "Кога работите?", a: "Понеделник - петък, от 9:30 до 16:30, от София. Работя дистанционно с клиенти от цялата страна." },
  { q: "Защо адресът ми за контакт е разделен на части?", a: "За да защитя имейла и телефона от автоматични спам ботове. Хората, търсачките и AI асистентите виждат целия контакт, а при клик се отваря вашата поща или набиране." },
  { q: "Мога ли да запазя час за разговор?", a: "Да. Можете да запазите 15 минути през онлайн календара." },
];

const needs = [
  "Адрес на сайта и платформа (WordPress, OpenCart, Magento, Next.js)",
  "Целта: повече трафик, поръчки, запитвания или оптимизация за AI търсачки",
  "Какво вече е опитано и какъв е резултатът",
  "Удобно време за разговор",
];

export default function Kontakti() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const recaptchaToken = formData.get("recaptchaToken")?.toString() || "";

    if (process.env.RECAPTCHA_SECRET) {
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET,
          response: recaptchaToken,
        }).toString(),
        cache: "no-store",
      });

      const verifyJson = (await verifyRes.json()) as { success: boolean; score?: number };
      if (!verifyJson.success || (typeof verifyJson.score === "number" && verifyJson.score < 0.5)) {
        throw new Error("reCAPTCHA verification failed");
      }
    }

    await sendEmail({ name, email, subject, message });
  }

  const url = `${baseURL}${path}`;
  const email = `${EMAIL_PARTS[0]}@${EMAIL_PARTS.slice(1).join(".")}`;
  const phone = `+359${PHONE_GROUPS.join("").slice(1)}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ContactPage", "@id": `${url}#webpage`, url, name: title, description, inLanguage: "bg-BG", breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#org` } },
      {
        "@type": "ProfessionalService",
        "@id": `${url}#org`,
        name: "Stanchev Digital",
        url: baseURL,
        telephone: phone,
        email,
        areaServed: { "@type": "Country", name: "България" },
        address: { "@type": "PostalAddress", addressLocality: "София", addressCountry: "BG" },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "16:30" },
        ],
        contactPoint: [
          { "@type": "ContactPoint", contactType: "customer service", telephone: phone, email, availableLanguage: ["bg", "en"], areaServed: "BG" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: baseURL },
          { "@type": "ListItem", position: 2, name: "Контакти", item: url },
        ],
      },
    ],
  };

  const info: { icon: IconName; label: string; value: string }[] = [
    { icon: "map", label: "Локация", value: "София, България" },
    { icon: "calendar", label: "Работно време", value: "Понеделник - петък, 9:30 - 16:30" },
  ];

  return (
    <Column fillWidth horizontal="center" paddingBottom="64" gap="48" s={{ paddingBottom: "40", gap: "32" }}>
      <JsonLd data={schema} />

      <Column fillWidth horizontal="center" paddingTop="8" paddingBottom="16" id="kontakt">
        <Background
          position="absolute"
          fill
          pointerEvents="none"
          style={{ left: "50%", width: "100vw", transform: "translateX(-50%)", top: "-24px", height: "calc(100% + 24px)" }}
          gradient={{ display: true, colorStart: "brand-alpha-medium", colorEnd: "static-transparent", x: 20, y: 0, width: 130, height: 80, opacity: 60 }}
          dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 40 }}
        />
        <Column zIndex={1} maxWidth="l" fillWidth gap="32">
          <Trail items={[{ label: "Начало", href: "/" }, { label: "Контакти" }]} />
          <Row fillWidth gap="48" vertical="start" m={{ direction: "column" }}>
            <Column flex={6} gap="24" fillWidth>
              <Row gap="8" wrap>
                <Tag scheme="brand" size="m">Безплатна консултация</Tag>
                <Tag scheme="neutral" size="m">София</Tag>
              </Row>
              <Heading as="h1" variant="display-strong-l" wrap="balance">
                Контакти: безплатна SEO консултация
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
                Опишете накратко сайта и целта си. Първоначалният разговор до 30 минути е безплатен и без ангажимент.
              </Text>

              <Column gap="12" fillWidth>
                <Row fillWidth gap="16" padding="16" radius="l" border="neutral-alpha-medium" background="surface" vertical="center" s={{ direction: "column", vertical: "start" }}>
                  <Row flex={1} gap="16" vertical="center" fillWidth>
                    <Icon name="phone" size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" />
                    <Column gap="2">
                      <Text variant="label-default-xs" onBackground="neutral-weak">Телефон</Text>
                      <Text variant="heading-strong-m"><ContactText kind="phone" parts={PHONE_GROUPS} /></Text>
                    </Column>
                  </Row>
                  <Row gap="8" wrap>
                    <ContactButton kind="phone" parts={PHONE_GROUPS} icon="phone" size="s">Обадете се</ContactButton>
                    <ContactCopyButton kind="phone" parts={PHONE_GROUPS} />
                  </Row>
                </Row>

                <Row fillWidth gap="16" padding="16" radius="l" border="neutral-alpha-medium" background="surface" vertical="center" s={{ direction: "column", vertical: "start" }}>
                  <Row flex={1} gap="16" vertical="center" fillWidth>
                    <Icon name="email" size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" />
                    <Column gap="2">
                      <Text variant="label-default-xs" onBackground="neutral-weak">Имейл</Text>
                      <Text variant="heading-strong-m"><ContactText kind="email" parts={EMAIL_PARTS} /></Text>
                    </Column>
                  </Row>
                  <Row gap="8" wrap>
                    <ContactButton kind="email" parts={EMAIL_PARTS} icon="email" size="s">Пишете</ContactButton>
                    <ContactCopyButton kind="email" parts={EMAIL_PARTS} />
                  </Row>
                </Row>

                <Row fillWidth gap="16" padding="16" radius="l" border="brand-alpha-medium" background="brand-alpha-weak" vertical="center" s={{ direction: "column", vertical: "start" }}>
                  <Row flex={1} gap="16" vertical="center" fillWidth>
                    <Icon name="calendar" size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" />
                    <Column gap="2">
                      <Text variant="label-default-xs" onBackground="neutral-weak">Онлайн разговор</Text>
                      <Text variant="heading-strong-m">Запазете 15 минути</Text>
                    </Column>
                  </Row>
                  <Button href={about.calendar.link} size="s" arrowIcon>Запазете час</Button>
                </Row>

                {info.map((d) => (
                  <Row key={d.label} gap="16" vertical="center" paddingX="16">
                    <Icon name={d.icon} size="s" onBackground="neutral-weak" />
                    <Text variant="body-default-m" onBackground="neutral-medium">
                      {d.label}: {d.value}
                    </Text>
                  </Row>
                ))}
              </Column>
            </Column>

            <Column flex={5} fillWidth background="surface" border="neutral-alpha-medium" radius="xl" padding="xl" s={{ padding: "l" }} gap="16">
              <Column gap="4">
                <Heading as="h2" variant="heading-strong-l">Изпратете запитване</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">Отговарям обикновено в рамките на работния ден.</Text>
              </Column>
              <ContactForm handleSubmit={handleSubmit} />
            </Column>
          </Row>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" gap="64" s={{ gap: "40" }}>
        <Column maxWidth="l" fillWidth gap="64" s={{ gap: "40" }}>
          <Column fillWidth gap="12" paddingLeft="24" style={{ borderLeft: "3px solid var(--brand-solid-medium)" }}>
            <Heading as="h2" variant="heading-strong-xl" wrap="balance">Как да се свържете със SEO консултант?</Heading>
            <Text variant="body-default-l" onBackground="neutral-medium">
              Най-бързо е през формата по-горе, по телефона или чрез онлайн разговор от 15 минути. Работя от София, понеделник - петък, 9:30 - 16:30, и дистанционно с клиенти от цялата страна. Първоначалният разговор до 30 минути е безплатен.
            </Text>
          </Column>

          <Grid fillWidth columns={2} s={{ columns: 1 }} gap="16">
            <Column padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface">
              <Heading as="h3" variant="heading-strong-m">Какво да включите в запитването</Heading>
              <Checklist items={needs} />
            </Column>
            <Column padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface">
              <Heading as="h3" variant="heading-strong-m">Какво следва</Heading>
              <Checklist
                items={[
                  "Преглеждам сайта и въпросите ви",
                  "Отговарям с конкретни следващи стъпки",
                  "При нужда уговаряме разговор и оферта",
                ]}
              />
              <Row gap="8" wrap paddingTop="4">
                <Button href="/seo-uslugi" variant="secondary" size="s" arrowIcon>SEO услуги и цени</Button>
                <Button href="/seo-konsultant" variant="secondary" size="s" arrowIcon>SEO консултант</Button>
              </Row>
            </Column>
          </Grid>

          <Column gap="32">
            <SectionTitle eyebrow="Въпроси" title="Често задавани въпроси за контакта" />
            <Faq items={faq} />
          </Column>
        </Column>
      </Column>

      <Column fillWidth horizontal="center" paddingY="56" theme="dark" s={{ paddingY: "32" }}>
        <GeoBackground style={{ left: "50%", width: "100vw", transform: "translateX(-50%)" }} />
        <Column zIndex={1} maxWidth="m" fillWidth paddingX="24" gap="20" horizontal="center" align="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">Готови сте да започнем?</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Опишете сайта и целта си. Първоначалният разговор е безплатен.
          </Text>
          <Row gap="12" wrap horizontal="center">
            <Button href="#kontakt" size="l" arrowIcon>Към формата</Button>
            <Button href={about.calendar.link} size="l" variant="secondary" prefixIcon="calendar">Запазете 15 минути</Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
