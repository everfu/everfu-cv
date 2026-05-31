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
        value: "27届专科在读（大数据技术）"
      }
    ],
    skills: [
      "前端框架：熟悉 React 19、Next.js 16 App Router、Vue 3、Nuxt.js、TypeScript，能独立完成内容站、后台管理和复杂交互页面。",
      "工程化与渲染：熟悉 SSR/SSG、MDX 内容管线、路由与数据获取、组件封装、响应式布局和可访问性细节，重视页面稳定性与可维护性。",
      "内容与可视化：实践 Markdown/MDX、Shiki、KaTeX、Charts、Mindmap、Atom/RSS、Sitemap 等能力，擅长把结构化内容转化为清晰的前端体验。",
      "后端协作：了解 C++ Drogon、PostgreSQL、Redis、WebSocket、鉴权、异常兜底和接口联调，能在全栈项目中推进前端侧交付。"
    ],
    internships: [
      {
        name: "深圳晞云科技有限公司",
        desc: "CoAI 相关功能与官网维护",
        role: "前端开发",
        from: "2025.07",
        bullets: [
          "参与 CoAI 相关页面与交互功能开发，围绕表单、状态反馈、异常提示等场景修复十余处体验缺陷，提升页面使用流畅度。",
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
        role: "前端 / 全栈协作",
        link: "https://jr-jx.cn",
        from: "2026.04",
        techs: ["Next.js", "TypeScript", "C++", "PostgreSQL", "Redis"],
        bullets: [
          "接入 Markdown、KaTeX、Shiki、Charts 与 Mindmap，完成题解、公式、代码高亮、能力雷达图和知识图谱等内容渲染能力。",
          "封装客户端与服务端请求层，统一处理鉴权、错误兜底、超时控制和游客回退逻辑，降低多模块联调成本。",
          "协作 C++ Drogon、PostgreSQL、Redis 与 WebSocket 服务，支撑赛事导入、审批邀请和实时通知等核心链路。"
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
      "江西省职业院校技能大赛·新一代信息技术应用省级一等奖（2026年）",
      "中国高校计算机大赛·团体程序设计天梯赛高校省级一等奖（2026年）",
      "江西省职业院校技能大赛·Web应用开发省级二等奖（2025年）",
      "江西省职业院校技能大赛·小程序设计与开发省级三等奖（2025年）",
      "湖南省青年岗位能手（2022年）",
      "湖南省第一届职业技能大赛·移动应用开发省级三等奖（2021年）"
    ]
  };
}
