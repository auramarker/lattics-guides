const assert = require("assert").strict;

const { buildGeoArtifacts } = require("./artifacts");

const SITE_URL = "https://helps.auramarker.com";
const DOCUMENT = {
  title: "Getting Started",
  description: "Learn the basics.",
  permalink: "/en/lattics/getting-started",
  content: `---
title: Getting Started
---

Use <Highlight color="Yellow">Lattics</Highlight> to organize ideas.
<Image src="/images/getting-started.png" width={80}></Image>
<Video src="/videos/getting-started.mp4" width={80}></Video>

[//]: # (中文内部备注)
`,
};
const artifacts = buildGeoArtifacts({ siteUrl: SITE_URL, documents: [DOCUMENT] });

function getArtifact(outputPath) {
  return artifacts.find((artifact) => artifact.outputPath === outputPath);
}

const markdown = getArtifact("en/lattics/getting-started.md").content;
assert.match(markdown, /title: "Getting Started"/);
assert.match(markdown, /canonical: "https:\/\/helps\.auramarker\.com\/en\/lattics\/getting-started"/);
assert.match(markdown, /Use Lattics to organize ideas\./);
assert.match(markdown, /!\[Image\]\(https:\/\/helps\.auramarker\.com\/images\/getting-started\.png\)/);
assert.match(markdown, /\[Video\]\(https:\/\/helps\.auramarker\.com\/videos\/getting-started\.mp4\)/);
assert.doesNotMatch(markdown, /<Highlight|<Image|<Video|中文内部备注/);

for (const route of [
  "lattics/getting-started.md",
  "_geo/lattics/getting-started",
  "_geo/en/lattics/getting-started",
  "_geo/lattics/getting-started.md",
  "_geo/en/lattics/getting-started.md",
]) {
  assert.equal(getArtifact(route).content, markdown, `${route} must be English`);
}

const llmsIndex = getArtifact("llms.txt").content;
assert.match(llmsIndex, /^# Lattics Help/m);
assert.match(llmsIndex, /AI training is not permitted\./);
assert.match(llmsIndex, /\[Getting Started\]\(https:\/\/helps\.auramarker\.com\/en\/lattics\/getting-started\.md\)/);
assert.match(getArtifact("llms-full.txt").content, /Use Lattics to organize ideas\./);

console.log("geo artifacts: all tests passed");
