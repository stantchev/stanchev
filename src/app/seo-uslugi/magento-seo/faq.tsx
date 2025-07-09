'use client';
import { AccordionGroup, Text, Column } from '@once-ui-system/core';

export default function MagentoSEOFAQ() {
  return (
    <AccordionGroup items={[
      {
        title: "Какви са най-добрите SEO разширения за Magento?",
        content: (
          <Text>Mageworx, Amasty и SEO Suite са водещи решения. За съдържание и копирайтинг вижте <a href='/seo-uslugi/content-seo'>Content SEO</a>.</Text>
        )
      },
      {
        title: "Как да оптимизирам скоростта на Magento магазина си?",
        content: (
          <Text>Използвайте кеширане, CDN и оптимизирайте кода. Съвети за скорост има и при <a href='/seo-uslugi/opencart-seo'>OpenCart SEO</a> и <a href='/seo-uslugi/wordpress-seo'>WordPress SEO</a>.</Text>
        )
      },
      {
        title: "Как да подобря класирането на продуктовите страници?",
        content: (
          <Text>Уникални описания, структурирани данни и вътрешни линкове са ключови. Вижте <a href='/seo-uslugi/ecommerce-seo'>SEO за онлайн магазини</a> за още примери.</Text>
        )
      },
    ]} />
  );
} 