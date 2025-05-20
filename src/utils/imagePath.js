/**
 * Helper function to get the correct image path for both local development and GitHub Pages
 * @param {string} path - The image path starting with /
 * @returns {string} - The correct path for the current environment
 */
export const getImagePath = (path) => {
  // Remove the leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // For GitHub Pages deployment
  if (process.env.NODE_ENV === 'production') {
    // Get the base URL from the homepage in package.json
    const baseUrl = process.env.PUBLIC_URL || '';
    return `${baseUrl}/${cleanPath}`;
  }
  
  // For local development
  return `/${cleanPath}`;
};
