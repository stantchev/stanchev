'use client';
import { AccordionGroup, Text, Column } from '@once-ui-system/core';

export default function EcommerceSEOFAQ() {
  return (
    <AccordionGroup
      items={[
        {
          title: "Кога ще видя резултати и как ги мерите?",
          content: (
            <Column gap="m">
              <Text>Първи ръст: 3–6 месеца; устойчив – 6–12 месеца. Фокусираме се върху продажби, не само позиции.</Text>
              <Text>Атрибуция по категория/SKU чрез Search Console, Merchant Center, уеб аналитика и CRM.</Text>
            </Column>
          )
        },
        {
          title: "Кой пакет е подходящ за моя магазин?",
          content: (
            <Column gap="m">
              <Text>Basic – малки каталози/стартиращи екипи. Pro – растящи магазини с нужда от темпо. Enterprise – големи каталози и мултидържавни операции.</Text>
              <Text>Не сте сигурни? Направете кратък одит разговор: <a href="/kontakti">свържете се</a>.</Text>
            </Column>
          )
        },
        {
          title: "Как печеля видимост в AI & Google Overviews?",
          content: (
            <Column gap="m">
              <Text>Създаваме водачи/сравнения, таблици със спецификации и Q&A по намерение за покупка.</Text>
              <Text>Product/Offer/Review schema + чист Merchant Center feed = по-голям шанс за обобщения и rich резултати.</Text>
            </Column>
          )
        },
        {
          title: "Как спирате дублирано съдържание от филтри и вариации?",
          content: (
            <Column gap="m">
              <Text>Правила за index/noindex и canonical на фасети; консистентни URL-и и уникални описания.</Text>
              <Text>Управление на вариации/out-of-stock → по-добър crawl budget и по-силни категории.</Text>
            </Column>
          )
        },
        {
          title: "Какво включва месечната работа и колко струва?",
          content: (
            <Column gap="m">
              <Text>Одит/фиксове, CWV подобрения, архитектура/вътрешни линкове, контент за AI/Overviews, schema и отчет.</Text>
              <Text>Пакети: Basic 590 лв., Pro 750 лв., Enterprise 1 190 лв. Вижте „Пакети и цени“ или <a href="/kontakti">пишете ни</a>.</Text>
            </Column>
          )
        }
      ]}
    />
  );
}