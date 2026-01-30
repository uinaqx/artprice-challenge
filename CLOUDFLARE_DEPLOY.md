# 🌐 Cloudflare Pages 部署指南

## 特点
- ✅ 完全免费
- ✅ 全球 CDN 加速
- ✅ 支持自定义域名
- ✅ 无 Vercel/Netlify 品牌名
- ✅ HTTPS 自动配置

---

## 部署方式一：直接上传（最简单，推荐）

### 步骤 1：注册 Cloudflare 账号

1. 打开 https://dash.cloudflare.com/sign-up
2. 使用邮箱注册（不需要信用卡）
3. 验证邮箱

### 步骤 2：创建 Pages 项目

1. 登录后点击左侧 "Workers & Pages"
2. 点击 "Create application"
3. 选择 "Pages" 标签
4. 点击 "Upload assets"

### 步骤 3：上传文件

1. 项目名称填写：`artprice-challenge`（或你喜欢的名字）
2. 拖拽 `dist` 文件夹到上传区域
   - 文件夹位置：`Kimi_Agent_艺术价格竞猜/app/dist`
3. 点击 "Deploy site"

### 步骤 4：获得访问链接

部署完成后，你会获得类似：
```
https://artprice-challenge.pages.dev
```

此时已经可以访问了！

---

## 部署方式二：GitHub 自动部署（推荐长期维护）

### 步骤 1：创建 GitHub 仓库

1. 打开 https://github.com/new
2. 仓库名：`artprice-challenge`
3. 选择 Public 或 Private
4. 点击 "Create repository"

### 步骤 2：推送代码

```bash
cd Kimi_Agent_艺术价格竞猜

# 初始化 git
git init
git add .
git commit -m "Initial commit"

# 连接远程仓库（替换为你的用户名）
git remote add origin https://github.com/你的用户名/artprice-challenge.git
git branch -M main
git push -u origin main
```

### 步骤 3：连接 Cloudflare

1. 打开 https://dash.cloudflare.com
2. 点击 "Workers & Pages"
3. 点击 "Create application"
4. 选择 "Pages" → "Connect to Git"
5. 授权 GitHub 访问
6. 选择 `artprice-challenge` 仓库
7. 配置：
   - Framework preset: `None`
   - Build command: `cd app && npm run build`
   - Build output directory: `app/dist`
8. 点击 "Save and Deploy"

以后每次推送代码到 GitHub，Cloudflare 会自动重新部署！

---

## 绑定自定义域名（可选）

### 情况 A：域名在 Cloudflare 管理

如果你的域名已经在 Cloudflare：

1. 进入 Pages 项目
2. 点击 "Custom domains" 标签
3. 点击 "Set up a custom domain"
4. 输入你的域名，如 `artguess.com`
5. 点击 "Continue"
6. 添加 DNS 记录（自动或手动）
7. 等待 SSL 证书生成（几分钟）

### 情况 B：域名在其他平台

1. 进入 Pages 项目 → "Custom domains"
2. 添加你的域名
3. Cloudflare 会提供 DNS 记录信息
4. 去你的域名管理平台（阿里云/腾讯云等）添加对应的 CNAME 记录
5. 等待生效（通常 5-30 分钟）

### DNS 配置示例

在域名管理平台添加：

```
类型: CNAME
主机: @ 或 www
值: artprice-challenge.pages.dev
TTL: 自动
```

---

## 配置自定义域名（隐藏 pages.dev）

### 使用 CNAME 扁平化（推荐）

如果想用根域名（如 `artguess.com` 而不是 `www.artguess.com`）：

1. 将域名 DNS 改为 Cloudflare 的 DNS
2. 在 Cloudflare DNS 面板添加：
   ```
   类型: CNAME
   名称: @
   目标: artprice-challenge.pages.dev
   代理状态: 已代理（橙色云朵）
   ```

3. 在 Pages 项目中添加自定义域名 `artguess.com`

---

## 常见问题

### Q: 如何更新网站内容？

**方式一**：直接重新上传
- 进入 Pages 项目
- 点击 "Upload assets" 重新上传新的 `dist` 文件夹

**方式二**（GitHub 连接）：
- 修改代码 → 推送 GitHub → 自动部署

### Q: 如何查看访问统计？

- Pages 项目 → "Analytics" 标签
- 可以看到访问量、地理位置等

### Q: 如何设置密码保护？

- Pages 项目 → "Settings" → "Access policy"
- 可以设置需要登录才能访问

### Q: 自定义域名后 SSL 证书？

- Cloudflare 自动生成，无需手动配置
- 支持 HTTPS 自动重定向

---

## 费用

| 项目 | 费用 |
|------|------|
| Cloudflare Pages | 免费 |
| 自定义域名 | 约 70元/年（可选） |
| SSL 证书 | 免费 |
| CDN 流量 | 免费（有上限） |

---

## 快速检查清单

部署前确认：
- [ ] `npm run build` 成功
- [ ] `dist` 文件夹存在
- [ ] `dist/index.html` 存在
- [ ] 注册了 Cloudflare 账号

部署后确认：
- [ ] 网站能正常打开
- [ ] 图片能正常显示
- [ ] 游戏功能正常
- [ ] 移动端显示正常

---

## 需要帮助？

1. Cloudflare 官方文档：https://developers.cloudflare.com/pages
2. 社区论坛：https://community.cloudflare.com
