#!/bin/bash

echo "==================================="
echo "   Git Complete Fix"
echo "==================================="
echo ""

cd "$(dirname "$0")"

echo "[Step 1] Checking git status..."
git status
echo ""

echo "[Step 2] Checking existing branches..."
git branch -a
echo ""

echo "[Step 3] Configuring git user (if not set)..."
git config user.email "you@example.com" 2>/dev/null || true
git config user.name "Your Name" 2>/dev/null || true

echo ""
echo "[Step 4] Adding all files..."
git add .

echo ""
echo "[Step 5] Checking what will be committed..."
git status --short
echo ""

echo "[Step 6] Creating initial commit..."
git commit -m "Initial commit" || echo "Commit already exists or nothing to commit"

echo ""
echo "[Step 7] Creating main branch..."
git checkout -b main 2>/dev/null || git checkout main 2>/dev/null || echo "Branch main ready"

echo ""
echo "[Step 8] Setting remote URL..."
git remote set-url origin https://github.com/uinaqx/artprice-challenge.git

echo ""
echo "[Step 9] Pushing to GitHub..."
echo "If prompted:"
echo "  Username: uinaqx"
echo "  Password: Your Personal Access Token"
echo ""
git push -u origin main

echo ""
if [ $? -eq 0 ]; then
    echo "✅ SUCCESS! Code pushed to GitHub."
    echo ""
    echo "Next: Go to Cloudflare and connect to GitHub"
else
    echo "❌ Push failed. Check your token."
fi

echo ""
read -p "Press Enter to close..."