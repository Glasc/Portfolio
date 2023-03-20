import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

export default defineConfig({
  experimental: {
    assets: true
  },
  site: "https://example.com",
  integrations: [sitemap(), tailwind(), svelte()],
  vite: {
    ssr: {
      external: ["svgo"]
    },
  }
});