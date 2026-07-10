const assert = require("assert").strict;
const fs = require("fs");
const path = require("path");

function findHeaderRule(config, headerName) {
  return config.headers.find((rule) =>
    rule.headers.some((header) => header.key === headerName),
  );
}

const vercelConfig = require("../../vercel.json");
const rewrite = vercelConfig.rewrites.find((item) => item.destination === "/_geo/:path*");
const markdownHeaders = findHeaderRule(vercelConfig, "Content-Language");
const globalHeaders = findHeaderRule(vercelConfig, "Content-Signal");
const accept = [{ type: "header", key: "accept", value: ".*text/markdown.*" }];
assert.deepEqual(rewrite.has, accept);
assert.deepEqual(markdownHeaders.has, accept);
assert.deepEqual(markdownHeaders.headers, [
  { key: "Content-Type", value: "text/markdown; charset=utf-8" },
  { key: "Content-Language", value: "en" },
]);
assert.ok(globalHeaders.headers.some(({ key, value }) =>
  key === "Content-Signal" && value === "search=yes, ai-input=yes, ai-train=no"));
assert.ok(globalHeaders.headers.some(({ key, value }) => key === "Vary" && value === "Accept"));

const robots = fs.readFileSync(path.join(__dirname, "../../static/robots.txt"), "utf8");
assert.match(robots, /Content-Signal: search=yes, ai-input=yes, ai-train=no/);
for (const crawler of ["GPTBot", "ClaudeBot", "Google-Extended", "CCBot"]) {
  assert.match(robots, new RegExp(`User-agent: ${crawler}\\nDisallow: /`));
}
assert.match(robots, /Sitemap: https:\/\/helps\.auramarker\.com\/sitemap\.xml/);

console.log("geo policy: all tests passed");
