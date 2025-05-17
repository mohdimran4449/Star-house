// Custom Vercel build script
const { execSync } = require('child_process');

try {
  // Install dependencies with legacy peer deps flag
  console.log('Installing dependencies...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
  
  // Add node_modules/.bin to PATH to ensure react-scripts is found
  process.env.PATH = `${process.cwd()}/node_modules/.bin:${process.env.PATH}`;
  
  // Run the build command
  console.log('Building project...');
  execSync('react-scripts build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
