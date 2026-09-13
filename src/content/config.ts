import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		logo: z.string(),
		featured: z.boolean().default(false),
		techStack: z.array(z.string()).default([]),
		repoUrl: z.string().url(),
		liveUrl: z.string().url().optional(),
		status: z
			.enum(["shipping", "experiment", "library", "archived"])
			.default("experiment"),
		tags: z.array(z.string()).default([]),
		screenshots: z
			.array(
				z.object({
					src: z.string(),
					alt: z.string(),
					caption: z.string().optional(),
				}),
			)
			.default([]),
		faqs: z
			.array(
				z.object({
					question: z.string(),
					answer: z.string(),
				}),
			)
			.default([]),
	}),
});

const blogs = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		author: z.string(),
		publishDate: z.date(),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
	}),
});

export const collections = {
	projects,
	blogs,
};
