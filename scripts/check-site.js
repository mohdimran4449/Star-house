const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const filesToScan = [
  "index.html",
  "assets/css/site.css",
  "assets/js/site.js",
  "server.js",
  "api/contact.js",
  "lib/contact.js"
];

const localAssetPattern = /["'`](\/(?:assets|images)\/[^"'`)\\\s]+|\/PHOTO-2025-05-13-16-20-20\.jpg)/g;
const expectedRoutes = [
  "/",
  "/equestrian",
  "/leather-belts",
  "/dog-collar",
  "/key-chains",
  "/leather",
  "/social-responsibility",
  "/contact"
];

const missing = [];

for (const relativeFile of filesToScan) {
  const absoluteFile = path.join(root, relativeFile);
  const content = fs.readFileSync(absoluteFile, "utf8");
  const matches = content.matchAll(localAssetPattern);

  for (const match of matches) {
    const assetPath = decodeURI(match[1]);
    const absoluteAssetPath = path.join(root, assetPath);

    if (!fs.existsSync(absoluteAssetPath)) {
      missing.push(`${relativeFile} -> ${assetPath}`);
    }
  }
}

const vercelConfigPath = path.join(root, "vercel.json");
const vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, "utf8"));
const hasSpaRewrite = vercelConfig.rewrites?.some(
  rewrite => rewrite.source === "/:path*" && rewrite.destination === "/index.html"
);
const apiRewriteIndex = vercelConfig.rewrites?.findIndex(rewrite => rewrite.source === "/api/:path*") ?? -1;
const fallbackRewriteIndex = vercelConfig.rewrites?.findIndex(rewrite => rewrite.source === "/:path*") ?? -1;
const apiRouteIsProtected = apiRewriteIndex >= 0 && fallbackRewriteIndex >= 0 && apiRewriteIndex < fallbackRewriteIndex;

if (!hasSpaRewrite) {
  missing.push("vercel.json -> missing SPA fallback rewrite to /index.html");
}

if (!apiRouteIsProtected) {
  missing.push("vercel.json -> /api routes must be listed before the SPA fallback rewrite");
}

const siteScript = fs.readFileSync(path.join(root, "assets/js/site.js"), "utf8");
for (const route of expectedRoutes) {
  if (route !== "/" && !siteScript.includes(route.replace(/^\//, ""))) {
    missing.push(`assets/js/site.js -> missing expected route ${route}`);
  }
}

if (!siteScript.includes('CONTACT_ENDPOINT = "/api/contact"')) {
  missing.push("assets/js/site.js -> contact form must post to /api/contact");
}

if (missing.length > 0) {
  console.error("Production check failed:");
  for (const item of missing) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log("Production check passed: Vercel routing and local assets look good.");
