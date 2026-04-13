# 部署说明

## 推荐方案：GitHub + Vercel

FitFuel Prep 当前是标准 Vite 静态前端项目，推荐直接部署到 Vercel。

### Vercel 配置

- Framework Preset：Vite
- Install Command：`npm install`
- Build Command：`npm run build`
- Output Directory：`dist`
- Node.js：使用 Vercel 默认 LTS 版本即可

### 部署步骤

1. 将项目提交并推送到 GitHub 仓库。
2. 打开 Vercel Dashboard，选择 Add New Project。
3. 选择对应 GitHub 仓库并导入。
4. 确认构建配置为 Vite 默认配置。
5. 点击 Deploy，等待构建完成。

## 本地预览

```bash
npm install
npm run build
npm run preview
```

`npm run preview` 会启动本地静态预览服务，用于检查生产构建结果。

## 注意事项

- 当前路由使用浏览器路由，项目已提供 `vercel.json` 将所有路径回退到 `index.html`。
- 项目暂不需要环境变量。
- 图片使用远程 Unsplash URL，部署环境需要允许浏览器访问外部图片资源。
- 直接访问 `/app`、`/app/store` 等路径时，Vercel 会通过 rewrite 回到前端应用。
