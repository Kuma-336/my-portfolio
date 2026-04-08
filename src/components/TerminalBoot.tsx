"use client";
import { useState, useEffect } from "react";

export default function TerminalBoot() {
  const [lines, setLines] = useState<string[]>([]);
  const [isBooted, setIsBooted] = useState(false);

  const bootSequence = [
    "[OK] Initializing CUHK-SZ neural network...",
    "[OK] Connecting to NTU Blockchain servers...",
    "[OK] Loading core modules: Python, Java, TypeScript...",
    "[OK] Establishing database and decentralized connections...",
    "User identified: LEVI CHENG.",
    "Role: Full Stack Developer & AI Enthusiast.",
    "Access Granted. Welcome to the workspace."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsBooted(true), 800);
      }
    }, 250); // 速度稍微调快了一点，提升流畅感

    return () => clearInterval(interval);
  }, []);

  if (isBooted) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900 flex flex-col justify-center px-10 font-mono text-green-500 text-sm md:text-base">
      <div className="max-w-2xl mx-auto w-full">
        {lines.map((line, i) => (
          <div key={i} className="mb-2">
            <span className="text-green-400 mr-2">{'>'}</span>
            {line}
          </div>
        ))}
        <div className="animate-pulse w-3 h-5 bg-green-500 mt-2 inline-block"></div>
      </div>
    </div>
  );
}