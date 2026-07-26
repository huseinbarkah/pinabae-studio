import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pinabae.site',
  adapter: vercel(),
  integrations: [alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ['fwrmljqxfbiykncadfqo.supabase.co'],
  },
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
