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
import OnPageFaq from './faq';

export default function OnPageSeoPage() {
  return (
    <Column as="section" gap="xl" padding="xl" fillWidth>
      <Column gap="m" align="center" fillWidth>
        <Heading as="h1" variant="display-strong-l" align="center">
          On-Page SEO – основата на <br /> ефективната SEO оптимизация
        </Heading>

        <Text variant="display-default-s" align="center" onBackground="neutral-weak">
          Ако искате да подобрите класирането на сайта си в Google и да постигнете висока SEO позиция, on-page оптимизацията е първата и най-важна стъпка. Без правилна структура и съдържание, нито линк билдинг стратегията, нито интернет рекламата ще бъдат достатъчни.
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
        {["seo копирайтинг", "meta оптимизация", "структура на сайт", "ui/ux дизайн"].map((lbl) => (
          <Tag key={lbl} size="l">
            {lbl}
          </Tag>
        ))}
      </Flex>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Какво включва on-page SEO?
        </Heading>

        <Text variant="body-default-l">
          On-page оптимизацията е сърцето на всяка ефективна SEO оптимизация. Тя включва технически и съдържателни аспекти, които гарантират, че сайтът ви е максимално достъпен и релевантен за потребителите и търсачките. Като SEO специалист, имам дългогодишен опит в оптимизация на сайтове за Google.
        </Text>

        <Column as="ul" gap="s" paddingLeft="l">
          <li><strong>Анализ на структурата</strong> – логично подредено меню, вътрешни връзки, URL-и и регистрация в директории.</li>
          <li><strong>SEO копирайтинг</strong> – съдържание, което интегрира ключови думи естествено, без пренасищане.</li>
          <li><strong>Оптимизация на изображения</strong> – alt тагове, компресия, подходящи формати.</li>
          <li><strong>Мета данни</strong> – правилно написани title, description и schema markup.</li>
          <li><strong>UX/UI дизайн</strong> – мобилна съвместимост, бързо зареждане и изчистено потребителско изживяване.</li>
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Защо on-page SEO е толкова важно?
        </Heading>

        <Text variant="body-default-l">
          Без стабилен on-page SEO, всички други усилия за SEO оптимизация в Google ще дават ограничен резултат. Правилно изградена вътрешна структура и качествено съдържание помагат на Google оптимизатора да класира сайта ви по-напред. Това намалява разходите за ppc реклама и повишава рейтинга на вашия сайт.
        </Text>

        <Feedback
          title="Съвет"
          description="Редовната on-page оптимизация води до траен ръст на органичния трафик, особено за онлайн магазини."
        />
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Стъпки при on-page оптимизиране
        </Heading>

        {["Анализ", "Планиране", "Оптимизация", "Проследяване"].map((step, i) => (
          <Flex key={i} gap="8" vertical="start">
            <Icon name="checkCircle" onBackground="brand-strong" />
            <Column gap="2">
              <Heading as="h3" variant="heading-strong-l">
                {step}
              </Heading>
              <Text variant="body-default-m">
                {step === "Анализ"
                  ? "Провеждаме SEO анализ на сайта – технически грешки, съдържание, мета данни."
                  : step === "Планиране"
                  ? "Създаваме индивидуална SEO стратегия с ясно разписани цели."
                  : step === "Оптимизация"
                  ? "Извършваме всички on-page подобрения – от структури до SEO копирайтинг."
                  : "Следим ключовите показатели и адаптираме стратегията при нужда."}
              </Text>
            </Column>
          </Flex>
        ))}
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Цени за on-page оптимизация
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
                Базов пакет
              </Heading>
              <Text variant="body-default-m">
                Подходящ за оптимизация на сайт с ограничен бюджет.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading variant="display-strong-s">от 480&nbsp;лв.</Heading>
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
                Разширен пакет
              </Heading>
              <Text variant="body-default-m">
                Включва анализи и персонален SEO експерт за поддръжка.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading variant="display-strong-s">от 950&nbsp;лв.</Heading>
            </Column>
          </Flex>
        </Column>
      </Column>

    <Heading as="h4" variant="display-default-s">Често Задавани Въпроси (ЧЗВ) за on-page SEO</Heading>
    <OnPageFaq />

      <Column gap="m" align="center" paddingTop="xl">
        <Heading variant="display-strong-m" align="center">
          Искате сайтът ви да се класира по-добре в Google?
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