// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/apps/abbott/dayabeneficios',
  outDir: 'apps/abbott/dayabeneficios',
  
  vite: {
    plugins: [tailwindcss()]
  }
});