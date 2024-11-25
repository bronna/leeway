<script>
	import { onMount } from "svelte";
	import inView from "$actions/inView.js";
	import wordmark from "$svg/logo.svg";

	let localURL;
	let stories = [];

	let width = '110px'

	const v = Date.now();
	const url = ``;

	const links = [
		{ name: "about", url: "/about" },
		{ name: "facebook", url: "" },
		{ name: "twitter", url: "" },
		{ name: "instagram", url: "" },
		{ name: "patreon", url: "" },
		{ name: "newsletter", url: "" },
		{ name: "rss", url: "" }
	];

	// onMount(async () => {
	// 	localURL = window.location.href;
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	stories = data.filter((d) => !localURL.includes(d.url)).slice(0, 4);
	// });
</script>

<footer>
	<!-- <section class="stories">
		{#each stories as { hed, url, image }}
			{@const href = url.startsWith("http")
				? url
				: `https://leeway.studio/${url}`}
			<div class="story">
				<a {href}>
					<img
						src="https://leeway/studio/common/assets/thumbnails/640/{image}.jpg"
						alt="thumbnail"
					/>
					<span>{hed}</span>
				</a>
			</div>
		{/each}
	</section> -->

	<section class="about">
		<div class="wordmark" style="width:{width};">
			{@html wordmark}
		</div>
		<p class="fields">
			product design &nbsp; / &nbsp; data visualization
		</p>
	</section>

	<!-- <section class="links">
		<ul>
			{#each links as link}
				<li>
					<a href={link.url} target="_self">
						<span>{link.name.toUpperCase()}</span>
					</a>
				</li>
			{/each}
		</ul>
	</section> -->
</footer>

<style>
	footer {
		background-color: var(--color-gray-900);
		color: var(--color-gray-200);
		font-family: var(--sans);
		padding: 3em 1em;
		margin-top: 6em;
	}

	a,
	a:visited,
	a:hover {
		color: var(--color-bg);
	}

	.fields {
		letter-spacing: 0.015rem;
	}

	.stories {
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		max-width: 70em;
	}

	.story {
		display: block;
		width: 100%;
		border: none;
		margin-bottom: 3rem;
	}

	.story a {
		display: block;
		font-weight: 900;
		text-decoration: none;
		border: none;
	}

	.story span {
		display: block;
		margin-top: 1em;
		line-height: 1.2;
	}

	.wordmark {
		max-width: 10em;
		margin: 1em auto;
	}

	.wordmark :global(svg) {
		width: 100%;
		height: auto;
	}

	.about {
		margin: 3rem auto;
		margin-top: 0;
		text-align: center;
	}

	.links ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.links li {
		display: flex;
		padding: 0.5em 1em;
	}

	.links a {
		display: flex;
		border: none;
		align-items: center;
		text-decoration: none;
	}

	.links span {
		margin-left: 0.5em;
	}

	@media only screen and (min-width: 30em) {
		.story {
			width: 50%;
			padding: 0 1em;
		}
	}

	@media only screen and (min-width: 50em) {
		.story {
			width: 25%;
			padding: 0 1em;
		}
	}
</style>
