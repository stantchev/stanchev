'use client';

import { Column, Flex, Feedback } from "@once-ui-system/core";

export default function TermsPage() {
  return (
    <Column as="section" padding="xl" gap="xl" fillWidth>
      <Flex as="h1" textVariant="display-strong-m" horizontal="center">
        Общи условия за ползване на услугите на Stanchev.bg
      </Flex>

      <Flex as="p" textVariant="body-default-l">
        Настоящите общи условия уреждат отношенията между Stanchev.bg и потребителите на предоставяните SEO услуги и свързани консултации.
      </Flex>

      <Column gap="l">
        {/* 1. Данни за доставчика */}
        <Flex as="h2" textVariant="display-default-m">
          1. Данни за доставчика
        </Flex>
        <Flex as="p">Stanchev.bg е уебсайт, собственост на Станчев.</Flex>
        <Column as="ul" gap="s" paddingLeft="l">
          <li>Уебсайт: https://stanchev.bg</li>
          <li>Имейл: seo@stanchev.bg</li>
        </Column>

        {/* 2. Обхват на услугите */}
        <Flex as="h2" textVariant="display-default-m">
          2. Обхват на услугите
        </Flex>
        <Column as="ul" gap="s" paddingLeft="l">
          <li>SEO одит и анализ</li>
          <li>On-page оптимизация</li>
          <li>Keyword research</li>
          <li>SEO консултации</li>
          <li>Оптимизация на съдържание</li>
        </Column>
        <Feedback
          title="Важно"
          description="Услугите се предоставят след потвърждение и писмено съгласие между двете страни."
        />

        {/* 3. Права и отговорности */}
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

        {/* 4. Поверителност */}
        <Flex as="h2" textVariant="display-default-m">
          4. Поверителност
        </Flex>
        <Flex as="p">
          Всички данни и анализи, предоставени от клиента, се третират като строго поверителни и не се споделят с трети страни.
        </Flex>

        {/* 5. Плащания и срокове */}
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

        {/* 6. Авторски права */}
        <Flex as="h2" textVariant="display-default-m">
          6. Авторски права
        </Flex>
        <Flex as="p">
          Всички материали на сайта (текстове, графики, дизайн) са собственост на Стоян Станчев и не могат да бъдат използвани без разрешение.
        </Flex>

        {/* 7. Заключителни разпоредби */}
        <Flex as="h2" textVariant="display-default-m">
          7. Заключителни разпоредби
        </Flex>
        <Flex as="p">
          С използването на сайта и услугите му, потребителят се съгласява с настоящите Общи условия.
        </Flex>

        <Flex as="p" textVariant="body-default-s" horizontal="end">
          Последна актуализация: 19 юни 2025 г.
        </Flex>
      </Column>
    </Column>
  );
}
