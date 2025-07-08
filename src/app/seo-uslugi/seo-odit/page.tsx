import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  Icon,
  Feedback,
} from '@once-ui-system/core';
import SeoAuditFAQ from './faq';
import { baseURL, seoServices } from '@/resources';

const service = seoServices.services.find(s => s.slug === 'seo-odit');

export async function generateMetadata() {
  if (!service) {
    return {
      title: 'SEO Одит – анализ и стратегия за по-добро класиране',
      description: 'Пълен SEO одит на сайта ви – включва технически анализ, анализ на конкуренцията, откриване на грешки и конкретни препоръки за подобрение и класиране.',
	    keywords: 'SEO одит, одит на сайт, seo одит цена, анализ на сайт, seo анализ, анализ на уеб сайт, технически seo одит, seo стратегия',
	    alternates: {
    canonical: `${baseURL}/seo-uslugi/seo-odit`,
  },
      openGraph: { title: 'SEO Одит – анализ и стратегия за по-добро класиране', description: 'Пълен SEO одит на сайта ви с технически анализ, конкурентен анализ и препоръки за оптимизация.', url: `${baseURL}/seo-uslugi/seo-odit` },
      twitter: { title: 'SEO Одит – анализ и стратегия за по-добро класиране', description: 'Пълен SEO одит на сайта ви с технически анализ, конкурентен анализ и препоръки за оптимизация.' },
    };
  }
  return {
    title: 'SEO Одит – анализ и стратегия за по-добро класиране',
    description: 'Пълен SEO одит на сайта ви с технически анализ, конкурентен анализ и препоръки за оптимизация.',
    keywords: 'seo одит, анализ на сайт, технически seo одит, seo анализ сайта, одит на уебсайт, seo проверка, одит на съдържание, seo одит инструмент, одит на линк профил, пълен seo одит',
	openGraph: {
      title: 'SEO Одит – анализ и стратегия за по-добро класиране',
      description: 'Пълен SEO одит на сайта ви с технически анализ, конкурентен анализ и препоръки за оптимизация.',
      url: `${baseURL}/seo-uslugi/${service.slug}`,
      siteName: seoServices.title,
      images: [
        {
          url: `https://stanchev.vercel.app/images/og/og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'SEO Одит – анализ и стратегия за по-добро класиране',
      description: 'Пълен SEO одит на сайта ви с технически анализ, конкурентен анализ и препоръки за оптимизация.',
      images: [`https://stanchev.vercel.app/images/og/og.jpg`],
    },
  };
}

export default function SeoAuditPage() {
  return (
    <Column as="section" gap="xl" padding="xl" fillWidth>
      <Column gap="m" align="center" fillWidth>
        <Heading as="h1" variant="display-strong-l" align="center">
          SEO Одит – първата крачка към <br /> ефективна SEO оптимизация
        </Heading>

        <Text variant="display-default-s" align="center" onBackground="neutral-weak">
          Независимо дали сте онлайн магазин, SaaS платформа или корпоративен
          сайт, задълбоченият SEO одит е фундаментът
          за видимост в Google и ниски SEO цени в бъдеще.
        </Text>
      <Flex horizontal="center">
        <Button
          variant="primary"
          size="l"
          href="/kontakti"
          prefixIcon="checkCircle"
          data-border="rounded"
        >
          Заяви безплатна консултация
        </Button>
      </Flex>
      </Column>

      <Flex gap="8" wrap horizontal="center">
        {["on-page оптимизация", "off-page оптимизация", "линк билдинг стратегия", "ppc реклама"].map((lbl) => (
          <Tag key={lbl} size="l">
            {lbl}
          </Tag>
        ))}
      </Flex>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Какво включва нашият SEO Одит?
        </Heading>

        <Text variant="body-default-l">
          Одитът е подробен <strong>SEO анализ на сайта</strong>, който разкрива
          скрити технически бариери, пропуски в link building-а и
          неправилно структурирани on-page елементи. Като опитен
          SEO консултант работя с екип от сертифицирани SEO специалисти,
          за да покрием целия спектър – от интернет реклама и AdWords кампании до
          ултимативна оптимизация на онлайн магазини.
        </Text>

        <Column as="ul" gap="s" paddingLeft="l">
          <li><strong>Техническа проверка</strong> – Core Web Vitals, мобилна производителност, schema markup и бързина.</li>
          <li><strong>Ключови думи & съдържание</strong> – keyword research, SEO копирайтинг и оптимизация на статии.</li>
          <li><strong>Външни фактори</strong> – линк билдинг, директории за регистрации, онлайн репутация и PPС кампании.</li>
          <li><strong>Конкурентен анализ</strong> – сравнение с топ SEO фирми в нишата и препоръки за по-добро класиране.</li>
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h3" variant="display-default-m">
          Защо SEO Одитът е задължителен?
        </Heading>

        <Text variant="body-default-l">
          Без ясно диагностициран сайт дори най-ниската цена за SEO оптимизация може да се окаже излишен
          разход. Одитът дава карта за действие – от редизайн на уеб сайт до изграждане на нова SEO стратегия.
          Това спестява средства от бъдещи linkbuilding разходи и ускорява класирането в Google.
        </Text>

        <Feedback
          title="Съвет"
          description="Нашите доклади се изготвят с приоритет на KPI-те за продажби, а не само с филтрирана SEO терминология."
        />
      </Column>

      <Column gap="l">
        <Heading as="h3" variant="display-default-m">
          Процес в 4 стъпки
        </Heading>

        {["Анализ", "Стратегия", "Имплементация", "Отчет"].map((step, i) => (
          <Flex key={i} gap="8" vertical="start">
            <Icon name="checkCircle" onBackground="brand-strong" />
            <Column gap="2">
              <Heading as="h3" variant="heading-strong-l">
                {step}
              </Heading>
              <Text variant="body-default-m">
                {step === "Анализ"
                  ? "Събираме данни от Google Search Console, Ahrefs и Screaming Frog."
                  : step === "Стратегия"
                  ? "Определяме приоритети – от мобилна оптимизация до директории за регистрация."
                  : step === "Имплементация"
                  ? "Работим заедно с вашия dev екип или наш партньор – добра SEO фирма от Варна."
                  : "Получавате подробен PDF + live dashboard с SEO рейтинг и позиция."}
              </Text>
            </Column>
          </Flex>
        ))}
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          SEO Пакети и примерни цени
        </Heading>

        <Column gap="m">
          <Flex
            background="surface"
            border="neutral-alpha-medium"
            radius="m"
            padding="l"
            gap="m"
          >
            <Column flex={8} gap="s">
              <Heading as="h3" variant="heading-strong-l">
                Базов SEO Одит
              </Heading>
              <Text variant="body-default-m">
                Подходящ за SEO за начинаещи и фирми с ограничен бюджет.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading as="h4" variant="display-strong-s">от 650&nbsp;лв.</Heading>
            </Column>
          </Flex>

          <Flex
            background="surface"
            border="neutral-alpha-medium"
            radius="m"
            padding="l"
            gap="m"
          >
            <Column flex={8} gap="s">
              <Heading as="h3" variant="heading-strong-l">
                Премиум SEO Одит + Link Building
              </Heading>
              <Text variant="body-default-m">
                Включва ефективна SEO оптимизация и персонален SEO оптимизатор.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading as="h4" variant="display-strong-s">от 1 750&nbsp;лв.</Heading>
            </Column>
          </Flex>
        </Column>
      </Column>
    <Heading as="h3" variant="display-default-s">Често Задавани Въпроси (ЧЗВ) за SEO Одита</Heading>
    <SeoAuditFAQ />
      <Column gap="m" align="center" paddingTop="xl">
        <Heading as="h4" variant="display-strong-m" align="center">
          Готови ли сте за истински SEO резултати?
        </Heading>
      <Flex horizontal="center">
        <Button
          variant="primary"
          size="l"
          prefixIcon="rocket"
          href="/kontakti"
        >
          Свържи се с нас
        </Button>
      </Flex>
      </Column>
    </Column>
  );
}
