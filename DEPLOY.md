# 🎨 ArtPrice Challenge 部署指南

## 快速部署（推荐）

### 方法一：双击运行脚本（最简单）

1. **Windows 用户**：
   - 双击 `deploy.bat` 或 `deploy.ps1`
   - 按提示选择部署方式

2. **Mac/Linux 用户**：
   ```bash
   cd Kimi_Agent_艺术价格竞猜/app
   npm install
   npm run build
   ```

### 方法二：手动部署到 Netlify（免费，无需注册）

1. 打开 https://app.netlify.com/drop
2. 将 `app/dist` 文件夹拖拽到网页上
3. 自动获得在线链接！

### 方法三：部署到 Vercel

```bash
cd Kimi_Agent_艺术价格竞猜/app
npx vercel --prod
```

按提示登录或注册，一键部署。

---

## 详细部署说明

### 1. 本地预览

构建完成后，可以使用以下命令本地预览：

```bash
cd app
npx serve dist
```

访问 http://localhost:3000 查看效果。

### 2. 部署到自己的服务器

将 `app/dist` 文件夹中的内容上传到你的 Web 服务器根目录即可。

### 3. GitHub Pages 部署

1. 创建 GitHub 仓库
2. 修改 `vite.config.ts`：
   ```ts
   base: '/你的仓库名/',
   ```
3. 重新构建：`npm run build`
4. 将 `dist` 文件夹内容推送到 `gh-pages` 分支

### 4. 使用 Cloudflare Pages

1. 注册 Cloudflare 账号
2. 进入 Pages 面板
3. 上传 `dist` 文件夹
4. 获得全球 CDN 加速的链接

---

## 构建输出

构建后的文件位于 `app/dist/`：

```
dist/
├── index.html          # 入口文件
├── assets/
│   ├── index-xxx.js    # JavaScript
│   └── index-xxx.css   # CSS
```

这是一个纯静态网站，任何支持静态托管的平台都可以部署。

---

## 免费部署平台推荐

| 平台 | 优点 | 缺点 |
|------|------|------|
| **Netlify** | 最简单，拖拽上传 | 每月 100GB 流量限制 |
| **Vercel** | 自动部署，全球 CDN | 需要注册账号 |
| **GitHub Pages** | 与 GitHub 集成 | 仅支持公开仓库（免费版）|
| **Cloudflare Pages** | 速度快，无限流量 | 配置稍复杂 |

---

## 注意事项

1. **图片加载**：游戏使用 Wikimedia 图片，需要网络连接
2. **本地存储**：游戏历史记录保存在浏览器 localStorage 中
3. **兼容性**：支持现代浏览器（Chrome, Firefox, Safari, Edge）

---

## 需要帮助？

- 构建问题：检查 Node.js 版本（建议 v18+）
- 部署问题：尝试使用 Netlify Drop 最简单
