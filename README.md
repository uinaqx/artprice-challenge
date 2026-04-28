# artprice-challenge

一个基于 React 和 Vite 的前端项目，包含 AI 工具导航页面和艺术品估价小游戏。用户可以浏览不同分类的 AI 工具，也可以进入小游戏，根据艺术品信息猜测价格，并查看准确率、历史记录和排行榜。

## 功能

- 首页展示精选 AI 工具
- 按分类浏览 AI 工具
- 顶部导航栏支持分类切换
- 艺术品估价小游戏
- 随机抽取艺术品题目
- 记录玩家名称
- 计算估价准确率
- 保存最近成绩历史
- 保存本地排行榜
- 使用 `localStorage` 保存用户数据

## 技术栈

- React
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- lucide-react
- Recharts

## 项目结构

```text
.
└── app
    ├── package.json
    ├── src
    │   ├── App.tsx
    │   ├── components
    │   └── data
    └── ...
```

## 本地运行

先进入应用目录：

```bash
cd app
```

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

构建生产版本：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview
```

## 数据保存说明

项目中的小游戏历史记录、排行榜和用户名保存在浏览器 `localStorage` 中。

这意味着：

- 数据只保存在当前浏览器
- 换设备或换浏览器后不会自动同步
- 清除浏览器站点数据后记录会消失

## 部署说明

本项目实际应用代码位于 `app` 目录。部署时需要把 `app` 作为构建目录，执行：

```bash
npm install
npm run build
```

构建产物通常会生成在 `app/dist` 目录中。部署到 Vercel、Netlify 或 GitHub Pages 时，需要注意项目根目录和构建输出目录的设置。

## 后续可改进方向

- 接入后端数据库，实现跨设备排行榜
- 增加更多艺术品题库
- 增加游戏难度分级
- 增加移动端细节优化
- 给 AI 工具导航增加搜索功能

## 说明

该项目目前更适合作为前端练习、AI工具展示页和小游戏原型。若要做成正式在线产品，需要继续补充数据来源、后端存储和部署配置。