import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
import react from "@astrojs/react"
import Icons from "unplugin-icons/vite"

import image from "@astrojs/image"

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
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
