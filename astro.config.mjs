import { defineConfig, squooshImageService  } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  image: {
    service: squooshImageService(),
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
})
