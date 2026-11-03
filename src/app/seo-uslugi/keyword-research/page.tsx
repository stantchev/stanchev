import { SeoServicePage } from "@/components/seo/SeoServicePage";
import { serviceMetadata } from "@/components/seo/metadata";

export const metadata = serviceMetadata("keyword-research");

export default function Page() {
  return <SeoServicePage slug="keyword-research" />;
}
