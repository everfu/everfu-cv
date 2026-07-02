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
      "前端基础：熟练掌握 HTML5、CSS3、JavaScript（ES6+）与 CSS 预处理器（Sass/Stylus），深入理解 DOM 和事件循环机制。",
      "核心框架：熟练掌握 React 生态（含 Hooks、Next.js）与 Vue 3 生态，理解组件生命周期及响应式原理。",
      "全栈开发：熟悉 Next.js（App Router）全栈开发与服务端渲染（SSR/SSG），掌握 API Routes 并能配合 Prisma / Supabase 读写数据。",
      "性能优化：具备前端性能优化意识，实践过代码分割、延迟加载、静态打包优化，能够有效改善首屏加载。",
      "工程化与工具：熟练使用 Git 分支管理协作，了解 Vite、Webpack 等构建工具的配置与包管理（pnpm）。"
    ],
    internships: [
      {
        name: "深圳晞云科技有限公司",
        desc: "官网维护与业务展示功能迭代",
        role: "前端开发实习生",
        from: "2025.07",
        bullets: [
          "负责公司官网及核心页面的功能开发与日常维护，基于 React/TypeScript 还原响应式布局，保障跨端体验。",
          "与后端团队高效进行接口联调与数据交互，处理异常边界，定位并协助修复生产环境偶发 Bug，保障系统稳定运行。"
        ]
      }
    ],
    projects: [
      {
        name: "hexo-theme-solitude",
        desc: "一款具备 1.2k+ Stars 的高颜值、功能完备的设计师风格 Hexo 博客主题",
        role: "核心开发者",
        link: "https://github.com/everfu/hexo-theme-solitude",
        from: "2023.10",
        techs: ["Hexo", "JavaScript", "Stylus", "Pug", "Scss"],
        bullets: [
          "作为核心维护者主导功能演进，实现 Pjax 局部刷新、PWA 离线缓存、延迟加载等，优化首屏性能与响应体验。",
          "开发即刻短文、我的装备等特色页面，基于 Next.js 与 Fumadocs 搭建并维护官方文档站。",
          "项目已获 1.2k+ Stars 与 110+ Forks，日常高效响应 Issue/PR，具备跨版本兼容管理与良好的开源协作能力。"
        ]
      },
      {
        name: "EvoCompete",
        desc: "面向大学生的在线竞赛与题解评测平台",
        role: "Next.js 全栈开发",
        from: "2026.04",
        techs: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis"],
        bullets: [
          "开发竞赛平台内容呈现模块，集成 Markdown 渲染、KaTeX 公式、Shiki 高亮以及 D3/Chart.js 雷达图可视化。",
          "基于 Next.js App Router 实践 Server Actions 与 API Routes 处理身份鉴权、异常兜底，优化全链路数据通信。",
          "使用 Prisma ORM 配合 PostgreSQL 建模，采用 Redis 缓存高频榜单数据，完成前后端全栈数据闭环。"
        ]
      },
      {
        name: "blog-v2",
        desc: "基于 Next.js 与 Supabase 的全栈现代化极简个人博客",
        role: "独立创建者",
        link: "https://github.com/everfu/blog-v2",
        from: "2025.12",
        techs: ["Next.js", "TypeScript", "UnoCSS", "Supabase", "MDX"],
        bullets: [
          "基于 Next.js 16 (App Router) + TypeScript + UnoCSS 独立设计并搭建全栈现代化个人博客系统。",
          "利用 Supabase 进行强类型数据建模，实现文章、相册、评论等多个模块的存取逻辑，保障数据一致性。",
          "集成 next-mdx-remote 与 Shiki 动态渲染高亮 MDX，并构建专属 Admin 页面完成高效内容运维。"
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
