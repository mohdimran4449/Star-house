const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const publicRoot = path.join(root, "public");
const filesToScan = [
  "public/index.html",
  "public/assets/css/site.css",
  "public/assets/js/site.js",
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
const allowedExternalSchemes = ["http:", "https:", "mailto:", "tel:"];

const missing = [];

for (const relativeFile of filesToScan) {
  const absoluteFile = path.join(root, relativeFile);
  const content = fs.readFileSync(absoluteFile, "utf8");
  const matches = content.matchAll(localAssetPattern);

  for (const match of matches) {
    const assetPath = decodeURI(match[1]);
    const absoluteAssetPath = path.join(publicRoot, assetPath);

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

const siteScript = fs.readFileSync(path.join(publicRoot, "assets/js/site.js"), "utf8");
const indexHtml = fs.readFileSync(path.join(publicRoot, "index.html"), "utf8");

for (const route of expectedRoutes) {
  if (route !== "/" && !siteScript.includes(route.replace(/^\//, ""))) {
    missing.push(`public/assets/js/site.js -> missing expected route ${route}`);
  }
}

if (!siteScript.includes('CONTACT_ENDPOINT = "/api/contact"')) {
  missing.push("public/assets/js/site.js -> contact form must post to /api/contact");
}

const knownRoutes = new Set(expectedRoutes);
const localLinks = [
  ...indexHtml.matchAll(/\bhref=["']([^"']+)["']/g),
  ...siteScript.matchAll(/\bhref=["']([^"']+)["']/g)
].map(match => match[1]);

for (const link of localLinks) {
  if (link === "#" || link.startsWith("#")) continue;
  if (link.includes("${")) continue;

  try {
    const parsed = new URL(link, "https://star-house.in");

    if (allowedExternalSchemes.includes(parsed.protocol) && parsed.origin !== "https://star-house.in") {
      continue;
    }

    if (parsed.origin === "https://star-house.in") {
      const route = parsed.pathname.replace(/\/$/, "") || "/";

      if (
        !route.startsWith("/assets/") &&
        !route.startsWith("/images/") &&
        route !== "/PHOTO-2025-05-13-16-20-20.jpg" &&
        !knownRoutes.has(route)
      ) {
        missing.push(`internal link is not handled by router: ${link}`);
      }
    }
  } catch (error) {
    missing.push(`invalid link: ${link}`);
  }
}

if (missing.length > 0) {
  console.error("Production check failed:");
  for (const item of missing) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log("Production check passed: Vercel routing and local assets look good.");
