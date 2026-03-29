"use client";

export default function SkillMarquee() {
  // 🌟 根据你 CV 提取的硬核技能关键词 🌟
  const skills = [
    "Java", "Python", "HTML/CSS", 
    "Machine Learning", "AI Tools",
    "Jupyter Notebook", "NumPy", "Pandas", 
    "PyTorch", "TensorFlow", 
  ];
  
  return (
    <div className="w-full overflow-hidden py-10 relative bg-white/5 flex items-center">
      {/* 边缘淡入淡出遮罩 */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-slate-900 via-transparent to-slate-900"></div>
      
      {/* 注入行内CSS动画 */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite; // 速度调慢一点，显得更高级
        }
        .animate-marquee:hover {
          animation-play-state: paused; // 鼠标放上去暂停，符合你“精致且有趣”的要求
        }
      `}</style>

      <div className="animate-marquee group">
        {/* 渲染两遍以实现无缝滚动 */}
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="mx-6 px-7 py-3 border border-white/10 rounded-full text-slate-300 text-lg hover:text-[#ffd700] hover:border-[#ffd700] transition-colors cursor-pointer font-mono"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}