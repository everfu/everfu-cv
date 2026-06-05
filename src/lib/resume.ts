import type { ResumeData } from "@/types/resume";

const FALLBACK_NAME = "*卓";

export function getResumeData(): ResumeData {
  const name = process.env.NEXT_PUBLIC_NAME?.trim() || FALLBACK_NAME;

  return {
    name,
    description: `${name}（everfu）的前端开发实习简历`,
    titles: {
      skills: "技术栈",
      internships: "实习经历",
      projects: "开源与项目经验",
      certificates: "个人证书"
    },
    contacts: [
      {
        icon: "ri:phone-line",
        label: "电话",
        value: "173****7596（同微信）"
      },
      {
        icon: "ri:briefcase-line",
        label: "目标",
        value: "前端开发实习"
      },
      {
        icon: "ri:mail-line",
        label: "邮箱",
        link: "mailto:o@efu.me",
        display: "o@efu.me"
      },
      {
        icon: "ri:global-line",
        label: "博客",
        link: "https://blog.efu.me",
        display: "blog.efu.me"
      },
      {
        icon: "ri:github-line",
        label: "GitHub",
        link: "https://github.com/everfu",
        display: "everfu"
      },
      {
        icon: "ri:graduation-cap-line",
        label: "学历",
        value: "27届本科在读（计算机科学与技术）"
      }
    ],
    skills: [
      "AI 技术：了解生成式 AI 原理与应用，能使用 Codex、Claude Code 等工具提升开发效率和解决方案质量。",
      "前端框架：熟悉 React 19、Next.js 16、Vue 3、TypeScript，能独立完成内容站、后台管理和复杂交互页面。",
      "全栈开发：具备 Next.js 全栈开发能力，理解 API Routes、Server Actions 与数据库交互，能实现前后端统一应用交付。",
      "性能优化：了解前端性能优化方法，能在项目中实践代码分割、懒加载、缓存策略等手段提升加载和交互体验。",
      "工具链：熟练使用 Git、VS Code、Postman 等开发工具，了解 Vite、Webpack 等构建工具的基本配置和原理。"
    ],
    internships: [
      {
        name: "深圳晞云科技有限公司",
        desc: "功能开发与官网维护",
        role: "前端开发",
        from: "2025.07",
        bullets: [
          "维护公司官网与业务展示页面，配合设计和内容调整优化信息层级、响应式布局和访问体验。",
          "在需求拆解、接口联调和问题定位中沉淀前端实现细节，协助提升页面稳定性与迭代效率。"
        ]
      }
    ],
    projects: [
      {
        name: "hexo-theme-solitude",
        desc: "1.1k+ stars 的设计师风格 Hexo 主题",
        role: "开源维护者",
        link: "https://github.com/everfu/hexo-theme-solitude",
        from: "2023.10",
        techs: ["Hexo", "JavaScript", "Stylus", "Pug", "Scss"],
        bullets: [
          "围绕博客主题真实使用场景实现懒加载、PWA、LaTeX、多评论系统与 PJAX 等能力，兼顾视觉表现、加载体验和可配置性。",
          "维护主题文档站与示例站（solitude.js.org），沉淀安装、配置、迁移和常见问题说明，降低用户接入成本。",
          "项目公开数据约 1171 stars / 114 forks / 0 open issues（2026-05-31 查询），体现持续维护、问题定位和社区协作能力。"
        ]
      },
      {
        name: "EvoCompete",
        desc: "面向大学生的竞赛平台",
        role: "Next.js 全栈开发",
        from: "2026.04",
        techs: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis"],
        bullets: [
          "接入 Markdown、KaTeX、Shiki、Charts 与 Mindmap，完成题解、公式、代码高亮、能力雷达图和知识图谱等内容渲染能力。",
          "基于 Next.js App Router 构建前后端统一应用，使用 API Routes / Server Actions 处理鉴权、错误兜底和游客回退，保障全链路稳定性。",
          "在纯 Next.js 全栈开发中推进数据库模型与接口设计，形成从页面渲染到数据存储的闭环交付能力。"
        ]
      },
      {
        name: "cube-blog",
        desc: "现代极简个人博客",
        role: "创建者",
        link: "https://github.com/everfu/cube-blog",
        from: "2026.01",
        techs: ["Next.js", "TypeScript", "UnoCSS", "MDX"],
        bullets: [
          "基于 Next.js 16 App Router、TypeScript、UnoCSS 与 MDX 独立搭建内容驱动博客，覆盖文章、相册、技术栈等页面。",
          "实现 MD/MDX 内容扫描、frontmatter 解析、路由映射、Atom/RSS 与 Sitemap 生成，形成完整静态内容发布链路。",
          "接入 Shiki 代码高亮和 Liveblocks 在线状态组件，兼顾内容管理、渲染性能和轻量交互表现。"
        ]
      }
    ],
    certificates: [
      "中国高校计算机大赛·团体程序设计天梯赛高校省级一等奖（2026年）",
      "江西省职业院校技能大赛·Web应用开发省级二等奖（2025年）",
      "江西省职业院校技能大赛·小程序设计与开发省级三等奖（2025年）",
      "湖南省青年岗位能手（2022年）",
      "湖南省第一届职业技能大赛·移动应用开发省级三等奖（2021年）"
    ]
  };
}
