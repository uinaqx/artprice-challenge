# ArtPrice Challenge

一个基于 React 和 Vite 的艺术品估价小游戏。玩家需要根据艺术品图片、作者、年份和简介，在多个价格选项中猜出真实拍卖价格，最后系统会计算综合准确率，并保存历史记录和本地排行榜。

## 功能

- 输入用户名开始挑战
- 每局随机抽取 10 件艺术品
- 展示艺术品图片、名称、作者、年份和简介
- 提供多个价格选项供玩家选择
- 每题显示真实价格和本题准确率
- 结束后生成综合准确率
- 展示答题详情、最佳表现、用时和完全正确数量
- 保存个人历史记录
- 保存本地排行榜
- 使用 `localStorage` 保存用户名、历史成绩和排行榜

## 技术栈

- React
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- lucide-react

## 项目结构

```text
.
└── app
    ├── package.json
    ├── src
    │   ├── App.tsx
    │   ├── components
    │   │   └── game
    │   └── data
    │       └── artworks.ts
    └── ...
```

## 本地运行

进入应用目录：

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

游戏数据保存在浏览器的 `localStorage` 中，包括：

- 用户名
- 最近成绩历史
- 本地排行榜

注意：这些数据只存在当前浏览器里。换设备、换浏览器或清除站点数据后，记录不会自动同步。

## 部署说明

项目代码位于 `app` 目录。部署时需要把 `app` 作为项目根目录，常用配置如下：

```text
Build command: npm run build
Output directory: dist
```

如果在仓库根目录部署，需要先进入 `app` 目录再执行构建：

```bash
cd app
npm install
npm run build
```

构建完成后，静态文件会生成在：

```text
app/dist
```

## 后续可改进方向

- 增加更多艺术品题库
- 增加不同难度模式
- 增加移动端细节优化
- 接入后端数据库，实现跨设备排行榜
- 增加题目解释或艺术品背景介绍

## 说明

本项目目前是一个纯前端小游戏。排行榜和历史记录都是本地数据，不代表全网排名。