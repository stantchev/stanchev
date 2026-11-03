import { SeoServicePage } from "@/components/seo/SeoServicePage";
import { serviceMetadata } from "@/components/seo/metadata";

export const metadata = serviceMetadata("ecommerce-seo");

export default function Page() {
  return <SeoServicePage slug="ecommerce-seo" />;
}
