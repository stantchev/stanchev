import { Column, Table } from "@once-ui-system/core";
import { CodeBlock } from "@once-ui-system/core/code";
import { SectionTitle } from "@/components/seo/blocks";
import { serviceMetadata } from "@/components/seo/metadata";
import { SymptomFixer } from "@/components/seo/WebInteractive";
import { WebServiceShell } from "@/components/seo/WebServiceShell";
import { getService } from "@/resources/services";

export const metadata = serviceMetadata("custom-plagini");

const s = getService("custom-plagini")!;

const pluginCode = `<?php
/**
 * Plugin Name: Лек SEO плъгин
 * Description: Добавя структурирани данни само там, където са нужни.
 * Version: 1.0.0
 */
if (!defined('ABSPATH')) exit;

add_action('wp_head', function () {
  if (!is_singular('post')) return;
  $data = [
    '@context' => 'https://schema.org',
    '@type'    => 'Article',
    'headline' => get_the_title(),
  ];
  echo '<script type="application/ld+json">' . wp_json_encode($data) . '</script>';
});`;

export default function Page() {
  return (
    <WebServiceShell
      slug="custom-plagini"
      tags={[{ label: "WordPress", scheme: "brand" }, { label: "PHP" }, { label: "Плъгини" }]}
      h1="Персонализирани WordPress плъгини без излишен товар"
      lead="Често нужна е една функция, а готовият плъгин носи стотици. Правя леки плъгини, които решават точно вашия проблем: от структурирани данни до интеграции, без излишен код и без забавяне на сайта."
      visual={<CodeBlock codes={[{ code: pluginCode, language: "php", label: "plugin.php" }]} copyButton />}
      glow={{ color: "accent", style: "lines" }}
      answer={{
        title: "Кога е нужен персонализиран плъгин?",
        text: "Персонализиран плъгин има смисъл, когато нужната функция е тясна, готовите решения са твърде тежки или не се интегрират с вашите системи. Така плащате само за нужното, сайтът остава бърз, а кодът е ваш и може да се разширява.",
        note: "Ако готов качествен плъгин решава проблема, честно ще ви препоръчам него.",
      }}
      before={
        <Column gap="24">
          <SectionTitle eyebrow="Инструмент" title="Плъгин, готово решение или код в темата?" lead="Отбележете какво се отнася за вас и вижте препоръчаната посока." />
          <SymptomFixer
            title="Препоръка"
            empty="Отбележете ситуациите, които ви засягат."
            cta={{ label: "Обсъдете задачата", href: "/kontakti" }}
            items={[
              { key: "heavy", symptom: "Готов плъгин върши нужното, но е твърде тежък", fix: "Лек собствен плъгин само за нужната функция." },
              { key: "integr", symptom: "Нужна е интеграция с мои системи (CRM, ERP, API)", fix: "Персонализиран плъгин с интеграция по вашия API." },
              { key: "schema", symptom: "Нужни са структурирани данни по мой модел", fix: "Малък плъгин, който генерира точно нужните JSON-LD данни." },
              { key: "ready", symptom: "Има добър, поддържан готов плъгин за това", fix: "Използвайте готовия плъгин, а аз го настройвам." },
              { key: "theme", symptom: "Промяната засяга само външния вид на темата", fix: "Код в дъщерна тема, а не плъгин." },
            ]}
          />
        </Column>
      }
      includes={s.includes}
      includesTitle="Какво получавате"
      includesLead="Шест неща от анализа до поддръжката."
      after={
        <Column gap="24">
          <SectionTitle eyebrow="Сравнение" title="Готов плъгин срещу персонализиран" />
          <Table
            data={{
              headers: [
                { content: "", key: "k" },
                { content: "Готов плъгин", key: "a" },
                { content: "Персонализиран", key: "b" },
              ],
              rows: [
                ["Скорост", "Често носи ненужен код", "Само нужното"],
                ["Цена в началото", "По-ниска", "По-висока"],
                ["Съответствие на нуждата", "Общо", "Точно"],
                ["Поддръжка", "От автора на плъгина", "От мен или от вас"],
                ["Собственост на кода", "Лиценз на автора", "Ваш"],
              ],
            }}
          />
        </Column>
      }
      processTitle="Как протича разработката"
      processLead="От заданието до пускането и поддръжката."
      side={{ icon: "wrench", title: "Само нужното", text: "Лек код, ясна документация, ваш плъгин." }}
      priceTitle="Цена на персонализиран плъгин"
      priceLead="Стартови цени в евро. Сложността и интеграциите определят крайната цена."
      faqTitle="Често задавани въпроси за WordPress плъгини"
      faqExtra={[
        { q: "Колко струва персонализиран WordPress плъгин?", a: "Малък плъгин е от 250 €, а разширен от 300 €. Цената зависи от сложността и интеграциите, затова давам оферта след уточняване на задачата." },
        { q: "Кой притежава кода на плъгина?", a: "Вие. Предавам кода и документацията." },
        { q: "Съвместим ли е с бъдещите версии на WordPress?", a: "Следвам стандартите на WordPress, а поддръжката може да включва проверка при нови версии." },
      ]}
      closing={{ title: "Имате нужда от точно определена функция?", text: "Опишете задачата. Първоначалният разговор до 30 минути е безплатен." }}
    />
  );
}
