"use client";

import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from "@/constants";
import ProductPage from "@/site-pages/ProductPage";

export default function ProductRoute({ slug }: { slug: string }) {
  const product = ALL_PRODUCTS.find(
    (item) => item.path.split("/").pop() === slug
  );

  if (!product) {
    return null;
  }

  const parentCategory = PRODUCT_CATEGORIES.find((category) =>
    category.products.some((item) => item.id === product.id)
  );

  return <ProductPage product={product} parentCategory={parentCategory} />;
}
