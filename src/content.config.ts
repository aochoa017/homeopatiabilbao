import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.string(),
		category: z.string(),
		author: z.string().default("Dra. Mª Luz Ramos"),
	}),
});

export const collections = {
	blog,
};
