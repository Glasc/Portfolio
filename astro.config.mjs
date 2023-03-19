import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
import react from "@astrojs/react"
import Icons from "unplugin-icons/vite"

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: "https://example.com",
  integrations: [
    sitemap(),
    tailwind(),
    react(),
  ],  
  vite: {
    ssr: {
      external: ["svgo"],
    },
    plugins: [
      Icons({
        compiler: "jsx",
        jsx: "react",
      }),
    ],
  },
})
