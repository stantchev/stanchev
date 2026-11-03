"use client";

import { useState } from "react";
import { Background, Button, Checkbox, Column, Heading, Row, Text } from "@once-ui-system/core";

const items: { q: string; tip: string }[] = [
  { q: "Ключовите ми страници са индексирани в Google", tip: "Проверете в Search Console с URL Inspection дали страниците са индексирани." },
  { q: "robots.txt и защитите не блокират Googlebot, OAI-SearchBot и PerplexityBot", tip: "Проверете robots.txt и правилата на защитната стена или CDN за легитимните ботове." },
  { q: "Съдържанието е в HTML, не само зареждано с JavaScript", tip: "Отворете страницата с изключен JavaScript или вижте изходния код." },
  { q: "Всяка ключова страница започва с директен отговор", tip: "Поставете кратък отговор в първите две изречения на секцията." },
  { q: "Използвам ясни подзаглавия, списъци и таблици", tip: "Разбийте дългите текстове на самостоятелни пасажи с конкретни заглавия." },
  { q: "Има видим автор и страница, която обяснява кой стои зад сайта", tip: "Добавете автор, роля и страница за вас или фирмата." },
  { q: "Структурираните ми данни съвпадат с видимия текст", tip: "Валидирайте JSON-LD и се уверете, че не описва неща, които не са на страницата." },
  { q: "Данните за фирмата са еднакви на сайта, в Google Business Profile и в профилите", tip: "Уеднаквете име, описание, адрес и контакти навсякъде." },
  { q: "Имам споменавания или отзиви извън собствения си сайт", tip: "Търсете достоверни споменавания, каталози и отзиви, не купени линкове." },
  { q: "Следя трафика от AI и Search Console", tip: "Следете реферален трафик в Analytics и отчета за ефективност в Search Console." },
];

const levelOf = (score: number) =>
  score >= 8
    ? { title: "Силна основа", text: "Основите са налице. Следващата стъпка е измерване и точкова оптимизация на ключовите въпроси." }
    : score >= 4
      ? { title: "Добра основа с пропуски", text: "Има какво да се подобри. Започнете със стъпките по-долу." }
      : { title: "Първо основите", text: "Преди GEO е нужна здрава SEO основа. Започнете със стъпките по-долу." };

export function AiReadiness() {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));
  const score = checked.filter(Boolean).length;
  const level = levelOf(score);
  const missing = items.filter((_, i) => !checked[i]).slice(0, 3);

  return (
    <Column fillWidth radius="xl" border="neutral-alpha-medium" background="surface" overflow="hidden">
      <Background
        position="absolute"
        fill
        pointerEvents="none"
        gradient={{ display: true, colorStart: "brand-alpha-weak", colorEnd: "static-transparent", x: 0, y: 100, width: 100, height: 80, opacity: 60 }}
      />
      <Row zIndex={1} fillWidth gap="0" s={{ direction: "column" }}>
        <Column flex={6} fillWidth padding="xl" s={{ padding: "l" }} gap="12">
          {items.map((it, i) => (
            <Checkbox
              key={it.q}
              label={it.q}
              checked={checked[i]}
              onToggle={(v) => setChecked((c) => c.map((x, j) => (j === i ? v : x)))}
            />
          ))}
        </Column>
        <Column flex={4} fillWidth padding="xl" s={{ padding: "l" }} gap="16" borderLeft="neutral-alpha-weak">
          <Text variant="label-default-s" onBackground="neutral-weak">Вашият резултат</Text>
          <Row vertical="end" gap="8">
            <Heading as="p" variant="display-strong-l">{score}</Heading>
            <Text variant="heading-default-l" onBackground="neutral-weak">/ {items.length}</Text>
          </Row>
          <Row fillWidth height="8" radius="full" background="neutral-alpha-weak" overflow="hidden" aria-hidden="true">
            <Row height="8" radius="full" background="brand-strong" style={{ width: `${(score / items.length) * 100}%`, transition: "width 0.25s ease" }} />
          </Row>
          <Heading as="p" variant="heading-strong-m">{level.title}</Heading>
          <Text variant="body-default-s" onBackground="neutral-weak" wrap="balance">{level.text}</Text>
          {missing.length > 0 && (
            <Column gap="8">
              <Text variant="label-strong-s">Следващи стъпки</Text>
              {missing.map((m) => (
                <Text key={m.q} variant="body-default-xs" onBackground="neutral-weak">- {m.tip}</Text>
              ))}
            </Column>
          )}
          <Row paddingTop="8" gap="8" wrap>
            <Button href="/kontakti" size="s" arrowIcon>Поискайте GEO преглед</Button>
          </Row>
          <Text variant="body-default-xs" onBackground="neutral-weak">Самооценка. Не е гаранция за цитиране. Нищо не се изпраща и не се записва.</Text>
        </Column>
      </Row>
    </Column>
  );
}
