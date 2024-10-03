<script>
	// shadow, plain, line, bubble
	import wordmark from "$svg/logo.svg"
	import HamburgerIcon from "$components/HamburgerIcon.svelte";
	import NavLinks from "$components/NavLinks.svelte"

	let width = '110px'

	let menuOpen = false

	function toggleMenu() {
		menuOpen = !menuOpen
	}

	function slideAndFade(node, { delay = 0, duration = 100 }) {
		return {
		delay,
		duration,
		css: t => `
			transform: translateX(${(1 - t) * 100}%);
			opacity: ${t};
		`
		}
	}
</script>


<header>
	<div class="wordmark" style="width:{width};">
		<a 
			href="https://leeway.studio" 
			aria-label="Google Placeholder" 
			target="_self"
			class="wordmark-text"
		>
			{@html wordmark}
		</a>
	</div>

	<HamburgerIcon isOpen={menuOpen} on:click={toggleMenu} />

	{#if menuOpen}
		<nav class="mobile-nav" transition:slideAndFade>
			<NavLinks direction="vertical" colorTheme="dark" />
		</nav>
	{/if}
</header>


<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
	}

	@media (max-width: 768px) {
		header {
			padding: 1rem 1rem;
		}
	}

	.wordmark {
		/* margin: 0 auto; */
		padding: 1rem 0rem;
		display: inline-block;
	}

	.wordmark :global(svg) {
		width: 100%;
		height: auto;
	}

	.wordmark a {
		border: none;
		display: block;
		color: var(--color-fg);
		text-decoration: none;
	}

	.wordmark a:hover {
		background-color: transparent;
	}

	.wordmark-text {
		font-size: 1.5em;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.mobile-nav {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: 80%;
		max-width: 300px;
		opacity: 0.94;
		background-color: var(--color-gray-900);
		padding: 5rem 1rem 1rem;
		box-shadow: 0 8px 16px rgba(0,0,0,0.1);
		z-index: 10;
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 768px) {
		.nav-links {
			display: none;
		}
	}
</style>
