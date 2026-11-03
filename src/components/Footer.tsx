import { Avatar, Background, Column, Grid, Icon, IconButton, Row, SmartLink, Text, type IconName } from "@once-ui-system/core";
import { person, social } from "@/resources";
import { getService, servicePath } from "@/resources/services";
import { ContactIconButton } from "@/components/ProtectedContact";
import { EMAIL_PARTS } from "@/lib/contact";

const platforms: { icon: IconName; label: string }[] = [
  { icon: "wordpress", label: "WordPress" },
  { icon: "nextjs", label: "Next.js" },
  { icon: "gsconsole", label: "Search Console" },
  { icon: "lighthouse", label: "Lighthouse" },
];

const svc = (slug: string) => {
  const s = getService(slug);
  return s ? { label: s.name, href: servicePath(s) } : null;
};

const columns: { title: string; links: ({ label: string; href: string } | null)[] }[] = [
  {
    title: "SEO услуги",
    links: [
      { label: "SEO консултант", href: "/seo-konsultant" },
      svc("seo-odit"),
      svc("seo-optimizatsiya"),
      svc("on-page-seo"),
      svc("keyword-research"),
      svc("lokalno-seo"),
      { label: "Всички SEO услуги и цени", href: "/seo-uslugi" },
    ],
  },
  {
    title: "Уеб и AI",
    links: [
      svc("llm-seo"),
      svc("izrabotka-sajt"),
      svc("izrabotka-sait-nextjs"),
      svc("headless-wordpress-sait"),
      svc("optimizatsiya-sajt"),
      { label: "Всички уеб услуги", href: "/web" },
    ],
  },
  {
    title: "Информация",
    links: [
      { label: "За мен", href: "/za-men" },
      { label: "SEO проекти", href: "/seo-proekti" },
      { label: "Блог", href: "/blog" },
      { label: "Контакти", href: "/kontakti" },
    ],
  },
];

const legal = [
  { label: "Общи условия", href: "/obshti-usloviya" },
  { label: "GDPR", href: "/gdpr" },
  { label: "Бисквитки", href: "/cookie-policy" },
];

const socialIcons = new Set<string>(["github", "linkedin", "devto", "email", "facebook", "twitter", "x", "threads"]);

const Lines = (props: React.ComponentProps<typeof Background>) => (
  <Background
    lines={{ display: true, color: "neutral-alpha-weak", angle: -45, size: "4" }}
    width={12}
    minWidth={12}
    m={{ hide: true }}
    {...props}
  />
);

export const Footer = (flex: React.ComponentProps<typeof Column>) => {
  const currentYear = new Date().getFullYear();

  return (
    <Column as="footer" fillWidth horizontal="center" marginTop="40" {...flex}>
      <Row fillWidth borderY="neutral-alpha-medium" horizontal="center">
        <Lines borderRight="neutral-alpha-medium" />
        <Column maxWidth="xl" fillWidth paddingX="xl" paddingY="48" gap="24" borderX="neutral-alpha-medium" horizontal="center" s={{ paddingX: "l" }}>
          <Column gap="8" maxWidth={40} horizontal="center">
            <Text align="center" variant="heading-default-xl">
              Видимост в Google и в AI търсачките.
            </Text>
            <Text align="center" variant="body-default-s" onBackground="neutral-weak" wrap="balance">
              SEO консултант, SEO специалист и уеб разработчик в България. Работя с платформи и инструменти като:
            </Text>
          </Column>
          <Grid columns="4" m={{ columns: 2 }} maxWidth={48}>
            {platforms.map((p) => (
              <Row key={p.label} center padding="24" gap="12" vertical="center" onBackground="neutral-weak">
                <Icon name={p.icon} size="m" />
                <Text variant="label-default-m">{p.label}</Text>
              </Row>
            ))}
          </Grid>
        </Column>
        <Lines borderLeft="neutral-alpha-medium" />
      </Row>

      <Row fillWidth horizontal="center" borderBottom="neutral-alpha-medium">
        <Row flex={1} m={{ hide: true }} borderRight="neutral-alpha-medium" />
        <Grid maxWidth="xl" fillWidth columns="3" s={{ columns: 1 }} borderX="neutral-alpha-medium" paddingX="xl" paddingY="32" gap="32" as="nav" aria-label="Карта на сайта">
          {columns.map((col) => (
            <Column key={col.title} gap="12">
              <Text variant="label-strong-s" onBackground="neutral-medium">
                {col.title}
              </Text>
              {col.links.map(
                (l) =>
                  l && (
                    <SmartLink key={l.href} href={l.href} unstyled>
                      <Text variant="label-default-s" onBackground="neutral-weak">
                        {l.label}
                      </Text>
                    </SmartLink>
                  ),
              )}
            </Column>
          ))}
        </Grid>
        <Row flex={1} m={{ hide: true }} borderLeft="neutral-alpha-medium" />
      </Row>

      <Row fillWidth horizontal="center" borderBottom="neutral-alpha-medium">
        <Row flex={1} m={{ hide: true }} borderRight="neutral-alpha-medium" />
        <Row maxWidth="xl" fillWidth borderX="neutral-alpha-medium" paddingX="xl" paddingY="24" horizontal="between" vertical="center" wrap gap="24">
          <SmartLink href="/" unstyled>
            <Row gap="12" vertical="center">
              <Avatar src={person.avatar} size="s" />
              <Text variant="heading-strong-s">{person.name}</Text>
            </Row>
          </SmartLink>
          <Row gap="16" wrap>
            {legal.map((link) => (
              <SmartLink key={link.href} href={link.href} unstyled>
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {link.label}
                </Text>
              </SmartLink>
            ))}
          </Row>
          <Row gap="8">
            {social
              .filter((item) => item.link && !item.link.startsWith("mailto:") && socialIcons.has(item.icon))
              .map((item) => (
                <IconButton key={item.name} data-border="rounded" icon={item.icon} variant="secondary" size="l" href={item.link} tooltip={item.name} rel="nofollow" />
              ))}
            <ContactIconButton kind="email" parts={EMAIL_PARTS} icon="email" label="Имейл" />

          </Row>
        </Row>
        <Row flex={1} m={{ hide: true }} borderLeft="neutral-alpha-medium" />
      </Row>

      <Row fillWidth borderBottom="neutral-alpha-medium" horizontal="center">
        <Row flex={1} m={{ hide: true }}>
          <Lines borderRight="neutral-alpha-medium" />
        </Row>
        <Row paddingY="20" center maxWidth="xl" fillWidth textVariant="label-default-s" onBackground="neutral-medium" borderX="neutral-alpha-medium">
          © {currentYear} {person.name}. Всички права запазени.
        </Row>
        <Row flex={1} m={{ hide: true }}>
          <Lines borderLeft="neutral-alpha-medium" />
        </Row>
      </Row>
    </Column>
  );
};
