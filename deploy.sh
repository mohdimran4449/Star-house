#!/bin/bash

# Build the app
npm run build

# Create or ensure .nojekyll file exists
touch build/.nojekyll

# Deploy to GitHub Pages
npx gh-pages -d build -t true
