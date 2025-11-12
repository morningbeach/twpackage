// app/en/page.tsx
import { redirect } from "next/navigation";

export const metadata = {
  title: "Tomorrow Package — Premium Gifts & Packaging",
  description: "Premium gifts, custom boxes and curated gift sets from TomorrowTW.",
};

export default function EnHome() {
  // 這裡如果你有真正首頁內容就渲染；現在先導到預設集合
  redirect("/en/products/gifts");
}
