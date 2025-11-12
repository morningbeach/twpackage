// app/en/product/[slug]/page.tsx

import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import gifts from "@/content/products/en/gifts.json";
import boxes from "@/content/products/en/boxes.json";
import sets from "@/content/products/en/sets.json";

// ✅ 將三類商品合併
const allProducts = [
  ...(gifts as any),
  ...(boxes as any),
  ...(sets as any),
];

type Params = {
  slug: string;
};

// ✅ 告訴 Next 要在 build 時預生哪些 slug（SSG）
export function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

// ✅ 頁面主體
export default async function ProductDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  // 找到對應產品
  const product = allProducts.find((item) => item.slug === slug);

  // 若找不到 → 404
  if (!product) return notFound();

  // ✅ 回傳組件
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <ProductPage product={product} />
    </div>
  );
}

// ✅ 額外設定（SEO / Metadata 可留空或補上）
export const metadata = {
  title: "Product Detail - TWPackage",
  description: "Explore premium gift boxes and packaging solutions.",
};
