import { SeoServicePage } from "@/components/seo/SeoServicePage";
import { serviceMetadata } from "@/components/seo/metadata";

export const metadata = serviceMetadata("seo-optimizatsiya");

export default function Page() {
  return <SeoServicePage slug="seo-optimizatsiya" />;
}
