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
      items: [
        'luatools/discord',
        {
          type: 'category',
          label: 'Steam Plugin',
          items: [
            'luatools/steam-plugin/index',
            'luatools/steam-plugin/get-started',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Game Fix',
      items: [
        'game-fix/all-fixes',
      ],
    },
  ],
};

export default sidebars;
