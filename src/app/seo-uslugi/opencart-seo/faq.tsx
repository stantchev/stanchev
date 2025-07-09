'use client';
import { AccordionGroup, Text, Column } from '@once-ui-system/core';

export default function OpenCartSEOFAQ() {
  return (
    <AccordionGroup items={[
      {
        title: "Какви са най-добрите SEO разширения за OpenCart?",
        content: (
          <Text>SEO Pack, SEO URL и Google Sitemap са сред най-използваните. За съдържание вижте <a href='/seo-uslugi/content-seo'>Content SEO</a>.</Text>
        )
      },
      {
        title: "Как да оптимизирам скоростта на OpenCart магазина си?",
        content: (
          <Text>Използвайте кеширане, оптимизирайте изображенията и изберете подходящ хостинг. Съвети за скорост има и при <a href='/seo-uslugi/wordpress-seo'>WordPress SEO</a>.</Text>
        )
      },
      {
        title: "Как да подобря класирането на продуктови страници?",
        content: (
          <Text>Създайте уникални описания, добавете вътрешни линкове и структурирани данни. Вижте <a href='/seo-uslugi/ecommerce-seo'>SEO за онлайн магазини</a> за още идеи.</Text>
        )
      },
    ]} />
  );
} 