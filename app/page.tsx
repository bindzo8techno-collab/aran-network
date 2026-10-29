import HomePage from "@/site-pages/HomePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Security Systems & Smart Living in Trichy",
  description:
    "CCTV, access control, alarm, smart home and IT networking solutions for homes and businesses in Trichy from Aran Network.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
