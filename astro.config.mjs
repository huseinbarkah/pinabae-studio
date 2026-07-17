import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
});
