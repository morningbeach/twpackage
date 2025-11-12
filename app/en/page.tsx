// app/en/products/page.tsx
import { redirect } from "next/navigation";
import { Suspense } from "react";

/**
 * This page handles requests to /en/products
 * and gracefully redirects users to the default category (/en/products/gifts).
 * We use Suspense to show a small loader for better UX.
 */

export const metadata = {
  title: "Products | Tomorrow Package",
  description:
    "Explore our curated selection of premium gift items, boxes, and packaging sets.",
};

export default function ProductsPage() {
  // Redirect immediately to the default category (gifts)
  redirect("/en/products/gifts");
}

/**
 * Optional loading UI (in case Next.js prerender shows a delay)
 * This gives a subtle fade effect during redirect.
 */
export function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-pulse text-gray-400 text-sm tracking-wide">
        Redirecting to gift collection...
      </div>
    </div>
  );
}

// Optionally wrap the redirect in Suspense (to avoid hydration warning)
export function PageWrapper() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsPage />
    </Suspense>
  );
}
