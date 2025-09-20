import { defineCollection, z } from 'astro:content';

const wiki = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	// https://stackoverflow.com/questions/76541909/dynamically-import-use-images-from-collection-markdown-with-astro-assets
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		ordinal: z.coerce.number(),
		heroImage: image()
	}),
});

const protocols = defineCollection({
	type: 'content',
	schema: z.object({
		
	})
})

const news = defineCollection({
	type: 'content',
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image(),
	}),
});

export const collections = { wiki, protocols, news };
