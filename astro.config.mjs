import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';

// React, Svelte e Vue no mesmo projeto: cada componente vira uma island
export default defineConfig({
  integrations: [react(), svelte(), vue()],
});
