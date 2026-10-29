import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import JsonLd from "@/components/JsonLd";
import SiteShell from "@/components/SiteShell";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Security Systems & Smart Living in Trichy | Aran Network",
  description:
    "CCTV, access control, alarm, smart home and IT networking solutions for homes and businesses in Trichy from Aran Network.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/ARAN_NETWORK_logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "Aran Network",
    url: "/",
    title: "Security Systems & Smart Living in Trichy | Aran Network",
    description:
      "CCTV, access control, alarm, smart home and IT networking solutions for homes and businesses in Trichy from Aran Network.",
    images: ["/optimized/banners/secure.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Systems & Smart Living in Trichy | Aran Network",
    description:
      "CCTV, access control, alarm, smart home and IT networking solutions for homes and businesses in Trichy from Aran Network.",
    images: ["/optimized/banners/secure.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": `${SITE_URL}/#business`,
                name: SITE_NAME,
                url: SITE_URL,
                logo: `${SITE_URL}/ARAN_NETWORK_logo.png`,
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "No: 3/298 D, GP Complex, Iniyanur Main Road, Varma Nagar",
                  addressLocality: "Pirattiyur, Trichy",
                  addressRegion: "Tamil Nadu",
                  postalCode: "620009",
                  addressCountry: "IN",
                },
              },
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                name: SITE_NAME,
                url: SITE_URL,
                publisher: {
                  "@id": `${SITE_URL}/#business`,
                },
              },
            ],
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
