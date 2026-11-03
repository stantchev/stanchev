import { SeoServicePage } from "@/components/seo/SeoServicePage";
import { serviceMetadata } from "@/components/seo/metadata";

export const metadata = serviceMetadata("off-page-seo");

export default function Page() {
  return <SeoServicePage slug="off-page-seo" />;
}
