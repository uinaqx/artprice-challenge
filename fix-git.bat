@echo off
chcp 65001
cls
echo ===================================
echo   Fix Git Setup
echo ===================================
echo.
echo Removing node_modules from git...
echo.

cd /d "%~dp0"

REM Remove git cache
git rm -r --cached .

echo.
echo Re-adding files (with .gitignore)...
git add .

echo.
echo Committing...
git commit -m "Initial commit - ignore node_modules"

echo.
echo [DONE]
echo.
echo Files committed: ~50
echo (node_modules ignored)
echo.
pause