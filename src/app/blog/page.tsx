import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
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
      <Heading variant="display-strong-l" marginBottom="m">
        {blog.title}
      </Heading>
      <Text
        variant="heading-default-xl"
        onBackground="neutral-weak"
        wrap="balance"
        marginBottom="xl"
      >
        В нашия блог ще намерите полезни статии за seo оптимизация google, seo новини, класиране на сайт и seo анализатор. Разгледайте различни теми и съвети за подобряване на вашето онлайн присъствие или научете повече за нашите <a href="/seo-uslugi">SEO услуги</a>.
      </Text>
      <Column
				fillWidth flex={1}>
				<Posts range={[1,1]} thumbnail direction="column"/>
				<Posts range={[2,3]} thumbnail/>
				<Posts range={[4]} columns="2"/>
			</Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
