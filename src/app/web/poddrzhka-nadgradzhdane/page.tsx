import { Column, Grid, Heading, Icon, Row, Text, type IconName } from "@once-ui-system/core";
import { SectionTitle } from "@/components/seo/blocks";
import { serviceMetadata } from "@/components/seo/metadata";
import { WebServiceShell } from "@/components/seo/WebServiceShell";
import { StatusBoard } from "@/components/seo/WebVisuals";
import { getService } from "@/resources/services";

export const metadata = serviceMetadata("poddrzhka-nadgradzhdane");

const s = getService("poddrzhka-nadgradzhdane")!;

const rhythm: { icon: IconName; title: string; items: string[] }[] = [
  { icon: "trendingUp", title: "Постоянно", items: ["Мониторинг на достъпността на сайта", "Реакция при проблем"] },
  { icon: "settings", title: "Редовно", items: ["Обновяване на ядро, теми и плъгини", "Резервни копия"] },
  { icon: "lock", title: "Периодично", items: ["Проверка на сигурността", "Преглед на скоростта и грешките"] },
  { icon: "chartBar", title: "Месечно", items: ["Отчет за свършеното", "Малки подобрения по уговорка"] },
];

export default function Page() {
  return (
    <WebServiceShell
      slug="poddrzhka-nadgradzhdane"
      tags={[{ label: "Обновявания", scheme: "brand" }, { label: "Сигурност" }, { label: "Резервни копия" }]}
      h1="Поддръжка на сайт: спокойствие и непрекъснато подобрение"
      lead="Сайтът не е проект, който приключва. Грижа се за обновявания, резервни копия, сигурност и SEO, така че да не се налага да ги следите вие."
      visual={
        <StatusBoard
          rows={[
            { label: "Обновявания", note: "ядро, теми, плъгини" },
            { label: "Резервни копия", note: "редовни и проверени" },
            { label: "Сигурност", note: "проверка и защита" },
            { label: "Мониторинг", note: "достъпност на сайта" },
            { label: "Отчет", note: "месечно резюме" },
          ]}
        />
      }
      glow={{ color: "brand", style: "dots" }}
      answer={{
        title: "Какво включва поддръжката на сайт?",
        text: "Поддръжката на сайт обхваща редовни обновявания, резервни копия, сигурност, мониторинг, малки подобрения и месечен отчет. Така сайтът остава бърз и защитен, а вие не се тревожите за технически подробности.",
        note: "Хостингът, лицензите за плъгини и големите нови функции обикновено са отделно.",
      }}
      before={
        <Column gap="24">
          <SectionTitle eyebrow="Ритъм" title="Как изглежда поддръжката във времето" lead="Типичен ритъм на грижата. Точният график уговаряме предварително." />
          <Grid fillWidth columns={4} m={{ columns: 2 }} s={{ columns: 1 }} gap="16">
            {rhythm.map((r) => (
              <Column key={r.title} padding="24" gap="12" radius="l" border="neutral-alpha-weak" background="surface">
                <Row gap="8" vertical="center">
                  <Icon name={r.icon} size="s" border="brand-alpha-weak" background="brand-alpha-weak" onBackground="brand-weak" radius="m" padding="8" />
                  <Heading as="h3" variant="heading-strong-m">{r.title}</Heading>
                </Row>
                <Column gap="8">
                  {r.items.map((i) => (
                    <Row key={i} gap="8" vertical="start" textVariant="body-default-s">
                      <Icon name="check" size="xs" onBackground="brand-medium" /> <Text variant="body-default-s">{i}</Text>
                    </Row>
                  ))}
                </Column>
              </Column>
            ))}
          </Grid>
        </Column>
      }
      includes={s.includes}
      includesTitle="Какво получавате"
      includesLead="Шест неща, за които не се налага да мислите."
      processTitle="Как започва поддръжката"
      processLead="Преглед, настройка, редовна работа и отчет."
      side={{ icon: "settings", title: "Без излишни договори", text: "Можете да спрете по всяко време според условията." }}
      priceTitle="Цена на поддръжката"
      priceLead="Стартови цени в евро на месец. Зависят от размера на сайта и нуждите."
      faqTitle="Често задавани въпроси за поддръжката на сайт"
      faqExtra={[
        { q: "Колко струва поддръжката на сайт?", a: "Основната поддръжка е от 75 € на месец, а разширената от 130 €. Цената зависи от размера на сайта и обхвата." },
        { q: "Какво не е включено в поддръжката?", a: "Хостингът, лицензите за платени плъгини и големите нови функции или редизайн, които се оферират отделно." },
        { q: "Поддържате ли сайтове, които не сте правили?", a: "Да, след кратък преглед на състоянието им." },
      ]}
      closing={{ title: "Нека поема грижата за сайта ви", text: "Опишете сайта си. Първоначалният разговор до 30 минути е безплатен." }}
    />
  );
}
