// Custom Vercel build script
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

try {
  // Install dependencies with legacy peer deps flag
  console.log('Installing dependencies...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
  
  // Define the path to react-scripts
  const reactScriptsPath = path.join(process.cwd(), 'node_modules', '.bin', 'react-scripts');
  
  // Check if react-scripts exists
  if (!fs.existsSync(reactScriptsPath)) {
    console.log('react-scripts not found at expected path, installing directly...');
    execSync('npm install react-scripts@5.0.0 --save', { stdio: 'inherit' });
  }
  
  // Run the build command with the full path
  console.log('Building project...');
  execSync(`node ${path.join(process.cwd(), 'node_modules', 'react-scripts', 'scripts', 'build.js')}`, { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
