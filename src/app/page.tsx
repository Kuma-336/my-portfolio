"use client"; // 关键：因为我们要使用 useState，所以必须声明为客户端组件
import { useState } from 'react';
import TerminalBoot from '../components/TerminalBoot';
import NodeNetwork from '../components/NodeNetwork';
import MagneticButton from '../components/MagneticButton';
import TiltCard from '../components/TiltCard';
import SkillMarquee from '../components/SkillMarquee';

export default function Home() {
  // 定义语言状态，默认为英文 'en'
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  // 定义多语言数据字典
  const content = {
    en: {
      toggle: "中",
      heroTitlePrefix: "Crafting Elegant ",
      heroTitleHighlight: "Digital Experiences",
      role: "Full Stack Developer | AI Enthusiast",
      intro: "Computer Science & Engineering background from CUHK-Shenzhen. Incoming MSc in Blockchain at NTU (Singapore). Passionate about AI, Machine Learning, and decentralized systems.",
      contactBtn: "Contact Me (Levi)",
      githubBtn: "Visit GitHub",
      eduTitle: "Education",
      eduNTU: "Nanyang Technological University",
      eduNTUDesc: "Master of Science in Blockchain",
      eduNTUTech: "In Progress (Sept 2025 - June 2027)",
      eduCUHK: "The Chinese University of Hong Kong, Shenzhen",
      eduCUHKDesc: "Bachelor of Engineering in CS&E",
      eduCUHKTech: "Relevant Courses: ML, Algo Design, OS | Bowen Scholarship (Full Tuition)",
      skillTitle: "Tech Stack",
      projectTitle: "Featured Projects",
      proj1Title: "Medical AI Agent",
      proj1Desc: "A demonstration medical multi-agent system deeply integrating doctors, patients, and AI assistants to realize complex business loops and interactive responses.",
      proj2Title: "Vision-based Ball-picking Robot",
      proj2Desc: "Independently developed a physical robot based on CV, completing the full cycle from core visual algorithm design, motion control logic to system integration.",
      proj3Title: "High-Concurrency Delivery Platform",
      proj3Desc: "A mature backend architecture integrating microservices, multi-level caching, and containerized deployment to support high-concurrency ordering.",
    },
    zh: {
      toggle: "EN",
      heroTitlePrefix: "构建优雅的 ",
      heroTitleHighlight: "数字体验",
      role: "全栈开发者 | 人工智能爱好者",
      intro: "拥有香港中文大学（深圳）的计算机科学与工程背景。即将在新加坡南洋理工大学攻读区块链硕士。对人工智能、机器学习和去中心化系统充满热情。",
      contactBtn: "发送邮件联系我",
      githubBtn: "访问 GitHub 主页",
      eduTitle: "教育背景",
      eduNTU: "南洋理工大学 (NTU)",
      eduNTUDesc: "区块链理学硕士",
      eduNTUTech: "在读 (2025年9月 - 2027年6月)",
      eduCUHK: "香港中文大学（深圳）",
      eduCUHKDesc: "计算机科学与工程工程学士",
      eduCUHKTech: "相关课程：机器学习，算法设计，操作系统 | 博文奖学金 (全额学费)",
      skillTitle: "技术栈核心",
      projectTitle: "精选项目",
      proj1Title: "医疗多智能体系统 (Medical Agent)",
      proj1Desc: "一个演示性质的医疗多智能体系统，深度集成了医生、患者和智能助手三个角色，实现了复杂的业务闭环与交互响应。",
      proj2Title: "视觉智能拾球机器人",
      proj2Desc: "独立研发基于计算机视觉识别的实体机器人，完成了从核心视觉算法设计、运动控制逻辑到全系统集成测试的完整闭环。",
      proj3Title: "高并发外卖后端平台",
      proj3Desc: "成熟的后端系统架构，完美整合了微服务组件、多级缓存机制和容器化部署，有效支撑高并发点餐访问与复杂的订单状态流转。",
    }
  };

  // 当前选中的语言内容
  const t = content[lang];

  return (
    <>
      <TerminalBoot />
      <NodeNetwork />

      <main className="min-h-screen text-slate-200 flex flex-col items-center pt-24 pb-20 relative z-10 transition-colors duration-500">
        
        {/* 🌟 语言切换按钮 (固定在右上角) 🌟 */}
        <button 
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          className="fixed top-8 right-8 md:top-12 md:right-12 z-50 w-12 h-12 rounded-full border border-slate-600/50 bg-slate-900/50 backdrop-blur-md text-slate-300 font-mono text-sm hover:border-[#ffd700] hover:text-[#ffd700] transition-all flex items-center justify-center cursor-pointer shadow-lg hover:shadow-[#ffd700]/20"
        >
          {t.toggle}
        </button>

        {/* 首屏介绍区 */}
        <div className="text-center px-4 mb-32 max-w-4xl flex flex-col items-center">
          <div className="w-40 h-40 md:w-98 md:h-98 rounded-full border-4 border-[#ffd700]/30 p-1 mb-10 shadow-[0_0_40px_rgba(255,215,0,0.15)] overflow-hidden relative group cursor-pointer transition-all hover:border-[#ffd700]">
            <img 
              src="./me.jpg" 
              alt="Chao Fan Cheng (Levi)" 
              className="w-full h-full rounded-full object-cover brightness-50 contrast-125 transition-all duration-500 group-hover:brightness-110 group-hover:contrast-100 group-hover:scale-115" 
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg text-white">
            <span className="text-[#ffd700]">Levi</span> Chao Fan Cheng
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-5 font-medium leading-relaxed">
            {t.role}
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed">
            {t.intro}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <MagneticButton text={t.contactBtn} href="mailto:chengchaofan336@gmail.com" />
            <MagneticButton text={t.githubBtn} href="https://github.com/Kuma-336" />
          </div>
        </div>

        {/* 教育背景区 */}
        <div className="w-full max-w-5xl px-6 mb-32">
          <h2 className="text-center text-4xl font-bold mb-16 text-white tracking-tight">{t.eduTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <TiltCard 
              title={t.eduNTU} 
              desc={t.eduNTUDesc}
              tech={t.eduNTUTech}
            />
            <TiltCard 
              title={t.eduCUHK} 
              desc={t.eduCUHKDesc}
              tech={t.eduCUHKTech}
            />
          </div>
        </div>

        {/* 技能走马灯 */}
        <div className="w-full mb-32">
          <h2 className="text-center text-2xl font-bold mb-8 tracking-widest text-slate-500 uppercase">{t.skillTitle}</h2>
          <SkillMarquee />
        </div>

        {/* 项目展示区 */}
        <div className="w-full max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold mb-16 text-white tracking-tight">{t.projectTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TiltCard 
              title={t.proj1Title} 
              desc={t.proj1Desc}
              tech="Next.js | TypeScript | React | AI API"
              href="https://github.com/kuma-336" 
            />
            <TiltCard 
              title={t.proj2Title} 
              desc={t.proj2Desc}
              tech="Python | Computer Vision | Motion Control"
              href="https://github.com/kuma-336" 
            />
            <TiltCard 
              title={t.proj3Title} 
              desc={t.proj3Desc}
              tech="Java | Docker | Nginx | MySQL | Redis"
              href="https://github.com/kuma-336" 
            />
          </div>
        </div>

      </main>
    </>
  );
}