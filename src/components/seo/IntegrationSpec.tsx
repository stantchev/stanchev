"use client";

import { useMemo, useState } from "react";
import { Background, Button, Checkbox, Column, Heading, Row, Text } from "@once-ui-system/core";

const platforms = ["Next.js", "WordPress", "Онлайн магазин (OpenCart / Magento)", "Друга платформа"] as const;

const items: { key: string; title: string; spec: string }[] = [
  { key: "meta", title: "Метаданни и canonical", spec: "Уникални title и description за всяка страница, canonical адрес и Open Graph от един източник на данни." },
  { key: "schema", title: "Структурирани данни", spec: "JSON-LD по тип страница (Organization, Service, Article, BreadcrumbList), съвпадащ с видимия текст." },
  { key: "sitemap", title: "Sitemap", spec: "XML sitemap, генериран автоматично; само страници със статус 200, без noindex и без пренасочвания." },
  { key: "robots", title: "robots.txt", spec: "Разрешени Googlebot и ботове за търсене; препратка към sitemap; без блокиране на CSS и JS." },
  { key: "redirects", title: "Пренасочвания", spec: "Карта стар - нов адрес с постоянни пренасочвания, без вериги и без пренасочване към началната страница." },
  { key: "domain", title: "Една версия на домейна", spec: "Всички варианти (http, www) водят с постоянно пренасочване към една HTTPS версия." },
  { key: "tracking", title: "Search Console и Analytics", spec: "Верификация на Search Console, GA4 и ключови събития (заявка, обаждане, покупка)." },
  { key: "cwv", title: "Core Web Vitals бюджет", spec: "Цели LCP до 2,5 s, INP до 200 ms и CLS до 0,1 за ключовите шаблони, измерени преди пускане." },
];

export function IntegrationSpec() {
  const [platform, setPlatform] = useState<(typeof platforms)[number]>("Next.js");
  const [picked, setPicked] = useState<Record<string, boolean>>({ meta: true, schema: true, sitemap: true, robots: true });
  const [copied, setCopied] = useState(false);

  const text = useMemo(() => {
    const lines = items.filter((i) => picked[i.key]).map((i, n) => `${n + 1}. ${i.title}: ${i.spec}`);
    if (lines.length === 0) return "Изберете поне една интеграция.";
    return `Спецификация за SEO интеграция\nПлатформа: ${platform}\n\n${lines.join("\n")}\n\nПроверка: Rich Results Test, URL Inspection в Search Console и Lighthouse преди пускане.`;
  }, [picked, platform]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
    }
  };

  return (
    <Column fillWidth radius="xl" border="neutral-alpha-medium" background="surface" overflow="hidden">
      <Background
        position="absolute"
        fill
        pointerEvents="none"
        gradient={{ display: true, colorStart: "accent-alpha-weak", colorEnd: "static-transparent", x: 100, y: 100, width: 100, height: 80, opacity: 60 }}
      />
      <Row zIndex={1} fillWidth s={{ direction: "column" }}>
        <Column flex={5} fillWidth padding="xl" s={{ padding: "l" }} gap="16">
          <Column gap="8">
            <Text variant="label-strong-s">Платформа</Text>
            <Row gap="8" wrap>
              {platforms.map((p) => (
                <Button key={p} size="s" variant={platform === p ? "primary" : "secondary"} onClick={() => setPlatform(p)}>
                  {p}
                </Button>
              ))}
            </Row>
          </Column>
          <Column gap="12">
            <Text variant="label-strong-s">Какво да се внедри</Text>
            {items.map((i) => (
              <Checkbox key={i.key} label={i.title} checked={!!picked[i.key]} onToggle={(v) => setPicked((s) => ({ ...s, [i.key]: v }))} />
            ))}
          </Column>
        </Column>
        <Column flex={6} fillWidth padding="xl" s={{ padding: "l" }} gap="12" borderLeft="neutral-alpha-weak">
          <Row horizontal="between" vertical="center" gap="8" wrap>
            <Heading as="p" variant="heading-strong-m">Вашата спецификация</Heading>
            <Button size="s" variant="secondary" prefixIcon={copied ? "check" : "document"} onClick={copy}>
              {copied ? "Копирано" : "Копирай"}
            </Button>
          </Row>
          <Column padding="16" radius="m" border="neutral-alpha-medium" background="page" style={{ whiteSpace: "pre-wrap", fontFamily: "var(--font-code, monospace)", fontSize: 13, lineHeight: 1.6 }}>
            {text}
          </Column>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Дайте го на вашия разработчик или ми го изпратете: ще го прегледам и ще проверя внедряването. Нищо не се записва.
          </Text>
        </Column>
      </Row>
    </Column>
  );
}
