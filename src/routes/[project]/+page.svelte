<script>
    import { page } from '$app/stores'
    import { projects } from '$data/projectData.js'
    import MicroCMS from '$components/helpers/MicroCMS.svelte'

    $: project = projects.find(p => p.slug === $page.params.project)
</script>


{#if project}
    <h1>{project.title}</h1>
    <img src={project.imageUrl} alt={project.title} />
    <p>{project.description}</p>
{:else}
    <h1>Page not found</h1>
{/if}