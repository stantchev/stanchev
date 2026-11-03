import { SeoServicePage } from "@/components/seo/SeoServicePage";
import { serviceMetadata } from "@/components/seo/metadata";

export const metadata = serviceMetadata("opencart-seo");

export default function Page() {
  return <SeoServicePage slug="opencart-seo" />;
}
