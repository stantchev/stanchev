import { Column, Meta, Schema, Heading, Text, Button } from "@once-ui-system/core";
import { AccordionGroup } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return {
    title: 'Успешни SEO проекти – виж как помагам на сайтове да растат в Google',
    description: 'Реални SEO проекти с видими резултати. Виж как повишихме трафика, позициите и продажбите на сайтове в различни ниши.',
    keywords: 'seo проекти, seo оптимизация, seo услуги, seo стратегия, seo анализ сайта, линк билдинг стратегия, фирма за seo оптимизация, ефективна seo оптимизация, класиране в google, seo резултати',
	  alternates: {
    canonical: `${baseURL}/seo-proekti`,
  },
	openGraph: {
      title: 'Успешни SEO проекти – виж как помагам на сайтове да растат в Google',
      description: 'Реални SEO проекти с видими резултати. Виж как повишихме трафика, позициите и продажбите на сайтове в различни ниши.',
      url: `${baseURL}/seo-proekti`,
      siteName: 'Успешни SEO проекти – виж как помагам на сайтове да растат в Google',
      images: [
        {
          url: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Успешни SEO проекти – виж как помагам на сайтове да растат в Google',
      description: 'Реални SEO проекти с видими резултати. Виж как повишихме трафика, позициите и продажбите на сайтове в различни ниши.',
      images: [`/api/og/generate?title=${encodeURIComponent(work.title)}`],
    },
  };
}

export default function SeoProekti() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/seo-proekti"
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/za-men`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading as="h1" variant="display-strong-l" marginBottom="m">
        Примери за успешни SEO проекти
      </Heading>
      <Text
        variant="heading-default-xl"
        onBackground="neutral-weak"
        wrap="balance"
        marginBottom="xl"
      >
        В тази секция ще откриете реални SEO проекти, които включват SEO оптимизация, линк билдинг, SEO анализ и SEO стратегия за различни бизнеси и онлайн магазини. Ако искате да научите повече за нашия подход, посетете страницата за <a href="/seo-uslugi">SEO услуги</a> или се <a href="/kontakti">свържете с нас</a>.
      </Text>
      <Projects />
      {/* FAQ AccordionGroup */}
	    <Heading as="h4" variant="display-strong-s" align="center">
          Често задавани въпроси за нашите SEO проекти
        </Heading>
      <AccordionGroup
        items={[
          {
            title: "Как проследявате напредъка и успеха на SEO проектите?",
            content: (
              <Text onBackground="neutral-weak">
                Проследяваме напредъка чрез редовен мониторинг на <b>класиранията по ключови думи, органичния трафик, поведението на потребителите</b> на сайта и <b>конверсиите</b>. Използваме комбинация от Google Analytics, Google Search Console и специализирани SEO инструменти.
              </Text>
            )
          },
          {
            title: "Какви метрики и инструменти използвате за измерване на успеха на проектите?",
            content: (
              <Text onBackground="neutral-weak">
                Измерваме успеха чрез метрики като <b>органични сесии, класирания по думи, процент на отпадане, време на сайта</b> и <b>конкретни конверсии</b>. Основните ни инструменти включват <b>Google Analytics, Google Search Console, Ahrefs, SEMrush</b> и други специализирани платформи.
              </Text>
            )
          },
          {
            title: "Как отчитате постигнатите резултати и колко често?",
            content: (
              <Text onBackground="neutral-weak">
                Предоставяме <b>подробни месечни доклади</b>, които включват анализ на постигнатите резултати, прогрес по целите и предложени следващи стъпки. Докладите са лесни за разбиране и могат да бъдат представени и обсъдени и чрез видео разговор.
              </Text>
            )
          }
        ]}
      />
      {/* CTA Section */}
      <Column gap="m" paddingX="l" horizontal="center" marginTop="xl">
        <Heading as="h4" variant="display-strong-s" align="center">
          Готови за по-добри резултати?
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          Свържете се с мен за безплатна консултация и анализ на вашия сайт
        </Text>
        <Button
          href="/kontakti"
          variant="primary"
          size="l"
          arrowIcon
        >
          Заявете консултация
        </Button>
      </Column>
    </Column>
  );
}
