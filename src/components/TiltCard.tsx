"use client";
import { useState, useRef } from "react";

// 1. 增加了可选的 href 属性
export default function TiltCard({ title, desc, tech, href }: { title: string; desc: string; tech: string; href?: string }) {
  // 这里我们保持 perspective 角度，但缩放倍数轻微增加
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = -(e.clientY - top - height / 2) / (height / 2);
    // 这里 scale3d 稍微增加到 1.05，配合 3D 效果
    setTransform(`perspective(1000px) rotateX(${y * 10}deg) rotateY(${x * 10}deg) scale3d(1.15, 1.15, 1.15)`);
  };

  const handleMouseLeave = () => {
    // 鼠标离开时恢复原位
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  // 2. 将卡片本身的 UI 逻辑定义为一个公共变量
  const cardContent = (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }} // 这里是 3D 的响应速度
      className="bg-slate-800 border border-slate-600/50 p-8 rounded-xl shadow-2xl cursor-pointer h-full flex flex-col justify-between hover:border-slate-500 transition-colors"
    >
      <div style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-2xl font-bold text-[#ffd700] mb-3">{title}</h3>
        <p className="text-slate-300 mb-6 flex-grow">{desc}</p>
        <div className="text-sm text-[#00e5ff] font-mono">{tech}</div>
      </div>
    </div>
  );

  // 3. 如果提供了 href，我们就生成链接，并强制新窗口打开
  if (href) {
    return (
      // 🚀 🌟 关键改动在这里：将 hover:scale-[1.01] 修改为 hover:scale-110 🌟 🚀
      // 增加了过渡动画时间使其更平滑
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full transition-transform duration-500 ease-out hover:scale-110 relative z-20">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}