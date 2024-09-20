<script>
	import "$styles/app.css";
	import Header from "$components/Header.svelte";
</script>


<Header />
<main id="content">
	<slot />
</main>


<style>
	main {
		height: 100vh;
	}
</style>