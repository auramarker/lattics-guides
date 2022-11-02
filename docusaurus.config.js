// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aura Marker Studio',
  tagline: '',
  url: 'https://auramarker.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'auramarker', // Usually your GitHub org/user name.
  projectName: 'blogs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['zh-CN', 'en', 'zh-TW'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      'zh-CN': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
        path: 'zh',
      },
      'zh-TW': {
        label: '繁体中文',
        direction: 'ltr',
        htmlLang: 'zh-TW',
        calendar: 'gregory',
        path: 'zhTW',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'lattics'
        
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          width: 56,
          height: 56,
          alt: 'lattics',
          src: 'img/logo.svg',
          href: 'https://lattics.zineapi.com'
        },
        items: [
          {
            type: 'doc',
            docId: '备份与数据同步',
            position: 'left',
            label: 'Lattics 使用指南',
          },
          // {to: '/blog', label: '博客', position: 'left'},
          // { TODO: 暂时只支持中文
          //   type: 'localeDropdown',
          //   position: 'right'
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Aura Marker Studio',
            items: [
              {
                label: '关于我们',
                href: 'https://auramarker.com/',
              },
            ],
          },
           {
            title: '联系我们',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/lattics',
              },
            ],
          },
          {
            title: '产品列表',
            items: [
              {
                label: 'Zine',
                href: 'https://zine.la',
              },
              {
                label: 'Varlens',
                href: 'https://varlens.zineapi.com/',
              },
              {
                label: 'Lattics',
                href: 'https://lattics.zineapi.com/',
              },
            ],
          },
        
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aura Marker Studio Co., Ltd. All Rights Reserve.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
