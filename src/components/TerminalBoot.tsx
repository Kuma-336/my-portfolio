"use client";
import { useState, useEffect } from "react";

export default function TerminalBoot() {
  const [lines, setLines] = useState<string[]>([]);
  const [isBooted, setIsBooted] = useState(false);

  const bootSequence = [
    "[OK] Initializing core neural engine...",
    "[OK] Loading frontend modules: React, Next.js, Tailwind...",
    "[OK] Establishing database connections...",
    "User identified: CHENG CHAOFAN/LEVI.",
    "Role: Full Stack Developer.",
    "Access Granted. Welcome to the workspace."
  ];

  useEffect(() => {
    let currentLine = 0;
    // 逐行显示代码
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        // 停顿一小会儿后结束动画
        setTimeout(() => setIsBooted(true), 800);
      }
    }, 300); // 每行出现的间隔(毫秒)

    return () => clearInterval(interval);
  }, []);

  if (isBooted) return null; // 启动完成后卸载组件

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-center px-10 font-mono text-green-500 text-sm md:text-base">
      <div className="max-w-2xl mx-auto w-full">
        {lines.map((line, i) => (
          <div key={i} className="mb-2">
            <span className="text-green-400 mr-2">{'>'}</span>
            {line}
          </div>
        ))}
        {/* 闪烁的光标 */}
        <div className="animate-pulse w-3 h-5 bg-green-500 mt-2 inline-block"></div>
      </div>
    </div>
  );
}