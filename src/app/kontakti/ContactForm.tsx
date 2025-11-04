"use client";

import React, { useTransition, useState, useRef, useEffect } from "react";
import { Button, Column, Input, Textarea, useToast, Checkbox, Text, Row } from "@once-ui-system/core";
import { FaShieldAlt, FaInfoCircle } from 'react-icons/fa';
import Script from "next/script";

type Props = {
  handleSubmit: (formData: FormData) => Promise<void>;
};

export default function ContactForm({ handleSubmit }: Props) {
  const { addToast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [gdprConsent, setGdprConsent] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  function validateForm() {
    const form = formRef.current;
    if (!form) {
      setIsFormValid(false);
      return;
    }
    const fd = new FormData(form);
    const name = (fd.get("name")?.toString() || "").trim();
    const email = (fd.get("email")?.toString() || "").trim();
    const subject = (fd.get("subject")?.toString() || "").trim();
    const message = (fd.get("message")?.toString() || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const valid = Boolean(name && emailOk && subject && message && gdprConsent);
    setIsFormValid(valid);
  }

  function handleInput() {
    validateForm();
  }

  // Periodically verify form validity every 1s to keep UI in sync
  useEffect(() => {
    const id = setInterval(() => {
      validateForm();
    }, 1000);
    return () => clearInterval(id);
  }, [gdprConsent]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!gdprConsent) {
      addToast({ variant: "danger", message: "Моля, съгласете се с обработката на личните данни." });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Execute reCAPTCHA v3 if available
    if (typeof window !== "undefined" && (window as any).grecaptcha && siteKey) {
      try {
        const token = await (window as any).grecaptcha.execute(siteKey, { action: "contact" });
        formData.set("recaptchaToken", token);
        setRecaptchaToken(token);
      } catch (e) {
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
        setIsFormValid(false);
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
      <form ref={formRef} onSubmit={onSubmit} onInput={handleInput}>
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
          {/* GDPR Consent */}
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
              onChange={(val: any) => {
                const checked = typeof val === "boolean" ? val : !!val?.target?.checked;
                setGdprConsent(checked);
                validateForm();
              }}
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

          <Button 
            type="submit" 
            variant="primary" 
            size="m" 
            fillWidth 
            disabled={isPending || !gdprConsent || !isFormValid}
          >
            {isPending ? "Изпращане..." : "Изпрати съобщение"}
          </Button>
        </Column>
      </form>
    </>
  );
}
