import { Flex, Meta, Schema, Column, Heading, Text, Button, Grid, Card } from "@once-ui-system/core";
import { baseURL, person, seoServices } from "@/resources";

export async function generateMetadata() {
  return {
    title: seoServices.title,
    description: seoServices.description,
    openGraph: {
      title: seoServices.title,
      description: seoServices.description,
      url: `${baseURL}/seo-uslugi`,
      siteName: seoServices.title,
      images: [
        {
          url: `/api/og/generate?title=${encodeURIComponent(seoServices.title)}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoServices.title,
      description: seoServices.description,
      images: [`/api/og/generate?title=${encodeURIComponent(seoServices.title)}`],
    },
  };
}

export default function SeoUslugi() {
  return (
    <Column maxWidth="l" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={seoServices.title}
        description={seoServices.description}
        path="/seo-uslugi"
        image={`/api/og/generate?title=${encodeURIComponent(seoServices.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/seo-uslugi`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <Column gap="l" paddingX="l">
        <Heading variant="display-strong-l" marginBottom="m">
          {seoServices.title}
        </Heading>
        <Text variant="heading-default-xl" onBackground="neutral-weak" wrap="balance">
          {seoServices.description}
        </Text>
      </Column>

      <Grid columns="2" mobileColumns="1" gap="l" paddingX="l">
        {seoServices.services.map((service, index) => (
          <Card
            key={index}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            direction="column"
            gap="m"
          >
            <Heading variant="heading-strong-l" marginBottom="s">
              {service.title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
              {service.description}
            </Text>
            <Column gap="8">
              {service.features.map((feature, featureIndex) => (
                <Text key={featureIndex} variant="body-default-s">
                  • {feature}
                </Text>
              ))}
            </Column>
            <Text variant="heading-strong-m" marginTop="m">
              {service.price}
            </Text>
            {service.slug && (    
      <Button
            href={`/seo-uslugi/${service.slug}`}
          variant="primary"
          size="m"
          prefixIcon="rocket"
        >
        Виж повече
      </Button>
    )}
          </Card>
        ))}
      </Grid>

      <Column gap="m" paddingX="l" horizontal="center">
        <Heading variant="display-strong-s" align="center">
          Готови за по-добри резултати?
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          Свържете се с мен за безплатна консултация и анализ на вашия сайт
        </Text>
        <Button
          href="/kontakti"
          variant="primary"
          size="l"
          arrowIcon
        >
          Заявете консултация
        </Button>
      </Column>
    </Column>
  );
}
