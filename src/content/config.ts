import { defineCollection, z } from "astro:content"

const projects = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
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
  "en-introducing": introducing,
  "es-introducing": introducing,
  "en-projects": projects,
  "es-projects": projects,
}
