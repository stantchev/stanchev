// src/app/seo-uslugi/seo-konsultaciya/page.tsx

'use client';

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
import SeoConsultationFAQ from './faq';

export default function SeoConsultationPage() {
  return (
    <Column as="section" gap="xl" padding="xl" fillWidth>
      <Column gap="m" align="center" fillWidth>
        <Heading as="h1" variant="display-strong-l" align="center">
          SEO Консултация – най-бързият начин да разберете защо сайтът ви не се класира
        </Heading>

        <Text variant="display-default-s" align="center" onBackground="neutral-weak">
          Независимо дали имате нужда от технически съвет, преглед на структурата или стратегия за съдържание – SEO консултацията е идеалният начин да получите персонален план за действие.
        </Text>

        <Flex horizontal="center">
          <Button
            variant="primary"
            size="l"
            href="/kontakti"
            prefixIcon="search"
            data-border="rounded"
          >
            Заяви безплатна консултация
          </Button>
        </Flex>
      </Column>

      <Flex gap="8" wrap horizontal="center">
        {["SEO одит", "on-page оптимизация", "линк билдинг", "техническа SEO проверка"].map((lbl) => (
          <Tag key={lbl} size="l">
            {lbl}
          </Tag>
        ))}
      </Flex>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Какво включва SEO консултацията?
        </Heading>

        <Text variant="body-default-l">
          Консултацията е насочена към разбиране на настоящото състояние на вашия уеб сайт и създаване на ефективни насоки за подобрение. Без значение дали сте собственик на малък бизнес или мащабна платформа, ще получите индивидуално внимание и реални решения.
        </Text>

        <Column as="ul" gap="s" paddingLeft="l">
          <li><strong>Анализ на състоянието</strong> – технически преглед, съдържание, линкове и структура.</li>
          <li><strong>Оценка на видимостта</strong> – текущи позиции в търсачките и потенциал за растеж.</li>
          <li><strong>Индивидуални препоръки</strong> – конкретни действия с бърз ефект.</li>
          <li><strong>Съвети за дългосрочна стратегия</strong> – как да изградите силно SEO присъствие.</li>
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Кога е правилният момент за SEO консултация?
        </Heading>

        <Text variant="body-default-l">
          Най-доброто време да потърсите SEO консултант е още преди проблемите да станат критични. Консултацията ви дава насока какво да промените, как да оптимизирате и какво да избегнете, за да спестите време, средства и пропуснати възможности.
        </Text>

        <Feedback
          title="Препоръка"
          description="Ако подготвяте нов сайт, включете SEO консултацията в етапа на планиране – това ще ви даде огромно предимство."
        />
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Как протича самата консултация?
        </Heading>

        {["Заявка", "Предварителен анализ", "Среща онлайн", "Препоръки"].map((step, i) => (
          <Flex key={i} gap="8" vertical="start">
            <Icon name="checkCircle" onBackground="brand-strong" />
            <Column gap="2">
              <Heading as="h3" variant="heading-strong-l">
                {step}
              </Heading>
              <Text variant="body-default-m">
                {step === "Заявка"
                  ? "Изпращате запитване през сайта и уточняваме нуждите ви."
                  : step === "Предварителен анализ"
                  ? "Преглеждаме вашия сайт с помощта на професионални SEO инструменти."
                  : step === "Среща онлайн"
                  ? "Провеждаме кратка среща за обсъждане на резултатите и въпроси."
                  : "Изпращаме ви персонализиран документ с конкретни стъпки и съвети."
                }
              </Text>
            </Column>
          </Flex>
        ))}
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Цена за SEO консултация
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
                Индивидуална консултация
              </Heading>
              <Text variant="body-default-m">
                До 30 минути анализ и съвети, насочени към най-важните проблеми и възможности на сайта ви.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading variant="display-strong-s">от 0&nbsp;лв.</Heading>
            </Column>
          </Flex>
        </Column>
      </Column>

      <Heading as="h4" variant="display-default-s">
        Често задавани въпроси (ЧЗВ) за SEO консултацията
      </Heading>

      <SeoConsultationFAQ />

      <Column gap="m" align="center" paddingTop="xl">
        <Heading variant="display-strong-m" align="center">
          Искате ли експертно мнение за SEO състоянието на сайта ви?
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