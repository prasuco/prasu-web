import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		featured: z.boolean().default(false),
		techStack: z.array(z.string()),
		repoUrl: z.string().url(),
		liveUrl: z.string().url().optional(),
		status: z.enum(["active", "completed", "archived"]).default("active"),
		tags: z.array(z.string()).default([]),
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
