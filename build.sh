#!/bin/bash

# Print commands and exit on errors
set -ex

# Clean up any previous build
rm -rf build

# Ensure node_modules is properly installed
npm install --legacy-peer-deps

# Make sure react-scripts is installed
if [ ! -f "node_modules/.bin/react-scripts" ]; then
  echo "react-scripts not found, installing directly..."
  npm install react-scripts@5.0.0 --save
  # Add node_modules/.bin to PATH
  export PATH="$(pwd)/node_modules/.bin:$PATH"
 fi

# Disable CI environment variable to prevent treating warnings as errors
export CI=false

# Run the build
echo "Building project..."
npm run build

echo "Build completed!"
