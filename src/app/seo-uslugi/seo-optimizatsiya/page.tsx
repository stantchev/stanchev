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

const service = seoServices.services.find(s => s.slug === 'seo-optimizatsiya');

export async function generateMetadata() {
  if (!service) {
    return {
      title: 'SEO оптимизация с професионален подход за видимост в Google',
      description: 'Професионална SEO оптимизация за по-високо класиране в Google, повече органичен трафик и дългосрочен растеж на вашия онлайн бизнес.',
	    keywords: 'seo услуги, seo фирма, seo агенция, фирми за seo, seo услуги цени, оптимизация на сайтове, seo компания, услуги seo цена, добра seo фирма, seo оптимизация, как се прави ефективна seo оптимизация за онлайн магазин, цени за seo оптимизация на сайт за малък бизнес, добър seo консултант за оптимизация на уеб сайт',
	    alternates: {
    canonical: `${baseURL}/seo-uslugi/seo-optimizatsiya`,
  },
      openGraph: { title: 'SEO Оптимизация – повишете видимостта си в Google с професионален подход', description: 'Професионална SEO оптимизация за по-добро класиране, повече трафик и устойчив растеж.', url: `${baseURL}/seo-uslugi/seo-optimizatsiya` },
      twitter: { title: 'SEO Оптимизация – повишете видимостта си в Google с професионален подход', description: 'Професионална SEO оптимизация за по-добро класиране, повече трафик и устойчив растеж.' },
    };
  }
  return {
    title: 'SEO Оптимизация – повишете видимостта си в Google с професионален подход',
    description: 'Професионална SEO оптимизация за по-добро класиране, повече трафик и устойчив растеж.',
	keywords: 'seo оптимизация, оптимизация на сайт, seo оптимизация на онлайн магазин, seo услуги, цени за seo оптимизация, фирма за seo оптимизация, seo консултация, seo анализ сайта, ефективна seo оптимизация, seo експерт',
    openGraph: {
      title: 'SEO Оптимизация – повишете видимостта си в Google с професионален подход',
      description: 'Професионална SEO оптимизация за по-добро класиране, повече трафик и устойчив растеж.',
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
      title: 'SEO Оптимизация – повишете видимостта си в Google с професионален подход',
      description: 'Професионална SEO оптимизация за по-добро класиране, повече трафик и устойчив растеж.',
      images: [`https://stanchev.vercel.app/images/og/og.jpg`],
    },
  };
}

export default function SeoAuditPage() {
  return (
    <Column as="section" gap="xl" padding="xl" fillWidth>
      <Column gap="m" align="center" fillWidth>
        <Heading as="h1" variant="display-strong-l" align="center">
          SEO Оптимизация – повишете видимостта си в Google с професионален подход
        </Heading>

        <Text variant="display-default-s" align="center" onBackground="neutral-weak">
          Независимо дали развивате онлайн магазин или корпоративен сайт, добре планираната SEO стратегия
          е ключът към устойчив растеж и по-ниски разходи за интернет реклама в дългосрочен план.
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
        {["on-page оптимизация", "линк билдинг стратегия", "Цени за SEO", "SEO Оптимизация"].map((lbl) => (
          <Tag key={lbl} size="l">
            {lbl}
          </Tag>
        ))}
      </Flex>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Какво включва нашата SEO оптимизация?
        </Heading>

        <Text variant="body-default-l">
          Извършваме пълен SEO анализ на сайта с цел да открием слабите места и да изградим дългосрочна стратегия.
          Като опитен seo консултант, предоставям персонализирани решения за подобряване на класирането,
          базирани на реални данни от инструменти като Ahrefs и Google Search Console.
        </Text>

        <Column as="ul" gap="s" paddingLeft="l">
          <li>Технически анализ – мобилна съвместимост, Core Web Vitals, скорост и структура.</li>
          <li>Оптимизация на съдържанието – SEO копирайтинг, ключови думи, структура на страниците.</li>
          <li>Линк билдинг стратегия – изграждане на линкове от релевантни източници и директории.</li>
          <li>Конкурентен анализ – как се позиционират други seo фирми и как да изпреварите конкуренцията.</li>
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Защо да инвестирате в SEO?
        </Heading>

        <Text variant="body-default-l">
          Качествената seo оптимизация в Google гарантира дългосрочни резултати и по-ниска цена за придобиване на клиент.
          Вместо временни резултати от реклами, изграждате стабилна основа, която носи трафик и след месеци.
        </Text>

        <Feedback
          title="Съвет"
          description="Преди да стартирате SEO, уверете се, че сайтът ви отговаря на техническите стандарти на Google."
        />
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Нашият процес в 4 етапа
        </Heading>

        {["Анализ", "Стратегия", "Имплементация", "Проследяване"].map((step, i) => (
          <Flex key={i} gap="8" vertical="start">
            <Icon name="checkCircle" onBackground="brand-strong" />
            <Column gap="2">
              <Heading as="h3" variant="heading-strong-l">
                {step}
              </Heading>
              <Text variant="body-default-m">
                {step === "Анализ"
                  ? "Детайлен SEO анализ сайта, базиран на данни от Search Console и други инструменти."
                  : step === "Стратегия"
                  ? "Изграждаме seo стратегия според спецификата на бизнеса и конкуренцията."
                  : step === "Имплементация"
                  ? "Работим със собствения ви екип или предлагаме партньорска seo фирма."
                  : "Проследяваме позициите и правим корекции с цел максимални резултати."}
              </Text>
            </Column>
          </Flex>
        ))}
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Пакети и примерни цени
        </Heading>

        <Column gap="m">
          <Flex
            background="surface"
            border="neutral-alpha-medium"
            radius="m"
            padding="l"
            gap="m"
	    mobileDirection="column"
          >
            <Column flex={8} gap="s" >
              <Heading as="h3" variant="heading-strong-l">
                Еднократна SEO Оптимизация
              </Heading>
              <Text variant="body-default-m">
                Подходящ за оптимизация на онлайн магазин или малки бизнес сайтове.
              </Text>
            </Column>
            <Column flex={4} align="center">
              <Heading variant="display-strong-s" className="price-heading">от 750&nbsp;лв.</Heading>
        <Button
	  className="price-button"
          variant="secondary"
          size="s"
          href="/kontakti"
          prefixIcon="chevronRight"
          data-border="rounded"
		  style={{ marginLeft: '50px', minWidth: '200px'}}
        >
          Виж повече
        </Button>
		</Column>
          </Flex>

          <Flex
            background="surface"
            border="neutral-alpha-medium"
            radius="m"
            padding="l"
            gap="m"
	    mobileDirection="column"
          >
            <Column flex={8} gap="s">
              <Heading as="h3" variant="heading-strong-l">
                Разширен SEO пакет + Link Building
              </Heading>
              <Text variant="body-default-m">
                Комбинирана услуга за цялостна оптимизация на сайтове и външна SEO подкрепа.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading variant="display-strong-s" className="price-heading">от 550&nbsp;лв./мес</Heading>
		<Button
          	variant="secondary"
          	size="s"
          	href="/seo-uslugi/link-building"
          	prefixIcon="chevronRight"
          	data-border="rounded"
		style={{ marginLeft: '50px', minWidth: '200px'}}
       		 >
          	Виж повече
        	</Button>
            </Column>
          </Flex>
        </Column>
      </Column>

      <Heading as="h4" variant="display-default-s">Често задавани въпроси за SEO оптимизация</Heading>
      <SeoAuditFAQ />

      <Column gap="m" align="center" paddingTop="xl">
        <Heading variant="display-strong-m" align="center">
          Искате ли повече органичен трафик и по-добро класиране?
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
