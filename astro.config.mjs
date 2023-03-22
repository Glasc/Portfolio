import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  site: "https://example.com",
  integrations: [sitemap(), tailwind(), prefetch()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
});