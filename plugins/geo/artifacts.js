function stripFrontMatter(content) {
  return content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
}

function resolveAssetUrl(source, pageUrl) {
  return new URL(source, pageUrl).toString();
}

function toAgentMarkdown(document, siteUrl) {
  const pageUrl = new URL(document.permalink, siteUrl).toString();
  const body = stripFrontMatter(document.content)
    .replace(
      /<(Image|InlineImage)\b([^>]*)>/g,
      (_match, component, attributes) => {
        const source = attributes.match(/\bsrc=(['"])(.*?)\1/);
        const label = component === "InlineImage" ? "Inline image" : "Image";
        return source ? `![${label}](${resolveAssetUrl(source[2], pageUrl)})` : "";
      },
    )
    .replace(/<Video\b([^>]*)>/g, (_match, attributes) => {
      const source = attributes.match(/\bsrc=(['"])(.*?)\1/);
      return source ? `[Video](${resolveAssetUrl(source[2], pageUrl)})` : "";
    })
    .replace(/<\/?(?:Image|InlineImage|Video|Highlight|Color)\b[^>]*>/g, "")
    .replace(/^\[\/\/\]:\s*#.*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return [
    "---",
    `title: ${JSON.stringify(document.title)}`,
    `description: ${JSON.stringify(document.description || "")}`,
    `canonical: ${JSON.stringify(pageUrl)}`,
    'language: "en"',
    "---",
    "",
    body,
    "",
  ].join("\n");
}

function buildGeoArtifacts({ documents, siteUrl }) {
  const renderedDocuments = documents.map((document) => ({
    ...document,
    markdown: toAgentMarkdown(document, siteUrl),
  }));
  const documentArtifacts = renderedDocuments.flatMap((document) => {
    const englishRoute = document.permalink.replace(/^\//, "");
    const defaultRoute = englishRoute.replace(/^en\//, "");

    return [
      `${englishRoute}.md`,
      `${defaultRoute}.md`,
      `_geo/${englishRoute}`,
      `_geo/${defaultRoute}`,
      `_geo/${englishRoute}.md`,
      `_geo/${defaultRoute}.md`,
    ].map((outputPath) => ({ outputPath, content: document.markdown }));
  });
  const usage = "AI training is not permitted. Search indexing and runtime AI input are permitted.";
  const indexContent = [
    "# Lattics Help",
    "",
    "> Official English documentation for Lattics.",
    `> ${usage}`,
    "",
    "## Documentation",
    "",
    ...renderedDocuments.map((document) => {
      const markdownUrl = new URL(`${document.permalink}.md`, siteUrl);
      return `- [${document.title}](${markdownUrl}): ${document.description || "Lattics documentation."}`;
    }),
    "",
  ].join("\n");
  const fullContent = [
    "# Lattics Help - Complete English Documentation",
    "",
    `> ${usage}`,
    "",
    ...renderedDocuments.map((document) => document.markdown),
  ].join("\n\n");

  return [
    ...documentArtifacts,
    { outputPath: "llms.txt", content: indexContent },
    { outputPath: "llms-full.txt", content: fullContent },
    { outputPath: "_geo/llms.txt", content: indexContent },
    { outputPath: "_geo/llms-full.txt", content: fullContent },
  ];
}

module.exports = { buildGeoArtifacts };
