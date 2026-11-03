import { SeoServicePage } from "@/components/seo/SeoServicePage";
import { serviceMetadata } from "@/components/seo/metadata";

export const metadata = serviceMetadata("magento-seo");

export default function Page() {
  return <SeoServicePage slug="magento-seo" />;
}
