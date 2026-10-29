import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Aran Network",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-secondary px-4 py-16 sm:px-6">
      <div className="w-full max-w-2xl rounded-2xl bg-white px-6 py-12 text-center shadow-lg sm:px-12 sm:py-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
          Error 404
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-gray-600">
          The link may be incorrect, or the page may have moved. You can return
          to the homepage or browse our products.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Go to homepage
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-dark transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Browse products
          </Link>
        </div>
      </div>
    </section>
  );
}
