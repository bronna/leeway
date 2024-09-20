<script>
    export let gridItems = []

    function isImage(item) {
        return item.imageUrl && item.imageUrl.trim() !== '';
    }

    function getGridSpan(item) {
        let style = '';
        if (item.columnSpan) {
            style += `grid-column: span ${item.columnSpan};`;
        }
        if (item.rowSpan) {
            style += `grid-row: span ${item.rowSpan};`;
        }
        return style;
    }
</script>


<div class="portfolio-grid">
    {#each gridItems as item}
      {#if item.projectUrl}
        <a href={item.projectUrl} class="portfolio-item" style={getGridSpan(item)}>
          {#if isImage(item)}
            <img src={item.imageUrl} alt={item.title} />
          {:else}
            <div class="text-content">
              <h3>{item.title}</h3>
            </div>
          {/if}
        </a>
      {:else}
        <div class="portfolio-item" style={getGridSpan(item)}>
          <div class="text-content">
            <h3>{item.title}</h3>
          </div>
        </div>
      {/if}
    {/each}
</div>


<style>
    .portfolio-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 12rem;
        gap: 1.4rem;
        padding: 22px 32px;
    }
  
    @media (min-width: 640px) {
        .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
  
    @media (min-width: 960px) {
        .portfolio-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
  
    .portfolio-item {
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease-in-out;
        min-height: 12rem;
        overflow: hidden;
    }

    a.portfolio-item {
        text-decoration: none;
        color: inherit;
    }
  
    .portfolio-item:hover {
        transform: scale(1.02);
        cursor: pointer;
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
    }

    .text-content h3 {
        margin: 0;
        font-family: "Inria Serif", serif;
        font-size: 3.4rem;
        font-weight: 700;
        line-height: 3.6rem;
        letter-spacing: -0.03rem;
    }
</style>