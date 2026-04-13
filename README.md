# FitFuel Prep

FitFuel Prep 是一个面向硬核健身和备餐场景的 AI 营养产品原型。项目来自 Figma 导出代码，并在此版本中整理为一个包含 **网页版官网** 和 **移动端 App 原型** 的 Vite + React 展示项目。

## Live Demo

- 官网首页：https://fitfuel-prep.vercel.app
- 移动端 App 原型：https://fitfuel-prep.vercel.app/app

## 两个展示入口

| 路径 | 定位 | 说明 |
| --- | --- | --- |
| `/` | 网页版官网 | 真正的桌面优先响应式网页，用于介绍 FitFuel 的产品价值、功能模块、demo 数据和移动端原型入口。 |
| `/app` | 移动端 App 原型 | 保留手机屏幕比例，用于演示 Dashboard、健康档案、AI 食材仓、SOP 和打卡日历的完整移动端流程。 |

## 推荐演示路径

1. 打开 https://fitfuel-prep.vercel.app，先浏览 FitFuel 的网页版官网，理解产品定位和能力。
2. 点击“体验移动端原型”，进入 https://fitfuel-prep.vercel.app/app。
3. 在移动端原型中体验：Dashboard → Profile → Store → SOP → Calendar。
4. 在 Store 页面查看扩充后的 demo 食材库、宏量营养进度和 AI 智能平替弹层。

## 项目亮点

- 网页版官网与移动端 App 原型在同一个项目中共存，适合 GitHub 和 Vercel 展示。
- 官网是桌面优先的响应式网页布局，不使用手机屏幕比例作为主页面。
- 移动端原型保留暗黑模式、霓虹绿高对比视觉和 iPhone 风格容器。
- 食材库已抽离到独立数据文件，支持官网和 App 复用。
- 以 Bosen 为固定 demo persona，展示 Clean Bulk、预算控制、宏量营养追踪和备餐打卡流程。

## 技术栈

- Vite 6
- React 18
- TypeScript
- Tailwind CSS 4
- React Router
- Lucide React icons

## 运行方式

```bash
npm install
npm run dev
```

本地启动后访问终端输出的 Vite 地址。常见默认地址是 `http://localhost:5173`。

## 构建与检查

```bash
npm run typecheck
npm run build
npm run preview
```

## 路由说明

```text
/                 网页版官网
/app              移动端 App Dashboard
/app/profile      健康档案
/app/store        AI 营养自选仓
/app/sop          烹饪 SOP
/app/calendar     备餐打卡日历
```

## 数据结构

扩充后的 demo 食材库位于：

```text
src/app/data/foods.ts
```

当前包含 5 类食材：

- 核心优质蛋白区
- 干净低 GI 碳水区
- 健康脂肪区
- 蔬菜纤维区
- 训练恢复食品区

每个食材包含名称、图片、重量、价格、标签、蛋白质、碳水、脂肪，以及是否支持 AI 平替等字段。

## 目录结构

```text
src/
  app/
    App.tsx
    routes.tsx
    data/
      foods.ts
    components/
      LandingPage.tsx
      Dashboard.tsx
      Profile.tsx
      Store.tsx
      SOP.tsx
      Calendar.tsx
      AIFab.tsx
      ui/
  styles/
    index.css
    tailwind.css
    theme.css
docs/
  DEPLOYMENT.md
PRD.md
vercel.json
```

## 部署建议

推荐使用 GitHub + Vercel：

1. 将项目推送到 GitHub。
2. 在 Vercel 中导入该仓库。
3. Framework Preset 选择 `Vite`。
4. Build Command 使用 `npm run build`。
5. Output Directory 使用 `dist`。
6. 项目已包含 `vercel.json`，用于支持 `/app` 等前端路由直接访问。

更多说明见 [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)。

## 已知限制

- 当前版本是前端展示原型，食材、营养和日历数据均为静态 demo 数据。
- AI 助理与智能平替为交互演示，不连接真实模型或后端 API。
- Figma 导出依赖较多，后续可以在不影响视觉的前提下继续清理未使用依赖。
