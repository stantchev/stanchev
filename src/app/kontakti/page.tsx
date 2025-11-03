import { Column, Flex, Heading, Text, Schema } from "@once-ui-system/core";
import ContactForm from "./ContactForm";
import { baseURL, person, contact } from "@/resources";
import { MdOutlineMail, MdOutlineAccessTime } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { sendEmail } from "@/lib/sendEmail";
import Script from "next/script";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Контакти | Stanchev Digital",
    description:
      "Свържете се с мен за безплатна SEO консултация или запитване относно техническа и съдържателна оптимизация на вашия уебсайт.",
    keywords:
      "seo консултация, seo услуги, seo експерт, seo оптимизатор, фирма за seo оптимизация, seo консултант, заявка за seo, контакт със seo специалист, поръчай seo оптимизация, връзка с seo фирма",
    alternates: {
      canonical: `${baseURL}/kontakti`,
    },
    openGraph: {
      title: "Контакти | Stanchev Digital",
      description:
        "Свържете се с мен за безплатна SEO консултация или запитване относно оптимизация на сайт.",
      url: `${baseURL}/kontakti`,
      siteName: "Контакти | Stanchev Digital",
      images: [
        {
          url: `https://stanchev.bg/images/og/og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "bg_BG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Контакти | Stanchev Digital",
      description:
        "Свържете се с мен за безплатна SEO консултация или запитване относно оптимизация на сайт.",
      images: [`https://stanchev.bg/images/og/og.jpg`],
    },
  };
}

export default function Kontakti() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const recaptchaToken = formData.get("recaptchaToken")?.toString() || "";

    // Verify reCAPTCHA v3 server-side
    if (process.env.RECAPTCHA_SECRET) {
      const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET,
          response: recaptchaToken,
        }).toString(),
        // Avoid caching
        cache: "no-store",
      });

      const verifyJson = (await verifyRes.json()) as { success: boolean; score?: number };
      if (!verifyJson.success || (typeof verifyJson.score === "number" && verifyJson.score < 0.5)) {
        throw new Error("reCAPTCHA verification failed");
      }
    }

    await sendEmail({ name, email, subject, message });
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "Stanchev Digital",
            url: "https://stanchev.bg/",
            logo: "https://stanchev.bg/images/og/og.jpg",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "seo@stanchev.bg",
              telephone: "0877038729",
              availableLanguage: "bg",
              hoursAvailable: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:30",
                closes: "16:30"
              }
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Бул. Г.М. Димитров 26",
              addressLocality: "София",
              addressRegion: "София",
              postalCode: "1797",
              addressCountry: "BG",
            },
            sameAs: [
              "https://github.com/stantchev/",
              "https://www.linkedin.com/in/stantcheff/",
              "https://dev.to/stanchev",
            ],
          }),
        }}
      />

      <Column maxWidth="m" gap="xl" paddingX="l">
        <Column gap="l">
          <Heading as="h1" variant="display-strong-l" marginBottom="m">
            {contact.title}
          </Heading>
          <Text
            variant="heading-default-xl"
            onBackground="neutral-weak"
            wrap="balance"
          >
            Ако имате въпроси относно интернет реклама, оптимизация на сайт,
            дигитален маркетинг или търсите опитен SEO специалист, свържете се с
            нас чрез формата по-долу. За повече информация относно нашите услуги,
            посетете страницата за <a href="/seo-uslugi">SEO услуги</a>.
          </Text>
        </Column>

        <Heading as="h2" variant="heading-strong-m">
          Как да се свържете с нас
        </Heading>

        <Flex
          fillWidth
          gap="xl"
          paddingX="l"
          marginTop="xl"
          s={{ direction: "column" }} // 👈 мобилна подредба
        >
          <Column flex={1} gap="l">
            <Heading as="h3" variant="heading-strong-s">
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
              <MdOutlineMail size={24} style={{ color: "var(--brand-medium)" }} />
              <Column gap="4">
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Телефон
                </Text>
                <Text variant="body-default-m">0877038729</Text>
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
                <Text variant="body-default-m">Понеделник - Петък, 9:30 - 16:30</Text>
              </Column>
            </Flex>
          </Column>

          <Column flex={2} gap="l">
            <Heading as="h3" variant="heading-strong-s">
              Изпратете съобщение чрез формата
            </Heading>

            <ContactForm handleSubmit={handleSubmit} />
          </Column>
        </Flex>

        <Heading as="h4" variant="heading-strong-xs" align="center" paddingTop="xl">
          SEO консултация без ангажимент – направете първата стъпка още днес!
        </Heading>
      </Column>
    </>
  );
}
