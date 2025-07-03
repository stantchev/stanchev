import { Column, Flex, Heading, Text } from "@once-ui-system/core";
import ContactForm from "@/ContactForm";

import { baseURL, person, contact } from "@/resources";
import { MdOutlineMail, MdOutlineAccessTime } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import Schema from "@once-ui-system/core/Schema";
import { redirect } from "next/navigation";
import { sendEmail } from "@/lib/sendEmail";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Контакти | Станчев SEO",
    description:
      "Свържете се с мен за безплатна SEO консултация или запитване относно оптимизация на сайт.",
    keywords:
      "seo консултация, seo услуги, seo експерт, seo оптимизатор, фирма за seo оптимизация, seo консултант, заявка за seo, контакт със seo специалист, поръчай seo оптимизация, връзка с seo фирма",
    openGraph: {
      title: "Контакти | Станчев SEO",
      description:
        "Свържете се с мен за безплатна SEO консултация или запитване относно оптимизация на сайт.",
      url: `${baseURL}/kontakti`,
      siteName: "Контакти | Станчев SEO",
      images: [
        {
          url: `https://stanchev.vercel.app/images/og/og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "bg_BG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Контакти | Станчев SEO",
      description:
        "Свържете се с мен за безплатна SEO консултация или запитване относно оптимизация на сайт.",
      images: [`https://stanchev.vercel.app/images/og/og.jpg`],
    },
  };
}

export default function Kontakti() {
  // handleSubmit остава server функция
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
    <Column maxWidth="m" gap="xl" paddingX="l">
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

      <Column gap="l">
        <Heading variant="display-strong-l" marginBottom="m">
          {contact.title}
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Ако имате въпроси относно интернет реклама, оптимизация на сайт, дигитален
          маркетинг или търсите опитен seo специалист, свържете се с нас чрез
          формата по-долу. За повече информация относно нашите услуги, посетете
          страницата за <a href="/seo-uslugi">SEO услуги</a>.
        </Text>
      </Column>

      <Flex fillWidth gap="xl" mobileDirection="column" paddingX="l" marginTop="xl">
        <Column flex={1} gap="l">
          <Heading variant="heading-strong-l" marginBottom="m">
            Информация за контакт
          </Heading>

          <Flex gap="12" vertical="center">
            <MdOutlineMail size={24} style={{ color: "var(--brand-medium)" }} />
            <Column gap="4">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Email
              </Text>
              <Text variant="body-default-m">{person.email}</Text>
            </Column>
          </Flex>

          <Flex gap="12" vertical="center">
            <FaGlobe size={22} style={{ color: "var(--brand-medium)" }} />
            <Column gap="4">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Локация
              </Text>
              <Text variant="body-default-m">София, България</Text>
            </Column>
          </Flex>

          <Flex gap="12" vertical="center">
            <MdOutlineAccessTime size={24} style={{ color: "var(--brand-medium)" }} />
            <Column gap="4">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Работно време
              </Text>
              <Text variant="body-default-m">Понеделник - Петък, 9:00 - 18:00</Text>
            </Column>
          </Flex>
        </Column>

        <Column flex={2} gap="l">
          <Heading variant="heading-strong-l" marginBottom="m">
            Изпратете съобщение
          </Heading>

          {/* Вмъкваме клиентската форма */}
          <ContactForm handleSubmit={handleSubmit} />
        </Column>
      </Flex>
    </Column>
  );
}
