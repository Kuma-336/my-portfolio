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
      proj1Title: "RAG Knowledge Base & Text2SQL",
      proj1Desc: "Independently built a production-oriented knowledge base QA system supporting Word, PDF, and Excel documents, scaling beyond 100,000 vector chunks.",
      proj1Details: [
        "Built the full retrieval pipeline with document parsing, chunking, BGE embeddings, ChromaDB vector search, BM25, RRF fusion, and Cross-Encoder reranking.",
        "Added Text2SQL for exact part-number, price, and inventory queries, combining product context retrieval with precise SQL queries over Excel inventory data.",
        "Implemented parent-child chunking, query rewriting, multi-query expansion, near-duplicate filtering, retrieval tracing, and evaluations using Recall@K, MRR, Hit Rate, and P95 latency.",
        "Diagnosed HNSW recall failures caused by dense clusters of duplicate vectors, then introduced file deduplication and near-duplicate filtering to improve recall stability.",
      ],
      proj2Title: "Data Agent — Agent Harness for Analytics",
      proj2Desc: "Independently designed a FastAPI-based Agent Harness that provides an extensible, governed runtime for structured-data analysis.",
      proj2Details: [
        "Connected context assembly, the LLM tool-calling loop, tool execution, deterministic validation, run logging, and SSE streaming feedback.",
        "Designed a pluggable Hook + Policy pipeline covering retries, timeouts, call budgets, tool deny-lists, high-risk approvals, schema validation, sensitive-field masking, and output truncation; approval records are bound to argument fingerprints.",
        "Implemented layered context and memory management with asynchronous conversation compression, long-term memory extraction, and user-isolated memory injection.",
        "Built a lightweight Text2SQL semantic layer with schema and business-rule injection, read-only SQL guards, per-user resource isolation, and result-row limits.",
        "Exposed Agent, controlled SQL, context, and reporting capabilities through Streamable HTTP MCP, secured by per-user tokens, isolation, read-only transactions, and capability flags.",
      ],
      proj3Title: "Vision-based Ball-picking Robot",
      proj3Desc: "Independently developed a physical robot based on CV, completing the full cycle from core visual algorithm design, motion control logic to system integration.",
      proj4Title: "High-Concurrency Delivery Platform",
      proj4Desc: "A mature backend architecture integrating microservices, multi-level caching, and containerized deployment to support high-concurrency ordering.",
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
      proj1Title: "RAG 知识库问答与 Text2SQL",
      proj1Desc: "独立负责面向生产场景的知识库问答模块，支持 Word、PDF、Excel 等文件类型，知识库规模达到 100,000+ 向量 Chunk。",
      proj1Details: [
        "基于 FastAPI、ChromaDB、BGE Embedding 构建文档解析、Chunk 切分、向量检索、BM25 关键词检索、RRF 融合及 Cross-Encoder Rerank 完整链路。",
        "针对外贸库存表中“料号—价格—库存”类精确查询接入 Text2SQL，以向量检索提供产品上下文，通过 SQL 对 Excel 库存表执行精确字段查询。",
        "实现父子分块、查询改写、多路查询扩展、近似重复过滤与检索 Trace；搭建测试集生成、人工审核以及 Recall@K、MRR、Hit Rate、P95 延迟评测机制。",
        "定位 ChromaDB HNSW 因数万条近重复向量形成高密度簇而异常漏召回的问题，引入文件去重与近似重复过滤，改善向量空间分布及召回稳定性。",
      ],
      proj2Title: "Data Agent — 面向数据分析的 Agent Harness",
      proj2Desc: "独立设计并实现基于 FastAPI 的 Agent Harness，为结构化数据分析提供可扩展、可治理的模型工具调用运行环境。",
      proj2Details: [
        "打通 Context 组装、LLM Tool Calling 循环、工具执行、确定性校验、运行记录及 SSE 流式反馈链路。",
        "设计可插拔的 Hook + Policy 治理链路，覆盖重试、超时、调用预算、工具黑名单、高风险审批、Schema 校验、敏感字段脱敏与输出截断；使用参数指纹绑定审批记录。",
        "实现多层 Context / Memory 管理，通过异步 Worker 完成对话压缩与长期 Memory 提取，并按用户隔离注入有效记忆。",
        "为 Text2SQL 构建轻量语义层，注入数据源 Schema 与业务规则，并结合只读 SQL Guard、用户级资源隔离及结果行数限制。",
        "提供 Streamable HTTP MCP 接口，将 Agent、受控 SQL、上下文和报告能力开放给外部客户端，通过用户级 Token、资源隔离、只读事务及能力开关确保调用受控。",
      ],
      proj3Title: "视觉智能拾球机器人",
      proj3Desc: "独立研发基于计算机视觉识别的实体机器人，完成了从核心视觉算法设计、运动控制逻辑到全系统集成测试的完整闭环。",
      proj4Title: "高并发外卖后端平台",
      proj4Desc: "成熟的后端系统架构，整合微服务组件、多级缓存机制和容器化部署，有效支撑高并发点餐访问与复杂的订单状态流转。",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TiltCard 
              title={t.proj1Title} 
              desc={t.proj1Desc}
              details={t.proj1Details}
              tech="FastAPI | ChromaDB | BGE | BM25 | RRF | Text2SQL"
              href="https://github.com/kuma-336" 
            />
            <TiltCard 
              title={t.proj2Title} 
              desc={t.proj2Desc}
              details={t.proj2Details}
              tech="FastAPI | LLM Tool Calling | SSE | Text2SQL | MCP"
              href="https://github.com/kuma-336" 
            />
            <TiltCard 
              title={t.proj3Title} 
              desc={t.proj3Desc}
              tech="Python | Computer Vision | Motion Control"
              href="https://github.com/kuma-336"
            />
            <TiltCard
              title={t.proj4Title}
              desc={t.proj4Desc}
              tech="Java | Docker | Nginx | MySQL | Redis"
              href="https://github.com/kuma-336" 
            />
          </div>
        </div>

      </main>
    </>
  );
}
