/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 告诉 Next.js 导出静态 HTML 文件
  output: 'export',
  
  // 2. 匹配你的仓库名，这样才能生成 /my-portfolio/ 的路径
  basePath: '/my-portfolio', 
  
  // 3. GitHub Pages 不支持 Next.js 默认的图片优化服务器，必须关闭
  images: {
    unoptimized: true,
  },
};

export default nextConfig;