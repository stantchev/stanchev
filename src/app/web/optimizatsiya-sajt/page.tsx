import { Column, Table } from "@once-ui-system/core";
import { CodeBlock } from "@once-ui-system/core/code";
import { SectionTitle } from "@/components/seo/blocks";
import { serviceMetadata } from "@/components/seo/metadata";
import { SymptomFixer } from "@/components/seo/WebInteractive";
import { WebServiceShell } from "@/components/seo/WebServiceShell";
import { BudgetVisual } from "@/components/seo/WebVisuals";
import { getService } from "@/resources/services";

export const metadata = serviceMetadata("optimizatsiya-sajt");

const s = getService("optimizatsiya-sajt")!;

const lighthouse = `# Измерване преди и след всяка промяна
npx lighthouse https://example.com \\
  --only-categories=performance \\
  --output=json --output-path=./before.json`;

export default function Page() {
  return (
    <WebServiceShell
      slug="optimizatsiya-sajt"
      tags={[{ label: "Core Web Vitals", scheme: "accent" }, { label: "LCP" }, { label: "INP" }, { label: "CLS" }]}
      h1="Оптимизация на сайт: по-бързо зареждане и по-добри Core Web Vitals"
      lead="Бавният сайт губи посетители още преди да са прочели нещо. Измервам реалните причини и ги отстранявам: изображения, скриптове, шрифтове и сървър, с проверка преди и след."
      visual={<BudgetVisual />}
      glow={{ color: "accent", style: "dots" }}
      answer={{
        title: "Какво е оптимизация на скоростта на сайт?",
        text: "Оптимизацията на скоростта е измерване и отстраняване на причините за бавно зареждане: тежки изображения, ненужни скриптове, шрифтове и сървърен отговор. Целта са добри Core Web Vitals (LCP, INP, CLS), които подобряват потребителския опит и са сигнал за Google.",
        note: "Не гарантирам оценка 100 в Lighthouse: резултатът зависи от съдържанието, скриптовете на трети страни и устройството.",
      }}
      before={
        <Column gap="24">
          <SectionTitle eyebrow="Инструмент" title="Какво забавя сайта ви?" lead="Отбележете какво забелязвате и вижте най-вероятните поправки, подредени по ред." />
          <SymptomFixer
            title="Най-вероятен ред на поправките"
            cta={{ label: "Поискайте измерване", href: "/kontakti" }}
            items={[
              { key: "hero", symptom: "Главното изображение се появява късно", fix: "Оптимизирайте и заредете с приоритет главното изображение (формат AVIF или WebP, зададени размери)." },
              { key: "shift", symptom: "Съдържанието подскача по време на зареждане", fix: "Задайте размери на изображенията и рекламите и резервирайте място за динамичното съдържание." },
              { key: "slow", symptom: "Страницата реагира бавно на кликове", fix: "Намалете и отложете ненужния JavaScript, разделете дългите задачи." },
              { key: "fonts", symptom: "Текстът мига или се появява късно", fix: "Самостоятелно хоствани шрифтове с подходящо поведение при зареждане." },
              { key: "plugins", symptom: "Много плъгини и скриптове на трети страни", fix: "Премахнете ненужните и отложете останалите, като измерите влиянието им." },
              { key: "server", symptom: "Сървърът отговаря бавно", fix: "Кеширане, по-подходящ хостинг или CDN." },
            ]}
          />
        </Column>
      }
      includes={s.includes}
      includesTitle="Какво получавате"
      includesLead="Шест области, всяка проверена с измерване."
      after={
        <Column gap="24">
          <SectionTitle eyebrow="Измерване" title="Методът: измерваме преди и след" lead="Без измерване няма доказателство за подобрение." />
          <CodeBlock codes={[{ code: lighthouse, language: "bash", label: "Lighthouse" }]} copyButton />
          <Table
            data={{
              headers: [
                { content: "Показател", key: "a" },
                { content: "Какво измерва", key: "b" },
                { content: "Цел", key: "c" },
              ],
              rows: [
                ["LCP", "Кога се показва най-голямото съдържание", "до 2,5 s"],
                ["INP", "Колко бързо реагира страницата на действие", "до 200 ms"],
                ["CLS", "Колко се мести оформлението", "до 0,1"],
              ],
            }}
          />
        </Column>
      }
      processTitle="Как протича оптимизацията"
      processLead="Диагностика, оптимизация, повторна проверка."
      side={{ icon: "lighthouse", title: "Измеримо подобрение", text: "Резултати преди и след на ключовите шаблони." }}
      priceTitle="Цена на оптимизацията"
      priceLead="Стартови цени в евро. Зависят от размера на сайта и причините за забавянето."
      faqTitle="Често задавани въпроси за скоростта на сайта"
      faqExtra={[
        { q: "Какво са Core Web Vitals?", a: "Три показателя за потребителския опит: LCP (скорост на зареждане), INP (реакция) и CLS (стабилност на оформлението). Google ги използва като сигнал за качество на страницата." },
        { q: "Колко струва оптимизацията на сайт?", a: "Базовата оптимизация е от 230 €, а разширената от 380 €. Цената зависи от размера на сайта и причините за забавянето." },
        { q: "Каква оценка в Lighthouse ще получа?", a: "Не обещавам конкретна оценка. Поставям цели за Core Web Vitals и измервам преди и след промените." },
      ]}
      guides={["nextjs-performance-optimization-image-font-script-ot-nulata", "good-website-2025"]}
      closing={{ title: "Нека ускорим сайта ви", text: "Дайте адреса на сайта. Първоначалният разговор до 30 минути е безплатен." }}
    />
  );
}
