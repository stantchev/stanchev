import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";
import Script from "next/script";

export async function generateMetadata() {
  return {
    ...Meta.generate({
      title: blog.title,
      description: blog.description,
      baseURL: baseURL,
      image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
      path: blog.path,
    }),
    keywords:
      "seo блог, seo съвети, seo новини, seo уроци, seo обучение, seo копирайтинг, seo стратегии, как се прави seo оптимизация, анализ на сайт, оптимизация на сайт",
    alternates: {
      canonical: `${baseURL}/blog`,
    },
    openGraph: {
      title:
        "SEO Блог – съвети, стратегии и новини за по-добро класиране в Google | Stanchev Digital",
      description:
        "Следи нашия SEO блог за практически съвети, актуални стратегии, уроци и новини от света на оптимизацията.",
      url: `${baseURL}/blog`,
      siteName: "Stanchev Digital",
      images: [
        {
          url: `https://stanchev.bg/images/og/og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "bg_BG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "SEO Блог – съвети, стратегии и новини за по-добро класиране в Google",
      description:
        "Следи нашия SEO блог за практически съвети, актуални стратегии, уроци и новини от света на оптимизацията.",
      images: [`https://stanchev.bg/images/og/og.jpg`],
    },
  };
}

export default function Blog() {
  return (
    <>
      {/* JSON-LD Schema */}
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": ["Blog", "CollectionPage"],
            name: "Блог | Stanchev Digital",
            url: "https://stanchev.bg/blog",
            description:
              "Разгледайте последните статии и актуални новини от света на SEO оптимизацията, дигиталния маркетинг и уеб разработването от Stanchev Digital.",
            publisher: {
              "@type": "Organization",
              name: "Stanchev Digital",
              url: "https://stanchev.bg/",
              logo: {
                "@type": "ImageObject",
                url: "https://stanchev.bg/images/og/og.jpg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://stanchev.bg/blog",
            },
          }),
        }}
      />

      <Column maxWidth="m" paddingTop="24">
        <Schema
          as="blogPosting"
          baseURL={baseURL}
          title={blog.title}
          description={blog.description}
          path={blog.path}
          image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
          author={{
            name: person.name,
            url: `${baseURL}/blog`,
            image: `${baseURL}${person.avatar}`,
          }}
        />

        <Heading as="h1" variant="display-strong-l" marginBottom="m">
          {blog.title}
        </Heading>

        <Heading as="h2" variant="heading-strong-m" marginBottom="s">
          Стратегии и SEO съвети за по-добро класиране в Google
        </Heading>

        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="xl"
        >
          В нашия блог ще намерите полезни статии за seo оптимизация google, seo
          новини, класиране на сайт и seo анализатор. На блога има информация за
          киберсигурност, SEO и AI, взета от най-новите публикации на Stanchev
          Digital. Разгледайте различни теми и съвети за подобряване на вашето
          онлайн присъствие или научете повече за нашите <a href="/seo-uslugi">SEO
          услуги</a>.
        </Text>

        <Column gap="m" marginBottom="xl">
          <Heading as="h3" variant="heading-strong-m">
            Какво ще откриете в SEO блога на Станчев
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Публикациите са групирани по теми за техническо SEO, оптимизация на съдържание,
            локално SEO, линк билдинг и анализ на резултатите. Всеки материал е написан на
            български език и включва реални примери, чеклисти и стратегии, които прилагам в
            ежедневната си работа с клиенти. Ако търсите конкретна информация за Core Web Vitals,
            миграция на сайт към HTTPS или изграждане на устойчив SEO план за онлайн магазин,
            ще намерите стъпка по стъпка инструкции.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Поддържам блога актуален с новини за Google алгоритми, тенденции в изкуствения интелект,
            локални SERP промени и тактически възможности за малък и среден бизнес. Статиите обхващат
            както стратегическо, така и оперативно ниво: от проучване на ключови думи и SEO копирайтинг
            до автоматизация, проследяване на резултати и интеграция с други маркетинг канали.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            За начинаещи съм събрал ръководства „първи стъпки“, а за напреднали – детайлни анализи,
            таблици с KPI и процеси за оптимизация на екипни workflows. Ако имате нужда от персонализирана
            стратегия, можете да резервирате консултация от страницата <a href="/seo-uslugi/seo-konsultaciya">SEO консултация</a>
            или да ми пишете директно през <a href="/kontakti">формата за контакт</a>.
          </Text>
        </Column>

        <Heading as="h3" variant="heading-strong-m" marginBottom="m">
          Последни статии и SEO новини
        </Heading>

        <Column fillWidth flex={1} gap="40" marginBottom="40">
          <Posts range={[1, 1]} thumbnail />
          <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
          <Posts range={[4]} columns="2" />
        </Column>

        <Column gap="m" marginBottom="48">
          <Heading as="h3" variant="heading-strong-m">
            Как да извлечете максимума от съдържанието
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            Препоръчвам да си запишете конкретни цели преди да започнете четенето – например
            подобряване на метаданните, ускоряване на сайта или изграждане на съдържателен календар.
            Използвайте вградените навигации и категорийни страници, за да намирате по-бързо релевантни
            материали, а ако се нуждаете от технически ресурси, разгледайте и секцията с инструменти и шаблони,
            която обновявам ежемесечно.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            След всяка статия ще откриете препоръчани следващи стъпки, свързани публикации и ръководства
            за прилагане на прочетеното. Ако имате въпроси или искате да споделите конкретен казус, оставете
            коментар или пишете на <a href="/kontakti">kontakti@stanchev.bg</a>. Така ще мога да подготвя още
            по-полезни материали и да подобрявам блога според реалните нужди на бизнеса ви.
          </Text>
        </Column>
      </Column>
      {newsletter.display && (
        <Column fillWidth maxWidth="s" align="center" paddingY="40">
          <Mailchimp />
        </Column>
      )}
    </>
  );
}
