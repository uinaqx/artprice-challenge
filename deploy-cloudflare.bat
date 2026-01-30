@echo off
chcp 65001
cls
echo ===================================
echo   Cloudflare Pages Deploy Script
echo ===================================
echo.

REM Check Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js not found
    echo Please install from: https://nodejs.org
    pause
    exit /b 1
)

cd /d "%~dp0app"

echo [1/3] Installing dependencies...
call npm install
if errorlevel 1 (
    echo [ERROR] Install failed
    pause
    exit /b 1
)

echo.
echo [2/3] Building production version...
call npm run build
if errorlevel 1 (
    echo [ERROR] Build failed
    pause
    exit /b 1
)

echo.
echo [3/3] Build success!
echo.
echo Output folder: %~dp0app\dist
echo.
echo Next steps:
echo   1. Open https://dash.cloudflare.com
echo   2. Login or sign up
echo   3. Click "Workers and Pages"
echo   4. Click "Create application" -^> "Pages"
echo   5. Select "Upload assets"
echo   6. Project name: artprice-challenge
echo   7. Drag the "dist" folder to upload
echo   8. Click "Deploy site"
echo.
echo Opening dist folder and Cloudflare...

start explorer "%~dp0app\dist"
timeout /t 2 >nul
start https://dash.cloudflare.com

echo.
echo Done! Press any key to close...
pause >nul
