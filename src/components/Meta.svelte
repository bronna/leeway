<script>
	export let title = "Leeway Data Visualization";
	export let description = "Communication design, information visualization and data storytelling";
	export let url = "https://leeway.studio";
	export let keywords = "Data Visualization, Information Design, Data Storytelling";
	export let preloadFont = [];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Leeway" />
	<meta name="news_keywords" content={keywords} />

	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="Leeway" />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:locale" content="en_US" />

	<meta property="og:image" content="{url}/assets/social-facebook.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="628" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://leeway.studio" />
	<meta name="twitter:creator" content="@leewaystudio" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image:src" content="{url}/assets/social-twitter.jpg" />

	<meta name="robots" content="max-image-preview:large" />

	<link rel="canonical" href="{url}/" />

	{#each preloadFont as href}
		<link rel="preload" {href} as="font" type="font/ttf" crossorigin />
	{/each}
</svelte:head>
