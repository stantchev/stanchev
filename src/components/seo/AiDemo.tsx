"use client";

import { useEffect, useState } from "react";
import { Background, Column, Icon, Row, Tag, Text } from "@once-ui-system/core";

const PROMPT = "Как да подготвя сайта си, за да го цитират ChatGPT и Google AI Overviews?";
const ANSWER =
  "Сайтът трябва да е индексиран и достъпен за ботовете, а всяка ключова страница да дава директен отговор в първите изречения [1]. Google уточнява, че за AI Overviews няма специални изисквания извън добрите SEO основи [2].";
const STEPS = ["Разбира въпроса", "Търси източници", "Подрежда отговора"];

export function AiAnswerDemo() {
  const [step, setStep] = useState<number | null>(null);
  const [chars, setChars] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setStep(0);
      setChars(0);
      STEPS.forEach((_, i) => timers.push(setTimeout(() => !cancelled && setStep(i + 1), 500 * (i + 1))));
      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          let n = 0;
          const iv = setInterval(() => {
            n += 3;
            setChars(Math.min(n, ANSWER.length));
            if (n >= ANSWER.length) clearInterval(iv);
          }, 22);
          timers.push(iv as unknown as ReturnType<typeof setTimeout>);
        }, 500 * (STEPS.length + 1)),
      );
    };
    run();
    return () => {
      cancelled = true;
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  const shownStep = step === null ? STEPS.length : step;
  const shown = chars === null ? ANSWER : ANSWER.slice(0, chars);
  const typing = chars !== null && chars < ANSWER.length;
  const done = chars === null || chars >= ANSWER.length;

  return (
    <Column fillWidth radius="xl" border="neutral-alpha-medium" background="surface" overflow="hidden" shadow="l">
      <Background
        position="absolute"
        fill
        pointerEvents="none"
        gradient={{ display: true, colorStart: "accent-alpha-medium", colorEnd: "static-transparent", x: 100, y: 0, width: 100, height: 80, opacity: 60 }}
        dots={{ display: true, color: "neutral-alpha-weak", size: "2", opacity: 30 }}
      />
      <Row zIndex={1} paddingX="16" paddingY="12" borderBottom="neutral-alpha-weak" vertical="center" gap="8">
        <Icon name="lightbulb" size="xs" onBackground="accent-weak" />
        <Text variant="label-strong-s">AI търсене</Text>
        <Tag size="s" scheme="neutral">илюстрация</Tag>
      </Row>
      <Column zIndex={1} padding="20" gap="16">
        <Row horizontal="end">
          <Column maxWidth={28} paddingX="16" paddingY="12" radius="l" background="brand-alpha-weak" border="brand-alpha-weak">
            <Text variant="body-default-s">{PROMPT}</Text>
          </Column>
        </Row>

        <Row gap="8" wrap>
          {STEPS.map((s, i) => (
            <Tag key={s} size="s" scheme={i < shownStep ? "brand" : "neutral"} prefixIcon={i < shownStep ? "check" : undefined}>
              {s}
            </Tag>
          ))}
        </Row>

        <Column gap="12">
          <Text variant="body-default-m" wrap="balance" aria-live="off">
            {shown}
            {typing && <span className="ai-caret" aria-hidden="true" />}
          </Text>
          {done && (
            <Column gap="8" className="ai-sources">
              <Text variant="label-default-xs" onBackground="neutral-weak">Източници</Text>
              <Row gap="8" wrap>
                <Row gap="8" vertical="center" paddingX="12" paddingY="8" radius="m" border="brand-alpha-medium" background="brand-alpha-weak" textVariant="label-default-s">
                  <Text onBackground="brand-weak">[1]</Text> stanchev.bg - GEO оптимизация
                </Row>
                <Row gap="8" vertical="center" paddingX="12" paddingY="8" radius="m" border="neutral-alpha-medium" textVariant="label-default-s">
                  <Text onBackground="neutral-weak">[2]</Text> developers.google.com - AI функции
                </Row>
              </Row>
            </Column>
          )}
        </Column>
      </Column>
    </Column>
  );
}
