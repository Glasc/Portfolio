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
  schema: z.object({}),
})

export const collections = {
  projects,
  "projects-spanish": projects,
  introducing,
  "introducing-spanish": introducing,
}
