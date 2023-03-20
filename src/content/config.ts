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

const introducing = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    greeting: z.string().min(1),
  }),
})

export const collections = { projects, introducing }
