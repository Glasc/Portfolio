import { defineCollection, z, image } from "astro:content"

const projects = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    technologies: z.string(),
    cover: image(),
    coverAlt: z.string(),
    link: z.string(),
  }),
})

export const collections = { projects }
