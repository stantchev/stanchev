"use client";

import React, { useTransition } from "react";
import { Button, Column, Input, Textarea, useToast } from "@once-ui-system/core";

type Props = {
  handleSubmit: (formData: FormData) => Promise<void>;
};

export default function ContactForm({ handleSubmit }: Props) {
  const { addToast } = useToast();
  const [isPending, startTransition] = useTransition();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      try {
        await handleSubmit(formData);
        addToast({ variant: "success", message: "Успешно изпратено запитване!" });
        form.reset();
      } catch {
        addToast({ variant: "danger", message: "Функцията е временно недостъпна." });
      }
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <Column gap="16">
        <Input id="name" name="name" placeholder="Вашето име" required />
        <Input id="email" name="email" type="email" placeholder="your@email.com" required />
        <Input id="subject" name="subject" placeholder="Тема на съобщението" required />
        <Textarea
          id="message"
          name="message"
          label="Съобщение"
          placeholder="Опишете вашия проект или въпрос..."
          rows={6}
          required
        />
        <Button type="submit" variant="primary" size="m" fillWidth disabled={isPending}>
          {isPending ? "Изпращане..." : "Изпрати съобщение"}
        </Button>
      </Column>
    </form>
  );
}
