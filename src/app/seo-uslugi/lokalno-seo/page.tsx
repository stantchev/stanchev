import { SeoServicePage } from "@/components/seo/SeoServicePage";
import { serviceMetadata } from "@/components/seo/metadata";

export const metadata = serviceMetadata("lokalno-seo");

export default function Page() {
  return <SeoServicePage slug="lokalno-seo" />;
}
