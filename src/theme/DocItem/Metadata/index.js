import React from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useDoc} from '@docusaurus/theme-common/internal';

function getEnglishMarkdownUrl(permalink, siteUrl) {
  const documentPath = permalink.replace(/\/$/, '');
  const englishPath = documentPath.startsWith('/en/')
    ? documentPath
    : `/en${documentPath}`;
  return new URL(`${englishPath}.md`, siteUrl).toString();
}

export default function DocItemMetadata() {
  const {metadata, frontMatter, assets} = useDoc();
  const {siteConfig} = useDocusaurusContext();

  return (
    <PageMetadata
      title={metadata.title}
      description={metadata.description}
      keywords={frontMatter.keywords}
      image={assets.image ?? frontMatter.image}>
      <link
        rel="alternate"
        type="text/markdown"
        href={getEnglishMarkdownUrl(metadata.permalink, siteConfig.url)}
      />
    </PageMetadata>
  );
}
