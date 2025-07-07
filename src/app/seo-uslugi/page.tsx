import { Flex, Meta, Schema, Column, Heading, Text, Button, Grid, Card, AccordionGroup } from "@once-ui-system/core";
import { baseURL, person, seoServices } from "@/resources";

export async function generateMetadata() {
  return {
    title: seoServices.title,
    description: seoServices.description,
    alternates: {
      keywords: 'seo оптимизация, seo услуги, seo цена, линк билдинг, оптимизация на сайт, seo консултант, фирма за seo, seo специалист, seo агенция, seo оптимизатор, реклама в Google, дигитален маркетинг, seo одит, seo обучение, seo стратегия, оптимизация на онлайн магазин.',
    canonical: `${baseURL}/seo-uslugi`,
  },
    openGraph: {
      title: seoServices.title,
      description: seoServices.description,
      url: `${baseURL}/seo-uslugi`,
      siteName: seoServices.title,
      images: [
        {
          url: `/api/og/generate?title=${encodeURIComponent(seoServices.title)}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoServices.title,
      description: seoServices.description,
      images: [`/api/og/generate?title=${encodeURIComponent(seoServices.title)}`],
    },
  };
}

export default function SeoUslugi() {
  return (
    <Column maxWidth="l" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={seoServices.title}
        description={seoServices.description}
        path="/seo-uslugi"
        image={`/api/og/generate?title=${encodeURIComponent(seoServices.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/seo-uslugi`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column gap="l" paddingX="l">
        <Heading variant="display-strong-l" marginBottom="m">
          SEO услуги за вашия бизнес
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Нашият екип предлага услуги като оптимизация на сайтове, seo копирайтинг и регистрация на сайт в търсачки за различни бизнеси и онлайн магазини. Вижте нашите <a href="/seo-proekti">успешни проекти</a> или се <a href="/kontakti">свържете с нас</a> за повече информация.
        </Text>
      </Column>

      <Column gap="m" paddingX="l">
        <Heading variant="heading-strong-l" marginBottom="m">
          Как можем да помогнем?
        </Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Извършваме услуги като seo анализ онлайн, seo стратегия, оптимизация на сайт за мобилни устройства и off-page оптимизация за фирми, онлайн магазини и блогове. Предлагаме индивидуален подход и прозрачни резултати.
        </Text>
      </Column>

      <Grid columns="2" mobileColumns="1" gap="l" paddingX="l">
        {seoServices.services.map((service, index) => (
          <Card
            key={index}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            direction="column"
            gap="m"
          >
            <Heading variant="heading-strong-l" marginBottom="s">
              {service.title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
              {service.description}
            </Text>
            <Column gap="8">
              {service.features.map((feature, featureIndex) => (
                <Text key={featureIndex} variant="body-default-s">
                  • {feature}
                </Text>
              ))}
            </Column>
            <Text variant="heading-strong-m" marginTop="m">
              {service.price}
            </Text>
            {service.slug && (    
      <Button
            href={`/seo-uslugi/${service.slug}`}
          variant="primary"
          size="m"
          prefixIcon="rocket"
        >
        Виж повече
      </Button>
    )}
          </Card>
        ))}
      </Grid>

      <AccordionGroup
        items={[
          {
            title: "Какви точно SEO услуги предлага Станчев SEO?",
            content: (
              <Text onBackground="neutral-weak">
                Станчев SEO предлага цялостни SEO услуги, които включват детайлен технически одит на уебсайта, оптимизация на съдържанието (on-page SEO), изграждане на качествени връзки (off-page SEO), анализ на ключови думи и мониторинг на конкуренцията. Ние се фокусираме върху дългосрочни резултати и устойчив растеж на органичния трафик, като нашата SEO стратегия е съобразена с най-новите алгоритми.
              </Text>
            )
          },
          {
            title: "С какво услугите на Станчев SEO се отличават от конкурентните?",
            content: (
              <Text onBackground="neutral-weak">
                Станчев SEO се отличава с персонализиран подход към всеки клиент и прозрачност в работата. Ние не просто изпълняваме задачи, а задълбочено разбираме вашите бизнес цели и адаптираме стратегията си. Използваме утвърдени и етични (white-hat) SEO практики, гарантиращи сигурност и устойчивост на резултатите ви. Работим като отдаден SEO консултант за вашия онлайн успех.
              </Text>
            )
          },
          {
            title: "За какъв тип бизнес са подходящи SEO услугите на Станчев SEO?",
            content: (
              <Text onBackground="neutral-weak">
                Нашите SEO оптимизации са подходящи за широк кръг бизнеси, които искат да увеличат онлайн видимостта си. Работим успешно както с малки и средни предприятия, така и с големи компании от различни сектори, включително електронни магазини, фирмени уебсайтове и блогове. Важно е да имате желание за дългосрочна инвестиция в дигиталния си маркетинг. За нас е важно да сме вашата надеждна SEO фирма.
              </Text>
            )
          }
        ]}
      />

      <Column gap="m" paddingX="l" horizontal="center">
        <Heading variant="display-strong-s" align="center">
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
