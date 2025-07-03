"use client";

import React from "react";
import {
  Column,
  Input,
  Textarea,
  Button,
} from "@once-ui-system/core";

export default function ContactForm({ handleSubmit }: { handleSubmit: (formData: FormData) => Promise<void> }) {
  return (
    <form action={handleSubmit}>
      <Column gap="16">
        <Input id="name" name="name" placeholder="Вашето име" required />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />
        <Input id="subject" name="subject" placeholder="Тема на съобщението" required />
        <Textarea
          id="message"
          name="message"
          label="Съобщение"
          placeholder="Опишете вашия проект или въпрос..."
          rows={6}
          required
        />
        <Button type="submit" variant="primary" size="m" fillWidth>
          Изпрати съобщение
        </Button>
      </Column>
    </form>
  );
}
