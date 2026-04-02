import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'LuaTools',
  tagline: 'iykyk lol',
  favicon: 'img/icon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://wiki.lua.tools',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For custom domains, use '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'madoiscool', // Usually your GitHub org/user name.
  projectName: 'LuaTools-Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      { hashed: true },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/madoiscool/LuaTools-Wiki/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'LuaTools',
      logo: {
        alt: 'LuaTools Logo',
        src: 'img/icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/madoiscool/LuaTools-Wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Steam Plugin',
              to: '/docs/luatools/steam-plugin',
            },
            {
              label: 'Scripts',
              to: '/docs/luatools/scripts',
            },
            {
              label: 'Fixes',
              to: '/docs/luatools/fixes',
            },
            {
              label: 'Guides',
              to: '/docs/luatools/guides',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/luatools',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/madoiscool/LuaTools-Wiki',
            },
            {
              label: 'Issues',
              href: 'https://github.com/madoiscool/LuaTools-Wiki/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LuaTools. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
