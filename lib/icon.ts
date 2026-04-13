export const TECH_ICON_MAP = {
  Axios: "simple-icons:axios",
  CSS: "simple-icons:css3",
  Electron: "file-icons:electron",
  Hexo: "simple-icons:hexo",
  JavaScript: "simple-icons:javascript",
  MDX: "simple-icons:mdx",
  Mongoose: "devicon:mongoose-wordmark",
  NaiveUI: "logos:naiveui",
  "Next.js": "simple-icons:nextdotjs",
  Nitro: "unjs:nitro",
  Nuxt: "vscode-icons:file-type-nuxt",
  Pinia: "logos:pinia",
  Pug: "simple-icons:pug",
  Scss: "vscode-icons:file-type-scss",
  Stylus: "simple-icons:stylus",
  TypeScript: "vscode-icons:file-type-typescript-official",
  UnoCSS: "logos:unocss",
  VitePress: "simple-icons:vitepress",
  "Vue 3": "logos:vue",
  VueUse: "logos:vueuse",
  Kotlin: "skill-icons:kotlin-light",
  Java: "logos:java",
  Ktor: "skill-icons:ktor-light",
} as const;

export type Tech = keyof typeof TECH_ICON_MAP;

export function getTechIcon(tech: Tech) {
  return TECH_ICON_MAP[tech] ?? "ri:code-line";
}
