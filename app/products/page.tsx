import Products from "@/site-pages/Products";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Security Products & Solutions in Trichy",
  description:
    "Browse Aran Network's surveillance, access control, alarm, communication, smart home and IT product solutions for customers in Trichy.",
  path: "/products",
});

export default function ProductsPage() {
  return <Products />;
}
