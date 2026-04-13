import type { ResumeData } from "@/types/resume";

const FALLBACK_NAME = "*卓";

export function getResumeData(): ResumeData {
  const name = process.env.NEXT_PUBLIC_NAME?.trim() || FALLBACK_NAME;

  return {
    name,
    description: `${name}（everfu）的简历`,
    headline: "",
    titles: {
      skills: "个人技能",
      internships: "实习经历",
      projects: "项目经验",
      certificates: "个人证书"
    },
    contacts: [
      {
        icon: "ri:phone-line",
        label: "电话",
        value: "173****2790（同微信）"
      },
      {
        icon: "ri:men-line",
        label: "性别",
        value: "男"
      },
      {
        icon: "ri:mail-line",
        label: "邮箱",
        link: "mailto:o@efu.me",
        display: "o@efu.me"
      },
      {
        icon: "ri:school-line",
        label: "学校",
        value: "江西软件职业技术大学"
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
        value: "专科在读（27届，大数据技术）"
      }
    ],
    skills: [
      "掌握 React 19、Next.js、Vue3、Nuxt.js、TypeScript，熟悉 App Router、SSR/SSG、内容站与后台管理等常见前端项目形态。",
      "具备良好的响应式设计、UI/UX 优化与工程落地能力，关注用户体验、可访问性以及多端兼容场景下的细节质量。",
      "善于运用 AI 工具提升开发效能，注重代码质量、可维护性与兼容性实践，能够结合问题定位、文档检索和工程重构推进项目迭代。"
    ],
    internships: [
      {
        name: "深圳晞云科技有限公司",
        desc: "CoAI 相关功能开发与公司官网维护",
        role: "前端开发",
        from: "2025.07",
        bullets: [
          "参与 “CoAI” 相关功能开发，修复十余处用户体验缺陷，提升页面使用流畅度与细节完成度。",
          "维护公司“net”网站的前端功能，确保页面性能和用户体验。",
          "协助设计和开发公司官网，优化内容展示和交互体验。"
        ]
      }
    ],
    projects: [
      {
        name: "EvoCompete",
        desc: "面向大学生的竞赛平台",
        role: "全栈开发",
        link: "https://jr-jx.cn",
        from: "2026.04",
        techs: ["Next.js", "TypeScript", "C++", "PostgreSQL", "Redis"],
        bullets: [
          "接入 Markdown、KaTeX、Shiki、Charts、Mindmap，实现结构化题解、公式渲染、代码高亮、能力雷达图和知识图谱可视化。",
          "针对接口调用链路分散、异常处理不统一的问题，封装客户端与服务端请求层，统一处理鉴权、错误兜底、超时控制与游客回退逻辑，降低前后台多模块联调成本并提升页面稳定性。",
          "后端基于 C++ Drogon + PostgreSQL + Redis 落地高性能业务服务，抽象配置化 AI Provider 与配置中心，实现 Redis 验证码限频、行为数据沉淀与 WebSocket 实时通知，支撑赛事导入、审批邀请和运营治理链路。"
        ]
      },
      {
        name: "cube-blog",
        desc: "个人博客",
        role: "创建者",
        link: "https://github.com/everfu/cube-blog",
        from: "2026.01",
        techs: ["Next.js", "TypeScript", "UnoCSS", "MDX"],
        bullets: [
          "基于 Next.js 16 App Router + TypeScript + UnoCSS + MDX 独立搭建内容驱动博客，围绕静态内容发布链路实现文章页、相册页、技术栈页以及 Atom/RSS、Sitemap 等站点生成能力。",
          "自行实现 MD/MDX 内容扫描、frontmatter 解析与文章路由映射，接入 Shiki 代码高亮和 Liveblocks 在线状态组件，形成兼顾内容管理、渲染性能与交互表现的前端方案。"
        ]
      }
    ],
    certificates: [
      "CET-4",
      "江西省职业院校技能大赛（2025年，Web应用开发省级二等奖、小程序设计与开发省级三等奖）",
    ]
  };
}
