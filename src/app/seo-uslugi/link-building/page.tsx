import { SeoServicePage } from "@/components/seo/SeoServicePage";
import { serviceMetadata } from "@/components/seo/metadata";

export const metadata = serviceMetadata("link-building");

export default function Page() {
  return <SeoServicePage slug="link-building" />;
}
