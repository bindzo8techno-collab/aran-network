import Contact from "@/site-pages/Contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact in Trichy",
  description:
    "Contact Aran Network in Trichy about CCTV, access control, alarm systems, smart home automation and IT networking solutions.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
