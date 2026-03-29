// 判断是否为生产打包环境
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // 1. 导出为静态 HTML
  output: "export",
  
  // 2. 🌟 救命关键：本地开发为 undefined，线上部署为 "/my-portfolio"
  basePath: isProd ? "/my-portfolio" : undefined,
  
  // 3. 关闭默认图片优化
  images: {
    unoptimized: true,
  },
  
  // 4. 强制忽略打包时的严格检查
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;