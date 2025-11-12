// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // 關鍵：匯出靜態站點 => /out
  distDir: '.next',                 // 預設即可
  images: { unoptimized: true },    // 靜態匯出時避免 Next/Image 的最適化問題
  experimental: { typedRoutes: true }
};
export default nextConfig;
