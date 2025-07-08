import { Column, Heading, Schema, Text } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";
import Script from 'next/script';

export async function generateMetadata() {
  return {
    title: "SEO Блог – съвети, стратегии и новини за по-добро класиране в Google",
    description:
      "Следи нашия SEO блог за практически съвети, актуални стратегии, уроци и новини от света на оптимизацията. Всичко за по-високи позиции и реални резултати.",
    keywords:
      "seo блог, seo съвети, seo новини, seo уроци, seo обучение, seo копирайтинг, seo стратегии, как се прави seo оптимизация, анализ на сайт, оптимизация на сайт",
    alternates: {
      canonical: `${baseURL}/blog`,
    },
    openGraph: {
      title: "SEO Блог – съвети, стратегии и новини за по-добро класиране в Google",
      description:
        "Следи нашия SEO блог за практически съвети, актуални стратегии, уроци и новини от света на оптимизацията.",
      url: `${baseURL}/blog`,
      siteName: "Станчев SEO",
      images: [
        {
          url: `https://stanchev.vercel.app/images/og/og.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "bg_BG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "SEO Блог – съвети, стратегии и новини за по-добро класиране в Google",
      description:
        "Следи нашия SEO блог за практически съвети, актуални стратегии, уроци и новини от света на оптимизацията.",
      images: [`https://stanchev.vercel.app/images/og/og.jpg`],
    },
  };
}

export default function Blog() {
  return (
    <>
    <script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": ["Blog", "CollectionPage"],
  "name": "Блог | Станчев SEO",
  "url": "https://stanchev.bg/blog",
  "description": "Разгледайте последните статии и актуални новини от света на SEO оптимизацията, дигиталния маркетинг и уеб разработването от Станчев SEO.",
  "publisher": {
    "@type": "Organization",
    "name": "Станчев SEO",
    "url": "https://stanchev.bg/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://stanchev.bg/images/og/og.jpg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://stanchev.bg/blog"
  }
}
</script>
    <Column maxWidth="s">
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
        В нашия блог ще намерите полезни статии за seo оптимизация google, seo новини, класиране на сайт и seo анализатор. Разгледайте различни теми и съвети за подобряване на вашето онлайн присъствие или научете повече за нашите <a href="/seo-uslugi">SEO услуги</a>.
      </Text>

      <Heading as="h3" variant="heading-strong-s" marginBottom="m">
        Последни статии и SEO новини
      </Heading>

      <Column fillWidth flex={1}>
        <Posts range={[1, 1]} thumbnail direction="column" />
        <Posts range={[2, 3]} thumbnail />
        <Posts range={[4]} columns="2" />
      </Column>

      {newsletter.display && (
        <>
          <Heading as="h4" variant="heading-strong-xs" align="center" paddingTop="xl">
        Абонирайте се за нови SEO съвети и ресурси
          </Heading>
          <Mailchimp newsletter={newsletter} />
        </>
      )}
    </Column>
      </>
  );
}
