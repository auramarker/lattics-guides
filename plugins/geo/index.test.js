const assert = require("assert").strict;
const fs = require("fs");
const os = require("os");
const path = require("path");

const createGeoPlugin = require("./index");
const docusaurusConfig = require("../../docusaurus.config");

const SITE_URL = "https://helps.auramarker.com";
const SOURCE_CONTENT = "---\ntitle: Start\n---\n\nEnglish body.\n";
const DOCUMENT = {
  title: "Start",
  description: "Start with Lattics.",
  permalink: "/en/lattics/start",
};

assert.equal(docusaurusConfig.url, SITE_URL);
assert.ok(docusaurusConfig.plugins.includes("./plugins/geo"));

function getDocsContent(source) {
  return { "docusaurus-plugin-content-docs": { default: { loadedVersions: [{
    docs: [{ ...DOCUMENT, source: `@site/${source}` }],
  }] } } };
}

async function testDocusaurusAdapter() {
  const siteDir = fs.mkdtempSync(path.join(os.tmpdir(), "auramarker-geo-"));
  const source = "i18n/en/docusaurus-plugin-content-docs/current/start.md";
  fs.mkdirSync(path.join(siteDir, path.dirname(source)), { recursive: true });
  fs.writeFileSync(path.join(siteDir, source), SOURCE_CONTENT);
  try {
    const outDir = path.join(siteDir, "build", "en");
    const plugin = createGeoPlugin({
      siteDir,
      outDir,
      i18n: { currentLocale: "en", localeConfigs: { en: { path: "en" } } },
      siteConfig: { url: SITE_URL },
    });
    plugin.contentLoaded({ allContent: getDocsContent(source) });
    await plugin.postBuild({ outDir });
    const output = fs.readFileSync(path.join(siteDir, "build/_geo/lattics/start"), "utf8");
    assert.match(output, /English body\./);
  } finally {
    fs.rmSync(siteDir, { recursive: true, force: true });
  }
}

testDocusaurusAdapter()
  .then(() => console.log("geo adapter: all tests passed"))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
