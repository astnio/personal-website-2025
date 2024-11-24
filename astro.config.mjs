// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import rehypeCallouts from 'rehype-callouts';

// https://astro.build/config
export default defineConfig({
  site: 'https://test.astn.io',

  markdown: {
    rehypePlugins: [rehypeCallouts],
    shikiConfig: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-macchiato',
      },
      defaultColor: false,
      langs: [],
      langAlias: {
        cjs: 'javascript',
      },
      wrap: true,
      transformers: [],
    },
  },

  integrations: [mdx()],
});
