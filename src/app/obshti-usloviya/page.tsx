import type { Metadata } from 'next'
import Script from 'next/script';
export const metadata: Metadata = {
  title: 'Общи условия | СтанчевSEO',
  description: 'Запознайте се с общите условия за ползване на сайта, включително права, задължения и правила за достъп до информацията и услугите ни.',
   alternates: {
    canonical: 'https://stanchev.bg/obshti-usloviya'},
}

import { Column, Flex, Feedback } from "@once-ui-system/core";
import { protectJson } from "@/lib/contact";
import { ContactButton, ContactText } from "@/components/ProtectedContact";
import { EMAIL_PARTS, PHONE_GROUPS } from "@/lib/contact";

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: protectJson(JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "Общи Условия за Ползване на Услугите на Stanchev Digital",
            "description": "Запознайте се с Общите условия за ползване на услугите, предоставяни от Stanchev Digital, включително права и задължения, условия за плащане и поверителност.",
            "url": "https://stanchev.bg/obshti-uslovia",
            "potentialAction": {
              "@type": "ReadAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://stanchev.bg/obshti-uslovia"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Stanchev Digital",
              "url": "https://stanchev.bg/",
              "logo": "https://stanchev.bg/images/og/og.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "seo@stanchev.bg"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Бул. Г.М. Димитров 26",
                "addressLocality": "София",
                "addressRegion": "София",
                "postalCode": "1797",
                "addressCountry": "BG"
              },
              "sameAs": [
                "https://github.com/stantchev/",
                "https://www.linkedin.com/in/stantcheff/",
                "https://dev.to/stanchev"
              ]
            }
          }))
        }}
      />
    <Column as="section" padding="xl" gap="xl" fillWidth>
      <Flex as="h1" textVariant="display-strong-m" horizontal="center">
        Общи условия за ползване на услугите на Stanchev.bg
      </Flex>

      <Flex as="p" textVariant="body-default-l">
        Настоящите общи условия уреждат отношенията между Stanchev.bg и потребителите на предоставяните SEO услуги и свързани консултации.
      </Flex>

      <Column gap="l">
        <Flex as="h2" textVariant="display-default-m">
          1. Данни за доставчика
        </Flex>
        <Flex as="p">Stanchev.bg е уебсайт, собственост на Станчев.</Flex>
        <Column as="ul" gap="s" paddingLeft="l">
          <li>Уебсайт: https://stanchev.bg</li>
          <li>Имейл: <ContactText kind="email" parts={EMAIL_PARTS} /></li>
        </Column>

        <Flex as="h2" textVariant="display-default-m">
          2. Обхват на услугите
        </Flex>
        <p> Услугите на Stanchev Digital включват, но не се свеждат до:</p>
        <Column as="ul" gap="s" paddingLeft="l">
          <li>SEO одит и анализ</li>
          <li>On-page оптимизация</li>
          <li>Keyword research</li>
          <li>SEO консултации</li>
          <li>Оптимизация на съдържание</li>
        </Column>
        <p>За повече информация може да посетите страницата с SEO услуги.</p>
        <Feedback
          title="Важно"
          description="Услугите се предоставят след потвърждение и писмено съгласие между двете страни."
        />

        <Flex as="h2" textVariant="display-default-m">
          3. Права и отговорности
        </Flex>
        <Flex as="p">Потребителят се задължава:</Flex>
        <Column as="ul" gap="s" paddingLeft="l">
          <li>Да предоставя вярна и актуална информация</li>
          <li>Да използва услугите по добросъвестен начин</li>
        </Column>
        <Flex as="p">Stanchev.bg си запазва правото:</Flex>
        <Column as="ul" gap="s" paddingLeft="l">
          <li>Да променя цените и съдържанието на сайта без предизвестие</li>
          <li>Да откаже услуга при съмнение за недобросъвестност</li>
        </Column>

        <Flex as="h2" textVariant="display-default-m">
          4. Поверителност
        </Flex>
        <Flex as="p">
          Всички данни и анализи, предоставени от клиента, се третират като строго поверителни и не се споделят с трети страни.
        </Flex>

        <Flex as="h2" textVariant="display-default-m">
          5. Плащания и срокове
        </Flex>
        <Flex as="p">
          Услугите се заплащат предварително, освен ако не е договорено друго. Изпълнението започва след потвърдено плащане.
        </Flex>
        <Feedback
          title="Важно"
          description="За абонаментни услуги и дългосрочни партньорства се договарят индивидуални условия."
        />

        <Flex as="h2" textVariant="display-default-m">
          6. Авторски права
        </Flex>
        <Flex as="p">
          Всички материали на сайта (текстове, графики, дизайн) са собственост на автора им и не могат да бъдат използвани без разрешение.
        </Flex>

        <Flex as="h2" textVariant="display-default-m">
          7. Заключителни разпоредби
        </Flex>
        <Flex as="p">
          С използването на сайта и услугите му, потребителят се съгласява с настоящите Общи условия.
        </Flex>

        <Flex as="p" textVariant="body-default-s" horizontal="end">
          Последна актуализация: 18 Август 2025 г.
        </Flex>
      </Column>
    </Column>
    </>
  );
}



