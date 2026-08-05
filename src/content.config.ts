import { defineCollection } from "astro:content";
import { sveltiaLoader } from "astro-loader-sveltia-cms/loader";

const posts = defineCollection({
	loader: sveltiaLoader("posts"),
});

const projects = defineCollection({
	loader: sveltiaLoader("projects"),
});

export const collections = { posts, projects };
