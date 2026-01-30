@echo off
chcp 65001 >nul
echo 🎨 ArtPrice Challenge 部署脚本
echo ================================
echo.

REM 检查 Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 未检测到 Node.js，请先安装: https://nodejs.org
    pause
    exit /b 1
)

cd /d "%~dp0app"

echo 📦 安装依赖...
call npm install
if errorlevel 1 (
    echo ❌ 依赖安装失败
    pause
    exit /b 1
)

echo.
echo 🔨 构建生产版本...
call npm run build
if errorlevel 1 (
    echo ❌ 构建失败
    pause
    exit /b 1
)

echo.
echo ✅ 构建成功！
echo.
echo 📁 构建输出位于: %~dp0app\dist
echo.
echo 部署选项:
echo   1. 将 dist 文件夹上传到你的服务器
echo   2. 使用 Netlify Drop: https://app.netlify.com/drop
echo   3. 使用 Vercel: npx vercel --prod
echo.

REM 打开 dist 文件夹
start explorer "%~dp0app\dist"

pause
