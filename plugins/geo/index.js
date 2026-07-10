const fs = require("fs");
const path = require("path");

const { buildGeoArtifacts } = require("./artifacts");

function getRootOutputDirectory(outDir, localePath) {
  const localeSegments = localePath.split("/").filter(Boolean);
  return path.resolve(outDir, ...localeSegments.map(() => ".."));
}

function createGeoPlugin(context) {
  let documents = [];

  return {
    name: "auramarker-geo",
    contentLoaded({ allContent }) {
      if (context.i18n.currentLocale !== "en") {
        return;
      }
      const docsContent = allContent["docusaurus-plugin-content-docs"]?.default;
      if (!docsContent) {
        throw new Error("GEO generation requires the default Docusaurus docs plugin.");
      }
      documents = docsContent.loadedVersions.flatMap((version) =>
        version.docs.map((document) => ({
          title: document.title,
          description: document.description,
          permalink: document.permalink,
          content: fs.readFileSync(
            path.resolve(context.siteDir, document.source.replace(/^@site\//, "")),
            "utf8",
          ),
        })),
      );
    },
    async postBuild({ outDir }) {
      if (context.i18n.currentLocale !== "en") {
        return;
      }
      const localePath = context.i18n.localeConfigs.en.path;
      const rootOutDir = getRootOutputDirectory(outDir, localePath);
      const artifacts = buildGeoArtifacts({
        documents,
        siteUrl: context.siteConfig.url,
      });
      await Promise.all(
        artifacts.map(async (artifact) => {
          const outputFile = path.join(rootOutDir, artifact.outputPath);
          await fs.promises.mkdir(path.dirname(outputFile), { recursive: true });
          await fs.promises.writeFile(outputFile, artifact.content, "utf8");
        }),
      );
    },
  };
}

module.exports = createGeoPlugin;
