import type { NextConfig } from "next";

// 判断当前是否为生产打包环境 (GitHub Actions 运行时为 production)
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  
  // 🌟 核心魔法：本地开发是 "", 线上打包是 "/my-portfolio"
  basePath: isProd ? "/my-portfolio" : "",
  
  images: {
    unoptimized: true,
  },
  
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;