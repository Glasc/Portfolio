import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: "https://example.com",
  integrations: [sitemap(), tailwind()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
})
