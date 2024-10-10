// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const articlesCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            draft: z.boolean(),
            title: z.string(),
            snippet: z.string(),
            publishDate: z.string().transform((str) => new Date(str)),
            cover: z.object({
                src: image(),
                alt: z.string(),
            }),
        }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    articles: articlesCollection,
};
