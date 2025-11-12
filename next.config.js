// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: { typedRoutes: true },
  output: 'export',              // ★ 關鍵：讓 next build 產生純靜態 out/
  images: { unoptimized: true }, // ★ export 模式要這個，<Image> 才能正常產檔
  trailingSlash: false,
};

export default nextConfig;
