// app/en/products/page.tsx
import { redirect } from "next/navigation";

export const metadata = {
  title: "Products | Tomorrow Package",
  description: "Explore our curated selection of premium gifts, boxes and sets.",
};

export default function ProductsIndex() {
  redirect("/en/products/gifts");
}
