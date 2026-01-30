# ArtPrice Challenge 部署脚本
# 使用方法: 右键选择"使用 PowerShell 运行"

Write-Host "🎨 ArtPrice Challenge 部署脚本" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# 检查 Node.js
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ 未检测到 Node.js，请先安装: https://nodejs.org" -ForegroundColor Red
    exit 1
}

# 进入项目目录
$projectPath = Join-Path $PSScriptRoot "app"
Set-Location $projectPath

Write-Host "📦 安装依赖..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "🔨 构建生产版本..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 构建失败" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ 构建成功！" -ForegroundColor Green
Write-Host ""

# 显示部署选项
Write-Host "请选择部署方式:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Vercel (推荐，最简单)" -ForegroundColor White
Write-Host "   优点: 自动部署、全球 CDN、免费" -ForegroundColor Gray
Write-Host ""
Write-Host "2. 本地预览" -ForegroundColor White
Write-Host "   在本地启动服务器预览" -ForegroundColor Gray
Write-Host ""
Write-Host "3. 手动复制 dist 文件夹" -ForegroundColor White
Write-Host "   将 dist 文件夹内容上传到你的服务器" -ForegroundColor Gray
Write-Host ""

$choice = Read-Host "输入选项 (1/2/3)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "🚀 部署到 Vercel..." -ForegroundColor Yellow

        # 检查 vercel CLI
        if (!(Get-Command vercel -ErrorAction SilentlyContinue)) {
            Write-Host "📥 安装 Vercel CLI..." -ForegroundColor Yellow
            npm i -g vercel
        }

        # 部署
        vercel --prod
    }
    "2" {
        Write-Host ""
        Write-Host "🖥️ 启动本地预览服务器..." -ForegroundColor Yellow

        # 检查 serve
        if (!(Get-Command serve -ErrorAction SilentlyContinue)) {
            Write-Host "📥 安装 serve..." -ForegroundColor Yellow
            npm i -g serve
        }

        Write-Host ""
        Write-Host "🌐 服务器启动在: http://localhost:3000" -ForegroundColor Green
        Write-Host "按 Ctrl+C 停止服务器" -ForegroundColor Gray
        Write-Host ""

        serve dist
    }
    "3" {
        $distPath = Join-Path $projectPath "dist"
        Write-Host ""
        Write-Host "📁 构建输出位于:" -ForegroundColor Green
        Write-Host "   $distPath" -ForegroundColor White
        Write-Host ""
        Write-Host "你可以:" -ForegroundColor Cyan
        Write-Host "  • 将 dist 文件夹内容上传到你的 Web 服务器" -ForegroundColor White
        Write-Host "  • 使用 Netlify Drop (https://app.netlify.com/drop) 拖拽上传" -ForegroundColor White
        Write-Host "  • 使用 GitHub Pages" -ForegroundColor White

        # 打开文件夹
        Invoke-Item $distPath
    }
    default {
        Write-Host "❌ 无效选项" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "感谢使用 ArtPrice Challenge! 🎨" -ForegroundColor Cyan
