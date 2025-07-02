// ❗️ Този файл е server component – НЕ добавяй "use client"
export const dynamic = "force-dynamic";
import type { Metadata } from 'next'
import { baseURL, person, contact } from "@/resources";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Контакти | Станчев SEO",
    description: "Свържете се с мен за безплатна SEO консултация или запитване относно оптимизация на сайт.",
    keywords: "seo консултация, seo услуги, seo експерт, seo оптимизатор, фирма за seo оптимизация, seo консултант, заявка за seo, контакт със seo специалист, поръчай seo оптимизация, връзка с seo фирма",
    openGraph: {
      title: "Контакти | Станчев SEO",
      description: "Свържете се с мен за безплатна SEO консултация или запитване относно оптимизация на сайт.",
      url: `${baseURL}/kontakti`,
      siteName: "Контакти | Станчев SEO",
      images: [
        {
          url: `https://stanchev.vercel.app/images/og/og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Контакти | Станчев SEO",
      description: "Свържете се с мен за безплатна SEO консултация или запитване относно оптимизация на сайт.",
      images: [`https://stanchev.vercel.app/images/og/og.jpg`],
    },
  };
}

import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  Schema,
} from "@once-ui-system/core";
import { sendEmail } from "@/lib/sendEmail";
import { redirect } from "next/navigation";
import { MdOutlineMail, MdOutlineAccessTime } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
 
async function handleSubmit(formData: FormData) {
  "use server";
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const subject = formData.get("subject")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  await sendEmail({ name, email, subject, message });

  redirect("/kontakti?status=ok");
}

export default function Kontakti({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  const isSuccess = searchParams?.status === "ok";

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
          Ако имате въпроси относно интернет реклама, оптимизация на сайт, дигитален маркетинг или търсите опитен seo специалист, свържете се с нас чрез формата по-долу. За повече информация относно нашите услуги, посетете страницата за <a href="/seo-uslugi">SEO услуги</a>.
        </Text>
      </Column>

      <Flex fillWidth gap="xl" mobileDirection="column" paddingX="l">
        <Column flex={1} gap="l">
          <Heading variant="heading-strong-l" marginBottom="m">
            Информация за контакт
          </Heading>

          <Flex gap="12" vertical="center">
            <MdOutlineMail size={24} style={{ color: 'var(--brand-medium)' }} />
            <Column gap="4">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Email
              </Text>
              <Text variant="body-default-m">{person.email}</Text>
            </Column>
          </Flex>

          <Flex gap="12" vertical="center">
            <FaGlobe size={22} style={{ color: 'var(--brand-medium)' }} />
            <Column gap="4">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Локация
              </Text>
              <Text variant="body-default-m">София, България</Text>
            </Column>
          </Flex>

          <Flex gap="12" vertical="center">
            <MdOutlineAccessTime size={24} style={{ color: 'var(--brand-medium)' }} />
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
            {isSuccess ? "Успешно изпратено запитване!" : "Изпратете съобщение"}
          </Heading>

          {isSuccess ? (
            <Text
              variant="display-default-m"
              style={{
                color: "var(--brand-strong)",
                textAlign: "center",
                padding: "2rem",
                border: "2px solid var(--brand-strong)",
                borderRadius: "8px",
                backgroundColor: "rgba(76, 175, 80, 0.1)",
              }}
            >
              Благодарим ви, вашето съобщение беше изпратено успешно.
            </Text>
          ) : (
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
          )}
        </Column>
      </Flex>
    </Column>
  );
}
