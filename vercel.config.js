// Vercel configuration
module.exports = {
  // Project settings
  projectSettings: {
    framework: 'create-react-app',
    buildCommand: 'npm run vercel-build',
    outputDirectory: 'build',
    installCommand: 'npm install --legacy-peer-deps',
    devCommand: 'npm start'
  },
  
  // Routes configuration
  routes: [
    { 
      src: '/(.*)', 
      dest: '/index.html' 
    }
  ]
};
