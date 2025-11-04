"use client";

import React, { useTransition, useState } from "react";
import { Button, Column, Input, Textarea, useToast, Checkbox, Text, Row } from "@once-ui-system/core";
import { FaShieldAlt, FaInfoCircle } from "react-icons/fa";
import Script from "next/script";

type Props = {
  handleSubmit: (formData: FormData) => Promise<void>;
};

export default function ContactForm({ handleSubmit }: Props) {
  const { addToast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [gdprConsent, setGdprConsent] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!gdprConsent) {
      addToast({ variant: "danger", message: "Моля, съгласете се с обработката на личните данни." });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (typeof window !== "undefined" && (window as any).grecaptcha && siteKey) {
      try {
        const token = await (window as any).grecaptcha.execute(siteKey, { action: "contact" });
        formData.set("recaptchaToken", token);
        setRecaptchaToken(token);
      } catch {
        addToast({ variant: "danger", message: "reCAPTCHA неуспешно. Опитайте отново." });
        return;
      }
    }

    startTransition(async () => {
      try {
        await handleSubmit(formData);
        addToast({ variant: "success", message: "Успешно изпратено запитване!" });
        form.reset();
        setGdprConsent(false);
        setRecaptchaToken("");
      } catch {
        addToast({ variant: "danger", message: "Функцията е временно недостъпна." });
      }
    });
  }

  return (
    <>
      {siteKey && (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`} strategy="lazyOnload" />
      )}
      <form onSubmit={onSubmit}>
        <Column gap="16">
          <Input id="name" name="name" placeholder="Вашето име" required autoComplete="name" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            autoComplete="email"
          />
          <Input id="subject" name="subject" placeholder="Тема на съобщението" required autoComplete="off" />
          <Textarea
            id="message"
            name="message"
            label="Съобщение"
            placeholder="Опишете вашия проект или въпрос..."
            rows={6}
            required
            autoComplete="off"
          />
          <input type="hidden" name="recaptchaToken" value={recaptchaToken} />

          <Column gap="s" paddingY="m" paddingX="l" radius="m" background="info-alpha-weak" border="info-alpha-medium">
            <Row gap="s" vertical="center">
              <FaShieldAlt size={16} color="var(--info-strong)" />
              <Text variant="label-default-s" onBackground="info-strong">
                Съгласие за обработка на лични данни
              </Text>
            </Row>
            <Checkbox
              id="gdpr-consent"
              name="gdpr"
              checked={gdprConsent}
              onChange={(val: any) => setGdprConsent(typeof val === "boolean" ? val : !!val?.target?.checked)}
              required
            >
              <Text variant="body-default-s" onBackground="neutral-weak">
                Съгласие за обработка на лични данни
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Приемам условията и политиките
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                С изпращане на формата приемам обработката на моите лични данни съгласно GDPR политиката и Общите условия. Данните ще се използват само за отговор на запитването ми.
              </Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                Можете да оттеглите съгласието си по всяко време на: seo@stanchev.bg
              </Text>
            </Checkbox>
            <Row gap="xs" vertical="center" paddingTop="xs">
              <FaInfoCircle size={12} color="var(--info-weak)" />
              <Text variant="body-default-xs" onBackground="neutral-weak">
                Можете да оттеглите съгласието си по всяко време на: seo@stanchev.bg
              </Text>
            </Row>
          </Column>

          <Button type="submit" variant="primary" size="m" fillWidth disabled={isPending}>
            {isPending ? "Изпращане..." : "Изпрати съобщение"}
          </Button>
        </Column>
      </form>
    </>
  );
}
