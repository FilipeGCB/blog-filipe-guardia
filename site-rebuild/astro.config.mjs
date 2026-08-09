import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://filipegcb.github.io/blog-filipe-guardia/',
  base: '/blog-filipe-guardia/',
  output: 'static',
  build: {
    format: 'file'
  },
  trailingSlash: 'never'
});

