import type { MetadataRoute } from "next";
import { ALL_PRODUCTS } from "@/constants";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/products",
    "/contact",
    ...ALL_PRODUCTS.map((product) => product.path),
  ];

  return [...new Set(paths)]
    .filter((path) => path.startsWith("/") && !path.includes("#"))
    .map((path) => ({
      url: path === "/" ? SITE_URL : new URL(path, SITE_URL).toString(),
    }));
}
