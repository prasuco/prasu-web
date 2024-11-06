// @ts-check
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://prasu.xyz",
  integrations: [
    svelte(),
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap(),
  ],
});
