import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'LuaTools',
      collapsible: false,
      items: [
        'luatools/discord',
        {
          type: 'category',
          label: 'LuaTools App',
          collapsed: false,
          items: [
            'luatools/app/index',
          ],
        },
        {
          type: 'category',
          label: 'Steam Plugin',
          collapsed: false,
          items: [
            'luatools/steam-plugin/index',
            'luatools/steam-plugin/get-started',
          ],
        },
        {
          type: 'category',
          label: 'About BetterSteamTools',
          collapsed: true,
          items: [
            'luatools/bettersteamtools/index',
            'luatools/bettersteamtools/mrc-system',
          ],
        },
        {
          type: 'category',
          label: 'Guides',
          collapsed: false,
          items: [
            'luatools/guides/index',
            'luatools/guides/hubcapapi/index',
            'luatools/guides/voices38/index',
            'luatools/guides/onlinefix/index'
          ],
        },
        {
          type: 'category',
          label: 'Scripts',
          collapsed: true,
          items: [
            'luatools/scripts/index',
          ],
        },
        {
          type: 'category',
          label: 'Fixes',
          collapsed: true,
          items: [
            'luatools/fixes/index',
          ],
        },
        {
          type: 'category',
          label: 'FAQ',
          collapsed: false,
          items: [
            'luatools/faq/index',
            'luatools/faq/powershellerror/index',
            'luatools/faq/luatoolsmenu/index'
          ],
        },
        'luatools/credits',
      ],
    },
  ],
};

export default sidebars;
