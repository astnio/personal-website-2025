// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://github.com/lin-stephanie/rehype-callouts
import rehypeCallouts from 'rehype-callouts';

// https://astro.build/config
export default defineConfig({
  site: 'https://test.astn.io',

  markdown: {
    rehypePlugins: [
      [
        rehypeCallouts,
        {
          callouts: {
            note: {
              color: 'var(--clr-blue)',
            },
            tip: {
              color: 'var(--clr-teal)',
            },
            check: {
              color: 'var(--clr-green)',
            },
            warning: {
              color: 'var(--clr-peach)',
            },
            danger: {
              color: 'var(--clr-red)',
            },
          },
        },
      ],
    ],
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
