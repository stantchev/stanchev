'use client';
import { AccordionGroup, Text, Column } from '@once-ui-system/core';

export default function EcommerceSEOFAQ() {
  return (
    <AccordionGroup items={[
      {
        title: "Колко време отнема SEO оптимизацията на онлайн магазин?",
        content: (
          <Text>Обикновено първите резултати се виждат след 3-6 месеца, но за стабилен ръст са нужни 6-12 месеца постоянна работа.</Text>
        )
      },
      {
        title: "Как да избегна дублирано съдържание при продукти?",
        content: (
          <Text>Използвайте уникални описания за всеки продукт и настройте канонични тагове. Вижте повече за <a href='/seo-uslugi/wordpress-seo'>SEO за WordPress</a> и <a href='/seo-uslugi/opencart-seo'>OpenCart SEO</a> за платформи с много продукти.</Text>
        )
      },
      {
        title: "Какви са най-важните фактори за класиране на e-commerce сайт?",
        content: (
          <Column gap="m">
            <Text>Техническа оптимизация, уникално съдържание, вътрешна линк структура и авторитетни външни връзки. Подобно на <a href='/seo-uslugi/magento-seo'>Magento SEO</a>, скоростта и UX са ключови.</Text>
            <Text>Вижте и <a href='/seo-uslugi'>другите SEO услуги</a> за цялостна стратегия.</Text>
          </Column>
        )
      },
    ]} />
  );
} 