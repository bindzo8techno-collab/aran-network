import About from "@/site-pages/About";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Aran Network and its security, automation and connectivity solutions for homes and businesses in Trichy.",
  path: "/about",
});

export default function AboutPage() {
  return <About />;
}
