@echo off
chcp 65001
cls
echo ===================================
echo   Push to GitHub
echo ===================================
echo.

cd /d "%~dp0"

echo [1/3] Adding remote repository...
git remote add origin https://github.com/uinaqx/artprice-challenge.git 2>nul
if errorlevel 1 (
    echo Remote already exists, updating...
    git remote set-url origin https://github.com/uinaqx/artprice-challenge.git
)

echo.
echo [2/3] Setting branch name...
git branch -M main

echo.
echo [3/3] Pushing to GitHub...
echo.
echo You may need to enter:
echo   Username: uinaqx
echo   Password: Your Personal Access Token
echo.
echo If you don't have a token:
echo   1. Open https://github.com/settings/tokens
echo   2. Click "Generate new token" -^> "Tokens (classic)"
echo   3. Check "repo" and generate
echo   4. Copy the token and paste it as password
echo.
pause

git push -u origin main

echo.
if errorlevel 1 (
    echo.
    echo [ERROR] Push failed!
    echo Please check your username and token.
) else (
    echo.
    echo [SUCCESS] Code pushed to GitHub!
    echo.
    echo Next step:
    echo   Go to Cloudflare and connect to GitHub
    echo   See GITHUB_AUTO_DEPLOY.md for instructions
)

echo.
pause
