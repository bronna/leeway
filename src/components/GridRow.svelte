<script>
    export let gridItems = []
    export let headerTitle = "Projects"
    
    let scrollContainer;
    let showArrows = false;
    const scrollAmount = 400;

    function checkOverflow() {
        if (scrollContainer) {
            showArrows = scrollContainer.scrollWidth > scrollContainer.clientWidth;
        }
    }

    function scrollLeft() {
        if (scrollContainer) {
            scrollContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    function scrollRight() {
        if (scrollContainer) {
            scrollContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    function isImage(item) {
        return item.imageUrl && item.imageUrl.trim() !== '';
    }

    function getItemWidth(item) {
        const baseWidth = '20rem';
        if (item.columnSpan) {
            return `calc(${baseWidth} * ${item.columnSpan})`;
        }
        return baseWidth;
    }

    // Check for overflow on mount and window resize
    import { onMount } from 'svelte';
    
    onMount(() => {
        checkOverflow();
        
        // Add resize observer to check overflow when container size changes
        const resizeObserver = new ResizeObserver(() => {
            checkOverflow();
        });
        
        if (scrollContainer) {
            resizeObserver.observe(scrollContainer);
        }

        return () => {
            resizeObserver.disconnect();
        };
    });
</script>

<div class="container">
    <header class="sticky-header">
        <h2 class="header-title">
            <span class="title-shadow">{headerTitle}</span>
            <span class="title-front">{headerTitle}</span>
        </h2>
        {#if showArrows}
            <div class="nav-arrows">
                <button class="arrow-button" on:click={scrollLeft} aria-label="Scroll left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6"/>
                    </svg>
                </button>
                <button class="arrow-button" on:click={scrollRight} aria-label="Scroll right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                    </svg>
                </button>
            </div>
        {/if}
    </header>

    <div 
        class="scroll-container" 
        bind:this={scrollContainer}
    >
        <div class="portfolio-row">
            {#each gridItems as item}
                {#if item.projectUrl}
                    <a 
                        href={item.projectUrl} 
                        class="portfolio-item"
                        style="flex: 0 0 {getItemWidth(item)};"
                    >
                        {#if isImage(item)}
                            <img src={item.imageUrl} alt={item.title} />
                        {:else}
                            <div class="text-content">
                                <h3>{item.title}</h3>
                            </div>
                        {/if}
                    </a>
                {:else}
                    <div 
                        class="portfolio-item"
                        style="flex: 0 0 {getItemWidth(item)};"
                    >
                        <div class="text-content">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</div>

<style>
    .container {
        position: relative;
        width: 100%;
        margin-bottom: 2rem;
    }

    .sticky-header {
        top: 0;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header-title {
        font-family: "Bungee", sans-serif;
        font-size: 1.1rem;
        text-transform: uppercase;
        letter-spacing: 0.03rem;
        margin: 0;
        position: relative;
        display: inline-block;
    }

    .title-shadow {
        position: absolute;
        left: -2px;
        top: 2px;
        color: #f9257a;
    }

    .title-front {
        position: relative;
        color: white;
    }

    .nav-arrows {
        display: flex;
        gap: 0.5rem;
    }

    .arrow-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border: none;
        background: none;
        color: var(--color-fg);
        cursor: pointer;
        padding: 0;
        transition: color 0.2s ease;
    }

    .arrow-button:hover {
        color: #f89fc3;
    }

    .arrow-button:focus {
        outline: none;
    }

    .arrow-button:focus-visible {
        outline: 2px solid #f89fc3;
        outline-offset: 2px;
    }

    .scroll-container {
        width: 100%;
        overflow-x: auto;
        padding: 0 2rem 1.3rem 2rem;
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .scroll-container::-webkit-scrollbar {
        display: none;
    }

    .portfolio-row {
        display: flex;
        flex-direction: row;
        gap: 1.4rem;
        min-width: min-content;
    }

    .portfolio-item {
        height: 12rem;
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease-in-out;
        overflow: hidden;
        border: solid 10px var(--color-bg);
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    a.portfolio-item {
        text-decoration: none;
        color: inherit;
    }

    .portfolio-item:hover {
        transform: scale(1.02);
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    a.portfolio-item:hover {
        cursor: pointer;
    }

    .portfolio-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .text-content {
        background-color: none;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
    }

    .text-content h3 {
        font-family: "Hanken Grotesk", sans-serif;
        margin: 0;
        font-size: 3.4rem;
        font-weight: 800;
        font-variation-settings: "wght" 200;
        line-height: 3.6rem;
        letter-spacing: -0.03rem;
    }

    @media (max-width: 640px) {
        .sticky-header {
            padding: 0.75rem 1rem;
        }

        .header-title {
            font-size: 1rem;
        }

        .scroll-container {
            padding: 0 1rem 1rem 1rem;
        }

        .arrow-button {
            width: 1.75rem;
            height: 1.75rem;
        }

        .arrow-button svg {
            width: 20px;
            height: 20px;
        }
    }
</style>