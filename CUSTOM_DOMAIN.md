# 🌐 自定义域名部署指南

## 方案 1：购买域名 + Vercel/Netlify（推荐）

### 步骤 1：购买域名

推荐平台：
- **Namesilo** (国外，便宜，隐私保护免费) ~$8/年
- **阿里云** (国内，支付宝方便) ~55元/年
- **腾讯云** (国内) ~60元/年

建议后缀：`.com` `.art` `.app` `.fun`

### 步骤 2：部署到 Vercel 并绑定域名

```bash
cd app
npx vercel --prod
```

然后在 Vercel 控制台：
1. 进入你的项目
2. 点击 "Settings" → "Domains"
3. 输入你购买的域名（如 `artguess.com`）
4. 按提示添加 DNS 记录

### 步骤 3：配置 DNS（以 Namesilo 为例）

1. 登录 Namesilo
2. 找到你的域名 → "DNS Records"
3. 添加 Vercel 要求的记录（通常是 A 记录或 CNAME）
4. 等待 5-60 分钟生效

---

## 方案 2：Cloudflare Pages（免费 + 无品牌名）

### 优点
- ✅ 完全免费
- ✅ 全球 CDN 加速
- ✅ 可以隐藏原始域名
- ✅ 支持自定义域名

### 部署步骤

1. **注册 Cloudflare 账号**
   https://dash.cloudflare.com

2. **进入 Pages**
   左侧菜单 → "Workers & Pages" → "Create a project"

3. **上传文件**
   - 方式 1：连接 GitHub 仓库（自动部署）
   - 方式 2：直接上传 `dist` 文件夹

4. **绑定域名**
   - 在 Cloudflare 添加你的域名
   - 在 Pages 项目设置中添加自定义域名

---

## 方案 3：国内服务器/对象存储（国内访问最快）

### 阿里云 OSS + 域名

1. 购买阿里云 OSS 存储包（约 5元/月）
2. 创建 Bucket，设置为静态网站托管
3. 上传 `dist` 文件夹内容
4. 绑定自己的域名
5. 开启 CDN 加速（可选）

**效果**：`https://artguess.com` 或 `https://artguess.yourdomain.com`

### 腾讯云 COS

类似阿里云，价格差不多。

---

## 方案 4：GitHub Pages + 自定义域名

### 步骤

1. 创建 GitHub 仓库（公开或私有）
2. 上传代码到仓库
3. 在仓库设置中启用 GitHub Pages
4. 添加 `CNAME` 文件，内容为你的域名
5. 在域名 DNS 中添加 GitHub 提供的 IP 地址

---

## 快速决策

| 你的需求 | 推荐方案 |
|---------|---------|
| 最便宜 | Cloudflare Pages |
| 国内访问最快 | 阿里云 OSS / 腾讯云 COS |
| 最简单 | Vercel + 购买的域名 |
| 最稳定 | GitHub Pages + 域名 |
| 完全控制 | 自己的 VPS 服务器 |

---

## 费用参考

| 方案 | 年费 |
|------|------|
| `.com` 域名 | ~70元 |
| `.art` 域名 | ~100元 |
| 阿里云 OSS | ~60元 |
| Vercel + 域名 | 仅域名费 |
| Cloudflare | 免费 |

**最低成本方案**：Cloudflare Pages + 购买域名 = **约 70元/年**
