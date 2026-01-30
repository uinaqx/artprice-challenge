# 🔗 GitHub + Cloudflare 自动部署指南

## 优点
- ✅ 推送代码自动部署
- ✅ 无需手动上传
- ✅ 有版本历史记录
- ✅ 多人协作方便

---

## 步骤 1：创建 GitHub 仓库

### 1.1 注册/登录 GitHub
打开 https://github.com

### 1.2 创建新仓库
1. 点击右上角 "+" → "New repository"
2. 填写信息：
   - Repository name: `artprice-challenge`
   - Description: `艺术品价格竞猜游戏`
   - 选择 "Public"（公开）或 "Private"（私有）
   - 不勾选 "Add a README file"
3. 点击 "Create repository"

### 1.3 获取仓库地址
创建后会看到类似：
```
https://github.com/你的用户名/artprice-challenge.git
```

复制这个地址，等下要用。

---

## 步骤 2：推送本地代码到 GitHub

### 2.1 打开终端
在 `Kimi_Agent_艺术价格竞猜` 文件夹内，右键 → "Git Bash Here" 或打开 CMD

### 2.2 执行命令

```bash
# 进入项目目录
cd "Kimi_Agent_艺术价格竞猜"

# 初始化 git
git init

# 添加所有文件
git add .

# 提交
git commit -m "初始版本"

# 连接远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/artprice-challenge.git

# 推送代码
git branch -M main
git push -u origin main
```

### 2.3 验证
打开 GitHub 仓库页面，应该能看到所有文件了。

---

## 步骤 3：Cloudflare 连接 GitHub

### 3.1 删除旧项目（可选）
如果想用同样的名字，先删除原来的 Pages 项目：
1. 进入 Cloudflare 的 `artprice-challenge` 项目
2. Settings → General → "Delete project"

### 3.2 创建新的 Git 项目
1. 打开 https://dash.cloudflare.com
2. 点击 "Workers & Pages"
3. 点击 "Create application"
4. 选择 "Pages" 标签
5. 点击 "Connect to Git"

### 3.3 授权 GitHub
1. 点击 "Connect GitHub account"
2. 授权 Cloudflare 访问你的仓库
3. 选择 `artprice-challenge` 仓库
4. 点击 "Begin setup"

### 3.4 配置构建设置

填写以下信息：

| 设置项 | 填写内容 |
|--------|---------|
| Project name | `artprice-challenge` |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `cd app && npm install && npm run build` |
| Build output directory | `app/dist` |

点击 "Save and Deploy"

### 3.5 等待部署
Cloudflare 会自动：
1. 拉取代码
2. 安装依赖
3. 构建项目
4. 部署上线

完成后会显示新的访问链接。

---

## 步骤 4：测试自动更新

### 4.1 修改代码
比如修改 `app/src/data/artworks.ts`，添加一件新艺术品。

### 4.2 推送到 GitHub
```bash
cd "Kimi_Agent_艺术价格竞猜"

git add .
git commit -m "添加新艺术品"
git push
```

### 4.3 观察自动部署
1. 打开 Cloudflare 控制台
2. 进入你的项目
3. 点击 "Deployments" 标签
4. 会看到新的部署正在进行（1-2 分钟）
5. 部署完成后，网站自动更新

---

## 以后更新流程

```bash
# 修改代码后，只需执行：
git add .
git commit -m "描述修改内容"
git push
```

Cloudflare 会自动重新部署！

---

## 常见问题

### Q: 推送失败，提示 "Permission denied"

A: 需要使用 Personal Access Token

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. 勾选 "repo" 权限
4. 生成后复制 token
5. 推送时使用 token 代替密码：
   ```bash
   git remote set-url origin https://你的用户名:token@github.com/你的用户名/artprice-challenge.git
   ```

### Q: 构建失败

A: 检查构建设置是否正确：
- Build command: `cd app && npm install && npm run build`
- Build output: `app/dist`

### Q: 如何回滚到旧版本？

A:
1. Cloudflare 控制台 → Deployments
2. 找到想回滚的版本
3. 点击 "Rollback to this deployment"

### Q: 自定义域名需要重新设置吗？

A: 需要。新的项目需要重新绑定域名。

---

## 完整命令速查

```bash
# 初始化（只做一次）
git init
git add .
git commit -m "初始版本"
git remote add origin https://github.com/用户名/artprice-challenge.git
git branch -M main
git push -u origin main

# 以后更新（每次修改后执行）
git add .
git commit -m "修改描述"
git push

# 查看状态
git status

# 查看提交历史
git log
```
