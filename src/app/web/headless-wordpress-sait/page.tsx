import { Column, Table } from "@once-ui-system/core";
import { Checklist } from "@/components/seo/blocks";
import { CodeBlock } from "@once-ui-system/core/code";
import { SectionTitle } from "@/components/seo/blocks";
import { serviceMetadata } from "@/components/seo/metadata";
import { WebServiceShell } from "@/components/seo/WebServiceShell";
import { PipelineVisual } from "@/components/seo/WebVisuals";
import { getService } from "@/resources/services";

export const metadata = serviceMetadata("headless-wordpress-sait");

const s = getService("headless-wordpress-sait")!;

const phpHook = `<?php
// WordPress: при запис на публикация уведомяваме Next.js
add_action('save_post', function ($post_id) {
  if (wp_is_post_revision($post_id)) return;
  wp_remote_post('https://example.com/api/revalidate', [
    'headers' => ['x-secret' => REVALIDATE_SECRET],
    'body'    => ['id' => $post_id],
  ]);
});`;

const nextRoute = `// app/api/revalidate/route.ts - Next.js
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  if (req.headers.get("x-secret") !== process.env.REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }
  revalidatePath("/blog");
  return Response.json({ revalidated: true });
}`;

export default function Page() {
  return (
    <WebServiceShell
      slug="headless-wordpress-sait"
      tags={[{ label: "WordPress", scheme: "brand" }, { label: "Next.js" }, { label: "REST API" }]}
      h1="Headless WordPress: познат панел, бърз сайт с Next.js"
      lead="WordPress остава панел за съдържание, а сайтът, който виждат посетителите, е изграден с Next.js. Редакторите работят както преди, а сайтът е бърз, сигурен и с пълен контрол над SEO."
      visual={
        <PipelineVisual
          title="Как работи headless"
          steps={[
            { icon: "wordpress", label: "WordPress", note: "Редакторите пишат в познатия панел" },
            { icon: "code", label: "API", note: "REST или GraphQL връща съдържанието" },
            { icon: "nextjs", label: "Next.js", note: "Строи бързи страници със SEO" },
            { icon: "cloud", label: "CDN", note: "Сервира ги близо до посетителя" },
          ]}
        />
      }
      glow={{ color: "brand", style: "lines" }}
      answer={{
        title: "Какво е headless WordPress?",
        text: "Headless WordPress разделя панела за съдържание от сайта, който виждат посетителите. WordPress съхранява и управлява съдържанието, а Next.js го взема през API и строи бързи страници. Така редакторите запазват познатата си среда, а сайтът печели скорост и контрол.",
        note: "Подходът добавя втора система за поддръжка, затова не е подходящ за всеки проект.",
      }}
      before={
        <Column gap="24">
          <SectionTitle eyebrow="Свързване" title="Как съдържанието стига до сайта без забавяне" lead="При запис в WordPress се уведомява Next.js, който обновява нужните страници. Това е типичната схема." />
          <CodeBlock
            codes={[
              { code: phpHook, language: "php", label: "WordPress" },
              { code: nextRoute, language: "ts", label: "Next.js" },
            ]}
            copyButton
          />
        </Column>
      }
      includes={s.includes}
      includesTitle="Какво получавате"
      includesLead="Шест неща от архитектурата до пускането."
      after={
        <Column gap="48">
        <Column gap="24">
          <SectionTitle eyebrow="Решение" title="Кога headless WordPress има смисъл" lead="Подходът си струва, когато скоростта и контролът над SEO са по-важни от простотата." />
          <Checklist
            items={[
              "Сайтът е бавен със стандартна WordPress тема и плъгини, а оптимизацията не стига.",
              "Редакторите са свикнали с WordPress и не искат да сменят панела.",
              "Нужен е индивидуален дизайн и пълен контрол над HTML, метаданните и структурираните данни.",
              "Съдържанието трябва да се показва в няколко места: сайт, приложение, други канали.",
              "Има бюджет и капацитет за поддръжка на две системи.",
            ]}
          />
        </Column>
        <Column gap="24">
          <SectionTitle eyebrow="Честно" title="Какво печелите и какво усложнявате" lead="Headless не е безплатен обяд." />
          <Table
            data={{
              headers: [
                { content: "Печелите", key: "a" },
                { content: "Усложнявате", key: "b" },
              ],
              rows: [
                ["Скорост и пълен контрол над SEO", "Две системи за поддръжка вместо една"],
                ["Познат панел за редакторите", "Предварителен преглед (preview) изисква настройка"],
                ["Дизайн без ограниченията на темите", "Някои плъгини, които генерират HTML, не работят"],
                ["Съдържание за няколко канала през API", "По-висок начален бюджет"],
              ],
            }}
          />
        </Column>
        </Column>
      }
      processTitle="Как протича проектът"
      processLead="От моделиране на съдържанието до пускане."
      side={{ icon: "wordpress", title: "Редакторите не се променят", text: "Същият панел, по-бърз сайт." }}
      priceTitle="Цена на headless WordPress"
      priceLead="Цената зависи от съдържанието и интеграциите. Оферта след кратък преглед."
      faqTitle="Често задавани въпроси за headless WordPress"
      faqExtra={[
        { q: "REST API или GraphQL?", a: "REST API на WordPress е вграден и често достатъчен. GraphQL (WPGraphQL) добавя гъвкавост, но и сложност, затова го предлагам само при нужда." },
        { q: "Как работи предварителният преглед (preview)?", a: "Настройва се връзка между WordPress и Next.js, така че чернови да се виждат на сайта преди публикуване. Това е част от проекта." },
        { q: "Колко струва headless WordPress?", a: "Цената зависи от съдържанието, интеграциите и броя шаблони, затова давам писмена оферта след кратък преглед. Обикновено е по-висока от обикновен WordPress сайт, защото се изграждат два слоя." },
        { q: "Какво става със SEO плъгините като Yoast или Rank Math?", a: "Те продължават да управляват метаданните в WordPress, а Next.js ги чете през API и ги поставя в страницата. Структурираните данни и canonical адресите също се подават от кода." },
        { q: "Работят ли моите плъгини?", a: "Плъгините, които управляват съдържание и данни, работят. Тези, които генерират изглед на сайта, обикновено не и се заменят с код." },
      ]}
      guides={["headless-wordpress-react-nextjs-frontend-seo", "react-ili-wordpress-koe-da-izbera-za-proekta-si-2026", "nextjs-performance-optimization-image-font-script-ot-nulata"]}
      closing={{ title: "Нека съчетаем WordPress със скоростта на Next.js", text: "Опишете сайта си. Първоначалният разговор до 30 минути е безплатен." }}
    />
  );
}
