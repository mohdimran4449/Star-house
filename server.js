const fs = require("fs");
const http = require("http");
const path = require("path");

const root = __dirname;
const host = "0.0.0.0";
const port = Number(process.env.PORT) || 10000;

const mimeTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".eot": "application/vnd.ms-fontobject",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".webp": "image/webp",
  ".woff": "font/woff"
};

function resolvePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split("?")[0]);
  const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  return path.join(root, normalizedPath === "/" ? "index.html" : normalizedPath);
}

function serveFile(res, filePath, statusCode = 200) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Internal server error");
      return;
    }

    const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    res.writeHead(statusCode, {
      "Content-Type": contentType,
      "Cache-Control": "no-cache"
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (!["GET", "HEAD"].includes(req.method)) {
    res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Method not allowed");
    return;
  }

  const requestedFile = resolvePath(req.url || "/");

  if (!requestedFile.startsWith(root)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(requestedFile, (error, stats) => {
    if (!error && stats.isFile()) {
      serveFile(res, requestedFile);
      return;
    }

    serveFile(res, path.join(root, "index.html"));
  });
});

server.listen(port, host, () => {
  console.log(`STAR HOUSE website running at http://${host}:${port}`);
});