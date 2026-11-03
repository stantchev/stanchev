"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Avatar, Button, Column, MegaMenu, MobileMegaMenu, NavIcon, Row, SmartLink, Text, type IconName } from "@once-ui-system/core";
import { display, person } from "@/resources";
import { getService, servicePath } from "@/resources/services";
import { ThemeToggle } from "./ThemeToggle";

type Link = { label: string; href: string; icon: IconName; description: string };

const svc = (slug: string, description?: string): Link | null => {
  const s = getService(slug);
  return s ? { label: s.name, href: servicePath(s), icon: s.icon, description: description ?? s.summary } : null;
};
const compact = (links: (Link | null)[]): Link[] => links.filter((l): l is Link => Boolean(l));

const nav = [
  {
    id: "seo",
    label: "SEO услуги",
    suffixIcon: "chevronDown" as const,
    sections: [
      {
        title: "Започнете оттук",
        links: compact([
          { label: "SEO консултант", href: "/seo-konsultant", icon: "person", description: "Одит, стратегия и ясен план" },
          svc("seo-odit"),
          svc("seo-optimizatsiya"),
          svc("seo-konsultaciya"),
        ]),
      },
      {
        title: "Оптимизация",
        links: compact([
          svc("on-page-seo"),
          svc("keyword-research"),
          svc("link-building"),
          svc("lokalno-seo"),
          svc("ecommerce-seo"),
          { label: "Всички SEO услуги и цени", href: "/seo-uslugi", icon: "arrowRight", description: "Пълен списък с ориентировъчни цени" },
        ]),
      },
    ],
  },
  {
    id: "web",
    label: "Уеб и AI",
    suffixIcon: "chevronDown" as const,
    sections: [
      {
        title: "AI и GEO",
        links: compact([
          svc("llm-seo"),
          svc("seo-integratsiya"),
        ]),
      },
      {
        title: "Сайтове",
        links: compact([
          svc("izrabotka-sajt"),
          svc("izrabotka-sait-nextjs"),
          svc("headless-wordpress-sait"),
          svc("optimizatsiya-sajt"),
          { label: "Всички уеб услуги", href: "/web", icon: "arrowRight", description: "Изработка, скорост и поддръжка" },
        ]),
      },
    ],
  },
  { id: "projects", label: "Проекти", href: "/seo-proekti" },
  { id: "blog", label: "Блог", href: "/blog" },
  { id: "about", label: "За мен", href: "/za-men" },
  { id: "contact", label: "Контакти", href: "/kontakti" },
];

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const groups = useMemo(
    () =>
      nav.map((g) => ({
        ...g,
        selected: g.href ? (g.href === "/" ? pathname === "/" : pathname.startsWith(g.href)) : undefined,
      })),
    [pathname],
  );

  return (
    <Row
      as="header"
      borderBottom
      fillWidth
      paddingX="m"
      minHeight="56"
      vertical="center"
      background="page"
      position="sticky"
      top="0"
      zIndex={9}
    >
      <Row gap="4" vertical="center" style={{ flexShrink: 0 }}>
        <NavIcon active={open} onClick={() => setOpen(!open)} aria-label="Отваряне на менюто" aria-expanded={open} hide s={{ hide: false }} />
        <SmartLink href="/" style={{ textDecoration: "none" }}>
          <Row gap="8" vertical="center">
            <Avatar src={person.avatar} size="xs" />
            <Text variant="heading-strong-s" onBackground="neutral-strong">
              Stanchev Digital
            </Text>
          </Row>
        </SmartLink>
      </Row>

      <Row fillWidth vertical="center" horizontal="end">
        <Row s={{ hide: true }} textVariant="label-default-s" fillWidth gap="16" paddingX="l" vertical="center">
          <MegaMenu menuGroups={groups} />
        </Row>
        <Row fitWidth vertical="center" gap="8">
          {display.themeSwitcher && <ThemeToggle />}
          <Row s={{ hide: true }}>
            <Button size="s" href="/kontakti" label="Безплатна консултация" />
          </Row>
        </Row>
      </Row>

      {open && (
        <Column top="56" left="0" position="absolute" padding="8" fillWidth overflowY="auto" style={{ maxHeight: "calc(100vh - var(--static-space-56))" }}>
          <MobileMegaMenu padding="8" background="surface" border="surface" radius="l-4" menuGroups={groups} onClose={() => setOpen(false)} />
        </Column>
      )}
    </Row>
  );
};
