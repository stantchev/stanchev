'use client';

import { AccordionGroup, Text, Column } from '@once-ui-system/core';

export default function SeoAuditFAQ() {
  return (
    <AccordionGroup
      items={[
        {
          title: "Колко време отнема SEO оптимизация и как мерим резултата?",
          content: (
            <Column gap="m">
              <Text onBackground="neutral-weak">
                Първи ефект от <strong>SEO оптимизация</strong> често се вижда за 2–4 месеца; устойчив ръст – 6–12 месеца според нишата и ресурса.
              </Text>
              <Text as="strong">KPI, които следя:</Text>
              <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc' }}>
                <li>Органични сесии, кликове и импресии (Search Console).</li>
                <li>Видимост по ключови страници/кластер, CTR и богати резултати (schema).</li>
                <li>Конверсии и приходи по канал/категория/SKU (Analytics/CRM).</li>
              </ul>
              <Text onBackground="neutral-weak">
                Всеки месец получавате отчет и приоритизиран план за следващия спринт.
              </Text>
            </Column>
          )
        },
        {
          title: "Какво включва стартова SEO оптимизация?",
          content: (
            <Column gap="m">
              <Text onBackground="neutral-weak">
                Работим по фуния: техническо здраве → съдържание → авторитет → конверсия.
              </Text>
              <Text as="strong">Обхват накратко:</Text>
              <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc' }}>
                <li>Одит: индексиране, дублирано съдържание, Core Web Vitals, мобилност.</li>
                <li>Информационна архитектура и вътрешно свързване (кластер/анкори).</li>
                <li>Съдържание по намерение + мета, заглавия, FAQ блокове.</li>
                <li>Schema (Organization, Breadcrumb, Article/Product/FAQ).</li>
                <li>Начален линк билдинг от релевантни източници.</li>
              </ul>
              <Text onBackground="neutral-weak">
                Вижте и <a href="/seo-uslugi">SEO услуги</a> за детайли и пакети.
              </Text>
            </Column>
          )
        },
        {
          title: "SEO оптимизация или платена реклама (Google Ads)?",
          content: (
            <Column gap="m">
              <Text onBackground="neutral-weak">
                Най-добрият подход е често комбинация; изборът зависи от срок и бюджет.
              </Text>
              <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc' }}>
                <li><strong>SEO оптимизация:</strong> по-бавен старт, но дълготраен, рентабилен трафик.</li>
                <li><strong>Ads:</strong> мигновена видимост; спира с бюджета; полезно за тестове/сезони.</li>
              </ul>
              <Text onBackground="neutral-weak">
                Използвам Ads за бързи данни и валидиране на теми, които после развивам с SEO.
              </Text>
            </Column>
          )
        },
        {
          title: "Какво влияе на цената на SEO оптимизация?",
          content: (
            <Column gap="m">
              <Text as="strong">Основни фактори:</Text>
              <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc' }}>
                <li>Размер/сложност на сайта и каталога.</li>
                <li>Конкуренция и начален статус (технически дълг, съдържание).</li>
                <li>Скорост на имплементация от dev/контент екипа.</li>
                <li>Обем на съдържание и линк билдинг нужди.</li>
              </ul>
              <Text onBackground="neutral-weak">
                Давам фиксирана оферта след кратък одит с ясни цели и KPI.
              </Text>
            </Column>
          )
        },
        {
          title: "Как да влезем в AI резултати и Google Overviews?",
          content: (
            <Column gap="m">
              <Text onBackground="neutral-weak">
                Подгответе съдържанието за машинно резюмиране – ясно, проверимо, структурирано.
              </Text>
              <Text as="strong">Практики, които прилагам:</Text>
              <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc' }}>
                <li>Q&A секции, ръководства и сравнения (таблици/чеклисти).</li>
                <li>Schema за FAQ/Article/Product/Review и консистентни данни.</li>
                <li>E-E-A-T сигнали: автор, източници, политики, контакти.</li>
              </ul>
              <Text onBackground="neutral-weak">
                Така <strong>SEO оптимизация</strong> повишава шанса за цитиране в AI и богати резултати.
              </Text>
            </Column>
          )
        },
      ]}
    />
  );
}
