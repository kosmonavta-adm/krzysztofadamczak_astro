import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx(), sitemap()],
    devToolbar: {
        enabled: false,
    },
    prefetch: true,
    site: 'https://krzysztofadamczak.pl/',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
});
