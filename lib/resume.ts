import type { ResumeData } from "@/types/resume";

const FALLBACK_NAME = "*卓";

export function getResumeData(): ResumeData {
  const name = process.env.NEXT_PUBLIC_NAME?.trim() || FALLBACK_NAME;

  return {
    name,
    description: `${name}（everfu）的简历`,
    headline: "全栈开发者 · Agent / Skill 实践者",
    titles: {
      skills: "核心能力",
      internships: "实习经历",
      projects: "项目经验",
      certificates: "开源影响"
    },
    contacts: [
      {
        icon: "ri:github-line",
        label: "GitHub",
        link: "https://github.com/everfu",
        display: "everfu"
      },
      {
        icon: "ri:school-fill",
        label: "学校",
        value: "南昌航空大学"
      },
      {
        icon: "ri:mail-line",
        label: "邮箱",
        link: "mailto:o@efu.me",
        display: "o@efu.me"
      },
      {
        icon: "ri:book-3-line",
        label: "学历",
        value: "本科（27届，计算机科学与技术）"
      },
      {
        icon: "ri:global-line",
        label: "博客",
        link: "https://www.efu.me",
        display: "www.efu.me"
      }
    ],
    skills: [
      
    ],
    internships: [
      
    ],
    projects: [
      {
        name: "竟途 EvoCompete",
        desc: "竞赛平台",
        role: "全栈开发",
        link: "https://jr-jx.cn",
        from: "2026.04",
        techs: ["Next.js", "TypeScript", "UnoCSS", "Kotlin", "Ktor"],
        bullets: [
          "一个面向竞赛场景的智能化平台。它不是单纯的信息展示系统，而是将“竞赛发现、AI 辅导、能力成长、智能组队、资讯运营、后台治理”整合到同一平台中的综合性解决方案。"
        ]
      },
      {
        name: "hexo-theme-solitude",
        desc: "主题",
        role: "开发者",
        link: "https://github.com/everfu/hexo-theme-solitude",
        from: "2023.10",
        techs: ["Hexo", "Stylus", "Pug", "JavaScript"],
        bullets: [
          "持续完善 Hexo 内容站能力，覆盖 Pjax、PWA、LaTeX、评论系统、AI 摘要、代码高亮，并配套文档站 solitude.js.org。",
          "截至 2026-04-12，GitHub 公开数据显示项目获得 1186 Stars、114 Forks。"
        ]
      },
      {
        name: "cube-blog",
        desc: "博客",
        role: "开发者",
        link: "https://github.com/everfu/cube-blog",
        from: "2025.12",
        techs: ["Next.js", "TypeScript", "UnoCSS", "MDX"],
        bullets: [
          "基于 Next.js 16 App Router + UnoCSS + MDX 构建，接入 Shiki、RSS、Sitemap、相册与实时在线状态等能力。",
          "以 TypeScript 为主，面向现代博客与个人品牌站场景，公开主页为 cube-blog.vercel.app。"
        ]
      }
    ],
    certificates: [
      "比赛奖项：江西省职业院校技能大赛（2025年，Web应用开发省级二等奖、小程序设计与开发省级三等奖）",
      "证书资质：英语四级（CET-4，2026年，445分）"
    ]
  };
}
