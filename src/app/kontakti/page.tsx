// ❗️ Този файл е server component – НЕ добавяй "use client"
import type { Metadata } from 'next'
export const metadata = {
  title: "Контакти | StanchevSEO",
  description: "Свържете се с мен за SEO консултация или запитване относно оптимизация на сайт.",
  keywords: "контакти, Ketaring.bg, свържете се, партньор ресторант, кетъринг услуги, България, информация",
  author: "stanchev.bg",
  robots: "index, follow",
  openGraph: {
    title: "Контакти | StanchevSEO",
    description: "Свържете се с мен за SEO консултация или запитване относно оптимизация на сайт.",
    type: "website",
    url: "https://stanchev.vercel.app/kontakti",
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакти | StanchevSEO",
    description: "Свържете се с мен за SEO консултация или запитване относно оптимизация на сайт.",
  },
  alternates: {
    canonical: "https://stanchev.vercel.app/kontakti",
  },
};


import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  Meta,
  Schema,
  Icon,
} from "@once-ui-system/core";
import { baseURL, person, contact } from "@/resources";
import { sendEmail } from "@/lib/sendEmail";
import { redirect } from "next/navigation";
 
export default function Kontakti() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    await sendEmail({ name, email, subject, message });

    redirect("/kontakti?status=ok");
  }

  return (
    <Column maxWidth="m" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path="/kontakti"
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/kontakti`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column gap="l" paddingX="l">
        <Heading variant="display-strong-l" marginBottom="m">
          {contact.title}
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
        >
          {contact.description}
        </Text>
      </Column>

      <Flex fillWidth gap="xl" mobileDirection="column" paddingX="l">
        <Column flex={1} gap="l">
          <Heading variant="heading-strong-l" marginBottom="m">
            Информация за контакт
          </Heading>

          <Flex gap="12" vertical="center">
            <Icon name="email" size="m" onBackground="brand-medium" />
            <Column gap="4">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Email
              </Text>
              <Text variant="body-default-m">{person.email}</Text>
            </Column>
          </Flex>

          <Flex gap="12" vertical="center">
            <Icon name="globe" size="m" onBackground="brand-medium" />
            <Column gap="4">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Локация
              </Text>
              <Text variant="body-default-m">София, България</Text>
            </Column>
          </Flex>

          <Flex gap="12" vertical="center">
            <Icon name="calendar" size="m" onBackground="brand-medium" />
            <Column gap="4">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Работно време
              </Text>
              <Text variant="body-default-m">
                Понеделник - Петък, 9:00 - 18:00
              </Text>
            </Column>
          </Flex>
        </Column>

        <Column flex={2} gap="l">
          <Heading variant="heading-strong-l" marginBottom="m">
            Изпратете съобщение
          </Heading>

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
              <Input
                id="subject"
                name="subject"
                placeholder="Тема на съобщението"
                required
              />
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
        </Column>
      </Flex>
    </Column>
  );
}
