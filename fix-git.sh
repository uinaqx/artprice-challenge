#!/bin/bash

echo "==================================="
echo "   Git 修复脚本"
echo "==================================="
echo ""

cd "$(dirname "$0")"

echo "[1/5] 查看当前状态..."
git status
echo ""

echo "[2/5] 查看分支..."
git branch
echo ""

echo "[3/5] 添加所有文件..."
git add .

echo ""
echo "[4/5] 创建提交..."
git commit -m "Initial commit"

echo ""
echo "[5/5] 推送到 GitHub..."
git push -u origin main

echo ""
echo "完成！"
read -p "按回车键关闭..."