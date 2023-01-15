#!/usr/bin/env bash
set -e

echo "Deployment started"

git pull origin main

# Compile npm assets
npm ci --foreground-scripts
npm run build

echo "Deployment finished!"
