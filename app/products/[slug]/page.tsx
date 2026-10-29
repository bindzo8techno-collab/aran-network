import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ALL_PRODUCTS } from "@/constants";
import ProductRouteContent from "@/site-pages/ProductRoute";
import { createPageMetadata, truncateDescription } from "@/lib/seo";

export function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    slug: product.path.slice(product.path.lastIndexOf("/") + 1),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find(
    (item) => item.path.split("/").pop() === slug
  );

  if (!product) {
    notFound();
  }

  const description = truncateDescription(
    [product.tagline, product.description].filter(Boolean).join(" ")
  );

  return createPageMetadata({
    title: `${product.name} in Trichy`,
    description,
    path: product.path,
    image: product.imageUrl,
  });
}

type ProductRouteProps = {
  params: Promise<{ slug: string }>;
};

export default function ProductRoute({ params }: ProductRouteProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center bg-secondary px-4 text-center text-gray-600">
          Loading product information...
        </div>
      }
    >
      <ProductPageForSlug params={params} />
    </Suspense>
  );
}

async function ProductPageForSlug({ params }: ProductRouteProps) {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find(
    (item) => item.path.split("/").pop() === slug
  );

  if (!product) {
    notFound();
  }

  return <ProductRouteContent slug={slug} />;
}
