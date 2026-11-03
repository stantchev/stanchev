import { SeoServicePage } from "@/components/seo/SeoServicePage";
import { serviceMetadata } from "@/components/seo/metadata";

export const metadata = serviceMetadata("on-page-seo");

export default function Page() {
  return <SeoServicePage slug="on-page-seo" />;
}
