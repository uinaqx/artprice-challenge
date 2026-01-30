@echo off
chcp 65001
cls
echo ===================================
echo   GitHub Auto-Deploy Setup
echo ===================================
echo.
echo This script will:
echo   1. Check Git installation
echo   2. Initialize Git repository
echo   3. Commit all files
echo.
echo Make sure you have:
echo   - Git installed (https://git-scm.com)
echo   - GitHub account
echo   - Created a repository on GitHub
echo.
pause

cd /d "%~dp0"

REM Check Git
git --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo [ERROR] Git not found!
    echo Please download from: https://git-scm.com/download/win
    echo.
    start https://git-scm.com/download/win
    pause
    exit /b 1
)

echo.
echo [1/4] Initializing Git repository...
git init

echo.
echo [2/4] Adding files...
git add .

echo.
echo [3/4] Committing...
git commit -m "Initial commit"

echo.
echo [4/4] Done!
echo.
echo Next steps:
echo   1. Create repository on https://github.com/new
     echo   2. Repository name: artprice-challenge
     echo   3. Copy the repository URL
     echo   4. Run: git remote add origin YOUR_URL
     echo   5. Run: git branch -M main
     echo   6. Run: git push -u origin main
     echo.
     echo See GITHUB_AUTO_DEPLOY.md for full instructions.
     echo.
     pause