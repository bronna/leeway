<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import Index from "$components/Index.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";

	export let data;

	version();

	const preloadFont = [
		"assets/fonts/inriaserif-light-webfont.woff2",
		"assets/fonts/inriaserif-regular-webfont.woff2",
		"assets/fonts/inriaserif-bold-webfont.woff2",
		"assets/fonts/inriasans-light-webfont.woff2",
		"assets/fonts/inriasans-regular-webfont.woff2",
		"assets/fonts/inriasans-bold-webfont.woff2",
		"assets/fonts/barlow-light-webfont.woff2",
		"assets/fonts/barlow-regular-webfont.woff2",
		"assets/fonts/barlow-bold-webfont.woff2",
	];

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);
	setContext("data", data.data);
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<Index />
