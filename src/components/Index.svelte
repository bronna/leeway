<script>
    import { getContext, onMount } from "svelte"
    import { projects, tutorials } from "$data/projectData.js"
    import GridRow from "$components/GridRow.svelte"

    const COLORS = {
        white: { base: '#FFFFFF', opacity: 0.6 },
        pink: { base: '#f89fc3', opacity: 0.7 },
        yellow: { base: '#FFF380', opacity: 0.6 },
        orange: { base: '#FFB347', opacity: 0.6 }
    }

    // Background animation logic
    let circles = []
    const TOTAL_CIRCLES = 60 
    const MIN_SIZE = 2
    const MAX_SIZE = 8
    
    function createCircle() {
        // Randomly select a color
        const colorKeys = Object.keys(COLORS)
        const colorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)]
        const color = COLORS[colorKey]

        return {
            id: Math.random().toString(36).substr(2, 9),
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
            duration: 3000 + Math.random() * 4000,
            delay: Math.random() * 2000,
            startScale: 0.3 + Math.random() * 0.3,
            endScale: 0.8 + Math.random() * 0.4,
            color: color.base,
            baseOpacity: color.opacity
        }
    }

    onMount(() => {
        // Initialize circles
        circles = Array(TOTAL_CIRCLES).fill(null).map(createCircle)
    })

    const projectsRow = projects.map(project => ({
        imageUrl: project.imageUrl,
        title: project.title,
        projectUrl: `/${project.slug}`,
    }))

    const tutorialsRow = tutorials.map(tutorial => ({
        imageUrl: tutorial.imageUrl,
        title: tutorial.title,
        projectUrl: `/${tutorial.slug}`,
    }))
</script>

<div class="background">
    <svg width="100%" height="100%">
        <defs>
            {#each circles as circle}
                <radialGradient id="grad-{circle.id}">
                    <stop offset="0%" stop-color={circle.color} stop-opacity={circle.baseOpacity} />
                    <stop offset="100%" stop-color={circle.color} stop-opacity="0" />
                </radialGradient>
            {/each}
        </defs>

        {#each circles as circle}
            <circle
                cx="{circle.x}%"
                cy="{circle.y}%"
                r="{circle.size}"
                fill="url(#grad-{circle.id})"
            >
                <!-- Scale animation -->
                <animate
                    attributeName="r"
                    from="{circle.size * circle.startScale}"
                    to="{circle.size * circle.endScale}"
                    dur="{circle.duration}ms"
                    begin="{circle.delay}ms"
                    repeatCount="indefinite"
                />
                
                <!-- Opacity animation -->
                <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="{circle.duration}ms"
                    begin="{circle.delay}ms"
                    repeatCount="indefinite"
                />
            </circle>
        {/each}
    </svg>
</div>

<div class="content">
    <div class="created-by">
        data visualization by Brianna Wilson
    </div>

    <GridRow 
        gridItems={tutorialsRow}
        headerTitle="Tutorials"
    />

    <GridRow 
        gridItems={projectsRow}
        headerTitle="Projects"
    />
</div>

<style>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
    }

    .background svg {
        width: 100%;
        height: 100%;
    }

    .content {
        position: relative;
        z-index: 1;
    }

    .created-by {
        margin: 1rem 2rem 3rem 2rem;
        font-family: 'Bungee Shade', sans-serif;
        font-size: 4.6em;
        font-weight: 900;
        color: #FFF380;
        max-width: 1100px;
    }
</style>