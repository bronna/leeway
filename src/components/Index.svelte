<script>
	import { getContext } from "svelte"
	import { projects } from "$data/projectData.js"
	import Grid from "$components/Grid.svelte"
	import Footer from "$components/Footer.svelte"
    import Placeholder from "./Placeholder.svelte";

	// const copy = getContext("copy")
	// const data = getContext("data")

	const gridItems = projects.map(project => ({
        imageUrl: project.imageUrl,
        title: project.title,
        projectUrl: `/${project.slug}`,
    }))

	// Add text-only items here
    gridItems.push(
        {
            title: 'using design to make information more accessible',
            // No projectUrl for this item
        },
        {
            title: 'The immense persuasiveness of a mind which has completely mastered its perspective',
            // No projectUrl for this item
        }
    );
</script>

<Placeholder />
<!-- <Grid {gridItems} /> -->
<Footer />
