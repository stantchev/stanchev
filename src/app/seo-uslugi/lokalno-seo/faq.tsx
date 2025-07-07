'use client';

import { AccordionGroup, Text, Column } from '@once-ui-system/core';

export default function LocalSEOFAQ() {
  return (
    <AccordionGroup
      items={[
        {
          title: 'Как да оптимизирам Google My Business профила си за повече клиенти?',
          content: (
            <Column gap="m">
              <Text onBackground="neutral-weak">
                За да оптимизирате Google Business Profile, попълнете всяко поле – от име, адрес и телефон, до работно време, категории и линк към уебсайта. Добавете качествени снимки на локацията, екипа и услугите. 
              </Text>
              <Text onBackground="neutral-weak">
                Редовно публикувайте постове, отговаряйте на всички отзиви и насърчавайте доволните клиенти да ви оценяват. Това подобрява както видимостта, така и доверието към вашия бизнес.
              </Text>
            </Column>
          ),
        },
        {
          title: 'Кои са най-добрите локални директории за регистрация на малък бизнес?',
          content: (
            <Column gap="m">
              <Text onBackground="neutral-weak">
                Най-силните директории са Google Business Profile, Facebook, Yelp, Foursquare, както и нишови платформи като Zlaten.bg или BG-Mamma, ако предлагате услуги.
              </Text>
              <Text onBackground="neutral-weak">
                Важно е информацията за бизнес име, адрес и телефон (NAP) да е идентична навсякъде. Това е сигнал за доверие и локална релевантност за Google.
              </Text>
            </Column>
          ),
        },
        {
          title: 'Как да получа повече положителни отзиви за бизнеса си онлайн?',
          content: (
            <Column gap="m">
              <Text onBackground="neutral-weak">
                Просто – питайте клиентите. Направете го чрез SMS, имейл, визитка с QR код или лично. Колкото по-лесно го направите, толкова по-голям шанс има да оставят рецензия.
              </Text>
              <Text onBackground="neutral-weak">
                Използвайте директни линкове към вашия Google профил или Facebook. Отговаряйте на всеки отзив – това показва ангажираност и повишава доверието към бранда ви.
              </Text>
            </Column>
          ),
        },
        {
          title: 'Какво е NAP консистентност и защо е важна за локалното SEO?',
          content: (
            <Column gap="m">
              <Text onBackground="neutral-weak">
                NAP означава Name, Address, Phone. Когато тази информация е еднаква навсякъде онлайн – уебсайт, директории, Google профил – това изпраща силен сигнал към търсачките за надеждност.
              </Text>
              <Text onBackground="neutral-weak">
                Липсата на консистентност обърква алгоритмите и може да навреди на класирането ви в локалните резултати.
              </Text>
            </Column>
          ),
        },
      ]}
    />
  );
}