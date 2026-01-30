// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.alexhelp.com',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel(),
  integrations: [
    sitemap(),
    mdx()
  ]
});