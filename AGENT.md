# AGENT.md

本文件用于指导后续代理在本仓库中工作。请优先遵循这里的项目约定，再结合用户当次请求做最小必要修改。

## 项目概览

- 这是 everfu 的个人简历站，目标是在线展示并支持 A4 打印。
- 技术栈：Next.js 16、React 19、TypeScript、Sass、Iconify、Framer Motion。
- 包管理器固定使用 pnpm，Node.js 版本要求为 `>=20.9.0`。
- 项目默认开发地址为 `http://localhost:3000`。

## 常用命令

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm build
pnpm start
```

优先用 `pnpm typecheck` 做类型校验；涉及渲染、样式、打印或元数据时，再运行 `pnpm build` 或启动本地页面进行验证。

## 目录与职责

- `src/lib/resume.ts`：简历内容数据源，包含姓名、联系方式、技能、经历、项目和证书。
- `src/types/resume.ts`：简历数据类型定义。
- `src/app/page.tsx`：主页渲染和页面级元数据生成。
- `src/app/layout.tsx`：全局布局、字体和主题 Provider。
- `src/app/globals.scss`：全局样式、响应式样式和打印样式。
- `src/components/`：简历 UI 组件，例如信息项、项目卡片、浮动菜单、主题切换、打印密度控制。
- `src/lib/icon.ts`：技术栈名称到 Iconify 图标的映射。
- `src/lib/site.ts`：站点 URL / metadataBase 相关逻辑。

## 修改原则

- 保持改动聚焦，不做无关重构、依赖升级、格式化扫全仓或内容改写。
- 简历文案属于个人资料。除非用户明确要求，不主动更改姓名、联系方式、经历、项目、证书等事实性内容。
- 修改 `src/lib/resume.ts` 中的 `techs` 时，确保每个技术名存在于 `src/lib/icon.ts` 的 `TECH_ICON_MAP` 类型中；新增技术时同步补图标映射。
- 组件保持小而直观，优先沿用现有 BEM 风格 class 命名，例如 `project-card__header`。
- 路径别名使用 `@/`，类型导入使用 `import type`。
- 该项目是 App Router 项目。只有需要浏览器 API、交互状态或事件处理的组件才添加 `"use client"`。

## 样式与体验

- 设计目标是简洁、可打印、信息密度高。避免营销式 Hero、装饰性大图、复杂卡片嵌套和过度动画。
- 任何样式改动都要兼顾屏幕阅读、移动端和 A4 打印。
- 打印相关样式集中在 `src/app/globals.scss` 的 `@media print` 内，注意 `@page`、分页、间距和字体变量。
- 不要让浮动菜单、徽标或交互控件出现在打印输出中，除非用户明确要求。
- 保持中文排版稳定，避免让联系信息、日期、技术栈标签在窄屏或打印时相互遮挡。

## 环境变量

- `NEXT_PUBLIC_NAME`：覆盖默认展示姓名。
- `NEXT_PUBLIC_SITE_URL`：用于正式站点的 Open Graph / canonical 基准地址。

## 验证建议

- 内容或类型变更：运行 `pnpm typecheck`。
- 页面结构、metadata、字体、Next.js 配置或依赖变更：运行 `pnpm build`。
- 样式、响应式、主题或打印变更：启动 `pnpm dev`，检查桌面、移动端和打印预览。

