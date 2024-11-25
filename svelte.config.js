import adapterStatic from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import autoprefixer from "autoprefixer";

const preprocess = sveltePreprocess({
	postcss: {
		plugins: [autoprefixer]
	}
});

const config = {
	// Add .svx as an extension for MDsveX
	extensions: [".svelte", ".svx", ".md"],

	preprocess: [
		mdsvex({
			extensions: [".svx", ".md"],
		})
	],

	kit: {
		adapter: adapterStatic({ strict: false }),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404 errors for missing assets
				if (path.includes('/assets/') && message.includes('404')) {
					return;
				}
				// Throw other errors
				throw new Error(message);
			}
		}
	},
	vitePlugin: {
		// experimental: {
		// 	inspector: { holdMode: true },
		// }
	}
};

export default config;
