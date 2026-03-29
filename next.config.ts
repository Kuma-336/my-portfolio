import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. 告诉 Next.js 导出纯静态网页
  output: "export",
  
  // 2. 🌟 极其关键：告诉网页，你的所有 CSS 和 JS 都要去 /my-portfolio 这个文件夹下找！
  basePath: "/my-portfolio",
  
  // 3. GitHub Pages 不支持 Next 默认的图片优化服务器
  images: {
    unoptimized: true,
  },
};

export default nextConfig;