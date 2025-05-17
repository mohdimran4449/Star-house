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
fi

# Add node_modules/.bin to PATH
export PATH="$(pwd)/node_modules/.bin:$PATH"

# Verify react-scripts is available
which react-scripts || echo "react-scripts not found in PATH"

# Run the build using the direct path to build.js if needed
if ! react-scripts build; then
  echo "Falling back to direct node execution of build.js"
  node ./node_modules/react-scripts/scripts/build.js
fi

echo "Build completed!"
