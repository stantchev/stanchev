'use client';
import { AccordionGroup, Text, Column } from '@once-ui-system/core';

export default function WordpressSEOFAQ() {
  return (
    <AccordionGroup items={[
      {
        title: "Кой е най-добрият SEO плъгин за WordPress?",
        content: (
          <Text>Най-популярни са Yoast SEO и RankMath, но изборът зависи от нуждите на сайта. Вижте и <a href='/seo-uslugi/content-seo'>Content SEO</a> за оптимизация на съдържанието.</Text>
        )
      },
      {
        title: "Как да ускоря WordPress сайта си?",
        content: (
          <Text>Използвайте кеширащи плъгини, оптимизирайте изображенията и изберете бърз хостинг. Подобни съвети важат и за <a href='/seo-uslugi/ecommerce-seo'>онлайн магазини</a>.</Text>
        )
      },
      {
        title: "Как да защитя сайта си от спам и хакерски атаки?",
        content: (
          <Text>Инсталирайте защитни плъгини, използвайте SSL и редовно обновявайте системата. За по-сложни платформи вижте <a href='/seo-uslugi/magento-seo'>Magento SEO</a>.</Text>
        )
      },
    ]} />
  );
} 