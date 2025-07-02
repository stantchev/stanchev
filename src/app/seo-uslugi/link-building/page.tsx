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

export default function SeoAuditPage() {
  return (
    <Column as="section" gap="xl" padding="xl" fillWidth>
      <Column gap="m" align="center" fillWidth>
        <Heading as="h1" variant="display-strong-l" align="center">
          Link Building – изградете авторитет и класиране с качествени връзки
        </Heading>
<Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
        >
          Добре планираната линк билдинг стратегия е основа за всяка успешна <a href="/seo-uslugi/seo-optimizatsiya">SEO Оптимизация.</a> Чрез изграждане на качествени външни връзки подобряваме вашия SEO рейтинг и видимост в Google.
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
        {["link building", "линк билдинг стратегия", "онлайн репутация", "директории за регистрации"].map((lbl) => (
          <Tag key={lbl} size="l">
            {lbl}
          </Tag>
        ))}
      </Flex>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Какво включва нашият Link Building процес?
        </Heading>

        <Text variant="body-default-l">
          Всяка ефективна SEO стратегия трябва да бъде подкрепена от <strong>естествени и надеждни линкове</strong>,
          които Google разпознава като сигнал за доверие. Като опитен <strong>seo консултант</strong>, подбирам точните източници
          за връзки, които ще повишат авторитета и органичното класиране на вашия сайт.
        </Text>

        <Column as="ul" gap="s" paddingLeft="l">
          <li><strong>Анализ на линк профила</strong> – откриване на токсични връзки и пропуски в стратегиите на конкуренцията.</li>
          <li><strong>Изграждане на връзки</strong> – регистрация в директории, блог партньорства, гост публикации и SEO статии.</li>
          <li><strong>Онлайн репутация</strong> – комбиниране на линкове с управлението на публичния имидж на бранда.</li>
          <li><strong>Мониторинг и отчет</strong> – проследяване на позициите и формиране на <strong>линк билдинг цена</strong> спрямо постигнатия резултат.</li>
        </Column>
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Защо Link Building е ключов за Google?
        </Heading>

        <Text variant="body-default-l">
          Външните връзки са сред най-силните фактори за класиране в Google. Когато бъдат изградени правилно от <strong>SEO фирма</strong>,
          те носят не само трафик, но и доверие, подобрявайки цялостното представяне на сайта в търсачките.
        </Text>

        <Feedback
          title="Съвет"
          description="Не всички линкове са полезни – избягваме автоматични регистрации и се фокусираме върху дългосрочни източници."
        />
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Процес в 4 стъпки
        </Heading>

        {["Анализ", "Планиране", "Изграждане", "Проследяване"].map((step, i) => (
          <Flex key={i} gap="8" vertical="start">
            <Icon name="checkCircle" onBackground="brand-strong" />
            <Column gap="2">
              <Heading as="h3" variant="heading-strong-l">
                {step}
              </Heading>
              <Text variant="body-default-m">
                {step === "Анализ"
                  ? "Изследваме линк профила и идентифицираме приоритетни цели."
                  : step === "Планиране"
                  ? "Изготвяме линк билдинг стратегия, съобразена с нишата и бюджета."
                  : step === "Изграждане"
                  ? "Създаваме партньорства, SEO статии и релевантни връзки към сайта."
                  : "Предоставяме отчет и препоръки за поддръжка на постигнатите резултати."}
              </Text>
            </Column>
          </Flex>
        ))}
      </Column>

      <Column gap="l">
        <Heading as="h2" variant="display-default-m">
          Пакети и цени
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
                Стартов Link Building пакет
              </Heading>
              <Text variant="body-default-m">
                Подходящ за оптимизация на нови сайтове или онлайн магазини без история.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading variant="display-strong-xs">от 790&nbsp;лв.</Heading>
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
                Premium Link Building + SEO поддръжка
              </Heading>
              <Text variant="body-default-m">
                Подходящ за мащабни сайтове и постоянна работа с <strong>seo оптимизатор</strong>.
              </Text>
            </Column>
            <Column flex={4} align="end">
              <Heading variant="display-strong-xs">от 550&nbsp;лв./мес</Heading>
            </Column>
          </Flex>
        </Column>
      </Column>
      <Heading as="h4" variant="display-default-s">Често задавани въпроси за Link Building</Heading>
      <SeoAuditFAQ />
      <Column gap="m" align="center" paddingTop="xl">
        <Heading variant="display-strong-m" align="center">
          Искате ли по-висок авторитет и позиции в Google?
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