import Image from 'next/image'; 
import TerminalBoot from '../components/TerminalBoot';
import NodeNetwork from '../components/NodeNetwork';
import MagneticButton from '../components/MagneticButton';
import TiltCard from '../components/TiltCard';
import SkillMarquee from '../components/SkillMarquee';

export default function Home() {
  return (
    <>
      <TerminalBoot />
      <NodeNetwork />

      <main className="min-h-screen text-slate-200 flex flex-col items-center pt-24 pb-20 relative z-10">
        
        {/* 首屏介绍区 */}
        <div className="text-center px-4 mb-32 max-w-4xl flex flex-col items-center">
          
          <div className="w-40 h-40 md:w-98 md:h-98 rounded-full border-4 border-[#ffd700]/30 p-1 mb-10 shadow-[0_0_40px_rgba(255,215,0,0.15)] overflow-hidden relative group cursor-pointer transition-all hover:border-[#ffd700]">
            {/* 🚀 放弃 Next.js Image 组件，使用原生 img 标签，并使用 ./me.jpg 相对路径 🚀 */}
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
            Full Stack Developer | AI Enthusiast
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed">
            Computer Science & Engineering background from CUHK-Shenzhen. <br/>
            Incoming MSc in Blockchain at NTU (Singapore). Passionate about <br/>
            AI, Machine Learning, and decentralized systems.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <MagneticButton text="访问 GitHub 主页" href="https://github.com/Kuma-336" />
          </div>
          
          <MagneticButton text="与我联系 (Levi)" href="mailto:chengchaofan336@gmail.com" />
        </div>

        {/* 教育背景区 */}
        <div className="w-full max-w-5xl px-6 mb-32">
          <h2 className="text-center text-4xl font-bold mb-16 text-white tracking-tight">教育背景</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <TiltCard 
              title="Nanyang Technological University" 
              desc="Master of Science in Blockchain"
              tech="Incoming (Sept 2025 - June 2027)"
            />
            <TiltCard 
              title="The Chinese University of Hong Kong, Shenzhen" 
              desc="Bachelor of Engineering in CS&E"
              tech="Relevant Courses: ML, Algo Design, OS | Bowen Scholarship (Full Tuition) | Sept 2021 - May 2025"
            />
          </div>
        </div>

        {/* 技能走马灯 */}
        <div className="w-full mb-32">
          <h2 className="text-center text-2xl font-bold mb-8 tracking-widest text-slate-500 uppercase">技术栈核心</h2>
          <SkillMarquee />
        </div>

        {/* 🌟 项目展示区：调整为 3 列布局 🌟 */}
        <div className="w-full max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold mb-16 text-white tracking-tight">精选项目</h2>
          {/* 这里改为 lg:grid-cols-3，让 3 个项目在宽屏下并排显示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <TiltCard 
              title="Medical AI Agent" 
              desc="一个演示性质的医疗多智能体系统，深度集成了医生、患者和智能助手三个角色，实现了复杂的业务闭环与交互响应。"
              tech="Next.js | TypeScript | React | AI API"
              href="https://github.com/kuma-336" // 你可以之后替换为具体的仓库地址
            />
            
            <TiltCard 
              title="视觉智能拾球机器人" 
              desc="独立研发基于计算机视觉识别的实体机器人，完成了从核心视觉算法设计、运动控制逻辑到全系统集成测试的完整闭环。"
              tech="Python | Computer Vision | Motion Control"
              href="https://github.com/kuma-336" 
            />

            <TiltCard 
              title="高并发外卖后端平台" 
              desc="成熟的后端系统架构，完美整合了微服务组件、多级缓存机制和容器化部署，有效支撑高并发点餐访问与复杂的订单状态流转。"
              tech="Java | Docker | Nginx | MySQL | Redis"
              href="https://github.com/kuma-336" 
            />

          </div>
        </div>

      </main>
    </>
  );
}