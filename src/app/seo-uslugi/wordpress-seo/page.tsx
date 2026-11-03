import { SeoServicePage } from "@/components/seo/SeoServicePage";
import { serviceMetadata } from "@/components/seo/metadata";

export const metadata = serviceMetadata("wordpress-seo");

export default function Page() {
  return <SeoServicePage slug="wordpress-seo" />;
}
