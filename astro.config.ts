import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import sveltia from "astro-loader-sveltia-cms";

// https://astro.build/config
export default defineConfig({
	site: "https://ztcollazo.netlify.app",
	fonts: [{
		provider: fontProviders.fontsource(),
		name: "Space Grotesk",
		cssVariable: "--font-space-grotesk",
	}, {
		provider: fontProviders.fontsource(),
		name: "Geist",
		cssVariable: "--font-geist",
	}],
	integrations: [
		react(),
		sitemap(),
		sveltia({
			config: {
				backend: {
					name: "github",
					repo: "ztcollazo/me",
					branch: "main",
				},
				media_folder: "public/media",
				collections: [
					{
						name: "posts",
						folder: "src/content/posts",
						fields: [
							{ name: "title", widget: "string" },
							{ name: "date", widget: "datetime" },
							{ name: "draft", widget: "boolean", required: false },
							{ name: "body", widget: "markdown" },
						],
					},
					{
						name: "projects",
						folder: "src/content/projects",
						fields: [
							{ name: "title", widget: "string" },
							{ name: "description", widget: "string" },
							{ name: "body", widget: "markdown" },
							{ name: "public", widget: "boolean", required: false },
							{ name: "github", widget: "string" },
							{ name: "url", widget: "string", required: false },
							{ name: "topics", widget: "list" },
						],
					},
				],
			},
		}),
	],
	adapter: netlify(),
	output: "static",
});
